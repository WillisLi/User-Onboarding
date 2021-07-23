import './App.css';
import Form from './Form.js';
import React, { useState, useEffect } from 'react';
import { reach } from 'yup';
import formSchema from './formSchema.js'
import User from './User.js';
import axios from 'axios';

const initialFormValues = {
    name: "",
    email: "",
    password: "",
    tos: false,
}

const errorMessages = {
    name: "",
    email: "",
    password: "",
}

const initialFriends = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(errorMessages);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
      axios.get("https://reqres.in/api/users")
        .then(response => {
            setUsers(response.data.data);
        })
        .catch(error => {
            console.log(error)
        })
  }

  const postUser = newUser => {
      axios.post("https://reqres.in/api/users", newUser)
        .then(response => {
            setUsers([response.data.data, ...users]);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setFormValues(initialFormValues);
        })
  }

  const validate = (name, value) => {
    reach(formSchema, name)
      .validate(value)
      .then(() => 
        setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => 
        setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        tos: formValues.tos,
      }

      postUser(newUser);
  }

  useEffect(() => {
      getUsers();
  }, [])

  useEffect(() => {
      formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header><h1>Users List</h1></header>
      
      <Form
          values = {formValues}
          input = {inputChange}
          submit = {submitForm}
          disabled = {disabled}
          errors = {formErrors}
      />
      {
        users.map(user => {
          return (
              <User info = {user}/>
          )
        })
      }
    </div>
  );
}

export default App;
