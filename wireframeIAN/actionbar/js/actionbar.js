


// ActionBar jQuery Pluggin
(function($){
   
   $.fn.actionbar = function( options ){
      var defaults = {
            clientId: 0,
            displayMode: "full",
            targetContainer: "test222"
         };
       
       var options = $.extend( defaults, options );
       
       var stylehref = "http://frames.ian/actionbar/themes/default/css/actionbar.css";
       $("body").append("<link rel='stylesheet' href='" + stylehref + "' type='text/css' media='screen' />");
       
      return this.each( function(){
         var obj = $(this);
         
         // If this is true, then there is no target in the call
         // so we need to use the option or default value
         if( typeof obj == "object" ){
            obj = $("#" + options.targetContainer);
         }
         
         obj.html("ActionHere!");
         obj.addClass("__ian_actionbar");
         
      });
   };
   
})(jQuery); // End ActionBar jQuery Pluggin
