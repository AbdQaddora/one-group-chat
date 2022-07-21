import './App.css';
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './Common/PrivateRoute';
// pages
import LogIn from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import GeneralChatRoom from './Pages/GeneralChatRoom';
import NewRoom from './Pages/NewRoom';
import RoomByID from './Common/RoomByID';

// context
import FireStoreContextProvider from './Context/FireStoreContext';
import AuthContextProvider from './Context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <FireStoreContextProvider>
          <Router>
            <Routes>
              <Route path='/login' element={<LogIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/' element={<PrivateRoute />}>
                <Route path='/' element={<Home />} />
              </Route>
              <Route path='/general' element={<PrivateRoute />}>
                <Route path='/general' element={<GeneralChatRoom />} />
              </Route>
              <Route path='/room/:roomId' element={<PrivateRoute />}>
                <Route path='/room/:roomId' element={<RoomByID />} />
              </Route>
              <Route path='/new-room' element={<PrivateRoute />}>
                <Route path='/new-room' element={<NewRoom />} />
              </Route>
            </Routes>
          </Router>
        </FireStoreContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
