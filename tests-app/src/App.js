import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

import { Navbar } from './components/Navbar/Navbar';

function App() {
  const mensaje = "basado en tu última compra"
  return (
    <div>
      <Navbar />
      <ItemListContainer mensaje={mensaje} />
      <h1>App JS</h1>
    </div>
  );
}

export default App;
