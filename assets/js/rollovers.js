document.querySelectorAll('.rollover').forEach(item => {
    const defaultSrc = item.getAttribute('src');
    const hoverSrc = item.getAttribute('data-hover');

    item.onmouseover = () => {
        item.setAttribute('src', hoverSrc);
    };

    item.onmouseout = () => {
        item.setAttribute('src', defaultSrc);
    };
});
