/* 
* @Author: chenyun
* @Date:   2018-04-30  16:12:37
* @Last Modified time: 2016-10-11 15:24:44
*/

$(document).ready(function(){

    window.onload=function(){  
        setTimeout(function() {  
            window.scrollTo(0, 1)  
        }, 0);  
    };

    var swiperB = new Swiper('.swiper-container-b', {
        effect: 'flip',
        grabCursor: true,
        speed:1600,
        loop: true,
        autoplay:2800,
        slideShadows: false,
        autoplayDisableOnInteraction : false,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });

    var swiperV = new Swiper('.swiper-container-v', {
        pagination: '.swiper-pagination-v',
        paginationClickable: true,
        speed:600,   //杩囨浮閫熷害
        resistanceRatio : 0, //姗＄毊绛嬫晥鏋�
        direction: 'vertical',  //婊戝姩鏂瑰悜
        
        //鍔ㄧ敾
        onInit: function(swiper){ //Swiper2.x鐨勫垵濮嬪寲鏄痮nFirstInit
            swiperAnimateCache(swiper); //闅愯棌鍔ㄧ敾鍏冪礌 
            swiperAnimate(swiper); //鍒濆鍖栧畬鎴愬紑濮嬪姩鐢�
            var ids = swiper.activeIndex; //绂佹涓€寮€濮嬭嚜鍔ㄦ挱鏀�
        }, 
        onSlideChangeEnd: function(swiper){ 
            swiperAnimate(swiper); //姣忎釜slide鍒囨崲缁撴潫鏃朵篃杩愯褰撳墠slide鍔ㄧ敾    
            $(".ms_nav_b").removeClass("ms_nav_b_on");
            $("nav").show();
            if(swiperV.isEnd){   //鍒ゆ柇鍒颁簡鏈€鍚庝竴灞忕澶存秷澶�
                $(".ms_top").hide();
            }else{
                $(".ms_top").show();
            }
            var ind = swiper.activeIndex;
        },
        paginationBulletRender: function (index, className) {
            var a = ["首页","服务","类型","微信开发","优势","合作","关于","联系"];
            return '<span class="' + className + ' ms_nav_b_list " >' + a[index] + '</span>';
        }
    }); 

    //鐐瑰嚮瀵艰埅鍑虹幇鍒楄〃
      $("nav").click(function(){
        $(this).hide();
        $(".ms_nav_b").addClass("ms_nav_b_on");
      });
      $(".ms_bg").click(function(){
        $("nav").show();
        $(".ms_nav_b").removeClass("ms_nav_b_on");
      })
});