import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./stepThree";
import { Link } from "react-router-dom";
import icon from '../../images/Check Small.png'
import BarControl from "./BarControl";
import Modal from './Modal'
export default function FormValidate(){
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
    setShowModal(true);
    };
    const handleCloseModal = () => {
    setShowModal(false);
    }
const steps = ['1', '2', '3'];
const [currentStep, setCurrentStep] = useState(1)
const handleNextStep = () => {
            setCurrentStep(currentStep + 1);
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
    <form >
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
                <button className="sending" onClick={handleOpenModal}><p>Отправить</p></button>
                <button className="nazad_3" onClick={handlePrevStep}><p>Назад</p></button> 
            </div>
            <StepThree/>
        </div>
        :
        null
        }
  </form>

</div>
        <Modal showModal={showModal} handleClose={handleCloseModal} />
</div>
        </>
    )
}