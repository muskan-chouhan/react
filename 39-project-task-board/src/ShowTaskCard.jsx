import styled from "styled-components";

const TaskCard = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 3px 10px rgba(0,0,0,0.06);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.08);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const PriorityBadge = styled.span`
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 20px;

  background: ${({ priority }) =>
    priority === "High"
      ? "#ffe5e5"
      : priority === "Medium"
      ? "#fff4e5"
      : "#e6f9ec"};

  color: ${({ priority }) =>
    priority === "High"
      ? "#d32f2f"
      : priority === "Medium"
      ? "#ed6c02"
      : "#1b7a3c"};
`;

const Meta = styled.p`
  font-size: 13px;
  color: #777;
  margin-top: 10px;
`;

const ShowCard = ({ task, priority }) => {
  return (
    <TaskCard priority={priority}>
      <CardHeader>
        <Title>{task}</Title>
        <PriorityBadge priority={priority}>
          {priority}
        </PriorityBadge>
      </CardHeader>

      <Meta>Created just now</Meta>
    </TaskCard>
  );
};

export default ShowCard;