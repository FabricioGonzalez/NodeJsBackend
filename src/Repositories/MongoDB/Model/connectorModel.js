import mongoose from 'mongoose';
import connectorSchema from '../Schema/connectorSchema.js';

const connectorModel = mongoose.model('connector', connectorSchema);
export default connectorModel;

