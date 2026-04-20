/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "김효진",
    father: "김인환",
    mother: "박윤경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김하영",
    father: "김창호",
    mother: "김정혜",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-12-12",
    time: "13:30",
    venue: "더아트라움",
    hall: "마리에가든 4층",
    address: "경북 경산시 계양로 38",
    // tel: "02-1234-5678",
    mapLinks: {
      kakao: "https://place.map.kakao.com/710835579",
      naver: "https://naver.me/5negiiVx"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "하나님 안에서 만난 두 사람이\n\n사랑으로 하나 되어\n\n새로운 시작을 하려 합니다.\n\n함께 축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "김효진", bank: "국민은행", number: "624201-04-375451" },
      // { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
      // { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "김하영", bank: "하나은행", number: "000-000-000000" },
      // { role: "아버지", name: "김사장", bank: "기업은행", number: "000-000-000000" },
      // { role: "어머니", name: "이부인", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "김효진 ♥ 김하영 결혼합니다",
    description: "2026년 12월 12일, 소중한 분들을 초대합니다."
  }
};
