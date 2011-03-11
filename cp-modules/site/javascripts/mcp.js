jQuery(document).ready(function($) {
  $('.bin a').draggable({revert: "invalid"});
  $('.years').droppable({
    activeClass: "ui-state-hover"
  });
  $('.year').droppable({
      hoverClass: "ui-state-active",
      drop: function(event, ui){
          $(this)
            .addClass("highlight")
      }
    });
});
