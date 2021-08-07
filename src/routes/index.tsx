import { Route, Switch } from "react-router-dom";
import { HomeLogin } from "../components/HomeLogin/Index";
import { RepositoryList } from "../components/RepositoryList";


export function Routes() {

  return (
    <Switch>
      <Route exact path="/" component={HomeLogin} />
      <Route path="/repositories" component={RepositoryList} />
    </Switch>
  );
}