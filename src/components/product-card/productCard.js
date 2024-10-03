"use client";
import { Box, Flex, Text, Spacer, useToast } from "@chakra-ui/react";
import styles from "./productCard.module.scss";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import LikeIcon from "@icons/like-icon.svg";
import UnLikeIcon from "@icons/unlike-icon.svg";
import RatingIcon from "@icons/rating-icon.svg";
import { addToFavourites, removeFromFavourites, getFavourites } from "@utils/favourites";
import Link from "next/link";

const ProductCard = ({ item }) => {
  const toast = useToast();

  const [liked, setLiked] = useState(false);

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
    <div>
      <Flex
        direction="column"
        justifyContent="space-between"
        borderRadius="30px"
        overflow="hidden"
        shadow="md"
        bg="white"
        maxW="sm"
        minHeight="400px"
        _hover={{ shadow: "lg" }}
        cursor="pointer"
        userSelect="none"
        paddingY={4}
        paddingX={4}
      >
        <Flex>
          <Box onClick={() => handleLike(item.id)}>
            {liked ? <LikeIcon /> : <UnLikeIcon />} 
          </Box>
          <Spacer />
          {item.company ? item.company : <Box></Box>}
        </Flex>

        <Spacer />

        <Link href={`/product/${item.id}`} legacyBehavior>
          <Box paddingY="5px" paddingX="29px">
            <Image  src={item.image} height="237" width="220" />
          </Box>
        </Link>

        <Spacer />

        <Link href={`/product/${item.id}`} legacyBehavior>
          <Flex>
            <Flex direction="column" gap="6">
              <Text mt="2">{item?.name}</Text>

              <Flex gap={3}>
                <RatingIcon />
                <Text fontSize="md" color="#838383">
                  {item?.rating}
                </Text>
              </Flex>
            </Flex>

            <Spacer />

            <Flex direction="column">
              <Text fontSize="2xl" color="#ffa542">
                {item.discount ? item.discount : item?.price} ₸
              </Text>
              <Text as="s" fontSize="xl" textAlign="right" color="#ffce7f">
                {item.discount ? item?.price : null}
              </Text>
            </Flex>
          </Flex>
        </Link>
      </Flex>
    </div>
  );
};

export default ProductCard;
