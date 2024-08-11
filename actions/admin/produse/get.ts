"use server";

import prisma from "@/lib/prisma";

export default async function getProducts() {
  const products = await prisma.product.findMany();

  if (!products) {
    return [];
  }

  return products;
}
