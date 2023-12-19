import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./stepThree";
import { Link } from "react-router-dom";
export default function FormValidate(){
    const [currentStep, setCurrentStep] = useState(1);
    const handleNextStep = () => {
            setCurrentStep(currentStep + 1);
        };
    const handlePrevStep = () => {
            setCurrentStep(currentStep - 1);
        };
        const handleStepClick = (step) => {
            setCurrentStep(step);
        };
        const steps = ['1', '2', '3'];
    return(
        <>
            <div className='containerFormValidate'>
      {/* Progress Bar */}
    <div style={{ 
        display:'flex',
        position:'absolute',
        justifyContent:'space-between',
        width: '680px',
        height: '48px',
        top: '62px',
        left: '110px',
        borderRadius: '8px',
        // background:'silver'
}}>
        {steps.map((step, index) => (
            <>   <div
            key={index}
            onClick={() => handleStepClick(index + 1)}
            style={{
                flex: 1,
                borderTop: `10px solid ${ index < currentStep ? 'Purple' : 'gray'}`,
                padding: '10px',
                //  borderRadius: '100px',
                textAlign:step === '3' ? 'right': step === '2' ? 'center': 'left',
                fontWeight: index === currentStep - 1 ? 'bold' : 'normal',
                color: index < currentStep ? 'blue' : 'gray',
                cursor: 'pointer',
            }}
        >
            {step}
        </div> 
        </>
        
        ))}
    </div>
<div>
  {/* Form Content */}
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
                <button className="sending" onClick={handleNextStep}><p>Отправить</p></button>
                <button className="nazad_3" onClick={handlePrevStep}><p>Назад</p></button> 
            </div>
            <StepThree/>
        </div>
        :
        null
        }
</div>
    

            </div>
        </>
    )
}