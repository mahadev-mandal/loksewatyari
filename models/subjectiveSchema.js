import mongoose from "mongoose";

const subjectiveSchema = new mongoose.Schema({
    questionId: {
        type: Number,
        required: true,
        unique: true,
    },
    levels: Array,
    subjects: Array,
    branch: Array,
    GK: Boolean
});

export default mongoose.models.subjective || mongoose.model('subjective', subjectiveSchema);