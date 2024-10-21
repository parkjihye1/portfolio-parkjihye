import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


const TrakpackDate = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>

      <TextContainer>
        <SectionHeadTitle>날짜 선택 페이지</SectionHeadTitle>
        <SectionStory>
        이 페이지는 여행 계획의 두 번째 단계로, 사용자가 여행할 기간을 선택할 수 있는 중요한 부분입니다. 이 페이지에서는 사용자가 여행 시작일과 종료일을 선택하여 일정 관리가 가능하도록 구현되었습니다.
        </SectionStory>
      </TextContainer>
     

<ContentHeadBox>
      <ContentBox>
        <SectionTitle>직관적인 날짜 선택</SectionTitle>
        <SectionSubTitle>
          <strong>날짜 선택</strong>
          <br />날짜 선택 페이지는 사용자가 날짜를 선택할 때, 캘린더 형태로 직관적으로 선택할 수 있도록 구현되었습니다. useState와 useEffect로 날짜 선택 상태를 관리하며, 날짜가 변경될 때마다 일정이 자동으로 업데이트됩니다.
        </SectionSubTitle>

        <SectionSubTitle>
          <strong>날짜 선택 시각화</strong>
          <br />선택된 날짜는 별도의 스타일링으로 강조 표시되며, 선택한 기간의 시각적 구분이 명확하게 표시됩니다. 사용자 경험을 개선하기 위해 클릭과 동시에 시각적인 피드백을 제공하여, 사용자에게 선택 상태를 즉시 알 수 있게 해줍니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>날짜 유효성 검사</SectionTitle>
        <SectionSubTitle>
          <strong>선택한 날짜의 유효성 검사</strong>
          <br />사용자는 여행 종료일을 선택할 때 시작일보다 앞선 날짜를 선택하지 않도록 유효성 검사가 적용되었습니다. 이를 통해 논리적으로 맞지 않는 입력을 방지하고, 사용자의 입력 오류를 줄였습니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>실시간 캘린더 상호작용</SectionTitle>
        <SectionSubTitle>
          <strong>캘린더와의 상호작용</strong>
          <br />사용자가 특정 일정을 선택하면, 해당 일정에 맞춰 페이지가 실시간으로 업데이트되며, 여행 일정 작성에 있어 보다 편리한 경험을 제공합니다. 각 선택된 날짜는 상태로 관리되며, 이를 바탕으로 여행 일정이 구성됩니다.
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

export default TrakpackDate;
