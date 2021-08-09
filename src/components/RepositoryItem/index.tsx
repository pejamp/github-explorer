import './styles.scss';

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
}