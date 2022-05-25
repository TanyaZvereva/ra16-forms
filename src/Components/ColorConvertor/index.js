import { useState } from "react";
import './style.css'
const convertHexToRGB = (hex) => {
    const tempHex = hex.replace('#', '');
    const r = parseInt(tempHex.substring(0, 2), 16);
    const g = parseInt(tempHex.substring(2, 4), 16);
    const b = parseInt(tempHex.substring(4, 6), 16);
    if(!isNaN(r)&&!isNaN(g)&&!isNaN(b)&&hex.length>6) {
        return `rgb(${r},${g},${b})`
    }else if(hex.length>6){
        return 'Ошибка!'
    }
  return ''
};
const ColorConvertor = () => {
    const [color, setColor] = useState('')
    return (<div style={{ backgroundColor: color }} className='color-convertor'>
        <div><input onChange={event => setColor(event.target.value)} type="text" /><div>{convertHexToRGB(color)}</div></div>
    </div>)
};

export default ColorConvertor