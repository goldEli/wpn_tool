const data = [
  {
    name: "礼盒包装",
    price: 5,
    unit: "个",
    id: "a0f306dcgy1fvfzhh4zarj20kt0fgt99.jpg",
    src: "http://wx2.sinaimg.cn/mw690/a0f306dcgy1fvfzhh4zarj20kt0fgt99.jpg"
  },
  {
    name: "冬菜扣肉",
    price: 27,
    unit: "袋",
    spec: "400g",
    id: "a0f306dcly1fxd71gmkrjj20jn0eq41w.jpg",
    src: "http://wx4.sinaimg.cn/mw690/a0f306dcly1fxd71gmkrjj20jn0eq41w.jpg"
  },
  {
    name: "红糖夹沙肉",
    price: 27,
    unit: "袋",
    spec: "500g",
    id: "a0f306dcly1fxd71ht5q6j20jn0eqwgv.jpg",
    src: "http://wx3.sinaimg.cn/mw690/a0f306dcly1fxd71ht5q6j20jn0eqwgv.jpg"
  },
  {
    name: "山猪肉香肠",
    price: 58,
    unit: "袋",
    spec: "500g",
    id: "a0f306dcly1fx57b5m7z7j20ri0kntc7.jpg",
    src: "http://wx3.sinaimg.cn/small/a0f306dcly1fx57b5m7z7j20ri0kntc7.jpg"
  },

  {
    name: "勾魂兔腿",
    price: 28,
    unit: "袋",
    spec: "2只",
    id: "a0f306dcgy1fw46py0lybj20mo0h07d0",
    src: "http://wx2.sinaimg.cn/mw690/a0f306dcgy1fw46py0lybj20mo0h07d0.jpg"
  },

  {
    name: "抓财掌中宝",
    price: 26,
    unit: "袋",
    spec: "120g",
    id: "a0f306dcgy1fuhfyf7l7lj20ht0dd771",
    src: "http://wx4.sinaimg.cn/mw690/a0f306dcgy1fuhfyf7l7lj20ht0dd771.jpg"
  },

  {
    name: "金牌冷吃兔",
    price: 26,
    unit: "袋",
    spec: "200g",
    id: "Pi8vwj",
    src: "https://s1.ax1x.com/2018/06/28/Pi8vwj.jpg"
  },

  {
    name: "冷香兔（五香蒜蓉味）",
    price: 28,
    unit: "袋",
    spec: "200g",
    id: "PiGilT",
    src: "https://s1.ax1x.com/2018/06/28/PiGilT.jpg"
  },

  {
    name: "香辣兔头",
    price: 24,
    unit: "袋",
    spec: "2只装",
    id: "PiGPpV",
    src: "https://s1.ax1x.com/2018/06/28/PiGPpV.jpg"
  },

  {
    name: "五香牛肉",
    price: 35,
    unit: "袋",
    spec: "150g",
    id: "a0f306dcgy1fuyoycl79nj20ir0e2go9",
    src: "http://wx2.sinaimg.cn/mw690/a0f306dcgy1fuyoycl79nj20ir0e2go9.jpg"
  },

  {
    name: "麻辣牛肉丝",
    price: 35,
    unit: "袋",
    spec: "170g",
    id: "a0f306dcgy1fvfzhnwpbhj20i20dkjt8",
    src: "http://wx4.sinaimg.cn/mw690/a0f306dcgy1fvfzhnwpbhj20i20dkjt8.jpg"
  },

  {
    name: "金牌冷吃牛肉",
    price: 35,
    unit: "袋",
    spec: "170g",
    id: "Pi8xTs",
    src: "https://s1.ax1x.com/2018/06/28/Pi8xTs.jpg"
  },

  {
    name: "冷吃鸡尖",
    price: 18,
    unit: "袋",
    spec: "170g",
    id: "PiGmkR",
    src: "https://s1.ax1x.com/2018/06/28/PiGmkR.jpg"
  },

  {
    name: "吮指鸭舌",
    price: 36,
    unit: "袋",
    spec: "150g",
    id: "a0f306dcgy1fvfzhktv1jj20m70goztm",
    src: "http://wx4.sinaimg.cn/mw690/a0f306dcgy1fvfzhktv1jj20m70goztm.jpg"
  },

  {
    name: "脱骨鸭掌",
    price: 26,
    unit: "袋",
    spec: "120g",
    id: "a0f306dcgy1fw46pkb0atj20kz0fqwma",
    src: "http://wx1.sinaimg.cn/mw690/a0f306dcgy1fw46pkb0atj20kz0fqwma.jpg"
  },
  {
    name: "香卤鸭心 ",
    price: 13,
    unit: "袋",
    spec: "100g",
    id: "a0f306dcgy1fwshikkv8ij20eo0b0wfr",
    src: "http://wx4.sinaimg.cn/small/a0f306dcgy1fwshikkv8ij20eo0b0wfr.jpg"
  },

  {
    name: "野生小鱼",
    price: 28,
    unit: "袋",
    spec: "200g",
    id: "Pi8jmQ",
    src: "https://s1.ax1x.com/2018/06/28/Pi8jmQ.jpg"
  },

  {
    name: "冷吃鱼",
    price: 22,
    spec: "200g",
    id: "PiG9f0",
    src: "https://s1.ax1x.com/2018/06/28/PiG9f0.jpg"
  },

  {
    name: "原味米花酥",
    price: 13,
    unit: "袋",
    spec: "150g",
    id: "PiGV0J",
    src: "https://s1.ax1x.com/2018/06/28/PiGV0J.jpg"
  },

  {
    name: "原味花生酥",
    price: 16,
    unit: "袋",
    spec: "200g",
    id: "PiGZ79",
    src: "https://s1.ax1x.com/2018/06/28/PiGZ79.jpg"
  },

  {
    name: "黑芝麻酥",
    price: 18,
    unit: "袋",
    spec: "200g",
    id: "PiGufx",
    src: "https://s1.ax1x.com/2018/06/28/PiGufx.jpg"
  },

  {
    name: "怪味酥",
    price: 12,
    unit: "袋",
    spec: "150g",
    id: "PiGMp6",
    src: "https://s1.ax1x.com/2018/06/28/PiGMp6.jpg"
  },

  {
    name: "牛肉豆豉",
    price: 19,
    unit: "瓶",
    spec: "250g",
    id: "PiGkXF",
    src: "https://s1.ax1x.com/2018/06/28/PiGkXF.jpg"
  },

  {
    name: "香辣豆皮",
    price: 12,
    unit: "袋",
    spec: "150g",
    id: "a0f306dcgy1fuyonbibh3j20kf0fcwgn",
    src: "http://wx4.sinaimg.cn/mw690/a0f306dcgy1fuyonbibh3j20kf0fcwgn.jpg"
  }
];

module.exports = data
