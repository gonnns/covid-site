import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './layout/Content';
import Header from './layout/Header';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
