'use client';

import useEmblaCarousel from 'embla-carousel-react';
import SteklyannieChexol from "../../../public/images/chexli-steklyannie.png";
import SilikonovieChexol from "../../../public/images/chexli-silikonovie.png";
import KojanieChexol from "../../../public/images/chexli-kojanie.png";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

export const CarouselChexli = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        if (emblaApi) {
            const onSelect = () => {
                setSelectedIndex(emblaApi.selectedScrollSnap());
            };
            emblaApi.on('select', onSelect);
            onSelect(); 
        }
    }, [emblaApi]);

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container px-[18px] py-5 gap-x-1">

                <div className="embla__slide">
                    <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
                        <Image src={SteklyannieChexol} height="292" width="151" alt="img" />

                        <Text mt="2" textAlign="center">
                            Стеклянные
                        </Text>
                    </div>
                </div>

                <div className="embla__slide">
                    <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
                        <Image src={SilikonovieChexol} height="292" width="151" alt="img" />

                        <Text mt="2" textAlign="center">
                            Силиконовые
                        </Text>
                    </div>
                </div>

                <div className="embla__slide">
                    <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
                        <Image src={KojanieChexol} height="292" width="151" alt="img" />

                        <Text mt="2" textAlign="center">
                            Кожаные
                        </Text>
                    </div>
                </div>

                <div className="embla__slide">
                    <div className="rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white">
                        <Image src={SteklyannieChexol} height="292" width="151" alt="img" />

                        <Text mt="2" textAlign="center">
                            Стеклянные
                        </Text>
                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-4">
                <div className={`w-3 h-3 rounded-full mx-1 ${0 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>

                <div className={`w-3 h-3 rounded-full mx-1 ${1 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>

                <div className={`w-3 h-3 rounded-full mx-1 ${2 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>

                <div className={`w-3 h-3 rounded-full mx-1 ${3 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>
            </div>
        </div>
    )
}
