angular.module('Services', [])
   
.factory('RSSFeedService',  function() {


  var factory = {}; 

   factory.getRSSData= function(url,resultado){
      console.log(url);


      $.get(url, function(data) {
      var $xml = $(data);
      var items = [];

      $xml.find("item").each(function() {
          var $this = $(this),
              item = {
                  title: $this.find("title").text(),
                  link: $this.find("link").text(),
                  description: $this.find("description").text(),
                  pubDate: $this.find("pubDate").text(),
                  author: $this.find("author").text()
          }
          if(item.description != undefined){
            var matches = item.description.match(/&#[0-9]*;/gm);
            if(matches != null)
              $.each(matches, function( i , e ) { item.description = item.description.replace(e, String.fromCharCode( e.replace("&#","").replace(";","")   )) } );
          }


          items.push(item);


      });
      resultado(items);


    });

      return url;

    }

    return factory;
});

