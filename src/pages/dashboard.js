import Header from "../components/header"
import Axios from "axios";
import { useState, useEffect } from "react";
import ComplaintForm from "../components/complaintForm";
function Layout(){
    const [priorityFilter, setPriorityFilter] = useState('All');

    const handlePriorityChange = (event) => {
        setPriorityFilter(event.target.value);
    };
    const [complaints, setComplaints] = useState([])

    useEffect(() => {
        Axios.get('https://backend-onde.onrender.com/plaintes')
          .then((response) => {
            setComplaints(response.data);
          })
          .catch((error) => {
            
            console.error('Error fetching plaintes:', error);
          });
      }, []);
      
    return(
        <div>
            

            <div class=" sm:ml-64">
   <div class=" border-gray-200  rounded-lg">
        <Header />
        <div className="p-5">
        <div className="flex justify-between">
      <h1 className="text-2xl font-bold mb-4 text-sky-700">Plaintes</h1>
      <div className="w-1/4">
      
      
        <select
        aria-placeholder="filter"
          id="priorityFilter"
          name="priorityFilter"
          value={priorityFilter}
          onChange={handlePriorityChange}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm"
        >
          <option value="All">All</option>
          <option value="urgent">Urgent</option>
          <option value="assez urgent">Assez urgent</option>
          <option value="normale">Normale</option>
        </select>
        </div>
    </div>
        
     
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-blue-100  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Profile
                </th>
                <th scope="col" className="px-6 py-3">
                    Type
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Priorité
                </th>
                <th scope="col" className="px-6 py-3">
                    Pédopsychiatres
                </th>
               
            </tr>
        </thead>
        <tbody>
            {complaints &&
                complaints.map((complaint) => {
                if (priorityFilter === "All") {
                    return <ComplaintForm key={complaint._id} complaint={complaint} priority={priorityFilter} />;
                } else {
                    return complaint.importance === priorityFilter && <ComplaintForm key={complaint._id} complaint={complaint} />;
                }
                })}
            </tbody>
    </table>
</div>
</div>
</div>

        </div>
        

    )
}
export default Layout