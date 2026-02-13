import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import { getAllProducts } from "../services/product.services";
import { getAllCategories } from "../services/category.services";

export default async function Home() {
  const [categories,products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ]);

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories}/>
      <ProductsSection products={products} />
    </main>
  );
}