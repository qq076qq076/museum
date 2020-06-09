import { Question } from './type/type';

export const FirstQuestion: Question = {
  type: 'image',
  topic: '當你進到屏菸1936文化基地時，映入眼簾的畫面中哪一張圖片最吸引你的目光呢？',
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
    topic: '想像一下，如果你將在屏菸1936文化基地裡經營特色小舖，你會選擇哪種商品進行販售呢？',
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
    topic: '當你進到美術館參觀，眼前有一個白色陶壺展件，你會想做的是？',
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
    topic: '假如屏菸1936文化基地將要辦理一系列活動，哪一個活動主題你會覺得最有趣呢？',
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
    topic: '屏菸1936文化基地裡面有許多特色場域，你最想在哪裡拍照打卡？',
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
    topic: '邀心儀的朋友同遊屏菸1936文化基地，你會選擇哪個特色場域，作為向她(他)告白的地點呢？',
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
    topic: '屏東擁有豐富多元的文化，你會最想從哪個面向來認識屏東呢？',
    background: '07_bg.png',
    optionList: [
      {
        value: '1',
        text: '海洋文化',
      },
      {
        value: '2',
        text: '食農文化',
      },
      {
        value: '3',
        text: '原民文化',
      },
      {
        value: '4',
        text: '在地藝術',
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
    topic: '如果有朋友邀請你一起參加「屏菸1936手作工坊」活動，哪個主題是最吸引您的呢？',
    background: '09_bg.png',
    optionList: [
      {
        value: '1',
        text: '手刻木雕作品',
      },
      {
        value: '2',
        text: '食農廚藝教室',
      },
    ],
  },
  {
    type: 'text',
    topic: '在逛美術館時，通常什麼樣的展品會最吸引你的目光呢？',
    background: '10_bg.png',
    optionList: [
      {
        value: '1',
        text: '充滿原民風情的雕刻',
      },
      {
        value: '2',
        text: '描繪屏東風貌的畫作',
      },
    ],
  },
  {
    type: 'text',
    topic: '走進展間，發現裡面有著原住民所創作出的厲害木雕作品，你第一個會想做的事情是？',
    background: '11_bg.png',
    optionList: [
      {
        value: '1',
        text: '馬上跟作品合拍一張',
      },
      {
        value: '2',
        text: '走近觀察木雕的細節',
      },
    ],
  },
  {
    type: 'text',
    topic: '今天你參觀完屏菸1936文化基地，你最想分享怎樣的內容給朋友呢？',
    background: '12_bg.png',
    font: 'small',
    optionList: [
      {
        value: '1',
        text: '我參加了「創意時農，健康生活」活動講座，收穫滿滿',
      },
      {
        value: '2',
        text: '我今天在美術館裡看到了好多屏東在地的藝術家作品！',
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
    topic: '屏菸1936文化基地要辦躲貓貓遊戲，您覺得躲在哪個空間最有勝算呢？',
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
