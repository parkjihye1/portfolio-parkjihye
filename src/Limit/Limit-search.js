import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import a1 from '../Images/3.png';
import a2 from '../Images/3-1.png';

const LimitSearch = () => {
  const images = [a1, a2];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 해제
  }, [images.length]);

  return (
    <Container>
      <TextContainer>
        <SectionHeadTitle>검색 페이지</SectionHeadTitle>
        <SectionStory>
          이 페이지는 사용자가 원하는 상품을 검색할 수 있는 기능을 제공합니다. 브랜드명, 상품명 등 다양한 검색어를 입력하여 원하는 상품을 찾을 수 있으며, 최근 검색어와 인기 검색어 기능을 통해 사용자 경험을 향상시킵니다.
        </SectionStory>
      </TextContainer>

      <ImageContainer>
        <CityImage src={images[currentImageIndex]} alt={`배너 이미지 ${currentImageIndex + 1}`} />
      </ImageContainer>    

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>검색 기능</SectionTitle>
          <SectionSubTitle>
            <strong>다양한 검색어 입력</strong>
            <br />사용자는 브랜드명, 상품명, 모델 번호 등 다양한 검색어를 입력해 상품을 검색할 수 있으며, 검색 결과는 검색 결과 페이지로 전달됩니다. axios를 통해 서버에 검색어를 전달하고, 반환된 데이터를 기반으로 검색 결과를 UI에 보여줍니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>최근 검색어 관리</SectionTitle>
          <SectionSubTitle>
            <strong>LocalStorage를 활용한 유지</strong>
            <br />사용자가 입력한 최근 검색어는 localStorage에 저장됩니다. 최근 검색어 목록은 새로고침 후에도 유지되며, 사용자 경험을 향상시킵니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>인기 검색어 표시</SectionTitle>
          <SectionSubTitle>
            <strong>실시간 인기 검색어</strong>
            <br />서버에서 가장 많이 검색된 단어를 axios를 통해 가져와 실시간으로 사용자에게 표시합니다. 인기 검색어를 클릭하면 즉시 해당 단어로 검색이 수행됩니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>검색창 재사용</SectionTitle>
          <SectionSubTitle>
            <strong>검색어 유지 기능</strong>
            <br />검색 결과 페이지 상단에 검색창을 유지하여, 사용자가 새로운 검색어를 쉽게 입력할 수 있습니다. 이전에 검색한 검색어가 유지되며, 새로운 검색어를 입력하거나 수정할 수 있으며, Enter 키 클릭으로 새로운 검색 결과를 확인할 수 있습니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>검색 결과 페이지</SectionTitle>
          <SectionSubTitle>
            <strong>검색 결과 표시</strong>
            <br />사용자가 입력한 검색어에 대한 상품 목록을 표시하며, 상품 이미지, 이름, 가격 등의 기본 정보를 제공합니다. 검색된 상품이 없을 경우 해당 내용을 사용자에게 알립니다.
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



export default LimitSearch;

