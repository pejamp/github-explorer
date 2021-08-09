import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import './styles.scss';

export function HomeLogin() {
  const history = useHistory();
  const [username, setUsername] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const pathUser = `/repositories/${username}`;

    history.push(pathUser);
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