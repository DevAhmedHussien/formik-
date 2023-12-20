export default function BarControl({steps,handleStepClick,currentStep}){
    return (
        <div
        style={{ 
            display:'flex',
            position:'absolute',
            justifyContent:'space-between',
            width: '680px',
            height: '48px',
            top: '62px',
            left: '110px',
            borderRadius: '8px',
    //   background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.16), rgba(0, 0, 0, 0.16)), linear-gradient(0deg, #FFFFFF, #FFFFFF)'
    }}>
            {steps.map((step, index) => (
                <div
                key = {index}
                onClick={() => handleStepClick(index + 1)}
                style={{
                    position:'relative',
                    flex: 1,
                    borderTop: `10px solid ${ index < currentStep ? 'blue' : '#d6d6d6'}`,
                    padding: '7px',
                    textAlign:step === '3' ? 'right': step === '2' ? 'center': 'left',
                    fontWeight: index === currentStep - 1 ? 'bold' : 'normal',
                    color: index < currentStep ? '#5558FA': '#d6d6d6',
                    cursor: 'pointer',
                }}
            >
                <div 
                style={{
                        position: 'absolute',
                        top: '-15px',
                        left: index=== 0 ?'-1px': index === 1?' 50%':index ===2?'213px':null,
                        width: '16px',
                        height: '16px',
                        padding: '10px',
                        borderRadius: '100px',
                        background:index < currentStep ?  '#5558FA': '#A6A6A6',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                }}>
                {index < currentStep ? 
                // <img src={icon} alt=""/>
                <p style={{
                            color:'white',
                            fontSize:"12px"
                }}>✔</p>
                :
                <p style={{
                            position:'absolute',
                            background:'white',
                            width:' 3.2px',
                            height: '3.2px',
                            borderRadius:'3px'
                }}></p>
                }
                </div>
                    <div 
                    style={{marginLeft:index=== 0 ?'-2px': index === 1?' 21px':index ===2?'208px':null,
                    paddingTop:'5px',
                    fontFamily:' TT Travels',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '20px',
                    letterSpacing: '0em',
                    color: index < currentStep ? '#5558FA': '#a6a6a6',
                    }}>
                        {step}
                    </div>   
                </div> 
            ))}
        </div>
    )
}