import { useNavigate } from 'react-router-dom';
import login from '../assets/onde.png'
import { useState, useContext } from 'react';
import Axios from "axios";
import { MyContext } from '../providers/userContextProvider';


function Login(){
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(MyContext);

  

  const handleButtonClick = () => {
    Axios.post("https://backend-onde.onrender.com/loginonde",{
      l: email,
      p: password,
    }).then((response) => {
      
      if (response.data.access) {
        updateUserData(email, password);
        navigate('/dashboard')
        
      } else {
        setError('Adresse e-mail ou mot de passe incorrect(s)! Veuillez saisir les identifiants corrects .')
      }
    }).catch((error) => {
      console.log(error);
      setError('server error')
    });
  };

    return(
        <section className="h-screen">
  <div className="h-full">
    
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div
        className="flex items-center justify-center shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src={login}
          className=" w-2/3"
           />
      </div>

      
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form>
          
          <div
            className="flex flex-row items-center justify-center lg:justify-start">
            <p className="mb-0 mr-4 text-lg">Sign in </p>

            
            
            
          </div>

          
          <div
            className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            {/* <p
              className="mx-4 mb-0 text-center font-semibold dark:text-white">
              Or
            </p> */}
          </div>

         <div>{error}</div>
          
          <div className="relative h-11 w-full min-w-[200px] my-5">
            <input placeholder="Email" type="email"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
              onChange={(event) => {
                setEmail(event.target.value);
              }}/>
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email address
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px] my-5">
            <input placeholder="Password" type="password"
              className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" 
              onChange={(event) => {
                setPassword(event.target.value);
              }}/>
            <label
              className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Password
            </label>
          </div>
          

          
          

          

          <div className="text-center lg:text-left">
            <button
              type="button"
              className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              onClick={handleButtonClick}>
              Login
            </button>

          </div>
        </form>
      </div>
    </div>
  </div>
</section>



      
    )
}

export default Login