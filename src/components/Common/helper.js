export function observeElementById(id, callBack) {
    const el = document.querySelector(`#${id}`);
    const observer = new window.IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                callBack(id);
                return;
            }
        },
        {
            threshold: 0.2,
        },
    );

    observer.observe(el);
}
export function debounce(func) {
    let isCan = true;

    return () => {
        if (isCan) {
            func();
            isCan = false;
            setTimeout(() => isCan = true, 50);
        }
    }
}
export function scrollToId(id) {
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}
