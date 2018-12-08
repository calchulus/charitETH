$(document).ready(function() {
	

const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();

//var wallet = document.getElementById('address').value;

//Will remove hardcoded url when live
	var aarr = window.location.href.split('#');
//get last value
var wallet = aarr[aarr.length -1];
	console.log(wallet);
	
var ethurl = "https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=" + wallet + "&startblock=0&endblock=999999999&sort=asc&apikey=IMIU9SBC4B34KXK4P6ERQBDSFYHUY4D7B7"

//var ethurl = "https://api-ropsten.etherscan.io/api?module=account&action=tokentx&address=0xFAF95953A36eD1e8f8426Ab5B7EB53dA246e3476&startblock=00000&endblock=999999999&sort=asc&apikey=IMIU9SBC4B34KXK4P6ERQBDSFYHUY4D7B7";

request.open('GET', ethurl, true);

//console.log(request);

request.onload = function () {
	

  // Begin accessing JSON data here
  var data = JSON.parse(this.responseText);
  if (request.status >= 200 && request.status < 400) {
	  console.log("Success! The call worked!");
	  console.log(data);
	  var coinlist = [];
	  var coindict = {};
	  
    data.result.forEach(txn => {
		if (coinlist.includes(txn.tokenSymbol)) {
			console.log("duplicate");
			coindict[txn.tokenSymbol] = txn.timeStamp
			var current_card = document.getElementById(txn.tokenSymbol);
      const p = document.createElement('p');
				var dateString = moment.unix(txn.timeStamp).format("MMM Do YYYY, h:mm:ss a");	
      p.textContent = `${dateString}`;
			current_card.append(p);
		}
		else {
			coinlist.push(txn.tokenSymbol);
//			console.log(coinlist);
			coindict[txn.Symbol] = txn.timeStamp;
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('id', txn.tokenSymbol)
      const h1 = document.createElement('h1');
	
      h1.textContent = txn.tokenName + " (" + txn.tokenSymbol + ")";
const h2 = document.createElement('h2');
			h2.textContent = 'Recent Transactions';
      const p = document.createElement('p');
//      txn.description = txn.description.substring(0, 300);
			
		var dateString = moment.unix(txn.timeStamp).format("MMM Do YYYY, h:mm:ss a");	
      p.textContent = `${dateString}`;

      container.appendChild(card);
      card.appendChild(h1);
			card.appendChild(h2);
      card.appendChild(p);
		}
		
		
    });
	  

	  const json1 = [{"symbol":"ETH","name":"Ethereum","address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","decimals":18,"id":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"},{"symbol":"KNC","name":"KyberNetwork","address":"0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6","decimals":18,"id":"0x4e470dc7321e84ca96fcaedd0c8abcebbaeb68c6"},{"symbol":"OMG","name":"OmiseGO","address":"0x4bfba4a8f28755cb2061c413459ee562c6b9c51b","decimals":18,"id":"0x4bfba4a8f28755cb2061c413459ee562c6b9c51b"},{"symbol":"EOS","name":"Eos","address":"0xd5b4218b950a53ff07985e2d88346925c335eae7","decimals":18,"id":"0xd5b4218b950a53ff07985e2d88346925c335eae7"},{"symbol":"SNT","name":"Status","address":"0xbf5d8683b9be6c43fca607eb2a6f2626a18837a6","decimals":18,"id":"0xbf5d8683b9be6c43fca607eb2a6f2626a18837a6"},{"symbol":"ELF","name":"Aelf","address":"0x9fcc27c7320703c43368cf1a4bf076402cd0d6b4","decimals":18,"id":"0x9fcc27c7320703c43368cf1a4bf076402cd0d6b4"},{"symbol":"POWR","name":"Power Ledger","address":"0xa577731515303f0c0d00e236041855a5c4f114dc","decimals":6,"id":"0xa577731515303f0c0d00e236041855a5c4f114dc"},{"symbol":"MANA","name":"Mana","address":"0x72fd6c7c1397040a66f33c2ecc83a0f71ee46d5c","decimals":18,"id":"0x72fd6c7c1397040a66f33c2ecc83a0f71ee46d5c"},{"symbol":"BAT","name":"Basic Attention Token","address":"0xdb0040451f373949a4be60dcd7b6b8d6e42658b6","decimals":18,"id":"0xdb0040451f373949a4be60dcd7b6b8d6e42658b6"},{"symbol":"REQ","name":"Request","address":"0xb43d10bbe7222519da899b72bf2c7f094b6f79d7","decimals":18,"id":"0xb43d10bbe7222519da899b72bf2c7f094b6f79d7"},{"symbol":"GTO","name":"Gifto","address":"0xe55c607d58c53b2b06a8e38f67f4c0fcaeed2c31","decimals":5,"id":"0xe55c607d58c53b2b06a8e38f67f4c0fcaeed2c31"},{"symbol":"RDN","name":"Raiden","address":"0x5422ef695ed0b1213e2b953cfa877029637d9d26","decimals":18,"id":"0x5422ef695ed0b1213e2b953cfa877029637d9d26"},{"symbol":"APPC","name":"AppCoins","address":"0x2799f05b55d56be756ca01af40bf7350787f48d4","decimals":18,"id":"0x2799f05b55d56be756ca01af40bf7350787f48d4"},{"symbol":"ENG","name":"Enigma","address":"0x95cc8d8f29d0f7fcc425e8708893e759d1599c97","decimals":8,"id":"0x95cc8d8f29d0f7fcc425e8708893e759d1599c97"},{"symbol":"SALT","name":"Salt","address":"0xb47f1a9b121ba114d5e98722a8948e274d0f4042","decimals":8,"id":"0xb47f1a9b121ba114d5e98722a8948e274d0f4042"},{"symbol":"BQX","name":"Ethos","address":"0x9504a86a881f63da06302fb3639d4582022097db","decimals":8,"id":"0x9504a86a881f63da06302fb3639d4582022097db"},{"symbol":"ADX","name":"AdEx","address":"0x499990db50b34687cdafb2c8dabae4e99d6f38a7","decimals":4,"id":"0x499990db50b34687cdafb2c8dabae4e99d6f38a7"},{"symbol":"AST","name":"AirSwap","address":"0xef06f410c26a0ff87b3a43927459cce99268a2ef","decimals":4,"id":"0xef06f410c26a0ff87b3a43927459cce99268a2ef"},{"symbol":"RCN","name":"Ripio Credit Network","address":"0x99338aa9218c6c23aa9d8cc2f3efaf29954ea26b","decimals":18,"id":"0x99338aa9218c6c23aa9d8cc2f3efaf29954ea26b"},{"symbol":"ZIL","name":"Zilliqa","address":"0xad78afbbe48ba7b670fbc54c65708cbc17450167","decimals":12,"id":"0xad78afbbe48ba7b670fbc54c65708cbc17450167"},{"symbol":"DAI","name":"DAI","address":"0xad6d458402f60fd3bd25163575031acdce07538d","decimals":18,"id":"0xad6d458402f60fd3bd25163575031acdce07538d"},{"symbol":"LINK","name":"Chain Link","address":"0xb4f7332ed719eb4839f091eddb2a3ba309739521","decimals":18,"id":"0xb4f7332ed719eb4839f091eddb2a3ba309739521"},{"symbol":"IOST","name":"IOStoken","address":"0x27db28a6c4ac3d82a08d490cfb746e6f02bc467c","decimals":18,"id":"0x27db28a6c4ac3d82a08d490cfb746e6f02bc467c"},{"symbol":"STORM","name":"Storm","address":"0x8fff7de21de8ad9c510704407337542073fdc44b","decimals":18,"id":"0x8fff7de21de8ad9c510704407337542073fdc44b"},{"symbol":"BBO","name":"BigBom","address":"0xa94758d328af7ef1815e73053e95b5f86588c16d","decimals":18,"id":"0xa94758d328af7ef1815e73053e95b5f86588c16d"},{"symbol":"COFI","name":"ConFi","address":"0xb91786188f8d4e35d6d67799e9f162587bf4da03","decimals":18,"id":"0xb91786188f8d4e35d6d67799e9f162587bf4da03"},{"symbol":"BITX","name":"BitScreenerToken","address":"0x7a17267576318efb728bc4a0833e489a46ba138f","decimals":18,"id":"0x7a17267576318efb728bc4a0833e489a46ba138f"},{"symbol":"MOC","name":"Moss Land","address":"0x1742c81075031b8f173d2327e3479d1fc3feaa76","decimals":18,"id":"0x1742c81075031b8f173d2327e3479d1fc3feaa76"},{"symbol":"MAS","name":"MidasProtocol Ropsten","address":"0xc2c37d1a2cdd601ce665c4a785074670657f83ac","decimals":18,"id":"0xc2c37d1a2cdd601ce665c4a785074670657f83ac"}];
	var kybercheck = []
	var matches = []
	var nonmatches = []
	var setaddresses = {}
	
	json1.forEach(coin => {
		kybercheck.push(coin.symbol);
	});
	  
	  console.log(coinlist);
	  for (var i = 0; i < coinlist.length; i++) {
		 if (kybercheck.includes(coinlist[i])) {
//			 if "coinlist[i] != 'DAI'"
			 console.log(coinlist[i] + ' Supported');
			 var link = 'https://widget.kyber.network/v0.3/?type=swap&mode=popup&theme=light&callback=https%3A%2F%2Fkyberpay-sample.knstats.com%2Fcallback&paramForwarding=true&network=ropsten&pinnedTokens=ETH_KNC_DAI&defaultPair=' + coinlist[i] + '_DAI&commissionId=0xFAF95953A36eD1e8f8426Ab5B7EB53dA246e3476&test1=true'; document.getElementById("matches").innerHTML +=  "<a style='margin-right: 5px;' href=" + link + " class='kyber-widget-button' name='KyberWidget - Powered by KyberNetwork' title='Pay with tokens' target='_blank'>" + coinlist[i] + "</a>"  
				  
//				  coinlist[i] + " | "
			 matches.push(coinlist[i])
		 }
		  else {
			 console.log(coinlist[i] + ' Not Supported');
			 document.getElementById("nonmatches").innerHTML += coinlist[i] + " | "
			  
		  }
	  }
	  
//	  document.getElementById("matches").innerHTML += coinlist[i] + "<br>"
	  
	  
	  
  }

}

request.send();
	
 });