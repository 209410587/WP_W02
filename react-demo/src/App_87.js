import './App.css';
import Todo from './component/Todo';

function App_87() {
  return (
    <div>
      <h1>My Todos</h1>
      {/* <div className="card">
        <h2>Learn React</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div> */}
      <Todo text='Learn React'/>
      <Todo text='Learn PosgreSQL' />
      <Todo text='Learn NextJS' />
      {/* <div className="card">
        <h2>Learn PosgreSQL</h2>
        <div className="actions">
          <button className="btn">Delete</button>
        </div>
      </div> */}
    </div>
    
  );
}

export default App_87;
