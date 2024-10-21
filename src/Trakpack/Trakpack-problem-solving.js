import React, {useEffect} from 'react';
import styled from 'styled-components';
import { TiPin } from "react-icons/ti";


const LimitProblem = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LimitContainer>
      <Container>
        <Title> 
        
          <Text>문제점 분석과 해결</Text>
        </Title>

        <Section>
          <SectionTitle><PinIcon size={25} />문제 1. 일정 삭제 시 지도 마커 숫자 갱신 문제</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />여행 일정을 추가할 때 각 날짜별로 동그라미 마커와 숫자가 표시되는데, 일정 삭제 시 이후의 숫자가 자동으로 갱신되지 않고 그대로 남아있는 문제가 있었습니다. 이로 인해 UI 상에서 순번이 어긋나 혼란을 초래했습니다.</StyledP>
          <StyledP><strong>해결 과정</strong> 
          <br />해당 문제를 해결하기 위해 상태 관리 로직을 재구성했습니다. useState를 활용해 날짜별 일정 데이터를 배열로 관리하고, 일정 삭제 시 배열에서 해당 데이터를 제거한 후 남은 일정들이 자동으로 업데이트되도록 수정했습니다. 이를 통해 마커와 숫자가 삭제된 일정 이후에도 올바르게 재배치되도록 했습니다. 또한, useEffect를 사용해 일정이 변경될 때마다 UI가 즉각적으로 갱신되도록 하여 사용자 경험을 개선했습니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />문제 2. 다중 일정을 관리할 때 UI 혼잡 문제</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />사용자가 여러 날짜에 많은 장소를 추가하면서, UI 상에서 일정을 관리하는 데 혼잡함이 발생했습니다. 장소가 많아질수록 UI 상에서 각 장소를 구분하기 어렵고, 지도 상의 마커들도 복잡하게 보여 사용자 경험이 저하되었습니다.</StyledP>
          <StyledP><strong>해결 과정</strong>
          <br />이 문제를 해결하기 위해 각 날짜별로 여행 일정을 구분하는 UI를 개선했습니다. 날짜별로 다른 색상으로 마커를 표시하여 시각적으로 명확히 구분되도록 하고, 일정 목록을 날짜별로 탭이나 섹션으로 나누어 한 번에 많은 장소를 한눈에 보지 않도록 했습니다. 또한, 사용자가 필요에 따라 특정 날짜의 일정을 펼치거나 접을 수 있는 기능을 추가하여 UI 복잡성을 줄이고, 사용자 편의성을 높였습니다.</StyledP>
        </Section>

      </Container>
    </LimitContainer>
  );
};

const LimitContainer = styled.div`
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

const Title = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 40px;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
   font-size: 2rem;
  }
`;

const Logo = styled.img`
  width: 200px; 
  height: auto;
  margin-right: 15px; 
  margin-left: -5px;

  @media (max-width: 600px) {
    width: 100px;
    margin-left: 0;
  }
`;

const Text = styled.span`
  position: relative;
  top: 5px;

  @media (max-width: 600px) {
   top: 2.5px;
  }
`;

const PinIcon = styled(TiPin)`
  margin-right: 10px;
  color: gray; 
`;

const Section = styled.div`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const StyledP = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export default LimitProblem;
