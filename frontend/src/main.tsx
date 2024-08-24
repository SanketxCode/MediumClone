import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId="1069026061982-ahbpckkqdr4r7udtqnmci1680h3adrcb.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
)
