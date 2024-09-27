document.addEventListener("DOMContentLoaded", function() {
    const items = [
        { selector: ".li1", timer: 550 },
        { selector: ".li2", timer: 650 },
        { selector: ".li3", timer: 750 },
        { selector: ".li4", timer: 850 }
    ];

    function loadItem(item) {
        document.querySelector(item.selector).style.visibility = "visible";
    }

    items.forEach(item => {
        setTimeout(() => {
            loadItem(item);
        }, item.timer);
    });
});
