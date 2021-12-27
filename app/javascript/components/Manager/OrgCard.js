import React, { useState } from 'react'

const OrgCard = (props) => {
  const [edit, setState] = useState(false)

  return <div>
    {edit ?
      <OrgForm setState={setState} org={props.org} /> :
      <OrgInfo setState={setState} org={props.org} />}
  </div>
}

const OrgInfo = ({ org, setState }) => {
  return (
    <div>
      <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
        <div className="card-header">{org.name}</div>
        <div className="card-body">
          <h5 className="card-title">{org.oof}</h5>
          <p className="card-text">{org.unp}</p>
          <div><button onClick={() => setState(true)} className="btn btn-light">Изменить</button></div>
        </div>
      </div>
    </div>
  )
}

const OrgForm = ({ org, setState }) => {

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`/organizations/1`,{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    setState(false)
  }

  const [values, setValues] = useState({ ...org })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card text-white bg-dark mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">
            <input onChange={handleChange} name='name' defaultValue={org.name} />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <input onChange={handleChange} name='oof' defaultValue={org.oof}/>
            </h5>
            <p className="card-text">
            <input onChange={handleChange} name='unp' defaultValue={org.unp}/>
            </p>
            <div><button onClick={handleSubmit} className="btn btn-light">CoxpaHutb</button></div>
          </div>
        </div>
      </form>
    </div>
  )
}


export default OrgCard
