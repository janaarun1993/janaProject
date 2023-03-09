import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';
import Signup from './Signup';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
