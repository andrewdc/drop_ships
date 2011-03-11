


// ActionBar jQuery Pluggin
(function($){
   
   $.fn.actionbar = function( options ){
      var defaults = {
            IANC: 0,                   
            protocol: (("https:" == document.location.protocol) ? "https://www." : "http://www."),
            domain: "frames.ian/actionbar/",
            imageBase: "images/",
            styleBase: "/themes/default/css/",
            displayMode: "full",    
            target: "body",          
            position: "top",          
            docked: false,          
            allowResize: false,     
            searchEnabled: false, 
            searchToggled: false 
         };
       
       // Here we fake a fetch to the server to get the options...
       // We need to make a decision if we want to allow for overriding server saved options
       // with instance options or vise versa.
       //var savedOptions = { displayMode: "full", allowResize: true };
       
       //var options = $.extend( defaults,  savedOptions );
       
       // Override with instance options 
       var options = $.extend( defaults, options );
       
       var blockList = [ "game", "store", "tool" ];
       
       var gameBlock = {  name: "games",
                                    items: [
                                       { title: "Fallen Empire Legions",
                                        image: {url: options.protocol + options.domain + options.imageBase + "game_icon_16x16.png", width: 16, height: 16},
                                        url: "http://www.instantaction.com/games/fallen-empire-legions",
                                        click: function(){ console.log("woot"); }
                                       },
                                       { title: "Marble Blast Online",
                                        image: { url: "http://" + options.imageBase + "mbo_64x64.png", width: 16, height: 16},
                                        url: "http://www.instantaction.com/games/marble-blast-online",
                                        click: {}
                                       },
                                       { title: "Rokkit Ball",
                                         image: { url: "http://" + options.imageBase + "rokkit_64x64.png", width: 16, height: 16},
                                         url: "http://www.instantaction.com/games/rokkit-ball",
                                         click: {}
                                       }
                                    ]
                              };
   
                                 
       var storeBlock = { name: "store",
                                 items: [
                                   { "title": "Item XYZ",
                                    "image": "http://static.actionbar.ian/images/actionbar/XYZ_64x64.png",
                                    "url": "http://www.instantaction.ian/store/XYZ"
                                   },
                                   { "title": "Booya!",
                                    "image": "http://static.actionbar.ian/images/actionbar/booya_64x64.png",
                                    "url": "http://www.instantaction.ian/store/Booya"
                                   },
                                   { "title": "Action Gear",
                                    "image": "http://static.actionbar.ian/images/actionbar/gear_64x64.png",
                                    "url": "http://www.instantaction.ian/store/gear"
                                   }
                                 ]
                              };
       
       var toolBlock = { name: "tools",
                                items: [ { title: "tool" } ]
                              };
       
       // Load the CSS if its not loaded already
       if( $("#__ian_actionbar_css").get().length == 0 ){
         $("body").append("<link id='__ian_actionbar_css' rel='stylesheet' href='" + options.protocol + options.domain + options.styleBase + "actionbar.css" + "' type='text/css' media='screen' />");
       }
       
       buildActionBar( this );
       
      
   
      function buildActionBar( el ){
         
         return el.each( function(){
            
            var obj = $(this);
            
            // Timestamp to get unique identifier
            var aid = (new Date()).getTime();
            
            try{           
               // this is the actionbar MAIN CONTAINER
               var ab = document.createElement("div");
               ab.id = "__ian_ab_" + aid;
               ab.setAttribute( "class", "__ian_actionbar" );
               
               // This is the actionbar background container. Shoudl do
               // nothing but allow for a background panel.
               var abBgDiv = document.createElement("div");
               abBgDiv.id = "__ian_ab_bgdiv_" + aid;
               abBgDiv.setAttribute( "class", "__ian_actionbar_background_div" );
               
               var abDataDiv = document.createElement("div");
               abDataDiv.setAttribute( "class", "__ian_actionbar_data_div" );
               abDataDiv.id = "__ian_ab_data_div_" + aid;
               
               var abLogo = document.createElement("div");
               abLogo.id = "__ian_ab_logo_" + aid;
               abLogo.setAttribute("class", "__ian_actionbar_logo");

               abDataDiv.appendChild( abLogo );
               
               ab.appendChild( abBgDiv );
               ab.appendChild( abDataDiv );
            }
            catch( err ){ if( console ) console.erro( err ); }
            
            var blocks = actionBlocks();
            
            abDataDiv.appendChild( blocks );
            
            abDataDiv.appendChild( buildSearchBox() );
            
            // In this case the target is the docment and no target is defined, so
            // lets add it to the body
            if( typeof obj == "object" && obj.parent().length  == 0 ){
               
               obj = ( options.target != "body" ) ? $("#" + options.target ) : $("body");
               
               if( options.position == "top" ){
                  obj.prepend( ab );
               }
               else if( options.position == "bottom" ){
                  obj.append( ab );
               }
               
            }
            // In this case the actionbar is being applied to a container tab by id or class
            else if( typeof obj == "object" && obj.length > 0){
               obj.html( ab );
            }
            else{
               throw("Can't target container to add actionbar");
            }
            
            try{
               bindMenus();   
            }catch( err ){ if( console ) console.error( err ); };
            
         });
      };
      
      function actionBlocks(){
         //console.log( "afdf" + options.IANC );
         
         var timestamp = (new Date()).getTime();
         
         var blox = document.createElement("div");
         blox.id = "__ian_actionbar_block_" + timestamp;
         blox.setAttribute( "class", "__ian_actionbar_menu_box" );
         
         var bloxList = document.createElement("ul");
         bloxList.setAttribute( "class", "__ian_actionbar_menu_list" );
         
         //
         for( var x = 0; x < blockList.length; x++ ){
            
            try{
               var currentBlock = eval( blockList[x] + "Block" );
               
               if( typeof currentBlock != "object" ){
                  throw "Menu block is not an object so we're not evaling; for security reasons";
                  
               }
            }catch( err ){
               if( debug && console ) console.log( err );
            }
            
            var bloxTitle = document.createElement("span");
            bloxTitle.id = "__ian_actionbar_menu_title_" + timestamp;
            bloxTitle.setAttribute( "class", "__ian_action_menu_title" );
            bloxTitle.innerHTML = currentBlock.name;
            
            // Loops through each menu item and builds it
            for(var y in currentBlock.items ){
               
               try{
                  var item = document.createElement("li");
                  item.id = "game_" + x ;
                  item.setAttribute("class", "__ian_actionbar_game_menu_item");
               }
               catch( err ){ if( console ) console.error( "li: " + err ); }
               
               try{
                  var itemLink = document.createElement("a");
                  //itemLink.setAttribute("href", gameBlock[x].url );
                  
                  if( typeof currentBlock.click == "function" ){
                     itemLink.onclick = currentBlock.click ;
                  }
               }catch( err ){ if( console ) console.error( "a: " + err ); }
               
               // If this item has an image with it then lets bui.d ing
               if( currentBlock.items[y].image != null && currentBlock.items[y].image != undefined ){
                  try{
                     //console.log(y);
                     var itemImage = new Image();
                     itemImage.name = "image_" + currentBlock.name.replace("/ /i", "_");
                     itemImage.id = "image_" + currentBlock.name.replace("/ /i", "_");
                     itemImage.src = currentBlock.items[y].image.url;
                     itemImage.width  = currentBlock.items[y].image.width;
                     itemImage.height = currentBlock.items[y].image.height;
                     itemImage.setAttribute("alt", ( currentBlock.name + " Image" ) );
                  }catch( err ){ if( console ) console.error( "img: " + err ); }
               } // if( currentBlock.items[y].image != null && currentBlock.items[y].image != undefined )
               
            } // for(var y in currentBlock.items )
            
            itemLink.innerHTML = currentBlock.name;
            itemLink.appendChild( itemImage );
            item.appendChild( itemLink );
            bloxList.appendChild( item );
            blox.appendChild( bloxTitle );
            blox.appendChild( bloxList );
            
         } // for( var x = 0; x < blockList.length; x++ )
         
         return blox;
         
      };
      
      function actionTools(){
         
      };
      
      function bindMenus(){
         $( ".__ian_action_menu_title").each( function(i){
            
            var obj  = $(this);
            var parentMenuId = obj.parent().attr("id"); 
            var timer = null;
            
            $(obj).mouseover( function(){
               if( timer != null ) clearTimeout( timer );
               
               $(obj).siblings("ul.__ian_actionbar_menu_list").show();
            }) 
            .mouseout( function(){
               // This prevents the menu from closing immediately on mouseout
               timer = setTimeout( function(){ hideMenu( parentMenuId ); }, 500 );
            });
            
            // This is the mouse catcher for the menu items.
            $(obj).siblings("ul.__ian_actionbar_menu_list")
            .mouseover( function(){
               // clears the timeout because a user is hovering these menu items
               clearTimeout( timer );
            })
            .mouseout( function(){
               // user left, but maybe on accident so give a slight pause
               timer = setTimeout( function(){ hideMenu( parentMenuId ); }, 500 );
            });
            
         });
      }
      
      function hideMenu( menu ){
         $("#" + menu ).children("ul.__ian_actionbar_menu_list").hide();
      }
      
      /**
      * This function looks at the current menu's screen position and
      * determines if the menu should appear above/below/left/right of the
      * current menu title and ActionBar
      **/
      function testMenuPostion( menu ){
         
      }
      
      function buildSearchBox(){
         
         var timestamp = (new Date()).getTime();
         
         var searchBox = document.createElement( "div" );
         searchBox.id = "__ian_actionbar_search_block_" + timestamp;
         searchBox.setAttribute( "class", "__ian_actionbar_search_block" );
   
         var searchBoxBg = document.createElement( "div" );
         searchBoxBg.id = "__ian_actionbar_search_block_background_" + timestamp;
         searchBoxBg.setAttribute( "class", "__ian_actionbar_search_block_background" );      
         
         var searchFieldBox = document.createElement( "div" );
         searchFieldBox.id = "__ian_actionbar_search_block_fieldbox_" + timestamp;
         searchFieldBox.setAttribute( "class", "__ian_actionbar_search_block_fieldbox" );
         
         var searchField = document.createElement( "input" );
         searchField.id = "__ian_actionbar_search_block_input_field_" + timestamp;
         searchField.setAttribute( "class", "__ian_actionbar_search_block_input_field" );
         
         var searchBtn = document.createElement("div");
         searchBtn.id = "__ian_actionbar_search_block_button_" + timestamp;
         searchBtn.setAttribute("class", "__ian_actionbar_search_block_button");
         
         searchFieldBox.appendChild( searchBtn ); // adds search activator;
         searchFieldBox.appendChild( searchField ); // inserts the input field into a paren container
         searchBox.appendChild( searchBoxBg ); // Adds search background div
         searchBox.appendChild( searchFieldBox ); // Adds search field container after background
         
         return searchBox;
         
      }
      
   };
   
})(jQuery); // End ActionBar jQuery Pluggin
