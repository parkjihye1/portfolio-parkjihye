import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player'; 


const LimitDetail = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>

      <TextContainer>
        <SectionHeadTitle>상품 상세 페이지</SectionHeadTitle>
        <SectionStory>
          이 페이지는 사용자가 선택한 상품의 상세 정보를 제공하며, 다양한 시세 변동과 구매 및 판매 관련 정보를 확인할 수 있는 페이지입니다.
        </SectionStory>
      </TextContainer>

      

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>상품 상세 정보</SectionTitle>
          <SectionSubTitle>
          <strong>상품 상세 정보 표시</strong>
          <br />사용자는 상품 이미지, 즉시 구매가, 제품명, 모델 번호, 출시일, 발매가 등과 같은 정보를 확인할 수 있습니다. 사용자가 사이즈를 선택하면, 해당 사이즈에 대한 희망 구매가 및 판매가 정보가 즉시 표시됩니다. 
            이 기능은 useState로 사이즈 정보를 관리하며, axios를 통해 실시간 데이터를 서버에서 받아와 UI에 반영됩니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>가격 변동 그래프</SectionTitle>
          <SectionSubTitle>
          <strong>실시간 가격 변동 시각화</strong>
          <br />사용자는 상품의 과거 가격 변동 데이터를 시각적으로 확인할 수 있습니다. Chart.js 라이브러리를 사용하여, 1주, 1개월, 1년 또는 전체 기간 동안의 가격 변동을 라인 차트로 구현하였습니다. 차트는 LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend 모듈을 사용하여 구성되었으며, Tooltip 기능을 통해 사용자가 차트에 마우스를 올릴 때 해당 시점의 정확한 가격을 쉽게 확인할 수 있습니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>브랜드 정보</SectionTitle>
          <SectionSubTitle>
          <strong>브랜드 정보 조회</strong>
          <br />상품과 연결된 브랜드의 로고와 브랜드명을 확인할 수 있으며, 브랜드명을 클릭하면 해당 브랜드의 상세 페이지로 이동합니다. axios를 사용해 서버로부터 브랜드 정보를 가져와 useState에 저장하여 표시하고, useNavigate를 사용해 페이지 이동을 구현했습니다.
          </SectionSubTitle>
        </ContentBox>
      </ContentHeadBox>

      <ContentHeadBox>
        <ContentBox>
          <SectionTitle>Modal을 통한 시세 전체 보기</SectionTitle>
          <SectionSubTitle>
          <strong>전체 시세 보기</strong>
          <br />사용자는 '시세 전체 보기' 버튼을 클릭해 모달 창을 통해 모든 거래 데이터를 최신순 또는 오래된 순으로 정렬해 볼 수 있습니다. 모달은 useState로 열림 및 닫힘 상태를 관리하며, 스크롤 가능한 구조로 많은 데이터를 한눈에 볼 수 있도록 했습니다.
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

export default LimitDetail;
