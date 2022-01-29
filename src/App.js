import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="App">
      <ToDo/>
      <TaskList/>
    </div>
  );
}

export default App;
