import mongoose from 'mongoose';
import connectorSchema from '../Schema/connectorSchema';

const connectorModel = mongoose.model('connector', connectorSchema);
export default connectorModel;

connectorModel.findByIdAndUpdate()