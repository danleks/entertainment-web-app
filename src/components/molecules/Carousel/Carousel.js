import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from 'providers/AppProvider';
import { CarouselItem, CarouselStyles, InnerStyles, ControlStyles } from './Carousel.styles';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { ReactComponent as ArrowLeft } from 'assets/icons/caret-left.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/caret-right.svg';

const Carousel = () => {
    const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const { media } = useContext(AppContext);
    const { pathname } = useLocation();

    useEffect(() => {
        let mediaFiltered = media.filter((item) => item.isTrending);
        setItems(mediaFiltered);
    }, [media]);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = items.length - 1;
        } else if (newIndex >= items.length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <CarouselStyles {...handlers}>
            <InnerStyles activeIndex={activeIndex}>
                {items.map((item, i) => {
                    return (
                        <CarouselItem key={`item.title${i}`}>
                            <Thumbnail item={item} trending={item.isTrending && pathname === '/'} />
                        </CarouselItem>
                    );
                })}
            </InnerStyles>
            <ControlStyles onClick={() => updateIndex(activeIndex - 1)} left>
                <ArrowLeft />
            </ControlStyles>
            <ControlStyles onClick={() => updateIndex(activeIndex + 1)} right>
                <ArrowRight />
            </ControlStyles>
        </CarouselStyles>
    );
};

export default Carousel;
