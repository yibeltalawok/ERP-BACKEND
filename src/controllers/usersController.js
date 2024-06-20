const User = require('../models/employeeModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create User
exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid user' });
      }
  
      // Compare hashed password with the provided password
      const validPassword = await bcrypt.compare(password,user.password);
      if (!validPassword) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      // Sign a JWT token with user id, email, and role
      const token = jwt.sign({ id: user.id, email: user.email ,role: user.role ,name:user.fullName },"ERP-habsha", { expiresIn: '20s' });
      // Return the user role, id, email, and token
      res.json({token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } 
;


