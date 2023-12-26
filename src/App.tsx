import mario from './assets/mario.png';
import bgMario from './assets/bg-mario.png';
import yoshi from './assets/yoshi.png';
import bgYoshi from './assets/bg-yoshi.png';
import Card from './components/Card';

import './App.css';

function App() {
  return (
    <div className="container">
      <Card bg={mario} bgHover={bgMario} title="Mario" color='#BF2935' />
      <Card bg={yoshi} bgHover={bgYoshi} title="Yoshi" color="#405E46" />
      <Card bg={yoshi} bgHover={bgYoshi} title="Yoshi" color="#405E46" />
    </div>
  )
}

export default App
