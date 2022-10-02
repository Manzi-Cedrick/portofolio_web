import React, { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const ViewMail = ({ showModal, onClose , children } : {showModal: Boolean,onClose: any,children: any}) => {
  const [isBrowser, setBrowser] = useState<Boolean>(false)
  useEffect(() => {
    setBrowser(true)
  }, [])
  const handleClose = () => {
    onClose() 
  }
  const handleSubmit = (e :any) => {
    e.preventDefault();
  }
  const ModalContent = showModal ? (
    <div className="modal-portal bg-modalG h-screen w-screen flex place-items-center z-20 absolute top-0 bottom-0 left-0 right-0 justify-center">
    <div className="modal px-10 py-4 bg-white rounded-sm drop-shadow  ">
      <div className="modal-content">
        <div className="modal-header py-2 flex justify-between">
          <h5 className="modal-title font-bold text-backG">Add Account</h5>
          <button onClick={handleClose} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
                  <span className="sr-only">Close</span>
                  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="modal-body">
         {children}
        </div>
        <div className="modal-footer flex py-2 gap-2  justify-between">
          <button type="button" className="btn bg-slate-500 text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleClose}>Close</button>
          <button type="button" className="btn bg-backG text-white py-2 px-4 lg:px-10 lg:py-3 btn-secondary" data-dismiss="modal" onClick={handleSubmit}>Save</button>
        </div>
        </form>
      </div>
    </div>
    </div>
  ) : null
  if (isBrowser) {
    return ReactDOM.createPortal(ModalContent,document.getElementById('modal-root') as HTMLElement)
  } else {
    return null
  }

}

export default ViewMail