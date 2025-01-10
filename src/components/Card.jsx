function Card(props) {
    return <div>
        <div className="card" style={{width: "18 rem"}}>
  <img src={props.image} className="card-img-top" alt="..." style={{
    width: "250px",
    height: "175px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"}}/>

  
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <a href="#" className="btn btn-primary">AgÜaclikeame</a>
  </div>
</div>
    </div>
} 


export default Card;

//https://aguacatec.es/wp-content/uploads/2023/10/e5a978b8-6772-4c85-a50e-15581af7d483_clipdrop-cleanup-jpeg.webp