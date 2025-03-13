import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true, 
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    locality: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    height: {
        type: String,
        required: true,
    },
    kile: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    employment: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
});
const Profile = mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
export default Profile;
