import React from 'react'


function Elements(props){
    return(
        <div>
            <h3>Hey! Some interesting facts about {props.name}:</h3>
    <p>Do you know that? {props.name}, has a {props.height}cm height. </p>
    <p>and {props.name}`s favorite meal is: ...{props.favFood} !</p>
    <p>Want to know something more? Call {props.name} on: {props.telNo}</p>
        </div>
    )
}

export default Elements