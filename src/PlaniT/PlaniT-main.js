import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import todo from '../Images/planit-main.png'; 

const PlanitMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>

      <TextContainer>
        <SectionHeadTitle>메인 페이지</SectionHeadTitle>
        <SectionStory>
        이 페이지는 사용자가 할 일을 간편하게 추가, 수정, 삭제할 수 있는 투두 리스트의 메인 페이지입니다. 사용자는 자신의 할 일 목록을 확인하고, 상태를 변경하며, 할 일을 관리할 수 있습니다. 
        </SectionStory>
      </TextContainer>
     
      <ImageContainer>
        <CityImage src={todo} alt="투두 이미지" />
      </ImageContainer>

<ContentHeadBox>
      <ContentBox>
        <SectionTitle>투두 항목 생성</SectionTitle>
        <SectionSubTitle>
          <strong>새로운 투두 항목 추가</strong>
          <br />사용자는 투두 항목을 추가할 수 있으며, 입력된 제목은 상태로 관리됩니다. 추가된 투두 항목은 Supabase 데이터베이스에 저장되며, 실시간으로 화면에 렌더링됩니다. React의 useState로 제목 상태를 관리하고, onSubmit 이벤트로 새 항목이 추가됩니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>투두 항목 수정</SectionTitle>
          <SectionSubTitle>
            <strong>기존 항목 수정</strong>
            <br />
            이미 등록된 투두 항목은 편집 모드에서 수정할 수 있습니다. 사용자는 각 항목을 클릭해 편집 상태로 진입하고, 수정된 제목은 상태로 관리되며, 업데이트된 내용은 Supabase에 저장됩니다. `useState`와 `onChange` 이벤트로 수정된 항목의 상태를 관리하고, Supabase API를 사용해 데이터베이스에 수정 사항을 반영합니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>투두 항목 삭제</SectionTitle>
          <SectionSubTitle>
            <strong>삭제 기능</strong>
            <br />
            사용자는 각 투두 항목을 삭제할 수 있으며, 해당 항목은 Supabase 데이터베이스에서 제거되고 화면에서 즉시 사라집니다. `onClick` 이벤트로 삭제 동작을 구현하며, Supabase의 `delete` API를 호출해 데이터베이스에서 해당 항목을 제거합니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>투두 항목 검색</SectionTitle>
          <SectionSubTitle>
            <strong>실시간 검색 기능</strong>
            <br />
            사용자가 입력한 키워드를 기준으로 투두 항목을 실시간으로 검색할 수 있습니다. `useState`와 `useEffect`를 사용해 입력된 검색어를 상태로 관리하며, 입력된 값에 따라 Supabase 데이터베이스에서 항목을 필터링하여 실시간으로 결과를 렌더링합니다. 검색 결과는 Debounce 기법을 사용해 효율성을 높였습니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>상태 업데이트</SectionTitle>
          <SectionSubTitle>
            <strong>완료 상태 변경</strong>
            <br />
            사용자는 각 투두 항목의 완료 상태를 변경할 수 있습니다. 완료된 항목은 체크박스로 표시되며, 이 변경 사항은 Supabase에 즉시 반영됩니다. 각 항목의 상태는 `useState`로 관리되며, 완료 상태 변경 시 Supabase의 `update` API를 호출해 데이터베이스에서 업데이트됩니다.
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

const ImageContainer = styled.div`
  width: 80%;
  margin-bottom: 40px;
`;

const CityImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;


export default PlanitMain;
