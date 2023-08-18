import { createContext, useEffect, useState, useContext } from "react";
import axios from 'axios'

const ProductsDataContext = createContext();

const ProductsDataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  // Function to fetch the products data
  const getProductsData = async () => {
    try {
      const response = await axios.get("/api/getproducts");
       const {products} = response.data;
      setProductsData(products);
    } catch (error) {
      console.error("Error in fetching Products", error);
    }
  };

  // Use useEffect to fetch the products data when the component mounts
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <ProductsDataContext.Provider value={{ productsData }}>
      {children}
    </ProductsDataContext.Provider>
  );
};

// Custom hook to consume the ProductsDataContext
const useProductsData = () => useContext(ProductsDataContext);


export default ProductsDataProvider;
export { useProductsData };
