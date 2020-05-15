Page({
  data: {
    name: 'das',
    counter: 0,
    students: [],
    uname: '',
    udd: ''
  },
  choose() {
    wx.chooseImage({

    })
  }
  ,

  postTest() {
    wx.showLoading()
    wx.request({
      method: 'GET',
      url: 'http://192.168.0.114:8080/api/first/get',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {

        wx.showModal({
          title: '',
          content: res.data['code'].toString(),
        })
        wx.hideLoading();
      },
      complete: (res) => {
        console.log('complete');
      },
      fail: (res) => {
        console.log(res);
        wx.hideLoading();
      }

    })

  },
  UserblurVal: function (event) {
    this.setData({
      uname: event.detail.value
    })
  },
  pwdblurVal: function (event) {
    this.setData({
      udd: event.detail.value
    })
  },
  ClearInput() {
    this.setData({
      uname: '',
      udd: ''
    })
  }
  ,
  Login() {

    console.log(this.data.uname)
    console.log(this.data.udd)
  },

  toast() {
    wx.showToast({
      title: 'chenggong',
      icon: '',
      duration: 3000
    })
  },

  getUserInfos(e) {
    console.log(e);
    console.log('click')
  },

  BtnMultiTap() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  BtnjianTap() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})