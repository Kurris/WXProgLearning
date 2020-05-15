App({

  onLaunch:function(){
wx.getUserInfo({

  success:(res)=>{
console.log(res);
  }
})


  }

})