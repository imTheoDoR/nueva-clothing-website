"use client";

import addProduct from "@/actions/admin/produse/add";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { productsSchema } from "@/schemas";
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

const AdaugaProdus = () => {
  const [isPending, setTransition] = useTransition();
  const [images, setImages] = useState<string[]>([]);

  const router = useRouter();

  const form = useForm<z.infer<typeof productsSchema>>({
    resolver: zodResolver(productsSchema),
    defaultValues: {
      name: "",
      model: "",
      raft: "",
      gender: $Enums.Gender.MALE,
      category: $Enums.Category.HAT,
      image: "",
    },
  });

  const { setValue, getValues } = form;

  const updateImage = (imageUrls: string[]) => {
    setImages(imageUrls);
    setValue("image", imageUrls[0]);
  };

  const removeImage = () => {
    setImages([]);
    setValue("image", "");
  };

  const onSubmit = (values: z.infer<typeof productsSchema>) => {
    setTransition(async () => {
      await addProduct(values).then((response) => {
        if (response.error) {
          toast.error(response.error);
        }

        if (response.success) {
          toast.success(response.success);

          form.reset();
          router.push("/dashboard/produse");
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FormField
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nume produs:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: Nike Air Force"
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
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 11"
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
            name="raft"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Raft:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ex: 103"
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
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gen:</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isPending}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează genul" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={$Enums.Gender.MALE}>
                          Masculin
                        </SelectItem>
                        <SelectItem value={$Enums.Gender.FEMALE}>
                          Feminin
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categorie:</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    disabled={isPending}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selectează categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={$Enums.Category.HAT}>
                          Pălării
                        </SelectItem>
                        <SelectItem value={$Enums.Category.PANTS}>
                          Pantaloni
                        </SelectItem>
                        <SelectItem value={$Enums.Category.SHOES}>
                          Încălțăminte
                        </SelectItem>
                        <SelectItem value={$Enums.Category.TOP}>
                          Topuri
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagine:</FormLabel>
              <FormControl>
                <Input {...field} type="hidden" value={images} />
              </FormControl>

              <div className="bg-nueva-dark rounded-30 border border-nueva-gray/50">
                {images.length > 0 ? (
                  <div className="relative w-[150px] h-[150px]">
                    <Button
                      variant="destructive"
                      type="button"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={removeImage}
                    >
                      <Trash2Icon className="w-5 h-5" />
                    </Button>
                    <Image
                      height={150}
                      width={150}
                      src={images[0]}
                      alt="Product Image"
                      className="w-full h-full object-cover rounded-lg border"
                    />
                  </div>
                ) : (
                  <UploadDropzone
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      updateImage(res.map((image) => image.url));
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

        <div className="mt-8">
          <Button type="submit" disabled={isPending}>
            Adaugă Produs
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AdaugaProdus;
