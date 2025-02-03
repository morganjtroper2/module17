# **Social Network API**

## **Description**
This is a **backend API** for a **social media platform**, built using **Node.js, Express, MongoDB, and Mongoose**. It allows users to create an account, post thoughts, react to thoughts, and manage a friends list.

## **Table of Contents**
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Users](#users)
- [Friends](#friends)
- [Thoughts](#thoughts)
- [Reactions](#reactions)
- [Testing with Insomnia](#testing-with-insomnia)
- [License](#license)
- [Authorship](#authorship)

  ## Walkthrough Video:
  https://drive.google.com/file/d/12zuTv5g2vE0RixmkszlNEt4R3j7e0xYR/view

---

## **Installation**
### **1. Clone the Repository**
```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/social-network-api.git
cd social-network-api
```
### **2. Install Dependencies**
```sh
npm instal
```

### **3. Set Up Environment Variables**
Create an .env in the root directory and add:
```sh
MONGODB_URI=mongodb://localhost:27017/socialNetworkDB
PORT=3001
```

### **4. Start The Server**
```sh
npm start
```
OR run with nodemon for auto-start:
```sh
npm run dev
```

### **5. Confirm the API is Running***
```sh
http://localhost:3001/api/users
```

## **Usage**

This API allows users to:
✅ Create a user account
✅ Manage friendships
✅ Post and delete thoughts
✅ React to thoughts

## **API Routes**

## **Users**

Get all users:
```sh
GET /api/users
```
Get a single user:
```sh
GET /api/users/:userId
```
Create a user:
```sh
GET /api/users/:userId
```
Body example:
```sh
{
  "username": "john_doe",
  "email": "john@example.com"
}
```
Update a user:
```sh
PUT /api/users/:userId
```
Delete a user
```sh
DELETE /api/users/:userId
```
## **Friends**

Add a friend:
```sh
POST /api/users/:userId/friends/:friendId
```
Remove a friend:
```sh
DELETE /api/users/:userId/friends/:friendId
```

## **Thoughts**

Get all thoughts:
```sh
GET /api/thoughts
```
Get one thought:
```sh
GET /api/thoughts/:thoughtId
```
Create a thought:
```sh
POST /api/thoughts
```
Body example:
```sh
{
  "thoughtText": "This is my first thought!",
  "username": "john_doe",
  "userId": "USER_ID_HERE"
}
```
Update a thought:
```sh
PUT /api/thoughts/:thoughtId
```
Delete a thought
```sh
DELETE /api/thoughts/:thoughtId
```

## **Reactions**

Add reaction to thought:
```sh
POST /api/thoughts/:thoughtId/reactions
```
Body example:
```sh
{
  "reactionBody": "Nice thought!",
  "username": "jane_doe"
}
```
Remove reaction:
```sh
DELETE /api/thoughts/:thoughtId/reactions/:reactionId
```

## **Testing With Insomnia**

1. Open Insomnia and create a new workspace.
2. Create Requests under a new “Social Network API” Collection.
3. Add Requests as per the API Routes listed above.
4. Set Headers for JSON Requests

 Click on 'Headers' and add:
 ```sh
Content-Type: application/json
```
Test Each Endpoint
1. Send a POST request to create a user.
2. Use the GET request to fetch users.
3. Add friends using the POST friends request.
4. Post thoughts and reactions.

## **License**

This project is licensed under the MIT License.

## **Authorship**

By Morgan Troper. Code and ReadME sourced from ChatGPT.
