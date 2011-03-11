To run this wireframe package, you will need:
-A web-server with PHP installed
-Add an include to the vhosts.conf file in this folder to your httpd.conf file (e.g. Include /dir/to/this/vhosts.conf)
-configure your .hosts file to point to the domain you set up (e.g. 127.0.0.1 frames.ian www.frames.ian)

Once you have that stuff set up - point a browser to yourdomain/iahome.php

Contents
==================
-Several Basic wireframe pages
-Wireframe objects (all modules in inc/)
-All module styling in (css/elements.css)
-Jquery and JQuery.ui.tabs libraries are included
-Both the 960Grid and BlueprintCSS libraries are included in the css folder. (not used by default)

Known Bugs
=============
On any of the pages that have a column inside a tabbed interface (e.g. products.php, facebookProduct.php), the drag and drop module system breaks down for that column.


===ADD Modules==============
Feel free to create and add your own wirefame modules. Create a new php file (e.g. inc/wireframeWidget.php) and then include this in any page with:

<?php include("inc/wireframeWidget.php");?>
===========================


===ADD CSS=================
To add css file - add to main.css:

@import url("css/fileName.css");
===========================


===ADD scripts=============
to add Javascript files - add to script/scripts.php

<script type="text/javascript" src="script/javascriptFileName.js"></script>
===========================