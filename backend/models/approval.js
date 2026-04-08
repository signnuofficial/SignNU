const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const approvalSchema = new Schema({
  approver_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  meal_request_id: { type: Schema.Types.ObjectId, ref: 'MealRequest', required: true },
  decision: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  comment: { type: String },
  approved_at: { type: Date }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('Approval', approvalSchema);