const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
 
  let index = 0;
  
  function onKeyDownHandler(e) {
    document.addEventListener('keydown', function(e) {
    const key = parseInt(e.location || e.detail);
    
    if (key === code[index]) {
      index+=1;
      
      if (index === code.length) {
        window.alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}
}