import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // fetch("https://api.github.com/users/simonsbs")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUser(data);
    //   })
    //   .catch((error) => console.error("api error", error));

    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setUser(data);
      })
      .catch((error) => console.error("api error", error));
  }, []);

  return (
    <>
      <h1>My API Demo</h1>
      {user ? (
        // <ul>
        //   <li>login: {user.login}</li>
        //   <li>id: {user.id}</li>
        // </ul>
        <ul>
          {user.map((u) => (
            <li key={u.id}>
              {u.firstName} {u.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <>No data</>
      )}
    </>
  );
}

export default App;
