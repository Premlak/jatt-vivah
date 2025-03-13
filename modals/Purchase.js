import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    expirationDate: {
        type: Date,
        required: true,
    },
});

const Subscription = mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema);

export default Subscription;
