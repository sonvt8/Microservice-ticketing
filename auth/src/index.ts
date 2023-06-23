import mongoose from 'mongoose';
import { app } from './app';
import { DatabaseConnectionError } from './errors/database-connection-error';


const start = async () => {
  if(!process.env.JWT_KEY){
    throw new Error("JWT_KEY must be defined");
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to Mongo');
  } catch (error) {
    console.log(error);
    throw new DatabaseConnectionError();
  }

  app.listen(3000, ()=> {
    console.log('listening on port 3000');
  });
}  

start();