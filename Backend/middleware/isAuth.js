import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    // 1️⃣ Get token from cookies
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // 2️⃣ Verify token using the same secret you used to sign it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //   ^^^ process.env.JWT_SECRET  (underscore, not dash)

    // 3️⃣ Attach user id to request for use in next middleware/routes
    req.userId = decoded.userId;

    next(); // allow the request to continue
  } catch (error) {
    console.error("Auth error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default isAuth;
