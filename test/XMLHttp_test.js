const xhr = new XMLHttpRequest(); const method = "GET"; const url = "https://7942yongdae.tistory.com/";

xhr.open(method, url);

xhr.onreadystatechange = function (event) { const { target } = event; if (target.readyState === XMLHttpRequest.DONE) { const { status } = target; if (status === 0 || (status >= 200 && status < 400)) { 
} else { 
    
 } } };

 xhr.send();