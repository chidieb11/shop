import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <div className="">
      <Layout title="Home Page">
        <div className="">
          <div>
            {data.products.map((product)=>(
              <ProductItem product={prod}/>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
