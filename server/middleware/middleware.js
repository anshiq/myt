const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendJwtToken = (_id, name) => {
  let secret = process.env.jwt_sec;
  data = {
    id: _id,
    name: name,
  };
  const token = jwt.sign(data, secret);
  return token;
};
const verifyToken = (req, res, next) => {
  const { token } = req.body;
  if (token) {
    const secret = process.env.jwt_sec;
    const decode = jwt.verify(token, secret);
    console.log(decode.name);
    req.user = decode.id;
    next();
  } else {
    res.send("failed to authenticate.");
  }
};
const encryptPassword = async (password) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};
const comparePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword); // returns whether true or false
  return result;
};
module.exports = {
  sendJwtToken,
  verifyToken,
  encryptPassword,
  comparePassword,
};