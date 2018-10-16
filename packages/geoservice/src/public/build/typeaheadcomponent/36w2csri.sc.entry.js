/*! Built with http://stenciljs.com */
const{h:e}=window.typeaheadcomponent;"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window&&window;class t{constructor(){this.API_URL=""}async searchByNom(e){if(e.target.value.length<2)return void(this.byNomResult="Saisissez au moins 2 charactères.");const t=await fetch(`${this.API_URL}/regions?nom=${e.target.value.replace(/ /g,"-")}`),n=await t.json();this.byNomResult=n.nom}async searchByCode(e){try{const t=await fetch(`${this.API_URL}/regions?code=${e.target.value}`),n=await t.json();this.byCodeResult=Object.assign({nom:n.nom,code:n.code})}catch(e){this.byCodeResult="Erreur lors de la requete"}}async searchDepartementByNom(e){try{const t=await fetch(`${this.API_URL}/departements?nom=${e.target.value.replace(/ /g,"-")}`),n=await t.json();this.byNomDepartementResult=Object.assign({nom:n.nom,code:n.code})}catch(e){this.byNomDepartementResult="Erreur lors de la requete"}}async searchDepartementByCode(e){try{const t=await fetch(`${this.API_URL}/departements?code=${e.target.value}`),n=await t.json();this.byCodeDepartementResult=Object.assign({nom:n.nom,code:n.code})}catch(e){this.byCodeDepartementResult="Erreur lors de la requete"}}async searchCommuneByNom(e){if(e.target.value.length<2)this.byNomResult="Saisissez au moins 2 charactères.";else try{const t=await fetch(`${this.API_URL}/communes?nom=${e.target.value.replace(/ /g,"-")}`),n=(await t.json()).map(e=>e={nom:e.nom,code:e.code});this.byNomCommuneResult=Object.assign({},n)}catch(e){this.byNomCommuneResult="Erreur lors de la requete"}}render(){return e("div",{class:" container"},e("h1",null,e("img",{src:"assets/logolite.png",style:{width:"10%"},class:"no-responsive no-border"}),"Rechercher par Region, Departement, Commune"),e("label",null," Commencez par chargées les données:  ",JSON.stringify(this.statusApi)),e("button",{onClick:()=>fetch(`${this.API_URL}/init`)},"Init data"),e("br",null),e("br",null),e("br",null),e("form",null,e("label",null,"Region par nom: "),e("input",{type:"text",ref:e=>this.inputNomRegion=e,onInput:e=>this.searchByNom(e)}),e("span",null,this.byNomResult),e("br",null),e("label",null,"Region par code: "),e("input",{type:"text",ref:e=>this.inputCodeRegion=e,onInput:e=>this.searchByCode(e)}),e("span",null,JSON.stringify(this.byCodeResult)),e("br",null),e("br",null),e("label",null,"Departement par nom: "),e("input",{type:"text",onInput:e=>this.searchDepartementByNom(e)}),e("span",null,JSON.stringify(this.byNomDepartementResult)),e("br",null),e("label",null,"Departement par code: "),e("input",{type:"text",onInput:e=>this.searchDepartementByCode(e)}),e("span",null,JSON.stringify(this.byCodeDepartementResult)),e("br",null),e("br",null),e("label",null,"Commune par nom: "),e("input",{type:"text",onInput:e=>this.searchCommuneByNom(e)})," ",e("br",null),e("span",null,JSON.stringify(this.byNomCommuneResult))))}static get is(){return"typeahead-component"}static get properties(){return{byCodeCommuneResult:{state:!0},byCodeDepartementResult:{state:!0},byCodePostalResult:{state:!0},byCodeResult:{state:!0},byNomCommuneResult:{state:!0},byNomDepartementResult:{state:!0},byNomResult:{state:!0},statusApi:{state:!0}}}}export{t as TypeaheadComponent};