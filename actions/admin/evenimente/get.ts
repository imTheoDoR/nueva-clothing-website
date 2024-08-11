"use server";

import prisma from "@/lib/prisma";

export default async function getEvents() {
  const events = await prisma.events.findMany();

  if (!events) {
    return [];
  }

  return events;
}
