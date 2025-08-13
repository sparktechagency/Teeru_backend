import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { slidingTextServices } from "./slidingText.service";
import httpStatus from 'http-status';

// Create or update sliding text
const setSlidingText = catchAsync(async (req: Request, res: Response) => {
  const { text, isActive = true } = req.body;

  const newSlidingText = await slidingTextServices.setSlidingText(text, isActive);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Sliding text saved successfully',
    data: newSlidingText,
  });
});

// Get current sliding text
const getSlidingText = catchAsync(async (req: Request, res: Response) => {
  const slidingText = await slidingTextServices.getSlidingText();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Sliding text fetched successfully',
    data: slidingText,
  });
});


export const slidingTextController = {
    setSlidingText,
    getSlidingText
}