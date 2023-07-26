import React from 'react'

function Stats({items}) {

  const numItems = items.length

  const numPacked = items.filter(item=>items.packed).length

  const percentage =((numPacked /numItems) * 100 );
 
  return (
    <footer className='stats'>
      {/* if  */}
      {percentage === 100 ? 
      "You have packed everything"
      
        :
        <em>
    {" "}
        📃 You have {numItems} items on your list, and you have already packed {" "}
         {numPacked}({percentage}%)
         </em>
        }
    </footer>
  )
}

export default Stats