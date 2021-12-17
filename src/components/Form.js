import Button from "@restart/ui/esm/Button";
import { useState } from 'react';
import React from "react";
import {nanoid} from 'nanoid';
import MOCK_DATA from './MOCK_DATA.json'

function Addform() {
  const [contacts, setContacts] = useState(MOCK_DATA);
  const [addFormData, setAddFormData] = useState({
    Name: '',
    Email: '',
    Department: '',
    Position: '',
    Account: '',
    Start_date: '',
    Status: '',
    Course_name: '',
    Training_category: '',
    Training_date: '',
    End_date: '',
    Training_delivery: '',
    Provider: '',
    Instructor_name: '',
    Training_status: '',
    Certificate_Expiration_Date: '',
    Comments: ''
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldname = event.target.getAttribute("name");
    const fieldvalue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldname] = fieldvalue;

    setAddFormData(newFormData);
  };
  const handleAddFormSubmit = (event) =>{
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Name: addFormData.Name,
      Email: addFormData.Email,
      Department: addFormData.Department,
      Position: addFormData.Position,
      Account: addFormData.Account,
      Start_Date: addFormData.Start_Date,
      Status: addFormData.Status,
      Training_Category: addFormData.Training_Category,
      End_Date: addFormData.End_Date,
      Training_Date: addFormData.Training_Date,
      Course_Name: addFormData.Course_Name,
      Training_Delivery: addFormData.Training_Delivery,
      Provider: addFormData.Provider,
      Instructor_Name: addFormData.Instructor_Name,
      Training_Status: addFormData.Training_Status,
      Certificate_Expiration_Date: addFormData.Certificate_Expiration_Date,
      Comments: addFormData.Comments,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

};

  return (
    <form onSubmit={handleAddFormSubmit}>
      <div class="row">
        <div class="col">
          <label>
            Name:
            <input type="text" name="name" required="required" placeholder="Enter a name..." onChange={handleAddFormChange}/>
          </label>
    
          <label>
            Email:
            <input type="text" name="Email" required="required" placeholder="Enter an email..." onChange={handleAddFormChange} />
          </label>
        </div>
      </div>
        
        <label>
          Department:
          <input type="text" name="Department" required="required" placeholder="Enter a department..." onChange={handleAddFormChange} />
        </label>
        <label>
          Position:
          <input type="text" name="Position" required="required" placeholder="Enter a position..." onChange={handleAddFormChange} />
        </label>
        <label>
          Account:
          <input type="text" name="Account" required="required" placeholder="Enter an account..." onChange={handleAddFormChange} />
        </label>
        <label>
          Start date: 
          <input type="text" name="Start Date" required="required" placeholder="Enter a start date..." onChange={handleAddFormChange} />
        </label>
        <label>
          Status:
          <input type="text" name="Status" required="required" placeholder="Enter a status..." onChange={handleAddFormChange} />
        </label>
        <label>
          Training category:
          <input type="text" name="Training category" required="required" placeholder="Enter a training category..." onChange={handleAddFormChange} />
        </label>
        <label>
          End date:
          <input type="text" name="End Date" required="required" placeholder="Enter an end date..." onChange={handleAddFormChange} />
        </label>
        <label>
          Training date:
          <input type="text" name="Trainig Date" required="required" placeholder="Enter a trainig date..." onChange={handleAddFormChange} />
        </label>
        <label>
          Course name:
          <input type="text" name="Course Name" required="required" placeholder="Enter a course Name..." onChange={handleAddFormChange} />
        </label>
        <label>
          Training delivery:
          <input type="text" name="Training Delivery" required="required" placeholder="Enter a training delivery..." onChange={handleAddFormChange} />
        </label>
        <label>
          Provider:
          <input type="text" name="Provider" required="required" placeholder="Enter a provider..." onChange={handleAddFormChange} />
        </label>
        <label>
          Instructor name:
          <input type="text" name="Instructor Name" required="required" placeholder="Enter an instructor name..." onChange={handleAddFormChange} />
        </label>
        <label>
          Training status:
          <input type="text" name="Training Status" required="required" placeholder="Enter a training status..." onChange={handleAddFormChange} />
        </label>
        <label>
          Certificate expiration date:
          <input type="text" name="Certificate Expiration Date" required="required" placeholder="Enter a certificate expiration date..." onChange={handleAddFormChange} />
        </label>
        <label>
          Comments:
          <input type="text" name="Comments" required="required" placeholder="Enter Comments..." />
        </label>

        <button type="button" class="btn btn-success" type="submit">Add </button>
      
      
    </form>
  )
}


export default Addform