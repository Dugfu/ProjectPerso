const SitemapGenerator = require('sitemap-generator');

function launchSitemap(obj){
   var url = obj.value;
   var demo = document.getElementById("demo");
   var patt = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
   if(patt.exec(url) != null){
      // console.log(url);
      const generator = SitemapGenerator(url, {
         maxDepth: 0,
         filepath: './sitemap.xml',
         maxEntriesPerFile: 50000,
         stripQuerystring: true,
         priorityMap: [1.0,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1,0]
      });
      generator.on('done', () => {
         alert('done');
      });
      generator.start();
   }else{
      alert("Vous n'avez pas renseigné une URL valide.");
   }
}
