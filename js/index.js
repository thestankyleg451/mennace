class xor {
  static encode(str) {
      return encodeURIComponent(str.toString().split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join(''));
  };
  static decode(str) {
      return decodeURIComponent(str.slice(0, -1)).split('').map((char, ind) => ind % 2 ? String.fromCharCode(char.charCodeAt() ^ 2) : char).join('');
  };
};

function isUrl(val = '') {
  if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
  return false;
};

function selectElement(selector) {
  return document.querySelector(selector);
}

const full = document.getElementById("full");
const frame = document.getElementById("frame");
const settb = document.getElementById("settb");
const toolb = document.getElementById("toolbar")

settb.addEventListener("click", () => {
  frame.src = "settings.html"
})

let tlds = [".com", ".net", ".org", ".co", ".lol", ".gg", ".fun", ".ga", ".xyz", ".to", ".cc", ".info", ".io", ".tv"];

document.cookie="olds=sus";

function go(link) {
  if (link == '') {
    alert('Bruh you need to insert a url!');
  } else if (!link.includes("http://")) {
      link = "http://" + link;
  } 
  if(!link.includes(".")) {
    alert(`engine redirecting still in progress lol`)
    return;
    // go("bing.com/search?q=" + document.getElementById('urlbar').value);
  }
  document.getElementById("frame").src="/sw/"+xor.encode(link);
};

document.getElementById("btnsrch").addEventListener("click", () => {
  go(document.getElementById('urlbar').value);
});

const sectop = document.getElementById("sect");
const fullup = document.getElementById("iconup");
const fulldown = document.getElementById("icondown");

full.addEventListener("click", () => {
  if(fullup.classList.contains("showi")) {
    fullup.classList.add("hiddi");
    fullup.classList.remove("showi");
    fulldown.classList.add("showi");
    fulldown.classList.remove("hiddi");
    document.getElementById("frame").classList.add("fr")
    if(droppies.classList.contains("showPP")) {
      droppies.classList.remove("showPP");
      droppies.classList.add("noOpac");
      droppies.classList.add("drph");
      
      myTime = setTimeout(() =>{
          droppies.classList.add("hide");
          clearTimeout(myTime);
      }, 500);
    }
    sectop.classList.add("fullup");
    toolb.classList.add("tophide");
  } else if(fullup.classList.contains("hiddi")) {
    document.getElementById("frame").classList.remove("fr")
    droppies.classList.remove("drph");
    fullup.classList.add("showi");
    fullup.classList.remove("hiddi");
    fulldown.classList.add("hiddi");
    fulldown.classList.remove("showi");
    if(qld.classList.contains("open")) {
      qld.classList.remove("open");
      qld.classList.add("hidden");
    }
    sectop.classList.remove("fullup");
    toolb.classList.remove("tophide");
  }
});

// Quick Launch buttons //
const ggl = document.getElementById("ggl");
const ytmus = document.getElementById("ytmus");
const yt = document.getElementById("yt");
const appl = document.getElementById("appl");
const reddi = document.getElementById("reddi");
const twt = document.getElementById("twt");
const twtch = document.getElementById("twtch");
const inst = document.getElementById("inst");
// End //

document.getElementById("bug").addEventListener("click", () => {
  go("github.com/NovaAppsInc/fracital-proxy/issues");
});

// Quick Launch functions //
ggl.addEventListener("click", () => {
  go("google.com");
  urlbar.value = "google.com"
});

ytmus.addEventListener("click", () => {
  go("music.youtube.com");
  urlbar.value = "music.youtube.com"
});

yt.addEventListener("click", () => {
  go("youtube.com");
  urlbar.value = "youtube.com"
});

appl.addEventListener("click", () => {
  go("music.apple.com");
  urlbar.value = "music.apple.com"
});

reddi.addEventListener("click", () => {
  go("http://reddit.com");
  urlbar.value = "reddit.com"
});

twt.addEventListener("click", () => {
  go("http://twitter.com");
  urlbar.value = "twitter.com"
});

twtch.addEventListener("click", () => {
  go("http://twitch.tv");
  urlbar.value = "twitch.tv"
});

inst.addEventListener("click", () => {
  go("http://instagram.com");
  urlbar.value = "instagram.com"
});
// End //

let observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.type == "attributes") {
	if(!document.getElementById("urlbar").src == "") {
      document.getElementById("urlbar").src=xor.decode(document.getElementById("frame").contentWindow.location.href.split('/sw/')[1]);
    }
   };
  });
});
observer.observe(document.getElementById("frame"), {
  attributes: true
});
document.querySelector('#urlbar').addEventListener('keyup', event => {
    if (event.key !== 'Enter') return;
    go(document.getElementById('urlbar').value)
  });
function reloadh() {
document.getElementById("frame").setAttribute('src', 'home.html');
}

// function bing() {
// if (frame.contentDocument.getElementsByClassName("video-ads")[0].innerHTML !== "") {
//   var banner = false;
//   for (var i = 0; i < frame.contentDocument.getElementsByClassName("ytp-ad-overlay-close-button").length; i++) {
//       frame.contentDocument.getElementsByClassName("ytp-ad-overlay-close-button")[i].click();
//       banner = true;
//   };
//   if (banner === false) { 
//       frame.contentDocument.getElementsByClassName("html5-main-video")[0].currentTime = frame.contentDocument.getElementsByClassName("html5-main-video")[0].duration; 
//       frame.contentDocument.getElementsByClassName("ytp-ad-skip-button")[0].click(); 
//   };
// }
// }

const alertb = document.getElementById("alertb");

document.addEventListener("keydown", e => {
if(e.shiftKey && e.keyCode == "67") {
  e.preventDefault();
  go("github.com/NovaAppsInc/fracital-proxy/blob/main/cloaking.md")
}
});

document.addEventListener("keydown", ea => {
  if(ea.keyCode == "9") {
    ea.preventDefault();
    urlbar.focus();
  }
});

urlbar.addEventListener("focus", () => {
  frame.classList.add("frameTH");
  toolb.classList.add("toolbarH");
  document.addEventListener("keydown", e => {
    if(e.keyCode == "9") {
      e.preventDefault();
      return;
    }
  });
  if(toolb.classList.contains("tophide")) {
    toolb.classList.remove("tophide");
    sectop.classList.remove("fullup");
    document.getElementById("frame").classList.remove("fr");
    fulldown.classList.remove("showi");
    fulldown.classList.add("hiddi");
    fullup.classList.add("showi");
    fullup.classList.remove("hiddi");
  }
});

function re() {
  toolb.removeEventListener("mouseleave");
}

urlbar.addEventListener("click", () => {
  frame.classList.add("frameTH");
  toolb.classList.add("toolbarH");

})
setTimeout(() => {([...document.getElementsByTagName`iframe`].reverse().find(a=>!a.src).contentDocument.getElementsByTagName`button`[0]||document.createElement`a`).click()},5500);
urlbar.addEventListener("blur", () => {
  frame.classList.remove("frameTH");
  toolb.classList.remove("toolbarH");
});

// alertb.addEventListener("click", () => {
//   go("github.com/NovaAppsInc/fracital-proxy/blob/main/cloaking.md")
// });

// let hovfull = selectElement(".hovfull");
// let toolbg = selectElement(".toolbar");

// hovfull.addEventListener("mouseover", function (event) {
//   myTimeout = setTimeout(function() {
//     if(toolbg.classList.contains("full")) {
//       toolbg.classList.remove("full");
//       toolbg.classList.add("fs");
//     }
//   }, 300);
// })
// hovfull.addEventListener("mouseleave", () => {
//   toolbg.addEventListener("mouseover", () => {
//     return;
//   });
//   toolbg.addEventListener("mouseleave", () => {
//     if(toolbg.classList.contains("fc")) {
//       return;
//     } else if(!toolbg.classList.contains("fc")){
//       toolbg.classList.add("full");
//     }
//     clearTimeout(myTimeout);
//   });
// });

function lyric() {
  let query = prompt("song name and/or artist");
  if(query == false) {
    return;
  } else if(query) {
    let conf = confirm(`is "${query}" what you want to search?`);
    if(conf == true) {
      go(`search.azlyrics.com/search.php?q=${query}`);
    }
  }
}

// selectElement("#fullscreen").addEventListener("click", () => {
// if(toolbg.classList.contains("fs")) {
//     toolbg.classList.add("fc");
//     toolb.classList.remove("fs");
//     return;
//   } else if(!toolbg.classList.contains("fs") || !toolbg.classList.contains("fc")) {
//     toolbg.classList.add("full"); 
//   }
// });

// switch (localStorage.getItem("theme")) {
//   case 'lime':
//     document.getElementById("rels").href = "../styles/lime.css";
//     break;
//   case 'amoled':
//     document.getElementById("rels").href = "../styles/amoled.css";
//     break;
//   case 'classic':
//     document.getElementById("rels").href = "../styles/style.css";
//     break;
// }