import Event from './event.model';
import AppError from '../../error/AppError';
import httpStatus from 'http-status';
import { IEvent } from './event.interface';
import QueryBuilder from '../../builder/QueryBuilder';
import { Ticket } from '../ticket/ticket.model';

const createEvent = async (data: IEvent) => {
  const newEvent = new Event(data);
  await newEvent.save();
  return newEvent;
};

const updateEvent = async (id: string, data: Partial<IEvent>) => {
  const updatedEvent = await Event.findByIdAndUpdate(id, data, { new: true });
  if (!updatedEvent) {
    throw new AppError(httpStatus.NOT_FOUND, 'Event not found');
  }
  return updatedEvent;
};

const getAllEvents = async (query: Record<string, unknown>) => {
  const eventQuery = new QueryBuilder(Event.find({ isDeleted: false }).populate("category"), query)
    .search([]) // Add searchable fields if needed
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await eventQuery.modelQuery;
  const meta = await eventQuery.countTotal();
  return { meta, result };
};

const getSpecificCategoryEvents = async (categoryId: string,query: Record<string, unknown>) => {
  const eventQuery = new QueryBuilder(Event.find({ isDeleted: false, category: categoryId }).populate("category"), query)
    .search([]) // Add searchable fields if needed
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await eventQuery.modelQuery;
  const meta = await eventQuery.countTotal();
  return { meta, result };
};

const getSpecificEvent = async (id: string) => {
  const event = await Event.findById(id).populate("category");
  if (!event || event.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, 'Event not found');
  }
  return event;
};

const getUpcomingEventOfSpecificUser = async (userId: string) => {
  const now = new Date();

  const tickets = await Ticket.find({ userId })
    .populate({
      path: 'eventId',
      match: { date: { $gte: now } }, // Adjust field name to your Event model
      populate: { path: 'category' }
    })
    .lean();

  // Filter out tickets with no populated event (i.e., past events were excluded)
  const upcomingEvents = tickets
    .filter(ticket => ticket.eventId)
    .map(ticket => ticket.eventId);

  // Sort by date and time (earliest to latest)
  const sortedUpcomingEvents = upcomingEvents.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    
    // If the dates are the same, sort by time
    if (dateA === dateB) {
      const timeA = a.time.split(':').map(Number); // Assuming time is in "HH:mm" format
      const timeB = b.time.split(':').map(Number);
      
      // Compare hours and then minutes if hours are the same
      if (timeA[0] === timeB[0]) {
        return timeA[1] - timeB[1];
      }
      return timeA[0] - timeB[0];
    }
    
    return dateA - dateB; // Sort by date if dates are different
  });
  return sortedUpcomingEvents;
};

const softDeleteEvent = async (id: string) => {
  const event = await Event.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
  if (!event) {
    throw new AppError(httpStatus.NOT_FOUND, 'Event not found');
  }
  return null;
};

export const eventService = {
  createEvent,
  updateEvent,
  getAllEvents,
  getSpecificCategoryEvents,
  getUpcomingEventOfSpecificUser,
  getSpecificEvent,
  softDeleteEvent
};
