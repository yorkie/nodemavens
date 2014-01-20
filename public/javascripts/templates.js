!function(){var a=Handlebars.template,e=Handlebars.templates=Handlebars.templates||{};e.about=a(function(a,e,n,t,s){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{},'<section class="about">\n  <div class="container">\n\n    <div class="define">\n      <h4>Maven</h4>\n      <p>\n        ma·ven <em><i>noun</i> \\ˈmā-vən\\</em>\n      </p>\n      <p>one who is experienced or knowledgeable; an expert.</p>\n    </div>\n\n    <p>\n      Node Mavens is a place to show your appreciation for the experts of the\n      node community. This is not a contest, rather a way to show some\n      appreciation for people that have helped you by sharing their expertise.\n    </p>\n\n    <hr>\n\n    <p>\n      Check out the\n      <a href="https://github.com/fiveisprime/nodemavens">source</a>.\n    </p>\n    <p>\n      Built with all the love in the world by\n      <a href="https://twitter.com/fivveisprime">@fiveisprime</a> in\n      Cincinnati, OH.\n    </p>\n  </div>\n</section>\n'}),e.card=a(function(a,e,n,t,s){function l(a,e){var t,s,l="";return l+='\n    <a href="',(s=n.blog_url)?t=s.call(a,{hash:{},data:e}):(s=a&&a.blog_url,t=typeof s===h?s.call(a,{hash:{},data:e}):s),l+=c(t)+'" target="_blank" title="',(s=n.username)?t=s.call(a,{hash:{},data:e}):(s=a&&a.username,t=typeof s===h?s.call(a,{hash:{},data:e}):s),l+=c(t)+'\'s blog"><i class="fa fa-external-link-square fa-lg"></i></a>\n    '}this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{};var i,r,o="",h="function",c=this.escapeExpression,p=this;return o+='<div class="card-inner">\n  <div class="image-wrapper">\n    <img src="',(r=n.avatar_url)?i=r.call(e,{hash:{},data:s}):(r=e&&e.avatar_url,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+'" alt="',(r=n.username)?i=r.call(e,{hash:{},data:s}):(r=e&&e.username,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+'">\n  </div>\n  <div class="content">\n    <p>',(r=n.name)?i=r.call(e,{hash:{},data:s}):(r=e&&e.name,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+' (<a href="',(r=n.github_url)?i=r.call(e,{hash:{},data:s}):(r=e&&e.github_url,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+'">',(r=n.username)?i=r.call(e,{hash:{},data:s}):(r=e&&e.username,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+'</a>)</p>\n    <p class="company">',(r=n.company)?i=r.call(e,{hash:{},data:s}):(r=e&&e.company,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+"</p>\n    <p>",(r=n.location)?i=r.call(e,{hash:{},data:s}):(r=e&&e.location,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+'</p>\n    <div class="loves">\n      <a href="#" class="send-love" title="Give ',(r=n.username)?i=r.call(e,{hash:{},data:s}):(r=e&&e.username,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+' some more love!">',(r=n.love)?i=r.call(e,{hash:{},data:s}):(r=e&&e.love,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+' <i class="fa fa-heart"></i></a>\n    </div>\n  </div>\n  <div class="links">\n    ',i=n["if"].call(e,e&&e.blog_url,{hash:{},inverse:p.noop,fn:p.program(1,l,s),data:s}),(i||0===i)&&(o+=i),o+='\n    <a href="https://www.gittip.com/',(r=n.username)?i=r.call(e,{hash:{},data:s}):(r=e&&e.username,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+'" target="_blank" title="',(r=n.username)?i=r.call(e,{hash:{},data:s}):(r=e&&e.username,i=typeof r===h?r.call(e,{hash:{},data:s}):r),o+=c(i)+' on GitTip"><i class="fa fa-github fa-lg"></i></a>\n  </div>\n</div>'}),e.index=a(function(a,e,n,t,s){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{},'<div id="love-form" style="display:none;"></div>\n<div id="about-modal" style="display:none;"></div>\n<div id="error-modal" style="display:none;"></div>\n<section class="container cards clearfix"></section>\n'}),e.love=a(function(a,e,n,t,s){return this.compilerInfo=[4,">= 1.0.0"],n=this.merge(n,a.helpers),s=s||{},'<form class="cenetered">\n  <p>\n    Let\'s hear it! Who made your day today?\n  </p>\n  <p class="error" style="display:none;"></p>\n  <input type="text" name="username" value="" placeholder="GitHub Username">\n  <input type="submit" value="Send" class="btn accent">\n  <p class="centered"><a href="#" class="close accent">Nevermind</a></p>\n</form>\n'})}();