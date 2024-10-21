import {
  Box,
  Container,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import ProductCard from "../components/product-card/productCard";
import { headphones, wirelessHeadphones } from "../mocks/mock";
import IntroIphone from "../../public/images/home-intro-iphone.png";
import SteklyannieChexol from "../../public/images/chexli-steklyannie.png";
import SilikonovieChexol from "../../public/images/chexli-silikonovie.png";
import KojanieChexol from "../../public/images/chexli-kojanie.png";
import { CarouselChexli } from "./_components/CarouselChexli";
import { CarouselWirellesHeadphones } from "./_components/CarouselWirellesHeadphones";

const Home = () => {

  return (
    <div>
      <Container maxW="1440px">
        {/* INTRODUCTION */}
        <Flex
          minW="max-content"
          alignItems="center"
          justifyContent="center"
          bg="black"
          paddingX={4}
          userSelect={"none"}
          borderRadius={"30px"}
          height="191px"
          overflow='hidden'
        >
          <Spacer />

          <Box>
            <h1 className="font-semibold max-w-[300px] text-[24px] md:text-[30px] text-white">
              Аксессуары для Iphone 13 Pro Max
            </h1>
          </Box>

          <Spacer />

          <Image
            src={IntroIphone}
            alt="img"
            height="226"
            quality={100}
            className="hidden sm:block"
          />
          <Spacer />
        </Flex>

        {/* TITLE */}
        <h2 className="text-left mt-5 font-semibold text-[16px] sm:text-[20px] text-[#838383]">
          Чехлы
        </h2>

        {/* Чехлы */}
        <div className="hidden gap-y-4 gap-x-5 p-5 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px] md:h-[300px] hover:shadow-lg cursor-pointer select-none bg-white">
            <Image src={SteklyannieChexol} height="292" width="151" alt="img" />

            <Text mt="2" textAlign="center">
              Стеклянные
            </Text>
          </div>

          <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md max-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
            <Image src={SilikonovieChexol} height="292" width="151" alt="img" />

            <Text mt="2" textAlign="center">
              Силиконовые
            </Text>
          </div>

          <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md max-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
            <Image src={KojanieChexol} height="292" width="151" alt="img" />

            <Text mt="2" textAlign="center">
              Кожаные
            </Text>
          </div>

          <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md max-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
            <Image src={SteklyannieChexol} height="292" width="151" alt="img" />

            <Text mt="2" textAlign="center">
              Стеклянные
            </Text>
          </div>
        </div>

        {/* Carousel Чехлы */}
        <div className="sm:hidden">
          <CarouselChexli />
        </div>

        {/* TITLE */}
        <h2 className="text-left mt-5 font-semibold text-[16px] sm:text-[20px] text-[#838383]">
          Наушники
        </h2>

        {/* Наушники */}
        <div className="gap-y-4 gap-x-5 p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {headphones?.map(item => (
            <div key={item.id}>
              <ProductCard item={item} className={`rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px]  hover:shadow-lg cursor-pointer select-none bg-white`}/>
            </div>
          ))}
        </div>

        {/* TITLE */}
        <h2 className="text-left mt-5 font-semibold text-[16px] sm:text-[20px] text-[#838383]">
          Беспроводные наушники
        </h2>

        {/* Беспроводные наушники */}
        <div className="hidden gap-y-4 gap-x-5 p-5 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wirelessHeadphones?.map(item => (
            <div key={item.id}>
              <ProductCard item={item} className={`rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[420px] hover:shadow-lg cursor-pointer select-none bg-white`}/>
            </div>
          ))}
        </div>

        {/* Carousel Наушники */}
        <div className="sm:hidden">
          <CarouselWirellesHeadphones />
        </div>
      </Container>
    </div>
  );
};

export default Home;
