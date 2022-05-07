import { useState } from 'react'
import { Widget } from './components/Widget'

function Button() {
  const [count, setCount] = useState(0)
  return <button className='bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors' onClick={() => setCount(count + 1)}>CONTADOR: {count}</button>
}

export function App() {
  return (
    <div>
      <Widget />
    </div>
  )
}

