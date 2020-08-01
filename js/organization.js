$(function () {
    $('#ani1 img').css("left", "79px");
    $('#ani2 img').css("left", "-79px");

})

window.onload = function () {
    const goNum = document.querySelector('#goNum');
    const goBtn = document.querySelector('#goBtn');
    goBtn.addEventListener("click", handler);
}

function handler(e) {
    if (parseInt(goNum.value) > 0 && parseInt(goNum.value) <= 6) {
        e.target.setAttribute('href', `#card${goNum.value}`);
        goNum.value = '';
    } else {
        e.target.setAttribute('href', '#go');
        goNum.value = '';
    }

}