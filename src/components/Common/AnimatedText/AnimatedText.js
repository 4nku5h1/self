import React, { useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['One-default', 'Two-default', 'Three-default'];

export default function AnimatedText({ texts = TEXTS }) {
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            1500, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <TextTransition springConfig={presets.gentle}>{texts[index % texts.length]}</TextTransition>
    );
};