import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import { useState } from 'react';

function App() {
    const [open, setopen] = useState(false);
    const [number, setnumber] = useState("");
    const handleChange = (e) => {
        // if(number.length<10){
        setnumber(e.target.value);
        // }
    };

    const arr = [1, 2, 3, 4, 5];
    return ( <
            div className = "App" >
            <
            div className = 'container' >
            <
            div className = "selector" >
            <
            div className = 'text' >
            Phone Number <
            /div> <
            div className = 'flex' >
            <
            div >
            <
            button onClick = {
                () => setopen(!open) }
            className = 'flex pointer' >
            <
            Dropdown / > { open ? '▲' : '▼' } <
            /button> {
                open &&
                    <
                    div className = 'drop' > {
                        arr.map(e => < Dropdown setopen = { setopen }
                            open = { open }
                            />)} <
                            /div>
                        } <
                        /div> <
                        span className = 'gray' > | < /span> <
                        div >
                        <
                        input value = { number }
                        onChange = { handleChange }
                        type = "text"
                        maxLength = { 10 }
                        pattern = "[0-9]+" / >
                        <
                        /div> <
                        /div> <
                        /div> <
                        /div> <
                        /div>
                    );
            }

            export default App;