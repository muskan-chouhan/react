const ShowCard = () => {
    const Container = styled.div`
      width: 350px;
      padding: 24px;
      border-radius: 8px;
      background: white;
      border:2px solid black;
    `
    return (
            <div>
                <h1>Task Card</h1>
                <h2>Data</h2>
                <h2>Low</h2><span></span>
            </div>
  
    )
}
export default ShowCard;