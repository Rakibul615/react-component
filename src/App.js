import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friendList=['abdul','rahim','mohammad','noor','islam','rahman']
const products=[
  {pname:'photoshop',pprice:'$69.5'},
  {pname:'Illustrator',pprice:'$45.5'},
  {pname:'PDF Reader',pprice:'$10.5'}

]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            friendList.map(friend=><li>{friend}</li>)
          
          }
           {
            products.map(product=><li>{product.pname}</li>)
          }
        </ul>
        {
          products.map(product=><Product product={product}></Product>)

        }
        
      

        <Person id="19103094" name="Rakibul Hasan" job="student"></Person>
        <Person id="19103057" name="Azim Ahmed" job="student"></Person>
        <Person id="19103050" name="Mukit Hasan" job="student"></Person>
        <Person id="19103045" name="Sourav Hasan" job="student"></Person>
        <h1>I have started javascript libraries that is React</h1>
      </header>
    </div>
  );
}
function Counter(){
 const [count, setCount]= useState(0);
 function handlerIncrease(){
   const newCount=count+1;
   setCount(newCount);

 }
 function handlerDecrease(){
      if(count>0){
        const newCount=count-1;
        setCount(newCount);
      }

}
  return(
    <div>
      <h1>count:{count} </h1>
      <button onMouseMove={handlerIncrease}>Increase</button>
      <button onClick={handlerDecrease}>Decrease</button>

    </div>
  )
}
function Person(props){
  const personStyle={
    border:"2px solid brown", 
    width:"500px", 
    fontSize: "12px",
    margin:"7px",
    background:"orange ",
    color:"white"
  }
  return <div style={personStyle} >
         
            <h1>ID: {props.id}</h1>
           <h1>Name: {props.name}</h1>
           <h1>Profession: {props.job}</h1>
         </div>
}
function Product(props){
  
  const productStyle={
    border:"2px solid brown", 
    width:"300px",
    height:"300px", 
    fontSize: "12px",
    margin:"7px",
    background:"brown ",
    color:"white",
  
  }
  return (<div style={productStyle} >
         
  
 <h1>Name: {props.product.pname}</h1>
 <h1>Price: {props.product.pprice}</h1>
 <button>Buy Now</button>
 
</div>
  )
}


export default App;

