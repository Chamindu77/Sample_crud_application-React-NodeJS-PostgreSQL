// auth.js (JWT Authentication Middleware)
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "") || req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.user = verified; // Pass user info from token to request object
    next(); // Proceed to next middleware or route
  } catch (error) {
    res.status(400).json({ message: "Invalid token." });
  }
};


