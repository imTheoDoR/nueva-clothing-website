"use server";

import prisma from "@/lib/prisma";

export default async function deleteProduct(id: string) {
  if (!id) {
    return { error: "ID-ul este invalid." };
  }

  await prisma.product.delete({
    where: {
      id,
    },
  });

  return { success: "Produsul a fost șters!" };
}
