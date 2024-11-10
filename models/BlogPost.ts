// models/BlogPost.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IBlogPost extends Document {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  imageURL?: string;
  // add other fields as needed
}

const BlogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);