import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";

export function Content() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("handleIndexProducts");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(handleIndexProducts, []);

  const handleNewProduct = (params, successCallBack) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallBack();
    });
  };

  return (
    <div>
      <Login />
      <Signup />
      <ProductsNew onNewProduct={handleNewProduct} />
      <ProductsIndex products={products} />
    </div>
  );
}
