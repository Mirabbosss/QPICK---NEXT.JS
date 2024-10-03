"use client";
import styles from "./favourites.module.scss";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import ProductCard from "@components/product-card/productCard";
import { headphones, wirelessHeadphones } from "@mocks/mock";
import React, { useEffect, useState } from "react";

const Favourites = () => {


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
    <div>
      <Container maxW="1440px" paddingBottom="170px" paddingTop="100px">
        <h1 className="text-left font-semibold text-[20px] text-[black]">
          Избранное
        </h1>

        {/* TITLE */}
        {filteredHeadphones.length > 0 ||
        filteredWirelessHeadphones.length > 0 ? (
          filteredHeadphones.length > 0 ? (
            <h2 className="text-left mt-5 font-semibold text-[20px] text-[#838383] select-none">
              Наушники
            </h2>
          ) : null
        ) : (
          <h2 className="text-center mt-5 font-semibold text-[100px] text-[#838383] select-none">
            404
          </h2>
        )}

        {/* Наушники */}
        <Grid templateColumns="repeat(4, 1fr)" gap={5} paddingY={5}>
          {filteredHeadphones?.map((item) => (
            <GridItem key={item.id}>
              <ProductCard item={item} />
            </GridItem>
          ))}
        </Grid>

        {/* TITLE */}
        {filteredHeadphones.length > 0 ||
        filteredWirelessHeadphones.length > 0 ? (
          filteredWirelessHeadphones.length > 0 ? (
            <h2 className="text-left mt-5 font-semibold text-[20px] text-[#838383] select-none">
              Беспроводные наушники
            </h2>
          ) : null
        ) : (
          <h2 className="text-center mt-5 font-semibold text-[100px] text-[#838383] select-none">
            NOT FOUND ) :
          </h2>
        )}

        {/* Беспроводные наушники */}
        <Grid templateColumns="repeat(4, 1fr)" gap={5} paddingY={5}>
          {filteredWirelessHeadphones &&
            filteredWirelessHeadphones?.map((item) => (
              <GridItem key={item.id}>
                <ProductCard item={item} />
              </GridItem>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Favourites;
