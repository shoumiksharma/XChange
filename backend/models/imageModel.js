import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        image: { 
            type: Buffer,
            required: true 
        },
        contentType: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        }
});

export const Image = mongoose.model('Image', imageSchema);

