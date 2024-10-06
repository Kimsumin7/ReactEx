import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'sumin';
  const list = ['우유', '딸기', '바나나', '요거트']
  return (
    <>
    <h1 className='orange'>{`Hello! ${name}`}</h1>
    <h2>{name}</h2>
    <ul>
      {
      list.map((item) => (<li>{item}</li>))
        }
    </ul>
    <img
    style={{width: '200px', height:'200px'}} 
    src='https://images.unsplash.com/photo-1720048171230-c60d162f93a0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='imgtest'/>
    </> 
  );
}

export default App;
