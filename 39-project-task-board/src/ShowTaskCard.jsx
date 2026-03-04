import styled from "styled-components";

const Card = styled.div`
  padding: 18px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 12px rgba(13, 3, 3, 0.05);
  min-height: 105px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-top: 4px solid
    ${({ priority }) =>
      priority === "High"
        ? "#ef4444"
        : priority === "Medium"
        ? "#f9a30d"
        : "#10b981"};

  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.08);
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: #071228;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Meta = styled.span`
  font-size: 12px;
  color: #9ca3af;
`;

const Badge = styled.span`
  padding: 4px 10px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 20px;

  background: ${({ priority }) =>
    priority === "High"
      ? "#fee2e2"
      : priority === "Medium"
      ? "#fef3c7"
      : "#d1fae5"};

  color: ${({ priority }) =>
    priority === "High"
      ? "#b91c1c"
      : priority === "Medium"
      ? "#b45309"
      : "#065f46"};
`;

const ShowCard = ({ task, priority }) => {
  return (
    <Card priority={priority}>
      <Title>{task}</Title>

      <Footer>
        <Meta>Created just now</Meta>
        <Badge priority={priority}>{priority}</Badge>
      </Footer>
    </Card>
  ); 
  
};

export default ShowCard;      