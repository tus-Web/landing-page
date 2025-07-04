import { 
  Header, 
  Hero, 
  About, 
  Activity, 
  // Voice,
  JoinFlow,
  ApplicationLink,
  // Contact, 
  Footer 
} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Activity />
        {/* <Voice /> 今後追加予定です */}
        <JoinFlow />
        <ApplicationLink />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App
