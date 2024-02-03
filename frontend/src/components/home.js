import React from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true

function Home(){
    function send()
    {
       /* const name=document.getElementsByClassName('name')[0].value
        const age=document.getElementsByClassName('age')[0].value
            axios.post('http://localhost:8000/save',
            {
                user: name,
                pass: age
            }
            ).then(function(response){
                console.log(response)
            })*/
            axios.get('http://localhost:8000/home', {
                withCredentials: true
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.error(error);
            });
    }

    return (
        <div>
            <h1>hey there!</h1>
            <input type="text" className="name" placeholder="Name"></input>
            <input type="number" className="age" placeholder="age"></input>
            <button type="submit" onClick={send}></button>
        </div>
    )
}
export default Home;