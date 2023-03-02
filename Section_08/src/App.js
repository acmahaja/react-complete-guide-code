import React from "react";
import { useState } from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (newUserName, newUserAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: newUserName, age: newUserAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
