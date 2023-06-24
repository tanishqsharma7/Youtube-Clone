import React from 'react'

export const CategoryButton = (props) => {
  return (
    <div>
        <button className="px-4 py-1 m-4 bg-gray-200 rounded-lg">
            {props.name}
        </button>
    </div>
  )
}


export default CategoryButton;