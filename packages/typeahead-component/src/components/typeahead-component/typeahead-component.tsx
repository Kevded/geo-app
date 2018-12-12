import { Component, State } from '@stencil/core';
import { latenize, replaceSpecialChar, replaceSpaceWithHyphen } from '../../utils';

@Component({
  tag: 'typeahead-component',
  styleUrl: 'typeahead-component.css'
})
export class TypeaheadComponent {
  private API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'

  @State() byNomResult = [];
  @State() byCodeResult = [];
  @State() statusApi;

  @State() byNomDepartementResult = [];
  @State() byCodeDepartementResult = [];

  @State() byNomCommuneResult = [];
  @State() byCodeCommuneResult = [];
  @State() byCodePostalResult = [];

  /*   async componentWillLoad() {
      try {
        const initRes = await fetch(`${this.API_URL}/init`);
        const result = await initRes.json()
        this.statusApi = result;
      } catch (error) {
        this.statusApi = {...error}
      }
    } */
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
          Rechercher par Region, Departement, Commune
      </h1>
        <label> Commencez par chargées les données:  {JSON.stringify(this.statusApi)}</label>
        <button onClick={() => fetch(`${this.API_URL}/init`)}>Init data</button>
        <br />
        <br />
        <br />
        <form>
          <label >Region par nom: </label>
          <input type="text" onInput={(ev) => this.searchByNom(ev)} />
          <span>{this.byNomResult}</span>
          <ul>{this.byNomResult.map(r => <li>
            <span class="small">nom: &nbsp;</span>
            {r.nom} &nbsp;
            <span class="small">code: &nbsp;</span>
            {r.code}
          </li>)}</ul>
          <br />
          <label >Region par code: </label>
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
          <label>Departement par nom: </label>
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
          <label>Departement par code: </label>
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
          <label>Commune par nom: </label>
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
