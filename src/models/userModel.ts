import mongoose, { Document, Model } from 'mongoose';
import { IUser } from '../lib/types';

export interface UserData extends IUser {
  password: string;
}

export interface IUserDocument extends UserData, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const User: Model<IUserDocument> =
  mongoose.models?.user || mongoose.model('user', userSchema);

export default User;
