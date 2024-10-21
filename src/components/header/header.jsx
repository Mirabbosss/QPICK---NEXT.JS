"use client";

import { useRouter } from 'next/navigation';
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
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Box
} from "@chakra-ui/react";

import { phones } from "../../mocks/mock";
import TelephoneIcon from "../../../public/icons/telephone-icon.svg";
import FavouriteIcon from "../../../public/icons/favourite-icon.svg";
import BasketIcon from "../../../public/icons/basket-icon.svg";
import { useState, useEffect } from "react";

const Header = () => {
  const [basketCount, setBasketCount] = useState(0);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    const favourites = JSON.parse(localStorage.getItem("favourites")) || [];

    setBasketCount(basket.length);
    setFavouritesCount(favourites.length);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
    };

    if (router?.events?.on) {
      router.events.on('routeChangeComplete', handleRouteChange);
    }

    return () => {
      if (router?.events?.off) {
        router.events.off('routeChangeComplete', handleRouteChange);
      }
    };
  }, [router, onClose]);

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
            <div className="hidden sm:block">
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
            </div>
          </Flex>

          <Spacer />

          {/* Favorites and Basket */}
          <div className="hidden sm:block">
            <Flex alignItems='center' justify='space-between' maxW='150' w='100%'>
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
          </div>

          <div className="sm:hidden">

            <button className="sm:hidden flex flex-col gap-1 bg-transparent" onClick={onOpen}>

              <span className="w-6 h-1 bg-black"></span>
              <span className="w-6 h-1 bg-black"></span>
              <span className="w-6 h-1 bg-black"></span>

            </button>

            <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>

              <DrawerOverlay />

              <DrawerContent>

                <DrawerHeader borderBottomWidth='1px' userSelect='none' display='flex' justifyContent='end'>
                  <span onClick={onClose} className="select-none cursor-pointer hover:text-[#ffa542]">X</span>
                </DrawerHeader>

                <DrawerBody>

                  <Link href='/favourites' className="block mt-3 hover:text-[#ffa542]">
                    Избранное

                    <span className='ml-1 text-[#ffa542]'>{favouritesCount}</span>
                  </Link>

                  <Link href='/basket' className="block mt-3 hover:text-[#ffa542]">
                    Корзина

                    <span className='ml-1 text-[#ffa542]'>{basketCount}</span>
                  </Link>

                  <Link href="https://t.me/TATU_MM" legacyBehavior>
                    <a target="_blank" className="block mt-3 hover:text-[#ffa542]">Контакты</a>
                  </Link>

                  <Link href='/conditions' className="block mt-3 hover:text-[#ffa542]">
                    Условия сервиса
                  </Link>

                  <Box className='mt-3 mb-3'>
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
                  </Box>

                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
