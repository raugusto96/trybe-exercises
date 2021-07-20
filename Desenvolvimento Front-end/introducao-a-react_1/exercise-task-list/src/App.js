import './App.css';

const task = (value) => ( <li>{value}</li> );

const tasksList = ['Acordar', 'Escovar os dentes', 'Tomar café', 'Ligar o pc', 'Estudar'];

const App = () => ( <ul> { tasksList.map((taskItem) => task(taskItem)) } </ul> );

export default App;
