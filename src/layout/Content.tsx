import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Days from '../components/Days';
import Today from '../components/Today';

function Content() {
  return (
    <Switch>
      <Route exact path="/" component={Today} />
      <Route path="/day" component={Days} />
    </Switch>
  );
}

export default Content;
