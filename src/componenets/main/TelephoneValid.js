import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
export default function TelephoneValid ({ value, onChange }){
    const handleChange = (e) => {
        // Basic validation: only allow numeric characters
        const inputValue = e.target.value.replace(/[^\d]/g, '');
        onChange(inputValue);
    };
    return(
    <>
        <div className="teleBox">
            <div className="telephoneInput">
                <label>Номер телефона</label>
                
                <InputMask className="inputMask"
                mask="+7 (999) 999-99-99"
                maskChar="_"
                value={value}
                onChange={handleChange}
                placeholder="+7 (___) ___-__-__"
    />
            </div>
            <div className="emailInput">
                <label>Email</label>
                <input type="email"  placeholder="webstudio.fractal@example.com" />
            </div>
           
        </div>
        <Link to='./formValid'>
            <div className="buttonTeleBox">
                <p>Начать</p>
            </div>
        </Link>
       
    </>
        

    )
}