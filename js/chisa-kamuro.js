document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".chisa-tab");
    const sections = document.querySelectorAll(".chisa-section");

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const target = tab.getAttribute("data-section");

            /* remove active state */
            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            /* activate clicked tab */
            tab.classList.add("active");

            const targetSection = document.getElementById(target);

            if (targetSection) {
                targetSection.classList.add("active");
            }

        });

    });

});
