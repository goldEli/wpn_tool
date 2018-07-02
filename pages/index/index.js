//index.js
//获取应用实例
const app = getApp()
const getUrl = function(imgName) {
  return 'https://s1.ax1x.com/2018/06/28/'+ imgName +'.jpg'
}
Page({
  data: {
    isShowCalMode:true,
    totalPrice: 0,
    array: (function(){
      const a = [];
      const data = [
        {
          name: '勾魂兔腿',
          price: 28,
          spec: '2只',
          imgName: '671cf50fgy1fsu7feeangj20ih0dvjsp',
          src: 'https://wx1.sinaimg.cn/mw690/671cf50fgy1fsu7feeangj20ih0dvjsp.jpg'
        },

        {
          name: '金牌冷吃兔',
          price: 25,
          spec: '200g',
          imgName: 'Pi8vwj',
        },

        {
          name: '冷香兔（五香蒜蓉味）',
          price: 27,
          spec: '200g',
          imgName: 'PiGilT',
        },

        {
          name: '香辣兔头',
          price: 24,
          spec: '2只装',
          imgName: 'PiGPpV',
        },

        {
          name: '麻辣牛肉丝',
          price: 35,
          spec: '170g',
          imgName: 'PiGEm4',
        },

        {
          name: '金牌冷吃牛肉',
          price: 35,
          spec: '170g',
          imgName: 'Pi8xTs',
        },

        {
          name: '五香牛肉',
          price: 35,
          spec: '150g',
          imgName: 'PiJpHH',
        },

        {
          name: '冷吃鸡尖',
          price: 18,
          spec: '170g',
          imgName: 'PiGmkR',
        },

        {
          name: '吮指鸭舌',
          price: 36,
          spec: '150g',
          imgName: 'PiGF6U',
        },

        {
          name: '鲈钢鳊小鱼',
          price: 28,
          spec: '200g',
          imgName: 'PiGpYq',
        },

        {
          name: '野生小鱼',
          price: 28,
          spec: '200g',
          imgName: 'Pi8jmQ',
        },

        {
          name: '冷吃鱼',
          price: 22,
          spec: '200g',
          imgName: 'PiG9f0',
        },

        {
          name: '原味米花酥',
          price: 13,
          spec: '150g',
          imgName: 'PiGV0J',
        },

        {
          name: '原味花生酥',
          price: 16,
          spec: '200g',
          imgName: 'PiGZ79',
        },

        {
          name: '黑芝麻酥',
          price: 18,
          spec: '200g',
          imgName: 'PiGufx',
        },

        {
          name: '怪味酥',
          price: 12,
          spec: '150g',
          imgName: 'PiGMp6',
        },

        {
          name: '牛肉豆豉',
          price: 19,
          spec: '250g',
          imgName: 'PiGkXF',
        },
        {
          name: '香辣豆皮',
          price: 12,
          spec: '150g',
          imgName: 'PiGnt1',
        }
      ];
      data.forEach((e, i) => {
        let unit = '';
        if (e.name === '牛肉豆豉') {
          unit = '瓶'
        } else {
          unit = '袋'
        }
        a.push({ id:e.imgName ,unit, index: i, count: 0, src: e.src || getUrl(e.imgName), mode: 'widthFix', ...e})
      })
      return a
    })(),
    recInfo: {
      recName: null,
      recMobile: null,
      recAddress: null,
    }
  },
  //事件处理函数
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '点击进入菜单',
      path: 'pages/index/index'
    }
  },
  switchCalMode: function(e) {
    const { id } = e.currentTarget;
    const a = [...this.data.array]
    a.forEach((e, i) => {
      e.count = 0
    })
    this.setData({
      isShowCalMode: !this.data.isShowCalMode,
      totalPrice: 0,
      array: a,
    })
  },
  plus: function(e){
    this.handleCal(e, 'plus')
  },
  minus: function (e) {
    this.handleCal(e, 'minus')
  },
  handleCal: function(e, type) {
    const { id } = e.currentTarget;
    const a = [...this.data.array];
    let t = this.data.totalPrice;
    const factor = type === 'plus' ? 1 : -1
    a.forEach((e, i) => {
      
      if (e.imgName === id) {
        if (e.count === 0 && type === 'minus') {
          return
        }

        e.count += 1 * factor
        t += e.price * factor
      }
    })
    this.setData({
      array: a,
      totalPrice: t
    })
  },
  handleCopyData: function(){
    const { array, totalPrice, recInfo } = this.data;
    const { recName, recMobile, recAddress} = recInfo;
    let copydata = '~~~订单信息~~~\n'
    array.forEach((e, i) => {
      if (e.count > 0) {
        copydata += e.name + "：" + e.count + 'x' + e.price + '  ' + e.count * e.price + '元\n'
      }
    })
    copydata += '共计：' + totalPrice + '元（不含运费）';

    if (recName || recMobile || recAddress){
      copydata += '\n~~~快递信息~~~\n'
      copydata += '收货人：' + (recName || '') + '\n';
      copydata += '电话：' + (recMobile || '') + '\n';
      copydata += '收货地址：' + (recAddress || '') + '\n';
    }

    return copydata
  },
  handleSum: function(data) {
    let totalPrice = 0;
    data.forEach((e, i) => {
      if (e.count > 0) {
        totalPrice += e.count * e.price
      }
    })
    return totalPrice;
  },
  copyTBL: function (e) {
    var self = this;
    wx.shareAppMessage
    wx.setClipboardData({
      data: self.handleCopyData(),
      success: function (res) {
        // self.setData({copyTip:true}),
        wx.showModal({
          title: '提示',
          content: '订单信息复制成功，去聊天窗口粘贴吧！',
          success: function (res) {
            if (res.confirm) {
              console.log('确定')
            } else if (res.cancel) {
              console.log('取消')
            }
          }
        })
      }
    });
  },
  bindKeyInput: function (e) {
    const { id } = e.currentTarget;
    const v = parseInt(e.detail.value);
    const a = [...this.data.array];
    a.forEach((e,i) => {
      if (id === e.id && v && v > 0) {
        e.count = v;
      }
      if (id === e.id && !v) {
        e.count = 0;
      }
    })
    this.setData({
      array: a,
      totalPrice: this.handleSum(a)
    })
  },
  bindRecInpt: function(e) {
    const {id} = e.target;
    const {value} = e.detail;
    const o = {...this.data.recInfo};
    o[id] = value;
    this.setData({
      recInfo: o
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '歪婆娘私房菜'
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
