// import logo from './logo.svg';
import './App.css';
import { HelloWorld, ByeWorld } from './components/helloWorld';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Contact from './components/Contact';

function App() {

  // var counter = 0
  const [counter, setCounter] = useState(0);

  const increment = () => {
    // counter = counter + 1
    setCounter(counter + 1)
    // console.log(counter);
  }
  console.log(counter);

  useEffect(() => {
    document.title = `clicked ${counter} times`
  }, [counter])

  return (
    <div className="App">
      <Router>
        <nav >
          <Link to='/' className='text'>Home</Link>
          <Link to='/contact' className='text'>Contact</Link>
          <Link to='/about' className='text'>About</Link>


          {/* <a href={Contact} className='text'>Home</a>
          <a className='text'>Contact</a>
          <a className='text'>About</a> */}
        </nav>


        <buttton onClick={increment}>Click me!</buttton>
        <h1>{counter}</h1>


        {/* <h1>Hello World</h1>
          <p>Aditya Kumar is learing</p>
          <HelloWorld text="Hello the new real world" />
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          <HelloWorld />
          <ByeWorld /> */}
          <Route Component={Contact}/>
      </Router>
    </div>
  );
}

export default App;
