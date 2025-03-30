let biggerGameMode = document.querySelector("#gMode1");
biggerGameMode.addEventListener("mouseover", (e) => {
    let gameMode2 = document.querySelector("#gMode2")
    let gameMode3 = document.querySelector("#gMode3");

    gameMode2.style["border-left"] = "2px solid rgb(232, 0, 0)";
    gameMode3.style["border-left"] = "2px solid rgb(232, 0, 0)";
})