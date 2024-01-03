import React from 'react';
import './App.css';
import {StyledLink} from 'baseui/link';
import { LightTheme, DarkTheme, BaseProvider } from "baseui";
import Divider from './Divider'; 
import AdjustableParameters from './AdjustableParameters';
import { Button } from "baseui/button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import logo from './logo.svg';  // Assuming logo.svg is in the same directory

const THEME = {
  light: "light",
  dark: "dark",
};

function Home() {
  const [theme, setTheme] = React.useState(THEME.light);
  return (
    <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
      {/* <Button
        onClick={() =>
          setTheme(theme === THEME.light ? THEME.dark : THEME.light)
        }
      >
        Toggle light/dark theme!
      </Button> */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Usable ML app!</h2>
        <Link to="/quick-start">Quick Start</Link>
        <StyledLink href="https://baseweb.design">
          Link to Base Web
        </StyledLink>
      </header>
    </div>
    </BaseProvider>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page content.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

function QuickStart() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '50px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="column" style={{ flex: '1', padding: '10px', border: '1px solid black' }}>
          {/* Content for the first column */}
          <Divider />
        </div>
        <div className="column" style={{ flex: '1', padding: '10px', border: '1px solid black' }}>
          {/* Content for the second column */}
          <AdjustableParameters />
        </div>
        <div className="column" style={{ flex: '1', padding: '10px', border: '1px solid black' }}>
          {/* Content for the third column */}
          <h2>Column 3</h2>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/quick-start" element={<QuickStart />} />
        </Routes>
      </Router>
  );
}

export default App;

