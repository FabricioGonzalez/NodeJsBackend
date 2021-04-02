import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

export default class MongoDBRepository {
  constructor(ConnectorModel, ApplicationModel) {
    this.model = ConnectorModel;
    this.appModel = ApplicationModel;
  }

  async connect() {
    const connection = mongoose
      .connect(process.env.MONGO, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .catch(console.error);

    return connection;
  }

  async save(object) {
    /*  if (!!(await this.model.findOne({ Name: object.Name }))) {
      return false;
    } */
    const data = await this.model.create(object);
    return { ok: true, data };
  }

  async listAll(limit) {
    const data = await this.model
      .find({
        Status: 'available',
      })
      .limit(limit);
    return { ok: true, data };
  }

  async listBy(filter) {
    const data = await this.model.find({
      ...filter,
      Status: 'available',
    });
    return { ok: true, data };
  }

  async update(id, object) {
    const data = await this.model.findByIdAndUpdate(
      id,
      { ...object },
      { new: true },
    );

    return { ok: true, data };
  }

  async delete(id) {
    const data = await this.model.findByIdAndUpdate(
      id,
      { Status: 'unavailable' },
      { new: true },
    );
    return { ok: true, data };
  }
  async restore(id) {
    const data = await this.model.findByIdAndUpdate(
      id,
      { Status: 'available' },
      { new: true },
    );
    return { ok: true, data };
  }

  async listApp(limit) {
    const data = await this.appModel.find().limit(limit);
    return { ok: true, data };
  }

  async generateKey({ Name, Key }) {
    const rounds = 10;

    const encrypted = bcrypt.hashSync(Key, rounds);

    const obj = { Name: Name, Key: (Key = encrypted) };
    /* 
    if (!!(await this.appModel.findOne({ Name: name }))) {
      return false;
    } */
    const data = await this.appModel.create(obj);

    return { ok: true, data: data._id };
  }

  async compareKey({ Id, Key }) {
    const data = await this.appModel.findById(Id);

    const result = await bcrypt.compare(Key, data.Key);

    if (result === true) return { ok: true, data };
  }
}
