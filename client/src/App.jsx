
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/HistoryList';
import Summary from './components/Summary';

import { GlobalProvider } from './context/globalState';


function App() {
  console.log('App rendered');
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>

        <Summary/>

        <History/>

        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
