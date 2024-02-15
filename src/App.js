import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css';
import Login from './pages/login';
import Sidebar from './components/sidebar';
import Layout from './pages/dashboard';
import Complaint from './pages/complaint';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={<>
              <Sidebar />
              <Layout />
            </>}
          />
          <Route
            path="/complaint/:id"
            element={<>
              <Sidebar />
              <Complaint />
            </>}
          />
              </Routes>
      </Router>
  );
}

export default App;
