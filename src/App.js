const Test = (props) =>{
  return(
    <>
    <h3>Age: {props.age}</h3>
    <h3>Occupation: {props.occupation}</h3>
    </>
  )
}
function App() {
  return (
    <>
    <h1>Monis</h1>
    <Test age={25} occupation = "Junior Dev" />
    <Test age={27} occupation = "Dev" />
    <Test age={30} occupation = "Senior Dev" />
    </>
  );
}

export default App;
