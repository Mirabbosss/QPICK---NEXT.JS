import { Button, Container, Flex } from "@chakra-ui/react";
import EmptBasketImg from "../../../public/images/empty-basket-img.png";
import Image from "next/image";
import Link from "next/link";

const EmptyBasket = () => {
  return (
    <div className="min-h-[calc(100vh-270px)]">
      <Container maxW="1440px">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="30px"
          userSelect='none'
        >
          <Image src={EmptBasketImg} width={410} height={315} alt="empty" />

          <h2 className="text-[24px] sm:text-[30px] text-[#101010]">Корзина пуста</h2>

          <p className="font-normal text-[14px] sm:text-[20px] text-[#101010]">
            Но это никогда не поздно исправить :)
          </p>

          <Link href='/' passHref legacyBehavior>
            <Button
              borderRadius="25px"
              bg="black"
              paddingY="30px"
              textColor="white"
              _hover={{ transform: "scale(0.98)" }}
              className="text-center sm:max-w-[540px] w-full"
            >
              В каталог товаров
            </Button>
          </Link>
        </Flex>
      </Container>
    </div>
  );
};

export default EmptyBasket;
