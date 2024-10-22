import React, {useEffect} from 'react';
import styled from 'styled-components';
import { TiPin } from "react-icons/ti";


const PlanitProblem = () => {

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
          <SectionTitle><PinIcon size={25} />문제 1. 투두 항목 수정 시 데이터베이스 동기화 문제</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />
          투두 항목을 수정할 때, 로컬 상태에서는 수정된 내용이 반영되었지만 Supabase 데이터베이스와 완전히 동기화되지 않는 문제가 있었습니다. 수정된 항목이 화면에 즉시 반영되지 않고, 새로고침 후에야 수정 내용이 적용되는 상황이 발생했습니다.
          </StyledP>
          <StyledP><strong>해결 과정</strong> 
          <br />
          이를 해결하기 위해 Supabase의 update 요청이 성공적으로 완료된 후에만 로컬 상태를 업데이트하도록 코드를 수정했습니다. 또한, 비동기 요청이 완료될 때까지 로딩 상태를 사용자에게 보여줌으로써, 데이터가 실제로 수정되었음을 직관적으로 알 수 있도록 UX를 개선했습니다. 이 과정에서 데이터베이스와 로컬 상태 간의 동기화 문제를 해결하고, 더 나은 사용자 경험을 제공할 수 있었습니다.
          </StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />문제 2. 투두 항목 삭제 시 목록 갱신 문제</SectionTitle>
          <StyledP><strong>문제점</strong>
          <br />
          투두 리스트에서 항목을 삭제할 때, 리스트가 즉시 갱신되지 않고, 삭제된 항목이 화면에 남아있는 문제가 발생했습니다. 이로 인해 사용자에게 혼란을 줄 수 있었고, UI가 실제 데이터와 일치하지 않는 상황이 발생했습니다.
          </StyledP>
          <StyledP><strong>해결 과정</strong> 
          <br />
          이 문제를 해결하기 위해 상태 관리와 렌더링 로직을 재검토했습니다. `useState`로 관리되는 투두 리스트 배열에서 삭제된 항목을 제거한 후, 배열을 다시 업데이트하도록 했습니다. 또한 Supabase의 삭제 요청이 성공적으로 완료된 후에만 로컬 상태를 업데이트하여, 데이터베이스와 UI가 일치하도록 하였습니다. 이를 통해 삭제된 항목이 즉시 화면에서 사라지도록 개선하였습니다.
          </StyledP>
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

export default PlanitProblem;
