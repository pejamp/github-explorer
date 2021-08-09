import { RepositoryItem } from "../RepositoryItem";
import { useEffect, useState } from "react";

import './styles.scss';
import api from "../../services/api";
import { RouteComponentProps } from "react-router-dom";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

interface UserProps {
  avatar_url: string;
  login: string;
  name: string;
}

interface ParamsProps {
  username: string;
}

interface Props extends RouteComponentProps<ParamsProps> {
}

export function RepositoryList(props: Props) {
  const username = props.match.params.username;
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const avatarImg = user.avatar_url;
  const userName = user.name;
  const userLogin = user.login;

  console.log(user);

  useEffect(() => {
    api.get(`users/${username}/repos`)
      .then(response => { setRepositories(response.data); });

    api.get(`users/${username}`)
      .then(response => setUser(response.data));
  }, []);

  console.log(repositories)

  return (
    <section className="repository-list">

      <div className="profile">
        <img src={avatarImg} alt="user photo" />
        <div className="name-login">
          <h2>{userName}</h2>
          <span>{userLogin}</span>
        </div>
      </div>

      <h1>Repositories</h1>

      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
      </ul>
    </section>
  );
}