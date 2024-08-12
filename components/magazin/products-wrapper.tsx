"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Props {
  products: {
    image: string;
    name: string;
    model: string;
    raft: string;
    gender: string;
    category: string;
  }[];
}

const ProductsWrapper = ({ products }: Props) => {
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("c-all");

  const filteredProducts = products.filter((product) => {
    const genderMatch =
      selectedGender === "all" ||
      product.gender.toLocaleLowerCase() === selectedGender;
    const categoryMatch =
      selectedCategory === "c-all" ||
      product.category.toLocaleLowerCase() === selectedCategory;

    return genderMatch && categoryMatch;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-32">
      <div className="col-span-1 h-full">
        <div className="w-full rounded-30 bg-gradient-to-br from-nueva-gray2/50 to-nueva-dark/50 border border-nueva-gray/50 flex flex-col px-5 lg:px-10 py-8 sticky top-5">
          <h4 className="text-[18px] font-semibold text-nueva-white">
            Filtrează căutările:
          </h4>

          <span className="mt-8">Gen:</span>
          <RadioGroup
            defaultValue="all"
            className="mt-3"
            onValueChange={setSelectedGender}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="all"
                id="r1"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="r1">Toate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="male"
                id="r2"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="r2">Masculin</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="female"
                id="r3"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="r3">Feminin</Label>
            </div>
          </RadioGroup>

          <span className="mt-8">Categorii:</span>
          <RadioGroup
            defaultValue="c-all"
            className="mt-3"
            onValueChange={setSelectedCategory}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="c-all"
                id="c1"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="c1">Toate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="hat"
                id="c2"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="c2">Pălării</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="top"
                id="c3"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="c3">Topuri</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="pants"
                id="c4"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="c4">Pantaloni</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="shoes"
                id="c5"
                className="bg-nueva-gray w-5 h-5"
              />
              <Label htmlFor="c5">Încălțăminte</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3">
        <div className="flex flex-wrap gap-5 select-none">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-nueva-gray2/50 to-nueva-dark/50 border border-nueva-gray/50 p-5 rounded-30 max-w-[310px] w-full"
              >
                <div className="max-w-[256px] max-h-[179px] h-full w-full">
                  <Image
                    src={product.image}
                    width={256}
                    height={179}
                    alt={`Nueva ${product.name}`}
                    className={cn(
                      "mx-auto max-w-[256px] max-h-[179px]",
                      product.category === "PANTS" && "max-w-[146px]"
                    )}
                    priority
                  />
                </div>

                <h4 className="text-[18px] text-nueva-orange font-semibold text-center mt-3">
                  {product.name}
                </h4>

                <div className="flex items-center justify-around mt-10">
                  <span>
                    <strong>Model:</strong> {product.model}
                  </span>
                  <span>
                    <strong>Raft:</strong> {product.raft}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-10 w-full flex justify-center">
              <span className="font-light italic text-sm text-nueva-white/65">
                Nu s-au găsit produse pentru această categorie.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsWrapper;
