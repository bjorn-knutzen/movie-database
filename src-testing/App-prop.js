import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person 
        name='Bolle'
        lastName='Plesse'
        age='5'
      />
      <Person name='Jessie' lastName='Plesse' age='4' />
      <Person />
    </div>
  );
}

export default App;
