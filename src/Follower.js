import React from 'react'

const Follower = (item) => {

  const {avatar_url, login, html_url} = item;
  return (
    <article className="card">
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url} className="btn" target='_blank' rel="noreferrer">view profile</a>
            </article>
  )
}

export default Follower
