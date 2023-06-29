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