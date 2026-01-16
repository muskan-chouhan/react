const Dropdown = () => {
    return(
       <div >
        <select defaultValue={'green'} onChange={(event)=>setCity(event.target.value)}>
            <option>green</option>
            <option>red</option>
            <option>yellow</option>
        </select>
       </div>
    )
}

export default Dropdown;