import { 
  Header, 
  Hero, 
  About, 
  Activity, 
  Voice,
  JoinFlow,
  ApplicationLink,
  Contact, 
  Footer 
} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Activity />
      {/* <Voice /> メンバーが増えたら乗せていく予定*/}
      <JoinFlow />
      <ApplicationLink />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
