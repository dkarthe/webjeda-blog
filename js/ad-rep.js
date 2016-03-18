window.onload = function(){ 
  
    setTimeout(function() { 
      
      var ad = document.querySelector("ins.adsbygoogle");
      
      if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) {

        ad.style.cssText = "display:block !important; visibility:visible !important;text-decoration:none !important;font-family: inherit;font-size: 1.25em;color: #0a5;"; 
              
        ad.innerHTML = "You seem to have an Adblock running. Ads are not cool but that's what keeps my website runnning. I would really appreciate if you could whitelist my website in Adblock or buy me a coffee!";
      
      }
      
    }, 2000);
  }; 