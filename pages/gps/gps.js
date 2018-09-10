Page({
  data: {
    location: ""
  },
  onLoad: function () {
    var _this=this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

        _this.setData({ location: latitude + ' , ' + longitude});
      }
    })

  }
})
