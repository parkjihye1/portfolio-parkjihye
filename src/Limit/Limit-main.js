import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'; // 비디오 플레이어를 위해 사용

const LimitMain = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>

      <TextContainer>
        <SectionHeadTitle>메인 페이지</SectionHeadTitle>
        <SectionStory>
        이 페이지는 사이트에 접속하자마자 사용자에게 가장 먼저 보여지는 메인 화면입니다.
        </SectionStory>
      </TextContainer>
     
     
<ContentHeadBox>
      <ContentBox>
        <SectionTitle>배너 컴포넌트</SectionTitle>
        <SectionSubTitle>
          <strong>자동 이미지 전환</strong>
          <br />useState와 useEffect를 사용해 배너 이미지가 자동으로 전환되는 기능을 구현했습니다. 이미지 목록을 상태로 관리하며, setInterval을 사용해 3초마다 자동으로 배너 이미지를 변경합니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>최근 거래된 상품 컴포넌트</SectionTitle>
        <SectionSubTitle>
          <strong>API 연동</strong>
          <br />axios를 사용해 서버에서 최근 거래된 상품 데이터를 가져오고, 이 데이터를 useState로 관리하며 최신 상품 목록을 화면에 표시합니다.
        </SectionSubTitle>
        <SectionSubTitle>
          <strong>상품 정보 표시</strong>
          <br />각 상품에는 이름, 브랜드, 거래 방식(택배/직거래), 가격 정보가 표시되며, 사용자가 클릭하면 해당 상품의 상세 페이지로 이동할 수 있습니다.
        </SectionSubTitle>
        <SectionSubTitle>
          <strong>찜하기 기능</strong>
          <br />로그인한 사용자는 관심 있는 상품을 '찜'할 수 있으며, axios를 통해 찜 상태가 서버에 실시간으로 반영되며, UI에서도 실시간으로 업데이트됩니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>인기 브랜드 컴포넌트</SectionTitle>
        <SectionSubTitle>
          <strong>브랜드 데이터 조회</strong>
          <br />axios를 사용해 서버에서 인기 브랜드 데이터를 가져오고, 이 데이터를 useState로 관리해 사용자에게 최신 인기 브랜드 목록을 표시합니다.
        </SectionSubTitle>
        <SectionSubTitle>
          <strong>브랜드별 페이지 이동</strong>
          <br />브랜드 이미지를 클릭하면 해당 브랜드의 상세 페이지로 이동할 수 있도록 useNavigate를 사용해 구현했습니다.
        </SectionSubTitle>
      </ContentBox>
      </ContentHeadBox>
      
      <ContentHeadBox>
      <ContentBox>
        <SectionTitle>최근 등록된 상품 컴포넌트</SectionTitle>
        <SectionSubTitle>
          <strong>상품 스크롤 기능</strong>
          <br />상품 목록은 좌우로 스크롤 가능한 슬라이드 방식으로 구현했습니다. useRef와 scrollBy 메서드를 사용해 목록을 부드럽게 좌우로 이동할 수 있도록 했습니다.
        </SectionSubTitle>
        <SectionSubTitle>
          <strong>실시간 상품 데이터 표시</strong>
          <br />axios를 사용해 최근 등록된 상품 데이터를 서버에서 받아오고, 이를 실시간으로 갱신해 사용자에게 최신 상품 목록을 제공합니다.
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

export default LimitMain;
