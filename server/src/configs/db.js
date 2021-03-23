import Mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    let dbConfig = {
      URI: undefined,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      },
    }
    process.env.NODE_ENV === 'production'
      ? (dbConfig.URI = process.env.MONGO_URI)
      : (dbConfig.URI = `mongodb://localhost:27017/dbTest`)

    const dbConnection = await Mongoose.connect(dbConfig.URI, dbConfig.options)
    console.log(`Database connected on: ${dbConnection.connection.host}`.success)
  } catch (error) {
    console.log(error.message.error)
  }
}
