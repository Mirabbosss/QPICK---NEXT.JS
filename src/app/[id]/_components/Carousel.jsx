'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import { useState, useEffect } from 'react';

export const Carousel = ({ image }) => {
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
            <div className="embla__container py-5">

                <div className="embla__slide">
                    <div className='grid place-content-center'>
                        <Image src={image ? image : ''} height="237" width="220" alt="img" />
                    </div>
                </div>

                <div className="embla__slide">
                    <div className='grid place-content-center'>
                        <Image src={image ? image : ''} height="237" width="220" alt="img" />
                    </div>
                </div>

                <div className="embla__slide">
                    <div className='grid place-content-center'>
                        <Image src={image ? image : ''} height="237" width="220" alt="img" />
                    </div>
                </div>

            </div>

            <div className="flex justify-center mt-4">
                <div className={`w-3 h-3 rounded-full mx-1 ${0 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>

                <div className={`w-3 h-3 rounded-full mx-1 ${1 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>

                <div className={`w-3 h-3 rounded-full mx-1 ${2 === selectedIndex ? 'bg-blue-500' : 'bg-gray-400'}`}/>
            </div>
        </div>
    )
}
