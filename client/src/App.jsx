import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Components/Homepage.jsx";
import MatchedRiders from "./Components/MatchedRiders.jsx";
import UserAccount from "./Components/UserAccount.jsx";

const App = () => {
  const [riderProfiles, setRiderProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/rider_in_react")
      .then((response) => response.json())
      .then((data) => setRiderProfiles(data));
  }, []);

  return (
    <>
      <div id={"App"}>
        <Homepage 
        riderProfiles={riderProfiles}
        />
        {/* <MatchedRiders />
        <UserAccount /> */}
      </div>
    </>
  );
};

export default App;
