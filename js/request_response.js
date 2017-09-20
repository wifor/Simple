var request = new XMLHttpRequest();
request.open('GET', 'https://market.csgo.com/history/json/', true);
request.send();

document.writeln(request.status);