function Wrapper({children,color="blue"}){
    return(
        <div style={{color:color,margin:'10px', border:'3px solid black',width:'300px', padding:"5px"}}>
        {children}
        </div>
    )
}

export default Wrapper