import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Router>
        <Sidebar />
        <Content />
      </Router>
    </div>
  );
}

export default App;
