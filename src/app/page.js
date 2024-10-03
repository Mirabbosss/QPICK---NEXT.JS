import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import ProductCard from "@components/product-card/productCard";
import { headphones, wirelessHeadphones } from "@mocks/mock";
import IntroIphone from "@images/home-intro-iphone.png";
import SteklyannieChexol from "@images/chexli-steklyannie.png";
import SilikonovieChexol from "@images/chexli-silikonovie.png";
import KojanieChexol from "@images/chexli-kojanie.png";

const Home = () => {
  
  return (
    <div>
      <Container maxW="1440px" paddingBottom="170px" paddingTop="100px">
        {/* INTRODUCTION */}
        <Flex
          minWidth="max-content"
          alignItems="center"
          justifyContent="center"
          bg="black"
          paddingX={4}
          userSelect={"none"}
          borderRadius={"30px"}
          height="191px"
        >
          <Spacer />

          <Box>
            <h1 className="font-semibold max-w-[300px] text-[30px] text-white">
              Аксессуары для Iphone 13 Pro Max
            </h1>
          </Box>

          <Spacer />

          <Image
            src={IntroIphone}
            alt="img"
            height="226"
          />
          <Spacer />
        </Flex>

        {/* TITLE */}
        <h2 className="text-left mt-5 font-semibold text-[20px] text-[#838383]">
          Чехлы
        </h2>

        {/* Чехлы */}
        <Flex minW={"max-content"} paddingY={5}>
          <Box
            borderRadius="30px"
            overflow="hidden"
            shadow="md"
            bg="white"
            maxW="sm"
            paddingY="25px"
            paddingX="80px"
            height="400px"
            _hover={{ shadow: "lg" }}
            cursor="pointer"
            userSelect="none"
          >
            <Image src={SteklyannieChexol} height="292" width="151" />

            <Text mt="2" textAlign="center">
              Стеклянные
            </Text>
          </Box>

          <Spacer />

          <Box
            borderRadius="30px"
            overflow="hidden"
            shadow="md"
            bg="white"
            maxW="sm"
            paddingY="25px"
            paddingX="80px"
            height="400px"
            _hover={{ shadow: "lg" }}
            cursor="pointer"
            userSelect="none"
          >
            <Image src={SilikonovieChexol} height="292" width="151" />

            <Text mt="2" textAlign="center">
              Силиконовые
            </Text>
          </Box>

          <Spacer />

          <Box
            borderRadius="30px"
            overflow="hidden"
            shadow="md"
            bg="white"
            maxW="sm"
            paddingY="25px"
            paddingX="80px"
            height="400px"
            _hover={{ shadow: "lg" }}
            cursor="pointer"
            userSelect="none"
          >
            <Image src={KojanieChexol} height="292" width="151" />

            <Text mt="2" textAlign="center">
              Кожаные
            </Text>
          </Box>

          <Spacer />

          <Box
            borderRadius="30px"
            overflow="hidden"
            shadow="md"
            bg="white"
            maxW="sm"
            paddingY="25px"
            paddingX="80px"
            height="400px"
            _hover={{ shadow: "lg" }}
            cursor="pointer"
            userSelect="none"
          >
            <Image src={SteklyannieChexol} height="292" width="151" />

            <Text mt="2" textAlign="center">
              Стеклянные
            </Text>
          </Box>
        </Flex>

        {/* TITLE */}
        <h2 className="text-left mt-5 font-semibold text-[20px] text-[#838383]">
          Наушники
        </h2>

        {/* Наушники */}
        <Grid templateColumns="repeat(4, 1fr)" gap={5} paddingY={5}>
          {headphones?.map(item => (
            <GridItem  key={item.id}>      
              <ProductCard item={item} />
            </GridItem>
          ))}
        </Grid>

        {/* TITLE */}
        <h2 className="text-left mt-5 font-semibold text-[20px] text-[#838383]">
          Беспроводные наушники
        </h2>

        {/* Беспроводные наушники */}
        <Grid templateColumns="repeat(4, 1fr)" gap={5} paddingY={5}>
          {wirelessHeadphones?.map(item => (
            <GridItem  key={item.id}>
              <ProductCard item={item} />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
