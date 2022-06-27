import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
  return (
    <div className="">
      <Layout title="Home Page">
        <div className="">
          <div>
            {data.products.map((product)=>(
              <
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}
