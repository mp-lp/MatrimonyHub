import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    
  //  const JWT_SECRET = process.env.JWT_SECRET;
    const authHeader = req.headers['authorization'];
 
  if (!authHeader || !authHeader.startsWith('Bearer ')) {

    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
 
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired token' });
  }
};

export default authMiddleware;
