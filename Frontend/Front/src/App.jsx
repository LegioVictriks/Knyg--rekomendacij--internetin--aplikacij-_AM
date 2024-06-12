import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './obj/Login';
import Register from './obj/Register';
import AdminDashboard from './obj/AdminDashboard';
import UserDashboard from './obj/UserDashboard';
import BookDetail from './obj/BookDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/user" component={UserDashboard} />
        <Route path="/book/:id" component={BookDetail} />
      </Routes>
    </Router>
  );
}

export default App;
