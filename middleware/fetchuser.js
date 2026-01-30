const jwt = require("jsonwebtoken");
const JWT_SECRET = "Priyanshiisagoodg$irl";

const fetchuser = (req, res, next) => {
  // Get the user from the JWT token
  const token = req.header("auth-token");

  // If token is not present
  if (!token) {
    return res.status(401).json({
      error: "Please authenticate using a valid token",
    });
  }

  try {
    // Verify token
    const data = jwt.verify(token, JWT_SECRET);

    // Attach user to request object
    req.user = data.user;

    // Continue to next middleware / route
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Please authenticate using a valid token",
    });
  }
};

module.exports = fetchuser;
