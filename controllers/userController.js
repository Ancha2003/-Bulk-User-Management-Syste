const User = require("../models/User");


// BULK CREATE USERS
exports.bulkCreateUsers = async (req, res) => {
  try {

    const users = req.body;

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({
        message: "Request body must be a non-empty array"
      });
    }

    const result = await User.insertMany(users, { ordered: false });

    res.status(201).json({
      message: "Users inserted successfully",
      insertedCount: result.length
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};



// BULK UPDATE USERS
exports.bulkUpdateUsers = async (req, res) => {
  try {

    const users = req.body;

    if (!Array.isArray(users) || users.length === 0) {
      return res.status(400).json({
        message: "Request body must be a non-empty array"
      });
    }

    const operations = users.map(user => ({
      updateOne: {
        filter: { email: user.email },
        update: { $set: user }
      }
    }));

    const result = await User.bulkWrite(operations);

    res.status(200).json({
      message: "Users updated successfully",
      result
    });

  } catch (error) {

    res.status(500).json({
      error: error.message
    });

  }
};