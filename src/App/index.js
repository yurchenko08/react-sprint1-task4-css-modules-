import logo from '../logo.svg';
import './App.css';
import Button from '../Button';
import Input from '../Input';

function App() {
  return (
    <div className="App">     
      <img src={logo} className="App-logo" alt="logo" />         
        <Input  />
        <Button />
    </div>
  );
}

export default App;
