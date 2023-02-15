import './App.css';
import { useEffect, useState } from "react";
import Footer from './components/FooterComponent';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import uuid from 'react-uuid';

function App() {

  // const [allToDos, setAllToDos] = useState([])

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

const toggleShowAndCloseModal = () => {
  setShowModal(!showModal)
};
// function incrementCounterForId() {
//   setCounterForId(counterForId + 1)
// }

function onChangeTextInput(e) {
  setContent(e.target.value)
}

function addNewToDo() {
  setAllToDos(() => {
    if (content !== '') {
      // incrementCounterForId();
      const newTodo = [{id: uuid(), category:'To do', checked: false, content:content, isOpenModalTripleDotsMenu:false}, ...allToDos];
      toggleShowAndCloseModal();
      return newTodo;
    } else {
      return allToDos;
    }
  })
}

function updateIsOpenTripleDotsMenu(id) {
  setAllToDos((allToDos) => {
    // find target obj with id in array 'allToDos'
    const selectedObj = allToDos.filter(obj => obj.id === id)[0];
    // find its INDEX
    const index = allToDos.findIndex(obj => obj.id === id);
    // change status of TripleDotMenu to opposite
    selectedObj.isOpenModalTripleDotsMenu = !selectedObj.isOpenModalTripleDotsMenu;
    // find LEFT and RIGHT sides
    const leftItemsArray = allToDos.slice(0, index);
    const rightItemsArray = allToDos.slice(index + 1, allToDos.length);
    // make new array for final return
    return [...leftItemsArray, selectedObj,...rightItemsArray]
  })
}

useEffect(() => {
  setContent('')
}, [allToDos]);


const [categoryForView, setCategoryForView] = useState('To do');
function changeViewedListByCategory(cat) {
  setCategoryForView(cat)
}


  return (
    <div className="App">
      < Header categoryForView={categoryForView} changeViewedListByCategory={changeViewedListByCategory} showModal={showModal} toggleShowAndCloseModal={toggleShowAndCloseModal} addNewToDo={addNewToDo} content={content} onChangeTextInput={onChangeTextInput} />
      < Main categoryForView={categoryForView} allToDos={allToDos} setAllToDos={setAllToDos} updateIsOpenTripleDotsMenu={updateIsOpenTripleDotsMenu} />
      < Footer />
    </div>
  );
}

export default App;
