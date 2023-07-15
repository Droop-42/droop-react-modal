import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'
import './index.css';
import Modal from './lib/components/Modal'

function Example () {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button className="modalBtn" onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {
          isModalOpen && 
          <Modal setIsOpen={setIsModalOpen} >
              Your Content
          </Modal>   
      }
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);