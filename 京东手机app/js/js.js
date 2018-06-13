//京东快报
setInterval(function(){
        g();
    },2000);
    
    setInterval(function(){
        t();
        y();
    },2500);
    function g(){
        $(".news .center .txt").css({"transform":"translateY(-16px)","transition":"1s"});
    }
    function t(){
        $(".news .center .txt").css({"transform":"translateY(0px)","transition":"0s"});
    }
    function y(){
        $(".news .center .txt").eq(0).appendTo($(".news .center"));
    }
//倒计时


    //首页京东秒杀部分的效果（倒计时）


var zxx = {
    $: function(id){
        return document.getElementById(id);
    },
    futureDate: Date.UTC(2018, 5, 31, 16),
    obj: function(){
        return {
            sec: zxx.$("sec"),
            mini: zxx.$("mini"),
            hour: zxx.$("hour"),
            day: zxx.$("day"),
            month: zxx.$("month"),
            year: zxx.$("year")
        }
    }
};
//fnTimeCountDown(zxx.futureDate, zxx.obj());


//上面的滚动条事件

window.onscroll=function(){
    if(document.body.scrollTop>115){
        document.querySelector(".search").style.background="red";
    }else{  document.querySelector(".search").style.background="none";

    }
}


//上面轮播
  var mySwiper = new Swiper ('.num.swiper-container', {
//    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  }) 
  
  
//  京东直播
  
     var swiper = new Swiper('.zhibo .es', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    });
 //回到顶部
    
    //js回到顶部
    var top1=document.querySelector(".jiantou");
    window.onscroll=function(){
         if(document.body.scrollTop>370){
            top1.style.display="inline-block";
        }else{
            top1.style.display="none";
        }
    }
   
    top1.addEventListener("click",function(){
//        document.body.scrollTop=0;
//        document.documentElement.scrollTop=0;
        var t=setInterval(function(){
            document.body.scrollTop=document.body.scrollTop-20;
            document.documentElement.scrollTop=document.documentElement.scrollTop-20;
            if(document.body.scrollTop===0){
                clearInterval(t);
            }
        },10)
    })
    
    
    
    
    
    var gu = document.querySelector(".gu"); 
    var guan = document.querySelector(".guan");
    if(sessionStorage.guan =="false"){
           guan.style.display="none";
    }else{
        guan.style.display="block"; 
    }
        gu.onclick=function(){
         guan.style.display = "none";
         sessionStorage.guan = "false";
        };
//// jq回到顶部   
//$(function(){
//    $(".jiantou").hide(); 
//        $(window).scroll(function(){
//            if($(window).scrollTop()>800){
//                $(".jiantou").show();
//            }else{
//              $(".jiantou").hide(); 
//            }  
//        })
//        $(function(){
//       $(".jiantou").click(function() {
//          $("html,body").animate({scrollTop:0}, 600);
//            }); 
//        })
//    })
    
    
    
    //cort里面的js

    
    

    
    

