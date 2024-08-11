import { $Enums } from "@prisma/client";
import { z } from "zod";

export const depunereCVSchema = z.object({
  fullName: z.string().min(1, { message: "Numele este necesar!" }),
  experience: z.string().min(1, { message: "Acest câmp este necesar!" }),
  phone: z.string().min(1, { message: "Numărul de telefon este necesar." }),
  jobs: z.string().min(1, { message: "Acest câmp este necesar!" }),
  iban: z.string().min(1, { message: "Acest câmp este necesar!" }),
  plate: z.string().min(1, { message: "Acest câmp este necesar!" }),
  angajator: z.string().min(1, { message: "Acest câmp este necesar!" }),
  activitate: z.string().min(1, { message: "Acest câmp este necesar!" }),
  why: z.string().min(20, {
    message: "Povestește-ne de ce vrei să ni te alături in minim 20 caractere.",
  }),
  image: z
    .instanceof(File)
    .optional()
    .superRefine((file, ctx) => {
      if (!file) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Te rog să încarci copia de la cartea de identitate!",
        });
      } else {
        if (file.size > 3 * 1024 * 1024) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Dimensiunea maximă permisă este de 3MB.",
          });
        }
        if (!["image/jpeg", "image/png"].includes(file.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Fișierul trebuie să fie în format JPG sau PNG.",
          });
        }
      }
    }),
});

export const productsSchema = z.object({
  name: z.string().min(1, { message: "Numele este necesar!" }),
  model: z.string().min(1, { message: "Trebuie să specifici modelul." }),
  raft: z.string().min(1, { message: "Trebuie să specifici raftul." }),
  gender: z.enum([$Enums.Gender.MALE, $Enums.Gender.FEMALE]),
  category: z.enum([
    $Enums.Category.HAT,
    $Enums.Category.PANTS,
    $Enums.Category.SHOES,
    $Enums.Category.TOP,
  ]),
  image: z.string().url(),
});

export const eventsSchema = z.object({
  date: z
    .string()
    .min(1, { message: "Trebuie să specifici data evenimentului." }),
  name: z.string().min(1, { message: "Specifică numele evenimentului." }),
  registrationTime: z
    .string()
    .min(1, { message: "Specifică ora de înscriere." }),
  startTime: z.string().min(1, { message: "Specifică ora începerii." }),
  prizeAmount: z
    .number()
    .min(1, { message: "Specifică valoarea premiilor în bani." }),
  bannerUrl: z.string().min(1, { message: "Adaugă un banner." }),
  locationImageUrl: z.string().min(1, { message: "Adaugă imaginea locației." }),
  colaborator: z.string(),
  infoLocatie: z
    .string()
    .min(1, { message: "Oferă mai multe informații despre locație." }),
});
