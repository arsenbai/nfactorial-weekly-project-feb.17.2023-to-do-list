import uuid from 'react-uuid';
import {VECTOR_SVG_PATH} from './images/';
import ModalTripleDotsMenu from './ModalTripleDotsMenu';
import ModalForTrash from './ModalForTrash';

export default function ToDoListRender({ categoryForView, allToDos, setAllToDos, updateIsOpenTripleDotsMenu }) {



    function dropToTrash(id) {
        setAllToDos(() => {
            const index = allToDos.findIndex(item => item.id === id);
            const selectedObj = allToDos.filter(item => item.id === id)[0];
            selectedObj.category = 'Trash';
            selectedObj.isOpenModalTripleDotsMenu = false;
            const leftPart = allToDos.slice(0, index);
            const rightPart = allToDos.slice(index+1, allToDos.length);
            const newAllToDos = [...leftPart, selectedObj, ...rightPart];
            return newAllToDos;
        })

    }

    function handleChecked(id) {
        setAllToDos(() => {
            const selectedToDo = allToDos.filter(obj => obj.id === id)[0];
            selectedToDo.checked = !selectedToDo.checked;
            if (selectedToDo.checked && selectedToDo.category === 'To do' && categoryForView !== 'Trash') {
                selectedToDo.category = 'Done';
                return [...allToDos.filter(obj => obj.id !== id), selectedToDo]
            } else if (!selectedToDo.checked && selectedToDo.category === 'Done' && categoryForView !== 'Trash') {
                selectedToDo.category = 'To do';
                return [selectedToDo, ...allToDos.filter(obj => obj.id !== id)]
            }
        })
    }

    function deleteForever(id) {
        setAllToDos(() => {
            const indexToDelete = allToDos.findIndex(item => item.id === id);
            const leftPart = allToDos.slice(0, indexToDelete);
            const rightPart = allToDos.slice(indexToDelete + 1, allToDos.length);
            const newAllToDos = [...leftPart, ...rightPart];
            return newAllToDos;
        })
    }

    function moveBackToToDO(id) {
        setAllToDos(() => {
            const index = allToDos.findIndex(item => item.id === id);
            const selectedObj = allToDos.filter(item => item.id === id)[0];
            selectedObj.category = 'To do';
            selectedObj.checked = false;
            selectedObj.isOpenModalTripleDotsMenu = false;
            const leftPart = allToDos.slice(0, index);
            const rightPart = allToDos.slice(index+1, allToDos.length);
            const newAllToDos = [...leftPart, selectedObj, ...rightPart];
            return newAllToDos;
        })
    }

    let viewList = []
    if (categoryForView === 'To do') {
        const toDoList = allToDos.filter(obj => obj.category === 'To do')
        const doneList = allToDos.filter(obj => obj.category === 'Done')
        viewList = [...toDoList, ...doneList] 
    } else if (categoryForView === 'Done') {
        const doneList = allToDos.filter(obj => obj.category === 'Done')
        viewList = [...doneList]
    } else if (categoryForView === 'Trash') {
        const trashList = allToDos.filter(obj => obj.category === 'Trash')
        viewList = [...trashList]
    }



    const mappedArray = viewList.map(obj => {
        return (
            <>
            <li key={uuid()} className={`d-flex flex-row justify-content-start${obj.checked ? ' crossedOutTextAndGrayColors' : ''}`} style={{
                height: 'auto', 
                marginBottom: `${obj.isOpenModalTripleDotsMenu ? '6px' : '16px'}`,
                }} >
                <button className='btnThreePoints d-flex flex-row justify-content-start align-items-center' onClick={() => updateIsOpenTripleDotsMenu(obj.id)} style={{
                    width:'24px', 
                    height:'24px',
                    border:'none',
                    backgroundColor: `${obj.checked ? '#E4E6E7' : '#F1F1F1'}`,
                    }}>
                    {VECTOR_SVG_PATH}
                </button>

                <input type='checkbox' onChange={() => {
                    if (categoryForView !== 'Trash') {
                        handleChecked(obj.id)
                    }
                }} id={obj.id} key={uuid()} checked={obj.checked} className='d-flex flex-row justify-content-start align-items-start' style={{
                    height:'24px',
                    backgroundColor: '#712FFF',
                }} />
                <label htmlFor={obj.id} style={{
                    marginLeft: '8px',
                    height: 'auto',
                    width: '750px',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '22px',
                }} className={`d-flex flex-row justify-content-start align-items-center${(categoryForView === 'Trash') ? ' text-danger' : ''}`} >{obj.content}</label>
            </li>
            <li>
                {obj.isOpenModalTripleDotsMenu && (categoryForView !== 'Trash') && < ModalTripleDotsMenu categoryForView={categoryForView} key={uuid()} dropToTrash={dropToTrash} objId={obj.id} />}
                {obj.isOpenModalTripleDotsMenu && (categoryForView === 'Trash') && < ModalForTrash categoryForView={categoryForView} key={uuid()} deleteForever={deleteForever} moveBackToToDO={moveBackToToDO} objId={obj.id} />}
            </li>
            </>
        )
    })


    return (
        <ul className='d-flex flex-column align-items-start' style={{listStyle: 'none'}}>
            {mappedArray}
        </ul>
    )
}