import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TiPin } from "react-icons/ti";
import LimitLogo from '../Images/limit-logo.svg';

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
          <StyledP>현대 패션 산업에서 한정판 제품의 수요는 꾸준히 증가하고 있으며, 소비자들은 고유한 디자인과 한정된 생산량으로 인해 특별한 가치를 부여받고 있습니다.</StyledP>
          <StyledP>하지만, 이러한 제품은 높은 가격과 인기로 인해 접근이 어렵고, 중고 시장에서의 수요 역시 지속적으로 증가하고 있습니다.</StyledP>
          <StyledP>따라서, LIMIT은 소비자들에게 보다 합리적인 가격에 한정판 제품을 소유할 기회를 제공하며, 안전하고 편리한 거래 환경을 통해 패션 커뮤니티의 연결성을 더욱 강화할 것입니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />핵심 기능</SectionTitle>
          <StyledP><strong>1. 상품 검색</strong><br />
          카테고리, 상품명, 브랜드, 지역 및 거래 방식 등 다양한 조건으로 패션 아이템 검색이 가능합니다.<br />
          자주 검색하는 인기 검색어를 저장하고 이를 활용하여 검색 경험을 개선합니다.</StyledP>

          <StyledP><strong>2. 상품 등록</strong><br />
          판매자가 중고 브랜드 패션 상품을 사진과 상세 설명을 포함해 등록합니다.<br />
          거래 방식(직거래, 택배)을 선택할 수 있습니다.</StyledP>
          
          <StyledP><strong>3. 상품 입찰</strong><br />
          미개봉 상품에 대해 입찰 기능을 제공합니다.<br />
          사용자들이 더 합리적인 가격에 구매하고, 판매자는 최상의 가격으로 판매가 가능합니다.</StyledP>

          <StyledP><strong>4. 채팅</strong><br />
          구매자와 판매자 간 1:1 채팅 지원으로, 거래에 대한 정보 공유 및 신뢰성 있는 거래가 가능합니다.</StyledP>

          <StyledP><strong>5. 시세 차트</strong><br />
          거래 완료된 상품의 가격 변동을 시각적으로 제공하여, 사용자들이 현명한 소비를 할 수 있도록 합니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />기대 효과</SectionTitle>
          <StyledP>LIMIT 프로젝트를 통해 사용자는 한정판 중고 거래 시 더 높은 신뢰성을 경험하게 될 것입니다.</StyledP>
          <StyledP>안전한 거래와 실시간 시세 정보를 바탕으로 사용자들은 더 합리적인 거래 결정을 내릴 수 있습니다.</StyledP>
          <StyledP>또한, 사용자 맞춤형 필터 및 찜 기능을 통해 편리한 쇼핑 경험을 제공하고, 거래 안전성을 높일 수 있을 것으로 기대됩니다.</StyledP>
        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />개발 기간 및 일정</SectionTitle>
          <StyledP>프론트엔드 및 백엔드 개발 : 2024.06.01 ~ 진행중</StyledP>
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
