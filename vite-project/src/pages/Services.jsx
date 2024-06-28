// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Container, Heading, SubHeading, Paragraph } from '../styles/SharedStyles';

const ServicesContainer = styled(Container)`
  text-align: center;
`;

function Services() {
  return (
    <ServicesContainer>
      <Heading>Our Services</Heading>
      <SubHeading>AI Consultation</SubHeading>
      <Paragraph>Our experts provide personalized AI consultation to help you understand and implement AI solutions tailored to your business needs.</Paragraph>
      <SubHeading>Custom AI Solutions</SubHeading>
      <Paragraph>We develop custom AI solutions that integrate seamlessly with your existing systems to improve efficiency and productivity.</Paragraph>
      <SubHeading>Data Analysis and Visualization</SubHeading>
      <Paragraph>Our data analysis and visualization services help you gain valuable insights from your data and make informed decisions.</Paragraph>
      <SubHeading>Machine Learning Models</SubHeading>
      <Paragraph>We build and deploy machine learning models to solve complex problems and drive innovation in your business.</Paragraph>
      <SubHeading>AI Integration</SubHeading>
      <Paragraph>We assist with the integration of AI technologies into your existing infrastructure to maximize their potential and impact.</Paragraph>
    </ServicesContainer>
  );
}

export default Services;
