import mongoose from 'mongoose';
import appSchema from '../Schema/appSchema.js';

const appModel = mongoose.model('app', appSchema);
export default appModel;
