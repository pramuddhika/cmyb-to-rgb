import { useState } from "react";
import './Convert.css';

function Convert(){
    const [ cyan, setCyan ] = useState('');
    const [ magenta, setMagenta ] = useState('');
    const [ yellow, setYellow ] = useState('');
    const [ back,setBack ] = useState('');
    const [ red, setRed ] = useState('');
    const [ green, setGreen ] = useState('');
    const [ blue, setBlue ] = useState('');

    const calcute = (e) => {
        e.preventDefault();
        const formVaild =  (cyan => 0);
        if (!formVaild){
            return; 
        }
        const white = (1 - back);
        const red = Math.round(255 * white * ( 1 - cyan)); setRed(red);
        const green = Math.round(255 * white * ( 1 - magenta)); setGreen(green);
        const blue = Math.round(255 * white * ( 1 - yellow)); setBlue(blue);
    }

    const clearState = () => {
        setBack('');
        setCyan('');
        setMagenta('');
        setYellow('');
        setRed('');
        setGreen('')
        setBlue('');
    }
  
     return(
        <div>
            <p id ="p1">Now </p> <p id = "p2">it very easy</p>
             <br/>
            <p id = "p3">Enter your CMYB values</p>
            <table>
                <tr>
                       <td> <pre>
                               Cyan    = <input type = "number" value = {cyan} onChange = { (e) => setCyan(e.target.value)}/>            <br/>
                               Magenta = <input type = "number" value = {magenta} onChange = { (e) => setMagenta(e.target.value)}/>      <br/>
                               Yellow  = <input type = "number" value = {yellow} onChange = { (e) => setYellow(e.target.value)}/>        <br/>
                               Back    = <input type = "number" value = {back} onChange = { (e) => setBack(e.target.value)}/>            <br/>
                            </pre>
                        </td>
                        <td>
                            <button id = "b1" onClick = {calcute}>Convert</button>
                        </td>
                </tr>
            </table> 
            <pre>
               <p id = "r"> Red    = {red}  </p>
               <p id ="g"> Green  = {green}</p>
               <p id = "b"> Blue   = {blue} </p>
            </pre>
           <button  id = "b2" onClick = {clearState}>Clean</button>
         </div>
    );
}

export default Convert;