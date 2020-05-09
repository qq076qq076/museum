import { Question } from './type/type';

export const FirstQuestion: Question = {
  type: 'image',
  topic: '以下哪張圖片讓你看了心碰碰跳呢？',
  background: '01_bg.png',
  optionList: [
    {
      value: '1',
      src: '01_03.jpg',
      next: 2,
    },
    {
      value: '2',
      src: '01_01.jpg',
      next: 0
    },
    {
      value: '3',
      src: '01_02.jpg',
      next: 1,
    },
  ],
};
export const SecondQuestion: Question[] = [
  {
    type: 'text',
    topic: '假想自已是名小老闆，你會選擇以下哪種商品進行販售呢？',
    background: '02_bg_2.png',
    optionList: [
      {
        text: '手作商品',
        value: 'b1',
      },
      {
        text: '健康蔬果或咖啡',
        value: 'b2',
      },
    ],
  },
  {
    type: 'text',
    topic: '眼前有一個白色陶壺，你會想做的是？',
    background: '02_bg_3.png',
    optionList: [
      {
        text: '幫陶壺裝飾打扮一番',
        value: 'c1',
      },
      {
        text: '想知道陶壺的身家背景',
        value: 'c2',
      },
    ],
  },
  {
    type: 'text',
    topic: '以下哪個活動名稱最吸引你？',
    background: '02_bg_1.png',
    optionList: [
      {
        text: '第一次說故事就上手',
        value: 'a1',
      },
      {
        text: '無塑生活大挑戰',
        value: 'a2',
      },
    ],
  },
];

export const QuestionList: Question[] = [
  {
    type: 'image',
    topic: '以下景點，您會想在哪裡進行拍照打卡？',
    background: '03_bg.png',
    optionList: [
      {
        value: '1',
        src: '03_01.jpg',
      },
      {
        value: '2',
        src: '03_02.JPG'
      },
      {
        value: '3',
        src: '03_03.jpg'
      },
    ],
  },
  {
    type: 'image',
    topic: '你會選擇哪一個地方作為約會的場域呢？',
    background: '04_bg.png',
    optionList: [
      {
        value: '1',
        src: '04_01.jpg',
      },
      {
        value: '2',
        src: '04_02.jpg'
      },
      {
        value: '3',
        src: '04_03.jpg'
      },
    ],
  },
  {
    type: 'text',
    topic: '這裡有個閒置的倉庫，你會想拿來經營什麼呢？',
    background: '05_bg.png',
    optionList: [
      {
        value: '1',
        text: '文創小舖店',
      },
      {
        value: '2',
        text: '旅館',
      },
      {
        value: '3',
        text: '食農市集',
      },
      {
        value: '4',
        text: '博物館或美術館',
      },
    ],
  },
  {
    type: 'text',
    topic: '逛博物館卻走到肚子餓，\n此時發現旁邊有在賣吃的，你會選擇吃哪一樣料理？',
    background: '06_bg.png',
    optionList: [
      {
        value: '1',
        text: '南國什錦沙拉',
      },
      {
        value: '2',
        text: '老鷹紅豆泥煎餅佐苦甜巧克力',
      },
    ],
  },
  {
    type: 'text',
    topic: '前面聚集了一大群人，你覺得那邊可能有什麼事情在發生？',
    background: '07_bg.png',
    optionList: [
      {
        value: '1',
        text: '親子正在兒童博物館外排隊進去遊玩',
      },
      {
        value: '2',
        text: '民衆正在排隊買獨特的文創商品',
      },
    ],
  },
  {
    type: 'text',
    topic: '在網路上發現有新創料理的課程，是運用屏東在地食材創作一道「清燙石斑佐薑汁紅藜醬」，你會選擇參加課程嗎？',
    background: '08_bg.png',
    optionList: [
      {
        value: '1',
        text: '會',
      },
      {
        value: '2',
        text: '不會',
      },
    ],
  },
  {
    type: 'text',
    topic: '如果有朋友邀請你一起參加「創意圖騰蜂蠟布」活動，你的選擇會是？',
    background: '09_bg.png',
    optionList: [
      {
        value: '1',
        text: '肯定立馬答應',
      },
      {
        value: '2',
        text: '不感興趣',
      },
    ],
  },
  {
    type: 'text',
    topic: '在逛美術館時，突然覺得有個東西在你背後，轉頭一看，你會看見什麼？',
    background: '10_bg.png',
    optionList: [
      {
        value: '1',
        text: '跟你一樣高的雕刻作品',
      },
      {
        value: '2',
        text: '導覽志工跟在你背後',
      },
    ],
  },
  {
    type: 'text',
    topic: '走進展間，發現裡面有著原住民所創作出的厲害木雕作品，此時你會發出的驚嘆語氣是？',
    background: '11_bg.png',
    optionList: [
      {
        value: '1',
        text: '哇~ Wow~',
      },
      {
        value: '2',
        text: '喔~ Oh~',
      },
    ],
  },
  {
    type: 'text',
    topic: '一早起床，你的朋友傳了一封訊息給你，上面的內容會是？',
    background: '12_bg.png',
    font: 'small',
    optionList: [
      {
        value: '1',
        text: '誒~我已經幫你報名「創意食農。健康生活」記得來喔',
      },
      {
        value: '2',
        text: '我昨天在美術館裡看到了好多屏東在地藝術家的作品！',
      },
      {
        value: '3',
        text: '我發現兒童博物館裡的互動遊戲超好玩~',
      },
      {
        value: '4',
        text: '最近博物館推出「創新食農大秘辛」感覺有厲害~',
      },
    ],
  },
  {
    type: 'text',
    topic: '你想在博物館裡為另外一伴創造驚喜，你會選擇在哪個地點送出禮物呢？',
    background: '13_bg.png',
    font: 'small',
    optionList: [
      {
        value: '1',
        text: '具有濃濃藝術氣息的屏東藝術史常設展',
      },
      {
        value: '2',
        text: '在琳瑯滿目的文創商店前',
      },
      {
        value: '3',
        text: '吃著獨具創意食農料理的用餐地點',
      },
      {
        value: '4',
        text: '在充滿歡樂氛圍的兒童博物裡',
      },
    ],
  },
  {
    type: 'text',
    topic: '博物館正舉辦有關屏東的「創新食農大秘辛」分享會，以下哪種主題你會有興趣參加呢？',
    background: '14_bg.png',
    font: 'small',
    optionList: [
      {
        value: '1',
        text: '真「巧」遇見你~ 抗氧化幸福背後的巧克力故事',
      },
      {
        value: '2',
        text: '「蕉」個朋友吧！一起挖出屏東香蕉的前世今生',
      },
      {
        value: '3',
        text: '眼淚雖鹹但成果很甜~ 蓮霧的逆境生存術',
      },
      {
        value: '4',
        text: '遠「藜」負擔！讓紅藜麥成為你減重養身的好朋友',
      },
    ],
  },
  {
    type: 'image',
    topic: '來玩一場躲貓貓，依你的直覺，會想躲在哪個空間裡？',
    background: '14_bg.png',
    optionList: [
      {
        value: '1',
        src: '15_01.jpg',
      },
      {
        value: '2',
        src: '15_02.jpg',
      },
      {
        value: '3',
        src: '15_03.jpg',
      },
    ],
  },
];
