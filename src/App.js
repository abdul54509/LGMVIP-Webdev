import React from "react";
import {useState} from "react";
import Cards from "./user";
import "./App.css";

function App()
{
  const [isDateLoaded,setIsDateloaded] = React.useState(false);
 const [userData , setUserData] =React.useState([]);
 const [isButtonClick,setisButtonClick] = React.useState(false);
 const handleClick = () => {
    setisButtonClick(true);
    fetch("https://reqres.in/api/users?page=1")
    .then((response) => response.json())
    .then((res) => {
      setUserData(res.data);
      setInterval(() => {
          setIsDateloaded(true);
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
    });

 };
 return (

 
   <>  <div class="swiper-container">
   <div class="bg"></div>
   <div class="bg bg2"></div>
   <div class="bg bg3"></div>
    

   
  
   <section className ="wholecontainer">
     
       <div class="nav" id="mynav">
<h1> TECHY EFFORTS </h1>
         <a href="#getusers" class="btn" onClick={handleClick}>Get Users</a>
         
         </div>
         
         <div className="container">
         <img src ="https://letsgrowmore.in/wp-content/uploads/2021/05/cropped-growmore-removebg-preview.png" width="600" height="200"/>
           <div className="row justify-content-center">
           {
            isButtonClick ? (
              isDateLoaded ? (  
                <Cards userData={userData}/>
              ) : (
                <div class="loader"></div>
              )
            ) :( 
              <div className="instruction">
                <h1> "Please Click Get Users button to view the details of the Users!!"</h1>
                
                </div>
          
            )}  
            </div>
            <div class="bottom" id="mybottom">
             <a href="#getusers" class="btn" onClick={handleClick}><b> Get Users</b></a>
             </div> 
             </div>
            </section>
            </div>
            </>
           
 );
     }export default App;




