import { Link } from 'react-router-dom';
import login from '../assets/onde.png'
import { MyContext } from '../providers/userContextProvider';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
function Sidebar(){
   const { userData, updateUserData } = useContext(MyContext);
   const navigate = useNavigate();
   useEffect(() => {
      // Check if userData object is empty
      if (userData && Object.keys(userData).every(key => userData[key] === '')) {
        navigate('/login');
      }
    }, [userData, navigate]);
    
   const Logout=()=>{
      updateUserData('', '');
      navigate('/login')
   }

    return(
        <div>
        

 

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-sky-900">
      <ul class="space-y-2 font-medium">
      {/* <li>
      <img
          src={login}
          className="w-2/3 h-12"
           />
         </li> */}
         <li>
         <Link to="/dashboard"><a href="#" class="flex items-center p-2 text-white rounded-lg  group" >
            <span className="material-symbols-outlined" >Dashboard</span>
               <span class="ms-3">Dashboard</span>
               
            </a>
            </Link>
         </li>
         {/* <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <span className="material-symbols-outlined" >Diagnosis</span>
               <span class="ms-3 whitespace-nowrap">Pédopsychiatres</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
            <span className="material-symbols-outlined" >Done</span>
               <span class="ms-3 whitespace-nowrap">Cas suivies</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">3</span>
            </a>
         </li> */}
         
            
            <li class="absolute bottom-0 left-0 right-0">
        <a href="#" class="flex items-center p-2 text-white rounded-lg  group"
        onClick={Logout}>
            <span className="material-symbols-outlined" >Logout</span>
               <span class="flex-1 ms-3 whitespace-nowrap" >Sign Out</span>
            </a>
         </li>

      </ul>
   </div>
</aside>




</div>
    )
}

export default Sidebar