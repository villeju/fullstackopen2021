import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
)

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        ei annettuja palautteita
      </div>
    )
  }
  return (    
    <table>
      <tbody>
        <StatisticLine text="Hyvä" value ={props.good} />
        <StatisticLine text="Neutraali" value ={props.neutral} />
        <StatisticLine text="Huono" value ={props.bad} />
        <StatisticLine text="Yhteensä" value ={props.good + props.neutral + props.bad} />
        <StatisticLine text="Keskiarvo" value ={props.avg / (props.good + props.neutral + props.bad)} />
        <StatisticLine text="Positiivisia" value ={(props.good / (props.good + props.neutral + props.bad)) * 100 + ' %'} />
      </tbody>
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAverage] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAverage(avg + 1)
    setAll(allClicks.concat('hyvä'))
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAverage(avg)
    setAll(allClicks.concat('neutraali'))
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAverage(avg - 1)
    setAll(allClicks.concat('huono'))
  }

  return (
    <div>
      <div style={{fontSize: 30, fontWeight: 'bold'}}>
          Anna palautetta
      </div>
      <div>
        <br></br>
      </div>
      <div>
        <Button handleClick={handleGoodClick} text='hyvä' />
        <Button handleClick={handleNeutralClick} text='neutraali' />
        <Button handleClick={handleBadClick} text='huono' />
      </div>
      <div>
        <br></br>
      </div>
      <div style={{fontSize: 30, fontWeight: 'bold'}}>
        Tilastot
      </div>
      <br></br>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} avg={avg} allClicks={allClicks} />
      </div>
      
    </div>
  )
}

export default App