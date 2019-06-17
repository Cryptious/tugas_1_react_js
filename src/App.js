import React, { Component } from 'react';
import MenuUtama from "./Page/MenuUtama";
import MenuProduk from "./Page/MenuProduk";
import MenuKontak from "./Page/MenuKontak";
import MenuTentangKami from "./Page/MenuTentangKami";


class App extends Component {
  render (){
    return (
      <div>
        <h2>Ini Halaman Untuk Header</h2>
        <MenuUtama />
        <MenuProduk />
        <MenuKontak />
        <MenuTentangKami />
        <h2>Ini Halaman Untuk Footer</h2>
      </div>
    );
  }
}

export default App;
