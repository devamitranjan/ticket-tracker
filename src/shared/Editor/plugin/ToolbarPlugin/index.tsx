import React from "react";
import styled from "styled-components";

interface ToolbarPluginProps extends React.HTMLAttributes<HTMLDivElement> {}

const ToolbarPlugin: React.FC<ToolbarPluginProps> = () => {
  return <ToolbarPluginContainer>TODO Item</ToolbarPluginContainer>;
};

const ToolbarPluginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export default ToolbarPlugin;
