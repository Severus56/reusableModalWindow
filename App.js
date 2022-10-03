import logo from './logo.svg';
import './App.css';
import './Modal/modal.css';
import Modal from "./Modal/Modal";
import {useState} from "react";


const App = () => {
  const[modalActive,setModalActive] = useState(false)

  return (
    <div className="App">
    <button className='open_btn' onClick={() => setModalActive(true)}>Открыть</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <h1>Привет</h1>
      </Modal>
    </div>
  );
}

export default App;
