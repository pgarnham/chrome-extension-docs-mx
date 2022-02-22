import BasicCard  from './components/basicCard'
import Container from '@mui/material/Container';
import './App.css';


function App() {
  return (
    <div className="App">
        <Container style={{ backgroundColor: '#ffffff'}}>
          <BasicCard></BasicCard> 
        </Container>
    </div>
  );
}

export default App;
