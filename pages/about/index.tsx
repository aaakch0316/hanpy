import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import Logo from "public/education/hanpy_computer.jpeg";
import IncheonAirport from "public/images/resume/incheon-airport.jpg";

import { MdCheckCircle } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsPencil } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { GrGamepad } from "react-icons/gr";
// import { ExternalLinkIcon } from "react-icons/ex";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex
        p={8}
        flex={1}
        direction="column"
        // align={"center"}
        // justify={"center"}
      >
        <Container>
          <Flex align="center" gap="1">
            <Image
              src={Logo}
              alt="hanpy logo"
              width={65}
              unoptimized
              height={40}
            />
            <Heading as="h1" noOfLines={1}>
              강창현
            </Heading>
          </Flex>
          <Spacer p={1} />
          <hr />
          <Box>
            <Spacer p={1} />
            <Badge variant="outline" colorScheme="green">
              사용자와 가장 가까이서
            </Badge>{" "}
            비즈니스 가치를 창출함에 가치를 두고있는 웹개발자 입니다. 다양한
            업무를 통한 장점도 있지만, Frontend만 공부 하신분들 보다는 부족한
            부분이 있다고 생각합니다. 하지만, 회사의 상황에 따라 빠르게
            개발하면서 재사용 가능한 코드에 대해 오늘도 고민하고 있습니다.
          </Box>
          {/* <Box>
          개발자란 MAKER라고 생각합니다. MAKER로서의 가치는 비즈니스 가치를
          구현함으로 시작된다고 믿습니다. 사용자와 가장 가까이서 비즈니스 가치를
          창출하는 웹개발자 입니다.
        </Box> */}
          <Spacer p={3} />
          <Heading as="h1" noOfLines={1}>
            Experiences
          </Heading>
          <Spacer p={1} />
          <hr />
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Icon as={FaRegBuilding} w={8} h={8} color="blue.800" />

            <Heading as="h2" noOfLines={1} size="md">
              딥브레인에이아이
            </Heading>
          </Flex>
          <Spacer p={1} />
          <Text fontSize="lg">
            인공지능(AI) 영상 합성 전문 기업으로 영상 합성, 음성 합성 원천
            기술을 모두 보유하고 있는 대표적인 글로벌 3대 기업
          </Text>
          <Spacer p={2} />
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>period</Th>
                  <Td>2022.07 ~ 재직중</Td>
                </Tr>
                <Tr>
                  <Th>position</Th>
                  <Td>Full Stack</Td>
                </Tr>
                <Tr>
                  <Th>projects</Th>
                  <Td> Web SDK / SaaS 서비스 개발 / Solution 개발</Td>
                </Tr>
                <Tr>
                  <Th>tech</Th>
                  <Td>javascript nodejs </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 인천국제공항공사 Kiosk (web) (2023.07)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            PoC 프로젝트로 현재 인천공항에서 테스트 가능(2023.08~2023.10)
          </Text>
          <hr />

          <Flex align="center" gap="1">
            <List spacing={1} p={2}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                PoC는 html/css/JavaScript 하나씩 만드는 요구사항으로 있어
                JavaScript Module 시스템을 사용하지 않고 제작
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Azure STT, Tensorflow 비전 인식, ChatGPT, unity 길 안내, 항공
                API를 적용하여 사용자와 대화 가능한 가상 인간 Kiosk 제작 (ibm
                챗봇은 외부 업채)
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                전역 객체를 공유하는데 한계가 있어, 공통으로 사용되는 State들은
                Observer 패턴의 상태관리 적용하여 UI 변경
              </ListItem>
            </List>
            <Image
              src={IncheonAirport}
              alt="hanpy logo"
              width={140}
              height={200}
              unoptimized
              style={{ margin: "10px", borderRadius: "3px" }}
            />{" "}
          </Flex>

          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] KB국민은행 인공인간 금융비서 프로젝트 (2023.6)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              제공한 Web SDK를 적용하는 과정에서, Background에서 Forground
              진입시 IOS 음성/MOV 제어 이슈로 Brige 함수 제공
            </ListItem>
            {/* <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              제공한 Web SDK에서 IOS 에 따른 이슈 해결
            </ListItem> */}
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              폐쇄망 내부 환경에 맞게 Web 서비스 환경 재구성 및 DockerFile 제공
            </ListItem>
          </List>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              Web SDK (2022.12~)
            </Heading>
            <Link href="https://docs.deepbrain.io/aihuman/web-sdk">
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Flex>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            Web에서 실제 사람과 닮은 AI Human을 실시간으로 표시할 수 있도록
            도와주는 SDK
          </Text>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              기존의 png로 실행하던 AI Human을 영상 버전(Webm/mov)으로 변경
              하여, 리소스 다운로드 최소화
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              동일한 대화 리소스 다운로드 시, 브라우저 indexedDB API를 활용한
              caching 적용 (base64)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              SDK 토큰 인증 설계/개발 (appId / userKey 발급 고도화)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              기존 하드코딩된 자사 SDK 서비스에 동일한 인증을 적용
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              SDK 인증 서버를 통해, Web/IOS/Wnd/And 플랫폼에 필요한 API 제공
            </ListItem>
          </List>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            유니콘 투자유치를 위한, 실시간 고속 합성 Web SDK 연구/개발
            (2023.01~)
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            Text를 Web에서 딥러닝 서버로 보낸 후에, 학습 결과인 Image/Audio를
            실시간으로 받아서 AI Human이 발화하기 까지 1.5s를 목표로 최적화
            구현.(Web SDK 고도화)
          </Text>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              DeepLearning 서버 합성과 동시에 image/audio를 브라우저로 받는
              동시에 AI Human 모델 발화 시작. (Queue)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              requestAnimationFrame API를 활용한, audio/image 프레임 최적화
            </ListItem>
          </List>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            자사 통합 로그인 SSO 서버 구축
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              자사 서비스에 적합한 통합 auth 서버 설계/도입
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              자사 보안 강화를 위해 기존의 단순 로그인 방식에
              accessToken/refreshToken 적용
            </ListItem>
          </List>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            SDK 사용 고객사를 위한 Sample Code 제작
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            고객사의 편의를 위한, userKey / appId만 넣으면 실행가능하도록 변경.
            (고객 SDK 사용 문의 감소)
          </Text>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Express / html 를 활용한 데모 버전 제작/제공
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Nextjs 를 활용한 데모 프로젝트 제작/제공
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              STT(Azure) 결합 된 vanilla javascript 제작/제공
            </ListItem>
          </List>
          {/* <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 국정원 딥페이크 탐지 (2022.11~ 1차 완료. 2차 고도화 진행 중)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              기획에 따른 UI 제작
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              내부 설치
            </ListItem>
          </List> */}
          {/* <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] KB국민은행 인공인간 프로젝트 (2022.10~ 2차 완료. 3차 고도화
            진행 중)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              폐쇄망 내부 환경에 맞게 Web 서비스 환경 재구성 / 설치
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Web SDK 수정 제공
            </ListItem>
          </List> */}
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 농협은행 가상인간 고도화 사업 (2022.9~ 1차 완료. 2차 고도화
            진행 중)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              폐쇄망 내부 환경에 맞게 Web 서비스 환경 재구성 / 설치
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              은행 내부 사원과 SSO 연동
            </ListItem>
          </List>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] BMW 개발 지원(2022.12)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              BMW 내부망(On-premise) SDK 인증 Server 경량화 제공
            </ListItem>
          </List>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 골프존 (2023.04~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              최경주 모델 기준 신규 SDK 기능 추가 구현 (옆을 바라보는 루틴 추가)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              카운터에서 AI-human 발화를 통제 가능한, Web socket POC 개발
            </ListItem>
          </List>
          {/* <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [B2B] 인천국제공항공사 (2023.05~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              자사 Unity 3D Human 키오스크 Web 구현 (인천국제공항공사 길안내
              AI-Human)
            </ListItem>
          </List> */}
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [예정] 신한은행 (2023.06~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [개인 목표] 기존 납품 code 경량화(리펙토링)
            </ListItem>
          </List>
          <Spacer p={3} />
          <Heading as="h4" size="sm" noOfLines={1}>
            [예정] 우리은행 (2023.07~)
          </Heading>
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [개인 목표] yarn zero install 적용
            </ListItem>
          </List>
          <Spacer p={3} />
        </Container>
        <Container>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Icon as={FaRegBuilding} w={8} h={8} color="blue.800" />

            <Heading as="h2" noOfLines={1} size="md">
              제이소프트웨어 (2021.06~2022.03)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <Text fontSize="lg">
            4명이서 시작한 스타트업으로, SI 프로젝트를 주로 진행
          </Text>
          <Spacer p={2} />
          <TableContainer>
            <Table variant="simple">
              <Tbody>
                <Tr>
                  <Th>period</Th>
                  <Td>2021.06 ~ 2022.03</Td>
                </Tr>
                <Tr>
                  <Th>position</Th>
                  <Td>Full Stack</Td>
                </Tr>
                <Tr>
                  <Th>projects</Th>
                  <Td> SI 프로젝트</Td>
                </Tr>
                <Tr>
                  <Th>tech</Th>
                  <Td>javascript nodejs Python Django pandas</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              세븐파트너스 입찰/낙찰 통합 구축 시스템 (2023.02~03)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              공공기간 정보 크롤링하고, DB 적재
            </ListItem>
          </List>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              대우건설 하자관리 시스템 (2022.01~03)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              <b>
                <Badge variant="outline" colorScheme="blue">
                  React
                </Badge>{" "}
                를 처음 시작한 프로젝트로, 사용자와 가까이서 서비스를 제공한다는
                것에 흥미를 느껴 Frontend 직군을 시작하기로 하기로 마음 먹은
                프로젝트
              </b>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              기획을 보고, front(react) / backend(express) / MySQL / AWS EC2
              전체를 혼자 개발 진행
            </ListItem>
          </List>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              LG 전자 경량화 프로젝트(2022.10~11)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              LG CNS 상주하여 9개 서버 redis를 클러스터링 구축
            </ListItem>
          </List>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              당진화력발전소 운전데이터 분석 (2021.08)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              화력발전소에서 사용하는 16,000 개의 운전 센서 데이터 분석으로 원소
              예측 제작
            </ListItem>
          </List>

          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Heading as="h4" size="sm" noOfLines={1}>
              KKday의 카카오 알림톡 (2022.02)
            </Heading>
          </Flex>
          <Spacer p={1} />
          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              php Laravel을 활용한 API Gateway 제공 (카카오 비즈 메시지 API
              제공)
            </ListItem>
          </List>
          <Spacer p={5} />

          <Heading as="h1" noOfLines={1}>
            ETC.
          </Heading>
          <Spacer p={1} />
          <Text fontSize="sm" pl={3} color="gray.500">
            강사경력 / 외주경력 / 교육
          </Text>
          <Spacer p={3} />
          <Flex align="center" gap="1">
            <Icon as={BsPencil} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Teaching career
            </Heading>
          </Flex>

          <List spacing={1} p={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [영우글로벌러닝] K-digital 데이터분석/코딩테스트 강사 (2021.03)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [홍익대학교] K-data 빅데이터 분석 기반 비즈니스 개발자 양성 및
              취업과정 - 데이터 분석(Kaggle) 강사 (2022.06)
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [렛유인] 로봇비전활용 엔지니어링 온라인 교육 강사 -
              자료구조/알고리즘 (영상 제작 일정 : 2023.06~2023.07)
            </ListItem>
          </List>
          <Spacer p={3} />

          <Flex align="center" gap="1">
            <Icon as={GrGamepad} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Toy Project
            </Heading>
          </Flex>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [제작중] storybook 자사 도입을 위한, storybook 제작{" "}
              <Link href="https://deploy-preview-12--glowing-taffy-1adff9.netlify.app/?path=/story/components-button--solid">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              STT Azure 적용 및 컴포넌트 책임 관계 이해를 위한, 영어 단어 발음
              연습 페이지
              <Link href="https://han-py.com/education/word-evaluation">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              chatGPT 사용해보기 위해, 영어 인터뷰 연습 페이지
              <Link href="https://han-py.com/education/freetalk-evaluation">
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [예정] 자사 모노레포 적용을 위한, 프로젝트 분리
            </ListItem>
          </List>
          <Spacer p={3} />

          <Flex align="center" gap="1">
            <Icon as={MdHomeWork} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Outsourcing
            </Heading>
          </Flex>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              백화점 VIP 고객 차량인식 프로젝트 MVP제작 : PM 참여
              (2023.01~2023.03){" "}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              [블로그 전체 정리 예정]하루 방문자 수가 1000명 이상인{" "}
              <Badge colorScheme="green">블로그 운영</Badge>
            </ListItem>
          </List>
          <Spacer p={3} />

          <Flex align="center" gap="1">
            <Icon as={GiGraduateCap} w={8} h={8} color="blue.800" />
            <Heading as="h2" noOfLines={1} size="md">
              Education
            </Heading>
          </Flex>
          <List spacing={1}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              ssafy - 삼성 청년 SW 아카데미 (2020.01 ~ 2020.12)
            </ListItem>
          </List>
        </Container>
      </Flex>
    </Stack>
  );
}
