import Image from "next/image";
import ProductsActions from "../../components/product-detail/product_actions";
import { getImageUrl } from "@/app/lib/api";
import { getProductDetail } from "../../services/product.service";

type TPageProps = {
        params: Promise<{id: string}>;
}

const ProductDetail = async ({params}: TPageProps) => {
    const {id} = await params;

    const product = await getProductDetail(id);



    return (
        <main className="container mx-auto py-40 flex gap-12">
            <div className="bg-primary-light aspect-square min-w-140 flex justify-center items-center">
                <Image src={getImageUrl(product.imageUrl)} width={550} height={550} alt={product.name} className="aspect-square object-contain w-full" />
            </div>
            <div className="w-full py-7">
                <h1 className="font-bold text-5xl mb-6">{product.name}</h1>
                <div className="bg-primary-light rounded-full text-primary py-2 px-6 w-fit mb-5">
                    {product.category.name}
                </div>
                <p className="leading-loose">
                    {product.description}
                </p>
                <div className="text-primary.text-[32px].font-semibold.mb-12">
{product.price}              </div>
              <ProductsActions product={product} stock={product.stock}/>
            </div>
        </main>
    )
}

export default ProductDetail;