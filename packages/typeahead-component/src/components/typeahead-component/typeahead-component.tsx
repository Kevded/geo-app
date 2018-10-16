import { Component, State } from '@stencil/core';
@Component({
  tag: 'typeahead-component'
})
export class TypeaheadComponent {
  private API_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3000'
  private inputCodeRegion: HTMLInputElement;
  private inputNomRegion: HTMLInputElement;

  @State() byNomResult;
  @State() byCodeResult;
  @State() statusApi;

  @State() byNomDepartementResult;
  @State() byCodeDepartementResult;

  @State() byNomCommuneResult;
  @State() byCodeCommuneResult;
  @State() byCodePostalResult;

  /*   async componentWillLoad() {
      try {
        const initRes = await fetch(`${this.API_URL}/init`);
        const result = await initRes.json()
        this.statusApi = result;
      } catch (error) {
        this.statusApi = {...error}
      }
    } */
  private async searchByNom(ev) {
    if (ev.target.value.length < 2) {
      this.byNomResult = 'Saisissez au moins 2 charactères.'
      return;
    }
    const result = await fetch(`${this.API_URL}/regions?nom=${ev.target.value.replace(/ /g, '-')}`);
    const data = await result.json();
    this.byNomResult = data.nom;
  }

  private async searchByCode(ev) {
    try {
      const result = await fetch(`${this.API_URL}/regions?code=${ev.target.value}`)
      const data = await result.json();
      this.byCodeResult = { ...{ nom: data.nom, code: data.code } }
    } catch (error) {
      this.byCodeResult = 'Erreur lors de la requete'
    }
  }

  private async searchDepartementByNom(ev) {
    try {
      const result = await fetch(`${this.API_URL}/departements?nom=${ev.target.value.replace(/ /g, '-')}`)
      const data = await result.json();
      this.byNomDepartementResult = { ...{ nom: data.nom, code: data.code } }
    } catch (error) {
      this.byNomDepartementResult = 'Erreur lors de la requete'
    }
  }

  private async searchDepartementByCode(ev) {
    try {
      const result = await fetch(`${this.API_URL}/departements?code=${ev.target.value}`)
      const data = await result.json();
      this.byCodeDepartementResult = { ...{ nom: data.nom, code: data.code } }
    } catch (error) {
      this.byCodeDepartementResult = 'Erreur lors de la requete'
    }
  }

  private async searchCommuneByNom(ev) {
    if (ev.target.value.length < 2) {
      this.byNomResult = 'Saisissez au moins 2 charactères.'
      return;
    }
    try {
      const result = await fetch(`${this.API_URL}/communes?nom=${ev.target.value.replace(/ /g, '-')}`)
      const data = await result.json();
      const filterData = data.map(c => c = { nom: c.nom, code: c.code })
      this.byNomCommuneResult = { ...filterData }
    } catch (error) {
      this.byNomCommuneResult = 'Erreur lors de la requete'
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
          <input type="text"
            ref={el => this.inputNomRegion = el}
            onInput={(ev) => this.searchByNom(ev)} />
          <span>{this.byNomResult}</span>
          <br />
          <label >Region par code: </label>
          <input type="text"
            ref={el => this.inputCodeRegion = el}
            onInput={(ev) => this.searchByCode(ev)} />
          <span>{JSON.stringify(this.byCodeResult)}</span>
          <br />
          <br />
          <label>Departement par nom: </label>
          <input type="text" onInput={ev => this.searchDepartementByNom(ev)} />
          <span>{JSON.stringify(this.byNomDepartementResult)}</span>
          <br />
          <label>Departement par code: </label>
          <input type="text" onInput={ev => this.searchDepartementByCode(ev)} />
          <span>{JSON.stringify(this.byCodeDepartementResult)}</span>
          <br />
          <br />
          <label>Commune par nom: </label>
          <input type="text" onInput={ev => this.searchCommuneByNom(ev)} /> <br />
          <span>{JSON.stringify(this.byNomCommuneResult)}</span>
        </form>
      </div>

    )
  }

}
