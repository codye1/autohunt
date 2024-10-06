
import mongoose, { Document, Model } from "mongoose";

export interface ISession {
  userId:string,
  expiresAt:Date
}

export interface ISessionDocument extends ISession, Document {
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema<ISessionDocument>(
  {
    userId: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Session: Model<ISessionDocument> =
  mongoose.models?.session || mongoose.model("session", sessionSchema);

export default Session;