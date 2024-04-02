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

// update an user
router.put('/post/update/:id', (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updatedPost => {
            if (!updatedPost) {
                return res.status(404).json({
                    error: "Post not found"
                });
            }
            return res.status(200).json({
                success: "Post updated successfully!",
                updatedPost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
});

// // and also we can write above update code below as well
// // Update a post
// router.put('/post/update/:id', async (req, res) => {
//     try {
//         const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

//         if (!updatedPost) {
//             return res.status(404).json({
//                 error: "Post not found"
//             });
//         }

//         return res.status(200).json({
//             success: "Post updated successfully!",
//             updatedPost
//         });
//     } catch (err) {
//         return res.status(400).json({
//             error: err.message
//         });
//     }
// });


// delete a post
router.delete('/post/delete/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
        .then(deletedPost => {
            if (!deletedPost) {
                return res.status(404).json({
                    error: "Post not found"
                });
            }
            return res.status(200).json({
                success: "Post deleted successfully!",
                deletedPost
            });
        })
        .catch(err => {
            return res.status(400).json({
                error: err.message
            });
        });
})


export default router;
