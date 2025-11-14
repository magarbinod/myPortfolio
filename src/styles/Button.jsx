import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 14px 32px;
  font-weight: 600;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.variant === "primary" &&
    css`
      color: #000;
      background: linear-gradient(135deg, #ffc300 0%, #ffd60a 100%);
      margin-right: 1rem;
      &:hover {
        transform: translateY(-2px);
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background: transparent;
      border: 2px solid rgba(255, 255, 255, 0.47);
      color: white;
      backdrop-filter: blur(10px);
      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
      }
    `}
`;
