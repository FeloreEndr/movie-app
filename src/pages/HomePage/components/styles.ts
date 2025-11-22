import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.75rem;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(55, 65, 81, 0.9);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.5);
`;

export const FormRow = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  color: #9ca3af;
`;

export const Input = styled.input`
  padding: 0.45rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid #4b5563;
  background: #020617;
  color: #e5e7eb;
  font-size: 0.9rem;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 1px;
    border-color: #3b82f6;
  }
`;

export const Select = styled.select`
  padding: 0.45rem 0.6rem;
  border-radius: 0.5rem;
  border: 1px solid #4b5563;
  background: #020617;
  color: #e5e7eb;
  font-size: 0.9rem;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 1px;
    border-color: #3b82f6;
  }
`;

export const SubmitRow = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: flex-end;
`;

export const PrimaryButton = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
  background: #3b82f6;
  color: #e5e7eb;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }

  &:focus-visible {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;

export const ListSection = styled.section`
  margin-top: 1.75rem;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
`;

export const Card = styled.article`
  background: rgba(15, 23, 42, 0.95);
  border-radius: 0.75rem;
  border: 1px solid rgba(55, 65, 81, 0.9);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.55);
`;

export const PosterWrapper = styled.div`
  position: relative;
  padding-top: 150%;
  background: radial-gradient(circle at top, #1f2937, #020617);
`;

export const Poster = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 0.75rem 0.8rem 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Title = styled.h3`
  font-size: 0.95rem;
  margin: 0;
`;

export const Meta = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #9ca3af;
`;

export const CardActions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const DetailsLink = styled(Link)`
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    border: 1px solid #4b5563;
    background: transparent;
    color: #e5e7eb;
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: rgba(30, 41, 59, 0.8);
        border-color: #93c5fd;
        text-decoration: none;
    }

    &:focus-visible {
        outline: 2px solid #93c5fd;
        outline-offset: 3px;
    }
`;


export const FavoriteButton = styled.button`
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  border: none;
  font-size: 0.8rem;
  background: #3b82f6;
  color: #e5e7eb;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;
