import { Link, useNavigate } from "react-router-dom"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useState } from "react";
import data from '../assets/data.json'

function ComplaintForm(props){
    const [selectedOption, setSelectedOption] = useState('');

  
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
    
    const path = `/complaint/${props.complaint._id}`
    return(
        <tr className="odd:bg-white even:bg-gray-50 border-b" >
            <Link to={path} >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    
                    
                    <div>
                    
                    {props.complaint.Profile["Prenom"]+" "+props.complaint.Profile["Nom"] }, age:{props.complaint.Profile["Age"]}
                    </div>
                </th>
                </Link>
                <td className="px-6 py-4">
                {props.complaint.type}
                </td>
                <td className="px-6 py-4">
                {formatDistanceToNow(new Date(props.complaint.createdAt), { addSuffix: true})}
                </td>
                <td className="px-6 py-4">
                {props.complaint.importance}
                </td>
                <td className="px-6 py-4">
                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="block w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                    <option value="">Select...</option>
                    {data.map((option, index) => (
                        <option key={index} value={option.Nom} className="text-black-900">
                            {option.Nom}
                        </option>
                        ))}
                    
                </select>
                </td>
                
            </tr>
    )
}

export default ComplaintForm