const User = require('../models/User');

const createUser = async (req, res) => {
    const { full_name, username, professionalHeadline,  imageUrl} = req.body;
  
    const user = await User.create({
        full_name,
        username,
        professionalHeadline,
        imageUrl
    });
  
    if (user) return res.status(201).json({ msg: 'New User Stored' });
  
    return res.status(400).json({ msg: 'Error storing user' });
  };

  const getRecentUsers = async (req, res) => {
    const users = await User.find();
    if (users) return res.send(users);
    return res.status(400).json({ msg: 'Error getting recent users' });
  };

  
  module.exports = {
    createUser,
    getRecentUsers
  };