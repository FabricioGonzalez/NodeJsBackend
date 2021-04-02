import  mongoose from 'mongoose'

const { Schema } = mongoose;

export default connectorSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Type: {
    type: String,
    required: true
  },
  Privacy: {
    type: String,
    required: true
  },
  BaseURL: {
    type: String,
    required: true
  },
  LogoURL: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    required: true
  },

  
},{
  timestamps: {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
}})