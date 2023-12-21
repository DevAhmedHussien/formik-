// import right from '../../images/Check Small.png'
import x from '../../images/x.png'
import xModal from '../../images/Button Icon Transparent.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../context/ContextStates';

const Modal = () => {
const { showModal, summbitts  ,setShowModal} = useContext(MyContext)
const handleClose =()=>{
    setShowModal(false)
}
return (
<>
<div className={`modal ${showModal ? 'show' : 'hide'}`}>
    { summbitts?
        <div className="modal-content-ok">
            <h2>Форма успешно отправлена</h2>
            <div className='bigBox'>
                <div className='forImg'> 
                    {/* <img src={right} alt=''/> */}
                    <p>✔</p>
                </div>
            </div>
            <div className='buttonModal'>
                <Link to='/' className='link'>
                    <button>На главную </button>
                </Link>
                
            </div>
        </div>
    :
    <div className="modal-content-no">
            <div style={{
                    width: '396px',
                    height: '28px',
                display:'flex',
                justifyContent:'space-between'
            }}>
                <h2>Ошибка</h2>
                {/* <span className="close" onClick={handleClose}>&times;</span> */}
                <img src={xModal} alt=''  className="close" onClick={handleClose}/>
                
            </div>
                <div className='bigBox'>
                    <div className='forImg'> 
                        <img src={x} alt=''/>
                        
                    </div>
                </div>
                <div className='buttonModal'>
                    <button onClick={handleClose} >Закрыть</button>
                    
                </div>
        </div>
    }
</div>
</>
);
};

export default Modal;
