import React, { use, useEffect } from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../recoil/atom/authAtom';
import Button from '@mui/material/Button';
import { theme } from '../../theme';
import LoginForm from './LoginForm';
import RegisterForm from './Register';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function AuthModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  useEffect(()=>{
    Modal.setAppElement('body');

  })

  const [modal,setModal] = useRecoilState(modalState)
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
   setModal("none")
  }

  return (
    <div className=''>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modal=="login"||modal=="signup"}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={''}
      >
        <div className="flex  text-secondaryMain ">
          <Button
           sx={{
            borderBottom: activeTab === 'login'?"2px solid "+theme.paletes.secondary:""
           }}
            onClick={() => {setActiveTab('login'); setModal('login')}}
          >
            Login
          </Button>
          <Button
           sx={()=>({
            borderBottom: activeTab === 'signup'?"2px solid "+theme.paletes.secondary:""
           })}
            onClick={() =>{setActiveTab('signup'); setModal('signup')}}
          >
            Register
          </Button>
        </div>
        {modal === 'login' && (
          <div>
            <LoginForm />
            {/* Login form goes here */}
          </div>
        )}
        {modal === 'signup' && (
          <div>
           <RegisterForm/>
          </div>
        )}
      </Modal>
    </div>
  );
}

export {AuthModal as LoginModal} 