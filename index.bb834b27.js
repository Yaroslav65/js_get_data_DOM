var e=document.querySelectorAll(".population"),t=[];e.forEach(function(e){t.push(e.innerText)});var n=t.map(function(e){return+e.replace(/,/g,"")}).reduce(function(e,t){return e+t});document.querySelector(".total-population").textContent=n.toLocaleString("en-US");var o=n/t.length;document.querySelector(".average-population").textContent=o.toLocaleString("en-US");
//# sourceMappingURL=index.bb834b27.js.map