
import React, { useState } from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const users = [
  { name: 'Karim', age: 33 }
]



function App(props) {

  const [usersList, setUsersList] = useState(users)

  const addUserHandler = (name, age) => {
    const newUser = {
      name: name,
      age: age
    }

    console.log(usersList)
    console.log(newUser)
    const newUserList = usersList.concat(newUser)
    console.log(newUserList)

    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: name, age: age }]
    })
  }

  return (
    <React.Fragment>
      les
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

    </React.Fragment>


  );
}

export default App;
