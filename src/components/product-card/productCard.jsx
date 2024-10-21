"use client";
import { Box, Text, Spacer, useToast, Button } from "@chakra-ui/react";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import LikeIcon from "../../../public/icons/like-icon.svg";
import UnLikeIcon from "../../../public/icons/unlike-icon.svg";
import RatingIcon from "../../../public/icons/rating-icon.svg";
import { addToFavourites, removeFromFavourites, getFavourites } from "../../utils/favourites";
import Link from "next/link";
import { addToBasket } from "../../utils/basket";
import BasketIcon from "../../../public/icons/basket-icon.svg";

const ProductCard = ({ item, className }) => {
  const toast = useToast();

  const [liked, setLiked] = useState(false);

  const handleAddBasket = (e, id) => {
    e.stopPropagation();
    addToBasket(id, "basket");
    toast({
      title: "Добавлен.",
      description: "Товар добавлен в корзину.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    const favourites = getFavourites('favourites') || [];

    if (favourites.includes(item.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [item.id]);

  const handleLike = useCallback((id) => {
    const favourites = getFavourites('favourites') || [];

    if (!favourites.includes(id)) {
      addToFavourites(id, 'favourites');
      setLiked(true);
      toast({
        title: "Добавлен.",
        description: "Товар добавлен в изранное.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      removeFromFavourites(id, 'favourites');
      setLiked(false);
      toast({
        title: "Удалено.",
        description: "Товар был удален из списка.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [item.id]);

  return (
    <div className={className}>
      <div className="flex">
        <Box onClick={() => handleLike(item.id)}>
          {liked ? <LikeIcon /> : <UnLikeIcon />}
        </Box>
        <Spacer />
        {item.company ? item.company : <Box></Box>}
      </div>

      <Spacer />

      <Link href={`/${item.id}`} legacyBehavior>
        <Box paddingY="5px" paddingX="29px" className="h-[237px] grid place-content-center">
          <Image src={item.image} height="237" width="220" alt="img" />
        </Box>
      </Link>

      <Spacer />

      <Link href={`/${item.id}`} legacyBehavior>
        <div className="flex mt-2">

          <Text mt="2">{item?.name}</Text>

          <Spacer />

          <Box className="h-[70px]">
            <Text fontSize="2xl" color="#ffa542">
              {item.discount ? item.discount : item?.price} ₸
            </Text>

            <Text fontSize="xl" textAlign="right" color="#ffce7f" className="line-through">
              {item.discount ? item?.price : null}
            </Text>
          </Box>

        </div>
      </Link>

      <div className="flex items-center gap-1">

        <div className="flex gap-3">
          <RatingIcon />
          <Text fontSize="md" color="#838383">
            {item?.rating}
          </Text>
        </div>

        <Spacer />

        <Button
          leftIcon={<BasketIcon style={{ fill: "white" }} />}
          borderRadius="25px"
          minW="50px"
          bg="black"
          paddingY="5px"
          textColor="white"
          _hover={{ transform: "scale(0.98)" }}
          onClick={(e) => handleAddBasket(e, item.id)}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
