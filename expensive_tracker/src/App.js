// App.js
import './App.css';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import NavBar from './tracker/Nav';
import Add from './tracker/table/Add';

function App() {
  return (
    <Auth0Provider
      domain="dev-7kdlbc186o26g0ph.us.auth0.com"
      clientId="05jqsCArcScLFVav62BjuDM3n4DUMuRw"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <MainApp />
    </Auth0Provider>
  );
}

const MainApp = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <NavBar />
      {isAuthenticated ? <Add /> : <h1 class="text-4xl font-bold text-center text-blue-600 mt-10">
  Please log in to add expenses.
</h1>
}
    </>
  );
};

export default App;
