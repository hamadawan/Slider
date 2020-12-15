import './App.css';
import { Button, Paper } from '@material-ui/core';
import Card from './components/Card';
import Slider from "react-slick";
import {useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const [data, setData] = useState([
    {id:1,title: "Bank Analysis",remarks: '' , editable:false, toggle: false},
    {id:2,title: "Bank credit analysis only",remarks: '' , editable:false, toggle: false},
    {id:3,title: "Detailed accounting",remarks: '' , editable:false, toggle: false},
    {id:4,title: "Enter your Question",remarks: '' , editable:true, toggle: false}        
  ])

  const deleteCard = (id) => {
    var myArray = data.filter(function( obj ) {
      return obj.id !== id;
    });
    setData(myArray);  
      
  } 

  const addCard = () => {
    
    setData([...data, {id: data.length+1, editable:true, title:'Enter your question'}]);
    
    alert("Card Added at end")
      
  } 

  const setTitle = (event,id) => {

      var myArray = data.filter(function( obj ) {
        if(obj.id == id && obj.editable)
        {
          obj.title= event.target.value
          return obj
        }
        else return obj
      });
      setData(myArray);  
  
  } 

  const setRemarks = (event,id) => {

    var myArray = data.filter(function( obj ) {
      if(obj.id == id )
      {
        obj.remarks= event.target.value
        return obj
      }
      else return obj
    });
    setData(myArray);  

  } 

  const toggle = (id) => {
    
    var myArray = data.filter(function( obj ) {
        if(obj.id == id)
          {
            obj.toggle = !obj.toggle
            return obj
          }
        else return obj
    });
    setData(myArray);  
  
  }

  const submit = () => {
    var myArray = data.filter(function( obj ) {
      if(obj.toggle)
        return obj
    });
    console.log(myArray)  
  }

  const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: data.length == 3 ? 3 : 4,
      slidesToScroll: 1,
    };

  return (
    // <Card />
    <Paper style={{margin:'20px auto',padding:'10px', height:'550px', width:'1200px'}}>
      <div style={{display:'flex', flexDirection:'row',margin:'20px auton', justifyContent:'space-between'}}> 
        <h4>Detailed Analysis</h4>
        <Button variant="outlined" color="primary" onClick={addCard} style={{height:'50px',marginRight:'50px',fontWeight:'bold', width:'100px'}}>ADD</Button>
      </div>
      <Slider {...settings}>
            { data.map((d)=>{return <Card data={d} setRemarks={setRemarks} setTitle={setTitle} toggle={toggle} deleteCard={deleteCard}  />}) }
      </Slider>                                                                                                                                                                                                                                                                                                                                                                                                                   
      <div style={{display:'flex', flexDirection:'row',margin:'20px'}}> 
        <Button variant='contained' color="primary" style={{height:'50px',marginRight:'20px',fontWeight:'bold', width:'100px'}}>Cancel</Button>
        <Button variant='contained' color="primary" onClick={submit} style={{height:'50px',fontWeight:'bold', width:'100px'}}>Submit</Button>
      </div>
    </Paper> 
  );
}

export default App;
