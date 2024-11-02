import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);