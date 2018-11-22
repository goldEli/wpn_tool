//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    isShowCalMode: true,
    totalPrice: 0,
    array: [],
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
  switchCalMode: function (e) {
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
  plus: function (e) {
    this.handleCal(e, 'plus')
  },
  minus: function (e) {
    this.handleCal(e, 'minus')
  },
  handleCal: function (e, type) {
    const { id } = e.currentTarget;
    const a = [...this.data.array];
    let t = this.data.totalPrice;
    const factor = type === 'plus' ? 1 : -1
    a.forEach((e, i) => {

      if (e.id === id) {
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
  handleCopyData: function () {
    const { array, totalPrice, recInfo } = this.data;
    const { recName, recMobile, recAddress } = recInfo;
    let copydata = 'へ订单信息へ\n'
    array.forEach((e, i) => {
      if (e.count > 0) {
        copydata += e.name + "：" + e.count + 'x' + e.price + '  ' + e.count * e.price + '元\n'
      }
    })
    copydata += '共计：' + totalPrice + '元（不含运费）';

    if (recName || recMobile || recAddress) {
      copydata += '\nへ快递信息ペ\n'
      copydata += '收货人：' + (recName || '') + '\n';
      copydata += '电话：' + (recMobile || '') + '\n';
      copydata += '收货地址：' + (recAddress || '') + '\n';
    }

    return copydata
  },
  handleSum: function (data) {
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
          content: '订单信息复制成功，关闭小程序粘贴发送吧！',
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
    a.forEach((e, i) => {
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
  bindRecInpt: function (e) {
    const { id } = e.target;
    const { value } = e.detail;
    const o = { ...this.data.recInfo };
    o[id] = value;
    this.setData({
      recInfo: o
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '歪婆娘私房菜'
    })
    wx.request({
      url: 'https://www.waiponiang.com/wpn',
      success: (res) => {
        const data = res.data.data
        const compare = property => {
          return function (obj1, obj2) {
            var value1 = obj1[property];
            var value2 = obj2[property];
            return value1 - value2;
          };
        };
        let d = data.sort(compare("index"))
        d = d.filter(e => e.checked === 1)
        d = d.map((e,i) => {
          e.index = i
          return { count: 0, mode: 'widthFix', ...e }
        })
        this.setData({
          array: d,
        })
      }
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
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
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
