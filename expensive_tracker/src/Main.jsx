import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
//import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-7kdlbc186o26g0ph.us.auth0.com"
    clientId="05jqsCArcScLFVav62BjuDM3n4DUMuRw"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  
  </Auth0Provider>,
);