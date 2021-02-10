
$(document).ready(function(){
    var left,top,sc_height,sc_width;
    left = 5;
    top = 5;
    var pixe_moved_per_click = 5;
    
    $("body").keypress(function(event){
        sc_height = $(window).height()-50;
        sc_width = $(window).width()-50;
        if(event.keyCode == 97 && left > 0){
            left -= pixe_moved_per_click;
            $("#box").animate({
                left: left
            }, 1)
        }
        if(event.keyCode == 119 && top > 0){
            top -= pixe_moved_per_click;
            $("#box").animate({
                top: top
            }, 1)
        }
        if(event.keyCode == 100){
            if(left+pixe_moved_per_click < sc_width){
                left += pixe_moved_per_click;
                $("#box").animate({
                    left: left
                }, 1)
            }
        }
        if(event.keyCode == 115 && top+pixe_moved_per_click < sc_height){
            top += pixe_moved_per_click;
            $("#box").animate({
                top: top
            }, 1)
        }
        console.log($(document).width(),$(document).height())
        console.log(left,top)
    })
});

