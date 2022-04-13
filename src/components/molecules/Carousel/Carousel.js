import React, { useContext, useState } from 'react';
import { AppContext } from 'providers/AppProvider';
import { CarouselItem, CarouselStyles, InnerStyles, ControlStyles } from './Carousel.styles';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useLocation } from 'react-router-dom';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { media } = useContext(AppContext);
    const { pathname } = useLocation();

    const items = media.filter((item) => item.isTrending);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex > items.length) {
            newIndex = items.length - 1;
        }
        console.log(newIndex);
        setActiveIndex(newIndex);
    };

    return (
        <CarouselStyles>
            <InnerStyles activeIndex={activeIndex}>
                {items.map((item) => {
                    return (
                        <CarouselItem key={item.title}>
                            <Thumbnail item={item} trending={item.isTrending && pathname === '/'} />
                        </CarouselItem>
                    );
                })}
            </InnerStyles>
            <ControlStyles onClick={() => updateIndex(activeIndex - 1)} left>
                <span>&#8592;</span>
            </ControlStyles>
            <ControlStyles onClick={() => updateIndex(activeIndex + 1)} right>
                <span>&#8594;</span>
            </ControlStyles>
        </CarouselStyles>
    );
};

export default Carousel;
