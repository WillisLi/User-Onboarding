import React from 'react'

export default function Form(props) {
    const { values, input, submit, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const changeHandler = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        
        input(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>

            <button id = "submit" disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            </div>

        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={changeHandler}
            name='name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={changeHandler}
            name='email'
            type='text'
          />
        </label>

        <label>Password
        <input
            value={values.password}
            onChange={changeHandler}
            name='password'
            type='text'
          />
        </label>

        <label>Terms of Service
          <input
            type='checkbox'
            name='tos'
            onChange={changeHandler}
            checked={values.tos}
          />
        </label>

        </form>
    );
}