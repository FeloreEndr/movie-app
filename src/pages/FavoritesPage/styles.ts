import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  margin: 0;
`;

export const BackLink = styled(Link)`
  font-size: 0.9rem;
  color: #93c5fd;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;

export const EmptyState = styled.p`
  margin: 0;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px dashed rgba(75, 85, 99, 0.9);
  color: #9ca3af;
  font-size: 0.9rem;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 0.75rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(55, 65, 81, 0.9);
  overflow: hidden;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(31, 41, 55, 0.9);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  span {
    font-size: 0.8rem;
    color: #9ca3af;
    text-transform: capitalize;
  }
`;

export const MovieLink = styled(Link)`
  font-size: 0.95rem;
  color: #e5e7eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;

export const RemoveButton = styled.button`
  padding: 0.35rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(248, 113, 113, 0.8);
  background: rgba(127, 29, 29, 0.5);
  color: #fecaca;
  font-size: 0.8rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(185, 28, 28, 0.8);
    border-color: rgba(252, 165, 165, 0.9);
  }

  &:focus-visible {
    outline: 2px solid #fecaca;
    outline-offset: 2px;
  }
`;
