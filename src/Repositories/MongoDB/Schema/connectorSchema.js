import mongoose from 'mongoose';

const { Schema } = mongoose;

const connectorSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Type: {
      type: String,
      required: true,
    },
    Privacy: {
      type: String,
      required: true,
    },
    BaseURL: {
      type: String,
      required: true,
    },
    LogoURL: {
      type: String,
      required: true,
    },
    Category: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Status: {
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
  },
);

export default connectorSchema;
