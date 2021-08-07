import { FormEvent, useState } from "react";
import api from "../../services/api";

import './styles.scss';

export function HomeLogin() {
  const [username, setUsername] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <div className="title">
        <img src="images/Github.svg" alt="" />
        <span>GitHub Explorer</span>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Github username"
          required
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  );
}