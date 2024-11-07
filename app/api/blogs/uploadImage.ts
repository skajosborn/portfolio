import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import formidable, { IncomingForm } from 'formidable';
import fs from 'fs/promises';
import { Readable } from 'stream';

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

// Utility function to convert Next.js request body (ReadableStream) to a Buffer
async function streamToBuffer(readableStream: ReadableStream<Uint8Array>): Promise<Buffer> {
  const reader = readableStream.getReader();
  const chunks: Uint8Array[] = [];
  let result = await reader.read();

  while (!result.done) {
    chunks.push(result.value);
    result = await reader.read();
  }

  return Buffer.concat(chunks);
}

// Helper function to convert NextRequest to a Node.js IncomingMessage-like object
async function convertNextRequestToIncomingMessage(req: NextRequest) {
  const buffer = await streamToBuffer(req.body as ReadableStream<Uint8Array>);
  const readableStream = new Readable({
    read() {
      this.push(buffer);
      this.push(null);
    },
  });

  // Mimic the IncomingMessage by adding necessary properties
  const incomingMessage = Object.assign(readableStream, {
    headers: req.headers,
    method: req.method,
    url: req.url,
    httpVersion: '1.1',
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    connection: {
      destroyed: false,
    },
  });

  return incomingMessage;
}

// Function to parse form data using formidable
async function parseForm(req: NextRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    convertNextRequestToIncomingMessage(req)
      .then((incomingRequest) => {
        form.parse(incomingRequest as any, (err, fields, files) => {
          if (err) reject(err);
          resolve({ fields, files });
        });
      })
      .catch(reject);
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

    const filePath = file.filepath;
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'blog-images',
    });

    // Clean up the temporary file
    await fs.unlink(filePath);

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error during file upload:', error);
    return NextResponse.json({ error: 'Failed to upload image to Cloudinary' }, { status: 500 });
  }
}