import React, { useState, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
    <div className="item" data-value="1"></div>,
    <div className="item" data-value="2"></div>,
    <div className="item" data-value="3"></div>,
    <div className="item" data-value="4"></div>,
    <div className="item" data-value="5"></div>,
];

const Carousel = () => {
    const percent = 0.3;
    const section = useRef(null);
    const [padding, setPadding] = useState(0);

    const syncState = () => {
        const { current } = section;
        if (current) {
            setPadding(current.offsetWidth * percent);
        }
    };

    useEffect(syncState, []);

    return (
        <div style={{ position: 'relative' }} ref={section}>
            <AliceCarousel
                infinite
                mouseTracking
                items={items}
                paddingRight={padding}
                onResized={syncState}
            />
        </div>
    );
};

export default Carousel;
