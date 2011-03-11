<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>HTML Wireframe Layout</title>
        <link href="main.css" rel="stylesheet" type="text/css" media="screen" title="no title" charset="utf-8"/>

</head>
<body id="product">
	<?php include("inc/superheader.php");?>
	
	<?php include("inc/actionBar.php");?>
	
    <div id="columns" class="clearfix">
        
        		<div id="feature">
						<?php include("inc/productBlock.php");?>
             		</div>

        <ul id="column1" class="column">
		<?php include("inc/browseNav.php");?>
		<?php include("inc/ad125x125.php");?>
		<?php include("inc/ad125x125.php");?>
		<?php include("inc/nav.php"); ?>
        </ul>

        <ul id="column2" class="column">
					<div id="tabs" class="noOverflow">
						<ul class="clearfix">
							<li><a href="#tabs-1">Info</a></li>
							<li><a href="#tabs-2">Play</a></li>
							<li><a href="#tabs-3">Forum</a></li>
						</ul>
			
					<div id="tabs-1" class="product">
						<?php include("inc/smallCopyBlock.php");?>				
						<?php include("inc/screens.php");?>
						<?php include("inc/largeCopyBlock.php");?>
					</div><!-- endtab1 -->
		
					<div id="tabs-2">		
		   				<?php include("inc/gameWindow.php");?>
						<?php include("inc/largeCopyBlock.php");?>
						<?php include("inc/flexWidget.php");?>
					</div><!-- endTabs2 -->
            
					<div id="tabs-3">			
							<?php include("inc/itemList.php");?>
							<?php include("inc/flexWidget.php");?>
							<?php include("inc/itemList.php");?>
					</div><!-- endTabs3 -->
		</div><!-- endTabs -->

        </ul>
        
        <ul id="column3" class="column">
           	<?php include("inc/moduleCart.php");?>
           	<?php include("inc/basicList.php");?>
           	<?php include("inc/basicList.php");?>
		<?php include("inc/flexWidget.php");?>
        </ul>
  
		<?php include("inc/footer.php");?>
    </div>
    
    
    <!--Include the JS Files-->
    <?php include("script/scripts.php");?>

	<!-- Page Specific JQuery -->  

    <script type="text/javascript" charset="utf-8">
    	$(document).ready(function() {    
		$("li.widget").addClass("editingOff");
		 $(".editToggle").toggle(
       	     function() {
       	     $("li.widget").removeClass("editingOff"); 
       	     },
       	     function() {
    	     $("li.widget").addClass("editingOff");
       	     }
    	     );
		//Tabs
		$('#tabs').tabs();
		$('#screens').tabs({ fx: { opacity: 'toggle', speed: 'fast' } });
    	});

    </script>

</body>
</html>