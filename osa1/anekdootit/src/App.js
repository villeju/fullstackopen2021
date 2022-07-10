import React, { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = (props) => {
  return (
    <div>
      {props.anecdotes}
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const totalVotes = Array(7).fill(0)
  const [votes, setVotes] = useState(totalVotes)
  const [mostPopular, setMostPopular] = useState(0) // Anecdote with the most votes

  // Vote -button is pressed:
  const newVote = () => {
    let totalVotesCopy = [...votes]

    totalVotesCopy[selected] += 1
    setVotes(totalVotesCopy)

    // Checking if current anecdote has more votes than the most popular anecdote
    if (votes[selected] >= votes[mostPopular]) {
      setMostPopular(selected)
    }
  }

 
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
      </div>
      <br></br>
      <div>
        <Anecdote anecdotes={anecdotes[selected]} />
      </div>
      <div>
        Has {votes[selected]} votes
      </div>
      <div> 
        <Button onClick={newVote} text='Vote' />
        <Button onClick={() => setSelected(Math.floor(Math.random() * 7))} text='Next anecdote'/> 
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <Anecdote anecdotes={anecdotes[mostPopular]}/>
        Has {votes[mostPopular]} votes.
      </div>
    </div>   
  )
}

export default App