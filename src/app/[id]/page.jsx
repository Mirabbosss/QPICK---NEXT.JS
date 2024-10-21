"use client";

import { useParams } from "next/navigation";
import { headphones, wirelessHeadphones } from "../../mocks/mock";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Text,
  Grid,
  GridItem,
  Button,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import LikeIcon from "../../../public/icons/like-icon.svg";
import UnLikeIcon from "../../../public/icons/unlike-icon.svg";
import BasketIcon from "../../../public/icons/basket-icon.svg";
import { addToBasket } from "../../utils/basket";
import { addToFavourites, removeFromFavourites, getFavourites } from "../../utils/favourites";
import { useState, useEffect, useCallback } from "react";
import { Carousel } from "./_components/Carousel";

const ProductPage = () => {
  const { id } = useParams();
  const combinedHeadphones = [...headphones, ...wirelessHeadphones];
  const product = combinedHeadphones.find((item) => item.id === id);
  const toast = useToast();

  const handleAddBasket = (id) => {
    addToBasket(id, "basket");
    toast({
      title: "Добавлен.",
      description: "Товар добавлен в корзину.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favourites = getFavourites("favourites") || [];

    if (favourites.includes(id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [id]);

  const handleLike = useCallback(
    (id) => {
      const favourites = getFavourites("favourites") || [];

      if (!favourites.includes(id)) {
        addToFavourites(id, "favourites");
        setLiked(true);
        toast({
          title: "Добавлен.",
          description: "Товар добавлен в изранное.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        removeFromFavourites(id, "favourites");
        setLiked(false);
        toast({
          title: "Удалено.",
          description: "Товар был удален из списка.",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    },
    [id]
  );

  return (
    <div>
      <Container maxW="1440px">
        <h2 className="text-left mt-5 font-semibold text-[20px] text-[#838383]">
          {product ? product.name : ''}
        </h2>
        {/* CARD */}
        <Flex
          direction="column"
          justifyContent="space-between"
          borderRadius="30px"
          overflow="hidden"
          shadow="md"
          bg="white"
          maxW="full"
          minHeight="500px"
          _hover={{ shadow: "lg" }}
          cursor="pointer"
          userSelect="none"
          paddingY={5}
          paddingX={6}
          marginTop={3}
        >
          <Flex>
            <Box onClick={() => handleLike(product.id)}>
              {liked ? <LikeIcon /> : <UnLikeIcon />}
            </Box>
            <Spacer />
            {product ? product.company : <Box></Box>}
          </Flex>

          <Spacer />

          <div className="hidden sm:block">
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={5}
              p={4}
            >
              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={product ? product.image : ''} height="237" width="220" alt="img" />
              </GridItem>

              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={product ? product.image : ''} height="237" width="220" alt="img" />
              </GridItem>

              <GridItem
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Image src={product ? product.image : ''} height="237" width="220" alt="img" />
              </GridItem>
              
            </Grid>
          </div>

          <div className="sm:hidden">
            <Carousel image={product ? product.image : ''}/>
          </div>

          <Spacer />

          <Flex alignItems="center">
            <Text mt="2" textColor="black">
              {product?.name}
            </Text>

            <Spacer />

            <Flex direction="column">
              <Text fontSize="2xl" color="#ffa542">
                {product?.discount ? product.discount : product?.price} ₸
              </Text>
              <Text as="s" fontSize="xl" textAlign="right" color="#ffce7f">
                {product?.discount ? product?.price : ''}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* COMMENT AND BUY */}
        <div className="flex flex-col-reverse gap-5 mt-[23px] md:grid grid-cols-2">
          <Box bg="white" borderRadius="15" maxW="1000">
            <Text
              fontWeight="bold"
              fontSize="2xl"
              width="full"
              boxShadow={"0 4px 15px rgba(0, 0, 0, 0.2)"}
              padding="20px"
              borderRadius="15"
            >
              Описание и характеристики
            </Text>

            <Text padding="20px">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              numquam exercitationem eligendi repudiandae praesentium, non
              accusantium harum aliquid iure, dolor necessitatibus! Magnam
              commodi dolore praesentium dolorum, fugiat deserunt quas impedit
              alias atque fuga. Similique voluptas voluptatibus praesentium quas
              rem unde dolorum aperiam optio, animi, officia beatae non at ea
              impedit, quis quidem quam nisi ducimus. Hic aperiam distinctio
              ipsum illo cumque recusandae voluptate inventore sunt a molestiae
              pariatur odit reprehenderit aut quibusdam, asperiores earum!
              Voluptatibus, id recusandae asperiores, vitae possimus illo quidem
              dolore expedita fugit deleniti dolor excepturi ut. Reprehenderit
              corporis dolores libero dolorum incidunt iusto repellat cum cumque
              veritatis numquam. Quod ipsum totam mollitia voluptatem illo
              laboriosam consequuntur repudiandae eligendi accusantium eveniet
              iure tempore, incidunt eum vitae repellendus omnis provident! Aut
              fugit sequi ut quisquam eos unde recusandae consequatur doloribus,
              ducimus consectetur, nihil aliquid accusamus numquam id quibusdam
              natus autem. Repellendus sunt sequi dolores veniam iste quae magni
              voluptates assumenda aut ad voluptatem corporis odio similique
              provident inventore animi doloremque perspiciatis itaque quasi,
              sit quia harum molestiae. Ad, nobis. Fugit harum aspernatur,
              ratione consequatur dolor unde soluta! Itaque exercitationem eius
              error dicta voluptatum velit ipsam consectetur maiores libero,
              magnam labore facilis laudantium non incidunt eaque numquam iste
              consequatur adipisci.
            </Text>
          </Box>

          <div className="flex flex-col lg:flex-row gap-4">
            <Button
              borderRadius="25px"
              bg="black"
              paddingY="30px"
              textColor="white"
              _hover={{ transform: "scale(0.98)" }}
              onClick={() =>
                toast({
                  title: "Куплен!",
                  description: "У нас только лучшее качество ;)",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              }
              className="max-w-[450px] w-full mx-auto"
            >
              Купить!
            </Button>

            <Button
              leftIcon={<BasketIcon style={{ fill: "white" }} />}
              borderRadius="25px"
              bg="black"
              paddingY="30px"
              textColor="white"
              _hover={{ transform: "scale(0.98)" }}
              className="max-w-[450px] w-full mx-auto"
              onClick={() => handleAddBasket(product.id)}
            >
              Добавить в корзину
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
