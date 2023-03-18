import React from 'react';
import { TextField, Button } from '@mui/material';

import { useRecoilState } from 'recoil';
import { modalState } from '../../../recoil/atom/authAtom';

export default function RegisterForm() {
    const [modal,setModal] = useRecoilState(modalState)

  return (
    <form className="mx-auto my-6 sm:w-96">
      <h2 className="text-2xl font-bold mb-6 text-secondaryMain text-center">Register Now</h2>
      <TextField label="Email" fullWidth className="mb-4" />

      <TextField label="Password" type="password" fullWidth className="mb-6" />
      <div className="flex justify-between items-center mb-6">
        <div  onClick={()=>setModal("login")}  className="text-tertiaryMain hover:text-secondaryMain cursor-pointer">Already have accound?</div>
      </div>
      <div className='px-24 '>
      <Button  variant="contained"  size='small' fullWidth className="mb-6 bg-secondaryMain rounded-2xl text-tertiaryMain text-base font-bold">
        Register
      </Button>
      </div>
      <div className="my-6 text-center">
        <hr className="border-gray-400 border-1 h-0.5 mx-4" />
      </div>
   
    </form>
  );
}
