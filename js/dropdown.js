const container = document.getElementById('divisionDropdown');
const dropDown = document.getElementById('divisionDropdown_c');
const arrow = document.getElementById('arrow');
const dropContent = document.getElementById('dropdownCon');

container.addEventListener('click', () => {
    dropDown.classList.toggle("active-dropdown");
    dropDown.style.transition = "all .175s";
    dropContent.classList.toggle("show");
    dropContent.style.transition = "all .175s";
    arrow.classList.toggle("active-arrow");
    arrow.style.transition = "all .175s";
});