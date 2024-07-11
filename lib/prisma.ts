import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Check if prisma is already initialized to prevent multiple initializations
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma as PrismaClient; // Explicit type assertion
}

export const db = prisma;
