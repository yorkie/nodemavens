!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.about=a(function(a,e,n,t,s){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{},'<section class="about">\n  <div class="container">\n\n    <div class="define">\n      <h4>Maven</h4>\n      <p>\n        ma·ven <em><i>noun</i> \\ˈmā-vən\\</em>\n      </p>\n      <p>one who is experienced or knowledgeable; an expert.</p>\n    </div>\n\n    <p>\n      Node Mavens is a place to show your appreciation for the experts of the\n      node community. This is not a contest, rather a way to show some\n      appreciation for people that have helped you by sharing their expertise.\n    </p>\n\n    <hr>\n\n    <p>\n      Check out the\n      <a href="https://github.com/fiveisprime/nodemavens">source</a>.\n    </p>\n    <p>\n      Built with all the love in the world by\n      <a href="https://twitter.com/fivveisprime">@fiveisprime</a> in\n      Cincinnati, OH.\n    </p>\n  </div>\n</section>\n'}),e.card=a(function(a,e,n,t,s){this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{};var l,i,o="",r="function",h=this.escapeExpression;return o+='<div class="card-inner">\n  <div class="image-wrapper">\n    <img src="',(i=n.avatar_url)?l=i.call(e,{hash:{},data:s}):(i=e&&e.avatar_url,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+'" alt="',(i=n.username)?l=i.call(e,{hash:{},data:s}):(i=e&&e.username,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+'">\n  </div>\n  <div class="content">\n    <p>',(i=n.name)?l=i.call(e,{hash:{},data:s}):(i=e&&e.name,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+' (<a href="',(i=n.github_url)?l=i.call(e,{hash:{},data:s}):(i=e&&e.github_url,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+'">',(i=n.username)?l=i.call(e,{hash:{},data:s}):(i=e&&e.username,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+'</a>)</p>\n    <p class="company">',(i=n.company)?l=i.call(e,{hash:{},data:s}):(i=e&&e.company,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+"</p>\n    <p>",(i=n.location)?l=i.call(e,{hash:{},data:s}):(i=e&&e.location,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+'</p>\n    <div class="loves">\n      <a href="#" class="send-love" title="Give ',(i=n.username)?l=i.call(e,{hash:{},data:s}):(i=e&&e.username,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+' some more love!">',(i=n.love)?l=i.call(e,{hash:{},data:s}):(i=e&&e.love,l=typeof i===r?i.call(e,{hash:{},data:s}):i),o+=h(l)+" ❤'s</a>\n    </div>\n  </div>\n</div>"}),e.index=a(function(a,e,n,t,s){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{},'<div id="love-form" style="display:none;"></div>\n<div id="about-modal" style="display:none;"></div>\n<section class="container cards clearfix"></section>\n'}),e.love=a(function(a,e,n,t,s){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{},'<form class="cenetered">\n  <p>\n    Let\'s hear it! Who made your day today?\n  </p>\n  <p class="error" style="display:none;"></p>\n  <input type="text" name="username" value="" placeholder="GitHub Username">\n  <input type="submit" value="Send" class="btn accent">\n  <p class="centered"><a href="#" class="close accent">Nevermind</a></p>\n</form>\n'})}();