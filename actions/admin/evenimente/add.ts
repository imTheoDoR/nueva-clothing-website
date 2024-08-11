"use server";

import prisma from "@/lib/prisma";
import { eventsSchema } from "@/schemas";
import { z } from "zod";

export default async function addEvent(values: z.infer<typeof eventsSchema>) {
  const validateFields = eventsSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Date invalide." };
  }

  await prisma.events.create({
    data: {
      ...values,
    },
  });

  return { success: "Evenimentul a fost adaugat cu succes." };
}
