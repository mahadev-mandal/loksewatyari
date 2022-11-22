import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    questionId:{
        type:Number,
        required:true,
        unique:true,
    },
    options: {
        type: Array,
    },
    correctOption: {
        type: String,
    },
    description: String,
    keywords: String,
    entryDate: {
        type: String,
        required: true,
        default: Date.now()
    },
    entryBy: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    levels: Array,
    subjects: Array,
    branch: Array,
    MCQ: Boolean,
    GK: Boolean,
    likes: [
        {
            userId: String,
            count: {
                type: Number,
                default: 0
            }
        }
    ],
    disLikes: [
        {
            userId: String,
            count: {
                type: Number,
                default: 0
            }
        }
    ],
})

export default mongoose.models.question || mongoose.model('question', questionSchema);