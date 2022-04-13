import styled from 'styled-components';

export const CarouselStyles = styled.div`
    position: relative;
    overflow: hidden;
`;

export const InnerStyles = styled.ul`
    --colGap: 1.6rem;
    display: inline-flex;
    gap: var(--colGap);
    list-style: none;
    transform: ${({ activeIndex }) => `translateX(-${activeIndex * 20}%)`};
    transition: transform 0.3s;

    @media (min-width: 768px) {
        --colGap: 4rem;
    }
`;

export const CarouselItem = styled.li`
    --width: 24rem;
    --height: 14rem;

    width: var(--width);
    height: var(--height);

    @media (min-width: 768px) {
        --width: 47rem;
        --height: 23rem;
        --colGap: 4rem;
    }
`;

export const ControlStyles = styled.button`
    position: absolute;
    left: ${({ left }) => left && 0};
    right: ${({ right }) => right && 0};
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border: 1px solid red;

    @media (min-width: 1000px) {
        width: 10%;
    }
`;
