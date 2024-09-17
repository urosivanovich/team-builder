import React, { useState } from 'react';
import './App.css';
import Member from './Member'
import MemberForm from './MemberForm'

const initialFormValues = {
  membername: '',
  email: '',
  role: '',
}


export default function App() {

const [members, setMembers] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [error, setError] = useState('')

const updateForm  = (inputName, inputValue) => {
  setFormValues({...formValues, [inputName]: inputValue});
}

const submitForm =  () => {
  
  const newMember = {
    membername: formValues.membername.trim(),
    email: formValues.email.trim(),
    role: formValues.role
  }
 
  

if(!newMember.membername || !newMember.email || !newMember.role){
  setError('All fields are required')
}else{
  setMembers(members.concat(newMember));
  setFormValues(initialFormValues);
  setError('')
}

}

  return (

    <div className="App">
      <h1>Members</h1>
      <h2>{error}</h2>

      <MemberForm  
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        members.map((member, idx) => {
          return( <Member key={idx} details={member} />
          )
        })
      }
    </div>
  );
}


