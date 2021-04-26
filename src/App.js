import './App.css';
import LoginCreateForm from './containers/LoginCreateForm';
import NavBar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <NavBar/>
      <LoginCreateForm/>
    </div>
  );
}

export default App;
