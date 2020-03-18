import React from 'react';
import ReactDOM from 'react-dom';

function Navbar()
{
    return(
             <> <div class="togglearea">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Premium</a></li>
                        <li><a href="#">Register</a></li>
                    </ul>
                 
                    <label for="toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </nav>
                </div>
                <input id="toggle" type="checkbox"/>
                <div class="navbar">
                    <a href="#">All lists</a>
                    <a href="#">Personal</a>
                    <a href="#">Work</a>
                    <a href="#">Grocery list</a>
                    <a href="#">New list</a>
                </div>
                
            </>
    );
    
}
export default Navbar;
