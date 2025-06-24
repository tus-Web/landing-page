import { 
  Header, 
  Hero, 
  About, 
  Activity, 
  // Voice,
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
      {/* <Voice /> 今後追加予定*/}
      <JoinFlow />
      <ApplicationLink />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
