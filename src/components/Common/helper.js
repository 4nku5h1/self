export function observeElementById(id, callBack) {
    const el = document.querySelector(`#${id}`);
    const observer = new window.IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                callBack(id);
                setTimeout(() => {
                    // el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    console.log("fsdgohjujih", id)
                }, 100);
                return;
            }
        },
        {
            threshold: 0.2,
        },
    );

    observer.observe(el);
}