import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FAQ from './components/FAQ';
import Shop from './components/shop/shop';


function App() {
  return (
    <div className="container">
      <h1 className="text-center">Computer Mart</h1>
      
      <Shop></Shop>
      <FAQ></FAQ>
    </div>
    

 
  );
}

export default App;
