import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';
export default function StepOne(){
const {formik} = useContext(MyContext)
    return(
        <div className="containeStepOne">
            <div className="nickName">
                <label>Никнейм</label>
                <input type="name"  
                className= {formik.errors.nickName && formik.touched ? "error-input":"input"}
                id="nickName"
                placeholder="placeholder" 
                value={formik.values.nickName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <p>{formik.errors.nickName}</p>
                
            </div>
            <div className="name">
                <label>Имя</label>
                <input type="name"  
                className= {formik.errors.name && formik.touched ? "error-input":"input"}
                placeholder="placeholder"
                id="name"
                value={formik.values.name}
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}/>
                <p>{formik.errors.name }</p>
            </div>
            <div className="familyName">
                <label>Фамилия</label>
                <input type="name" 
                className= {formik.errors.familyName && formik.touched  ? "error-input":"input"}
                placeholder="placeholder"
                id="familyName"
                value={formik.values.familyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <p>{formik.errors.familyName}</p>
            </div>
            <div className="selectPol">
                <label>Пол</label>
            <div  className ='select-box'>
                <select 
                id="pol"
                className= {formik.errors.pol && formik.touched  ? "select-error":"select"}
                value={formik.values.pol} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="none">Не выбрано</option>
                    <option value="man">мужской</option>
                    <option value="women">женский</option>
                </select>
                <div className="icon-Container">
                    <div className="inner"></div>
                </div>
            </div>
                <p>{formik.errors.pol}</p>
            </div>
        </div>
    )
}