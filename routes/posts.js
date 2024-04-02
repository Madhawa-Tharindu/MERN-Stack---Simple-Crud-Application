import express from 'express';
import Post from '../models/post.js';

const router = express.Router();

//save post

router.post('/post/save', async (req, res) => {
    const newPost = new Post(req.body);

    try {
        await newPost.save();
        res.status(200).json({
            success: "Post saved successfully!"
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
});

//get all posts
router.get('/posts', (req, res) => {
    Post.find().exec()
        .then(posts => {
            return res.status(200).json({
                success: true,
                existingPosts: posts
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

export default router;
