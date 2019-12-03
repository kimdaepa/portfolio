'use strict';

/**
 * DRAGONRAJA DEV JS
 */
(function ($, win, document) {
    'use strict';

    win.DRAGONRAJA = win.DRAGONRAJA || {};

    if (typeof win.DRAGONRAJA.register === 'undefined') {
        win.DRAGONRAJA.register = {};
    }

    win.DRAGONRAJA.register = function () {
        return {
            init: function init() {
                var self = this;
                self.btnEvent();
            },
            btnEvent: function btnEvent() {
                var self = this;

                //popup close
                $('.btn_pop_close').on('click', function () {
                    $(this).parents('.popup_wrap').removeClass('active');
                });

                $('.privacy').on('click', function () {
                    $('.pop1').parents('.popup_wrap').addClass('active');
                });

                $('.telNo').keyup(function () {
                    $(this).val($(this).val().replace(/[^0-9]/g, ""));
                });

                $('.booking').on('click', function (e) {
                    e.preventDefault();

                    //유효한 테스트 기간인지 체크
                    var now = new Date();
                    var openDate = new Date('2018/12/05 11:00:00');
                    if (openDate > now) {
                        $('.pop4').parents('.popup_wrap').addClass('active');
                        return;
                    }

                    var dueDate = new Date('2018/12/18 15:00:00');
                    if (dueDate < now) {
                        $('.pop4').parents('.popup_wrap').addClass('active');
                        return;
                    }

                    var telNo = $('.telNo').val();
                    var valid = self.valid(telNo);
                    if (valid) {
                        var chkbox = self.chkbox();
                        if (chkbox) {
                            $('.booking').attr('href', '#');
                            // self.frmSubmit();
                        } else {
                            $('.pop2').parents('.popup_wrap').addClass('active');
                            return;
                        }
                    } else {
                        $('.pop3').parents('.popup_wrap').addClass('active');
                        return;
                    }
                });
            },

            valid: function valid(telNo) {
                var self = this;
                if (telNo == '' || telNo == null) {
                    return false;
                }

                if (telNo.length != 8) {
                    return false;
                }

                var rtnVal = self.numCheck(telNo);
                return rtnVal;
            },

            chkbox: function chkbox() {
                var item = $("#privacy_check").is(":checked");
                return item;
            },

            frmSubmit: function frmSubmit() {
                var frm = $('#frm');
                var data = frm.serialize();

                $.ajax({
                    type: "POST",
                    data: data,
                    url: _base + '/main/regiProc',
                    error: function error(e) {
                        alert('페이지 새로고침을 해주세요.');
                    },
                    // error : function(e) { console.log('Error #'+e.data); },
                    success: function success(data) {
                        if (data.result == 1) {
                            //정상 처리
                            if (!alert('사전 예약 신청이 완료되었습니다.')) {
                                location.reload();
                            }
                        } else if (data.result == 2) {
                            // 준비기간
                            $('.pop4').parents('.popup_wrap').addClass('active');
                        } else if (data.result == 3) {
                            // 기 등록 번호
                            if (!alert(data.msg)) {
                                location.reload();
                            }
                        } else {
                            // Error
                            if (!alert(data.msg + '\n페이지가 새로고침 됩니다.')) {
                                location.reload();
                            }
                        }
                    }
                });
            },

            numCheck: function numCheck(str) {
                var o,
                    d,
                    p,
                    n = 0,
                    l = 8;
                for (var i = 0; i < str.length; i++) {
                    var c = str.charCodeAt(i);
                    if (i > 0 && (p = o - c) > -2 && p < 2 && (n = p == d ? n + 1 : 0) > l - 3) return false;
                    d = p, o = c;
                }
                return true;
            }
        };
    }();

    $(function () {
        win.DRAGONRAJA.register.init();
    });
})(jQuery, window, document);