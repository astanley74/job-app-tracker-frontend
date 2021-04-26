import './App.css';
import LoginModal from './containers/LoginModal'
import User from './components/User'
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <NavBar/>
      <LoginModal/>
      <User/>
    </div>
  );
}

export default App;
