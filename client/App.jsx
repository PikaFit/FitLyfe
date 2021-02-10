import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ClientInfo from './components/ClientInfo';
import ClientCard from './components/ClientCard';
import ClientForm from './components/ClientForm';
import { Button } from '@chakra-ui/react';
import axios from 'axios';

function App() {
  // const [cards, setCards] = useState([]);

  // Need a function to fetch data
  // const fetchData = async () => {
  //   const { data } = await axios.get('/endpoint');
  //   setCards(data);
  // };

  // useEffect so that the app runs fetchData when screen loads.
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // for (let i = 0; i < 3; i++) {
  //   cards.push(
  //     <div key={`card_${i}`}>
  //       <ClientCard />
  //     </div>
  //   );
  // }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/clientForm">
                <Button>Add New Client</Button>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/clientForm">
            <ClientInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
