import IphoneIcon from "../../public/icons/iphone-icon.svg";
import NaushnikiByz from "../../public/images/naushniki-byz.png";
import NaushnikiEarpods1 from "../../public/images/naushniki-earpods-1.png";
import NaushnikiEarpods2 from "../../public/images/naushniki-earpods-2.png";
import BesprovodnieAirpods from "../../public/images/besprovodnie-airpods.png";
import BesprovodnieGerlah from "../../public/images/besprovodnie-gerlah.png";
import BesprovodnieBorofone from "../../public/images/besprovodnie-borofone.png";

export const phones = [
  "iPhone 12",
  "Samsung Galaxy S21",
  "Google Pixel 5",
  "OnePlus 8 Pro",
  "Xiaomi Mi 11",
  "Huawei P40 Pro",
  "Samsung Galaxy A21",
  "OnePlus 9 Pro",
  "Xiaomi Mi 12",
];

// Наушники
export const headphones = [
  {
    id: "1",
    name: "Apple BYZ S852I",
    price: 3527,
    discount: 2927,
    rating: 4.7,
    image: NaushnikiByz,
  },
  {
    id: "2",
    name: "Apple EarPods",
    price: 2327,
    discount: null,
    rating: 4.5,
    image: NaushnikiEarpods1,
  },
  {
    id: "3",
    name: "Apple EarPods",
    price: 2327,
    discount: null,
    rating: 4.5,
    image: NaushnikiEarpods2,
  },
  {
    id: "4",
    name: "Apple BYZ S852I",
    price: 3527,
    discount: 2927,
    rating: 4.7,
    image: NaushnikiByz,
  },
  {
    id: "5",
    name: "Apple EarPods",
    price: 2327,
    discount: null,
    rating: 4.5,
    image: NaushnikiEarpods1,
  },
  {
    id: "6",
    name: "Apple EarPods",
    price: 2327,
    discount: null,
    rating: 4.5,
    image: NaushnikiEarpods2,
  },
  {
    id: "7",
    name: "Apple BYZ S852I",
    price: 3527,
    discount: 2927,
    rating: 4.7,
    image: NaushnikiByz,
  },
  {
    id: "8",
    name: "Apple EarPods",
    price: 2327,
    discount: null,
    rating: 4.5,
    image: NaushnikiEarpods2,
  },
];

// Беспроводные наушники
export const wirelessHeadphones = [
  {
    id: "9",
    name: "Apple AirPods",
    price: 9527,
    discount: null,
    rating: 4.7,
    image: BesprovodnieAirpods,
    company: <IphoneIcon />,
  },
  {
    id: "10",
    name: "GERLAX GH-04",
    price: 6527,
    discount: null,
    rating: 4.7,
    image: BesprovodnieGerlah,
    company: null,
  },
  {
    id: "11",
    name: "BOROFONE BO4",
    price: 7527,
    discount: null,
    rating: 4.7,
    image: BesprovodnieBorofone,
    company: null,
  },
  {
    id: "12",
    name: "Gerlah M5",
    price: 6527,
    discount: null,
    rating: 4.7,
    image: BesprovodnieGerlah,
    company: null,
  },
];
