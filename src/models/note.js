
const { Schema, model } = require('mongoose');

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200
    },
    content: { type: String, default: '' },
    tags: { type: [String], default: [] },
    attachmentUrl: String,
    owner: String
  },
  { timestamps: true }
);

// Tạo chỉ mục cho trường tags
noteSchema.index({ tags: 1 });

module.exports = model('Note', noteSchema);
