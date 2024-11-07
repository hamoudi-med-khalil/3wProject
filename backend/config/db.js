import { connect } from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
    try{
        const conn = await connect('mongodb+srv://mohamedkhalilhamoudi1:YXYb4vVKl5im6nso@3w.nnbzk.mongodb.net/')
        console.log(`MongoDB connected ${conn.connection.host}`.yellow)
    } catch (error){
        console.log(error);
        process.exist(1)
    
    }
}

export default connectDB