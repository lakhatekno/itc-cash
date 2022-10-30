const container = document.getElementById('divisionDropdown');
const dropDown = document.getElementById('divisionDropdown_c');
const arrow = document.getElementById('arrow');
const dropContent = document.getElementById('dropdownCon');

container.addEventListener('click', () => {
    dropDown.classList.toggle("active-dropdown");
    dropDown.style.transition = "all .175s";
    if (dropDown.classList.contains("filled-dropdown")) {
        setTimeout(() => {
            container.style = "width: fit-content";
        }, 175);
        dropDown.classList.remove("filled-dropdown");
    }
    else if (
        !dropDown.classList.contains("filled-dropdown") 
        && dropDown.innerText != "choose your division"
        ) {
        dropDown.classList.add("filled-dropdown");
        container.removeAttribute("style");
    }

    dropContent.classList.toggle("dd-show");
    arrow.classList.toggle("active-arrow");
    dropContent.style.transition = "all .175s";
    arrow.style.transition = "all .175s";
});

const divisions = document.querySelectorAll('.dropdown-list');

divisions.forEach( division => {
    division.addEventListener('click', () => {
        dropDown.classList.remove("active-dropdown");
        dropDown.classList.add("filled-dropdown");
        if (container.hasAttribute("style")) {
            container.removeAttribute("style");
        }
        if (arrow.classList.contains("active-arrow")) {
            arrow.classList.remove("active-arrow");
            arrow.style.transition = "all .3s";
        }
        dropDown.style.transition = "all .175s";
        dropDown.innerText = division.innerHTML;
        dropContent.classList.toggle("dd-show");
        dropContent.style.transition = "all .175s";
    })
});