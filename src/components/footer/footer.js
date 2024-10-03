import { Container, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import styles from "./footer.module.scss";
import LangIcon from "@icons/lang-icon.svg";
import VkIcon from "@icons/vk-icon.svg";
import InstagramIcon from "@icons/instagram-icon.svg";
import TelegramIcon from "@icons/telegram-icon.svg";
import WhatsAppIcon from "@icons/whatsapp-icon.svg";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <Container maxWidth="1440px">
          <Flex
            minWidth="max-content"
            bg="white"
            className={styles.wrapper_footer}
            p="29px"
          >
            {/* Logo */}
            <Link href="/" legacyBehavior>
              <a className={styles.linkLogo}>QPICK</a>
            </Link>

            <Spacer />

            {/* Links */}
            <Flex flexDirection="column" gap="2">
              <Link href="/favourites" legacyBehavior>
                <a className={styles.link}>Избранное</a>
              </Link>
              <Link href="/basket" legacyBehavior>
                <a className={styles.link}>Корзина</a>
              </Link>
              <Link href="https://t.me/TATU_MM" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Контакты
                </a>
              </Link>
            </Flex>

            <Spacer />

            {/* Language */}
            <Flex flexDirection="column" gap="8">
              <Link href="/conditions" legacyBehavior>
                <a className={styles.link}>Условия сервиса</a>
              </Link>

              <Flex gap="3">
                <LangIcon />

                <span className={styles.lang}>Каз</span>

                <span className={`${styles.lang} ${styles.active}`}>Рус</span>

                <span className={styles.lang}>Eng</span>
              </Flex>
            </Flex>

            <Spacer />

            {/* Social Media */}
            <Flex gap="4" alignItems="center">
              <Link href="https://vk.com/lalisamonali" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
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
                  className={styles.social}
                >
                  <InstagramIcon />
                </a>
              </Link>

              <Link href="https://t.me/TATU_MM" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <TelegramIcon />
                </a>
              </Link>

              <Link href="https://wa.me/998997983614" legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.social}
                >
                  <WhatsAppIcon />
                </a>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
