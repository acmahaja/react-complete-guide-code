import styles from "./AddUser.module.css";
import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(username.trim().length);
    console.log(age.trim().length);

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(username, age);

    setAge("");
    setUsername("");
    setError("");
  };

  const usernameChangeHander = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHander = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = ()=>{
    setError(null)
  }

  return (
    <div>
      {error && <ErrorModal errorMessage={error} onConfirm={errorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            onChange={usernameChangeHander}
            type="text"
            name="username"
            id="username"
            value={username}
          />
          <label htmlFor="age">Age</label>
          <input
            onChange={ageChangeHander}
            type="number"
            name="age"
            id="age"
            value={age}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
