import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';
export default function StepThree(){
let {formik} = useContext(MyContext)
    return(
        <>
        <div className="boxStepThree">
                <label>О себе</label>
                <span className={formik.values.textArea.length > 199 ?"span-error":"span"}>{formik.values.textArea.length}</span>
                <textarea 
                className={formik.errors.textArea && formik.touched  ? "error-textArea":"textArea"}
                  placeholder="placeholder"  
                id="textArea"
                value={formik.values.textArea}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>
                <p>{formik.errors.textArea}</p>
        </div>
        </>
    )
}