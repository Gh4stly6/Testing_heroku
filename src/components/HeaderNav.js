import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo_blue from './img/logo_blue.png';


function HeaderNav() {
    return (
      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={logo_blue} alt="" width="100"/>
        </a>
      </div>
    </nav>
    )
}

export default HeaderNav
