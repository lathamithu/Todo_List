import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './components/navbar';
import Back from './components/back';

 function App () {
    return (
        <>
            <Navbar/>
                <div id="sec"> 
                    <div id="sec2">
                        <div id="sec3">
                        <Back/>
                            <div id="sec4">
                            <ul id="lst">
                            </ul>
                            </div>
                         </div>
                    </div>
                 </div>
        </>
    );
}

export default App;
