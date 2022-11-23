import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
    questionId: {
        type: Number,
        required: true,
        unique: true,
    },
    levels: Array,
    subjects: Array,
    branch: Array,
    GK: Boolean,
    category:String
})

export default mongoose.models.mcq || mongoose.model('mcq', mcqSchema)