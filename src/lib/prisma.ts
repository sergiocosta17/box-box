// src/lib/prisma.ts
// Este arquivo gerencia a conexão com o banco de dados

import { PrismaClient } from "@prisma/client";

// Isso evita criar múltiplas conexões durante o desenvolvimento
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Cria ou reutiliza a conexão existente
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

// No desenvolvimento, mantém a conexão entre recarregamentos
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;
