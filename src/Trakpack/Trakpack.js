import React, {useEffect} from 'react';
import styled from 'styled-components';
import { TiPin } from "react-icons/ti";

const Limit = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LimitContainer>
      <Container>
        <Title> 
          <Text>프로젝트 개요</Text>
        </Title>

        <Section>
          <SectionTitle><PinIcon size={25} />프로젝트 개발 배경</SectionTitle>
          <StyledP>현대 여행자들은 일정 관리의 복잡함을 줄이고, 더 직관적인 방식으로 여행 계획을 세우기를 원합니다. 특히, 도시 탐색과 장소 추가를 보다 쉽게 하면서도 한눈에 여행 경로를 파악할 수 있는 도구에 대한 수요가 꾸준히 증가하고 있습니다.</StyledP>
          <StyledP>이러한 필요를 반영하여, 이 프로젝트는 사용자가 여행할 도시를 선택한 후, 날짜별로 일정을 구성할 수 있도록 돕는 여행 계획 솔루션을 제공합니다.</StyledP>
          <StyledP>구글 맵 API를 활용해 시각적으로 여행 경로와 방문할 장소를 확인할 수 있으며, 이를 통해 사용자들이 더욱 효율적이고 직관적으로 여행 일정을 세울 수 있도록 지원합니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />핵심 기능</SectionTitle>
          <StyledP><strong>1. 도시 선택 및 여행 날짜 설정</strong><br />
          사용자는 먼저 여행할 도시를 선택한 후, 달력을 통해 여행 날짜를 설정할 수 있습니다.<br />
          선택한 날짜에 따라 여행 계획을 세우기 시작할 수 있습니다.</StyledP>

          <StyledP><strong>2. 장소 검색 및 추가</strong><br />
          도시 선택 후에는 장소 검색 창을 통해 원하는 장소를 검색할 수 있습니다. <br />
          검색 결과에서 장소의 이미지나 이름을 클릭하면 지도 상에서 해당 장소의 위치를 바로 확인할 수 있으며, 원하는 날짜에 해당 장소를 추가할 수 있습니다.</StyledP>
          
          <StyledP><strong>3. 날짜별 일정 관리</strong><br />
          각 장소는 사용자가 선택한 날짜에 추가되며, 해당 날짜마다 색상이 다른 동그라미로 표시됩니다.<br />
          지도 상에서 같은 날 추가된 장소들이 한눈에 파악되도록 동그라미가 같은 색상으로 표시되며, 이를 통해 어떤 날에 어느 위치로 이동하는지 직관적으로 알 수 있습니다.</StyledP>

          <StyledP><strong>4. 시각적 일정 관리</strong><br />
          지도에 표시된 동그라미들을 통해 사용자는 한눈에 각 날짜별로 계획된 장소들이 어디에 위치해 있는지 시각적으로 확인할 수 있습니다. <br />
          각 날짜마다 다른 색상을 부여해, 일정이 겹치거나 헷갈리지 않도록 하였으며, 여러 장소를 선택했을 때 여행 경로를 파악하기 쉽게 만들었습니다.</StyledP>

        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />기대 효과</SectionTitle>
          <StyledP>이 프로젝트를 통해 여행자들은 여행 계획을 세우는 과정에서 더욱 편리하고 직관적인 경험을 얻게 될 것입니다. 사용자는 여행할 도시를 선택한 후, 날짜별로 가고 싶은 장소를 쉽게 검색하고 추가할 수 있으며, 이를 통해 복잡한 일정 관리가 단순화됩니다.</StyledP>
          <StyledP>특히, 이 프로젝트의 핵심 기능은 지도 상에서 여행 경로와 장소를 시각적으로 파악할 수 있다는 점입니다. 사용자가 추가한 장소는 지도에 표시되며, 각 날짜는 서로 다른 색상의 동그라미로 나타나, 하루 일정이 명확하게 구분됩니다. 이를 통해 사용자는 각 날짜의 일정 밀도를 시각적으로 확인할 수 있으며, 여행 동선을 쉽게 조정할 수 있습니다.</StyledP>
          <StyledP>예를 들어, 특정 날짜에 많은 장소를 추가하면, 해당 날짜에 해당하는 동그라미가 여러 개 나타나 일정이 밀집되었음을 알려줍니다. 이러한 시각적 표시 방식은 단순한 일정표보다 더 직관적인 여행 계획을 가능하게 하며, 사용자가 각 장소의 위치와 이동 경로를 한눈에 파악할 수 있도록 도와줍니다. 결과적으로, 사용자는 최적의 여행 경로를 쉽게 세울 수 있어 더 효율적인 여행 준비를 할 수 있을 것으로 기대됩니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />개발 기간 및 일정</SectionTitle>
          <StyledP>프론트엔드 개발 : 2024.09.01 ~ 진행중</StyledP>
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

export default Limit;
