
function print(target){
    console.log(target);
}

// Drag'N'Drop
$(function() {
	$('#mydiv1').draggable();
	$('#mydiv2').draggable();
	$('.resize').draggable();
});

// Resizing element
  $( function() {
  $( ".resize" ).resizable();
   });

  // Cloning element
  //  $(".resize").click(function () {
  //     $(this).clone().css('color','red').appendTo('.right-bar');
  //  });
