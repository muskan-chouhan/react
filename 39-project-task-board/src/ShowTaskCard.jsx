const ShowCard = () => {
    const Container = styled.div`
      width: 350px;
      padding: 24px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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