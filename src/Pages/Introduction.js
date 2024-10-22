import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaBloggerB} from 'react-icons/fa';
import { TfiClose } from "react-icons/tfi"
import { RiAsterisk } from "react-icons/ri";
import Profile from '../Images/profile.png';

function Introduction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PortfolioContainer>
      <TopSection>
        <PortfolioLeft>
          <ProfileCircle>
            <AnimatedProfile src={Profile} alt="박지혜" />
          </ProfileCircle>
        </PortfolioLeft>

        <PortfolioRight>
          <Name>박지혜</Name>
          <Title>프론트엔드 개발자</Title>
          <Description>
            "새로운 언어와 기술을 빠르게 익혀 프로젝트에 적용하는 능력이 있습니다. 회의에서는 창의적이면서도 실용적인 아이디어를 제안해, 팀이 더 나은 방향으로 나아가는 데 기여합니다. 다양한 접근법을 고민하며 문제 해결 과정에서 적극적으로 참여합니다."
          </Description>

          <IconsContainer>

            <IconLink onClick={openModal}>
              <FaGithub size={30} />
            </IconLink>
            
            <IconLink href="https://front-ji.tistory.com/" target="_blank" rel="noopener noreferrer">
              <FaBloggerB size={30} />
            </IconLink>
  
          </IconsContainer>
        </PortfolioRight>
      </TopSection>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <TfiClose size={20} />
            </CloseButton>
            <h2>GitHub Repositories</h2>
            <RepoContainer>
              <RepoItem>
                <IconLink href="https://github.com/parkjihye1?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </IconLink>
                <RepoText>[개인 프로젝트]</RepoText>
              </RepoItem>
              <RepoItem>
                <IconLink href="https://github.com/TEAM-SPACE-1/limit-client" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={30} />
                </IconLink>
                <RepoText>[팀 프로젝트]</RepoText>
                <RepoSubText><StyledAsterisk size={10} marginLeft={5}  />현재 개발 중이며, 해당 레포지토리는 비공개로 처리되어 있습니다.</RepoSubText>
              </RepoItem>
            </RepoContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const PortfolioLeft = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ProfileCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: rgba(63, 135, 79, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    width: 270px;
    height: 270px;
  }

  @media (max-width: 960px) {
    width: 240px;
    height: 240px;
  }

  @media (max-width: 840px) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: 780px) {
    width: 215px;
    height: 215px;
  }

  @media (max-width: 720px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 600px) {
    width: 130px;
    height: 130px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 360px) {
    width: 90px;
    height: 90px;
  }
`;

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const AnimatedProfile = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  animation: ${bounceAnimation} 2s infinite;
`;

const PortfolioRight = styled.div`
  width: 63%;

  @media (max-width: 1200px) {
    width: 62.5%;
  }

  @media (max-width: 960px) {
    width: 62%;
  }

  @media (max-width: 840px) {
    width: 61%;
  }

  @media (max-width: 780px) {
    width: 60.5%;
  }

  @media (max-width: 720px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 57%;
  }

  @media (max-width: 600px) {
    width: 55%;
  }
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: -10px;

  @media (max-width: 720px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #777;
  margin-bottom: 20px;

  @media (max-width: 720px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 720px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const IconsContainer = styled.div`
  margin-bottom: 30x;
  display: flex;

  @media (max-width: 720px) {
    margin-bottom: 20px;
  }
`;

const IconLink = styled.a`
  font-size: 2rem;
  color: #333;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    color: darkgray;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 10px;
  max-width: 600px;
  width: 80%;
  text-align: center;
  position: relative;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const RepoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const RepoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RepoText = styled.span`
  font-size: 1rem;
  margin-left: 5px;
  color: #333;
  margin-bottom: 5px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const RepoSubText = styled.span`
  font-size: 0.8rem;
  margin-left: 5px;
  margin-bottom: 3px;
  color: #333;
  color: gray;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

const StyledAsterisk = styled(RiAsterisk)`
  margin-right: 5px;
`;

export default Introduction;
