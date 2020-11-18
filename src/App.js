import './App.css';
import Questionnaire from './components/Questionnaire'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
      <div className="questionnaire">
        <Questionnaire />
      </div>
      </div>
      

    </div>
  );
}

export default App;
