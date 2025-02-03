const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,     // Add this
  removeFriend   // Add this
} = require('../../controllers/userController');

// Route to get all users and create a new user
router.route('/')
  .get(getUsers)
  .post(createUser);

// Route to get, update, or delete a user by ID
router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// Route to add and remove friends
router.route('/:userId/friends/:friendId')
  .post(addFriend)    // Add friend route
  .delete(removeFriend);  // Remove friend route

module.exports = router;