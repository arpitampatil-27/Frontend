import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      <h1>MERN Auth Demo</h1>

      {isLoggedIn ? (
        <p>You are logged in ✅</p>
      ) : (
        <button onClick={() => {
          localStorage.setItem("token", "dummy");
          setIsLoggedIn(true);
        }}>
          Login
        </button>
      )}
    </div>
  );
}

export default App;