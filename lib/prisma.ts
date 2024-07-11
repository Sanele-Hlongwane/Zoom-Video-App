import { PrismaClient } from '@prisma/client';

// Prevent multiple instances of Prisma Client in development
let prisma: PrismaClient;

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var prisma: PrismaClient | undefined;
}

if (typeof window === 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
}

export const db = prisma;
