import vector from '../../images/Vector.png'
import add from '../../images/ADD.png'
import CheckboxGroup from "./CheckBoxGroup";
import RadioBox from "./RadioBox";
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';
let Data =  [{
            id:uuidv4(),
            src:vector,
        },{
            id:uuidv4(),
            src:vector,
        },{
            id:uuidv4(),
            src:vector,
    }]
export default function StepTwo(){
const [advantages,setAdvantages] = useState(Data)
const handleAddAdvantages =()=>{
    setAdvantages([...advantages,{
        id:uuidv4(),
        src:vector,
    }])
}
const handleRemoveAddvantages = (item)=>{
    const DeleteAddvantages = advantages.filter((element) => element.id !== item.id); // emsa7 el element 
    setAdvantages(DeleteAddvantages)
}
let formik = useContext(MyContext)
return(
<div className="BoxStepTwo">
    <div className='advantages'>
        <label>Преимущества</label>
        {
            advantages.map((item,index)=>{
                return(
                <div key={index} className="innedAdvantages" >
                    <input type="name" 
                    id = {`advntage_${index+1}`}
                    placeholder="placeholder"
                    value={formik.formik.values.advantages[`advantage_${index+1}`]}
                    onChange={formik.formik.handleChange}
                    />
                    <img src={item.src} 
                    onClick={()=>{
                        handleRemoveAddvantages(item)
                    }} 
                    alt=""/>
                </div>
                )
            })
        }
        <div className="addBox" onClick={handleAddAdvantages}>
            <img src={add} alt="" />
        </div>
    </div> 
    <div className='checkGroup'>
    <CheckboxGroup/>
    </div>  
    <div className='radioGroup'>
    <RadioBox/>
    </div>
</div>
)
}