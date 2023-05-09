import FindRiders from "./FindRiders.jsx";
import SignUpLogin from "./SignUpLogin.jsx";
import { useState } from "react";

const Homepage = (props) => {
  const [view, setView] = useState(0);
  const [signUpForm, setSignUpForm] = useState(false);
  const [homepageView, setHomepageView] = useState(true);

  function defaultView() {
    setView(view);
    setHomepageView(homepageView);
  }

  return (
    <div id="homepage">
      {homepageView && !signUpForm && (
        <>
          <button onClick={() => setSignUpForm(!signUpForm)}>Sign Up</button>
          <button
            type="button"
            onClick={() => {
              setHomepageView(!homepageView);
            }}
          >
            Login
          </button>
        </>
      )}
      {!homepageView && (
        <FindRiders
          riderProfiles={props.riderProfiles}
          view={view}
          setView={setView}
        />
      )}
      {signUpForm && homepageView && (
        <SignUpLogin
          homepageView={homepageView}
          setHomepageView={setHomepageView}
        />
      )}
    </div>
  );
};

export default Homepage;
