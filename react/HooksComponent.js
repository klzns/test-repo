import React, { useState } from 'react'

function HelloWorld({ data }) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>{count} clicks</span>
      <button onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  )
}

export default HelloWorld