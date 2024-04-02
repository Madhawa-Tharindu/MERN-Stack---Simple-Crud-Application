import express from 'express';
import Post from '.models/post.js';

const router = express.Router();

//save post

router.post('/post/save', (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err) => {
        if(err) {
            return res.status(400).json({
                error: err.message
            });
        }
        return res.status(200).json({
            success: "Post saved successfully!"
        });
    });
});

export default router;
