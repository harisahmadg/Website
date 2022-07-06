// window.addEventListener("resize", ResizeWindow);

// function ResizeWindow() {
//   var dataSpyList = [].slice.call(
//     document.querySelectorAll('[data-bs-spy="scroll"]')
//   );
//   dataSpyList.forEach(function (dataSpyElement) {
//     bootstrap.ScrollSpy.getInstance(dataSpyElement).refresh;
//   });
// }

function hotfixScrollSpy() {
    var dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'))
    let curScroll = getCurrentScroll();
    dataSpyList.forEach(function (dataSpyEl) {
        let offsets = bootstrap.ScrollSpy.getInstance(dataSpyEl)['_offsets'];
        for(let i = 0; i < offsets.length; i++){
            offsets[i] += curScroll;
        }
    })
}

function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
}

window.onload = function () {
    hotfixScrollSpy();
    window.scrollBy(0,1);
}

// found this code to fix the scrolling issue from this link
// https://github.com/twbs/bootstrap/issues/32496
// scrollspy with bootstrap5 has bugs which havent been fixed