import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './layout/Content';
import Header from './layout/Header';

function App() {
  return (
    <Router>
      <Header />
      <Content />
    </Router>
  );
}

export default App;
