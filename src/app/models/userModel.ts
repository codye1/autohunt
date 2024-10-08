import mongoose, { Document, Model } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {
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
  }
);

const User: Model<IUserDocument> =
  mongoose.models?.user || mongoose.model('user', userSchema);

export default User;
