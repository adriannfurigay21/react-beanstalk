import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


/* Components */
import AppNavbar from './components/AppNavbar';
import ProductView from './components/ProductView';
import Cart from './components/Cart'

/* Pages */
import Home from './pages/Home';
import Products from './pages/Products';

import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';


import './App.css';
import { UserProvider } from './UserContext';
 

function App() {

  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

  const unsetUser = () => {
    localStorage.clear();

    setUser({
      id: null,
      isAdmin: null
    });
  };

  useEffect(() => {
    // console.log(user);

    fetch('https://murmuring-meadow-05679.herokuapp.com/api/users/details', {
      headers: {
        Authorization: `Bearer ${ localStorage.getItem('token') }`
      }
    })
    .then(res => res.json())
    .then(data => {

      // Set the user states values with the user details upon successful login.
      if (typeof data._id !== "undefined") {

        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        });

      // Else set the user states to the initial values
      } else {

        setUser({
          id: null,
          isAdmin: null
        });

      }

    })
  }, [])

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <AppNavbar />
       {/* <Container>*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Products} />
            <Route exact path="/product/:productId" component={ProductView} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/register" component={Register} /> 
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
      {/*  </Container>*/}
      </Router>
    </UserProvider>
  
  );
}


export default App;

//<Route exact path="/cart" component={CartView} />