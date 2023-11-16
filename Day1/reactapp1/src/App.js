import logo from './logo.svg';
import './App.css';
import Helloworld from './components/Helloworld';
import Greetings from './components/Greetings';

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Helloworld/>
      <Greetings/>
    </div>
  );
}

export default App;
