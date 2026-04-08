const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MealItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 1, min: 1 },
  cost: { type: Number, required: true, min: 0 }
}, { _id: false });

const ApprovalSchema = new Schema({
  approver_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  decision: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  comment: { type: String },
  approved_at: { type: Date }
}, { _id: false });

const SignatureSchema = new Schema({
  signer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  signed_at: { type: Date, default: Date.now },
  signature: { type: String }
}, { _id: false });

const mealRequestSchema = new Schema({
  requester_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  request_date: { type: Date, default: Date.now },
  meal_date: { type: Date, required: true },
  location: { type: String, required: true },
  items: { type: [MealItemSchema], default: [] },
  total_cost: { type: Number, required: true, min: 0 },
  purpose: { type: String, required: true },
  status: {
    type: String,
    enum: ['draft', 'pending', 'approved', 'signed', 'rejected'],
    default: 'draft'
  },
  approvals: { type: [ApprovalSchema], default: [] },
  signatures: { type: [SignatureSchema], default: [] },
  notes: { type: String }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('MealRequest', mealRequestSchema);