import ToDoListRender from './ToDoListRender';

export default function Main( { categoryForView, allToDos, setAllToDos, updateIsOpenTripleDotsMenu } ) {



    return (
        <div className="d-flex align-items-center" style={{
            margin: '24px 58px 0px'
        }}>
            <ToDoListRender categoryForView={categoryForView} allToDos={allToDos} setAllToDos={setAllToDos} updateIsOpenTripleDotsMenu={updateIsOpenTripleDotsMenu} />
        </div>
    )
}