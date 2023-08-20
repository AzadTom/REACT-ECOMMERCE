import React, { useState } from "react";
import { useFilter } from "../context/FilterContext";
import {
  SEARCH_PRODUCTS,
  UPDATE_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_PRICE_RANGE,
  SORT_BY_RATING,
  FILTER_BY_SECTION,
  FILTER_BY_CATEGORY,
  CLEAR_FILTERS,
  SET_WISHLIST,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  SET_CART,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  LOGIN,
  LOGOUT,
} from "../utils/constsant";

function Filter() {
  const [mobilefilter, setMobilefilter] = useState(false);

  const { state, dispatch } = useFilter();

  const { selectedSections, selectedCategory, sortByPrice, sortByRating } =
    state;

    const maxValue = state.products.reduce(
      (acc, curr) => (Number(curr.price) > acc ? Number(curr.price) : acc),
      0
    );


  // Action dispatcher functions
  const handleSortProducts = (sortingString) => {
    dispatch({ type: SORT_PRODUCTS, payload: sortingString });
  };
  const handleSortByRating = (rating) => {
    dispatch({ type: SORT_BY_RATING, payload: rating });
  };

  const handleSectionToggle = (section) => {
    dispatch({ type: FILTER_BY_SECTION, payload: section });
  };

  const handleCategoryFilter = (category) => {
    dispatch({ type: FILTER_BY_CATEGORY, payload: category });
  };

  return (
    <>
      <section
        className={
          mobilefilter
            ? `sm:block  fixed  z-[100] bg-black  top-0   min-w-full  h-full   items-start text-white p-4 overflow-scroll border border-white `
            : `  bg-black hidden sm:block  sticky top-0    min-w-[12rem]  h-screen   text-white p-4 overflow-scroll border  border-white`
        }
      >
        {/* Header */}
        <div className="flex justify-between mb-2">
          {mobilefilter ? (
            <span
              className="text-xl font-semibold"
              onClick={() => setMobilefilter(false)}
            >
              Apply
            </span>
          ) : (
            <span className="text-xl font-semibold">Filter</span>
          )}
          <span
            className="text-xl font-semibold cursor-pointer"
            onClick={() => dispatch({ type: CLEAR_FILTERS })}
          >
            Clear
          </span>
        </div>
        <hr />

        {/*--------------------------------- Sort By filters----------------------------------------- */}
        <div className=" flex flex-col gap-2 mt-2 mb-2">
          <span className="">SORT BY</span>
          <div className="flex gap-2">
            <input
              type="radio"
              id="highToLow"
              name="priceSort"
              value="highToLow"
              checked={sortByPrice == "highToLow"}
              onChange={() => handleSortProducts("highToLow")}
            />
            <label htmlFor="highToLow">Price: High to Low</label>
          </div>

          <div className="flex gap-2">
            <input
              type="radio"
              id="lowToHigh"
              name="priceSort"
              value="lowToHigh"
              checked={sortByPrice == "lowToHigh"}
              onChange={() => handleSortProducts("lowToHigh")}
            />
            <label htmlFor="lowToHigh">Price: Low to High</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="aToz"
              name="priceSort"
              value="aToz"
              checked={sortByPrice == "aToz"}
              onChange={() => handleSortProducts("aToz")}
            />
            <label htmlFor="aToz">Category: A to Z</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="zToa"
              name="priceSort"
              value="zToa"
              checked={sortByPrice === "zToa"}
              onChange={() => handleSortProducts("zToa")}
            />
            <label htmlFor="zToa">Category: Z to A</label>
          </div>
          <hr />
        </div>
        {/*--------------------------------- Price Slider----------------------------------------- */}
        <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">SLIDER</span>
         <input
            type="range"
            min="0"
            max={maxValue}
            value={state.priceRange.max}
            onChange={(e) =>
              dispatch({
                type: UPDATE_PRICE_RANGE,
                payload: {
                  min: 0,
                  max: parseInt(e.target.value),
                },
              })
            }
          />

            <div className="flex justify-between items-center">
            <p className="text-secondary-color">0</p>
            <p className="text-secondary-color">{Math.ceil(maxValue / 2)}</p>
            <p className="text-secondary-color">{maxValue}</p>
          </div>

          <hr />
        </div>

        {/*--------------------------------- Filter By Rating----------------------------------------- */}
        <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">RATINGS</span>
          <div className="flex gap-2">
            <input
              id="4stars"
              type="checkbox"
              name="4stars"
              value="4stars"
              checked={sortByRating === "4stars"}
              onChange={() => handleSortByRating("4stars")}
            />
            <label htmlFor="4stars">4 ⭐️ and above</label>
          </div>
          <div className="flex gap-2">
            <input
              id="3stars"
              type="checkbox"
              name="3stars"
              value="3stars"
              checked={sortByRating === "3stars"}
              onChange={() => handleSortByRating("3stars")}
            />
            <label htmlFor="3stars">3 ⭐️ and above</label>
          </div>
          <div className="flex gap-2">
            <input
              id="2stars"
              type="checkbox"
              name="2stars"
              value="2stars"
              checked={sortByRating === "2stars"}
              onChange={() => handleSortByRating("2stars")}
            />
            <label htmlFor="2stars">2 ⭐️ and above</label>
          </div>
          <div className="flex gap-2">
            <input
              id="1stars"
              type="checkbox"
              name="1star"
              value="1star"
              checked={sortByRating === "1star"}
              onChange={() => handleSortByRating("1star")}
            />
            <label htmlFor="1stars">1 ⭐️ and above</label>
          </div>
          <hr />
        </div>
        {/*--------------------------------- Sort By Section----------------------------------------- */}
        <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">SECTION</span>
          <div className="flex gap-2">
            <input
              id="Womens"
              type="checkbox"
              name="Womens"
              value="Womens"
              checked={selectedSections.includes("Womens")}
              onChange={() => handleSectionToggle("Womens")}
            />
            <label htmlFor="Womens"> Women's</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="Mens"
              name="Mens"
              value={"Mens"}
              checked={selectedSections.includes("Mens")}
              onChange={() => handleSectionToggle("Mens")}
            />
            <label htmlFor="Mens"> Men's</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="Kids"
              name="Kids"
              value={"Kids"}
              checked={selectedSections.includes("Kids")}
              onChange={() => handleSectionToggle("Kids")}
            />
            <label htmlFor="Kids"> Kid's</label>
          </div>
          <hr />
        </div>

        {/*--------------------------------- Sort By Categories----------------------------------------- */}
        <div className="flex flex-col gap-2 mt-2 mb-2">
          <span className="">CATEGORIES</span>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="activeWear"
              name="activeWear"
              value="activeWear"
              checked={selectedCategory.includes("Active Wear")}
              onChange={() => handleCategoryFilter("Active Wear")}
            />
            <label htmlFor="activeWear">Active Wear</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="dresses"
              name="dresses"
              value="dresses"
              checked={selectedCategory.includes("Dresses")}
              onChange={() => handleCategoryFilter("Dresses")}
            />
            <label htmlFor="dresses">Dresses</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="tops"
              name="tops"
              value="tops"
              checked={selectedCategory.includes("Tops")}
              onChange={() => handleCategoryFilter("Tops")}
            />
            <label htmlFor="tops">Tops</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="officeWear"
              name="officeWear"
              value="officeWear"
              checked={selectedCategory.includes("Office Wear")}
              onChange={() => handleCategoryFilter("Office Wear")}
            />
            <label htmlFor="officeWear">Office Wear</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="casual"
              name="casual"
              value="casual"
              checked={selectedCategory.includes("Casual")}
              onChange={() => handleCategoryFilter("Casual")}
            />
            <label htmlFor="casual">Casual</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="freestyle"
              name="freestyle"
              value="freestyle"
              checked={selectedCategory.includes("Freestyle")}
              onChange={() => handleCategoryFilter("Freestyle")}
            />
            <label htmlFor="freestyle">Freestyle</label>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="formal"
              name="formal"
              value="formal"
              checked={selectedCategory.includes("Formal")}
              onChange={() => handleCategoryFilter("Formal")}
            />
            <label htmlFor="formal">Men's Formal</label>
          </div>
        </div>
      </section>

      {/* mobile filter */}
      <div>
        <div className="z-[80] bg-black text-white rounded flex flex-row items-center justify-between  bottom-0 fixed  w-full px-4 py-4  sm:hidden">
          <h3 onClick={() => setMobilefilter(!mobilefilter)}>Filter</h3>
          <h3 onClick={() => dispatch({ type: CLEAR_FILTERS })}>Clear</h3>
        </div>
      </div>
    </>
  );
}

export default Filter;
