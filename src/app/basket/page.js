"use client";
import styles from "./basket.module.scss";
import EmptyBasket from "@components/empty-basket/emptyBasket";
import Map from "@components/map/map";
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Text,
  Button,
  Spacer,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { getBasketItems } from "@utils/basket";
import { useState, useEffect } from "react";
import { headphones, wirelessHeadphones } from "@mocks/mock";
import { removeFromBasket } from "@utils/basket";
import Image from "next/image";
import DeleteInBasketIcon from "@icons/deleteInBasketIcon.svg";
import KuryerCarIcon from "@icons/kuryer-car.svg";

const Basket = () => {
  const toast = useToast();
  const [basketItems, setBasketItems] = useState([]);
  const allBasketItems = [...headphones, ...wirelessHeadphones];
  const curerPrice = 499;

  const [counters, setCounters] = useState({});

  const increaseCounter = (id) => {
    setCounters((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseCounter = (id) => {
    setCounters((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const totalProducts = Object.values(counters).reduce((acc, count) => acc + count, 0);
  const totalPrices = allBasketItems.reduce((acc, item) => {
    const count = counters[item.id] || 0;
    return totalProducts + acc + count * item.price;
  }, 0) + curerPrice;

  useEffect(() => {
    const baskedData = getBasketItems("basket");
    setBasketItems(baskedData);
  }, []);

  const filteredHeadphones = allBasketItems.filter((item) =>
    basketItems.includes(item.id)
  );

  return (
    <div>
      <Container maxW="1440px" paddingBottom="170px" paddingTop="100px">
        {basketItems.length == 0 ? (
          <EmptyBasket />
        ) : (
          <>
            <h1 className="text-left font-semibold text-[20px] text-[black]">
              Избранное
            </h1>
            <Flex gap={20}>
              <Flex flexDirection="column" rowGap={5} minW="850" mt="6">
                {filteredHeadphones.map((item, index) => {
                  const count = counters[item.id] || 0;
                  const totalPrice = count * item.price;
                  return (
                    <Flex
                      key={index}
                      borderRadius="30px"
                      overflow="hidden"
                      shadow="md"
                      bg="white"
                      width="full"
                      minHeight="260px"
                      _hover={{ shadow: "lg" }}
                      userSelect="none"
                      paddingY={4}
                      paddingX={4}
                    >
                      <Flex direction="column" justifyContent="space-between">
                        <Flex gap="7" paddingX={4} alignItems="center">
                          <Image
                            src={item.image.src}
                            width="146"
                            height="136"
                          />
                          <Box mt="5">
                            <Text fontSize="2xl">{item.name}</Text>
                            <Text fontSize="xl" color="#aaaaaa">
                              {totalPrice}
                            </Text>
                          </Box>
                        </Flex>

                        <Spacer />

                        <ButtonGroup marginTop={2} gap={2}>
                          <Button
                            onClick={() => decreaseCounter(item.id)}
                            borderRadius="50%"
                            bg="#ffce7f"
                            color="white"
                          >
                            <MinusIcon />
                          </Button>

                          <Button>{counters[item.id] || 0}</Button>

                          <Button
                            onClick={() => increaseCounter(item.id)}
                            borderRadius="50%"
                            bg="#ffce7f"
                            color="white"
                          >
                            <AddIcon />
                          </Button>
                        </ButtonGroup>
                        <Spacer />
                      </Flex>

                      <Spacer />

                      <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Box
                          onClick={() => (
                            removeFromBasket(item.id),
                            toast({
                              title: "Удалено.",
                              description: "Товар был удален из списка.",
                              status: "error",
                              duration: 2000,
                              isClosable: true,
                            })
                          )}
                        >
                          <DeleteInBasketIcon cursor="pointer" />
                        </Box>
                        <Spacer />
                        <Text fontSize="xl">{item.price} ₸</Text>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>

              <Box>
                <Flex
                  borderRadius="30px"
                  overflow="hidden"
                  shadow="md"
                  bg="white"
                  minWidth="400px"
                  maxHeight="80px"
                  _hover={{ shadow: "lg" }}
                  userSelect="none"
                  paddingY={4}
                  paddingX={4}
                  marginTop={8}
                >
                  <Text fontSize="2xl">Итого: {totalProducts} шт.</Text>
                  <Spacer />
                  <Text fontSize="2xl">{totalPrices} ₸</Text>
                </Flex>

                <Button
                  borderRadius="25px"
                  minW="full"
                  bg="black"
                  paddingY="30px"
                  textColor="white"
                  _hover={{ transform: "scale(0.98)" }}
                  onClick={() =>
                    toast({
                      title: "Оплата в процессе.",
                      description: "Товар скоро будет у вас в руках ;)",
                      status: "success",
                      duration: 2000,
                      isClosable: true,
                    })
                  }
                >
                  Перейти к оформлению
                </Button>
              </Box>
            </Flex>

            <Box
              marginTop="30"
              borderRadius="30px"
              overflow="hidden"
              shadow="md"
              bg="white"
              width="full"
              maxW="850px"
              minHeight="260px"
              _hover={{ shadow: "lg" }}
              paddingY={4}
              paddingX={6}
            >
              <h1 className="text-left font-semibold text-[20px] text-[black]">
                Доставка
              </h1>

              <Map />

              <Flex>
                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem
                    outline={"none"}
                    border={"none"}
                    shadow={"none"}
                    dropShadow={"none"}
                    borderRadius={"20px"}
                    maxWidth={"700px"}
                  >
                    <AccordionButton gap={4}>
                      <KuryerCarIcon />
                      <Box as="span" textAlign="left">
                        Доставка курьером
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} maxWidth={"700px"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Spacer />
                <Text fontSize={"lg"}>{curerPrice}</Text>
              </Flex>
            </Box>
          </>
        )}
      </Container>
    </div>
  );
};

export default Basket;
