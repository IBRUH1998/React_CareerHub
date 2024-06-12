import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai"
import { Link } from "react-router-dom";

const Job = ({job}) => {
    const{id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job ;

    return (
        <div>
            
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-40 h-32" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>

    <div className="flex items-center">
        <button className="px-5 py-2 border mr-2 rounded text-[#7E90FE] font-extrabold border-[#7E90FE]">{remote_or_onsite}</button>
        <button className="justify-start px-5 py-2 border rounded text-[#7E90FE] font-extrabold border-[#7E90FE]">{job_type}</button>
    </div>

    <div className="flex ">

        <div className="flex">
        <CiLocationOn className="text-2xl mr-2"></CiLocationOn>
        <p>{location}</p>
        <AiOutlineDollarCircle className="text-2xl mr-2 ml-8"></AiOutlineDollarCircle>
        <p>{salary}</p>
        </div>
        
    </div>
    <div className="card-actions">
     
     <Link to={`/job/${id}`}>
     <button className="btn btn-primary">View Details</button>
     </Link>
     
    </div>
  </div>
</div>
            
            
        </div>
    );
};

export default Job;