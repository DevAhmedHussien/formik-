import folderImage from '../../images/Folder.png'
import ElementBox from "./ElementBox"
import TelephoneValid from './TelephoneValid'
import { useState } from 'react';
export default function Main(){
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
    <>
    <div className='containerMain'>
        <div className="containerName">
            <div className='containerTitle'>
                <h1>АИ</h1>
            </div>
            <div className='titleNameBox'>  
                <h2 className="NameTitle" >Алексей Иванов</h2>
                <div className="boxesMain">
                    <ElementBox src={folderImage} label='Telegram' />
                    <ElementBox src={folderImage} label='GitHub'  />
                    <ElementBox src={folderImage} label='Резюме' />
                </div>
            </div>
        </div>
        <hr className='dividerMain'/>
        <TelephoneValid value={phoneNumber} onChange={setPhoneNumber} />
    </div>
    
    </>        
    
    )
}