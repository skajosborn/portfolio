import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with credentials from the .env file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload an image to Cloudinary
export async function uploadImage(filePath: string): Promise<string> {
  // Ensure cloudinary is properly configured
  if (!process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Cloudinary configuration is missing');
  }

  try {
    // Upload the image, specifying the folder name
    const result = await cloudinary.v2.uploader.upload(filePath, {
      folder: 'blog-images',  // Customize the folder name as needed
    });
    return result.secure_url;
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    throw new Error('Failed to upload image to Cloudinary');
  }
}