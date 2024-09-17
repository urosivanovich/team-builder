import React from "react";

export default function MemberForm (props) {
 
    const { values, update, submit  } = props


    const handleChange = evt => {

        const { name, value } = evt.target;
        update(name, value);
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form className='form container' onSubmit={handleSubmit}>
            <div className='form-groun inputs'>
                <label> Member Name: 
                    <input 
                    name='membername'
                    type='text'
                    placeholder='Type your Name'
                    maxLength='30'
                    value={values.membername}
                    onChange={handleChange}
    
                    />
                </label>
                <label>Email: 
                    <input 
                    name='email'
                    type='email'
                    placeholder='email address'
                    value={values.email}
                    onChange={handleChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={handleChange}> 
                        <option value=''>--Select a Role--</option>
                        <option value='FrontEnd'>Front End Engineer</option>
                        <option value='BackEnd'>Back End Engineer</option>
                        <option value='FullStack'>Full Stack Engineer</option>
                    </select>
                </label>
                <div className="submit">
                    <button>Submit</button>
                </div>
            </div>
        </form>

    )
    
}