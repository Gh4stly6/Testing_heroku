import './App.css';
import CertificateTable from './components/CertificateTable';
import Addform from './components/Form';
import logo_white from './components/img/logo_white.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from 'aws-amplify';


import {withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

import awsExports from './src/aws-exports'

Amplify.configure(awsExports)

{/*Adding cognito authentication with aws libraries */}
function App( {signOut, user}) {
  return (
    <div className='App'>
      
      <header className='App-header'>
        <>
         <nav class="navbar navbar-expand-xxl bg-dark fixed-top navbar-dark">
          <div class="container-fluid">
           <a class="navbar-brand" href="#">
             <img src={logo_white} alt="" width="100"/>
           </a>
           <div>
               <h4>Hello {user.username}</h4> 
           </div>
           <div>
           <button  type="button" class="btn btn-outline-danger" onClick={signOut}>Sign out</button>
           </div>
         </div>
           </nav>
        </>
      </header>


       <body className='App-body'>
        <div className='App-table'>
          <CertificateTable />
        </div>
         <div className='App-form'>
          <Addform/>
         </div>
       </body>
      
    </div>
   
  );
}


export default withAuthenticator(App);
