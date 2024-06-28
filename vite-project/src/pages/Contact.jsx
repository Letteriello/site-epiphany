// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Container, Heading, Paragraph, Button } from '../styles/SharedStyles';

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  font-size: 1rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ContactContainer = styled(Container)`
  text-align: center;
`;

function Contact() {
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <Paragraph>We'd love to hear from you! Please fill out the form below to get in touch.</Paragraph>
      <ContactForm>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows="4" required></Textarea>

        <Button type="submit">Submit</Button>
      </ContactForm>
    </ContactContainer>
  );
}

export default Contact;
