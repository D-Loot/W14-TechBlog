// W13 - E-Commerce

const router = require('express').Router();
const { Comment, Post, User } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     // Get all projects and JOIN with user data
//     const commentData = await Post.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         {
//           model: Comment,
//           attributes: ['title'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     // Pass serialized data and session flag into template
//     res.render('post', {
//       comments,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', async (req, res) => {
//   console.log("Comment by ID")
//   try {
//     const commentData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         {
//           model: Comment,
//           attributes: ['title'],
//         },
//       ],
//     });
// console.log(commentData);

//     const comments = commentData.get({ plain: true });

//     res.render('post', {
//       ...comment,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// -----------------------------------------------------------------------------

router.get('/', async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const commentData = await Comment.findAll();
    res.status(200).json(commentData);
  } catch (err){
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
