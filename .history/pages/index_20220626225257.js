import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <div className="">
      <Layout title="Home Page">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:">
          <div>
            {data.products.map((product) => (
              <ProductItem product={product} key={product.slug} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
