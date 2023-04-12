import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const {loading, data} = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if(loading) return
    setFollowers(data[page])
  }, [loading, page])

  const handlePage = (index) => {
    setPage(index)
  }

  if(loading) return (<h1 className="loading">Loading ....</h1>)

  return (
    <main>
      <div className="section-title">
          <h1>Pagination</h1>
          <div className="underline"></div>
      </div>

      <section className="followers">
        <div className="container">
        {
           followers.map((follower) => {
           return <Follower key={follower.id} {...follower} />
           })
        }
        </div>
        <div className="btn-container">

          {page !== 0 && 
            <button className="prev-btn"  onClick={() => handlePage(page - 1)}>Prev</button>
          }

          {data.map((item,index) => {
            return (
              <button  className={`page-btn ${index === page ? 'active-btn' : null}`}
              key={index} onClick={() => handlePage(index)}>{index + 1}</button>
            )
          })}

          {(page+1) !== data.length && 
          <button className="next-btn"  onClick={() => handlePage(page + 1)}>Next </button>
          }

        </div>
      </section>
    </main>
  )
}

export default App
