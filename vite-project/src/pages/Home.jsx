// eslint-disable-next-line no-unused-vars
import React from 'react';
import MKBox from '../components/MKBox';  // Ajustando o caminho de importação
import { Heading, Paragraph, Button } from '../styles/SharedStyles';

function Home() {
  return (
    <MKBox
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Heading>Seja bem-vindo à Epiphany</Heading>
      <Paragraph>Sua empresa parceira em soluções de IA.</Paragraph>
      <Button>Saiba mais Sobre</Button>
    </MKBox>
  );
}

export default Home;
