import { useState } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import _ from "lodash";
import MOCK_DATA from './MOCK_DATA.json'
import Nav from 'react-bootstrap/Nav'
import handleAddFormSubmit from "./Form"
import 'bootstrap/dist/css/bootstrap.min.css';

{/*Using a Hook useState to add funcionality to out filter*/}
const CertificateTable = () => {
  const [searchTerm, setsearchTerm] = useState("");
  return (
    <div className= "app-container" >

  {/*Table Title*/}
      <h2>Certification Record</h2>

      {/*Creating filter component
          define a inpute for the search bar, adding some styles*/}
      <div className='App-filter'>
        <input type="text"
         placeholder='Search...' 
         style={{marginTop:50, marginBottom: 20, width: "40%"}}
         onChange={(e) =>{
           setsearchTerm(e.target.value)
         }}
         />

      </div>
      
      {/*Table Sructure, includes Bootrastap*/}
      <div class="table-responsive-xxl">
      <table class="table table-bordered table-hover" >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th>Account</th>
            <th>Start Date</th>
            <th>Status</th>
            <th>Course Name</th>
            <th>Training category</th>
            <th>Trainig Date</th>
            <th>End Date</th>
            <th>Training Delivery</th>
            <th>Provider</th>
            <th>Instructor Name</th>
            <th>Training Status</th>
            <th>Certificate Expiration Date</th>
            <th>Comments</th>
            <th>Certificate</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>

            {MOCK_DATA.filter((val) => {
              if (searchTerm === ""){
                return val;
              } else if (
                val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Account.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Training_Category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Training_Delivery.toLowerCase().includes(searchTerm.toLowerCase()) ||
                val.Training_Status.toLowerCase().includes(searchTerm.toLowerCase())
              ){
                return val;
              }
                
            }).map((contacts)=>(
              <tr key={contacts.id}>
                <td>{contacts.Name}</td>
                <td>{contacts.Email}</td>
                <td>{contacts.Department}</td>
                <td>{contacts.Position}</td>
                <td>{contacts.Account}</td>
                <td>{contacts.Start_Date}</td>
                <td>{contacts.Status}</td>
                <td>{contacts.Course_Name}</td>
                <td>{contacts.Training_Category}</td>
                <td>{contacts.Trainig_Date}</td>
                <td>{contacts.End_Date}</td>
                <td>{contacts.Training_Delivery}</td>
                <td>{contacts.Provider}</td>
                <td>{contacts.Instructor_Name}</td>
                <td>{contacts.Training_Status}</td>
                <td>{contacts.Certificate_Expiration_Date}</td>
                <td>{contacts.Comments}</td>
                <td>
                  <div class="d-flex">
                  <p>
                    <Button>Upload</Button>
                  </p>
                  <p><Button variant='secondary'>Download</Button></p>
                  </div>
                </td>
                <td>
                  <div class="d-flex">
                  <p>
                    <Button>Edit</Button>
                  </p>
                  <p><Button variant='danger'>Delete</Button></p>
                  </div>
                 
                </td>

              </tr>
            ))}
        </tbody>
      </table>


      </div>
      
    </div>
    
  )
}

export default CertificateTable