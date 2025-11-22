import styled from "styled-components";

export const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: radial-gradient(circle at top, #1f2937 0, #020617 55%);
  color: #e5e7eb;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
`;

export const AppHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(15, 23, 42, 0.92);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
`;

export const HeaderInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: #93c5fd;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  a {
    font-size: 0.9rem;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    border: 1px solid transparent;
    color: #e5e7eb;
  }

  a:hover {
    border-color: #3b82f6;
    background: rgba(15, 23, 42, 0.8);
    text-decoration: none;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 1.5rem 1rem 3rem;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;