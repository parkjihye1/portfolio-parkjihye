import React from 'react';
import styled from 'styled-components';
import { AiOutlineSafetyCertificate } from "react-icons/ai";

function Certificates() {
  return (
    <PortfolioContainer>

      {/* Certificates 섹션 */}
      <CertificatesSection>
        <CertificateTitle>Certificates</CertificateTitle>
        <CertificateList>
          <CertificateItem>
            <AiOutlineSafetyCertificate />
            <TextContainer>
              <strong>정보처리기사 필기</strong>
              <GrayText>2024년 정기 기사 3회 실기 진행 중</GrayText>
            </TextContainer>
          </CertificateItem>
        </CertificateList>
      </CertificatesSection>

    </PortfolioContainer>
  );
}

const PortfolioContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 150px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;

  @media (max-width: 720px) {
    padding-top: 130px;
    height: calc(100vw - 130px);
  }

  @media (max-width: 600px) {
    padding-top: 130px;
    height: calc(100vw + 80px);
  }
`;

const CertificatesSection = styled.div`
  width: 80%;
  text-align: center;
`;

const CertificateTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 80px;
  text-align: center; /* 타이틀을 가운데 정렬 */
`;

const CertificateList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CertificateItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center; /* 아이콘과 텍스트가 수평으로 정렬되도록 설정 */
  text-align: left;
  justify-content: flex-start; /* 텍스트와 아이콘을 왼쪽 정렬 */

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GrayText = styled.span`
  color: gray;
  font-size: 1rem;
`;

export default Certificates;
