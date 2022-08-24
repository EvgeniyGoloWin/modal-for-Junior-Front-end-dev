import React, {useState} from 'react';
import './index.css';
import {Modal} from "./Modal";

function App() {
    const [open,setOpen] = useState(false)
  return (
      <div className="App">
        <button onClick={()=> setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
          { open && <Modal open={open} setOpen={setOpen}>
              <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
              <h3>Modal Window</h3>
          </Modal> }
      </div>
  );
}

export default App;