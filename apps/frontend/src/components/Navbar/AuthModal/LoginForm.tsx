import React from 'react';
import { TextField, Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../recoil/atom/authAtom';

export default function LoginForm() {
    const [modal,setModal] = useRecoilState(modalState)

  return (
    <form className="mx-auto my-6 sm:w-96">
      <h2 className="text-2xl font-bold mb-6 text-secondaryMain text-center">Sign In</h2>
      <TextField label="Email" fullWidth className="mb-4" />
      <TextField label="Password" type="password" fullWidth className="mb-6" />
      <div className="flex justify-between items-center mb-6">
        <div onClick={()=>setModal("signup")} className="text-tertiaryMain hover:text-secondaryMain cursor-pointer">Create account</div>
        <div  className="text-tertiaryMain hover:text-secondaryMain cursor-pointer">Forgot password?</div>
      </div>
      <div className='px-24 '>
      <Button  variant="contained"  size='small' fullWidth className="mb-6 bg-secondaryMain rounded-2xl text-tertiaryMain text-base font-bold cursor-pointer">
        Login
      </Button>
      </div>
      <div className="my-6 text-center">
        <span className="text-gray-400 text-xl">OR</span>
        <hr className="border-gray-400 border-1 h-0.5 mx-4" />
      </div>
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        fullWidth
        className="mb-2 bg-white text-secondaryMain border-secondaryMain hover:bg-gray-100"
      >
        Continue with Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<FacebookIcon />}
        fullWidth
        className="bg-white text-secondaryMain border-secondaryMain hover:bg-gray-100"
      >
        Continue with Facebook
      </Button>
    </form>
  );
}
