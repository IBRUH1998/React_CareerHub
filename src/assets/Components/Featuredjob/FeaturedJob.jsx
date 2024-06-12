import { useEffect, useState } from 'react'
import Job from '../Job/Job'

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([])
  const [dataLength, setDatalength] = useState(4)

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data))
  }, [])
  return (
    <div>
      <div>
        <h2 className="text-center text-4xl">Featured job :{jobs.length}</h2>
        <p className="text-center">
          Explore thousands job oppurtunity with all the information.It will
          help you to make better future
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={dataLength === jobs.length && 'hidden'}>
        <button
          onClick={() => setDatalength(jobs.length)}
          className="btn px-5 py-2 border mr-2 rounded text-[#7E90FE] font-extrabold border-[#7E90FE]"> show me
        </button>
      </div>
    </div>
  )
}

export default FeaturedJob
