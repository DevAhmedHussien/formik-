import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';
const CheckboxGroup = () => {
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
        <h3>Checkbox группа</h3>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
        type="checkbox"
        id='isChecked_1'
        value={formik.formik.values.checkbox['isChecked_1']}
        onChange={formik.formik.handleChange}
        style={checkboxStyle}
        />
    1
    </label>
    <label>
        <input
        type="checkbox"
        id='isChecked_2'
        value={formik.formik.values.checkbox['isChecked_2']}
        onChange={formik.formik.handleChange}
        style={checkboxStyle}
        />
        2
    </label>
    <label style={{ display: 'flex', alignItems: 'center' }}>
        <input
            type="checkbox"
            id='isChecked_3'
            value={formik.formik.values.checkbox['isChecked_3']}
            onChange={formik.formik.handleChange}
            style={checkboxStyle}
        />
        3
    </label>
</div>
);
};
export default CheckboxGroup;