import React from 'react';
import styled from 'styled-components';
import { FaAws, FaJs, FaStar, FaStarHalf, FaGithub,  } from 'react-icons/fa';
import { SiGooglecloud, SiTypescript, SiReact, SiHtml5, SiCss3, SiAmazonapigateway, SiSupabase, SiSpring, SiStyledcomponents } from 'react-icons/si';
import { IoIosTabletPortrait } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { FiFigma } from 'react-icons/fi';
import { GrMysql } from "react-icons/gr";
import { SiVercel } from "react-icons/si";

function Skills() {
  return (
    <PortfolioContainer>

      <ProjectBox>

      <MySkills>

        <MySkillsTitle>Skills That Power My Projects</MySkillsTitle>
        <Description>제가 다루는 도구와 기술들을 소개합니다.</Description>

        <SkillsSectionTitle>Frontend Technologies</SkillsSectionTitle>

        <TechStackGrid>
          <TechStackItem>
            <TechStackIcon>
              <SiReact size={40} color="#61DBFB" />
              <Tooltip>
                <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>React로 컴포넌트 재사용성을 극대화하며, 상태 관리와 성능 최적화에 주력하여 다양한 프로젝트를 완성했습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>React</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <FaJs size={40} color="#F7DF1E" />
              <Tooltip>
              <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>JavaScript로 다양한 웹 애플리케이션에서 복잡한 로직을 구현하며, 사용자 경험을 최적화하는 데 중점을 두고 있습니다. 이벤트 기반 프로그래밍과 비동기 패턴에 익숙하여, 효율적인 데이터 처리와 동적 UI를 구축해왔습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>JavaScript</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiTypescript size={40} color="#3178C6" />
              <Tooltip>
              <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}<FaStarHalf color="gold" size={20} ></FaStarHalf>
                </Stars>
                <TooltipText>개인 프로젝트에서 TypeScript를 사용해 예측 가능한 코드 작성을 경험하며, 유지보수와 확장성을 높이는 데 큰 도움이 되었습니다. 타입 안정성을 통해 오류를 줄이고 코드 가독성을 향상시켰습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>TypeScript</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <RiNextjsFill size={40} color="#000000" />
              <Tooltip>
              <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>개인 프로젝트를 통해 Next.js의 SSR과 동적 라우팅을 처음으로 사용해 보았고, SEO 최적화와 성능 개선의 가능성을 배웠습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Next.js</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiAmazonapigateway size={40} color="#000000" />
              <Tooltip>
              <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Swagger를 통해 API를 설계하고 문서화하며, 클라이언트와 서버 간의 데이터 통신을 원활하게 구현한 경험이 있습니다. RESTful API와 GraphQL을 학습 중입니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>API Integration</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <IoIosTabletPortrait size={40} color="#000000" />
              <Tooltip>
              <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>모바일, 태블릿, 데스크탑 등 다양한 디바이스에 맞춘 반응형 디자인을 적용한 경험이 있으며, CSS 미디어 쿼리와 플렉스박스 등을 사용해 일관된 사용자 경험을 제공했습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Responsive Web Design</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiHtml5 size={40} color="#E34F26" />
              <Tooltip>
              <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>웹 접근성과 SEO를 고려한 표준 HTML 마크업을 작성하여, 다양한 사용자 환경과 검색 엔진에 최적화된 페이지를 개발했습니다. 시맨틱 요소를 적극 활용해 가독성과 유지보수성을 높였습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>HTML</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiCss3 size={40} color="#1572B6" />
              <Tooltip>
              <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>CSS Flexbox와 Grid 레이아웃, 표준 CSS 애니메이션을 사용하여 사용자 친화적이고 반응성이 뛰어난 디자인을 구현했습니다. 최신 웹 표준을 지향하며 일관성 있는 디자인을 유지하고 있습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>CSS</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiStyledcomponents size={40} color="#000000" />
              <Tooltip>
              <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Styled Components를 사용해 컴포넌트 기반으로 CSS를 관리하고, 동적 스타일링을 효율적으로 적용하는 데 익숙합니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Styled Components</TechStackName>
          </TechStackItem>
        </TechStackGrid>

        <SkillsSectionTitle>Backend Technologies</SkillsSectionTitle>

        <TechStackGrid>
          <TechStackItem>
            <TechStackIcon>
              <SiSupabase size={40} color="#3ECF8E" />
              <Tooltip>
              <Stars>
                  {[...Array(2)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Supabase는 최근 학습을 시작했으며, 아직 심도 있게 사용해보지는 않았지만 백엔드 서비스에 적용할 준비를 하고 있습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Supabase</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <GrMysql size={40} color="#00758F" />
              <Tooltip>
              <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>MySQL을 사용해 데이터베이스 설계와 쿼리 작성, 데이터 최적화를 경험해 본 적이 있습니다. 특히, JOIN, 서브쿼리, 트랜잭션 관리와 같은 고급 SQL 기능을 활용하여 복잡한 데이터 구조를 효율적으로 처리했습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>MySQL</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiSpring size={40} color="#6DB33F" />
              <Tooltip>
              <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Spring을 사용하여 프로젝트에 적용해 본 적은 없지만, 대학 과제에서 기본적인 백엔드 서버 구축을 통해 사용법을 익혔습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Spring</TechStackName>
          </TechStackItem>
        </TechStackGrid>

        <SkillsSectionTitle>Cloud & Deployment Technologies</SkillsSectionTitle>

        <TechStackGrid>
          <TechStackItem>
            <TechStackIcon>
              <FaAws size={40} color="#FF4F8B" />
              <Tooltip>
                <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>대학 과제에서 AWS를 사용하여 웹 애플리케이션을 배포한 경험이 있으며, 간단한 서버 설정과 S3를 통한 정적 웹 호스팅을 진행했습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>AWS</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiGooglecloud size={40} color="#4285F4" />
              <Tooltip>
                <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Google Maps API를 사용한 개인 프로젝트를 GCP를 통해 배포했으며, 클라우드 환경에서 서비스 운영과 기본적인 인프라 설정을 경험했습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>GCP</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <SiVercel size={40} color="black" />
              <Tooltip>
                <Stars>
                  {[...Array(3)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Vercel을 통해 프로젝트를 배포한 경험이 있으며, 현재는 CI/CD 설정과 서버리스 기능 등 Vercel의 다른 기능에 대해 학습 중입니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Vercel</TechStackName>
          </TechStackItem>
        </TechStackGrid>
    
        <SkillsSectionTitle>Collaboration Tools</SkillsSectionTitle>

        <TechStackGrid>
          <TechStackItem>
            <TechStackIcon>
              <FaGithub size={40} color="#181717" />
              <Tooltip>
                <Stars>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>Git의 명령어를 활용해 팀 프로젝트에서 버전 관리를 경험했습니다. 협업 과정에서 코드 충돌을 해결하며, 협업의 중요성을 깨달았습니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Git</TechStackName>
          </TechStackItem>

          <TechStackItem>
            <TechStackIcon>
              <FiFigma size={40} color="#F24E1E" />
              <Tooltip>
                <Stars>
                  {[...Array(4)].map((_, i) => (
                    <FaStar key={i} color="gold" size={20} />
                  ))}
                </Stars>
                <TooltipText>팀 프로젝트에서 Figma의 실시간 협업 기능을 활용해 팀원들과 함께 UI/UX를 설계하고 피드백을 주고받았습니다. 이러한 기능을 통해 사용자 중심의 인터페이스를 구축하는 데 익숙합니다.</TooltipText>
              </Tooltip>
            </TechStackIcon>
            <TechStackName>Figma</TechStackName>
          </TechStackItem>
        </TechStackGrid>

      </MySkills>

      </ProjectBox>

    </PortfolioContainer>
  );
}

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 0.8rem;
  white-space: normal; 
  width: 150px;    
  word-wrap: break-word; 
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }

  @media (max-width: 600px) {
    width: 100px;
    font-size: 0.7rem;
  }
`;

const PortfolioContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 180px;
  padding-bottom: 150px;

  @media (max-width: 720px) {
    padding-top: 130px;
    padding-bottom: 120px;
  }
`;

const ProjectBox = styled.div`
  width: 80%;
  
  &:hover {
    transform: translateY(0);
  }

  &::after {
    content: "아이콘에 커서를 대면 더 많은 정보가 보입니다!";
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 0.9rem;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
    margin-bottom: 5px;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const MySkills = styled.div`
  text-align: center;
`;

const MySkillsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;

const SkillsSectionTitle = styled.h4`
  font-size: 1.6rem;
  margin-top: 80px;
  margin-bottom: 10px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const TechStackGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: start;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TechStackItem = styled.div`
  text-align: center;
  position: relative;

`;

const TechStackIcon = styled.div`
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1f77b4;
  }
  
  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
  }
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
`;

const TooltipText = styled.p`
  margin: 0;
  text-align: left;
`;

const TechStackName = styled.h4`
  margin-top: 10px;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

export default Skills;
