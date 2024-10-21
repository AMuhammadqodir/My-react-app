import React from "react"
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import MyComponent from "./components/MyComponent";
// import logo from './logo.svg';
import './App.css';
// import MyComponent from './components/MyComponent';
// import Header from './components/header';
import Button from './components/button';
import Content from './components/content';
import Footer from './components/footer';
import UserCard from './components/UserCard';
import Reg from "./components/reg";
import Anims from "./components/Anims.js";

function Home() {
  return <h2>Home page</h2>
}
function Contact() {
  return <h2>Contact page</h2>
}

function Header() {
  return (
      <header className="header-app">
          <h1>Shapka sayta</h1>
          <Link to='/' className="Link">Home</Link>
          <Link to='/contact' className="Link">Contact</Link>
        </header>
  );
}

function App() {
  return (
    

    <div className="App">
    {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Welcome to My React App</h1>
        <MyComponent someProp="Hello, prop!" />      
      </header> */}

      

      
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
      <Content />
      <Button />
      <UserCard name="Vali" age={25} profession="Barnomasoz" />
      <UserCard name="Ali" age={25} profession="Dizayner" /> 
      <Reg />

      <Router>
        <Routes>
          <Route path="/mycom" element={<MyComponent/>} />
        </Routes>
      </Router>  
      
      
      <Anims />
      <Footer />

    </div>
  );
}

export default App;
