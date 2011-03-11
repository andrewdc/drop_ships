<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>HTML Wireframe Layout</title>
	        <link href="main.css" rel="stylesheet" type="text/css" media="screen" title="no title" charset="utf-8"/>
	
		    <!--Include the JS Files-->
		    <?php include("script/scripts.php");?>

			<!-- Page Specific JQuery -->
		    <script type="text/javascript" charset="utf-8">
		    	$(document).ready(function() {    
				$("li.widget").addClass("editingOff"); //This gets all the widget Headers and adds the toggle hide/show
				 $(".editToggle").toggle(
		       	     function() {
		       	     $("li.widget").removeClass("editingOff"); 
		       	     },
		       	     function() {
		    	     $("li.widget").addClass("editingOff");
		       	     }
		    	     );
		
				//Tabs
				$('#screens').tabs({ fx: { opacity: 'toggle', speed: 'fast' } }); //the Tab call for the screens widget
		    	});

		    </script>
	
</head>
<body id="home">
	<?php include("inc/superheader.php");?>
	
	<?php include("inc/actionBar.php");?>
	<?php include("inc/sideHandle.php");?>
	
	<div class="wrap">	
		<div id="feature">
			<?php include("inc/carousel.php");?>
		</div>
	
		<?php include("inc/selectorMatrix.php"); ?>
	</div>
	
    <div id="columns" class="clearfix">
        

		
        <ul id="column1" class="column">
	        <?php include("inc/nav.php"); ?>
            <?php include("inc/ad125x125.php"); ?>
			<?php include("inc/ad125x125.php"); ?>
			<?php include("inc/ad125x125.php"); ?>
			<?php include("inc/flexWidget.php"); ?>
        </ul>

        <ul id="column2" class="column">
			<?php include("inc/smallCopyBlock.php");?>
			<?php include("inc/smallCopyBlock.php");?>
		 	<?php include("inc/itemList.php");?>
		 	<?php include("inc/flexWidget.php");?>
			<?php include("inc/smallCopyBlock.php");?>
        </ul>
        
        <ul id="column3" class="column">
			<?php include("inc/basicList.php");?>
		 	<?php include("inc/itemList.php");?>
		 	<?php include("inc/flexWidget.php");?>
			<?php include("inc/basicList.php");?>
        </ul>
  
		<?php include("inc/footer.php");?>
    </div>
    
	<script type="text/javascript">

	   function getAction(){
	           try{
	               // Creates generic at top of page
	               //$().actionbar();

	               // Creates 2 by class
	               $(".ab").actionbar();

	               // Creates single by DOM tag ID
	               //$("#test").actionbar();

	           } catch(err) { if( console ) console.error( err ); }

	   }
	</script>

	<script type="text/javascript">
	    var abJsProtocol = (("https:" == document.location.protocol) ?
	"https://www." : "http://www.");
	   var abJsHost = "frames.ian/actionbar";
	   document.write(unescape("%3Cscript src='" + abJsProtocol +
	abJsHost + "/js/ab.js' type='text/javascript' %3E%3C/script%3E"));

	</script>


</body>
</html>