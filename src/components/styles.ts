import styled from "styled-components";

export const Wrapper = styled.nav`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PageSizeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #9ca3af;
`;

export const PageSizeSelect = styled.select`
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  border: 1px solid #4b5563;
  background: #020617;
  color: #e5e7eb;
  font-size: 0.85rem;

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Button = styled.button`
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  border: 1px solid #4b5563;
  background: transparent;
  color: #e5e7eb;
  cursor: pointer;
  font-size: 0.85rem;
  min-width: 65px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: rgba(15, 23, 42, 0.9);
    border-color: #93c5fd;
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;

export const Info = styled.span`
  font-size: 0.85rem;
  color: #9ca3af;
`;
