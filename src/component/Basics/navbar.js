import React from 'react'

const navbar = ({filterItem,menuList}) => {
    return (
        <>
            <nav className="navbar">
            <div className="btn-group">

                {menuList.map((currElem)=>{
                    return(
                        <button className="btn-group__item" onClick={()=>{filterItem(currElem)}}>{currElem}</button>
                    );
                })}

                {/* <button className="btn-group__item" onClick={()=>{filterItem("evening")}}>Evening</button> */}
            </div>
            </nav>
            
        </>
    )
}

export default navbar
