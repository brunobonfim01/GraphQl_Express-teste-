import mongoose, { Schema, Document, Object } from "mongoose";
import { User } from "./User";

type Post = Document & {
    content: String;
    author: String;
};

const PostSchema = new Schema({
    content: String,
    createAt: {
        type: "Date",
        default: Date.now,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

export default mongoose.model<Post>("Post", PostSchema);