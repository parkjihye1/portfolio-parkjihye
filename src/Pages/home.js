import React, { useRef } from 'react';
import styled from 'styled-components';
import Projects from './project';
import Introduction from './Introduction';
import Skills from './Skills';
import Certificates from './Certificates';
import Contact from './Contact';

function Home() {
  // 각 섹션에 대한 ref 생성
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const contactRef = useRef(null);

  // 해당 섹션으로 스크롤하는 함수
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 투명한 네비게이션 바 */}
      <NavBar>
        <NavButton onClick={() => scrollToSection(introRef)}>Introduction</NavButton>
        <NavButton onClick={() => scrollToSection(skillsRef)}>Skills</NavButton>
        <NavButton onClick={() => scrollToSection(projectsRef)}>Projects</NavButton>
        <NavButton onClick={() => scrollToSection(certificatesRef)}>Certificates</NavButton>
        <NavButton onClick={() => scrollToSection(contactRef)}>Contact</NavButton>
      </NavBar>

      <PortfolioContainer>
        <Section ref={introRef}>
          <Introduction />
        </Section>

        <Section ref={skillsRef}>
          <Skills />
        </Section>

        <Section ref={projectsRef}>
          <Projects />
        </Section>

        <Section ref={certificatesRef}>
          <Certificates />
        </Section>

        <Section ref={contactRef}>
          <Contact />
        </Section>
      </PortfolioContainer>
    </>
  );
}

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8); /* 투명한 배경 */
  z-index: 999;
  padding: 10px 0;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {

    align-items: center;
    padding: 5px 0; /* 패딩을 줄여 더 작은 공간을 차지하도록 */
  }
`;

const NavButton = styled.button`
  background: none;
  border: none;
  margin: 0 15px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  outline: none;
  padding: 10px;
  transition: color 0.3s;

  &:hover {
    color: rgba(63, 135, 79, 0.8); 
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;

const PortfolioContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-type: y mandatory; /* 세로 방향으로 스크롤 스냅 */
  overflow-y: scroll; /* 스크롤 가능하게 설정 */
`;

const Section = styled.div`
  width: 100%;
  scroll-snap-align: start; /* 섹션 시작 부분에 스냅 */
  /* 섹션 높이를 따로 설정하지 않아서 기존 설정된 높이를 유지합니다 */
`;

export default Home;
