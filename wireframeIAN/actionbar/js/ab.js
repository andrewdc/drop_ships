var Utils = {

    /**
    * The load script can take in any number of parameters.
    * If the param is of type:
    *     function - it becomes a call back for when all the scripts have finished loading
    *     string - it assumes this is the path to a javascript file to load. Does NOT need to be loaded 
    *              on host site, allows for cross-site scripting
    *     object - assumes this is an object that has a string for the source and a callback for when
    *              loading is complete
    *		
    *		@param 	src 		The path to the script, relative or absolute
    *		@param	success		The function to call on successful load of the script
    *		@param	error		The function to call on error of loading the script		
    **/     
   loadScript: function(){
       var  anon    = function(){},
       		success = anon,
       		error	= anon,
            scripts = [],
            loaded 	= 0,
            head 	= document.getElementsByTagName("head")[0];

		for (var i = 0, arg; arg = arguments[i]; i++) {
			if (typeof arg == "string") {
				createScript(arg);
			} else if (typeof arg == "function") {
				if( success == anon ){
					success = arg;
				} else {
					error = arg;
				}
			} else if (typeof arg == "object" && arg.src) {
				createScript( arg.src , arg);
			} else if (typeof arg == "object" && !arg.src && arg.success) {
				success = arg.success || anon;
				error	= arg.error || anon;
			}
		}
		
		function createScript(path, data ) {			
			var script 		= document.createElement("script");
			script.onload 	= function(){ scriptLoaded.call( this, data ); };
			script.onerror 	= function(){ scriptError.call( this, data ); }
			script.type     = "text/javascript";
			script.src 		= absUrl(path);
			scripts.push(script);
			head.appendChild(script);
		}				
		
		function scriptLoaded( data ) {
			if( data && typeof data.success == 'function'){
				data.success.call( this );
			}
			if( ++loaded == scripts.length && typeof success == 'function'){
				success.call( scripts );
			}
		}
		
		function scriptError( data ){
			if( data && typeof data.error == 'function'){
				data.error.call( this );
			}
			error.call( this );
		}
		
		function absUrl(path) {
			
			var aPath = Utils.script.src.split('/');
			aPath.pop();
			var protocol = aPath[0];
			var hostname = aPath[2];
			var fullpath = aPath.join('/'); 
			
			if( !(/^(ftp|http|https):\/\//.test(path)) ){
				if( /^\//.test( path ) ){
					path = protocol + '//' + hostname + path;
				} else {
					path = fullpath + "/" + path;
				}
			}
			return path;
		}
   },
   script: (function() { var scripts = document.getElementsByTagName('script'); return scripts[scripts.length - 1];})(),
   get: function( url ){
   		url = url || this.script.src.toString();
		if( url.indexOf('?') < 0 ){
			key = url;
			url = this.script.src.toString();
		}
		var hashes = url.slice( url.indexOf('?') + 1 ).split('&'),
		    val,
		    i=0,
		    key = key || null,
		    vars={};
		
		for(i=0; val=hashes[i];++i){
		    var hash = val.split('=');
		    vars[hash[0]] = hash[1]; 
		}
		if( key != null ){
		    return vars[key];
		} else {
		    return vars;
		}
	}


};

Utils.loadScript(   
   'jquery-1.3.2.min.js',
   { src: 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js'  },
   'jquery.actionbar.js',
   function(){
   		if( console ) console.log('success');
         
         // This is a hardcoding of the mandatory function getAction which
         // instantiates the ActionBar(s).  The function call can be overridden
         // by the url: /actionbar/js/ab.js?success=actionBar
         if( typeof getAction == "function" ){
            getAction();
         }
         else{
            if( console ) console.log( "Get Action function isn't available");
         }
   },
   function(){
   		if( console ) console.log( 'ERROR LOADING ALL OF THESE, especially this', this );	
   }
);
