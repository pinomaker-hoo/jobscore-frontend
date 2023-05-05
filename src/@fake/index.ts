// ** Type Imports
import { Category, Company, Question } from '@/types'

const categryData: Category[] = [
  { id: 1, title: '현재 회사의 업무 강도', type: Company.MY },
  { id: 2, title: '현재 회사의 출 퇴근 자유도', type: Company.MY },
  { id: 3, title: '현재 회사의 복지 점수', type: Company.MY },
  { id: 4, title: '현재 회사의 성장 가능성   ', type: Company.MY },
  { id: 5, title: '원하는 회사의 업무 강도', type: Company.WANT },
  { id: 6, title: '원하는 회사의 출 퇴근 자유도', type: Company.WANT },
  { id: 7, title: '원하는 회사의 복지 점수', type: Company.WANT },
  { id: 8, title: '원하는 회사의 성장 가능성   ', type: Company.WANT },
]

export const questionData: Question[] = [
  {
    id: 1,
    question: '현재 받는 급여대비 업무량은 어느 정도 인가요?',
    categoryId: 1,
    answer: [
      {
        id: 1,
        text: '급여 대비 업무가 터무니 없이 많아요.',
        point: 3,
      },
      {
        id: 2,
        text: '업무량은 많지만, 배우는것도 많아요.',
        point: 15,
      },
      {
        id: 3,
        text: '업무량은 많지만, 금전적으로 보상받고 있어요.',
        point: 24,
      },
      {
        id: 4,
        text: '급여와 업무량이 비례하거나, 급여대비 업무가 적어요.',
        point: 36,
      },
    ],
  },
  {
    id: 2,
    question: '현재 회사에 불필요한 회의가 있나요?',
    categoryId: 1,
    answer: [
      {
        id: 5,
        text: '모든 회의가 불필요해요.',
        point: 3,
      },
      {
        id: 6,
        text: '대다수가 불필요하지만, 감당해야 한다고 생각하고 있어요.',
        point: 15,
      },
      {
        id: 7,
        text: '불필요한 회의가 가끔 있어요.',
        point: 24,
      },
      {
        id: 8,
        text: '불필요한 회의는 아예 없어요.',
        point: 36,
      },
    ],
  },
  {
    id: 3,
    question: '현재 회사에서 내가 맡고 있는 업무 외 다른 업무를 하나요?',
    categoryId: 1,
    answer: [
      {
        id: 9,
        text: '업무시간 외 상사의 개인적인 심부름도 있어요.',
        point: 3,
      },
      {
        id: 10,
        text: '회사 내에서 업무시간에 간혹 다른 업무를 하기도 해요.',
        point: 15,
      },
      {
        id: 11,
        text: '제가 꼭 필요한 자리라면 다른 업무를 하기도 해요.',
        point: 24,
      },
      {
        id: 12,
        text: '제가 맡은 업무만 하고 있어요.',
        point: 36,
      },
    ],
  },
  {
    id: 4,
    question: '현재 회사의 야근이 어느 정도 인가요?',
    categoryId: 1,
    answer: [
      {
        id: 13,
        text: '집에 잘 못가요.',
        point: 3,
      },
      {
        id: 14,
        text: '미리 야근여부를 알려주고 야근해요.',
        point: 15,
      },
      {
        id: 15,
        text: '정시 퇴근은 아니어도, 늦지 않게 퇴근해요.',
        point: 24,
      },
      {
        id: 16,
        text: '무조건 칼퇴근 해요.',
        point: 36,
      },
    ],
  },
  {
    id: 5,
    question: '현재 공휴일에 업무를 하는 경우도 있나요?',
    categoryId: 1,
    answer: [
      {
        id: 17,
        text: '저의 주말은 저의 것이 아닙니다.',
        point: 3,
      },
      {
        id: 18,
        text: '꼭 필요한 상황에만 간혹 있어요.',
        point: 15,
      },
      {
        id: 19,
        text: '간혹 있지만 금전적으로 보상받고 있어요.',
        point: 24,
      },
      {
        id: 20,
        text: '일은 근로일에만 하고있어요.',
        point: 36,
      },
    ],
  },
  {
    id: 6,
    question: '현재 회사는 어떤 근무방식인가요?',
    categoryId: 2,
    answer: [
      {
        id: 21,
        text: '정시 출근하고 퇴근하고 있어요.',
        point: 3,
      },
      {
        id: 22,
        text: '재택 근무를 포함하는 방식이 이에요.',
        point: 15,
      },
      {
        id: 23,
        text: '탄력 근무제를 시행하고 있어요.',
        point: 24,
      },
      {
        id: 24,
        text: '완전 자율 근무에요.',
        point: 36,
      },
    ],
  },
  {
    id: 7,
    question: '회식 참여 여부는 어떻게 정해지나요?',
    categoryId: 2,
    answer: [
      {
        id: 25,
        text: '상사가 원하면 무조건 참여해야 해요.',
        point: 3,
      },
      {
        id: 26,
        text: '미리 공지된 회식은 참여해야 해요.',
        point: 15,
      },
      {
        id: 27,
        text: '친한 팀원간 합의된 회식만 참여하고 있어요.',
        point: 24,
      },
      {
        id: 28,
        text: '자율적으로 참여할 수 있어요.',
        point: 36,
      },
    ],
  },
  {
    id: 8,
    question: '통근비 지원 제도가 있나요?',
    categoryId: 2,
    answer: [
      {
        id: 29,
        text: '출퇴근은 알아서 해요.',
        point: 3,
      },
      {
        id: 30,
        text: '일부 지원받고 있어요.',
        point: 15,
      },
      {
        id: 31,
        text: '출 퇴근 비용 전액을 지원받고 있어요.',
        point: 24,
      },
      {
        id: 32,
        text: '통근버스 혹은 차량을 지원받고 있어요.',
        point: 36,
      },
    ],
  },
  {
    id: 9,
    question: '현재 회사의 지각제도는?',
    categoryId: 2,
    answer: [
      {
        id: 33,
        text: '시말서를 작성해요.',
        point: 3,
      },
      {
        id: 34,
        text: '연차에서 차감해요.',
        point: 15,
      },
      {
        id: 35,
        text: '듣기 싫은 소리가 들려요.',
        point: 24,
      },
      {
        id: 36,
        text: '그 누구도 뭐라고 하지 않아요.',
        point: 36,
      },
    ],
  },
  {
    id: 10,
    question: '현재 통근 시간이 얼마나 걸리나요?',
    categoryId: 2,
    answer: [
      {
        id: 37,
        text: '2시간 이상 걸려요.',
        point: 3,
      },
      {
        id: 38,
        text: '1~2시간 정도 걸려요.',
        point: 15,
      },
      {
        id: 39,
        text: '1시간 이내에요.',
        point: 24,
      },
      {
        id: 40,
        text: '30분 이내에요.',
        point: 36,
      },
    ],
  },
  {
    id: 11,
    question: '현재 급여가 어느 정도라고 생각하세요?',
    categoryId: 3,
    answer: [
      {
        id: 41,
        text: '열정페이에요.',
        point: 3,
      },
      {
        id: 42,
        text: '업계 평균이에요.',
        point: 15,
      },
      {
        id: 43,
        text: '업계에서 평균 이상은 되는 것 같아요.',
        point: 24,
      },
      {
        id: 44,
        text: '업계 최고 대우에요.',
        point: 36,
      },
    ],
  },
  {
    id: 12,
    question: '현재 연차는 어떻게 사용하고 있나요?',
    categoryId: 3,
    answer: [
      {
        id: 45,
        text: '연차가 뭐죠?',
        point: 3,
      },
      {
        id: 46,
        text: '업무에 지장이 가지 않는 선에서 사용하고 있어요.',
        point: 15,
      },
      {
        id: 47,
        text: '미리 말하면 원하는 날 사용할 수 있어요.',
        point: 24,
      },
      {
        id: 48,
        text: '지금 당장도 사용할 수 있어요!',
        point: 36,
      },
    ],
  },
  {
    id: 13,
    question: '직원을 위한 자기개발 프로그램이 있나요?',
    categoryId: 3,
    answer: [
      {
        id: 49,
        text: '없어요.',
        point: 3,
      },
      {
        id: 50,
        text: '지정해준 자기개발 프로그램에 참여해야 해요.',
        point: 15,
      },
      {
        id: 51,
        text: '선택적 참여가 가능한 프로그램이 있어요.',
        point: 24,
      },
      {
        id: 52,
        text: '자기개발 할 수 있는 돈을 지원해 줘요.',
        point: 36,
      },
    ],
  },
  {
    id: 14,
    question: '식사는 어떻게 제공되고 있나요?',
    categoryId: 3,
    answer: [
      {
        id: 53,
        text: '밥은 사비로 알아서 사먹어요.',
        point: 3,
      },
      {
        id: 54,
        text: '식비의 일부를 지원받고 있어요.',
        point: 15,
      },
      {
        id: 55,
        text: '무료 직원식당이 있어요.',
        point: 24,
      },
      {
        id: 56,
        text: '식비 카드를 제공받아요.',
        point: 36,
      },
    ],
  },
  {
    id: 15,
    question: '월급 외 보너스 지급 횟수',
    categoryId: 3,
    answer: [
      {
        id: 57,
        text: '보너스가 뭐죠?',
        point: 3,
      },
      {
        id: 58,
        text: '명절엔 보너스를 받아요.',
        point: 15,
      },
      {
        id: 59,
        text: '명절 제외 2회 이상은 받고 있어요.',
        point: 24,
      },
      {
        id: 60,
        text: '명절 제외 분기마다 받고 있어요.',
        point: 36,
      },
    ],
  },
  {
    id: 16,
    question: '현재 연봉 인상률은 어떻게 되나요?',
    categoryId: 4,
    answer: [
      {
        id: 61,
        text: '동결 혹은 하락.',
        point: 3,
      },
      {
        id: 62,
        text: '물가상승률만큼은 올랐어요.',
        point: 15,
      },
      {
        id: 63,
        text: '5~10% 정도는 올랐어요.',
        point: 24,
      },
      {
        id: 64,
        text: '20% 이상 올랐어요.',
        point: 36,
      },
    ],
  },
  {
    id: 17,
    question: '현재 나의 직무가 얼마나 잘 맞나요?',
    categoryId: 4,
    answer: [
      {
        id: 65,
        text: '하나도 안맞아요.',
        point: 3,
      },
      {
        id: 66,
        text: '처음엔 잘 안맞았지만 맞춰가고 있어요.',
        point: 15,
      },
      {
        id: 67,
        text: '일부 안맞는 부분이 있지만 감수하고 있어요.',
        point: 24,
      },
      {
        id: 68,
        text: '저와 잘 맞아요.',
        point: 36,
      },
    ],
  },
  {
    id: 18,
    question: '현재 업무가 본인의 이력에 얼마나 도움 되나요?',
    categoryId: 4,
    answer: [
      {
        id: 69,
        text: '아무 도움이 안돼요.',
        point: 3,
      },
      {
        id: 70,
        text: '아주 일부만 도움돼요.',
        point: 15,
      },
      {
        id: 71,
        text: '적어도 절반의 업무는 이력에 도움돼요.',
        point: 24,
      },
      {
        id: 72,
        text: '모든 업무가 커리어에 도움돼요.',
        point: 36,
      },
    ],
  },
  {
    id: 19,
    question: '현재 회사에서 개인 성장이 이루어지고 있나요?',
    categoryId: 4,
    answer: [
      {
        id: 73,
        text: '저는 성장하지 않아요.',
        point: 3,
      },
      {
        id: 74,
        text: '정체되지는 않은 것 같아요.',
        point: 15,
      },
      {
        id: 75,
        text: '연차에 맞는 성장은 하고있어요.',
        point: 24,
      },
      {
        id: 76,
        text: '저의 연차보다 높은 성장을 하고 있어요.',
        point: 36,
      },
    ],
  },
  {
    id: 20,
    question: '현재 회사에 비전이 있나요?',
    categoryId: 4,
    answer: [
      {
        id: 77,
        text: '지금 이 회사가 언제 망해도 이상하지 않아요.',
        point: 3,
      },
      {
        id: 78,
        text: '지금 잘 살아는 있는데, 비전은 없어요.',
        point: 15,
      },
      {
        id: 79,
        text: '동기부여를 위한 어느 정도의 비전이 있어요.',
        point: 24,
      },
      {
        id: 80,
        text: '성공적인 비즈니스 모델과 비전이 함께해요.',
        point: 36,
      },
    ],
  },
  {
    id: 21,
    question: '급여 대비 업무량은 어느 정도가 괜찮을 것 같나요?',
    categoryId: 5,
    answer: [
      {
        id: 81,
        text: '얼마든지 괜찮아요.',
        point: 3,
      },
      {
        id: 82,
        text: '배울수만 있다면 업무량이 많더라도 상관없어요.',
        point: 15,
      },
      {
        id: 83,
        text: '어느정도 업무량에 따라 상여금정도는 있어야 한다고 생각해요.',
        point: 24,
      },
      {
        id: 84,
        text: '급여와 업무량은 무조건 비례해야죠!',
        point: 36,
      },
    ],
  },
  {
    id: 22,
    question: '불필요한 회의에 대해 어떻게 생각하시나요?',
    categoryId: 5,
    answer: [
      {
        id: 85,
        text: '불필요한 회의란 없다고 생각해요.',
        point: 3,
      },
      {
        id: 86,
        text: '내키진 않지만 감당해야 한다고 생각해요.',
        point: 15,
      },
      {
        id: 87,
        text: '아주 가끔이라면 괜찮아요.',
        point: 24,
      },
      {
        id: 88,
        text: '불필요한 회의가 없는 회사가 좋아요.',
        point: 36,
      },
    ],
  },
  {
    id: 23,
    question: '직무외 다른 업무를 하는 것에 대해 어떻게 생각하시나요?',
    categoryId: 5,
    answer: [
      {
        id: 89,
        text: '상사가 시키는 일은 심부름도 업무라고 생각해요.',
        point: 3,
      },
      {
        id: 90,
        text: '업무시간에 이루어지는 일은 모두 업무라고 생각해요.',
        point: 15,
      },
      {
        id: 91,
        text: '어느 정도 조정은 필요하겠지만 웬만하면 할 것 같아요.',
        point: 24,
      },
      {
        id: 92,
        text: '제가 맡은 업무만 하고 싶어요.',
        point: 36,
      },
    ],
  },
  {
    id: 24,
    question: '회사의 야근은 어느 정도가 좋을까요?',
    categoryId: 5,
    answer: [
      {
        id: 93,
        text: '집에 못가도 상관 없어요.',
        point: 3,
      },
      {
        id: 94,
        text: '미리 야근여부를 알면 얼마든 괜찮아요.',
        point: 15,
      },
      {
        id: 95,
        text: '1~2시간 정도 늦어지는 건 괜찮아요.',
        point: 24,
      },
      {
        id: 96,
        text: '칼퇴근 하고 제 시간을 보내야해요.',
        point: 36,
      },
    ],
  },
  {
    id: 25,
    question: '공휴일에 업무를 하는 것에 대해 어떻게 생각하시나요?',
    categoryId: 5,
    answer: [
      {
        id: 97,
        text: '무조건 하는 것이 맞다고 생각해요.',
        point: 3,
      },
      {
        id: 98,
        text: '상황에 따라 융통성 있게 대처 가능해요.',
        point: 15,
      },
      {
        id: 99,
        text: '휴일근무수당을 챙겨주시면 가능해요.',
        point: 24,
      },
      {
        id: 100,
        text: '일은 근로일에만 하고싶어요.',
        point: 36,
      },
    ],
  },
  {
    id: 26,
    question: '회사의 어떤 근무방식이 좋나요?',
    categoryId: 6,
    answer: [
      {
        id: 101,
        text: '정시 출근하고 퇴근하는게 좋아요.',
        point: 3,
      },
      {
        id: 102,
        text: '재택 근무를 포함하면 좋겠어요.',
        point: 15,
      },
      {
        id: 103,
        text: '탄력 근무제를 했으면 좋겠어요.',
        point: 24,
      },
      {
        id: 104,
        text: '완전 자율 근무였으면 좋겠어요.',
        point: 36,
      },
    ],
  },
  {
    id: 27,
    question: '회식 참여 여부는 어떻게 이뤄졌으면 좋겠나요?',
    categoryId: 6,
    answer: [
      {
        id: 105,
        text: '상사가 원하면 참여해야한다고 생각해요.',
        point: 3,
      },
      {
        id: 106,
        text: '미리 공지된 회식은 참여해야 한다고 생각해요.',
        point: 15,
      },
      {
        id: 107,
        text: '친한 팀원간 합의된 회식만 참여하고 싶어요.',
        point: 24,
      },
      {
        id: 108,
        text: '자율적으로 참여할 수 있으면 좋겠어요.',
        point: 36,
      },
    ],
  },
  {
    id: 28,
    question: '통근비 지원에 대해 어느 정도가 좋나요?',
    categoryId: 6,
    answer: [
      {
        id: 109,
        text: '출퇴근은 알아서 해도 무관해요.',
        point: 3,
      },
      {
        id: 110,
        text: '일부 지원받고 싶어요.',
        point: 15,
      },
      {
        id: 111,
        text: '출 퇴근 비용 전액을 지원받고 싶어요',
        point: 24,
      },
      {
        id: 112,
        text: '통근버스 혹은 차량을 지원받고싶어요.',
        point: 36,
      },
    ],
  },
  {
    id: 29,
    question: '회사의 지각제도에 대해 어떻게 생각하시나요?',
    categoryId: 6,
    answer: [
      {
        id: 113,
        text: '시말서를 써야한다고 생각해요.',
        point: 3,
      },
      {
        id: 114,
        text: '연차에서 차감해야 한다고 생각해요.',
        point: 15,
      },
      {
        id: 115,
        text: '듣기 싫은 소리 정도는 감내해야한다고 생각해요.',
        point: 24,
      },
      {
        id: 116,
        text: '상황에 따라 어쩔 수 없는 지각은 생길수 있죠.',
        point: 36,
      },
    ],
  },
  {
    id: 30,
    question: '통근 시간은 어느정도까지 가능한가요?',
    categoryId: 6,
    answer: [
      {
        id: 117,
        text: '2시간 이상도 괜찮아요.',
        point: 3,
      },
      {
        id: 118,
        text: '1~2시간 정도도 괜찮아요.',
        point: 15,
      },
      {
        id: 119,
        text: '1시간 넘으면 그 회사는 못가요.',
        point: 24,
      },
      {
        id: 120,
        text: '무조건 30분 이내여야 돼요.',
        point: 36,
      },
    ],
  },
  {
    id: 31,
    question: '급여는 어느 정도 받아야 한다고 생각하나요?',
    categoryId: 7,
    answer: [
      {
        id: 121,
        text: '열정페이도 가능해요.',
        point: 3,
      },
      {
        id: 122,
        text: '업계 평균은 돼야 할 것 같아요.',
        point: 15,
      },
      {
        id: 123,
        text: '업계 평균 이상은 돼야 할 것 같아요.',
        point: 24,
      },
      {
        id: 124,
        text: '업계 최고 대우를 원해요.',
        point: 36,
      },
    ],
  },
  {
    id: 32,
    question: '연차는 어떻게 사용하는 것이 좋은가요?',
    categoryId: 7,
    answer: [
      {
        id: 125,
        text: '사용하지 않아도 돼요.',
        point: 3,
      },
      {
        id: 126,
        text: '업무에 지장이 가지 않는 선에서 사용하는게 좋아요.',
        point: 15,
      },
      {
        id: 127,
        text: '미리 말하고 원하는 날 사용할 수 있으면 돼요.',
        point: 24,
      },
      {
        id: 128,
        text: '언제든 자유롭게 사용해야돼요!',
        point: 36,
      },
    ],
  },
  {
    id: 33,
    question: '직원을 위한 자기개발 프로그램에 대해서 어떤 생각인가요?',
    categoryId: 7,
    answer: [
      {
        id: 129,
        text: '지원해주지 않아도 상관없어요.',
        point: 3,
      },
      {
        id: 130,
        text: '도움이 된다면 강제 참여라도 괜찮아요.',
        point: 15,
      },
      {
        id: 131,
        text: '선택적 참여가 가능한 프로그램이 있어야해요.',
        point: 24,
      },
      {
        id: 132,
        text: '자기개발 할 수 있는 돈을 줘야해요.',
        point: 36,
      },
    ],
  },
  {
    id: 34,
    question: '식사는 어떻게 제공 되는 것이 좋은가요?',
    categoryId: 7,
    answer: [
      {
        id: 133,
        text: '밥은 알아서 사먹어도 괜찮아요.',
        point: 3,
      },
      {
        id: 134,
        text: '식비의 일부를 지원받고 싶어요.',
        point: 15,
      },
      {
        id: 135,
        text: '무료 직원식당이 있었으면 좋겠어요.',
        point: 24,
      },
      {
        id: 136,
        text: '식비 전액을 지원 받아야 해요.',
        point: 36,
      },
    ],
  },
  {
    id: 35,
    question: '원하는 월급 외 보너스 지급 횟수는?',
    categoryId: 7,
    answer: [
      {
        id: 137,
        text: '보너스 없어도 상관없어요.',
        point: 3,
      },
      {
        id: 138,
        text: '명절엔 받고싶어요.',
        point: 15,
      },
      {
        id: 139,
        text: '명절 제외 2회 이상은 받고 싶어요.',
        point: 24,
      },
      {
        id: 140,
        text: '명절 제외 분기별로 받고 싶어요.',
        point: 36,
      },
    ],
  },
  {
    id: 36,
    question: '원하는 연봉 인상률은 어떻게 되나요?',
    categoryId: 8,
    answer: [
      {
        id: 141,
        text: '동결돼도 상관 없어요.',
        point: 3,
      },
      {
        id: 142,
        text: '물가상승률 만큼은 올랐으면 좋겠어요.',
        point: 15,
      },
      {
        id: 143,
        text: '10% 이상은 올랐으면 좋겠어요.',
        point: 24,
      },
      {
        id: 144,
        text: '20% 이상.',
        point: 36,
      },
    ],
  },
  {
    id: 37,
    question: '나와 직무가 얼마나 잘 맞길 원하나요?',
    categoryId: 8,
    answer: [
      {
        id: 145,
        text: '시켜만 주신다면 하나도 안맞아도 상관없어요.',
        point: 3,
      },
      {
        id: 146,
        text: '처음엔 잘 안맞더라도 다니면서 맞춰가는거라 생각해요.',
        point: 15,
      },
      {
        id: 147,
        text: '어느 정도 잘 맞으면 일부 안맞는 부분은 감수할 수 있어요.',
        point: 24,
      },
      {
        id: 148,
        text: '저와 잘 맞는 직무만 할래요.',
        point: 36,
      },
    ],
  },
  {
    id: 38,
    question: '회사에서 하는 업무가 본인의 이력에 얼마나 도움 되길 원하나요?',
    categoryId: 8,
    answer: [
      {
        id: 149,
        text: '돈만 주신다면, 아무 도움 안돼도 상관 없어요.',
        point: 3,
      },
      {
        id: 150,
        text: '아주 일부만 도움돼도 상관없어요.',
        point: 15,
      },
      {
        id: 151,
        text: '적어도 절반의 업무는 이력에 도움이 되길 원해요.',
        point: 24,
      },
      {
        id: 152,
        text: '커리어에 도움되는 업무만 할래요.',
        point: 36,
      },
    ],
  },
  {
    id: 39,
    question: '개인 성장률은 얼마나 중요하게 생각하나요?',
    categoryId: 8,
    answer: [
      {
        id: 153,
        text: '성장하지 않아도 상관 없어요.',
        point: 3,
      },
      {
        id: 154,
        text: '정체되지만 않으면 될 것 같아요.',
        point: 15,
      },
      {
        id: 155,
        text: '연차에 맞는 성장은 하고싶어요.',
        point: 24,
      },
      {
        id: 156,
        text: '저의 연차보다 높은 성장률을 원해요.',
        point: 36,
      },
    ],
  },
  {
    id: 40,
    question: '회사의 비전은 얼마나 중요한가요?',
    categoryId: 8,
    answer: [
      {
        id: 157,
        text: '이 회사가 언제 망해도 상관없어요.',
        point: 3,
      },
      {
        id: 158,
        text: '지금 잘 살아있는 회사라면 상관없어요.',
        point: 15,
      },
      {
        id: 159,
        text: '동기부여를 위한 어느 정도의 비전은 필요하다고 생각해요.',
        point: 24,
      },
      {
        id: 160,
        text: '성공적인 비즈니스 모델과 비전은 필수에요.',
        point: 36,
      },
    ],
  },
]