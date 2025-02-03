const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,  // Add this
  removeReaction  // Add this
} = require('../../controllers/thoughtController');

// Route to get all thoughts and create a new thought
router.route('/')
  .get(getThoughts)
  .post(createThought);

// Route to get, update, or delete a thought by ID
router.route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Routes for handling reactions to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);  // Add reaction

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);  // Remove reaction

module.exports = router;