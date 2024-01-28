const commentModel = require("../Modles/commentModel");

////////////////
///.............................................
const registerUser = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    return res.status(401).json({ error: error.message, success: false });
    // console.log(error);
  }
};

module.exports = {
  registerUser,
};
