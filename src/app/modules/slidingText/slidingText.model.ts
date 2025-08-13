import { Schema, model, Document } from 'mongoose';
import { ISlidingText } from './slidingText.interface';


const SlidingTextSchema = new Schema<ISlidingText>(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  },
  { timestamps: true }
);

const SlidingText = model<ISlidingText>('SlidingText', SlidingTextSchema);

export default SlidingText;