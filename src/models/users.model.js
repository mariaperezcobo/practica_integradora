import mongoose from 'mongoose'

const userColection = 'users'

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name : String,
    email: {
        type: String,
        unique: true,
    }
})

const userModel = mongoose.model(userColection, userSchema)

export default userModel