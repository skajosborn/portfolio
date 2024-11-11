import { NextApiRequest, NextApiResponse } from 'next';

// Set up CORS headers
export function cors(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Update '*' to your frontend domain in production
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Private-Network', 'true');

  // Handle preflight (OPTIONS) request
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return true; // Indicates preflight request has been handled
  }

  return false; // Indicates further handling is needed for other requests
}