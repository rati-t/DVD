var left,topi,sc_height,sc_width;
var measure_height = 1;
var measure_width = 1;
left = 5;
topi = 5;
var pixel_hor_moved_per_click = 1;
var pixel_ver_moved_per_click = 1;
var interval;
var checker = 0;

$(document).ready(function(){
    $("body").keypress(function(event){
       if(event.keyCode == 32 && checker == 0){
           $("h1").css("color", "white");
           interval = setInterval(start_it,10)
       }
       if(event.keyCode == 13){
           checker = 0;
           clearInterval(interval)
       }
    })
    
});

function start_it (){
        checker = 1;
        sc_height = $(window).height()-100;
        sc_width = $(window).width()-200;

        if(topi >= sc_height) measure_height = -1; 
        if(topi == 0) measure_height = 1; 
        if(left == 0) measure_width = 1; 
        if(left >= sc_width) measure_width = -1; 
        if(measure_height == 1) topi += pixel_ver_moved_per_click; 
        if(measure_height == -1) topi -= pixel_ver_moved_per_click; 
        if(measure_width == 1) left += pixel_hor_moved_per_click; 
        if(measure_width == -1) left -= pixel_hor_moved_per_click; 
        $("#box").css({
            left: left,
            top: topi            
        })
}






