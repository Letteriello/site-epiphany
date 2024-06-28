import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  padding-top: 60px;  // Compensar a altura da navbar
  width: 100%;
  background: #f8f9fa;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  color: #666;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1.5rem;
`;
