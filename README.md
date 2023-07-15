# droop-modal-react

Basic React Modal component

<a href="https://www.npmjs.com/package/droop-modal-react"><img alt="npm" src="https://img.shields.io/npm/dw/thra-basic-modal-react"></a>
<a href="https://www.npmjs.com/package/droop-modal-react"><img alt="npm" src="https://img.shields.io/npm/v/thra-basic-modal-react"></a>
<a href="https://www.npmjs.com/package/droop-modal-react"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/thra-basic-modal-react"></a>
<a href="https://www.npmjs.com/package/droop-modal-react">
<img alt="Maintenance Status" src="https://img.shields.io/badge/maintenance-active-green.svg" />
</a>

## Installation

```
npm i droop-modal-react
```

## Example

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'
import './index.css';
import Modal from './lib/components/Modal'

function Example () {
  // Add a state to check if the modal is open
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      { /* Create a button to open the modal*/ }
      <button className="modalBtn" onClick={() => setIsModalOpen(true)}>Open Modal</button>
      { /* If isModalOpen is true, open the modal*/ }
      {
          isModalOpen && 
          <Modal setIsOpen={setIsModalOpen} >
              Your Content
          </Modal>   
      }
    </div>
  )
}
export default Example
```