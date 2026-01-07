function Card({title,Category,price}){
    return(
              
        <div className="card">

          <h2 className="course-title">{title}</h2>

          <div className="info">
            <span className="label">Category</span>
            <span className="value">{Category}</span>
          </div>

          <div className="info">
            <span className="label">Price</span>
            <span className="value free">{price}</span>
          </div>

          <button className="btn">Add Course</button>

        </div>
   
    )
}

export default Card