import React from 'react'

export default function Form(props) {
    const { values, input, submit, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const changeHandler = event => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value
        // let valueToUse
        // if (type === 'checkbox') {
        //   valueToUse2 = checked
        // } else {
        //   valueToUse2 = value
        // }
        input(name, valueToUse);
        }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>

            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
            </div>

        <label>Name&nbsp;
          <input
            value={values.username}
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
            name='checked'
            onChange={changeHandler}
            checked={values.checked}
          />
        </label>

        </form>
    );
}