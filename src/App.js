
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header/Header';

function App() {
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
     </Router>
    </>
  );
}

export default App;
