function json(url) {
  return fetch(url).then(res => res.json());
}

var firstSpeech = "true";
var lastInput;
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var randomSum;

var userIP;
var userLocation;
var userInfo;

json(`https://api.ipdata.co?api-key=993c6161f0529d0b5a3a768d6ae5915e32b53e118e518c49470a2d81`).then(data => {
  userIP = data.ip;
  userLocation = "Latitude: " + data.latitude + "\nLongitude: " + data.longitude + "\nContinent: " + data.continent_name + "\nCity: " + data.city + ", " + data.region + ", " + data.country_name + "\nZip Code: " + data.postal;
  userInfo = "IP: " + data.ip + "\nLatitude: " + data.latitude + "\nLongitude: " + data.longitude + "\nContinent: " + data.continent_name + "\nCity: " + data.city + ", " + data.region + ", " + data.country_name + "\nZip Code: " + data.postal + "\nCalling Code: +" + data.calling_code + "\nCountry Flag: " + data.emoji_flag + "\nASN: " + data.asn.asn + "\nWifi Name: " + data.asn.name + "\nWifi Route: " + data.asn.route + "\nLanguage: " + data.languages.code + "\nCurrency: " + data.currency.name + "\nCurrent Time: " + data.time_zone.current_time + "\nTime Zone: " + data.time_zone.name;

  console.log(JSON.stringify(data, null, 2));
});

function $(elid) {
  return document.getElementById(elid);
}

var cursor;
window.onload = init;

function init() {
  cursor = $("cursor");
  cursor.style.left = "0px";
}

function nl2br(txt) {
  return txt.replace(/\n/g, "<br />");
}

function writeit(from, e) {
  e = e || window.event;
  var w = $("writer");
  var tw = from.value;
  w.innerHTML = nl2br(tw);
}

function moveIt(count, e) {
  e = e || window.event;
  var keycode = e.keyCode || e.which;
  //				alert(count);
  if (keycode == 37 && parseInt(cursor.style.left) >= (0 - ((count - 1) * 10))) {
    cursor.style.left = parseInt(cursor.style.left) - 10 + "px";
  } else if (keycode == 39 && (parseInt(cursor.style.left) + 10) <= 0) {
    cursor.style.left = parseInt(cursor.style.left) + 10 + "px";
  }

}

var message;
var output = document.getElementById('setter');

document.onkeypress = function(e) {
  if (e.key == "Enter") {
    message = document.getElementById('setter').value.substr(document.getElementById('setter').value.lastIndexOf("\n") + 1);
    lastInput = document.getElementById('setter').value.substr(document.getElementById('setter').value.lastIndexOf("\n") + 1);
    if (message.length > 3) {
      output.value = output.value.replace(message, "<span class='userText'> > " + message + "</span>");
    }
    else {
      output.value = output.value.replace(message, " > " + message);
    }
    //read input:
    if (message.includes('help') || message.includes('Help')) {
      if (message.includes(' 1')) {
        output.value = output.value + "\n<span class='primaryOutput'>List of Commands:\n - [alert + message] to make a javascript alert on the webpage.\n - [new.tab + url] creates a new tab in the current window using a url the user inputs.\n - [new.window + url] makes a new window using the url the user provides.\n - [search + query] the user types in something like: 'search pokemon,' to look up something on google.\n - [speech.read + message] this command speaks out the user's input.\n - [search.youtube + query] use this command to look up videos on youtube\n - [new.note + note] to create a note.\n - [view.note] to view notes.\n - [delete.note] to delete all of your notes.\n<span class='secondaryOutput'>Other Help Commands:</span>\n - [user.help] for cool location and information commands.\n - [data.help] for data related commands.\n - [math.help] is for math related commands\n - [page.help] for webpage based commands.\n - [play.help] to see how you run games.\n - [file.help] to see file based commands. These commands let you create and view files.\n - [theme. + theme name] for example: theme.light. Type theme.info to see themes.</span>";
      }
      else if (message.includes(' 2')) {
        output.value = output.value + "\n<span class='primaryOutput''>Go to: https://analyze185.repl.co/, then scroll to the bottom.</span>"
      }
      else if (message.includes(' 3')) {
        output.value = output.value + "\n<span class='primaryOutput''>This project was created by a 13 year old boy, named Quinn H.. For more info, go here: https://analyze185.repl.co/</span>"
      }
      else if (message.includes('user.help')) {
        output.value = output.value + "\n<span class='primaryOutput''>List of Commands:\n - [user.ip] to see what your ip is.\n - [user.location] this command tells you lots of information about the user, such as longitude, and latitude.\n - [user.info] this command dumps all of the info of the user into the terminal.</span>";
      }
      else if (message.includes('file.help')) {
        output.value = output.value + "\n<span class='primaryOutput'>List of Commands:\n - [file.view + url] Use this to view an image based on it's URL.\n - [file.download + fileContent] Is to download a .txt file with a name and content of the user's choice. </span>";
      }
      else if (message.includes('play.help')) {
        output.value = output.value + "\n<span class='primaryOutput''>List of Commands:\n<span class='secondaryOutput'>Syntax: play.gameID</span>\nGame IDs:\n - minecraft (the classic retro minecraft) \n - spelunky (a game where you are a miner and advance through levels)\n - spaceInvaders (the original space invaders game)</span>";
      }
      else if (message.includes('page.help')) {
        output.value = output.value + "\n<span class='primaryOutput''>List of Commands:\n - [page.reload] is what you use to reload the page.\n - [page.hide] this command hides the terminal by redirecting you to google.</span>";
      }
      else if (message.includes('data.help')) {
        output.value = output.value + "\n<span class='primaryOutput''>List of Commands:\n - [data.time] to see what time it is.\n - [data.date] to get today's date in the Y-M-D format.</span>";
      }
      else if (message.includes('math.help')) {
        output.value = output.value + "\n<span class='primaryOutput''>List of Commands:\n - [math.evaluate + equation] this command tells you the answer to math equations.\n - [math.toBinary + integer] This uses an integer that the user inputs, then converts it to binary format.\n - [math.square + input] gets the quare root of the user's input.\n - [math.round + user input] use this command to round the user's input to the closest integer.\n - [math.average + number1, number2] this command gets the average of multiple numbers. You can put as many numbers as you want. Example: math.average 10, 12\n - [math.random + max number] get a random number between 0 and whatever number you input.</span>";
      }
      else {
        output.value = output.value + "\n<span class='primaryOutput''>What do you need help with?\n For help, type 'help,' then the number id provided below.\nExample: help 2\n1] Commands\n2] Feedback\n3] Info on the creator</span>";
      }
    }
    else if (message.includes('theme.info')) {
      output.value = output.value + "\n<span class='primaryOutput''>List of Commands:\n - light\n - dark\n - halloween\n - metal\nSyntax: theme.light</span>";
    }
    else if (message.includes('alert')) {
      alert(message.replace('alert ', ''));
      output.value = output.value + "\n<span class='secondaryOutput'>Alerted User.</span>";
    }
    else if (message.includes('new.tab')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Opened new tab.</span>";
      if (message.includes('https://')) {
        window.open(message.replace('new.tab', ''));
      }
      else {
        url = "";
        url = "https://" + message.replace('new.tab ', '');
        window.open(url);
      }
    }
    else if (message.includes('new.window')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Opened new window.</span>";
      if (message.includes('https://')) {
        window.open(message.replace('new.window', ''), "customWindow", "width=auto,height=auto");
      }
      else {
        url = "";
        url = "https://" + message.replace('new.window ', '');
        window.open(url, "customWindow", "width=auto,height=auto");
      }
    }
    else if (message.includes('play.spelunky')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Opened Spelunky.</span>";
      var spelunkyWindow = window.open("", "spelunkyWindow", "width=130,height=130");
      spelunkyWindow.document.write('<iframe id="gameFrame" src="https://yancharkin.github.io/SpelunkyClassicHDhtml5/" width="100%" height="100%" border="none"></iframe> <style>body{width:100%;height:100%;overflow:hidden;}iframe{position:fixed;top:0px;left:0px;resize:both;}</style>');
    }
    else if (message.includes('play.spaceInvaders')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Opened Space Invaders.</span>";
      var spaceInvadersWindow = window.open("", "spaceInvadersWindow", "width=130,height=130");
      spaceInvadersWindow.document.write('<iframe id="gameFrame" src="https://what.analyze185.repl.co/service/hvtrs8%2F-fpegilvcdgrq.mre%2F" width="100%" height="100%" border="none"></iframe> <style>body{width:100%;height:100%;overflow:hidden;}iframe{position:fixed;top:0px;left:0px;resize:both;}</style><script>document.getElementById("gameFrame").contentWindow.document.getElementById("menuToggle").style.display = "false";</script>');
    }
    else if (message.includes('play.minecraft')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Opened Minecraft Classic.</span>";
      var minecraftWindow = window.open("", "minecraftWindow", "width=130,height=130");
      minecraftWindow.document.write('<iframe id="gameFrame" src="https://what.analyze185.repl.co/service/hvtrs8%2F-cnaqskc%2Cmkngcpadt%2Cngt-" width="100%" height="100%" border="none"></iframe> <style>body{width:100%;height:100%;overflow:hidden;}iframe{position:fixed;top:0px;left:0px;resize:both;}</style>');
    }
    else if (message.includes('search.youtube')) {
      window.open("https://www.youtube.com/results?search_query=" + message.replace('search.youtube ', ''), "customWindow", "width=auto,height=auto");
    }
    else if (message.includes('file.view')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Opened image browser.</span>";
      var imageBrowser = window.open("", "imageBrowser", "width=130,height=130");
      imageBrowser.document.write("<small>Scroll and Zoom in to look at image</small><br><img src='" + message.replace('file.view ', '') + "' width='100'><style>*{cursor:crosshair;background:#302f45;font-family: cursor, courier;font-weight: bold;color:#ff8359}iframe{resize:both;}</style>");
    }
    else if (message.includes('search ')) {
      output.value = output.value + "\n<span class='secondaryOutput'>Searched for " + message.replace('search ', '') + " on google.</span>";

      window.open("https://www.google.com/search?q=" + message.replace('search ', ''), "Google Search", "width=auto,height=auto");
    }
    else if (message.includes('math.evaluate')) {
      output.value = output.value + "\n<span class='primaryOutput''>Sum: " + eval(message.replace('math.evaluate', '')) + "</span>";
    }
    else if (message.includes('math.random')) {
      while (message.includes(',')) {
        message = message.replace(',', '');
      }
      randomSum = Math.floor(Math.random() * (parseInt(message.replace('math.random', ''), 10) + 1));
      output.value = output.value + "\n<span class='primaryOutput''>Random: " + randomSum + "</span>";
    }
    else if (message.includes('new.note')) {
      localStorage.setItem("noteSaves", localStorage.getItem("noteSaves") + "\n - " + message.replace('new.note ', ''));
      output.value = output.value + "\n<span class='primaryOutput''>Note Saved.</span>";
    }
    else if (message.includes('view.note')) {
      if (localStorage.getItem("noteSaves").includes('-')) {
        output.value = output.value + "\n<span class='primaryOutput''>" + localStorage.getItem("noteSaves") + "</span>";
      }
      else {
        output.value = output.value + "\n<span class='primaryOutput''>No notes to show.</span>";
      }
    }
    else if (message.includes('delete.note')) {
      localStorage.setItem("noteSaves", "");
      output.value = output.value + "\n<span class='primaryOutput''>Deleted Notes.</span>";
    }
    else if (message.includes('file.download')) {
      let fileNamePrompt = prompt("Enter File Name: ", "New File");
      download(fileNamePrompt + '.txt', message.replace('file.download ', ''));
      output.value = output.value + "\n<span class='primaryOutput''>Downloaded File.</span>";
    }
    else if (message.includes('user.ip')) {
      output.value = output.value + "\n<span class='primaryOutput''>User IP: " + userIP + "</span>";
    }
    else if (message.includes('user.info')) {
      output.value = output.value + "\n<span class='primaryOutput''>User IP: " + userInfo + "</span>";
    }
    else if (message.includes('page.reload')) {
      window.location.href = window.location.href;
    }
    else if (message.includes('page.hide')) {
      window.location.href = "https://google.com/";
    }
    else if (message.includes('user.location')) {
      output.value = output.value + "\n<span class='primaryOutput''>" + userLocation + "</span>";
    }
    else if (message.includes('data.time')) {
      output.value = output.value + "\n<span class='primaryOutput''>" + time + "</span>";
    }
    else if (message.includes('theme.dark')) {
      changeCSS('themes/dark.css', 0);
      output.value = output.value + "\n<span class='primaryOutput''>Set theme to dark.</span>";
    }
    else if (message.includes('theme.metal')) {
      changeCSS('themes/metal.css', 0);
      output.value = output.value + "\n<span class='primaryOutput''>Set theme to metal.</span>";
    }
    else if (message.includes('theme.light')) {
      changeCSS('themes/light.css', 0);
      output.value = output.value + "\n<span class='primaryOutput''>Set theme to light.</span>";
    }
    else if (message.includes('theme.halloween')) {
      changeCSS('themes/halloween.css', 0);
      output.value = output.value + "\n<span class='primaryOutput''>Set theme to halloween.</span>";
    }
    else if (message.includes('data.date')) {
      output.value = output.value + "\n<span class='primaryOutput''>" + date + "</span>";
    }
    else if (message.includes('device.info')) {
      output.value = output.value + "\n<span class='primaryOutput''>Device Memory: " + navigator.deviceMemory + "\nHardware Concurrency: " + navigator.hardwareConcurrency + "</span>";
    }
    else if (message.includes('math.toBinary')) {
      output.value = output.value + "\n<span class='primaryOutput''>" + parseInt(message.replace('math.toBinary', ''), 10).toString(2) + "</span>";
    }
    else if (message.includes('math.round ')) {
      output.value = output.value + "\n<span class='primaryOutput''>" + Math.ceil(message.replace('math.round ', '')) + "</span>";
    }
    else if (message.includes('math.square ')) {
      output.value = output.value + "\n<span class='primaryOutput''>" + Math.sqrt(message.replace('math.square ', '')) + "</span>";
    }
    else if (message.includes('speech.read')) {
      var to_speak = new SpeechSynthesisUtterance(message.replace('speech.read ', ''));
      window.speechSynthesis.speak(to_speak);
      if (!firstSpeech == "true") {
        output.value = output.value + "\n<span class='primaryOutput''>Read out loud.</span>";
      }
      else {
        firstSpeech = "false";
        output.value = output.value + "\n<span class='primaryOutput''>This will take a second for the first read out message. It will be faster after this.</span>";
      }
    }
    else if (message.includes('math.average')) {
      sum = message.replace('math.average', '');
      numbers = 0;
      while (sum.includes(',')) {
        sum = sum.replace(",", "+");
        numbers++;
      }
      numbers++;
      sum = eval(sum);
      output.value = output.value + "\n<span class='primaryOutput''>" + (sum / numbers) + "</span>";
      numbers = 0;
    }
    else {
      output.value = output.value + "\n<span style='color:	#fb3728'>I am sorry. I do not understand.\nEnter [help] for more info.</span>";
    }
  }
}
document.onkeydown = function(e) {
  if (e.key == "ArrowUp") {
    document.getElementById('setter').value = document.getElementById('setter').value + lastInput;
    document.getElementById('setter').value = document.getElementById('setter').value.replace('undefined', '');
  }
}

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
