import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String },
    message: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
})
const Reviews = mongoose.model('Reviews', ReviewSchema) || mongoose.models.Reviews;
export default Reviews;
