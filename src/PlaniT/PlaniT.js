import React, {useEffect} from 'react';
import styled from 'styled-components';
import { TiPin } from "react-icons/ti";

const Planit = () => {

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
          
          <StyledP>컴퓨터공학을 전공하면서 백엔드 개발에 대한 지식은 꾸준히 쌓아왔지만, 이번 프로젝트를 통해 처음으로 Supabase를 접하며 풀 스택 개발자로서 새로운 도전에 나서게 되었습니다.</StyledP>
          <StyledP>Supabase는 백엔드 구축을 빠르게 지원하는 플랫폼으로, 마치 그동안 배워온 백엔드 기술들이 손쉽게 하나로 연결되는 느낌을 주었습니다. 특히, 풀 스택 개발자가 되려는 제게 더 넓은 세상을 보여준 도구였습니다.</StyledP>
          <StyledP>이번 프로젝트는 단순한 투두 리스트 애플리케이션이었지만, 이를 통해 사용자의 인증부터 데이터베이스와의 CRUD 작업까지 구현하면서, 프론트엔드와 백엔드가 어떻게 하나로 통합되어 작동하는지 몸소 느낄 수 있었습니다.</StyledP>
          <StyledP>이 경험은 단지 기술적인 성장만이 아닌, 풀 스택 개발자로 나아가기 위한 첫걸음을 확신 있게 내딛게 해준 소중한 과정이었습니다. 이 프로젝트를 통해 저는 풀 스택 개발이라는 목표에 더욱 가까워졌고, 앞으로의 도전에도 자신감을 얻게 되었습니다.
          </StyledP>


        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />핵심 기능</SectionTitle>
          <StyledP><strong>1. 투두 리스트 생성</strong><br />
          사용자가 새로운 투두 항목을 추가할 수 있는 기능입니다. 사용자가 입력한 제목과 상태를 Supabase 데이터베이스에 저장하며, 추가 시 실시간으로 업데이트됩니다.
          </StyledP>

          <StyledP><strong>2. 투두 리스트 수정</strong><br />
          이미 등록된 투두 항목의 제목 또는 상태를 수정할 수 있습니다. 사용자는 항목을 클릭하여 편집 모드로 들어가 데이터를 수정하고, 그 변경 사항은 Supabase에 저장됩니다.
          </StyledP>

          <StyledP><strong>3. 투두 리스트 삭제</strong><br />
          사용자는 투두 항목을 삭제할 수 있으며, Supabase 데이터베이스에서도 해당 항목이 제거됩니다. 삭제된 항목은 즉시 화면에서 사라집니다.
          </StyledP>

          <StyledP><strong>4. 투두 리스트 검색</strong><br />
          사용자 입력에 따라 투두 항목을 제목을 기준으로 검색할 수 있습니다. Supabase의 `like` 쿼리를 사용해 실시간으로 검색 결과를 필터링하여 보여줍니다.
          </StyledP>

          <StyledP><strong>5. 상태 업데이트</strong><br />
          각 투두 항목의 완료 상태를 클릭하여 '완료' 또는 '미완료'로 업데이트할 수 있습니다. 상태 변경은 Supabase 데이터베이스에 즉시 반영됩니다.
          </StyledP>

        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />기대 효과</SectionTitle>
          <StyledP>
          이번 프로젝트를 하면서 단순한 기술 구현 이상의 것을 배울 수 있었습니다. 프론트엔드와 백엔드를 연결하는 과정에서 어떤 부분을 더 익혀야 할지, 앞으로 어떤 방향으로 나아가야 할지 명확히 알게 되었습니다. 특히, Supabase와 같은 새로운 도구를 처음 사용하면서, 새로운 기술을 빠르게 익히는 방법도 터득할 수 있었습니다.</StyledP>

          <StyledP>이 경험을 통해 풀 스택 개발자로서의 기본기를 다졌고, 앞으로 더 많은 프로젝트를 통해 다양한 기술과 아이디어를 실험해보고 싶다는 생각이 들었어요. 이번 프로젝트가 저에게는 중요한 시작점이 되었고, 앞으로도 제가 좋아하는 여러 가지 도전들을 이어나가고 싶습니다.
          </StyledP>


        </Section>

        <Section>
          <SectionTitle><PinIcon size={25} />개발 기간 및 일정</SectionTitle>
          <StyledP>프론트엔드 개발 : 2024.09.01 ~ 2024.09.08</StyledP>
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

export default Planit;
