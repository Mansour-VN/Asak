
const SearchBox = () => {


  return (
    <div className="hero rounded-xl bg-base-200 mt-4 " >
      <div className="hero-content flex-col lg:flex-row md:w-full md:justify-around">
        <img src="/assets/image/logo/dian.svg" className="max-w-sm rounded-xl shadow-2xl bg-orange-400" />
        <div>
          <h1 className="text-2xl md:text-5xl font-bold text-right">  با آساک مطمئن قدم بردارید  </h1>
            <p className="font-semibold text-right mt-4"> با خیال راحت همراه همیشگی آساک باشید</p>
          <p className="text-right">
            دلیل اعتماد شما به آساک حاصل چندین سال تجریه و کار حرفه ای ماست
          </p>
          <div className="form-control pt-2">
            <div className="input-group">
              <input type="text" placeholder="جستجو" className="input input-bordered w-full text-right" />
              <button className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SearchBox;