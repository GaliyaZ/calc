import { useState } from 'react'

function Button({val}) {
  const [value, setValue] = useState(0)

  return (
        <button className='bg-blue-900 text-blue-200'>{val}</button>
  )
}

export default Button
