"use server";

import prisma from "@/lib/prisma";

export default async function deleteEvent(id: string) {
  if (!id) {
    return { error: "ID-ul este invalid." };
  }

  await prisma.events.delete({
    where: {
      id,
    },
  });

  return { success: "Evenimentul a fost șters!" };
}
