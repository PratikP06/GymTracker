const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

function middleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not logged in" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Session expired" });
  }
}

module.exports = middleware;