import { Route, Switch } from 'react-router-dom';
import Days from '../pages/days/Days';
import Today from '../pages/today/Today';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Today} />
      <Route path="/days" component={Days} />
    </Switch>
  );
}

export default Content;
