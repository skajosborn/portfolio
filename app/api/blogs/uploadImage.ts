import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import formidable from 'formidable';
import fs from 'fs/promises';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Disable Next.js body parsing to use formidable
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper function to parse form data using formidable
async function parseForm(req: NextRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = formidable({ keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

// API handler for POST request
export async function POST(req: NextRequest) {
  try {
    const { files } = await parseForm(req);

    const file = files.file as formidable.File | undefined;
    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 });
    }

    const result = await cloudinary.uploader.upload(file.filepath, {
      folder: 'blog-images', // Specify Cloudinary folder
    });

    // Clean up the temporary file
    await fs.unlink(file.filepath);

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error during file upload:', error);
    return NextResponse.json({ error: 'Failed to upload image to Cloudinary' }, { status: 500 });
  }
}