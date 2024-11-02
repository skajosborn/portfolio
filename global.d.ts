// global.d.ts
import mongoose from 'mongoose';

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: mongoose.Connection | null; // Explicitly type as `mongoose.Connection | null`
  };
}

export {};