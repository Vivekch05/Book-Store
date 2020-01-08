import React from 'react';

const Home = () =>{
    return(
        <div style={{margin:"10px"}}>
            <h1>Home</h1>
            <img src = {process.env.PUBLIC_URL + "/book3.jpg"}
            alt="Books"
            display="flex"
            flexWrap="wrap"
            width="100%"
            height="550px"
            />
        </div>
    )
}

export default Home;