import { Component, State, h } from '@stencil/core';
import { latenize, replaceSpecialChar, replaceSpaceWithHyphen } from '../../utils';

@Component({
  tag: 'typeahead-component',
  styleUrl: 'typeahead-component.css'
})
export class TypeaheadComponent {
  private API_URL = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api'

  @State() byNomResult = [];
  @State() byCodeResult = [];
  @State() statusApi: string;

  @State() byNomDepartementResult = [];
  @State() byCodeDepartementResult = [];

  @State() byNomCommuneResult = [];
  @State() byCodeCommuneResult = [];
  @State() byCodePostalResult = [];

  async componentWillLoad() {
    console.log(this.API_URL)
    this.initAPI();
  }
  initAPI() {
    this.statusApi = "chargement...";
    fetch(`${this.API_URL}/init`)
      .then(res => {
        if (res.ok) {
          this.statusApi = "données chargées"
        } else {
          throw new Error()
        }
      })
      .catch(error => {
        console.error(error);
        this.statusApi = error.message;
      });
  }
  private normalizeStr(str: string): string {

    return replaceSpecialChar(replaceSpaceWithHyphen(latenize(str).toLowerCase()));

  }
  private async searchByNom(ev) {
    const normalized_nom = this.normalizeStr(ev.target.value);
    console.log('normalize', normalized_nom)
    if (ev.target.value.length < 2) {
      // this.byNomResult = 'Saisissez au moins 2 charactères.'
      return;
    }
    const result = await fetch(`${this.API_URL}/regions?nom=${normalized_nom}`);
    const data = await result.json();
    const filtered = data.map(r => r = { nom: r.nom, code: r.code })
    this.byNomResult = [...filtered];
  }

  private async searchByCode(ev) {
    try {
      const result = await fetch(`${this.API_URL}/regions?code=${ev.target.value}`)
      const data = await result.json();
      const filtered = data.map(r => r = { nom: r.nom, code: r.code })
      this.byCodeResult = [...filtered]
    } catch (error) {
      // this.byCodeResult = 'Erreur lors de la requete'
    }
  }

  private async searchDepartementByNom(ev) {
    const normalized_nom = this.normalizeStr(ev.target.value);

    try {
      const result = await fetch(`${this.API_URL}/departements?nom=${normalized_nom}`)
      const data = await result.json();
      const filtered = data.map(d => d = { nom: d.nom, code: d.code });
      this.byNomDepartementResult = [...filtered];
    } catch (error) {
      // this.byNomDepartementResult = 'Erreur lors de la requete'
    }
  }

  private async searchDepartementByCode(ev) {
    try {
      const result = await fetch(`${this.API_URL}/departements?code=${ev.target.value}`)
      const data = await result.json();
      const filtered = data.map(d => d = { nom: d.nom, code: d.code });
      this.byCodeDepartementResult = [...filtered];
    } catch (error) {
      // this.byCodeDepartementResult = 'Erreur lors de la requete'
    }
  }

  private async searchCommuneByNom(ev) {
    const normalized_nom = this.normalizeStr(ev.target.value);
    if (ev.target.value.length < 2) {
      // this.byNomResult = 'Saisissez au moins 2 charactères.'
      return;
    }
    try {
      const result = await fetch(`${this.API_URL}/communes?nom=${normalized_nom}`)
      const data = await result.json();
      const filterData = data.map(c => c = { nom: c.nom, code: c.code })
      this.byNomCommuneResult = [...filterData]
    } catch (error) {
      // this.byNomCommuneResult = 'Erreur lors de la requete'
    }
  }

  render() {
    return (
      <div class=" container">
        <h1>
          <img src="assets/logoLite.png" style={{ width: "10%" }} class="no-responsive no-border" />
          Rechercher par Region, Departement, Commune en France
      </h1>
      <h2><a href="https://github.com/Kevded/geo-app">Voir le projet sur Github</a></h2>
        
        <button onClick={() => this.initAPI()}>Commencez par charger les données</button>
        <label> status des données :  <strong class={{ "status-success": !!this.statusApi, "status-error": !this.statusApi, "status-loading": this.statusApi === 'chargement...' }}>{this.statusApi ? this.statusApi : 'données non chargées'}</strong></label>
        <br />
        <br />
        <br />
        <form>
          <label >Region par nom (ex: "Nouvelle Aquitaine") : </label>
          <input type="text" onInput={(ev) => this.searchByNom(ev)} />
          <span>{this.byNomResult}</span>
          <ul>{this.byNomResult.map(r => <li>
            <span class="small">nom: &nbsp;</span>
            {r.nom} &nbsp;
            <span class="small">code: &nbsp;</span>
            {r.code}
          </li>)}</ul>
          <br />
          <label >Region par code (ex: "53") : </label>
          <input type="text" onInput={(ev) => this.searchByCode(ev)} />
          <ul>
            {this.byCodeResult.map(r => <li>
              <span class="small">nom: &nbsp;</span>
              {r.nom}&nbsp;
                <span class="small">code: &nbsp;</span>
              {r.code}
            </li>)}
          </ul>
          <br />
          <br />
          <label>Departement par nom (ex: "Indre") : </label>
          <input type="text" onInput={ev => this.searchDepartementByNom(ev)} />
          <ul>
            {this.byNomDepartementResult.map(d => <li>

              <span class="small">nom: &nbsp;</span>
              {d.nom}&nbsp;
                <span class="small">code: &nbsp;</span>
              {d.code}
            </li>
            )}
          </ul>
          <br />
          <label>Departement par code (ex : "01") : </label>
          <input type="text" onInput={ev => this.searchDepartementByCode(ev)} />
          <ul>
            {this.byCodeDepartementResult.map(d =>
              <li>
                <span class="small">nom: &nbsp;</span>
                {d.nom}&nbsp;
                <span class="small">code: &nbsp;</span>
                {d.code}
              </li>
            )}
          </ul>
          <br />
          <br />
          <label>Commune par nom (ex : "Rennes") : </label>
          <input type="text" onInput={ev => this.searchCommuneByNom(ev)} />
          <br />
          <ul>
            {this.byNomCommuneResult.map(c => <li>
              <span class="small">
                nom: &nbsp;
                </span>
              {c.nom}, &nbsp;
              <span class="small">
                code: &nbsp;
                  </span>
              {c.code}
            </li>)}
          </ul>
        </form>
      </div>
    )
  }

}
