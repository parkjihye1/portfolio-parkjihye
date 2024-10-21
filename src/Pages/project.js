import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe } from 'react-icons/fa'; 

import { useNavigate } from 'react-router-dom'; 
import LimitLogo from '../Images/limit-logo.svg';
import TrakpackLogo from '../Images/trakpack-logo.svg';
import PlanitLogo from '../Images/planit-logo.svg';

import ProjectImage3 from '../Images/profile.png';


function Projects() {
  const navigate = useNavigate(); 

  const handleProjectClick = (projectTitle) => {
    if (projectTitle === 'LIMIT') {
      navigate('/project-1'); 
    }

    if (projectTitle === 'TRAKPACK') {
        navigate('/project-2');     
      }
  };   

  return (        
    <ProjectMainContainer>
      <ProjectsContainer>
        <ProjectMainTitle>Projects That Showcase My Work</ProjectMainTitle>
        <ProjectSubTitle>제가 기여한 프로젝트와 제가 사용한 도구 및 기술들로 이루어진 작업물입니다.</ProjectSubTitle>
        {[{
          title: 'LIMIT',
          header: '[팀프로젝트] Front-end',
          description: '[LIMIT] 한정판 중고 제품을 안전하게 거래하는 플랫폼',
          github: 'https://github.com/TEAM-SPACE-1/limit-client',
          site: 'http://lim-it.one',
          
          image: null,
          skill: ['React', 'JavaScript', 'Styled-components', 'Axios', 'React Router', 'Chart.js', 'Git/GitHub', 'Responsive Web Design'], 
          logo: LimitLogo
        }, {
          title: 'TRAKPACK',
          header: '[개인프로젝트] Front-end',
          description: '[TRAKPACK]Google Maps API를 활용한 맞춤형 여행 일정 계획 플랫폼',
          github: 'https://github.com/parkjihye1/2024-ts-project',
          site: 'https://parkjihye1.github.io/2024-ts-project',
          
          image: null,
          skill: ['React', 'TypeScript', 'Google Cloud Platform', 'Styled-components', 'React Router', 'Git/GitHub'], // 배열로 수정
          logo: TrakpackLogo
        },
        {
          title: '프로젝트 3',
          header: '[개인프로젝트] Front-end, Back-end',
          description: '[PlaniT] Supabase를 활용한 간단한 투두 리스트 플랫폼',
          github: 'https://github.com/parkjihye1/todo-list',
          site: 'https://todo-list-parkjihye.vercel.app/',
          video: null,
          image: ProjectImage3,
          skill: ['React', 'Next.js', 'TypeScript', 'Material-UI', 'Tailwind CSS', 'Supabase', 'Vercel', 'Git/Github'], 
          logo: PlanitLogo
        }].map((project, index) => (
          <ProjectBox key={index} onClick={() => handleProjectClick(project.title)}>
            <ProjectInfo>
              <ProjectTitle>{project.logo ? <ProjectLogo src={project.logo} alt={`${project.title} 로고`} /> : project.title}</ProjectTitle>
              <ProjectHeader>{project.header}</ProjectHeader>
              <ProjectDescription>{project.description}</ProjectDescription>
              <SkillContainer>
                {project.skill && project.skill.map((skill, index) => (
                  <SkillBox key={index}>{skill}</SkillBox>
                ))}
              </SkillContainer>
              <IconLinks>
                <IconLink href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <FaGithub size={30} />
                </IconLink>
                <IconLink href={project.site} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <FaGlobe size={30} />
                </IconLink>
              </IconLinks>
            </ProjectInfo>
            
              <ProjectImage src={project.image} alt={`${project.title} 이미지`} />
          
          </ProjectBox>
        ))}
      </ProjectsContainer>

    </ProjectMainContainer>
  );
}

const ProjectMainContainer = styled.div`
  background-color: #f5f5f5;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 80%;
  margin: 0 auto;
  padding-top: 180px;
  padding-bottom: 150px;

  @media (max-width: 720px) {
    padding-top: 130px;
    padding-bottom: 120px;
  }
`;

const ProjectMainTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  text-align: center;
  padding-top: 120px;

  @media (max-width: 720px) {
    font-size: 1.5rem;
    padding-top: 0;
  }
`;

const ProjectSubTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  line-height: 1.6;
  text-align: center;
  margin-top: -53.5px;

  @media (max-width: 720px) {
    font-size: 1rem;
  }
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-10px);
  }

  &::after {
    content: "박스를 클릭해 더 많은 정보를 확인하세요!";
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

const ProjectInfo = styled.div`
  width: 50%;
`;

const ProjectTitle = styled.h4`
  font-size: 1.8rem;
  margin-top: -10px;
  margin-bottom: 10px;
`;

const ProjectHeader = styled.h5` 
  font-size: 1rem;
  margin-bottom: 10px;
  margin-left: 5px;
`;

const ProjectLogo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  width: 95%;
  margin-left: 5px;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 20px;
  margin-left: 5px;
`;

const SkillBox = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 0.7rem;
  color: #333;
  display: inline-block;
  white-space: nowrap;
`;

const IconLinks = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
  margin-left: 5px;
`;

const IconLink = styled.a`
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: darkgray;
  }
`;

const VideoPlayer = styled.div`
  width: 45%;
  height: auto;
  border-radius: 5px;
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 45%;
  height: auto;
  border-radius: 10px;
`;

export default Projects;
