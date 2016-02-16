/**
 * Created by wenlinli on 2016/2/10.
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
        register: '/doing/do/gi'
    }

    view.renderSexCon = function(){
        //var html = '';
    }
    view.bindEvt = function(){
        doms.sexCon.on('click', '.js-sex', function(){
            if($(this).hasClass('male')){
                params.sex = 1;
            }else{
                params.sex = 0;
            }
            doms.detailCon.find('.js-sex').val(params.sex);
        });
        doms.sexCon.find('.bottom').on('click', function(){
            if(typeof params.sex == 'undefined'){
                alert('请选择性别！');
                return;
            }
            doms.sexCon.hide();
            doms.detailCon.show();
        });
        doms.detailCon.find('.bottom').on('click', function(){
            var data = {};
            data.nickName = doms.detailCon.find('.js-nickName').val();
            data.age = doms.detailCon.find('.js-age').val();
            data.occupation = doms.detailCon.find('.js-occupation').val();
            data.sex = params.sex;
            doms.detailCon.find('.js-data').val(JSON.stringify(data));
            $('#userInfo').ajaxSubmit({
                type: 'POST',
                url: params.urls.register,
                success: function(data){
                    console.log(22222, data);
                    alert('注册成功!');
                }
            });
        });
        doms.detailCon.find('.js-picture').on('click', function(){
            $('#img-file').trigger('click');
        });
    }
    controller.initPage = function(){
        doms.sexCon.show();
        doms.detailCon.hide();
        view.bindEvt();
    }
    var register = {
        init: function(){
            controller.initPage();
        }
    };
    module.exports = register;
});