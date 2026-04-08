const express = require('express');
const router = express.Router();

const {
    getAllApprovals,
    getSingleApproval,
    createApproval,
    deleteApproval,
    updateApproval,
} = require('../controllers/requestController.js');

//1. Get all approvals
router.get('/', getAllApprovals);

//2. Get a single approval by ID
router.get('/:id', getSingleApproval);

//3. Create a new approval
router.post('/', createApproval);

//4. Delete an approval
router.delete('/:id', deleteApproval);

//5. Update an approval
router.patch('/:id', updateApproval);

module.exports = router;