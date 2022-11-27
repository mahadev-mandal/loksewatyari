import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true,
        index: true,
        trim:true,
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
})

export default mongoose.models.question || mongoose.model('question', questionSchema);