import { useEffect, useState, useRef } from 'react';

const useCheckVisibility = ref => {
    const [isVisibleOnViewport, updateVisibilityState] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) =>
            updateVisibilityState(entry.isIntersecting),
        );
    }, []);

    useEffect(() => {
        console.log('yuerf', ref?.current)
        if (ref.current) {
            observerRef.current.observe(ref.current);
        }
        return () => {
            observerRef.current.disconnect();
        };

    }, [ref]);

    return isVisibleOnViewport;
};

export default useCheckVisibility;
