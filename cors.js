function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(url) {
  // This is a sample server that supports CORS.

  var xhr = createCORSRequest('GET', url);
  xhr.setRequestHeader('Access-Control-Allow-Origin','https://wondae98.github.io/Drone/control.html')
  xhr.setRequestHeader('Access-Control-Allow-Methods','GET');
  xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
  xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');

  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    alert('Response from CORS request to ' + url + ': ');
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
