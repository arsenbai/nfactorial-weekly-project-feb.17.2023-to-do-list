import ToDoListRender from './ToDoListRender';

export default function Main( { dropToTrash, handleChecked, deleteForever, moveBackToToDO, categoryForView, allToDos, setAllToDos, updateIsOpenTripleDotsMenu } ) {



    return (
        <div className="d-flex align-items-center" style={{
            margin: '24px 58px 0px'
        }}>
            <ToDoListRender dropToTrash={dropToTrash} handleChecked={handleChecked} deleteForever={deleteForever} moveBackToToDO={moveBackToToDO}  categoryForView={categoryForView} allToDos={allToDos} setAllToDos={setAllToDos} updateIsOpenTripleDotsMenu={updateIsOpenTripleDotsMenu} />
        </div>
    )
}