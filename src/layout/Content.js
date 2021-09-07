import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Days from '../components/Days';
import Today from '../components/Today';

function Content() {
  return (
    <Switch>
      <Route exact path="/">
        <Today />
      </Route>
      <Route path="/day">
        <Days />
      </Route>
    </Switch>
  );
}

export default Content;
