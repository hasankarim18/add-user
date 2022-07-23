
import React from 'react';
import './App.css';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const users = []


function App() {
  return (
    <React.Fragment>
      les
      <AddUser />
      <UsersList users={users} />

    </React.Fragment>


  );
}

export default App;
