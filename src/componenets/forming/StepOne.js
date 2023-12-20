export default function StepOne(){
    return(
        <div className="containeStepOne">
            <div className="nickName">
                <label>Никнейм</label>
                <input type="name"  placeholder="placeholder" />
                <p>Tip</p>
                
            </div>
            <div className="name">
                <label>Имя</label>
                <input type="name"  placeholder="placeholder" />
                <p>Tip</p>
            </div>
            <div className="familyName">
                <label>Фамилия</label>
                <input type="name"  placeholder="placeholder" />
                <p>Tip</p>
            </div>
            <div className="selectPol">
                <label>Пол</label>
            <div  className ='select-box'>
                <select>
                        <option>Не выбрано</option>
                        <option>мужской</option>
                        <option>женский</option>
                </select>
                <div className="icon-Container">
                    <div className="inner"></div>
                </div>
            </div>
                <p>Tip</p>
            </div>
        </div>
    )
}