function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XcRzcQsHnW":
        Script1();
        break;
      case "5X9TjRhdQB0":
        Script2();
        break;
      case "5p6IpD6UMG5":
        Script3();
        break;
      case "66OULf3tMKP":
        Script4();
        break;
      case "6PZuYMIoIvG":
        Script5();
        break;
      case "6S35RVpY0kk":
        Script6();
        break;
      case "6RBvjkS67xa":
        Script7();
        break;
      case "63RhYkkxWP0":
        Script8();
        break;
      case "5mEWOj6tTz2":
        Script9();
        break;
      case "5niAO0FHi4P":
        Script10();
        break;
      case "5x3hn3AUxar":
        Script11();
        break;
      case "5tvAAgqSF5y":
        Script12();
        break;
      case "6px28aQgzeH":
        Script13();
        break;
      case "5qGRhyAHrQ8":
        Script14();
        break;
      case "5rjp0NsZ9AU":
        Script15();
        break;
      case "5dOVfj92lHs":
        Script16();
        break;
      case "66byTKczX3z":
        Script17();
        break;
      case "6UYDkZgxlXv":
        Script18();
        break;
      case "5VobIRFcZwT":
        Script19();
        break;
      case "6QxXbCaoDIw":
        Script20();
        break;
      case "5t5oCf1m5Xb":
        Script21();
        break;
      case "5m5Q0lbczCc":
        Script22();
        break;
      case "6HU3M8vUjBJ":
        Script23();
        break;
      case "6XIvma86To2":
        Script24();
        break;
      case "6BfWpNeYctT":
        Script25();
        break;
      case "5mdBsI3xZDv":
        Script26();
        break;
      case "5fHb38IWWTr":
        Script27();
        break;
      case "5kshJ4Hnfdw":
        Script28();
        break;
      case "6IC4tAwWD16":
        Script29();
        break;
      case "5zayQ2KMABK":
        Script30();
        break;
      case "5fCWueXalxB":
        Script31();
        break;
      case "6FqVH2Fh92L":
        Script32();
        break;
      case "6V7SLcAVYUK":
        Script33();
        break;
      case "6WwsJz1yA5G":
        Script34();
        break;
      case "6AgWyyOvOya":
        Script35();
        break;
      case "6rVeDgvOsFP":
        Script36();
        break;
      case "6CvovtUpDXz":
        Script37();
        break;
      case "6jqKFMVRtPe":
        Script38();
        break;
      case "5bbNBkQdPnQ":
        Script39();
        break;
      case "64LShqvGlEG":
        Script40();
        break;
      case "6H7QwOplr5S":
        Script41();
        break;
      case "5gCSuWP2Yc4":
        Script42();
        break;
      case "5chz58uXqNk":
        Script43();
        break;
      case "6CBK3QFqAo6":
        Script44();
        break;
      case "5dWxqSkUzjI":
        Script45();
        break;
      case "6JdheC0XAOm":
        Script46();
        break;
      case "5h3b9S4N2VR":
        Script47();
        break;
      case "6b1VwEBlGC4":
        Script48();
        break;
      case "6JcZW6WqQWw":
        Script49();
        break;
      case "6kPfAfmEPaP":
        Script50();
        break;
      case "6YAbPZiMmr1":
        Script51();
        break;
      case "6rM63odQteb":
        Script52();
        break;
      case "6jhYI5mMT12":
        Script53();
        break;
      case "64DB5pssgq4":
        Script54();
        break;
      case "621wSIq3Hua":
        Script55();
        break;
      case "6Zs3cCcULXc":
        Script56();
        break;
      case "6l5X2lvmEEo":
        Script57();
        break;
      case "6pXpLpZEQXT":
        Script58();
        break;
      case "5z6JOyXv7uQ":
        Script59();
        break;
      case "5bHFtpLjCDR":
        Script60();
        break;
      case "5VV2HIRbqSS":
        Script61();
        break;
      case "5dZdK90Y6wp":
        Script62();
        break;
      case "6OGnVcXWlLv":
        Script63();
        break;
      case "6XBjmMKbDAt":
        Script64();
        break;
      case "6SUoBEPVS64":
        Script65();
        break;
      case "66TapXDLoBO":
        Script66();
        break;
      case "5yHlEvZG7Mu":
        Script67();
        break;
      case "6CotikXvqzU":
        Script68();
        break;
      case "6fp67rDEgs4":
        Script69();
        break;
      case "6NQBeugMF96":
        Script70();
        break;
      case "6cmS9EBkgQX":
        Script71();
        break;
      case "6TbvpSDcV0U":
        Script72();
        break;
      case "5fjbk3NLQaA":
        Script73();
        break;
      case "6HsZHpETtSR":
        Script74();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong'); audio.src="musik.mp3"; 
audio.load(); 
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.pause();
audio.currentTime = 0; // kembali ke awal lagu
function fadeOutAudio() {
  var fadeAudio = setInterval(function () {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05; // kurangi volume perlahan
    } else {
      clearInterval(fadeAudio);
      audio.pause();        // hentikan musik
      audio.currentTime = 0; // reset ke awal
      audio.volume = 1.0;   // kembalikan normal utk play berikutnya
    }
  }, 200); // setiap 200ms volume turun
}

}

function Script3()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script4()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script5()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script6()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script7()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script8()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script9()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script10()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script11()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script12()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script13()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script14()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script15()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script16()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script17()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script18()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script19()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script20()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script21()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script22()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script23()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script24()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script25()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script26()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script27()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script28()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script29()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script30()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script31()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script32()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script33()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script34()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script35()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script36()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script37()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script38()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script39()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script40()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script41()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script42()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script43()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script44()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script45()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script46()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script47()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script48()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script49()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script50()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script51()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script52()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script53()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script54()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script55()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script56()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script57()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script58()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script59()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script60()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script61()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script62()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

function Script63()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script64()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.1; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script65()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.2; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script66()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.3; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script67()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.4; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script68()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.5; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script69()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.6; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script70()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.7; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script71()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.8; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script72()
{
  var audio = document.getElementById("bgSong");
audio.volume = 0.9; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}

}

function Script73()
{
  var audio = document.getElementById("bgSong");
audio.volume = 1.0; // nilai 0.0 (mute) sampai 1.0 (paling keras)

var player = GetPlayer();
var sliderValue = player.GetVar("Slider1"); // variabel slider Storyline
var audio = document.getElementById("bgMusic");

// atur volume
audio.volume = sliderValue / 10;

// cek mute
if (audio.volume === 0) {
    player.SetVar("isMuted", true);
} else {
    player.SetVar("isMuted", false);
}


}

function Script74()
{
  var audio = document.getElementById("bgSong");
var player = GetPlayer(); // ambil variable dari storyline

if (audio.paused) {
    audio.play();
    player.SetVar("isPlaying", true); // simpan status ke variable storyline
} else {
    audio.pause();
    player.SetVar("isPlaying", false);
}

}

