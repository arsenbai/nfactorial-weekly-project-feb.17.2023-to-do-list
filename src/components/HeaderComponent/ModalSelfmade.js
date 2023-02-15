
export default function ModalSelfmade( { showModal, addNewToDo, content, onChangeTextInput, handleClickToRotate } ) {

    function launchTwoFunctions() {
        addNewToDo();
        handleClickToRotate();
    }

    if (showModal) {

        return (
            <>
                <div className='d-flex flex-column' style={{
                    padding: '16px',
                    gap: '10px',
                    width: '268px',
                    background: '#E4E6E7',
                    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.16)`,
                    borderRadius: '12px'
                }}>
                    <p style={{
                        color: '#151517',
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: '22px'
                    }}>Add New To Do</p>
    
                    <input type='text' placeholder='Your text' value={content} onChange={onChangeTextInput} style={{
                        height: '75%',
                        width: '236px',
                        background: '#FFFFFF',
                        borderRadius: '8px',
                        border: 'none',
                        whiteSpace: 'normal !important',
                        wordWrap: 'break-word !important',
                        // whiteSpace: "pre-wrap !important"
                    }}/>
    
                    
                    <button style={{
                        width: '76px',
                        height: '40px',
                        color: '#FFFBFE',
                        background: `#081E34`,
                        borderRadius: '100px'
                    }} onClick={launchTwoFunctions}>Add</button>
                </div>
            </>
        )
    }

}