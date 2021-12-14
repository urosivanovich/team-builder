import React, { useState } from 'react';
import './App.css';
import Member from './Member'
import MemberForm from './MemberForm'

const initialFormValues = {
  memname: '',
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
    memname: formValues.username.trim(),
    email: formValues.email.trim(),
    role: formValues.role,
  }

if(!newMember.memname || !newMember.email || !newMember.role){
  setError('All fields are required')
}else{
  setMembers([newMember, ...members]);
  setFormValues(initialFormValues);
  setError('')
}

}

  return (

    <div className="App">
      <h1>Members</h1>

      <MemberForm  
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
        members.map(member => {
          return( <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}


