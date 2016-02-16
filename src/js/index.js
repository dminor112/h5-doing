/**
 * Created by wenlinli on 2016/2/12.
 */
define(function(require, exports, module){
    var view = {};
    var model = {};
    var controller = {};
    var params = {};
    var doms = {};
    doms.sexCon = $('.sex-con');
    doms.detailCon = $('.detail-con');
    params.urls = {
        doingList: '/doing/doing/global/list'
    }

    model.getDoingList = function(callback){
        var queryData = {
            userId: 'xxx',
            token: 'xxx',
            page: 1,
            pageSize: 10
        };
        $.ajax({
            url: params.urls.doingList,
            data: queryData,
            dateType: 'jsonp',
            success: function(data){
                if(data && data.status == 200){
                    callback && callback(data);
                }
            }
        });
    }

    view.renderDoingList = function(data){
        var doingList = data.data.list || [];
        var html = '';
        for(var i = 0; i < doingList.length; i++){
            var doingObj = doingList[i];
            var userObj = doingObj.user || {};
            html += '<div class="doing-item">';
            html += '<a href="/doing_detail.html?doingId=' + doingObj.doingId + '">'
            html += '<div class="user">';
            html += '<img class="user-icon" src="' + userObj.icon + '"/>';
            html += '<div class="user-detail">';
            html += '<div class="u-name">' + userObj.nickName + '</div>';
            html += '<div class="u-occupation">' + userObj.occupation + '</div>';
            html += '<div class="u-age">' + userObj.age + '</div>';
            html += '<div class="pub-time">' + doingObj.publishTime + '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="doing">';
            html += '<div class="content">' + doingObj.message + '</div>';
            html += '<div class="picture">';
            var imgList = doingObj.imgList || [];
            for(var j = 0; j  < imgList.length; j++){
                html += '<img src="' + imgList[j] + '"/>';
            }
            html += '</div>';
            html += '<div class="doing-bottom">';
            html += '<div class="position">' + doingObj.position + '</div>';
            html += '<div class="comment-count">' + doingObj.commentCount + '</div>';
            html += '</div></div></a></div>';
        }
        $('.doing-con .middle').html(html);
    }
    controller.initPage = function(){
        model.getDoingList(view.renderDoingList);
    }

    var index = {
        init: function(){
            controller.initPage();
        }
    };
    module.exports = index;
});