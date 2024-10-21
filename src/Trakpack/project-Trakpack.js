import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function ProjectTrakpack() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadMeClick = () => {
    navigate('/trakpack');
  };

  const handleCityClick = () => {
    navigate('/trakpack-city');
  };

  const handleDateClick = () => {
    navigate('/trakpack-date');
  };

  const handlePlanClick = () => {
    navigate('/trakpack-plan');
  };

  const handleProblemSolvingClick = () => {
    navigate('/trakpack-problem-solving');
  };

  return (
    <MainContainer>
      <Container>
        <Title>README</Title>

        <Section>
        <ClickableBox onClick={handleReadMeClick}>
          <p>프로젝트 개요<br />(Project Overview)</p>
        </ClickableBox>
        </Section>

        <Title>내가 구현한 핵심 기능들</Title>

        <FlexContainer>
          <Section>
            <ClickableBox onClick={handleCityClick}>
              <p>도시 선택 페이지<br />(Select City Page)</p>
            </ClickableBox>
          </Section>

          <Section>
            <ClickableBox onClick={handleDateClick}>
              <p>날짜 선택 페이지<br />(Select Date Page)</p>
            </ClickableBox>
          </Section>

          <Section>
            <ClickableBox onClick={handlePlanClick}>
              <p>여행 계획 페이지<br />(Plan Page)</p>
            </ClickableBox>
          </Section>

        </FlexContainer>

        <Title>문제점 분석과 해결 </Title>

          <Section>
            <ClickableBox onClick={handleProblemSolvingClick}>
              <p>문제점 분석과 해결<br />(Problem-Solving)</p>
            </ClickableBox>
          </Section>

      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: #f5f5f5;
`;

const Container = styled.div`
  padding: 60px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    padding: 30px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Section = styled.div`
  width: 48%; /* 두 개씩 나란히 배치 */
  margin-bottom: 40px;

  @media (max-width: 600px) {
    width: 100%; /* 모바일 화면에서는 한 줄로 */
  }
`;

const ClickableBox = styled.div`
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  background-color: rgba(63, 135, 79, 0.3);
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  margin-bottom: 60px;

  &:hover {
    background-color: rgba(63, 135, 79, 0.5);
  }

  p {
    font-size: 1rem;

    @media (max-width: 720px) {
      font-size: 0.8rem;
    }
  }
`;

export default ProjectTrakpack;
