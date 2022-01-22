
import ReactDOM from 'react-dom';

import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import { BudgetsProvider } from "./contexts/BudgetsContext"
//import { Form } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <BudgetsProvider>
    <App />
    </BudgetsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
//import { Form } from 'react-bootstrap';


