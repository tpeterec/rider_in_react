import FindRiders from "./FindRiders.jsx";
import { useState } from "react";

const Homepage = (props) => {
  const [view, setView] = useState(0);
  return (
    <div id="homepage">
      <FindRiders riderProfiles={props.riderProfiles} view={view} />
      <button type="button" onClick={() => setView(view + 1)}>
        No
      </button>
      <button type="button" onClick={() => setView(view + 1)}>
        Yes
      </button>
    </div>
  );
};

export default Homepage;
