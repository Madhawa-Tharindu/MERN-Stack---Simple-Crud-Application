import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    postCategory: {
        type: String,
        required: true
    },
})

const Post = mongoose.model('Post', postSchema);

export default Post