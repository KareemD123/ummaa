import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import ProductsContent from "@/components/products-content";
import ProductsFilter from "@/components/products-filter";

import Layout from "../layouts/Main";

const Members = () => (
  <Layout>
    <Breadcrumb />
    <section className="products-page">
      <div className="container">
        <ProductsFilter />
        <ProductsContent />
      </div>
    </section>
    <Footer />
  </Layout>
);

export default Members;
