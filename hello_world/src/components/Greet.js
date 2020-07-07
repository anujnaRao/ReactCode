import React from 'react';

// function Greet(){
//     return <h1>Hello Everyone</h1>
// }

const Greet = props => {

    const {name, age} = props
    // console.log(props)
    return (
        <div>
         <h1>Hello {name} and {age}</h1>
         {/* {props.children} */}
        </div>
    )
}

export default Greet;