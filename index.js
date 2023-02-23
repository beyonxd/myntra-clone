// carousel 
var count = 1;
setInterval(function(){
    
    $("#radio" + count).prop("checked", true);
    $(".btn" + count).addClass("mb"+count);
    var count1 = count - 1
    count++
    $(".btn" + count1).delay(4000).removeClass("mb"+count1);
    
    if(count > 6){
        count = 1;
    }
    
}, 4000);






