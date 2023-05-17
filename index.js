
$(document).ready(function () {
    $('body').mousemove((e) => {
        $('.cursor').css({ left: e.clientX, top: e.clientY });
        $('.cursorInner').css({ left: e.clientX, top: e.clientY });
    });
});
