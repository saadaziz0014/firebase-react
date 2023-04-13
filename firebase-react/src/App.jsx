import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://react-4fc2a-default-rtdb.firebaseio.com/data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      }
    );
    if (res) {
      alert("Sent");
    }
  };
  return (
    <React.Fragment>
      <form method="POST">
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <button onClick={sendData}>Submit</button>
      </form>
    </React.Fragment>
  );
};

export default App;
