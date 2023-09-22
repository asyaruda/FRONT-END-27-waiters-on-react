import React from 'react';

export function EditForm({ onWaiterSubmit }) {
    const [firstName, setFirstName] = React.useState('')
    const onSubmit = (event) => {
      event.preventDefault()
  
      onWaiterSubmit({
        id: Date.now(), 
        firstName, 
        phone: true,
      });
  
      setFirstName(''); 
    };
  
    const onFirstNameChange = (event) => { 
      setFirstName(event.target.value); 
    };
  
    return (
      <form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label> 
        <input value={firstName} onChange={onFirstNameChange} type="text" id="firstName" /> 
  
        <button type="submit">Save</button>
      </form>
    );
  }





