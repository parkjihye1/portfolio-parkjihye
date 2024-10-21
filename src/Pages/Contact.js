import React from 'react';
import styled from 'styled-components';
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaSmile } from "react-icons/fa";

function Contact() {
  return (
    <PortfolioContainer>

      <ContactSection>
        <ContactTitle>Contact</ContactTitle>
        <ContactList>
          <ContactItem>

          <ContactInfo>
              <FaSmile />
              <TextContainer>
                <strong>박지혜</strong>
              </TextContainer>
            </ContactInfo>

            <ContactInfo>
              <MdMail />
              <TextContainer>
                <strong>jihyeee0112@naver.com</strong>
              </TextContainer>
            </ContactInfo>

            <ContactInfo>
              <FaPhone />
              <TextContainer>
                <strong>010-6376-4331</strong>
              </TextContainer>
            </ContactInfo>

          </ContactItem>
        </ContactList>
      </ContactSection>

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
  background-color: #f5f5f5;
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

const ContactSection = styled.div`
  width: 80%;
  text-align: center;
`;

const ContactTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 80px;
  text-align: center; /* 타이틀을 가운데 정렬 */
`;

const ContactList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ContactItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column; /* 아이콘과 텍스트를 세로로 배치 */
  align-items: flex-start; /* 왼쪽 정렬 */
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center; /* 아이콘과 텍스트를 수직 가운데 정렬 */
  margin-bottom: 30px; /* 두 연락처 정보 간격 추가 */

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Contact;
