export default function smoothScroll(id) {
    const wrapper = document.querySelector(".main");
    const ease = 0.05; // 20%
    const scroll = {
        current: 0, // current scroll position
        target: 0, // target scroll position
        limit: 0 // limit of scroll
    };
    const updateTarget = (e) => {
        scroll.target += e.deltaY;
    };
    document.addEventListener("mousewheel", updateTarget);

    // linear interpolation function
    const lerp = (current, target) => {
        const distanceBetween = target - current;
        const distanceToTravel = distanceBetween * ease;
        return current + distanceToTravel;
    };

    const clamp = (min, max, value) => {
        const clamped = Math.min(Math.max(value, min), max);
        return clamped;
    };
    const smoothScroll = () => {
        const maxScroll = wrapper.clientHeight - window.innerHeight;
        scroll.target = clamp(0, maxScroll, scroll.target);

        const { current, target } = scroll;

        const transition = lerp(current, target);
        scroll.current = transition;

        wrapper.style.transform = `translateY(-${scroll.current}px)`;
        window.requestAnimationFrame(smoothScroll);
    };
    smoothScroll();

}