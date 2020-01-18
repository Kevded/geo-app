/*! Built with http://stenciljs.com */
var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,s){function u(e){try{i(r.next(e))}catch(e){s(e)}}function a(e){try{i(r.throw(e))}catch(e){s(e)}}function i(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(u,a)}i((r=r.apply(e,t||[])).next())})},t=this&&this.__generator||function(e,t){var n,r,o,s,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,r=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){u=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){u.label=s[1];break}if(6===s[0]&&u.label<o[1]){u.label=o[1],o=s;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(s);break}o[2]&&u.ops.pop(),u.trys.pop();continue}s=t.call(e,u)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};typeaheadcomponent.loadBundle("8vnpeg7v",["exports"],function(n){var r=window.typeaheadcomponent.h,o=("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window&&window,function(){function n(){this.API_URL="",this.ASSETS_URL="dist/collection/assets/"}return n.prototype.searchByNom=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return n.target.value.length<2?(this.byNomResult="Saisissez au moins 2 charactères.",[2]):[4,fetch(this.API_URL+"/regions?nom="+n.target.value.replace(/ /g,"-"))];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),this.byNomResult=e.nom,[2]}})})},n.prototype.searchByCode=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.API_URL+"/regions?code="+n.target.value)];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),this.byCodeResult=Object.assign({nom:e.nom,code:e.code}),[3,4];case 3:return t.sent(),this.byCodeResult="Erreur lors de la requete",[3,4];case 4:return[2]}})})},n.prototype.searchDepartementByNom=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.API_URL+"/departements?nom="+n.target.value.replace(/ /g,"-"))];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),this.byNomDepartementResult=Object.assign({nom:e.nom,code:e.code}),[3,4];case 3:return t.sent(),this.byNomDepartementResult="Erreur lors de la requete",[3,4];case 4:return[2]}})})},n.prototype.searchDepartementByCode=function(n){return e(this,void 0,void 0,function(){var e;return t(this,function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),[4,fetch(this.API_URL+"/departements?code="+n.target.value)];case 1:return[4,t.sent().json()];case 2:return e=t.sent(),this.byCodeDepartementResult=Object.assign({nom:e.nom,code:e.code}),[3,4];case 3:return t.sent(),this.byCodeDepartementResult="Erreur lors de la requete",[3,4];case 4:return[2]}})})},n.prototype.searchCommuneByNom=function(n){return e(this,void 0,void 0,function(){var e,r;return t(this,function(t){switch(t.label){case 0:if(n.target.value.length<2)return this.byNomResult="Saisissez au moins 2 charactères.",[2];t.label=1;case 1:return t.trys.push([1,4,,5]),[4,fetch(this.API_URL+"/communes?nom="+n.target.value.replace(/ /g,"-"))];case 2:return[4,t.sent().json()];case 3:return e=t.sent(),r=e.map(function(e){return{nom:e.nom,code:e.code}}),this.byNomCommuneResult=Object.assign({},r),[3,5];case 4:return t.sent(),this.byNomCommuneResult="Erreur lors de la requete",[3,5];case 5:return[2]}})})},n.prototype.render=function(){var e=this;return r("div",{class:" container"},r("h1",null,r("img",{src:this.ASSETS_URL+"/logolite.png",style:{width:"10%"},class:"no-responsive no-border"}),"Rechercher par Region, Departement, Commune"),r("label",null," Commencez par chargées les données:  ",JSON.stringify(this.statusApi)),r("button",{onClick:function(){return fetch(e.API_URL+"/init")}},"Init data"),r("br",null),r("br",null),r("br",null),r("form",null,r("label",null,"Region par nom: "),r("input",{type:"text",ref:function(t){return e.inputNomRegion=t},onInput:function(t){return e.searchByNom(t)}}),r("span",null,this.byNomResult),r("br",null),r("label",null,"Region par code: "),r("input",{type:"text",ref:function(t){return e.inputCodeRegion=t},onInput:function(t){return e.searchByCode(t)}}),r("span",null,JSON.stringify(this.byCodeResult)),r("br",null),r("br",null),r("label",null,"Departement par nom: "),r("input",{type:"text",onInput:function(t){return e.searchDepartementByNom(t)}}),r("span",null,JSON.stringify(this.byNomDepartementResult)),r("br",null),r("label",null,"Departement par code: "),r("input",{type:"text",onInput:function(t){return e.searchDepartementByCode(t)}}),r("span",null,JSON.stringify(this.byCodeDepartementResult)),r("br",null),r("br",null),r("label",null,"Commune par nom: "),r("input",{type:"text",onInput:function(t){return e.searchCommuneByNom(t)}})," ",r("br",null),r("span",null,JSON.stringify(this.byNomCommuneResult))))},Object.defineProperty(n,"is",{get:function(){return"typeahead-component"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{byCodeCommuneResult:{state:!0},byCodeDepartementResult:{state:!0},byCodePostalResult:{state:!0},byCodeResult:{state:!0},byNomCommuneResult:{state:!0},byNomDepartementResult:{state:!0},byNomResult:{state:!0},statusApi:{state:!0}}},enumerable:!0,configurable:!0}),n}());n.TypeaheadComponent=o,Object.defineProperty(n,"__esModule",{value:!0})});