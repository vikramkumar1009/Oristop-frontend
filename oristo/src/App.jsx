import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Tasks from './pages/Tasks';

// ✅ Check if user is logged in (simple token presence check)
const isAuthenticated = () => !!localStorage.getItem('token');

// ✅ Protected route component
const PrivateRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

// ✅ Redirect if already logged in
const PublicRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/tasks" /> : element;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Public routes (redirect if logged in) */}
        <Route path="/signup" element={<PublicRoute element={<Signup />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />

        {/* Protected route */}
        <Route path="/tasks" element={<PrivateRoute element={<Tasks />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
