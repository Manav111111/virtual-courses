import jwt from "jsonwebtoken";

const genToken = (userId) => {
  try {
    // include the userId inside an object so it’s clear in the payload
    const token = jwt.sign(
      { id: userId },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }    // you can use "7d" instead of "7days"
    );
    console.log(token);
    return token;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default genToken;
