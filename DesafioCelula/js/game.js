
(function () {
    "use strict";
    var logosSucess = 0;
    var page = WinJS.UI.Pages.define("../pages/game.html", {
       init: function () {
            
           var canvas1 = document.getElementById('circle1');
           var canvas2 = document.getElementById('circle2');
           var canvas3 = document.getElementById('circle3');
           var canvas4 = document.getElementById('circle4');
           var canvas5 = document.getElementById('circle5');
           var canvas6 = document.getElementById('circle6');
           var canvas7 = document.getElementById('circle7');
           var canvas8 = document.getElementById('circle8');
           var counter = 0;
           var size = Math.round(document.getElementById('mainContent').getBoundingClientRect().width * 0.043);
           var timer = document.querySelector('#timer img');
           

           canvas1.setAttribute("width", size);
           canvas1.setAttribute("height", size);

           canvas2.setAttribute("width", size);
           canvas2.setAttribute("height", size);

           canvas3.setAttribute("width", size);
           canvas3.setAttribute("height", size);

           canvas4.setAttribute("width", size);
           canvas4.setAttribute("height", size);

           canvas5.setAttribute("width", size);
           canvas5.setAttribute("height", size);

           canvas6.setAttribute("width", size);
           canvas6.setAttribute("height", size);

           canvas7.setAttribute("width", size);
           canvas7.setAttribute("height", size);

           canvas8.setAttribute("width", size);
           canvas8.setAttribute("height", size);

           var mainContent = document.getElementById('mainContent');
           var ls = document.getElementById('left_side');
           var rs = document.getElementById('right_side');

           var context1 = canvas1.getContext('2d');
           var centerX1 = canvas1.width / 2;
           var centerY1 = canvas1.height / 2;
           
           var context2 = canvas2.getContext('2d');
           var centerX2 = canvas2.width / 2;
           var centerY2 = canvas2.height / 2;

           var context3 = canvas3.getContext('2d');
           var centerX3 = canvas3.width / 2;
           var centerY3 = canvas3.height / 2;

           var context4 = canvas4.getContext('2d');
           var centerX4 = canvas4.width / 2;
           var centerY4 = canvas4.height / 2;

           var context5 = canvas5.getContext('2d');
           var centerX5 = canvas5.width / 2;
           var centerY5 = canvas5.height / 2;

           var context6 = canvas6.getContext('2d');
           var centerX6 = canvas6.width / 2;
           var centerY6 = canvas6.height / 2;

           var context7 = canvas7.getContext('2d');
           var centerX7 = canvas7.width / 2;
           var centerY7 = canvas7.height / 2;

           var context8 = canvas8.getContext('2d');
           var centerX8 = canvas8.width / 2;
           var centerY8 = canvas8.height / 2;
           


           var radius = 20;

           var left1 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 2 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top1 = Math.round(mainContent.getBoundingClientRect().height * (0.86) + (canvas1.getBoundingClientRect().height / 2)); //TOP
           
           var left2 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 3.35 + (canvas1.getBoundingClientRect().width / 2) ); //LEFT
           var top2 = Math.round(mainContent.getBoundingClientRect().height * (0.775) + (canvas1.getBoundingClientRect().height / 2) ); //TOP

           var left3 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 4.88 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top3 = Math.round(mainContent.getBoundingClientRect().height * (0.722) + (canvas1.getBoundingClientRect().height / 2)); //TOP
           
           var left4 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 4.5 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top4 = Math.round(mainContent.getBoundingClientRect().height * (0.525) + (canvas1.getBoundingClientRect().height / 2)); //TOP

           var left5 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 3.05 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top5 = Math.round(mainContent.getBoundingClientRect().height * (0.3855) + (canvas1.getBoundingClientRect().height / 2)); //TOP

           var left6 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 1.34 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top6 = Math.round(mainContent.getBoundingClientRect().height * (0.51) + (canvas1.getBoundingClientRect().height / 2)); //TOP

           var left7 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 1.74 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top7 = Math.round(mainContent.getBoundingClientRect().height * (0.268) + (canvas1.getBoundingClientRect().height / 2)); //TOP

           var left8 = Math.round(ls.getBoundingClientRect().width + (mainContent.getBoundingClientRect().width / 7) * 3.735 + (canvas1.getBoundingClientRect().width / 2)); //LEFT
           var top8 = Math.round(mainContent.getBoundingClientRect().height * (0.155) + (canvas1.getBoundingClientRect().height / 2)); //TOP
           

           canvas1.style.left = left1 + "px";
           canvas1.style.top = top1 + "px";
           var dc1 = document.getElementById("myDropTarget1");
           //var ps1 = document.getElementById("myPlusSign1");
           dc1.style.left = left1 + "px";
           dc1.style.top = top1 + "px";
           dc1.setAttribute("width", size);
           dc1.setAttribute("height", size);
           
           canvas2.style.left = left2 + "px";
           canvas2.style.top = top2 + "px";
           var dc2 = document.getElementById("myDropTarget2");
           dc2.style.left = left2 + "px";
           dc2.style.top = top2 + "px";
           dc2.setAttribute("width", size);
           dc2.setAttribute("height", size);
                       
           canvas3.style.left = left3 + "px";
           canvas3.style.top = top3 + "px";
           var dc3 = document.getElementById("myDropTarget3");
           dc3.style.left = left3 + "px";
           dc3.style.top = top3 + "px";
           dc3.setAttribute("width", size);
           dc3.setAttribute("height", size);
           
           canvas4.style.left = left4 + "px";
           canvas4.style.top = top4 + "px";
           var dc4 = document.getElementById("myDropTarget4");
           dc4.style.left = left4 + "px";
           dc4.style.top = top4 + "px";
           dc4.setAttribute("width", size);
           dc4.setAttribute("height", size);

           canvas5.style.left = left5 + "px";
           canvas5.style.top = top5 + "px";
           var dc5 = document.getElementById("myDropTarget5");
           dc5.style.left = left5 + "px";
           dc5.style.top = top5 + "px";
           dc5.setAttribute("width", size);
           dc5.setAttribute("height", size);

           canvas6.style.left = left6 + "px";
           canvas6.style.top = top6 + "px";
           var dc6 = document.getElementById("myDropTarget6");
           dc6.style.left = left6 + "px";
           dc6.style.top = top6 + "px";
           dc6.setAttribute("width", size);
           dc6.setAttribute("height", size);

           canvas7.style.left = left7 + "px";
           canvas7.style.top = top7 + "px";
           var dc7 = document.getElementById("myDropTarget7");
           dc7.style.left = left7 + "px";
           dc7.style.top = top7 + "px";
           dc7.setAttribute("width", size);
           dc7.setAttribute("height", size);

           canvas8.style.left = left8 + "px";
           canvas8.style.top = top8 + "px";
           var dc8 = document.getElementById("myDropTarget8");
           dc8.style.left = left8 + "px";
           dc8.style.top = top8 + "px";
           dc8.setAttribute("width", size);
           dc8.setAttribute("height", size);
           
           context1.beginPath();
           context2.beginPath();
           context3.beginPath();
           context4.beginPath();
           context5.beginPath();
           context6.beginPath();
           context7.beginPath();
           context8.beginPath();

           context1.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context2.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context3.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context4.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context5.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context6.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context7.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);
           context8.arc(centerX1, centerY1, radius, 0, 2 * Math.PI);

           context1.fillStyle = '#06BAF9';
           context2.fillStyle = '#06BAF9';
           context3.fillStyle = '#06BAF9';
           context4.fillStyle = '#06BAF9';
           context5.fillStyle = '#06BAF9';
           context6.fillStyle = '#06BAF9';
           context7.fillStyle = '#06BAF9';
           context8.fillStyle = '#06BAF9';
           
           context1.fill();
           context2.fill();
           context3.fill();
           context4.fill();
           context5.fill();
           context6.fill();
           context7.fill();
           context8.fill();         

           var t;
           function timedCount() {
               
               timer.style.left = counter + "%";
               if (counter == 90)
                   clearTimeout(t);
               else {
                   if (logosSucess == 8) {
                       var sidel = document.getElementById("left_side");
                       window.location('../pages/endgame.html?t='+counter);
                   } else {
                       counter = counter + 1;
                       t = setTimeout(function () { timedCount(); }, 1000);
                   }
               }
           }
           timedCount();
       },
       ready: function (element, options) {
          
           var dropTarget1 = element.querySelector("#myDropTarget1");

           dropTarget1.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget1.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget1, "drop-ready");
               var canvas1 = document.getElementById('circle1');
               var context1 = canvas1.getContext('2d');
               context1.fillStyle = 'red';
               context1.fill();
           });

           dropTarget1.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget1, "drop-ready");
               var canvas1 = document.getElementById('circle1');
               var context1 = canvas1.getContext('2d');
               context1.fillStyle = '#06BAF9';
               context1.fill();
           });

           dropTarget1.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget1, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/win3_1.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWin31");
                   var canvas1 = document.getElementById('circle1');
                   

                   var nuLeft = Math.round(logo.getBoundingClientRect().left - (logo.getBoundingClientRect().right + canvas1.getBoundingClientRect().right + (logo.getBoundingClientRect().width / 2)));
                   var nuTop = canvas1.getBoundingClientRect().top - logo.getBoundingClientRect().top + logo.getBoundingClientRect().height / 2;

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context1 = canvas1.getContext('2d');
                   context1.clearRect(0, 0, canvas1.width, canvas1.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas1 = document.getElementById('circle1');
                   var context1 = canvas1.getContext('2d');
                   context1.fillStyle = '#06BAF9';
                   context1.fill();
               }

           });

           var dropTarget2 = element.querySelector("#myDropTarget2");

           dropTarget2.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget2.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget2, "drop-ready");
               var canvas2 = document.getElementById('circle2');
               var context2 = canvas2.getContext('2d');
               context2.fillStyle = 'red';
               context2.fill();
           });

           dropTarget2.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget2, "drop-ready");
               var canvas2 = document.getElementById('circle2');
               var context2 = canvas2.getContext('2d');
               context2.fillStyle = '#06BAF9';
               context2.fill();
           });

           dropTarget2.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget2, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/win95.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWin95");
                   var canvas2 = document.getElementById('circle2');

                   var nuLeft = Math.round(logo.getBoundingClientRect().right - (logo.getBoundingClientRect().left + canvas2.getBoundingClientRect().right + (logo.getBoundingClientRect().width * 0)));
                   var nuTop = canvas2.getBoundingClientRect().top - logo.getBoundingClientRect().top - logo.getBoundingClientRect().height / 2;

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context2 = canvas2.getContext('2d');
                   context2.clearRect(0, 0, canvas2.width, canvas2.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas2 = document.getElementById('circle2');
                   var context2 = canvas2.getContext('2d');
                   context2.fillStyle = '#06BAF9';
                   context2.fill();
               }

           });

           /*******************************************************************
                        TARGET 3
           *******************************************************************/
           var dropTarget3 = element.querySelector("#myDropTarget3");

           dropTarget3.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget3.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget3, "drop-ready");
               var canvas3 = document.getElementById('circle3');
               var context3 = canvas3.getContext('2d');
               context3.fillStyle = 'red';
               context3.fill();
           });

           dropTarget3.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget3, "drop-ready");
               var canvas3 = document.getElementById('circle3');
               var context3 = canvas3.getContext('2d');
               context3.fillStyle = '#06BAF9';
               context3.fill();
           });

           dropTarget3.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget3, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/win98.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWin98");
                   var canvas3 = document.getElementById('circle3');

                   var nuLeft = Math.round(canvas3.getBoundingClientRect().left - logo.getBoundingClientRect().width / 2);
                   var nuTop = Math.round(canvas3.getBoundingClientRect().top);

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   //logo.style.top = nuTop + "px";
                   logo.style.top = "100px";
                   var context3 = canvas3.getContext('2d');
                   context3.clearRect(0, 0, canvas3.width, canvas3.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas3 = document.getElementById('circle3');
                   var context3 = canvas3.getContext('2d');
                   context3.fillStyle = '#06BAF9';
                   context3.fill();
               }

           });

           /*******************************************************************
                        TARGET 4
           *******************************************************************/
           var dropTarget4 = element.querySelector("#myDropTarget4");

           dropTarget4.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget4.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget4, "drop-ready");
               var canvas4 = document.getElementById('circle4');
               var context4 = canvas4.getContext('2d');
               context4.fillStyle = 'red';
               context4.fill();
           });

           dropTarget4.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget4, "drop-ready");
               var canvas4 = document.getElementById('circle4');
               var context4 = canvas4.getContext('2d');
               context4.fillStyle = '#06BAF9';
               context4.fill();
           });

           dropTarget4.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget4, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/winMe.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWinME");
                   var canvas4 = document.getElementById('circle4');

                   var nuLeft = Math.round(logo.getBoundingClientRect().left - (logo.getBoundingClientRect().right + logo.getBoundingClientRect().width * (1.8)));
                   var nuTop = Math.round(logo.getBoundingClientRect().top - canvas4.getBoundingClientRect().top - logo.getBoundingClientRect().width);

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context4 = canvas4.getContext('2d');
                   context4.clearRect(0, 0, canvas4.width, canvas4.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas4 = document.getElementById('circle4');
                   var context4 = canvas4.getContext('2d');
                   context4.fillStyle = '#06BAF9';
                   context4.fill();
               }

           });

           /*******************************************************************
                        TARGET 5
           *******************************************************************/
           var dropTarget5 = element.querySelector("#myDropTarget5");

           dropTarget5.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget5.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget5, "drop-ready");
               var canvas5 = document.getElementById('circle5');
               var context5 = canvas5.getContext('2d');
               context5.fillStyle = 'red';
               context5.fill();
           });

           dropTarget5.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget5, "drop-ready");
               var canvas5 = document.getElementById('circle5');
               var context5 = canvas5.getContext('2d');
               context5.fillStyle = '#06BAF9';
               context5.fill();
           });

           dropTarget5.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget5, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/winXp.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWinXP");
                   var canvas5 = document.getElementById('circle5');

                   var nuLeft = Math.round(logo.getBoundingClientRect().left - (logo.getBoundingClientRect().right + logo.getBoundingClientRect().width * (3.2)));
                   var nuTop = Math.round(canvas5.getBoundingClientRect().top - logo.getBoundingClientRect().width/2);

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context5 = canvas5.getContext('2d');
                   context5.clearRect(0, 0, canvas5.width, canvas5.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas5 = document.getElementById('circle5');
                   var context5 = canvas5.getContext('2d');
                   context5.fillStyle = '#06BAF9';
                   context5.fill();
               }

           });

           /*******************************************************************
                       TARGET 6
          *******************************************************************/
           var dropTarget6 = element.querySelector("#myDropTarget6");

           dropTarget6.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget6.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget6, "drop-ready");
               var canvas6 = document.getElementById('circle6');
               var context6 = canvas6.getContext('2d');
               context6.fillStyle = 'red';
               context6.fill();
           });

           dropTarget6.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget6, "drop-ready");
               var canvas6 = document.getElementById('circle6');
               var context6 = canvas6.getContext('2d');
               context6.fillStyle = '#06BAF9';
               context6.fill();
           });

           dropTarget6.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget6, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/winVista.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWinVista");
                   var canvas6 = document.getElementById('circle6');

                   var nuLeft = Math.round(canvas6.getBoundingClientRect().left - logo.getBoundingClientRect().width / 2);
                   var nuTop = Math.round(canvas6.getBoundingClientRect().top - logo.getBoundingClientRect().height / 2);

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context6 = canvas6.getContext('2d');
                   context6.clearRect(0, 0, canvas6.width, canvas6.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas6 = document.getElementById('circle6');
                   var context6 = canvas6.getContext('2d');
                   context6.fillStyle = '#06BAF9';
                   context6.fill();
               }

           });

           /*******************************************************************
                       TARGET 7
          *******************************************************************/
           var dropTarget7 = element.querySelector("#myDropTarget7");

           dropTarget7.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget7.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget7, "drop-ready");
               var canvas7 = document.getElementById('circle7');
               var context7 = canvas7.getContext('2d');
               context7.fillStyle = 'red';
               context7.fill();
           });

           dropTarget7.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget7, "drop-ready");
               var canvas7 = document.getElementById('circle7');
               var context7 = canvas7.getContext('2d');
               context7.fillStyle = '#06BAF9';
               context7.fill();
           });

           dropTarget7.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget7, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/win7.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWin7");
                   var canvas7 = document.getElementById('circle7');

                   var nuLeft = Math.round(canvas7.getBoundingClientRect().left - logo.getBoundingClientRect().width / 2);
                   var nuTop = Math.round(canvas7.getBoundingClientRect().top - logo.getBoundingClientRect().height * (2.5));

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context7 = canvas7.getContext('2d');
                   context7.clearRect(0, 0, canvas7.width, canvas7.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas7 = document.getElementById('circle7');
                   var context7 = canvas7.getContext('2d');
                   context7.fillStyle = '#06BAF9';
                   context7.fill();
               }

           });

           /*******************************************************************
                       TARGET 8
          *******************************************************************/
           var dropTarget8 = element.querySelector("#myDropTarget8");

           dropTarget8.addEventListener("dragover", function (eventObject) {
               // Allow HTML5 drops.
               eventObject.preventDefault();
           });

           dropTarget8.addEventListener("dragenter", function (eventObject) {
               WinJS.Utilities.addClass(dropTarget8, "drop-ready");
               var canvas8 = document.getElementById('circle8');
               var context8 = canvas8.getContext('2d');
               context8.fillStyle = 'red';
               context8.fill();
           });

           dropTarget8.addEventListener("dragleave", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget8, "drop-ready");
               var canvas8 = document.getElementById('circle8');
               var context8 = canvas8.getContext('2d');
               context8.fillStyle = '#06BAF9';
               context8.fill();
           });

           dropTarget8.addEventListener("drop", function (eventObject) {
               WinJS.Utilities.removeClass(dropTarget8, "drop-ready");
               var selected = eventObject.dataTransfer.getData("Text");
               console.log(selected);
               if (selected == "ms-appx://accce408-1b67-495a-abed-f67ba805d81d/images/app/win8.png?candidateIndex=0") {
                   var logo = document.getElementById("imgWin8");
                   var canvas8 = document.getElementById('circle8');

                   var nuLeft = Math.round(canvas8.getBoundingClientRect().left - logo.getBoundingClientRect().width / 2);
                   var nuTop = Math.round(canvas8.getBoundingClientRect().top - logo.getBoundingClientRect().top);

                   logo.style.position = "relative";
                   logo.style.left = nuLeft + "px";
                   logo.style.top = nuTop + "px";
                   var context8 = canvas8.getContext('2d');
                   context8.clearRect(0, 0, canvas8.width, canvas8.height);
                   logosSucess++;
                   console.log("BIEN!")
               }
               else {
                   console.log("MAL!");
                   var canvas8 = document.getElementById('circle8');
                   var context8 = canvas8.getContext('2d');
                   context8.fillStyle = '#06BAF9';
                   context8.fill();
               }

           });

        }
        
    });
})();
