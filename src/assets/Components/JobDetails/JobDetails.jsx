import { useLoaderData, useParams } from 'react-router-dom'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { MdOutlineSubtitles } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { saveJobApplication } from '../Utility/localStorage'

const JobDetails = () => {
  const jobs = useLoaderData()
  const { id } = useParams()
  const intId = parseInt(id)
  const job = jobs.find((job) => job.id === intId)
  console.log(job)

  const handleApplicationJob = () => {
    saveJobApplication(intId) ;
    toast('Successfully applied')
  }

  return (
    <div>
      <h4 className="text-3xl mb-2">Job Details of :{job.job_title}</h4>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3"></div>

        <div className="border">
          <div className="card w-96 bg-blue-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Job Details</h2>
              <div className="flex items-center">
                <AiOutlineDollarCircle className=" mr-2"></AiOutlineDollarCircle>
                <p>Salary: {job.salary}</p>
              </div>
              <div className="flex items-center">
                <MdOutlineSubtitles className="mr-2" />
                <p>Job title: {job.job_title}</p>
              </div>

              <div>
                <h1>Contact Information</h1>
                <hr />

                <div className="flex items-center">
                  <FaPhoneAlt className="mr-2" />
                  <p>Phone : {job.contact_information.phone}</p>
                </div>
                <div className="flex items-center">
                  <MdEmail className="mr-2" />
                  <p>Email: {job.contact_information.email}</p>
                </div>
                <div className="flex items-center">
                  <FaLocationDot className="mr-2" />
                  <p>Address: {job.contact_information.address}</p>
                </div>
              </div>
              <div className="card-actions w-full">
                <button
                  onClick={handleApplicationJob}
                  className="btn btn-primary w-full"
                >
                  Apply job
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  )
}

export default JobDetails
