let isPanelVisible = true;

function togglePanel() {
    const panel = document.getElementById('rightPanel');
    if (isPanelVisible) {
        panel.style.transform = 'translateX(100%)';
    } else {
        panel.style.transform = 'translateX(0)';
    }
    isPanelVisible = !isPanelVisible;
}