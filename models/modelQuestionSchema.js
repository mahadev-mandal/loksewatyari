import mongoose from "mongoose";

const modelQuestionSchema = new mongoose.Schema({
    modelId: {
        type: Number,
        required: true,
        unique: true
    },
    MCQ: {

    },
    Gk: {

    },
    subjectives: {

    }
})

export default mongoose.models('modelQuestion') || mongoose.model('modelQuestion', modelQuestionSchema);