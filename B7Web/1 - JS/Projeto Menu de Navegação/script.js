function openMenu() {
    let check = document.getElementById("menu-area");
    console.log(check);
    if(check.style.width == '200px')
        check.style.width = '0px';
    else
        check.style.width = '200px';
}