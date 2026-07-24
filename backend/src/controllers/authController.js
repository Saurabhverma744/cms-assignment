const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username is correct
    if (username !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    // Stored password (hashed)
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, hashedPassword);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const token = generateToken("admin");

    res.status(200).json({
      success: true,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  loginAdmin,
};
