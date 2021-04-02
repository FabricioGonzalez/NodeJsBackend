import mongoose from 'mongoose';

export default class MongoDBRepository {
  constructor(Model) {
    this.model = Model;
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
    return await this.model
      .find({
        Status: 'available',
      })
      .limit(limit);
  }

  async listBy({ filter }) {
    return await this.model.find({
      where: {
        status: 'available',
        filter,
      },
    });
  }

  async update(id, object) {
    await this.model.findOneAndUpdate(
      {
        $where: {
          _id: id,
        },
      },
      { object },
      { new: true },
    );
  }

  async delete(id) {
    this.model.findOneAndUpdate(
      {
        where: {
          _id: id,
        },
      },
      {},
      { new: true },
    );
  }
}
