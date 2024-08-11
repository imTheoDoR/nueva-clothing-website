"use server";

import prisma from "@/lib/prisma";
import { productsSchema } from "@/schemas";
import { z } from "zod";

export default async function addProduct(
  values: z.infer<typeof productsSchema>
) {
  const validateFields = productsSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Date invalide." };
  }

  await prisma.product.create({
    data: {
      ...values,
    },
  });

  return { success: "Produsul a fost adaugat cu succes." };
}
