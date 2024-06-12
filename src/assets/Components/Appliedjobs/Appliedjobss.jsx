import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredJobApplication } from '../Utility/localStorage'


const Appliedjobss = () => {
  const jobs = useLoaderData()
  const [myAppliedJobs, setMyAppliedJobs] = useState([])
  useEffect(() => {
    const storedJobIds = getStoredJobApplication()
    if (jobs.length > 0) {
      // type 1
      //const jobsApplied = jobs.filter(job=>storedJobIds.includes(job.id)) ;
      //console.log(jobs,storedJobIds,jobsApplied)
      // type 2
      const jobsApplied = []
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id)
        if (job) {
          jobsApplied.push(job)
        }
      }
      setMyAppliedJobs(jobsApplied)
    }
  }, [])
  return (
    <div>
      <h1>Jobs i applied : {myAppliedJobs.length} </h1>

      <ul>
        {myAppliedJobs.map((job) => (
          <li key={job.id}>
            <span>{job.job_title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Appliedjobss
