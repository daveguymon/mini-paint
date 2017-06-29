$(document).ready(function(){
    
    var color = 'white';
    var colors = 'white green red blue yellow';
    var isDragging = false;
    
    
    $('.box').on('click', function(){
        $(this).addClass(color);
    })
    
    $('.box').on('dblclick', function(){
        $(this).removeClass(colors);
    })
    
    $('#reset').on('click', function(){
        $('.box').removeClass(colors);
    })
    
    $('#red').on('click', function(){
        color = 'red';
    })
    
    $('#blue').on('click', function(){
        color = 'blue';
    })
    
    $('#green').on('click', function(){
        color = 'green';
    })
    
    $('#yellow').on('click', function(){
        color = 'yellow';
    })
    
    $('#white').on('click', function(){
        color = 'white';
    })
    
    
//    paint dragging code below
    
    $('.box').on('mousedown', function() {
        isDragging = true;
        $('.box').on('mouseover', function() {
        if(isDragging) {
            $(this).addClass(color);
        }
    })
    
    
    })
    
    $('.box').on('mouseup', function() {
        isDragging = false;
    })
    
    
    
});