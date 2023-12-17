import React, { useState } from 'react'
import "./ToDo.css"

const ToDo = () => {

  const [plans, setplans] = useState([])

  const submitHandler = (event) => {
    event.preventDefault();
    setplans([...plans, { id: plans.length + 1, plan: event.target.plans.value }])
    event.target.plans.value = '';
  }

  const deleteHandler = (id) => {
    const newplans = plans.filter((res) => res.id != id)
    setplans(newplans)
  }

  return (
    <div className='container'>
      <p className="title">ToDo Plans</p>
      <form onSubmit={(event) => submitHandler(event)}>
        <div className='input-wrapper'>
          <input type="text" name='plans' className='todoinput' placeholder='Type your todo plans' required />
          <button type='submit' className='submitbtn'>+</button>
        </div>
      </form>
      <p className='showplanslbl'>{plans.length == 0 ? 'No Plans' : 'Your Plans'}</p>
      {plans.length != 0 &&
        <ul className='allplans'>
          {
            plans.map((plan) => (
              <li key={plan.id} className='plantab'>
                <p className='actualplan'>{plan.plan}</p>
                <button className='deletebtn' onClick={() => deleteHandler(plan.id)}>X</button>
              </li>
            ))
          }
        </ul>

      }
    </div>
  )
}

export default ToDo;