function expandMenu() {
    console.log("expand")
    var navlist = document.getElementsByClassName("side-nav")[0].getElementsByTagName('a');
    for (let i = 0; i < navlist.length; i++) {
        navlist[i].style.display = "block";
    }
    document.getElementsByClassName("menu-icon")[0].style.display = "none";
    document.getElementsByClassName("exit-icon")[0].style.display = "block";
}

function collapseMenu() {
    console.log("collapse")
    var navlist = document.getElementsByClassName("side-nav")[0].getElementsByTagName('a');
    for (let i = 0; i < navlist.length; i++) {
        navlist[i].style.display = "none";
    }
    document.getElementsByClassName("menu-icon")[0].style.display = "block";
    document.getElementsByClassName("exit-icon")[0].style.display = "none";
}