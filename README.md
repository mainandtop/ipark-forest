# 운정 아이파크 포레스트 — 분양 랜딩 페이지

경기 파주 파주메디컬클러스터 도시개발구역 A2BL / 지하 2층~지상 29층 25개동 총 3,250세대
(참고 원본: unjeong-iparkcity.com 공식 홈페이지 — 저작권 사용 허락 받음)

## 구조

```
index.html            정적 페이지 (HTML/CSS/JS 한 파일)
config.js             ★ 내용 수정은 여기서만 — 문구/이미지/메뉴/섹션/평면 탭
api/contact.js        관심고객등록 메일 발송 (Vercel Serverless, nodemailer)
assets/images/        원본 사이트 이미지
vercel.json           빌드/라우팅 설정
```

## 메뉴 (config.js `nav` + `sections`가 1:1)

| 메뉴 | 앵커 | 내용 |
|---|---|---|
| 사업개요 | `#overview` | 요약표 + 타입별 세대수표(가로 스크롤) + 조감도 |
| 입지환경 | `#location` | 위치도 + NATURE/TRAFFIC/INFRA/VISION 4개 카드 |
| 프리미엄 | `#premium` | 8가지 프리미엄 카드 |
| 커뮤니티 | `#community` | 커뮤니티 조감도 + 시설 7개 카드 |
| 컨시어지 | `#concierge` | 컨시어지 서비스 + 비대면 진료 |
| 시스템 | `#system` | I GUARD / I ECO / I TOUCH / I SMART |
| 단지배치 | `#complex` | 탭: 단지배치도 / 동호수배치도 |
| 조경설계 | `#landscape` | 시그니처필드 + 어반클러스터 4개 |
| 평면정보 | `#plans` | 탭: 63 / 74 / 84A / 84B / 84C / 99 / 113 / 152P / 171P / 192P / 197P |
| 인테리어 | `#interior` | 탭: 거실 / 침실 / 주방 / 욕실 |

하단 고정바: **관심고객등록**(`#register`로 이동) / **전화걸기**(`tel:1666-6459`).
전화번호는 `config.js`의 `callPhone` 하나만 고치면 전부 반영됩니다.

## 이미지 추가 시 주의 (필수)

`index.html`의 `IMG_SIZE` 표에 **[가로, 세로]를 반드시 등록**하세요.
누락하면 `loading="lazy"` 이미지가 로드 전 높이 0으로 접혀 문서 높이가 무너지고,
메뉴 클릭 시 엉뚱한 위치로 스크롤됩니다.

## 로컬 미리보기

```bash
npx serve .
```
또는 워크스페이스 루트 `.claude/launch.json` 의 `unjeong-ipark-forest` (포트 5057).

## 배포 (GitHub + Vercel)

1. GitHub 저장소 생성 후 push
2. Vercel > New Project > 해당 저장소 Import
3. Settings > Environment Variables 에 `.env.example` 항목 등록
   (`EMAIL_USER`, `EMAIL_PASS`, `RECEIVER_EMAILS`, `SITE_NAME`)
4. 배포 후 `config.js`의 `seo.canonical`에 실제 도메인 입력

수신자 추가는 `RECEIVER_EMAILS`에 콤마로 이어 붙이면 됩니다 (코드 수정 불필요).
