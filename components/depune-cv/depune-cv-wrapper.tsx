"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { depunereCVSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const DepuneCVWrapper = () => {
  const [isPending, setTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const discordWebhook = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK!;

  const form = useForm<z.infer<typeof depunereCVSchema>>({
    resolver: zodResolver(depunereCVSchema),
    defaultValues: {
      fullName: "",
      experience: "",
      phone: "",
      jobs: "",
      iban: "",
      plate: "",
      angajator: "",
      activitate: "",
      why: "",
      image: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof depunereCVSchema>) => {
    setTransition(() => {
      setIsUploading(true);

      const formData = new FormData();
      if (values.image) {
        formData.append("file", values.image); // Adaugă imaginea
      }

      formData.append(
        "payload_json",
        JSON.stringify({
          content: "A fost primit un nou CV!",
          embeds: [
            {
              title: "Detalii CV",
              fields: [
                {
                  name: "Nume și Prenume",
                  value: values.fullName,
                  inline: false,
                },
                {
                  name: "Experiență în oraș",
                  value: values.experience,
                  inline: true,
                },
                { name: "Telefon", value: values.phone, inline: true },
                {
                  name: "Locuri de muncă anterioare",
                  value: values.jobs,
                  inline: false,
                },
                { name: "IBAN", value: values.iban, inline: true },
                {
                  name: "Număr de înmatriculare",
                  value: values.plate,
                  inline: true,
                },
                { name: "Angajator", value: values.angajator, inline: true },
                { name: "Activitate", value: values.activitate, inline: true },
                { name: "Motivație", value: values.why, inline: false },
              ],
            },
          ],
        })
      );

      fetch(discordWebhook, {
        method: "POST",
        body: formData,
      })
        .then(() => {
          toast.success("CV-ul dvs. a fost trimis cu succes!");
        })
        .catch((error) => {
          setError("A apărut o eroare la trimiterea CV-ului.");
          console.error("There was an error!", error);
        })
        .finally(() => {
          setIsUploading(false);
          form.reset();
          form.setValue("image", undefined);
        });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FormField
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nume și Prenume:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Alexandru Marian"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experiență în oraș:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 50 luni"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FormField
            name="iban"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IBAN-ul tău:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 1234"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="plate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Număr de înmatriculare:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: LS 123456, LS33SNZ"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FormField
            name="angajator"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cine te-a angajat?</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Andrei"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="activitate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cât de activ ești pe oraș?</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Începând de la ora 19:00"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <FormField
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Număr de telefon:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 123-4567"
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="jobs"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Locuri de muncă anterioare:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Pescar, Mecanic, Postas, ..."
                    type="text"
                    autoComplete="off"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="why"
          render={({ field }) => (
            <FormItem>
              <FormLabel>De ce vrei să te alături echipei noastre?</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Explicația ta aici..."
                  className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3 min-h-[150px] py-5"
                  disabled={isPending}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Încarcă copia de la cartea de identitate:</FormLabel>
              <FormControl>
                <div className="relative w-full">
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file && file.size <= 3 * 1024 * 1024) {
                        field.onChange(file);
                        setError(null);
                      } else {
                        setError(
                          "Dimensiunea maximă permisă este de 3MB și fișierul trebuie să fie în format JPG sau PNG."
                        );
                      }
                    }}
                    disabled={isPending || isUploading}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor={field.name}
                    className="cursor-pointer inline-block bg-nueva-gray2 border border-nueva-orange/15 text-white px-4 py-2 rounded-30 text-sm font-medium"
                  >
                    Selectează un fișier
                  </label>
                </div>
              </FormControl>

              {form.watch("image") && (
                <div className="mt-4">
                  <p className="text-xs">{form.watch("image")?.name}</p>
                </div>
              )}
              <FormMessage />
              {error && <p className="text-red-400 text-xs italic">{error}</p>}
            </FormItem>
          )}
        />

        <div className="text-center">
          <Button type="submit" disabled={isPending || isUploading}>
            Trimite CV
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default DepuneCVWrapper;
