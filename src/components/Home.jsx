import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Products from "./Products";

const Home = ({ currentProduct, setCurrentProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Navbar currentProduct={currentProduct} />
      <Hero />
      <Products
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Home;
