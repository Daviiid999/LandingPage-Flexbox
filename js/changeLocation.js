const frame1 = document.querySelector("#frame1");
const frame2 = document.querySelector("#frame2");
const location1 = document.querySelector("#location1");
const location2 = document.querySelector("#location2");

location1.addEventListener("click", () => {
    frame1.classList.add("block-location");
    frame2.classList.remove("block-location");
}) 

location2.addEventListener("click", () => {
    frame2.classList.add("block-location");
    frame1.classList.add("iframe-none");
    frame1.classList.remove("block-location");
})


