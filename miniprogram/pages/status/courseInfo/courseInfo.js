// pages/status/courseInfo/courseInfo.js
Page({

  /**
   * Page initial data
   */
  data: {
    courseList: [],
    loading: true,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const couresList = wx.cloud.database().collection("courseList");
    const venue = options.venue;
    let page = this;

    couresList.where({
      venue,
    }).get({
      success: function(res) {
        page.setData({
          courseList: res.data,
          loading: false,
        });
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})