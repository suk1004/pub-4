$(document).ready(function(){

  /* 메뉴호버시 서브메뉴____________________________________ */
  $(".sub").hide();
  
  $(".main").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".bg_box").stop().slideDown();
  },function(){
    $(this).find(".sub").stop().hide();
    $(".bg_box").stop().slideUp();
  });


  // 서브메뉴 이미지
  $(".main").hover(function(){
    
    let = oldimg = 0;
    let = newimg = $(this).index();

    $(".subBoxImg ul li").eq(oldimg).stop().hide(300);
    $(".subBoxImg ul li").eq(newimg).stop().show(300);
  },function(){
    $(".subBoxImg ul li").stop().hide();
  });


  /* 메인 비주얼_____________________________________________________ */
  let $simg = $(".slide ul");
  let $simgli = $(".slide ul li");
  let $sbtn = $(".slide_btn ul li");
  let $snext = $(".slide_side_btn .nex");
  let $spre = $(".slide_side_btn .pre");
  let simg_w = $simgli.width();
  let simg_n = $simgli.length;
  let soldidx=0;
  let sindex=0; 

  //index번째 비주얼이미지 이동하는 함수생성
  function slideImg(sindex){
    targetX=-(sindex*simg_w)

    $simg.stop().animate({left:targetX},600);
    $sbtn.eq(soldidx).removeClass("active");
    $simgli.eq(soldidx).find(".text").removeClass("textVisible");
    $sbtn.eq(sindex).addClass("active"); 
    $simgli.eq(sindex).find(".text").addClass("textVisible");
    soldidx=sindex;
    
  };

  //자동함수 생성
  function slideAuto(){
    sindex++;
    if(sindex > simg_n-1){
      sindex=0;
    }
    slideImg(sindex); //함수호출
  };

  auto = setInterval(slideAuto,4000);

  //하단버튼
  $sbtn.click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex=$(this).index();
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);

  });


  //좌우버튼
  $spre.click(function(){

    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex--;
    if(sindex < 0){
      sindex=simg_n-1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);

  });

  $snext.click(function(){
    console.log('click');
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex++;
    if(sindex > simg_n-1){
      sindex=0;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto,4000);

  });

  //Play,Stop...
  $(".play").hide();

  $(".stop").click(function(){
    clearInterval(auto);
    $(".stop").hide();
    $(".play").show();
  });
  $(".play").click(function(){
    setInterval(slideAuto,4000);
    $(".play").hide();
    $(".stop").show();
  });


  /* 새로운 소식____________________________________ */

  $(".tab li").click(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

    let result = $(this).attr("data-alt");
    $(".newsContent").removeClass("active");
    $("#" + result).addClass("active");
  });


  /* 연구분야____________________________________ */
  $(".fieldTab").click(function(){
    $(this).siblings().removeClass("selected")
    $(this).addClass("selected");
  });


  /* 연구시설 소개 */
  $(".acc_title").click(function(){
    
    //제목
    $(this).addClass("active");
    //내용
    $(this).next().stop().slideDown();
    
    //다른제목
    $(this).parent().siblings().find(".acc_title").removeClass("active");
    //다른내용
    $(this).parent().siblings().find(".acc_desc").stop().slideUp();

    let accResult = $(this).attr("data-id");
    $(".map_point>div").removeClass("active");
    $("#" + accResult).addClass("active");

  });


  /* 팝업존____________________________________ */
  let $pimg = $(".popup>ul");
  let $pimgli = $(".popup>ul li");
  let pimg_w = $pimgli.width();
  let pimg_n = $pimgli.length;
  let poldindex = 0;
  let pindex = 0;

  let g_pop = $pimgli.index();

  // 이미지이동 함수
  function pslideImg(pindex){
    targetX=-(pindex*pimg_w);
    $pimg.stop().animate({left:targetX},600);
    poldindex=pindex;
    $(".p1 span:first-child").text(pindex+1);

  }

  function pslideAuto(){
    pindex++;
    if(pindex > pimg_n-1){
      pindex=0;
    }
    pslideImg(pindex);
  };

  pAuto = setInterval(pslideAuto,4000);

  //다음보기
  $(".pop_btn .slideRight").click(function(){
    clearInterval(pAuto);
    pindex++;
    if(pindex>pimg_n-1){
      pindex=0;
    };
    pslideImg(pindex);
    pAuto = setInterval(pslideAuto,4000);

    console.log(`g_pop:${g_pop}`);
    console.log(`pindex:${pindex}`);

  });

  //이전보기
  $(".pop_btn .slideLeft").click(function(){

    clearInterval(pAuto);
    pindex--;
    if(pindex<0){
      pindex=pimg_n-1;
    };
    pslideImg(pindex);
    pAuto = setInterval(pslideAuto,4000);

  });


  /* 미디어 속 KASI________________________________ */
  let $mimg = $(".media>ul");
  let $mimgli = $(".media>ul li");
  let mimg_w = $mimgli.width();
  let mimg_n = $mimgli.length;
  let moldindex = 0;
  let mindex = 0;

  let g_popM = $mimgli.index();

  // 이미지이동 함수
  function mslideImg(mindex){
    targetX=-(mindex*mimg_w);
    $mimg.stop().animate({left:targetX},600);
    moldindex=mindex;
    $(".p2 span:first-child").text(mindex+1);

  }

  function mslideAuto(){
    mindex++;
    if(mindex > mimg_n-1){
      mindex=0;
    }
    mslideImg(mindex);
  };

  mAuto = setInterval(mslideAuto,4000);

  //다음보기
  $(".media_btn .slideRight").click(function(){
    clearInterval(mAuto);
    mindex++;
    if(mindex>mimg_n-1){
      mindex=0;
    };
    mslideImg(mindex);
    mAuto = setInterval(mslideAuto,4000);

  });

  //이전보기
  $(".media_btn .slideLeft").click(function(){

    clearInterval(mAuto);
    mindex--;
    if(mindex<0){
      mindex=mimg_n-1;
    };
    mslideImg(mindex);
    mAuto = setInterval(mslideAuto,4000);

  });



});