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
  xhr.setRequestHeader('Access-Control-Allow-Origin','*')
  xhr.setRequestHeader('Access-Control-Allow-Methods','GET');
  xhr.setRequestHeader('Content-Type','xml');
  xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
  xhr.setRequestHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  xhr.onload = function(der) {
    alert(der);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}
