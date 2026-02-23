import styled from 'styled-components'
    const Container = styled.div`
      width: 100%;
      padding: 24px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    `
const ShowCard = () => {
    return (
            <Container>
                <h1>Task Card</h1>
                <h2>My Task</h2>
                <h2>Low</h2><span></span>
            </Container>
  
    )
}
export default ShowCard;