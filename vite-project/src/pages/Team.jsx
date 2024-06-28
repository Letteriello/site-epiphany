// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Container, Heading, SubHeading, Paragraph } from '../styles/SharedStyles';

const TeamContainer = styled(Container)`
  text-align: center;
`;

function Team() {
  return (
    <TeamContainer>
      <Heading>Our Team</Heading>
      <SubHeading>Gabriel Letteriello - Founder & CEO</SubHeading>
      <Paragraph>Gabriel leads Epiphany with a vision for leveraging AI to drive business success.</Paragraph>
      <SubHeading>Front-end Developer - Specializes in React</SubHeading>
      <Paragraph>Our front-end developer crafts engaging user experiences using React.</Paragraph>
      <SubHeading>Back-end Developer - Expert in Node.js and Express</SubHeading>
      <Paragraph>Our back-end developer ensures robust and scalable server-side solutions.</Paragraph>
      <SubHeading>AI Specialist - Machine Learning and Data Science</SubHeading>
      <Paragraph>Our AI specialist designs and implements advanced machine learning models.</Paragraph>
      <SubHeading>UX/UI Designer - Focus on user experience and design</SubHeading>
      <Paragraph>Our designer creates intuitive and attractive interfaces for our applications.</Paragraph>
    </TeamContainer>
  );
}

export default Team;
