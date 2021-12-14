import React from "react";

export default function MemberForm (props) {
 
    const { values, update, submit  } = props


    const onChange = evt => {

        const name = evt.target.name;
        const { value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }


    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-groun inputs'>
                <label>
                    Memeber Name: <input 
                    name='memname'
                    type='text'
                    placeholder='Type your Name'
                    maxLength='30'
                    value={values.memname}
                    onChange={onChange}
    
                    />
                </label>
                <label>
                    Email: <input 
                    name='email'
                    type='email'
                    placeholder='email address'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Role
                    <select>
                        <option value=''>--Select a Role--</option>
                        <option value='FrontEnd'>--Select a Role--</option>
                        <option value='BackEnd'>--Select a Role--</option>
                        <option value='FullStack'>--Select a Role--</option>
                    </select>
                </label>
            </div>
        </form>

    )
    
}