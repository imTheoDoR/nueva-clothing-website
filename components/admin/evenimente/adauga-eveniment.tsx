"use client";

import addEvent from "@/actions/admin/evenimente/add";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventsSchema } from "@/schemas";
import { UploadDropzone } from "@/utils/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { $Enums } from "@prisma/client";
import { Trash2Icon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const AdaugaEveniment = () => {
  const [isPending, setTransition] = useTransition();
  const [bannerUrl, setBannerUrl] = useState<string[]>([]);
  const [locationUrl, setLocationUrl] = useState<string[]>([]);

  const router = useRouter();

  const form = useForm<z.infer<typeof eventsSchema>>({
    resolver: zodResolver(eventsSchema),
    defaultValues: {
      date: "",
      name: "",
      registrationTime: "",
      startTime: "",
      prizeAmount: 0,
      bannerUrl: "",
      locationImageUrl: "",
      colaborator: "",
      infoLocatie: "",
    },
  });

  const { setValue } = form;

  const updateBannerUrl = (imageUrls: string[]) => {
    setBannerUrl(imageUrls);
    setValue("bannerUrl", imageUrls[0]);
  };

  const removeBannerUrl = () => {
    setBannerUrl([]);
    setValue("bannerUrl", "");
  };

  const updateLocationUrl = (imageUrls: string[]) => {
    setLocationUrl(imageUrls);
    setValue("locationImageUrl", imageUrls[0]);
  };

  const removeLocationUrl = () => {
    setLocationUrl([]);
    setValue("locationImageUrl", "");
  };

  const onSubmit = (values: z.infer<typeof eventsSchema>) => {
    setTransition(async () => {
      await addEvent(values).then((response) => {
        if (response.error) {
          toast.error(response.error);
        }

        if (response.success) {
          toast.success(response.success);

          form.reset();
          router.push("/dashboard/evenimente");
          router.refresh();
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FormField
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data organizării:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Data: yyyy/mm/dd (Ex: 2024-08-01)"
                    type="text"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numele Evenimentului:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Eveniment de pescuit"
                    type="text"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="registrationTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ora înscrierilor:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 19:00"
                    type="text"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FormField
            name="startTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ora începerii:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 19:30"
                    type="text"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="prizeAmount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valoarea premiilor în bani:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    {...form.register("prizeAmount", { valueAsNumber: true })}
                    placeholder="Ex: 19:30"
                    type="number"
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
          name="bannerUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Banner:</FormLabel>
              <FormControl>
                <Input {...field} type="hidden" value={bannerUrl} />
              </FormControl>

              <div className="bg-nueva-dark rounded-30 border border-nueva-gray/50">
                {bannerUrl.length > 0 ? (
                  <div className="relative w-[150px] h-[150px]">
                    <Button
                      variant="destructive"
                      type="button"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={removeBannerUrl}
                    >
                      <Trash2Icon className="w-5 h-5" />
                    </Button>
                    <Image
                      height={150}
                      width={150}
                      src={bannerUrl[0]}
                      alt="Product Image"
                      className="w-full h-full object-cover rounded-lg border"
                    />
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      updateBannerUrl(res.map((image) => image.url));
                    }}
                    onUploadError={() => {
                      toast.error("Ceva nu a mers bine...");
                    }}
                  />
                )}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="bannerUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imaginea locației:</FormLabel>
              <FormControl>
                <Input {...field} type="hidden" value={locationUrl} />
              </FormControl>

              {locationUrl.length > 0 ? (
                <div className="relative w-[400px] h-[240px]">
                  <Button
                    variant="destructive"
                    type="button"
                    size="icon"
                    className="absolute top-2 right-2 rounded-30"
                    onClick={removeLocationUrl}
                  >
                    <Trash2Icon className="w-5 h-5" />
                  </Button>
                  <Image
                    width={400}
                    height={240}
                    src={locationUrl[0]}
                    alt="Product Image"
                    className="w-full h-full object-cover rounded-lg border"
                  />
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <Button
                    type="button"
                    onClick={() =>
                      updateLocationUrl(["/images/contact-map.jpg"])
                    }
                  >
                    Folosește locația magazinului
                  </Button>

                  <div className="bg-nueva-dark rounded-30 border border-nueva-gray/50">
                    <UploadDropzone
                      endpoint="imageUploader"
                      onClientUploadComplete={(res) => {
                        updateLocationUrl(res.map((image) => image.url));
                      }}
                      onUploadError={() => {
                        toast.error("Ceva nu a mers bine...");
                      }}
                    />
                  </div>
                </div>
              )}

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FormField
            name="colaborator"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Colaborator(i) *opțional:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Reyes Clothing (Dacă sunt mai mulți folosiți virgula. Ex: Reyes Clothing, Reyes, Monica Sandu)"
                    type="text"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="infoLocatie"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mai multe informații despre locație:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Magazinul de Haine care este amplasat langa Baza Militara în zona Zancudo de pe Ruta 68."
                    type="text"
                    className="!rounded-30 bg-nueva-dark border border-nueva-gray/50 h-12 focus-visible:!ring-0 px-3"
                    disabled={isPending}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-8">
          <Button type="submit" disabled={isPending}>
            Adaugă Eveniment
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdaugaEveniment;
