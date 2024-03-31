import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
class Connection{
    constructor(){
        try{
            mongoose.connect(process.env.DB_URL);
            console.log('Database connected successfully');
        }catch(err){
            console.log('Error while connecting to database');
            console.log(err);
        }
    }
}
export default Connection;