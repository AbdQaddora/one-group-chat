import './App.css';
import AuthContextProvider from './Context/AuthContext';
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './Pages/Login';
import SignUp from './Pages/SignUp';
import PrivateRoute from './Common/PrivateRoute';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route  path='/' element={<PrivateRoute />}>
              <Route path='/' element={<Home />} />
            </Route>
            {/* <Route path='/' element={<Home />} /> */}
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
