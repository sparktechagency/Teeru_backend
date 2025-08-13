import SlidingText from './slidingText.model';

// Get single sliding text
const getSlidingText = async () => {
  return await SlidingText.findOne();
};

// Create or update the single sliding text
const setSlidingText = async (text: string, isActive: boolean = true) => {
  const existing = await SlidingText.findOne();
  
  if (existing) {
    existing.text = text;
    existing.isActive = isActive;
    return await existing.save();
  }

  return await SlidingText.create({ text, isActive });
};

export const slidingTextServices = {
    setSlidingText,
    getSlidingText
}