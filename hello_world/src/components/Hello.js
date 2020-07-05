import React from 'react';


const Hello = () => {
    // return (
    //     <div className="cls">
    //         <h1>Hello Anujna</h1>
    //     </div>
    // )

    // Without JSX
    return React.createElement('div', 
    {id: 'clsid', className: 'cls'}, React.createElement('h1', null, 'Welcome to the Page'));
}

export default Hello;