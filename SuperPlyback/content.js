$(function() {
    var on = true;
    var bigDiv = document.getElementsByTagName("BODY")[0];
    var stilo = document.createElement("style");
    stilo.innerHTML = '.greeting{ color: white; background: transparent; position: fixed; width: 100vw; font-size: 3em; opacity:0; animation: fadeIn 1s ease-in; z-index: 100000; text-align: center; margin: 45vh auto; } @keyframes fadeIn { 0%{ opacity: 0; z-index: 100000; } 15%{ opacity:1; } 60%{ opacity:0; } 100%{ z-index: -100000; } }';
//        infoDiv.style.top = "50px";
    var infoDiv = document.createElement("h1");
    bigDiv.appendChild(infoDiv);
    bigDiv.appendChild(stilo);
    infoDiv.style.position = "fixed";
    infoDiv.style.left = "50%";
    infoDiv.style.transform =  "translate(-50%, 0)";
    infoDiv.style.zIndex = "-2147483647";
    infoDiv.style.backgroundColor = "rgba(0,0,0,.1)";
    infoDiv.style.color = "white";
    infoDiv.style.fontSize = '40px';
    infoDiv.id = 'divOnOff';

    function infoPopUp(msg){
	    infoDiv.innerHTML = msg;
        infoDiv.classList.remove("greeting");
	    setTimeout(function(){infoDiv.classList.add("greeting");}, 20)
    }

    document.onkeydown = function(e){
        if(e.altKey && e.which === 80) {  // alt+p
            on = !on;
            infoPopUp('Super On: ' + on);
        }

        if (e.which == 81){  // q
            if(on){
                infoPopUp('q ⏲.75');
                document.querySelector('video').playbackRate = .75;
            }
        }

        if (e.which == 82){  // r
            if(on){
                infoPopUp('r ⏲2.5');
                document.querySelector('video').playbackRate = 2.5;
            }
        }

        if (e.which == 65){  // a
            if(on){
                //document.querySelector('video').currentTime += -5;
                var evt = new KeyboardEvent('keydown', {'keyCode':37, 'which':37});
                document.dispatchEvent (evt);
            }
        }

        if (e.which == 83){  // s
            if(on){
                //document.querySelector('video').currentTime += 5;
                var evt = new KeyboardEvent('keydown', {'keyCode':39, 'which':39});
                document.dispatchEvent (evt);
            }
        }

        if (e.which == 87){  // w
            if(on){
                infoPopUp('w ⏲1.5');
                document.querySelector('video').playbackRate = 1.5;
            }
        }

        if (e.which == 68){  // d
            if(on){
                infoPopUp('d ⏲1.0');
                document.querySelector('video').playbackRate = 1;
            }
        }

        if (e.which == 69){  // e
            if(on){
                infoPopUp('e ⏲2.0');
                document.querySelector('video').playbackRate = 2;
            }
        }

        if (e.which == 71){  // g
            if(on){
                infoPopUp('g ⏲3.0');
                document.querySelector('video').playbackRate = 3;
            }
        }

        if (e.which == 72){  // h
            if(on){
                infoPopUp('h ⏲3.5');
              document.querySelector('video').playbackRate = 3.5;
            }
        }
        
    }
});


