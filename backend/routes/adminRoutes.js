const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware.js');
const adminMiddleware = require('../middleware/adminMiddleware.js');
const User = require('../models/user.js');

// ===============================
// APPROVE USER (ADMIN ONLY)
// ===============================
router.put(
    '/approve-user/:id',
    authMiddleware,
    adminMiddleware,
    async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            user.isApproved = true;
            await user.save();

            res.status(200).json({
                message: 'User approved successfully',
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    isApproved: user.isApproved
                }
            });

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
);

module.exports = router;