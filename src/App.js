import './App.css';
import { useEffect, useState } from "react";
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import uuid from 'react-uuid';

function App() {

  // const [allToDos, setAllToDos] = useState([])

  function dropToTrash(id) {
    setAllToDos(() => {
        const index = allToDos.findIndex(item => item.id === id);
        const selectedObj = allToDos.find(item => item.id === id);
        selectedObj.category = 'Trash';
        selectedObj.isOpenModalTripleDotsMenu = false;
        const leftPart = allToDos.slice(0, index);
        const rightPart = allToDos.slice(index+1, allToDos.length);
        const newAllToDos = [...leftPart, selectedObj, ...rightPart];
        return newAllToDos;
    })

}

  function handleChecked(id) {
    const selectedToDo = allToDos.find(obj => obj.id === id);
    selectedToDo.checked = !selectedToDo.checked;
    if (selectedToDo.category === 'To do' && categoryForView !== 'Trash') {
      setAllToDos([...allToDos.filter(obj => obj.id !== id), {...selectedToDo, category: 'Done'}])
    } else if (selectedToDo.category === 'Done' && categoryForView !== 'Trash') {
      setAllToDos([...allToDos.filter(obj => obj.id !== id), {...selectedToDo, category: 'To do'}])
    }

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
    const index = allToDos.findIndex(item => item.id === id);
    let selectedObj = allToDos.find(item => item.id === id);
    selectedObj = {...selectedObj, category: 'To do', checked: false, isOpenModalTripleDotsMenu: false}
    const leftPart = allToDos.slice(0, index);
    const rightPart = allToDos.slice(index+1, allToDos.length);
    const newAllToDos = [...leftPart, selectedObj, ...rightPart];
    setAllToDos(newAllToDos);
  }

  const [allToDos, setAllToDos] = useState([
    {
        id: uuid(),
        category: 'To do',
        checked: false,
        content: 'Write Essay',
        isOpenModalTripleDotsMenu: false
    },
    {
        id: uuid(),
        category: 'To do',
        checked: false,
        content: 'One Hour CSS Course Online',
        isOpenModalTripleDotsMenu: false
    },
    {
        id: uuid(),
        category: 'To do',
        checked: false,
        content: 'Buy One Way Tickets to San Fransico',
        isOpenModalTripleDotsMenu: false
    },
    {
        id: uuid(),
        category: 'To do',
        checked: false,
        content: 'Go to Gym',
        isOpenModalTripleDotsMenu: false
    },
    {
        id: uuid(),
        category: 'To do',
        checked: false,
        content: 'Buy Groceries',
        isOpenModalTripleDotsMenu: false
    },
    {
        id: uuid(),
        category: 'To do',
        checked: false,
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, in reiciendis! Facere enim iusto, laudantium cupiditate fugit accusantium hic reprehenderit.',
        isOpenModalTripleDotsMenu: false
    },
]);


const [content, setContent] = useState('');
// const [counterForId, setCounterForId] = useState(6);
const [showModal, setShowModal] = useState(false);

// const toggleShowAndCloseModal = () => {
//   setShowModal(!showModal);
// };

// function toggleShowAndCloseModal() {
//   setShowModal(!showModal);
// }


// function incrementCounterForId() {
//   setCounterForId(counterForId + 1)
// }

function onChangeTextInput(e) {
  setContent(e.target.value)
}

function addNewToDo() {
  if (content !== '') {
    const newTodo = {id: uuid(), category:'To do', checked: false, content:content, isOpenModalTripleDotsMenu:false};
    setAllToDos([newTodo, ...allToDos])
  };
  setContent('');
  // if (content !== '') {
  //   setShowModal(!showModal);
  // }
  
}

function updateIsOpenTripleDotsMenu(id) {

  const selectedObj = allToDos.find(obj => obj.id === id);

  const index = allToDos.findIndex(obj => obj.id === id);


  const leftItemsArray = allToDos.slice(0, index);
  const rightItemsArray = allToDos.slice(index + 1, allToDos.length);
  setAllToDos([...leftItemsArray, {...selectedObj, isOpenModalTripleDotsMenu: !selectedObj.isOpenModalTripleDotsMenu},...rightItemsArray])
}



const [categoryForView, setCategoryForView] = useState('To do');
function changeViewedListByCategory(cat) {
  setCategoryForView(cat)
}


  return (
    <div className="App">
      < Header categoryForView={categoryForView} changeViewedListByCategory={changeViewedListByCategory} showModal={showModal} setShowModal={setShowModal} addNewToDo={addNewToDo} content={content} onChangeTextInput={onChangeTextInput} />
      < Main dropToTrash={dropToTrash} handleChecked={handleChecked} deleteForever={deleteForever} moveBackToToDO={moveBackToToDO} categoryForView={categoryForView} allToDos={allToDos} setAllToDos={setAllToDos} updateIsOpenTripleDotsMenu={updateIsOpenTripleDotsMenu} />
      < Footer />
    </div>
  );
}

export default App;
