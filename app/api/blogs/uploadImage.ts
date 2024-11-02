// pages/api/uploadImage.ts
import { v2 as cloudinary } from 'cloudinary';
import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

// Ensure Cloudinary is properly configured before using it
if (!process.env.CLOUDINARY_CLOUD_NAME || 
    !process.env.CLOUDINARY_API_KEY ||
    !process.env.CLOUDINARY_API_SECRET) {
  throw new Error('Cloudinary configuration is missing');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log('Cloudinary Config:', {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET ? 'exists' : 'missing',
});
// Disable body parsing to handle FormData manually
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  

  // Use formidable to parse FormData with file upload
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ error: 'Error parsing form' });
    }

    const file = files.file as formidable.File | undefined;
    if (!file) {
      console.error('File is missing in the request');
      return res.status(400).json({ error: 'File is required' });
    }

    try {
      // Verify file path and ensure it exists
      const filePath = file.filepath;
      if (!fs.existsSync(filePath)) {
        throw new Error('File path does not exist');
      }
      console.log('File path:', filePath);

      // Upload file to Cloudinary
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'blog-images',
        allowed_formats: ['jpg', 'jpeg', 'png', 'gif'],
        max_file_size: 10 * 1024 * 1024,
      });
    
      if (!result || !result.secure_url) {
        console.error('Unexpected Cloudinary response:', result);
        throw new Error('Upload failed - Cloudinary did not return a secure URL');
      }
    
      fs.unlinkSync(filePath);
    
      return res.status(200).json({ url: result.secure_url });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      console.error('Error during file upload:', errorMessage);
      return res.status(500).json({ error: 'Failed to upload image to Cloudinary' });
    }
  });
}