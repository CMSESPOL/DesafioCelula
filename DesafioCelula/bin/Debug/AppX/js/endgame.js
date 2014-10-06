(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("../pages/endgame.html", {
        init: function () {
            var btnback = document.getElementById('btnback');
            btnback.addEventListener('click', function () {
                window.location('../pages/game.html');
            }, false);
        }
    });
})();