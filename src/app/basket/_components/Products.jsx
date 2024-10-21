"use client";

import EmptyBasket from "../../../components/empty-basket/emptyBasket";
import {
  Box,
  ButtonGroup,
  Container,
  Flex,
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
import { getBasketItems } from "../../../utils/basket";
import { useState, useEffect } from "react";
import { headphones, wirelessHeadphones } from "../../../mocks/mock";
import { removeFromBasket } from "../../../utils/basket";
import Image from "next/image";
import DeleteInBasketIcon from "../../../../public/icons/deleteInBasketIcon.svg";
import KuryerCarIcon from "../../../../public/icons/kuryer-car.svg";

export const Products = () => {
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

  const totalProducts = Object.values(counters).reduce(
    (acc, count) => acc + count,
    0
  );
  const totalPrices =
    allBasketItems.reduce((acc, item) => {
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
      <Container maxW="1440px">
        {basketItems.length == 0 ? (
          <EmptyBasket />
        ) : (
          <>
            <h1 className="text-left font-semibold text-[20px] text-[black]">
              Корзина
            </h1>
            <div className="grid grid-cols-1 lg:flex gap-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:flex flex-col gap-y-5 mt-6 lg:max-w-[850px] w-full mt-6">
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
                            alt="img"
                          />
                          <Box mt="5">
                            <p className="text-[16px] sm:text-[20px]">{item.name}</p>
                            <p className="text-[16px] sm:text-[20px] text-[#aaaaaa]">
                              {totalPrice}
                            </p>
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
                        <p className="text-[20px] sm:text-[24px] min-w-[70px]">{item.price} ₸</p>
                      </Flex>
                    </Flex>
                  );
                })}
              </div>

              <Box className="hidden lg:block">
                <Flex
                  borderRadius="30px"
                  overflow="hidden"
                  shadow="md"
                  bg="white"
                  minW="400px"
                  maxHeight="80px"
                  _hover={{ shadow: "lg" }}
                  userSelect="none"
                  paddingY={4}
                  paddingX={4}
                  marginTop={8}
                >
                  <p className="text-[20px] sm:text-[24px]">Итого: {totalProducts} шт.</p>
                  <Spacer />
                  <p className="text-[20px] sm:text-[24px]">{totalPrices} ₸</p>
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
            </div>

            <Box
              marginTop="30"
              borderRadius="30px"
              overflow="hidden"
              shadow="md"
              bg="white"
              minHeight="260px"
              _hover={{ shadow: "lg" }}
              paddingY={4}
              paddingX={6}
              className="w-full lg:max-w-[850px]"
            >
              <h1 className="text-left font-semibold text-[20px] text-[black]">
                Доставка
              </h1>

              {/* MAP */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.389195731481!2d69.24407331464607!3d41.299495979273846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4b0969dd75d%3A0x889e17321356d36!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1697534143514!5m2!1sen!2s"
                height="173"
                style={{
                  border: "0",
                  height: "173px",
                  borderRadius: "30px",
                  marginTop: "17px",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="lg:max-w-[850px] w-full"
              />

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
                <p className="text-[22px] sm:text-[24px] min-w-[70px]">{curerPrice} ₸</p>
              </Flex>
            </Box>

            <Box className="lg:hidden max-w-[500px] w-full mx-auto">
              <Flex
                borderRadius="30px"
                overflow="hidden"
                shadow="md"
                bg="white"
                maxHeight="80px"
                _hover={{ shadow: "lg" }}
                userSelect="none"
                paddingY={4}
                paddingX={4}
                marginTop={8}
              >
                <p className="text-[20px] sm:text-[24px]">Итого: {totalProducts} шт.</p>
                <Spacer />
                <p className="text-[20px] sm:text-[20px]">{totalPrices} ₸</p>
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
          </>
        )}
      </Container>
    </div>
  );
};
