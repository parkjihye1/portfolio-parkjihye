import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'; 


const LimitProduct = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <TextContainer>
        <SectionHeadTitle>상품 페이지</SectionHeadTitle>
        <SectionStory>
        이 페이지는 아우터, 상의, 하의, 신발, 가방, 패션잡화 등으로 카테고리가 나뉘어 있어, 사용자가 원하는 상품을 빠르고 쉽게 찾을 수 있도록 설계되었습니다.
        </SectionStory>
      </TextContainer>

    

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>카테고리별 상품 필터링</SectionTitle>
          <SectionSubTitle>
            <strong>필터링 기능</strong>
            <br />사용자는 아우터, 상의, 하의, 신발, 가방, 패션 잡화 등 다양한 카테고리로 상품을 필터링할 수 있습니다. 이 기능은 사용자가 원하는 카테고리 상품만을 손쉽게 탐색할 수 있도록 구성되었습니다. 필터링된 조건은 useState로 관리되며, 사용자가 필터를 변경할 때마다 useEffect를 통해 서버 API에서 해당 카테고리의 데이터를 받아옵니다. Axios를 사용하여 서버와 통신하고, map 메서드를 활용해 데이터를 화면에 실시간으로 반영하여 사용자에게 빠르게 표시합니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>성별 필터링</SectionTitle>
          <SectionSubTitle>
            <strong>필터링 기능</strong>
            <br />성별 필터링 기능을 통해 사용자는 남성용 또는 여성용 상품을 선택하여 원하는 상품을 빠르게 찾을 수 있습니다. 이 필터는 실시간 API 호출을 통해 데이터를 받아오며, 선택한 필터 조건에 맞춰 상품 목록이 즉시 업데이트됩니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>찜하기 기능</SectionTitle>
          <SectionSubTitle>
            <strong>서버와 실시간 동기화</strong>
            <br />로그인한 사용자는 관심 있는 상품을 '찜하기' 기능을 통해 저장할 수 있으며, 이 상태는 axios를 사용해 서버에 실시간으로 저장됩니다. UI는 사용자가 찜한 상품을 즉시 반영하여 실시간으로 업데이트됩니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>실시간 데이터 연동</SectionTitle>
          <SectionSubTitle>
            <strong>실시간 데이터 처리</strong>
            <br />상품은 axios를 사용하여 서버로부터 실시간 데이터를 받아옵니다. 사용자가 필터를 변경할 때마다 서버에 API 요청을 보내어 조건에 맞는 상품명, 가격, 브랜드 등의 데이터를 받아오며, 이를 화면에 실시간으로 반영하여 사용자에게 최신 상품 정보를 빠르게 제공합니다.
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

export default LimitProduct;
