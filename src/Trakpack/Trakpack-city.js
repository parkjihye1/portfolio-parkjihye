import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'; 


const TrakpackCity = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>

      <TextContainer>
        <SectionHeadTitle>도시 선택 페이지</SectionHeadTitle>
        <SectionStory>
        이 페이지는 여행 계획의 첫 단계로, 사용자가 방문할 도시를 직관적이고 쉽게 선택할 수 있도록 도와줍니다.
        </SectionStory>
      </TextContainer>
     
    

<ContentHeadBox>
      <ContentBox>
        <SectionTitle>도시 목록 표시</SectionTitle>
        <SectionSubTitle>
          <strong>도시 목록 관리</strong>
          <br />제공된 도시 목록은 useState를 사용해 배열로 관리되며, 이를 map 함수로 반복하여 화면에 렌더링합니다. 이를 통해 도시 목록이 효율적으로 동적으로 업데이트됩니다. 조건부 렌더링을 적용해 도시의 선택 상태를 실시간으로 반영합니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>도시 검색</SectionTitle>
        <SectionSubTitle>
          <strong>실시간 검색 기능</strong>
          <br />도시 검색 기능은 useState와 useEffect를 사용하여 구현되었습니다. 사용자가 검색창에 입력한 값을 상태로 관리하고, 배열 필터링을 통해 실시간으로 목록을 업데이트합니다. 검색 결과는 실시간으로 반영되며, 불필요한 렌더링을 방지하기 위해 Debounce 기법이 적용되어 효율성을 높였습니다. React의 상태 관리로 검색 결과와 원래 목록 간의 동기화를 유지합니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>선택된 도시 강조</SectionTitle>
        <SectionSubTitle>
          <strong>선택 상태의 즉각적인 반영</strong>
          <br />사용자가 선택한 도시는 상태로 관리되며, 선택된 도시의 인덱스나 ID를 배열에 저장하여 관리합니다. 선택된 도시가 배열에 추가될 때, 조건부 스타일링을 통해 해당 도시가 강조 표시되며, 선택 여부가 즉각적으로 반영됩니다. React의 상태 관리와 배열 조작을 사용해 선택 상태가 일관되게 유지됩니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

    </Container>
  );
};


const ContentBox = styled.div`

padding: 20px;
`;
const ContentHeadBox = styled.div`
display: flex;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);

  margin-bottom: 40px;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #f5f5f5;
`;

const VideoContainer = styled.div`
  width: 80%;
  margin-bottom: 40px;
`;

const TextContainer = styled.div`
  width: 80%;
  text-align: left;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  text-align: left;
  margin-top: 0;
`;

const SectionHeadTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
`;

const SectionStory = styled.h2`
  font-weight: 400;
  font-size: 1rem;
`;

const SectionSubTitle = styled.div`
  margin-top: 25px;
  
`;

export default TrakpackCity;
