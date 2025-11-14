import { data } from "framer-motion/client";
import React from "react";
import styled from "styled-components";

const StyledBadge = styled.span`
  /* ============================================================ */

  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 50px;
  color: #000000;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  animation: cw-zoomIn 0.6s ease-out;
`;

const Badge = ({subTitle}) => {
 
  return (
    <div>
      <StyledBadge>
        <i className="bi bi-code-slash me-2"></i>{subTitle}
      </StyledBadge>
    </div>
  );
};

export default Badge;
