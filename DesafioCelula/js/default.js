(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("../default.html", {
        init: function () {
            var play = document.getElementById('play');
            play.addEventListener('click', function () {
                window.location('../pages/game.html');
            }, false);
        }
    });
})();