const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';  // process.env.SECRET
const expiration = '2h'; 

module.exports = {
  authMiddleware: ({ req }) => {
    let token = req.body.token || req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) return req;

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },
  signToken: ({ email, username, _id, admin}) => {
    const payload = { email, username, _id, admin };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};