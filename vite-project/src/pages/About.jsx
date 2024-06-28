// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Container, Heading, Paragraph, Image } from '../styles/SharedStyles';

const AboutContainer = styled(Container)`
  text-align: center;
  text-justify: inter-word;
  padding: 100px;
`;

const HeadingWrapper = styled.div`
  margin-bottom: 20px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

const ParagraphWrapper = styled.div`
  margin-bottom: 20px;
`;

function About() {
  return (
    <AboutContainer>
      <HeadingWrapper>
        <Heading>Sobre a Epiphany</Heading>
      </HeadingWrapper>
      <ImageWrapper>
        <Image src="/caminho/para/imagem.jpg" alt="Sobre a Epiphany" />
      </ImageWrapper>
      <ParagraphWrapper>
        <Paragraph style={{ textAlign: 'justify' }}>A Epiphany é uma empresa líder em soluções de IA, dedicada a ajudar as empresas a aproveitar o poder da inteligência artificial para alcançar seus objetivos. Nossa missão é fornecer soluções inovadoras de IA que impulsionem eficiência, produtividade e crescimento.</Paragraph>
      </ParagraphWrapper>
      <ParagraphWrapper>
        <Paragraph style={{ textAlign: 'justify' }}>Fundada por Gabriel Letteriello e Eduardo Terrone, a Epiphany reúne uma equipe de especialistas em IA, desenvolvimento front-end e back-end e design UX/UI para oferecer soluções abrangentes e eficazes adaptadas às necessidades de nossos clientes.</Paragraph>
      </ParagraphWrapper>
    </AboutContainer>
  );
}

export default About;
