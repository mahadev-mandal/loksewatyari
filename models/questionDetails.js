import mongoose from "mongoose";

const questionDetails = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    likes: [
        {
            userId: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    disLikes: [
        {
            userId: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now()
            }
        }
    ],
    comments: [
        {
            userId: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now()
            },
            comment: String
        }
    ],
    views:Number

})

export default mongoose.model.questionDetails || mongoose.model('questionDetails', questionDetails)