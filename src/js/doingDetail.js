/**
 * Created by wenlinli on 2016/2/23.
 */
define(function(require, exports, module){
    var util = require('util');
    var controller = {};
    var model = {};
    var view = {};

    var params = {
        doingId: util.getParam('doingId'),
        token: 'xxx',
        userId: 'userId',
    };
    params.urls = {
        publishComment: '/doing/comment/pub'
    };

    model.publishComment = function(opt){
        var message = opt.message || '';
        var data = {
            message: message,
            doingId: params.doingId,
            token: params.token,
            userId: params.userId
        };
        $.ajax({
            url: params.urls.publishComment,
            data: data,
            dataType: 'POST',
            success: function(resJson){
                console.log(resJson);
            }
        });
    }

    view.bindEvt = function(){
        $('.bottom .comment-btn').on('click', function(){
            var message = $('#comment-input').val();
            model.publishComment({message: message});
        });
    }

    controller.initPage = function(){
        view.bindEvt();
    }

    var doingDetail = {
        init: function(){
            controller.initPage();
        }
    }
    module.exports = doingDetail;
});