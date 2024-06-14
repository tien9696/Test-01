import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//import UserModel from '../models/userModel.js';


dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001

const dbUrl = `mongodb+srv://camtiennguyen96:dr3pQHvLawLQzhFG@cluster0.69c8nuh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(express.json())
app.use(cors());


const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl)
    console.log(`Connect to database successfully!!!`)
  } catch (error) {
 console.log(error)
 process.exit(1)
  }
}

connectDb().then(() => {
    app.listen(PORT, (err) => {
    if(err) {
      console.log(err)
      return
    }
    console.log(`Server is starting at http://localhost:${PORT}`)
  }
  )
  })
