import getProducts from "@/actions/admin/produse/get";
import ProductsWrapper from "@/components/magazin/products-wrapper";

export default async function MagazinPage() {
  // const products = [
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "shoes",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "female",
  //     category: "top",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "hat",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "female",
  //     category: "shoes",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  //   {
  //     image: "/images/products/1.png",
  //     name: "Nike Air Force",
  //     model: "123",
  //     raft: "321",
  //     gender: "male",
  //     category: "pants",
  //   },
  // ];
  const products = await getProducts();

  return (
    <div className="container">
      <div className="mt-24 lg:mt-32">
        <h1 className="text-[48px] font-bold text-nueva-white max-w-[677px] text-center mx-auto capitalize leading-tight">
          Descoperă Moda Urbană la nueva clothing
        </h1>
        <p className="text-[20px] text-nueva-white text-center mt-3 max-w-[770px] mx-auto">
          Ținute unice și stiluri personalizate pentru fiecare cetățean. Fii
          mereu în pas cu tendințele!
        </p>
      </div>

      <ProductsWrapper products={products} />
    </div>
  );
}
