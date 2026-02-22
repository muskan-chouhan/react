import styled from 'styled-components'
    const Container = styled.div`
      width: 350px;
      padding: 24px;
      border-radius: 8px;
      background: white;
      border:2px solid black;
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