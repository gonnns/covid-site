import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Main />
    </Router>
  );
}

export default App;
