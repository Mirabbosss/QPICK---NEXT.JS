import { Container, Flex, Box } from "@chakra-ui/react";
import Link from "next/link";
import LangIcon from "../../../public/icons/lang-icon.svg";
import VkIcon from "../../../public/icons/vk-icon.svg";
import InstagramIcon from "../../../public/icons/instagram-icon.svg";
import TelegramIcon from "../../../public/icons/telegram-icon.svg";
import WhatsAppIcon from "../../../public/icons/whatsapp-icon.svg";

const Footer = () => {
  return (
    <footer className='md:fixed bottom-0 left-0 right-0 z-[1000] bg-white md:bg-transparent'>
      <Container maxWidth="1440px">
        <div className='rounded-t-[20px] min-h-[150px] md:shadow-lg bg-white w-full p-4 md:p-[29px] flex justify-evenly md:grid grid-cols-4'>

          {/* Logo */}
          <Link href="/" legacyBehavior> 
            <a className='hidden md:block text-[25px] font-bold text-[#0f0f0f] tracking-[1px] uppercase px-1 py-3 md:px-[10px] md:py-[20px] select-none'>QPICK</a>
          </Link>

          {/* Links */}
          <div className="">

            <Flex flexDirection="column" gap="2">

              <Link href="/favourites" legacyBehavior>
                <a className='cursor-pointer select-none hover:text-[#ffa542]'>Избранное</a>
              </Link>

              <Link href="/basket" legacyBehavior>
                <a className='cursor-pointer select-none hover:text-[#ffa542]'>Корзина</a>
              </Link>

              <Link href="https://t.me/TATU_MM" legacyBehavior>
                <a target="_blank" className='cursor-pointer select-none hover:text-[#ffa542]'>Контакты</a>
              </Link>

              <Link href="/conditions" legacyBehavior>
                <a className='block md:hidden cursor-pointer select-none hover:text-[#ffa542]'>Условия сервиса</a>
              </Link>

            </Flex>

          </div>

          {/* Language */}
          <div className="hidden md:block">
            <Flex flexDirection="column" gap="8">
              <Link href="/conditions" legacyBehavior>
                <a className='cursor-pointer select-none hover:text-[#ffa542]'>Условия сервиса</a>
              </Link>

              <Flex gap="3">
                <LangIcon />

                <span className='font-bold cursor-pointer select-none hover:text-[#ffa542]'>Уз</span>

                <span className='font-bold cursor-pointer select-none hover:text-[#ffa542] text-[#ffa542]'>Рус</span>

                <span className='font-bold cursor-pointer select-none hover:text-[#ffa542]'>Eng</span>
              </Flex>
            </Flex>
          </div>

          {/* Social Media SM, MD */}
          <div className="flex flex-col items-center justify-between md:hidden">

            <Flex gap="3">
              <LangIcon />

              <span className='font-bold cursor-pointer select-none hover:text-[#ffa542]'>Уз</span>

              <span className='font-bold cursor-pointer select-none hover:text-[#ffa542] text-[#ffa542]'>Рус</span>

              <span className='font-bold cursor-pointer select-none hover:text-[#ffa542]'>Eng</span>
            </Flex>

            <Box className="flex gap-5 w-full items-center justify-center">
              <Link href="https://vk.com/lalisamonali" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'
                >
                  <VkIcon />
                </a>
              </Link>

              <Link
                href="https://www.instagram.com/mirabbos_____/"
                legacyBehavior
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'
                >
                  <InstagramIcon />
                </a>
              </Link>
            </Box>

            <Box className="flex gap-5 w-full  items-center justify-center">
              <Link href="https://t.me/TATU_MM" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'
                >
                  <TelegramIcon />
                </a>
              </Link>

              <Link href="https://wa.me/998997983614" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'
                >
                  <WhatsAppIcon />
                </a>
              </Link>
            </Box>

          </div>

          {/* Social Media LG */}
          <div className="hidden md:block">
            <Flex gap="4" alignItems="center">
              <Link href="https://vk.com/lalisamonali" legacyBehavior>

                <a target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'>

                  <VkIcon />
                </a>

              </Link>

              <Link href="https://www.instagram.com/mirabbos_____/" legacyBehavior>

                <a target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'>

                  <InstagramIcon />
                </a>

              </Link>

              <Link href="https://t.me/TATU_MM" legacyBehavior>

                <a target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95' >

                  <TelegramIcon />
                </a>

              </Link>

              <Link href="https://wa.me/998997983614" legacyBehavior>

                <a target="_blank"
                  rel="noopener noreferrer"
                  className='duration-300 hover:scale-95'>

                  <WhatsAppIcon />
                </a>

              </Link>
            </Flex>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
