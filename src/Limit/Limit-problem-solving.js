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
          <SectionTitle><PinIcon size={25} />문제 1. 찜하기 상태가 새로고침 후 초기화되는 문제</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />찜하기 기능을 구현한 후, 사용자가 상품을 찜하면 상태가 즉시 반영되었으나, 페이지를 새로고침하거나 로그아웃 후 다시 로그인하면 찜한 상태가 초기화되는 문제가 있었습니다. 서버와 클라이언트 간 상태 동기화가 제대로 이루어지지 않았습니다.</StyledP>
          <StyledP><strong>해결 과정</strong> 
          <br />axios를 사용해 찜하기 버튼 클릭 시 서버에 PUT 요청을 보내 상태를 서버에 저장했습니다. 이후 페이지 로드 시 서버에서 데이터를 불러와 클라이언트 상태를 유지했고, 네트워크 속도가 느린 경우에도 localStorage에 캐싱하여 사용자 경험을 개선했습니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />문제 2. Chart.js를 사용한 가격 변동 그래프에서의 데이터 불일치</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />가격 변동 그래프에서 날짜별 데이터가 제대로 정렬되지 않아 시각적 혼란이 발생했습니다. 서버에서 제공하는 데이터가 최신순으로 정렬되지 않아 차트에 반영되는 데이터에 일관성이 없었습니다.</StyledP>
          <StyledP><strong>해결 과정</strong>
          <br />서버에서 데이터를 받을 때 reverse() 메서드를 사용해 최신 데이터가 가장 먼저 표시되도록 수정했고, Chart.js 모듈의 Tooltip과 Legend를 사용해 사용자가 특정 데이터 포인트에 마우스를 올렸을 때 정확한 정보를 확인할 수 있도록 최적화했습니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />문제 3. 체크박스를 통한 다중 필터링 관리의 복잡성</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />상품 필터링 기능을 구현할 때, 다양한 카테고리와 조건을 다중 체크박스로 관리하는 데 어려움이 있었습니다. 다수의 체크박스를 동기화하고 서버와의 상태를 유지하며 필터링을 정확히 처리하는 것이 까다로웠습니다.</StyledP>
          <StyledP><strong>해결 과정</strong>
          <br />객체 기반의 상태 관리를 도입하여 각 필터 상태를 key-value 형식으로 관리하였습니다. useEffect와 axios를 사용해 필터 상태가 변경될 때마다 서버에서 데이터를 받아와 반영하였으며, Debounce 기법을 통해 불필요한 서버 요청을 최소화했습니다. 또한, 필터 초기화 버튼을 추가해 사용자가 선택한 필터를 쉽게 초기화할 수 있도록 했습니다.</StyledP>
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
