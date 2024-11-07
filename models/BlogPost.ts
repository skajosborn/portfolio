// models/BlogPost.ts
import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // Add other fields as needed
}, {
  timestamps: true
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);