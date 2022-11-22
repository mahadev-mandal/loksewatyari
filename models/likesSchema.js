import mongoose, { Schema } from "mongoose";

const likeDisliskeCommentSchema = new mongoose.Schema({
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

})

export default mongoose.model.likeDisliskeComment || mongoose.model('likeDislikeComment', likeDisliskeCommentSchema)