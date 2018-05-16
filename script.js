var start = new Date().getTime();
        
var avetime=0;

var round=1;

var ranNum=0;

var lastNum=0;

var correctRound=0;





            
function getRandomColor() {
                
    var letters = '0123456789ABCDEF'.split('');
    
    var color = '#';
    
    for (var i = 0; i < 6; i++ ) {
        
         color += letters[Math.floor(Math.random() * 16)];
    
    }
                
    
    return color;

}
           
function makeShapeAppear() {
                
    var top = Math.random() * 400;
                
    var left = Math.random() * 400;
                
    var width = (Math.random() * 200) + 100;
    
    lastNum=ranNum;
    
    ranNum = Math.floor(Math.random() * 200);
                
    if (Math.random() > 0.5) {
                    
        document.getElementById("shape").style.borderRadius = "50%";
                    
        } else {
                    
        document.getElementById("shape").style.borderRadius = "0";
                    
        }
    
        document.getElementById("value").innerHTML = ranNum;
    
        document.getElementById("shape").style.top = top + "px";
                
        document.getElementById("shape").style.left = left + "px";
    
        document.getElementById("shape").style.width = width + "px";
                
        document.getElementById("shape").style.height = width + "px";
                
        document.getElementById("shape").style.backgroundColor = getRandomColor();
    
        document.getElementById("shape").style.display = "table";

                
        start = new Date().getTime();

    }
            
function appearAfterDelay() {
                
    setTimeout(makeShapeAppear, Math.random() * 2000);
                
}

/*
function checkValue() {
    
    if (lastNum==document.getElementById("remember").value){
        
        document.getElementById("check").style.src = "right.jpg";
        
        correctRound=correctRound+1;
    }
    
    else {
        
        document.getElementById("check").src = "wrong.jpg";
    }
           
    document.getElementById("accuracy").innerHTML = correctRound + "/" + (round-1);
    
    appearAfterDelay();
    
}

*/








appearAfterDelay();
            
document.getElementById("shape").onclick = function() {
                
    document.getElementById("shape").style.display = "none";
                
    var end = new Date().getTime();
                
    var timeTaken = (end - start) / 1000;
    
    avetime=(avetime+timeTaken)/round;
               
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    
    document.getElementById("numround").innerHTML = round + " trials";
    
    round = round + 1;
    
   // document.getElementById("button").onclick=checkValue();
    
    appearAfterDelay();
                  
}