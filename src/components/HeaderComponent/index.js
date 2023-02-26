import { useState } from 'react';
import PLUS_SVG from './images/Plus Math.svg';
import ModalSelfmade from './ModalSelfmade';


export default function Header( { categoryForView, changeViewedListByCategory, showModal, setShowModal, addNewToDo, content, onChangeTextInput } ) {



    const [rotation, setRotation] = useState(0);
    function handleClickToRotate() {
        setRotation(rotation + 45);
    };

    function launchTwoFuncs() {
        setShowModal(!showModal);
        handleClickToRotate();
    }





    return (
        <div className="d-flex flex-column" style={{
            margin: '100px 80px 0px'
        }}>

            <div className='d-flex flex-row justify-content-between'>

                {/* LEFT side of header */}
                <div className="d-flex flex-column w-50">
                    <div className="d-flex flex-column w-100" style={{
                        gap: '24px'
                        }}>

                        <p style={{
                        fontWeight: 700,
                        fontSize: '34px',
                        lineHeight: '38px'
                        }}>Simple To Do List</p>


                        <p style={{
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '22px'
                        }}>Today is awesome day. The weather is awesome, you are awesome too!</p>

                    </div>

                    <div className="d-flex flex-row justify-content-start" style={{
                        margin: '102px 0px 0px',
                        gap: '16px'
                        }}>

                        <button className={`${categoryForView === 'To do' ? "statusButtonActive" : "statusButtonInactive"}`} onClick={() => changeViewedListByCategory('To do')}>To do</button>
                        <button className={`${categoryForView === 'Done' ? "statusButtonActive" : "statusButtonInactive"}`} onClick={() => changeViewedListByCategory('Done')}>Done</button>
                        <button className={`${categoryForView === 'Trash' ? "statusButtonActive" : "statusButtonInactive"}`} onClick={() => changeViewedListByCategory('Trash')}>Trash</button>

                    </div>

                </div>

                {/* RIGHT side of header */}

                <div className="w-24 d-flex flex-row justify-content-between" style={{
                    gap: '25px'
                }}>
                    
                    {/* add self-written modal */}
                    
                    <ModalSelfmade showModal={showModal} addNewToDo={addNewToDo} content={content} onChangeTextInput={onChangeTextInput} handleClickToRotate={handleClickToRotate} />
                    
                    <div className="d-flex align-items-end">
                        <button style={{
                            background: '#081E34',
                            borderRadius: '100px',
                            width: '52px',
                            height: '52px'
                        }} onClick={launchTwoFuncs}>
                            <img src={PLUS_SVG} alt='plus-pic' style={{ transform: `rotate(${rotation}deg)` }} />
                        </button>
                    </div>
                    
                </div>

            </div>

            <p className='d-flex flex-column' style={{
                marginTop: '64px',
                height: '28px',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '28px',
            }}>{categoryForView}</p>

            <div style={{
                marginTop: '24px',
                height: '2px',
                background: `rgba(21, 21, 23, 1)`,
                opacity: 0.2
            }}></div>

        </div>



    )
}
