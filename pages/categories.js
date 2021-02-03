import CategoriesHero from "../components/categories/CategoriesHero";
import RecommendedProducts from "../components/categories/RecommendedProducts";
import Banner from "../components/homepage/Banner";
import Brands from "../components/homepage/Brands";
import Footer from "../components/homepage/Footer";
import Navbar from "../components/homepage/Navbar";
import Navigate from "../components/categories/Navigate"
import Dropdown from "../components/categories/Dropdown";
export default function categories() {
  return (
    <div className={"ms-0 p-0 container-fluid"}>
      <Banner />
      <Navbar />
       
      <CategoriesHero/>
      <Navigate/>
      <RecommendedProducts />
      <Brands />
     
      <Footer />
    </div>
  );
}
