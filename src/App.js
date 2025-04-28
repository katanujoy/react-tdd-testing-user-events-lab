import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Joy Katanu Kyalo");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    music: false,
    sports: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setInterests({
      ...interests,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm {name}</h1>
      <img
        alt="My profile pic"
        src="https://via.placeholder.com/350"
      />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <fieldset>
          <legend>Select your interests:</legend>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="music"
              checked={interests.music}
              onChange={handleCheckboxChange}
            />
            Music
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={interests.sports}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>

      {formSubmitted && (
        <p>
          Thank you for signing up, {name}! We will send updates to {email}.
          Your selected interests are:
          {Object.keys(interests)
            .filter((interest) => interests[interest])
            .join(", ")}
          .
        </p>
      )}
    </main>
  );
}

export default App;