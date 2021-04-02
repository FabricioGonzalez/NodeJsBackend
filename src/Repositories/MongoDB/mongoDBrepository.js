import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export default class MongoDBRepository {
  constructor(ConnectorModel, ApplicationModel) {
    this.model = ConnectorModel;
    this.appModel = ApplicationModel;
  }

  async connect() {
    const connection = mongoose
      .connect(
        'mongodb+srv://adm:fabricio@cluster0.3tji1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        { useUnifiedTopology: true, useNewUrlParser: true },
      )
      .catch(console.error);

    return connection;
  }

  async save(object) {
    await this.model.create(object);
    return true;
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

  async generateKey(key, name) {
    const rounds = 10;

    const encripted = bcrypt.hashSync(key, rounds);

    const obj = { Name: name, Key: encripted };

    console.log(obj);

    await this.appModel.create(obj);

    return true;
  }

  async compareKey(id, key) {
    const data = this.appModel.findById(id);
    const result = bcrypt.compareSync(key, data.Key);

    if (result == true) {
      return { ok: true, data };
    }
  }
}
