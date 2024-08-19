import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI)
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected successfully on host: ${connection.connection.host}, database: ${connection.connection.db.databaseName}`
    );
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
