'use client';

import useEmblaCarousel from 'embla-carousel-react';
import ProductCard from "../../components/product-card/productCard";
import { wirelessHeadphones } from "../../mocks/mock";
import { useState, useEffect } from 'react';

export const CarouselWirellesHeadphones = () => {
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
        <div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container px-[18px] py-5 gap-x-1">

                    {wirelessHeadphones?.map(item => (
                        <div key={item.id} className="embla__slide">
                            <ProductCard item={item} className={`rounded-[30px] overflow-hidden grid place-content-center px-5 py-5 shadow-md min-h-[400px] hover:shadow-lg cursor-pointer select-none bg-white`} />
                        </div>
                    ))}

                </div>

                <div className="flex justify-center mt-4">
                    {wirelessHeadphones?.map((_, index) => (
                        <div key={index} className={`w-3 h-3 rounded-full mx-1 ${index === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`} />
                    ))}
                </div>

            </div>
        </div>
    );
};