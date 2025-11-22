import styled from "styled-components";
import { Link } from "react-router-dom";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const StatusText = styled.p`
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #e5e7eb;
`;

export const Article = styled.article`
  margin-top: 0.5rem;
  padding: 1rem 1.25rem 1.25rem;
  border-radius: 0.9rem;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid rgba(55, 65, 81, 0.95);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export const MetaRow = styled.div`
  margin-top: 0.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9rem;
  color: #9ca3af;
`;

export const Genre = styled.span`
  font-size: 0.8rem;
  color: #e5e7eb;
`;

export const RatingTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
  background: radial-gradient(circle at top, #facc15, #b45309);
  color: #111827;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FavoriteButton = styled.button`
  display: inline-flex;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  border: none;
  font-size: 0.85rem;
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

export const Content = styled.section`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 260px) minmax(0, 1.5fr);
  }
`;

export const PosterWrapper = styled.div`
  border-radius: 0.75rem;
  overflow: hidden;
  background: radial-gradient(circle at top, #1f2937, #020617);
  border: 1px solid rgba(55, 65, 81, 0.9);
  max-width: 260px;
`;

export const Poster = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1rem;
  margin: 0.25rem 0 0.1rem;
`;

export const SectionParagraph = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #e5e7eb;
  line-height: 1.5;
`;
