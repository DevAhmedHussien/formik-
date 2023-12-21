// RadioBox.js
import React, { useState } from 'react';
import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';
const RadioBox = () => {
const [selectedOption, setSelectedOption] = useState('');
const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
};
let formik = useContext(MyContext)
console.log(formik.formik.values)

const checkboxStyle = {
        width: '16px',
        height: '16px',
        borderRadius: '4px',
        border: '1.5px solid #0000003D',
        background: '#0000003D',
};
return (
    <div>
        <h3>Radio группа</h3>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
        type="radio"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={handleOptionChange}
        style={checkboxStyle}/>
    1
    </label>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
        type="radio"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={handleOptionChange}
        style={checkboxStyle}
        />
    2
    </label>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
        type="radio"
        value="option3"
        checked={selectedOption === 'option3'}
        onChange={handleOptionChange}
        style={checkboxStyle}
        />
        3
    </label>
    </div>
);
};
export default RadioBox;
