import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}

const LoginModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const appElement = document.getElementById('__next');
    if(appElement)
    Modal.setAppElement(appElement);
  }, []);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle authentication here
  };

 
// ...

return (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="flex items-center justify-center"
  >
    <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-4 text-secondaryMain">Sign In</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-secondaryMain rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
          	className= "shadow appearance-none border border-secondaryMain rounded w-full py2 px3 text-gray700 leading-tight focus:outline-none focus:shadow-outline" 
             id= "password" 
             type= "password" 
             value= {password}
             onChange={(event) => setPassword(event.target.value)}
           />
        </div>
        <div className= "flex items-center justify-between">
          <button 
           type= "submit" 
           className= "bg-secondaryMain hover:bg-blue700 text-white font-bold py2 px4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
          <a href="#forgot-password" 
          	className= "inline-block align-baseline font-bold text-sm text-blue500 hover:text-blue800">Forgot Password?</a>
        </div>
      </form>

      {/* Add Google and Facebook authentication buttons here */}
      <p>OR</p>

      {/* Add Google and Facebook authentication buttons here */}
     	<button onClick={() => {/* handle Google authentication here */}}className = 'bg-white hover:bg-gray100 text-secondaryMain font-semibold py1 px4 border border-secondaryMain rounded shadow'>
        Sign in with Google
        {/* Add Google icon */}
       	<GoogleIcon  />
      	</button>
      	<button onClick={() => {/* handle Facebook a
uthentication here */}}className = 'bg-white hover:bg-gray100 text-secondaryMain font-semibold py1 px4 border border-secondaryMain rounded shadow'>
        	Sign in with Facebook
        	{/* Add Facebook icon */}
        	<FacebookIcon  />
      	</button>

      {/* Create account button */}
      	<button className = 'bg-white hover:bg-gray100 text-secondaryMain font-semibold py1 px4 border border-secondaryMain rounded shadow'>Create Account</button>	
    </div>
  </Modal>

  );
};

export default LoginModal