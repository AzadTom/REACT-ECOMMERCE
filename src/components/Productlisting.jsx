import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { useFilter } from "../context/FilterContext";

function Productlisting() {
  const { state } = useFilter();

  return (
    <section className="sm:p-8  bg-black flex">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {state.filteredProducts.length === 0 ? (
          <h1 className="w-full h-[32rem] flex justify-center items-center">
            Product does not found...
          </h1>
        ) : (
          state.filteredProducts.map((product) => (
            <div className="p-2 sm:p-6 w-full h-full">
              <ProductCard item={product} />
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Productlisting;
