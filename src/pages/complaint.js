import Header from "../components/header"
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import boy from '../assets/boy.png'
import girl from '../assets/girl.png'
import qa from '../assets/qa.json'




function Complaint(){
   const { id } = useParams();
   const [complaint , setComplaint] = useState([])
   const [profile, setProfile]= useState({})
   const [answers, setAnswers]= useState({})
   const questions = qa;


   useEffect(() => {
      Axios.get(`https://backend-onde.onrender.com/plaintes/${id}`) 
        .then((response) => {
          setComplaint(response.data); 
          setProfile(response.data.Profile)
          setAnswers(response.data.data)
          console.log(complaint)
        })
        .catch((error) => {
          console.error('Error fetching plainte:', error);
        });
    }, []); 

    return(
        <div class="px-2 sm:ml-64">
   <div class=" border-gray-200  rounded-lg">
        <Header />
      <div class=" mb-4">
      <div class="w-full">
        <div class="container mx-auto px-4 py-2">
        <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-4 text-sky-700">Rapport de plainte</h1>
      {/* <div>
        
        <p>{complaint.createdAt}</p>
      </div> */}
    </div>

      <div className="bg-white rounded-lg p-6 mb-6 border border-gray-300">
         

      <h2 className="text-lg font-bold mb-4">Informations sur la victime</h2>
            <div className="flex flex-col space-y-2">
                        <div className="flex items-center">
                        {profile["genre"] === "fille" ? (
                           <img className="w-32 rounded-lg" src={girl} alt="Profile" />
                        ) : (
                           <img className="w-32 rounded-lg" src={boy} alt="Profile" />
                        )}
                          
                                    <div className="ml-4">
                                       <p className="text-gray-700">
                                          <span className="font-semibold">Nom:</span> {profile["Nom"]}
                                       </p>
                                       <p className="text-gray-700">
                                          <span className="font-semibold">Prénom:</span> {profile["Prenom"]}
                                       </p>
                                       <p className="text-gray-700">
                                          <span className="font-semibold">Genre:</span> {profile["genre"]}
                                       </p>
                                       <p className="text-gray-700">
                                          <span className="font-semibold">Age:</span> {profile["Age"]}
                                       </p>
                                       <p className="text-gray-700">
                                          <span className="font-semibold">Ville:</span> {profile["Ville"]}
                                       </p>
                                       <p className="text-gray-700">
                                          <span className="font-semibold">Ecole:</span> {profile["Ecole"]}
                                       </p>
                                    </div>
                        </div>

               
               </div>
      </div>

                           
                  <div className="bg-white rounded-lg p-6 mb-6 border border-gray-300">
                  <h2 className="text-lg font-bold mb-4">Type </h2>
                           <p className="mb-4">{complaint.type}</p>
                  <h2 className="text-lg font-bold mb-4">Description</h2>
                  
                  {questions.map((question) => (
                     <div className="flex items-center space-x-4" key={question.id}>
                     <p className="text-lg ">{question.q}</p>
                     <p className="text-gray-800 font-semibold">{answers[question.id]}</p>
                     </div>
                  ))}

                  </div>


            
        </div>
    </div>
    </div>
      </div>
   
</div>
    )
}

export default Complaint