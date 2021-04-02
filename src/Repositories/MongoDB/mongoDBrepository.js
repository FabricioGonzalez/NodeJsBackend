import mongoose from 'mongoose';

export default class MongoDBRepository {
  constructor(Model) {
    this.model = Model;
  }

  async connect() {
    const connection = mongoose
      .connect(
        'mongodb+srv://adm:<password>@cluster0.3tji1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      )
      .catch(error);
    {
      console.error(error);
    }

    return connection;
  }

  async save(object) {
    const data = await this.model.create(object);
    return data;
  }

  async listAll() {
    return await this.model.find({
      where: { status: 'available' },
    });
  }

  async listBy({ filter }) {
    return await this.model.find({
      $where: {
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
