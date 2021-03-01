import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import CardList from './Components/CardList/CardList'
import FAB from './Components/FAB/FAB'

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />
      <FAB />
      
    </div>
  );
}

export default App;
