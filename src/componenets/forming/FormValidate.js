import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./stepThree";
import { Link } from "react-router-dom";
// import icon from '../../images/Check Small.png'
import BarControl from "./BarControl";
import Modal from './Modal';
import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';

export default function FormValidate(){
const {formik,onSubmit} = useContext(MyContext)
const steps = ['1', '2', '3'];
const [currentStep, setCurrentStep] = useState(1)
const handleNextStep = () => {
    if (!formik.values.nickName || !formik.values.name || !formik.values.familyName
        || formik.values.pol ==="none")
        {
        alert("Не заполнены обязательные поля!");
    }else{
        setCurrentStep(currentStep + 1);
    }
    };
const handlePrevStep = () => {
            setCurrentStep(currentStep - 1);
    };
    const handleStepClick = (step) => {
            setCurrentStep(step);
    };
    
return(
    <>
<div className='containerFormValidate'>
  {/* Progress Bar */}
    <BarControl steps={steps} currentStep={currentStep} handleStepClick={handleStepClick} />
<div>
  {/* Form Content */}
    <form onSubmit={formik.handleSubmit}>
    {currentStep === 1 ?
        <div>
            <div>
                <div className="dalee" onClick={handleNextStep}><p>Далее</p></div>
                <Link to='/'>
                    <button className="nazad" onClick={handlePrevStep}><p>Назад</p></button> 
                </Link>
            </div>
            <StepOne/>
        </div>
        :currentStep === 2 ?
        <div>
            <div>
                <div className="dalee_2" onClick={handleNextStep}><p>Далее</p></div>
                <button className="nazad_2" onClick={handlePrevStep}><p>Назад</p></button> 
            </div>
            <StepTwo/>
        </div>
        :
        currentStep === 3 ?
        <div>
            <div>
                <button className="nazad_3" onClick={handlePrevStep}><p>Назад</p></button> 
                <button className="sending" type="sumbit" disabled={formik.isSubmitting} onClick={onSubmit}>
                        <p>Отправить</p>
                    </button>
            </div>
            <StepThree/>
        </div>
        :
        null
        }
    </form>
</div>
        <Modal />
</div>
        </>
    )
}  

// if (!formik.values.nickName || !formik.values.name ||
//     !formik.values.familyName ||!formik.values.pol ||!formik.values.textArea) {
//     console.log("Не заполнены обязательные поля!");
//     setSumbitss(false)
//     setShowModal(true);
// }else{
//     console.log("EVERY THING IS OKEEEEEEEEEEEEEY ");
//     setSumbitss(true)
//     setShowModal(true);
//     formik.resetForm()
// }