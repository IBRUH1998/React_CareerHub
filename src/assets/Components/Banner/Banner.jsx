const Banner = () => {
  return (
    <div>

        <div className="flex justify-between items-center flex-col lg:flex-row">
        <div className="text-center text-3xl text-zinc-900 ">
            <h1>looking for a rewarding career in sales? We're looking for motivated individuals to join our team.</h1>
          <h1>Choise your career with us </h1>
          <button className="btn btn-primary mt-4">Join Us</button>
        </div>
        
        <div className="text-center">
          <img className="max-w-sm " src="/public/user.png" alt="" />
        </div>
      </div>
        </div>
     
    </div>
  )
}

export default Banner
