# Drop Ships

A collection of small front-end interface modules and prototypes. 

## CP-Modules

This consists of a few different page and interface layouts that I built in HAML and SASS via StaticMatic. All final html files are in `/site`, but were generated from the haml and sass in` /src` 

* `index.html` is a simple instructions layout
* `mcp.html` is a test interface for a complex drag and drop class organizer. It focuses mostly on the user grab, move, and focus interactions.
* `pathways.html` has several small design elements. The main thing is a complex report chart layout in both a table and table-less format.

## StarRater

StarRater is a simple ratings module using basic HTML, CSS, jQuery, and 1 image file.

## wireframeIAN

This was a complex HTML/CSS wireframe that I built when I worked at InstantAction. We were working on a platform and a module based CMS that would allow users to rearrange and set up pages of content in whatever way they pleased. My main focus with this mock up was to create css interfaces that were flexible enough to fit into various situations.

This was long before I learned about tools like Haml, Sass, or Staticmatic - so I was using a rather arcane php include partial system. e.g.

     <?php include("inc/moduleName.php");?>

Since this is built in PHP - you need to set up some sort of localhost to view the actual rendered results. However, the code may be interesting to somebody as an idea. Today, I would highly recommend using a more modern tool (such as Middleman, Nanoc, StaticMatic, or Jekyle) for building something like this.

I'm sure I will be deploying many more Drop Ships soon. Stay tuned... 

Feel free to nab any of these or browse the code here and learn from them.