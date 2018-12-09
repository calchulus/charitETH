var fsym = "TICKER";

var ccurl = "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD";

var ccurl = "https://min-api.cryptocompare.com/data/price?fsym=" + fsym + "&tsyms=USD"


request.open('GET', ccurl, true);

//console.log(request);

request.onload = function () {
	

  // Begin accessing JSON data here
  var data = JSON.parse(this.responseText);
  if (request.status >= 200 && request.status < 400) {
	  console.log("Success! The call worked!");
	  console.log(data);
var price = data["TICKER"]
return price 
  }