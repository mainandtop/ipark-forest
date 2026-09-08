/* =======================================================================
   SITE CONFIG — 운정 아이파크 포레스트
   이 파일 하나만 수정하면 페이지 내용이 전부 바뀝니다.
   (참고 원본: unjeong-iparkcity.com 공식 홈페이지 — 저작권 사용 허락 받음)
   ======================================================================= */
const SITE_CONFIG = {
  /* ── 기본 정보 ── */
  siteName:   "운정 아이파크 포레스트",
  brandEN:    "GRAND FOREST LIFE",
  tagline:    "숲의 도시에서 누리는 랜드마크 라이프, 압도적인 포레스트 라이프가 시작됩니다.",

  /* 하단 '전화걸기' 버튼 및 상담 대표번호 */
  callPhone:  "1666-6459",
  sitePhone:  "1666-6459",

  address:        "경기도 파주시 서패동 432번지 일원 (파주메디컬클러스터 도시개발구역 A2BL)",
  addressRegion:  "경기도",
  addressLocality:"파주시",
  modelHouse:     "경기도 파주시 와동동 1390번지",
  developer:      "파주메디컬클러스터㈜ | IPARK 현대산업개발 | ㈜하나자산신탁",
  totalUnits:     3250,
  unitTypes:      ["63㎡","74㎡","84㎡A","84㎡B","84㎡C","99㎡","113㎡","152㎡P","171㎡P","192㎡P","197㎡P"],
  openHours:      "OPEN 10:00 ~ CLOSE 18:00",

  /* ── 방문예약(관심고객등록 폼) ── */
  visitBooking: {
    dateLabel:    "방문예약 날짜",
    timeLabel:    "방문예약 시간",
    help:         "희망하시는 방문 날짜와 시간을 선택해 주세요. (미선택 시 담당자가 상담 후 조율해 드립니다.)",
    maxDaysAhead: 90,
    times: [
      "오전 10:00", "오전 11:00",
      "오후 12:00", "오후 1:00", "오후 2:00",
      "오후 3:00",  "오후 4:00", "오후 5:00"
    ]
  },

  /* ── 첫 화면 이미지 팝업 ── */
  popup: {
    enabled:      true,
    image:        "assets/images/popup.svg",
    alt:          "운정 아이파크 포레스트 견본주택 개관 · 관심고객등록 안내",
    link:         "#register",
    hideForHours: 24
  },

  /* 히어로(첫 화면) */
  heroBadge:     "운정 아이파크 포레스트 · 견본주택 개관중",
  heroTitleHTML: "운정 <b>아이파크 포레스트</b>",
  heroInfo:      "경기 파주 · 파주메디컬클러스터 A2BL · <b>총 3,250세대</b> · GTX-A 운정중앙역",
  heroImage:     "assets/images/hero.jpg",

  /* SEO */
  seo: {
    title:       "운정 아이파크 포레스트 | 공식 관심고객등록",
    description: "운정 아이파크 포레스트 공식 홍보 페이지. 파주메디컬클러스터 도시개발구역 A2BL, 지하 2층~지상 29층 25개동 총 3,250세대. 사업개요·입지환경·프리미엄·커뮤니티·컨시어지·시스템·단지배치·조경설계·평면정보·인테리어 확인 및 관심고객등록.",
    keywords:    "운정 아이파크 포레스트, 운정아이파크, 운정 아이파크시티, 파주 아이파크, 파주메디컬클러스터, 운정신도시 분양, 파주 서패동 아파트, GTX-A 운정중앙역, 현대산업개발",
    ogImage:     "assets/images/hero.jpg",
    canonical:   "" // 배포 후 실제 도메인 입력 (예: https://unjeong-iparkforest.vercel.app/)
  },

  /* ── 상단/모바일 내비게이션 (sections와 1:1) ── */
  nav: [
    { label: "사업개요",  href: "#overview"  },
    { label: "입지환경",  href: "#location"  },
    { label: "프리미엄",  href: "#premium"   },
    { label: "커뮤니티",  href: "#community" },
    { label: "컨시어지",  href: "#concierge" },
    { label: "시스템",    href: "#system"    },
    { label: "단지배치",  href: "#complex"   },
    { label: "조경설계",  href: "#landscape" },
    { label: "평면정보",  href: "#plans"     },
    { label: "인테리어",  href: "#interior"  }
  ],

  /* ── 사업개요 표 ── */
  overviewTable: [
    ["사 업 명",   "<strong>운정 아이파크 포레스트</strong><br>파주메디컬클러스터 도시개발구역 A2BL 공동주택 신축공사"],
    ["대지위치",   "경기도 파주시 서패동 432번지 일원 (파주메디컬클러스터 도시개발구역 A2BL)"],
    ["건축규모",   "지하 2층 ~ 지상 29층 · 25개동"],
    ["세대규모",   "<strong>총 3,250세대</strong>"],
    ["전용면적",   "63㎡ · 74㎡ · 84㎡A · 84㎡B · 84㎡C · 99㎡ · 113㎡<br>152㎡P · 171㎡P · 192㎡P · 197㎡P"],
    ["위 탁 사",   "파주메디컬클러스터㈜"],
    ["시 공 사",   "IPARK 현대산업개발"],
    ["수 탁 사",   "㈜하나자산신탁"],
    ["문의전화",   "<strong>1666-6459</strong>"]
  ],

  /* ── 타입별 세대수 (가로 스크롤 표) ── */
  blockTable: {
    title: "타입별 세대수",
    head: ["전용면적", "세대수", "비고"],
    rows: [
      ["63㎡",    "243세대",   "-"],
      ["74㎡",    "294세대",   "-"],
      ["84㎡A",   "1,300세대", "주력 타입"],
      ["84㎡B",   "311세대",   "-"],
      ["84㎡C",   "286세대",   "-"],
      ["99㎡",    "415세대",   "-"],
      ["113㎡",   "394세대",   "-"],
      ["152㎡P",  "1세대",     "펜트하우스"],
      ["171㎡P",  "3세대",     "펜트하우스"],
      ["192㎡P",  "1세대",     "펜트하우스"],
      ["197㎡P",  "2세대",     "펜트하우스"],
      ["합 계",   "3,250세대", "25개동"]
    ],
    note: "※ 상기 세대수는 계획 기준이며 인·허가 및 사업 진행 과정에서 변경될 수 있습니다."
  },

  /* ── 섹션 ── */
  sections: [
    {
      id: "overview", ko: "사업개요", en: "OVERVIEW",
      desc: "숲의 도시에서 펼쳐지는 압도적인 포레스트 라이프. 파주메디컬클러스터 A2BL, 지하 2층~지상 29층 25개동 총 3,250세대의 대단지.",
      table: true, blockTable: true,
      images: ["assets/images/overview.jpg"],
      note: "상기 CG 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다."
    },
    {
      id: "location", ko: "입지환경", en: "LOCATION",
      desc: "숲의 여유로움 속에서 편리한 삶을 영위하는 운정 아이파크 포레스트. 자연 · 교통 · 인프라 · 비전이 함께합니다.",
      images: ["assets/images/loc_main.jpg"],
      items: [
        { eyebrow: "THE NATURE IN IPARK FOREST", img: "assets/images/loc_1.jpg",
          title: "일상을 가득 채우는 자연환경",
          text: "단지 밖 4.8만㎡ 공원·녹지와 단지 안 6.4만㎡ 조경을 더한 총 11만㎡의 숲은 물론, 눈앞에 펼쳐진 한강(일부세대)과 심학산으로 모든 일상이 자연 속에서 특별해집니다." },
        { eyebrow: "THE TRAFFIC IN IPARK FOREST", img: "assets/images/loc_2.jpg",
          title: "서울을 쾌속으로 잇는 교통망",
          text: "서울을 잇는 GTX-A, 운정중앙역, 자유로, 제2순환고속도로 등 쾌속교통망이 이동의 속도를 높여 생활권을 폭넓게 만들어줍니다." },
        { eyebrow: "THE INFRA IN IPARK FOREST", img: "assets/images/loc_3.jpg",
          title: "문화와 교육이 우수한 인프라",
          text: "헤이리마을, 스타필드빌리지(예정), 롯데프리미엄 아울렛 등의 도심 인프라부터 단지 앞 초교·숲노을초교(예정), 중·고교, 학원가, 단지 내 교육시설까지 인접합니다." },
        { eyebrow: "THE VISION IN IPARK FOREST", img: "assets/images/loc_4.jpg",
          title: "파주의 내일을 대표하는 비전",
          text: "파주 메디컬 클러스터, 종합병원·의료·바이오 복합단지(예정)의 비전이 운정의 미래와 함께 찾아옵니다." }
      ],
      note: "상기 지역도·이미지·일러스트·내용 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 표현된 개발계획 및 예정사항은 관계기관의 사정에 따라 취소·변경·지연될 수 있으며 이는 사업주체 및 시공사와 무관합니다."
    },
    {
      id: "premium", ko: "프리미엄", en: "PREMIUM",
      desc: "더욱 특별해진 일상과 기대감이 공존하는 삶, 운정 아이파크 포레스트만의 8가지 프리미엄.",
      items: [
        { img: "assets/images/premium_7.png", title: "숲의 여유로 채워진 포레스트 라이프",
          text: "단지 내 조경 6.8만㎡과 단지 밖 공원 4.6만㎡를 더한 총 11만㎡의 그리너리 힐링 라이프." },
        { img: "assets/images/premium_1.png", title: "스케일이 다른 대단지 라이프",
          text: "운정 최대 규모 3,250세대 단일 브랜드 대단지에서 누리는 특별한 라이프의 시작." },
        { img: "assets/images/premium_3.png", title: "메디컬 클러스터 비전 라이프",
          text: "운정이 바라던 종합병원·의료·바이오 복합단지(예정)로 시작되는 새로운 내일." },
        { img: "assets/images/premium_4.png", title: "서울을 한걸음에 쾌속 라이프",
          text: "삼성역 20분대(예정) GTX-A 운정중앙역, 자유로, 평택파주고속도로(예정) 등 광역교통망." },
        { img: "assets/images/premium_5.png", title: "안전한 우리 아이 에듀 라이프",
          text: "단지 앞 초교·숲노을초교(예정), 중·고교, 학원가, 단지 내 교육시설을 갖춘 안심교육." },
        { img: "assets/images/premium_6.png", title: "생활이 풍성해지는 중심 라이프",
          text: "가까운 헤이리마을, 롯데프리미엄아울렛, 파주출판도시, 신도시 내 스타필드빌리지(예정), 이마트 등." },
        { img: "assets/images/premium_2.png", title: "차별화된 품격의 커뮤니티 라이프",
          text: "수영장, 사우나, 실내체육관 등 몸과 마음의 균형을 설계하는 고품격 커뮤니티." },
        { img: "assets/images/premium_8.png", title: "특별한 컨시어지 케어 라이프",
          text: "입주민을 위한 차별화된 주거 서비스(컨시어지, 비대면 진료 등) 제공(예정)으로 높아지는 주거만족." }
      ],
      note: "상기 이미지·일러스트·내용 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 예정사항은 관계기관의 사정에 따라 취소·변경·지연될 수 있습니다."
    },
    {
      id: "community", ko: "커뮤니티", en: "WELLNESS COMMUNITY",
      desc: "문화, 여가, 소통으로 여가의 가치를 키우는 웰니스 감각의 고품격 커뮤니티.",
      images: ["assets/images/community_01.jpg", "assets/images/community_02.jpg"],
      items: [
        { img: "assets/images/community_03.jpg", title: "파크라운지",
          text: "개방감을 높이는 중앙 선큰과 연계하여 커뮤니티 공간의 중심 역할을 하는 휴식공간." },
        { img: "assets/images/community_04.jpg", title: "수영장",
          text: "4레인 규모의 수영장은 물론, 키즈풀·응급처치실·체온조절탕이 함께 설계된 특별한 품격의 수영공간." },
        { img: "assets/images/community_05.jpg", title: "실내체육관",
          text: "개방감이 극대화된 오픈 천장의 코트에서 다양한 운동을 즐길 수 있는 실내 체육공간." },
        { img: "assets/images/community_06.jpg", title: "휘트니스",
          text: "다양한 운동기구와 다수의 러닝머신을 배치하여 쾌적한 환경에서 체력단련에 몰입할 수 있는 운동공간." },
        { img: "assets/images/community_07.jpg", title: "카페테리아",
          text: "정원뷰를 고려한 개방감 있는 인테리어와 3개의 PDR(Private Dining Room)이 갖춰진 라운지." },
        { img: "assets/images/community_08.jpg", title: "골프",
          text: "스크린골프·퍼팅존·락카·휴게존을 분리하여 필드에 나가지 않고도 골프 감각을 유지할 수 있는 연습공간." },
        { img: "assets/images/community_09.jpg", title: "작은도서관",
          text: "자연의 따스한 햇살이 창을 통해 들어오는 아늑한 분위기 속에서 편안하게 독서할 수 있는 공간." }
      ],
      note: "본 사이트 상의 단지배치도 및 CG 이미지는 소비자의 이해를 돕기 위한 이미지 컷으로 실제 시공 시 다소 차이가 있을 수 있습니다."
    },
    {
      id: "concierge", ko: "컨시어지", en: "CONCIERGE CARE",
      desc: "차별화된 주거 서비스로 주거만족을 높이는 특별한 컨시어지 케어 라이프.",
      images: ["assets/images/concierge_1.jpg"],
      items: [
        { title: "품격 있는 일상을 위한 컨시어지 서비스",
          text: "비서 · 런드리 · 리무진 · 방문세차 · 하우스키핑 · 카셰어링 · 케이터링 · 택배예약 · 가정식 배달 · 라이프케어(방충·방역) · 물품보관 · 펫케어 · 마켓(공동구매) · 가전구독 등 다양한 라이프스타일에 맞춘 전문 컨시어지 서비스를 제공하여 청소·세탁·예약·관리 등 일상의 모든 부분을 케어해 드립니다. (예정)" },
        { img: "assets/images/concierge_4.jpg", title: "집 안에서 편리하게 누리는 비대면 진료 서비스",
          text: "병원에 방문하지 않고도 집에서 화상으로 간편하게 진료받고 예약·처방·결제·약 수령 모두 One-Stop으로 이용 가능합니다. (예정)" }
      ],
      note: "입주민 전용 앱(APP) 구축 및 비서 서비스 계약기간은 1년, 비대면 진료 서비스 계약기간은 3년입니다. 모든 서비스는 사용자 부담 원칙으로 유상 제공되며 운영 및 현장 여건에 따라 서비스 종류가 변경될 수 있습니다. HDC현대산업개발과 서비스 사업 주체 ㈜에스엘플랫폼의 업무협약(MOU)을 통해 진행되는 예정 서비스입니다."
    },
    {
      id: "system", ko: "시스템", en: "SMART SYSTEM",
      desc: "보다 안전하게, 보다 쾌적하게. 아이파크가 스마트 라이프를 실현하는 IoT 시스템.",
      images: ["assets/images/system_07.jpg"],
      items: [
        { img: "assets/images/system_01.jpg", eyebrow: "I GUARD", title: "24시간 지켜주는 안심 보안 시스템",
          text: "안면인식 출입 시스템(공동·세대현관), LPR 차량 통제, 원격검침·무인택배, 단지 내 CCTV, 주차장 비상벨 시스템으로 입주민의 안전을 지킵니다." },
        { img: "assets/images/system_02.jpg", eyebrow: "I ECO", title: "에너지를 절감하는 청정 시스템",
          text: "세대 내 100% 스마트 LED 감성조명, 주차장 LED 조명 제어, 거실 무선 AP 일체형 공기질 측정 센서, 놀이터 미세먼지 농도 표시 보안등으로 쾌적함을 더합니다." },
        { img: "assets/images/system_03.jpg", eyebrow: "I TOUCH", title: "손 끝으로 통하는 앞선 라이프스타일",
          text: "거실 월패드, 통합스위치(안방·침실), 현관 스마트 스위치, 부부욕실 비상 스피커폰으로 조명·난방·환기·도어록을 안전하고 편리하게 제어합니다." },
        { img: "assets/images/system_04.jpg", eyebrow: "I SMART", title: "똑똑한 생활을 선사하는 디지털 시스템",
          text: "Push & Pull 지문인식 디지털 도어록, 주차유도 시스템, 방문차량 예약등록, 자동 주차위치 등록, 빈 주차공간 알림까지 편의를 극대화합니다." }
      ],
      note: "입주자 무선 인터넷 환경 구축이 필요하며, 본 사이트 상의 내용 중 일부는 인·허가 과정 또는 실제 시공 시 변경될 수 있습니다. 사진은 소비자의 이해를 돕기 위한 이미지 컷으로 실제와 상이합니다."
    },
    {
      id: "complex", ko: "단지배치", en: "COMPLEX LAYOUT",
      desc: "숲으로 둘러싸인 단지 배치와 동호수 배치를 확인하세요.",
      planTypes: [
        { label: "단지배치도",   images: ["assets/images/complex.jpg"] },
        { label: "동호수배치도", images: ["assets/images/complex_dongho.jpg"] }
      ],
      note: "본 동·호 배치도 및 CG 이미지는 소비자의 이해를 돕기 위한 것으로 제작 과정상 오류가 있을 수 있으니 반드시 견본주택에서 확인하시기 바랍니다."
    },
    {
      id: "landscape", ko: "조경설계", en: "HEALING LANDSCAPE",
      desc: "세련된 경관의 평온함과 커뮤니티의 활기가 함께하는, 다양한 컨셉을 담은 섬세한 감각의 조경.",
      items: [
        { img: "assets/images/landscape_1.jpg", eyebrow: "SIGNATURE FIELD", title: "시그니처필드",
          text: "5,500평 규모의 공간 속에 미러폰드, 잔디마당, 수경관, 티하우스가 펼쳐지는 단지 중심의 대표 커뮤니티 공간." },
        { img: "assets/images/landscape_2.jpg", eyebrow: "URBAN CLUSTER 1", title: "네이처필드",
          text: "수공간과 잔디마당을 곁에 두는 티하우스에서 차분한 시간을 누리는 라운지형 클러스터." },
        { img: "assets/images/landscape_3.jpg", eyebrow: "URBAN CLUSTER 2", title: "포레스트필드",
          text: "숲의 정취를 담은 산책로와 쉼터가 어우러져 온전한 쉼에 몰입할 수 있는 클러스터." },
        { img: "assets/images/landscape_4.jpg", eyebrow: "URBAN CLUSTER 3", title: "아트필드",
          text: "미술작품과 대형목이 함께 어우러진 조형적 공간에서 갤러리에 온 듯한 힐링을 제공하는 입체적 클러스터." },
        { img: "assets/images/landscape_5.jpg", eyebrow: "URBAN CLUSTER 4", title: "커뮤니티필드",
          text: "놀이·휴식·소통을 위한 놀이공간과 휴게정원 속에서 세대 간 교감이 형성되는 세대 통합형 클러스터." }
      ],
      note: "본 사이트 상의 CG 이미지는 소비자의 이해를 돕기 위한 이미지 컷으로 실제 시공 시 다소 차이가 있을 수 있습니다."
    },
    {
      id: "plans", ko: "평면정보", en: "FLOOR PLAN",
      desc: "타입을 선택하면 아이소메트릭 · 평면도 · 유니크 스페이스를 확인할 수 있습니다.",
      planTypes: [
        { label: "63㎡",   block: "243세대",   images: ["assets/images/plan_01.jpg","assets/images/plan_02.jpg","assets/images/plan_03.jpg"] },
        { label: "74㎡",   block: "294세대",   images: ["assets/images/plan_04.jpg","assets/images/plan_05.jpg","assets/images/plan_06.jpg"] },
        { label: "84㎡A",  block: "1,300세대", images: ["assets/images/plan_07.jpg","assets/images/plan_08.jpg","assets/images/plan_09.jpg"] },
        { label: "84㎡B",  block: "311세대",   images: ["assets/images/plan_10.jpg","assets/images/plan_11.jpg","assets/images/plan_12.jpg"] },
        { label: "84㎡C",  block: "286세대",   images: ["assets/images/plan_13.jpg","assets/images/plan_14.jpg","assets/images/plan_15.jpg"] },
        { label: "99㎡",   block: "415세대",   images: ["assets/images/plan_16.jpg","assets/images/plan_17.jpg","assets/images/plan_18.jpg"] },
        { label: "113㎡",  block: "394세대",   images: ["assets/images/plan_19.jpg","assets/images/plan_20.jpg","assets/images/plan_21.jpg"] },
        { label: "152㎡P", block: "펜트 1세대", images: ["assets/images/plan_22.jpg","assets/images/plan_23.jpg"] },
        { label: "171㎡P", block: "펜트 3세대", images: ["assets/images/plan_24.jpg","assets/images/plan_25.jpg"] },
        { label: "192㎡P", block: "펜트 1세대", images: ["assets/images/plan_26.jpg","assets/images/plan_27.jpg"] },
        { label: "197㎡P", block: "펜트 2세대", images: ["assets/images/plan_28.jpg","assets/images/plan_29.jpg"] }
      ],
      note: "본 사이트 상의 아이소·평면도는 소비자의 이해를 돕기 위해 제작된 것으로 외곽 라인·내부 레이아웃·마감·가구 디자인 등 세부사항은 변경될 수 있습니다. 면적 수치는 제작 과정상 오탈자가 있을 수 있으므로 계약 시 반드시 견본주택에서 확인하시기 바랍니다."
    },
    {
      id: "interior", ko: "인테리어", en: "INTERIOR",
      desc: "다른 감각과 디테일로 완성한 공간. 공간별 인테리어를 확인하세요.",
      planTypes: [
        { label: "거실 LIVING", images: ["assets/images/interior_01.jpg","assets/images/interior_02.jpg","assets/images/interior_03.jpg"] },
        { label: "침실 BED",    images: ["assets/images/interior_04.jpg","assets/images/interior_05.jpg","assets/images/interior_06.jpg","assets/images/interior_07.jpg"] },
        { label: "주방 DINING", images: ["assets/images/interior_08.jpg","assets/images/interior_09.jpg","assets/images/interior_10.jpg"] },
        { label: "욕실 BATH",   images: ["assets/images/interior_11.jpg","assets/images/interior_12.jpg","assets/images/interior_13.jpg"] }
      ],
      note: "본 사이트 상의 사진은 사이버 모델하우스 및 견본주택 오픈일 이전에 촬영한 것으로, 기본 마감재 이외의 옵션 및 연출 상품이 포함되어 있으며 마감재 색상 및 사항은 실제와 상이할 수 있으니 반드시 견본주택에서 확인하시기 바랍니다."
    }
  ],

  /* ── 개인정보/푸터 ── */
  privacyPurpose: "운정 아이파크 포레스트 관련 상담 및 분양 안내 서비스 제공",
  footerDisclaimer: "본 홈페이지에 사용된 CG, 이미지, 일러스트 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 및 사업 진행 과정에서 변경될 수 있습니다. 본 일러스트에 표현된 혁신의료연구단지·바이오융복합단지·의료시설·초등학교·공동주택 부지는 예정 부지이며 사업추진 과정 중 변경·지연·취소될 수 있고, 이는 시행사 및 시공사와 무관합니다. 정확한 내용은 반드시 입주자 모집공고문 및 견본주택을 통해 확인하시기 바랍니다.",
  year: 2026
};
