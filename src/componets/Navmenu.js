import React from 'react'

const Navmenu = ({items,isLoading}) => {

    return isLoading ? (<h1>Loading...</h1>):(<div> {items.map(item=>(
        <a href='#'>{item}</a>
    ))} </div>)
}

export default Navmenu
