import React, { useState } from 'react';
const CheckboxGroup = () => {
const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
});
const handleCheckboxChange = (option) => {
    setCheckboxes((prevCheckboxes) => ({
    ...prevCheckboxes,
    [option]: !prevCheckboxes[option],
    }));
};
const checkboxStyle = {
    width: '16px',
    height: '16px',
    borderRadius: '4px',
    border: '1.5px solid #0000003D',
    background: '#0000003D',
};
return (
    <div>
        <h3>Checkbox группа</h3>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
        type="checkbox"
        checked={checkboxes.option1}
        onChange={() => handleCheckboxChange('option1')}
        style={checkboxStyle}
        />
    1
    </label>
    <label>
        <input
        type="checkbox"
        checked={checkboxes.option2}
        onChange={() => handleCheckboxChange('option2')}
        style={checkboxStyle}
        />
        2
    </label>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
        type="checkbox"
        checked={checkboxes.option3}
        onChange={() => handleCheckboxChange('option3')}
        style={checkboxStyle}
        />
        3
    </label>
    </div>
);
};
export default CheckboxGroup;