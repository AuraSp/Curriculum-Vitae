$(document).ready(function () {
    $('body').mousemove((e) => {
        $('.cursor').css({ left: e.clientX, top: e.clientY });
        $('.cursorInner').css({ left: e.clientX, top: e.clientY });
    });

    $('.music').click(function () {
        $('i').first().toggleClass('fa-volume-mute');
        if (audio.paused == false) {
            audio.pause();
            audio.currentTime = 0;
        } else {
            audio.play();
        }
    });

    $('.about').click(function () {
        console.log('d')
        window.location.href = './aboutMe.html';
    });

});