// import logo from './logo.svg';
import './App.css';
import { Button } from './components/button/button';
import { ReactBenifits } from './components/reactbenifits/reactbenifits';
import { ReactLogo } from './components/reactlogo/reactlogo';

function App() {
  return (
    <div className="App">
     
    <ReactLogo/>
     <ReactBenifits/>
     <Button/>
    </div>
  );
}

export default App;
