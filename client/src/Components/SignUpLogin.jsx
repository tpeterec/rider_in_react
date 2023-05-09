import React, { useState, useEffect } from "react";
import "/src/Components/homepage.css";
import Homepage from "./Homepage";
const SignUpLogin = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [brand, setBrand] = useState("");
  const [ridestyle, setRidestyle] = useState("");
  const [biography, setBiography] = useState("");
  const [profilephotos, setProfilePhotos] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Perform your fetch request here using the form data
    const formData = {
      name,
      age,
      brand,
      ridestyle,
      biography,
      profilephotos,
    };
    fetch("http://localhost:3000/api/rider_in_react", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API if needed
        console.log(data);
        props.setHomepageView(false);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }

  return (
    <form className="signUpForm" method="post" onSubmit={handleSubmit}>
      Account Sign Up
      <label>
        Name:{" "}
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Age:{" "}
        <input
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Motorcycle:{" "}
        <input
          name="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </label>
      <label>
        Riding Style:{" "}
        <input
          name="ridestyle"
          value={ridestyle}
          onChange={(e) => setRidestyle(e.target.value)}
        />
      </label>
      <label>
        Biography:{" "}
        <input
          name="biography"
          value={biography}
          onChange={(e) => setBiography(e.target.value)}
        />
      </label>
      <label>
        Profile Photos:{" "}
        <input
          name="profilephotos"
          value={profilephotos}
          onChange={(e) => setProfilePhotos(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpLogin;
