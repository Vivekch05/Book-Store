import React from 'react';
import Books from '../images/book1.jpg'
const Home = () =>{
    return(
        <div style={{margin:"10px"}}>
            <h1>Home</h1>
            <img src = {Books}
            alt="Books"
            display="flex"
            flexWrap="wrap"
            width="100%"
            height="600px" 
            />
        </div>
    )
}
export default Home;