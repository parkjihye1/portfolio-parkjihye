import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'; 
import Plan from '../Images/trakpack-plan.png';

const TrakpackPlan = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>

      <TextContainer>
        <SectionHeadTitle>여행 계획 페이지</SectionHeadTitle>
        <SectionStory>
        이 페이지는 사용자가 선택한 도시와 여행 날짜에 맞춰, 날짜별로 여행 일정을 계획하고 관리할 수 있도록 설계되었습니다. 사용자 친화적인 UI와 직관적인 상호작용을 통해 효율적으로 여행 경로와 일정을 짤 수 있습니다.
        </SectionStory>
      </TextContainer>

      <ImageContainer>
        <CityImage src={Plan} alt="여행 일정 선택 이미지" />
      </ImageContainer>

<ContentHeadBox>
      <ContentBox>
        <SectionTitle>날짜별 여행 일정 관리 기능</SectionTitle>
        <SectionSubTitle>
          <strong>날짜별 여행 일정 관리</strong>
          <br />사용자는 useState로 관리되는 날짜별로 여행할 장소를 추가하거나 삭제할 수 있으며, 이 목록은 실시간으로 배열 형태로 관리되어 즉시 화면에 렌더링됩니다. useEffect를 사용해 일정 변경 시 자동으로 업데이트되어, UI가 즉각적으로 반영됩니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>여행 장소 검색 및 추가 기능</SectionTitle>
        <SectionSubTitle>
          <strong>장소 검색 및 추가</strong>
          <br />사용자는 검색창에 입력한 텍스트를 기반으로 Google Places API에서 제공되는 장소를 검색하고, 검색된 장소를 클릭해 일정에 추가할 수 있습니다. 추가된 장소는 선택한 날짜에 맞춰 지도 위에 시각적으로 표시됩니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>지도와 통합된 시각적 피드백</SectionTitle>
        <SectionSubTitle>
          <strong>지도 기반 시각화</strong>
          <br />Google Maps API를 사용해 선택된 장소는 지도에 마커로 표시되며, 날짜별로 다른 색상으로 구분되어 여행 경로를 명확히 시각화합니다. 지도에 표시된 마커를 클릭하면 해당 장소의 세부 정보를 확인할 수 있습니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>
      
      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>효율적인 일정 구분 기능</SectionTitle>
        <SectionSubTitle>
          <strong>시각적 일정 구분</strong>
          <br />날짜별로 장소는 고유한 색상으로 지도에 표시되어 일정이 명확히 구분되며, 같은 날짜의 여러 장소는 색상 마커를 통해 시각적으로 일정의 밀집도를 확인할 수 있어 최적화된 여행 동선 계획이 가능합니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>
      
    </Container>
  );
};

const ImageContainer = styled.div`
  width: 80%;
  margin-bottom: 40px;
`;

const CityImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

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

export default TrakpackPlan;
