"use client";

import { Container } from "@chakra-ui/react";
import ProductCard from "../../../components/product-card/productCard";
import { headphones, wirelessHeadphones } from "../../../mocks/mock";
import React, { useEffect, useState } from "react";

export const Products = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchedFavourites =
      JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(fetchedFavourites);
  }, []);

  const filteredHeadphones = headphones.filter((headphone) =>
    favourites.includes(headphone.id)
  );

  const filteredWirelessHeadphones = wirelessHeadphones.filter(
    (wirelessHeadphone) => favourites.includes(wirelessHeadphone.id)
  );
  return (
    <div className="min-h-[calc(100vh-270px)]">
      <Container maxW="1440px">
        <h1 className="text-left font-semibold text-[16px] sm:text-[20px] text-[black]">
          Избранное
        </h1>

        {/* TITLE */}
        {filteredHeadphones.length > 0 ||
        filteredWirelessHeadphones.length > 0 ? (
          filteredHeadphones.length > 0 ? (
            <h2 className="text-left mt-5 font-semibold text-[16px] sm:text-[20px] text-[#838383] select-none">
              Наушники
            </h2>
          ) : null
        ) : (
          <h2 className="text-center mt-5 font-semibold text-[50px] sm:text-[100px] text-[#838383] select-none">
            404
          </h2>
        )}

        {/* Наушники */}
        <div className="gap-y-4 gap-x-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredHeadphones?.map((item) => (
            <div key={item.id}>
              <ProductCard item={item} className={`rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px]  hover:shadow-lg cursor-pointer select-none bg-white`}/>
            </div>
          ))}
        </div>

        {/* TITLE */}
        {filteredHeadphones.length > 0 ||
        filteredWirelessHeadphones.length > 0 ? (
          filteredWirelessHeadphones.length > 0 ? (
            <h2 className="text-left mt-5 font-semibold text-[16px] sm:text-[20px] text-[#838383] select-none">
              Беспроводные наушники
            </h2>
          ) : null
        ) : (
          <h2 className="text-center mt-1 sm:mt-5 font-semibold text-[50px] sm:text-[100px] text-[#838383] select-none">
            NOT FOUND ) :
          </h2>
        )}

        {/* Беспроводные наушники */}
        <div className="gap-y-4 gap-x-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredWirelessHeadphones &&
            filteredWirelessHeadphones?.map((item) => (
              <div key={item.id}>
                <ProductCard item={item} className={`rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px]  hover:shadow-lg cursor-pointer select-none bg-white`}/>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};
