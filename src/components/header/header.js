"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import {
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { phones } from "@/mocks/mock";
import TelephoneIcon from "@icons/telephone-icon.svg";
import FavouriteIcon from "@icons/favourite-icon.svg";
import BasketIcon from "@icons/basket-icon.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [favouritesCount, setFavouritesCount] = useState(0);

  // Mahsulotlar va sevimlilar sonini yangilash
  const updateCounts = () => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    setBasketCount(basket.length);
    setFavouritesCount(favourites.length);
  };

  useEffect(() => {
    // Dastlabki hisoblagichlarni yangilash
    updateCounts();

    // Har safar `localStorage` ga o'zgartirishlar qo'shilganda yangilash
    const handleStorageChange = (event) => {
      if (event.key === "basket" || event.key === "favourites") {
        updateCounts();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorageChange);
      }
    };
  }, []);

  return (
    <header className={styles.header}>
      <Container maxW="1440px">
        <Flex minWidth="max-content" alignItems="center">
          {/* Menu */}
          <Flex p="2" gap='6' alignItems='center'>
            {/* Logo */}
            <Link href="/" legacyBehavior>
              <a className={styles.linkLogo}>QPICK</a>
            </Link>

            {/* Phones list */}
            <Menu>
              <MenuButton as={Button} leftIcon={<TelephoneIcon />}>
                Выбрать модель телефона
              </MenuButton>
              <MenuList>
                {phones.map((phone, index) => (
                  <MenuItem key={index}>{phone}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
          
          <Spacer />

          {/* Favorites and Basket */}
          <Flex gap="6" alignItems='center'>
            {/* Favourites */}
            <Link href="/favourites" legacyBehavior>
              <div className={styles.wrappericon}>
                <span className={styles.counter}>{favouritesCount}</span>
                <FavouriteIcon />
              </div>
            </Link>

            {/* Basket */}
            <Link href="/basket" legacyBehavior>
              <div className={styles.wrappericon}>
                <span className={styles.counter}>{basketCount}</span>
                <BasketIcon style={{ fill: '#838383' }} />
              </div>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;