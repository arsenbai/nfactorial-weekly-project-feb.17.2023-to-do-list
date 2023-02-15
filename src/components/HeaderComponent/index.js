import { useState } from 'react';
import PLUS_SVG from './images/Plus Math.svg';
import ModalSelfmade from './ModalSelfmade';


export default function Header( { categoryForView, changeViewedListByCategory, showModal, toggleShowAndCloseModal, addNewToDo, content, onChangeTextInput } ) {

    // const [category, setCategory] = useState('To do');
    // function changeViewedListByCategory(cat) {
    //     setCategory(cat)
    // }

    const [rotation, setRotation] = useState(0);
    function handleClickToRotate() {
        setRotation(rotation + 45);
    };

    function launchTwoFuncs() {
        toggleShowAndCloseModal();
        handleClickToRotate();
    }

    // TO DO BUTTON
    const [isActiveToDoButton, setIsActiveToDoButton] = useState(true);
    function changeToDoButtonCSS() {
        setIsActiveToDoButton(!isActiveToDoButton)
    }

    function triggerFunctionGroupToDo() {
        changeViewedListByCategory('To do');
        changeToDoButtonCSS();
        if (isActiveDoneButton) {
            changeDoneButtonCSS()
        };
        if (isActiveTrashButton) {
            changeTrashButtonCSS()
        };
    }



    // Done BUTTON
    const [isActiveDoneButton, setIsActiveDoneButton] = useState(false);
    function changeDoneButtonCSS() {
        setIsActiveDoneButton(!isActiveDoneButton)
    }

    function triggerFunctionGroupDone() {
        changeViewedListByCategory('Done');
        changeDoneButtonCSS();
        if (isActiveTrashButton) {
            changeTrashButtonCSS()
        };
        if (isActiveToDoButton) {
            changeToDoButtonCSS()
        };
    }

    // Trash BUTTON
    const [isActiveTrashButton, setIsActiveTrashButton] = useState(false);
    function changeTrashButtonCSS() {
        setIsActiveTrashButton(!isActiveTrashButton)
    }

    function triggerFunctionGroupTrash() {
        changeViewedListByCategory('Trash');
        changeTrashButtonCSS();
        if (isActiveToDoButton) {
            changeToDoButtonCSS()
        };
        if (isActiveDoneButton) {
            changeDoneButtonCSS()
        };
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

                        <button className={`${isActiveToDoButton ? "statusButtonActive" : "statusButtonInactive"}`} onClick={(categoryForView !== 'To do') ? triggerFunctionGroupToDo : ''}>To do</button>
                        <button className={`${isActiveDoneButton ? "statusButtonActive" : "statusButtonInactive"}`} onClick={(categoryForView !== 'Done') ? triggerFunctionGroupDone : ''}>Done</button>
                        <button className={`${isActiveTrashButton ? "statusButtonActive" : "statusButtonInactive"}`} onClick={(categoryForView !== 'Trash') ? triggerFunctionGroupTrash : ''}>Trash</button>

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
