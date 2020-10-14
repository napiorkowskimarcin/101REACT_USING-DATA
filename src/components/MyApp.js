import React from 'react'
import Elements from './Elements'
import elementData from'./ElementData'




function MyApp(){
console.log(elementData)
    const elementComponent = elementData.map(element => <Elements key={element.id} 
        name={element.name} 
        height={element.height}
        favFood={element.favFood}
        telNo={element.telNo}
        />)
    return(
        <div>
{elementComponent}
        </div>
        )}

export default MyApp