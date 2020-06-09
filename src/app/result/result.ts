export interface Result {
  name: string;
  title: string;
  describe: string;
  friend: string;
  place: string;
  minPlace?: string;
  image: string;
}

export const result = {
  a1: {
    name: '志工',
    title: '「我的播種，將發出美好之芽」',
    describe: '你樂於學習與分享，每天期待接受新事物。熱心助人，而且總能對他人侃侃而談，與對方創造美好關係！',
    friend: 'a2',
    place: '屏菸風華',
    minPlace: '菸葉常設展',
    image: 'museum_graphic_guide.png'
  },
  a2: {
    name: '康樂股長',
    title: '「散播快樂與歡笑，是我的天命！」',
    describe: '你樂觀又活潑，總能將歡樂帶給所愛的人，吃喝玩樂樣樣通。有你，無聊退散！',
    friend: 'a1',
    place: '身體力行',
    minPlace: '大武山遊戲場',
    image: 'museum_graphic_cheer_leader.png',
  },
  b1: {
    name: '博物館小老闆',
    title: '「在平凡生活中創造不平凡」',
    describe: '充滿想像力的你，樂於嘗試與挑戰，與他人分享有趣的點子，並持續在日常中勇於創造、精準實踐。',
    friend: 'b2',
    place: '屏菸 1936 文化基地',
    image: 'museum_graphic_store_keeper.png',
  },
  b2: {
    name: '食農大神',
    title: '「世界的健康，由我來守護」',
    describe: '你擁有無可比擬的耐心與毅力，能堅定自己的理念，並且付諸行動！願與他人合作，共創更美好的生活。',
    friend: 'b1',
    place: '屏菸 1936 文化基地',
    image: 'museum_graphic_farmer.png',
  },
  c1: {
    name: '藝術家',
    title: '「藝術－描繪著我們的靈魂」',
    describe: '你有著特別的氣質，總能為事物增添出新風采，喜歡接受挑戰與學習新事物，每天都充滿了行動力！',
    friend: 'c2',
    place: '南國美學',
    minPlace: '藝術描繪靈魂',
    image: 'museum_graphic_artist.png',
  },
  c2: {
    name: '鷹眼觀眾',
    title: '「探索博物館裡的無限可能」',
    describe: '你喜歡思考心思細膩，對於事物總具備敏銳的觀察力，而且總能發展出獨到的想法。',
    friend: 'c1',
    place: '屏東製造',
    minPlace: '今昔產業創新',
    image: 'museum_graphic_tourist.png',
  },
};
