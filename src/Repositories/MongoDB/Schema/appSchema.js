import mongoose from 'mongoose';

const { Schema } = mongoose;

const appSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Key: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default appSchema;
