/* Yashi NyarukoPlayer 
                   ,;;77;
                 ...     7
            .;;;,       7D
          .7;.          S
         ::           ;3;.,.
       ..        ..;:;T;,;;;;, :.
      :.       ,,,77TJ:,::;:;: .,,.               .
     :        JY.;;Y;;:::;;;.  ..:;.             ..
    :        Jh;.:J;.,7:;;:   ..:,;;            ...
   :.       .3J7,7;.,:;;.:,::;..;;:;:           ::
  .,        cT;;JY;.:;:7,;7:;;;.;;:;;         ..:;...
  :        .C;7vU17.:7;Y:777;:7,:7::;.     ..:..:. ..,.
  .       . YJU77;Y,7c7;Y:..c;Y:;J;.;.    : .:,.:..   7::
            xhTT7C97v7,.TTGZv7v:YJ7;;;       ..;:::. .7; ;
,          .7xuH7 @7.   .7@@c;,;E77777;      .:,,.,;7;v, ,
:            :H1T  .      7: ..;7Tc7777v777Ic,:: 7;, ;7 .:
;             EYh           ,.7vGhh3c7;;;;7;..: ,;.,TT;.,
,            T7:CT.  ;;;   ::I@@R37UC3c77v: .,  ;::7;.:
:           :J .UUT;;  .  uH;@b    .7I1SS. .,. 7T77;.
;          .7  7IY ;@@BH:@B.@R   .:T.  .. ... :CJcJc7;:::.
.     .   .;.  v;.  @@BJYR Y@c .:.Z;  . .... .T7vcITTcc;;;7
          ;        :Z;;T;,:@Bu..;;JY      ...Tv;,  .;YUI7;;c
  IYYcvc;::  .;;. ;H,:TT:.J3@B, :. ;.:7;77YYIvJv7;.   ,.:;;;.
 .b  .,:v;:;::GE7cZuc;bR.7 ;b@U  :. ,YcYJJTJ;cYcJYcv.     77.
 :Y    ;.     ;  777;1@;:Y77u@b  : ;bHG7;;;;  .7TJ77Y;. .  c:
  .   ;c      ;: 37:@@b.ZSx7;@@D.  YY  ,.,,;7;  .777;77;   7;
     .;;       7 ;, ;cx,@YJ ;;CB@H.;Zv7IHUGZ;77    ;7;777  ;;
     ;..;      ,;      ;RT.,c.ZG6B6bB@@@bB@GU777    ;Y;77: ;
     ;: v;.     .:,   :: G1U@@BEb7x@6h0b9GDC, :;7    ;;,cc;
      ;  ..       .:,,;; ;@@bbb@bB1YDDHbRBB6T  ;v;    ; ;;7
      .,             E@.b@B6R9b@Y7;,uRE6bBBb@@@REbh  .. ; 7.
                   :;@@,;@b99Rb@;  .:@60bb;   .  T@3    7 7.
                ... 0;bT Yb696@RU;..ERGubb7c      S7   ;, :
             .,,     7BB;7669b;  ;T;UR3SR@.TTb    ;.   .
            ,.       .;Y@3Bb9DUvhB@CG096@J ;U7   ..
           .        .  7J.@bRbBBbR@@@Rb@ 7:YU@
         .:     ..;;;;;:;vI;@HBBBDb@xR@.:U 6;T
        :;,..:;;;;:::...   .E;u07@S7TC,;B.76
        .;;;;;;.  .        3@    x7 RI YR
           .               G:      :
                                  .;  .
                                  .;...
                                   ;; .
                                   ;:.
                                   ;:.
                                  ::
                                 ;;;
                                ;;;;
                              ,;:7:
                              RS7
                https://www.yoooooooooo.com/yashi/
*/
//配置文件路径
var nyarukoplayer_conffile = "";
//在控制台输出信息
var nyarukoplayer_consolelog = true;

//PUBLIC: 以下变量由 JSON 配置文件导入
//初始歌词语言
var nyarukoplayer_cnlrc = true;
//歌词偏移时间
var nyarukoplayer_lrctime = 0;
//标题栏歌词
var nyarukoplayer_titlelrc = false;
//主图片扩展名
var nyarukoplayer_imgtype = "";
//WEBP支持
var nyarukoplayer_webp = true;
//图片路径,支持相对绝对URL路径
var nyarukoplayer_imgdir = "";
//音乐按钮图片路径
var nyarukoplayer_musicbtnimg = "";
//歌词文件路径
var nyarukoplayer_lrcfile = "";
//音频文件路径
var nyarukoplayer_musicfile = "";
//音频语言限制，使用 | 分割，例如 "ja|en"
var nyarukoplayer_musicblock = "";
//动画是否重播
var nyarukoplayer_replay = true;

//回调方法
//动画开始播放
var nyarukoplayerCallback_AnimateStart = null;
//动画结束
var nyarukoplayerCallback_AnimateEnd = null;
//歌词结束
var nyarukoplayerCallback_LyricEnd = null;
//设置已载入
var nyarukoplayerCallback_ConfigurationLoaded = null;
//图片已载入
var nyarukoplayerCallback_ImageLoaded = null;
//歌词已载入
var nyarukoplayerCallback_LyricsLoaded = null;
//音乐语言屏蔽
var nyarukoplayerCallback_MusicLanguageblock = null;
//音乐被禁用
var nyarukoplayerCallback_MusicDisabled = null;
//出现错误
var nyarukoplayerCallback_Error = null; //参数:msg
//音乐播放
var nyarukoplayerCallback_MusicPlay = null;
//音乐暂停
var nyarukoplayerCallback_MusicPause = null;
//动画已就绪
var nyarukoplayerCallback_AnimateReady = null; //参数:autoplay

//PRIVATE:
var nyarukoplayer_imgcache = [];
var nyarukoplayer_from = [];
var nyarukoplayer_to = [];
var nyarukoplayer_width = [];
var nyarukoplayer_height = [];
var nyarukoplayer_time = [];
var nyarukoplayer_count = 0;
var nyarukoplayer_loaded = 0;
var nyarukoplayer_now = 0;
var nyarukoplayer_lrcoldtime = 0;
var nyarukoplayer_lrc = null;
var nyarukoplayer_webpok = false;
var nyarukoplayer_lrctimer = null;
var nyarukoplayer_lrctimers = "";
var nyarukoplayer_lrctimeri = 0;
var nyarukoplayer_autoplay = true;
var nyarukoplayer_musicready = false;
var nyarukoplayer_waitload = false;
var nyarukoplayer_playd = false;
var nyarukoplayer_retaincount = 0;
var nyarukoplayer_errord = false;

function nyarukoplayer_init(configurationFile,OutputLogSwitch = true) {
    nyarukoplayer_conffile = configurationFile;
    nyarukoplayer_consolelog = OutputLogSwitch;
    if (nyarukoplayer_consolelog) {
        console.log("[nyarukoplayer.js] v2.1\nPowered by KagurazakaYashi");
        console.log("[NyarukoPlayer] Downloading configuration...");
    }
    try {
        $.getJSON(nyarukoplayer_conffile,function(responseTxt,statusTxt,xhr,data){
            if(statusTxt == "error") {
                if (nyarukoplayer_consolelog) console.error("[NyarukoPlayer] Download configuration failed. "+xhr.status+": "+xhr.statusText);
                nyarukoplayer_error();
            }
            if(statusTxt == "success") {
                var json = xhr.responseJSON;
                var conf = json[0];
                if(conf["cnlrc"]) nyarukoplayer_cnlrc = conf["cnlrc"];
                if(conf["lrctime"]) nyarukoplayer_lrctime = conf["lrctime"];
                if(conf["titlelrc"]) nyarukoplayer_titlelrc = conf["titlelrc"];
                if(conf["imgtype"]) nyarukoplayer_imgtype = conf["imgtype"];
                if(conf["webp"]) nyarukoplayer_webp = conf["webp"];
                if(conf["imgdir"]) nyarukoplayer_imgdir = conf["imgdir"];
                if(conf["musicbtnimg"]) nyarukoplayer_musicbtnimg = conf["musicbtnimg"];
                if(conf["lrcfile"]) nyarukoplayer_lrcfile = conf["lrcfile"];
                if(conf["musicfile"]) nyarukoplayer_musicfile = conf["musicfile"];
                if(conf["musicblock"]) nyarukoplayer_musicblock = conf["musicblock"];
                if(conf["replay"]) nyarukoplayer_replay = conf["replay"];
                if(conf["autoplay"]) nyarukoplayer_autoplay = conf["autoplay"];
                var items = json[1];
                datdatacount = items.length;
                if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Download configuration. "+datdatacount+": "+xhr.status+": "+xhr.statusText);
                nyarukoplayer_animationinit(items);
            }
        });
    } catch (ex) {
        if (nyarukoplayer_consolelog) console.error("Data loading failed: "+ex);
        nyarukoplayer_error();
    }
}
function nyarukoplayer_animationinit(data) {
    $.ajaxSetup({
        error: function (x, e) {
            if (nyarukoplayer_consolelog) console.error("Data loading failed: "+e);
            nyarukoplayer_error();
            return false;
        }
    });
    var brow = nyarukoplayer_browserok();
    if (brow != null) {
        nyarukoplayer_error(brow);
        return;
    }
    nyarukoplayer_webpok = nyarukoplayer_checkWebpSupport();
    if ($.isFunction($.cookie) && $.cookie("disable") == "true") {
        if (nyarukoplayer_consolelog) console.warn("[NyarukoPlayer] Disabled by cookie.");
        $(".nyarukoplayer_loading").remove();
        // $("#titlebox").css("background","transparent");
        return;
    }
    nyarukoplayer_count = data.length;
    if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Configuration loaded.");
    if($.isFunction(nyarukoplayerCallback_ConfigurationLoaded)){
        nyarukoplayerCallback_ConfigurationLoaded();
    }
    if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Loading images...");
    $.each(data, function(i, items) {
        if (nyarukoplayer_webp && nyarukoplayer_webpok) {
            nyarukoplayer_imgtype = "webp";
        }
        imgurl = nyarukoplayer_imgdir+items[0]+"."+nyarukoplayer_imgtype;
        nyarukoplayer_width[i] = items[1];
        nyarukoplayer_height[i] = items[2];
        nyarukoplayer_from[i] = items[3];
        nyarukoplayer_to[i] = items[4];
        nyarukoplayer_time[i] = items[5];
        nimg = new Image();
        nimg.src = imgurl;
        nimg.onload=function(){
            nyarukoplayer_imgcache[i] = $(this);
            nyarukoplayer_loaded++;
            var progress = nyarukoplayer_loaded / nyarukoplayer_count * 100;
            if (nyarukoplayer_consolelog) console.log("Loading... "+nyarukoplayer_loaded+"/"+nyarukoplayer_count+" : "+progress+"%");
            var nyarukoplayer_loadingok = $(".nyarukoplayer_loadingok");
            if (!nyarukoplayer_errord) nyarukoplayer_loadingok.html("载入中 "+progress.toFixed(0)+"%");
            nyarukoplayer_loadingok.css("width",progress+"%");
            if (nyarukoplayer_loaded == nyarukoplayer_count) {
                if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Image Loaded.");
                if($.isFunction(nyarukoplayerCallback_ImageLoaded)){
                    nyarukoplayerCallback_ImageLoaded();
                }
                if ($(".nyarukoplayer_audiodiv").length != 0 && $(".nyarukoplayer_musiccontrol") != 0) {
                    $(".nyarukoplayer_audiodiv").css("background","url('"+nyarukoplayer_musicbtnimg+"') no-repeat");
                    //仅手机提示是否播放音乐
                    // if (jQuery.browser.mobile) {
                    //     nyarukoplayer_musicdiglog_open();
                    // } else {
                    //     nyarukoplayer_playmusic(true);
                    //     nyarukoplayer_ready();
                    // }
                    //全部提示
                    if (nyarukoplayer_autoplay) {
                        nyarukoplayer_musicdiglog_open();
                    } else {
                        nyarukoplayer_musicready = true;
                    }
                } else {
                    if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] 没有导入相关 div 或 播放地区/语言限制，无法播放音频。");
                    nyarukoplayer_ready();
                }
                nyarukoplayer_preplay();
                if (nyarukoplayer_waitload) {
                    nyarukoplayer_playnow(false);
                }
            }
        };
        nimg.onerror=function(){
            if (nyarukoplayer_consolelog) console.error("[NyarukoPlayer] Picture loading failed");
            nyarukoplayer_error();
        };
    });
    if (nyarukoplayer_lrcfile && nyarukoplayer_musicfile) {
        if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Downloading lyric...");
        $.ajax({
            url: nyarukoplayer_lrcfile,
            dataType: 'text',
            success: function(data) {
                nyarukoplayer_audioinit(data);
            }
        });
    }
    $(window).resize(function() {
        nyarukoplayer_resizeendimg();
    });
}
function nyarukoplayer_playnow(cplaynow = true) {
    nyarukoplayer_cplaynow = cplaynow;
    if (nyarukoplayer_loaded == 0 || nyarukoplayer_loaded != nyarukoplayer_count) {
        nyarukoplayer_waitload = true;
        return false;
    }
    if (nyarukoplayer_autoplay || nyarukoplayer_musicready) {
        if (nyarukoplayer_musicdiglog_open() != 3) {
            if (nyarukoplayer_playd) {
                if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Has started, no need to start again.");
                return;
            }
            if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Image Play.");
            nyarukoplayer_playd = true;
            nyarukoplayer_play();
        } else {
            nyarukoplayer_autoplay = true;
        }
    }
    if($.isFunction(nyarukoplayerCallback_AnimateStart)){
        nyarukoplayerCallback_AnimateStart();
    }
    return true;
}
function nyarukoplayer_preplay() {
    $(".nyarukoplayer_loading").remove();
    if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Ready.");
    if($.isFunction(nyarukoplayerCallback_AnimateReady)){
        nyarukoplayerCallback_AnimateReady(nyarukoplayer_autoplay);
    }
}
function nyarukoplayer_ready() {
    if ($(".nyarukoplayer") != 0) {
        if (nyarukoplayer_autoplay) {
            nyarukoplayer_playnow(false);
        }
    } else {
        if (nyarukoplayer_consolelog) console.error("[NyarukoPlayer] Unable to play animation without importing related div.");
        // $("#titlebox").css("background","transparent");
    }
}
function nyarukoplayer_playmusic(play) {
    if (nyarukoplayer_playd && nyarukoplayer_cplaynow) {
        nyarukoplayer_cplaynow = false;
        return;
    }
    if (play) {
        if (document.getElementById("nyarukoplayer_musiccontrol") && document.getElementById("nyarukoplayer_musiccontrol").paused) {
            if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Music Play.");
            $(".nyarukoplayer_audiodiv").css("animation","change 2s linear infinite");
            document.getElementById("nyarukoplayer_musiccontrol").play();
            if($.isFunction(nyarukoplayerCallback_MusicPlay)){
                nyarukoplayerCallback_MusicPlay();
            }
        }
    } else {
        if (document.getElementById("nyarukoplayer_musiccontrol") && !document.getElementById("nyarukoplayer_musiccontrol").paused) {
            if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Music Pause.");
            $(".nyarukoplayer_audiodiv").css("animation","none");
            document.getElementById("nyarukoplayer_musiccontrol").pause();
            if($.isFunction(nyarukoplayerCallback_MusicPause)){
                nyarukoplayerCallback_MusicPause();
            }
        }
    }
}
function nyarukoplayer_error(msg = "一些资源加载失败，请稍后刷新再试。") {
    nyarukoplayer_errord = true;
    $(".nyarukoplayer_loadingok").css({"width":"100%","background-color":"#FF0033","background":"linear-gradient(#FF6666, #FF0033)","text-align":"center"});
    $(".nyarukoplayer_loadingok").html(msg);
    // $("#titlebox").css("background","transparent");
    if($.isFunction(nyarukoplayerCallback_Error)){
        nyarukoplayerCallback_Error(msg);
    }
}
function nyarukoplayer_unload(removediv) {
    nyarukoplayer_unbindcallback();
    nyarukoplayer_stop();
    if (removediv) $(".nyarukoplayer").remove();
}
function nyarukoplayer_unbindcallback() {
    nyarukoplayerCallback_AnimateStart = null;
    nyarukoplayerCallback_AnimateEnd = null;
    nyarukoplayerCallback_LyricEnd = null;
    nyarukoplayerCallback_ConfigurationLoaded = null;
    nyarukoplayerCallback_ImageLoaded = null;
    nyarukoplayerCallback_LyricsLoaded = null;
    nyarukoplayerCallback_MusicLanguageblock = null;
    nyarukoplayerCallback_MusicDisabled = null;
    nyarukoplayerCallback_Error = null;
    nyarukoplayerCallback_MusicPlay = null;
    nyarukoplayerCallback_MusicPause = null;
    nyarukoplayerCallback_AnimateReady = null;
}
function nyarukoplayer_stop() {
    nyarukoplayer_musicdiglog_close();
    nyarukoplayer_playmusic(false);
    nyarukoplayer_replay = false;
    nyarukoplayer_animateend($(".nyarukodiv"),true);
}
function nyarukoplayer_play(back = false) {
    if (!back) {
        if (nyarukoplayer_retaincount == 0) {
            nyarukoplayer_retaincount++;
        } else {
            return;
        }
    }
    $(".nyarukoplayer").append('<div class="nyarukodiv"></div>');
    var nyarukodiv = $(".nyarukodiv");
    var nimg = nyarukoplayer_imgcache[nyarukoplayer_now];
    var imgwidth = nyarukoplayer_width[nyarukoplayer_now];
    var imgheight = nyarukoplayer_height[nyarukoplayer_now];
    nyarukodiv.append(nimg);
    var nfrom = nyarukoplayer_from[nyarukoplayer_now];
    var nto = nyarukoplayer_to[nyarukoplayer_now];
    var ntime = nyarukoplayer_time[nyarukoplayer_now] * 1000;
    var nfromcss = nyarukoplayer_frame(nfrom,imgwidth,imgheight);
    var ntocss = nyarukoplayer_frame(nto,imgwidth,imgheight);
    nyarukodiv.css({"left":nfromcss[0],"top":nfromcss[1],"width":nfromcss[2],"height":nfromcss[3]});
    nyarukodiv.animate({"left":ntocss[0],"top":ntocss[1],"width":ntocss[2],"height":ntocss[3]},ntime,function(){
        if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] IMG "+(nyarukoplayer_now+1)+"/"+nyarukoplayer_count);
        if (nyarukoplayer_now < nyarukoplayer_count-1) {
            nyarukoplayer_now++;
            nyarukodiv.remove();
            nyarukoplayer_play(true);
        } else {
            nyarukoplayer_animateend(nyarukodiv,false);
        }
    });
}
function nyarukoplayer_animateend(nyarukodiv,replaynow) {
    if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Animate End.");
    if($.isFunction(nyarukoplayerCallback_AnimateEnd)){
        nyarukoplayerCallback_AnimateEnd();
    }
    if (nyarukoplayer_replay || replaynow) {
        nyarukoplayer_now = 0;
        nyarukodiv.stop();
        nyarukodiv.remove();
        nyarukoplayer_play(nyarukoplayer_replay);
    }
}
function nyarukoplayer_frame(position,imgwidth,imgheight) {
    var screenwidth = $(".nyarukoplayer").width();
    var screenheight = $(".nyarukoplayer").height();
    var x = 0;
    var y = 0;
    var w = 0;
    var h = 0;
    var imgwh = imgwidth / imgheight;
    if (position == "L") { //左
        x = 0;
        w = imgwh * screenheight;
        if(w < screenwidth){
            w = screenwidth;
        }
        h = w/imgwh;
        y = (screenheight - h)/2;
    } else if (position == "R") { //右
        w = imgwh * screenheight;
        if(w < screenwidth){
            w = screenwidth;
        }
        x = screenwidth - w;
        h = w/imgwh;
        y = (screenheight - h)/2;
    } else if (position == "U") { //上
        y = 0;
        h = screenwidth/imgwh;
        if(h < screenheight){
            h = screenheight;
        }
        w = h*imgwh;
        x = (screenwidth - w)/2;
    } else if (position == "D") { //下
        h = screenwidth/imgwh;
        if(h < screenheight){
            h = screenheight;
        }
        w = h*imgwh;
        y = screenheight - h;
        x = (screenwidth - w)/2;
    } else if (position == "C") { //中
        var ccss = nyarukoplayer_imgcenter(imgwidth,imgheight,screenwidth,screenheight);
        x = ccss[0];
        y = ccss[1];
        w = ccss[2];
        h = ccss[3];
    } else if (position == "B") { //大
        var cw = screenwidth - imgwidth;
        var ch = screenheight - imgheight;
        if(cw > ch){
            w = screenwidth*1.2;
            h = w/imgwh;
            x = (screenwidth - w)/2;
            y = (screenheight - h)/2;
        }else{
            h = screenheight*1.2;
            w = h*imgwh;
            x = (screenwidth - w)/2;
            y = (screenheight - h)/2;
        }
    } else if (position == "S") { //小
        var cw = screenwidth - imgwidth;
        var ch = screenheight - imgheight;
        if(cw > ch){
            w = screenwidth*0.8;
            h = w/imgwh;
            x = (screenwidth - w)/2;
            y = (screenheight - h)/2;
        }else{
            h = screenheight*0.8;
            w = h*imgwh;
            x = (screenwidth - w)/2;
            y = (screenheight - h)/2;
        }
    }
    if (nyarukoplayer_consolelog) console.log(x+","+y+","+w+","+h+","+imgwh);
    return [x,y,w,h];
}
function nyarukoplayer_resizeendimg() {
    var screenwidth = $(".nyarukoplayer").width();
    var screenheight = $(".nyarukoplayer").height();
    var imgwidth = nyarukoplayer_width[nyarukoplayer_now];
    var imgheight = nyarukoplayer_height[nyarukoplayer_now];
    var ccss = nyarukoplayer_imgcenter(imgwidth,imgheight,screenwidth,screenheight);
    x = ccss[0];
    y = ccss[1];
    w = ccss[2];
    h = ccss[3];
    $(".nyarukodiv").css({"left":x,"top":y,"width":w,"height":h});
}
function nyarukoplayer_imgcenter(imgwidth,imgheight,screenwidth,screenheight) {
    var screenwidth = $(".nyarukoplayer").width();
    var screenheight = $(".nyarukoplayer").height();
    var x = 0;
    var y = 0;
    var w = 0;
    var h = 0;
    var imgwh = imgwidth / imgheight;
    var cw = screenwidth - imgwidth;
    var ch = screenheight - imgheight;
    var cwh = cw / ch;
    if (cw > ch) {
        w = screenwidth;
        h = w/imgwh;
        y = (screenheight - h) / 2;
    }else{
        h = screenheight;
        w = h*imgwh;
        x = (screenwidth - w) / 2;
    }
    if (imgwh > 1) {
        if(cwh > 1.01 && cwh < imgwh){
            if(cw < ch){
                w = screenwidth;
                h = w/imgwh;
                y = (screenheight - h) / 2;
                x = 0;
            }else{
                h = screenheight;
                w = h*imgwh;
                x = (screenwidth - w) / 2;
                y = 0;
            }
        }
    } else {
        if(cwh > imgwh && cwh < 1){
            if(cw < ch){
                w = screenwidth;
                h = w/imgwh;
                y = (screenheight - h) / 2;
                x = 0;
            }else{
                h = screenheight;
                w = h*imgwh;
                x = (screenwidth - w) / 2;
                y = 0;
            }
        }
    }
    return [x,y,w,h];
}
function nyarukoplayer_audioinit(lrc) {
    if ($.isFunction($.cookie) && $.cookie("disable") == "true") {
        if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Disabled by user.");
        if($.isFunction(nyarukoplayerCallback_MusicDisabled)){
            nyarukoplayerCallback_MusicDisabled();  
        }
        return;
    }
    if (nyarukoplayer_musicblock != "" && $.isFunction($.cookie) && $.cookie('nochkarea') != 'true') {
        var lang = navigator.language.substr(0,2);
        var musicblock = nyarukoplayer_musicblock.split('|');
        for(var i = 0; i < musicblock.length; i++){
            if (musicblock[i] == lang) {
                if (nyarukoplayer_consolelog) console.warn("[NyarukoPlayer] 对不起，您所在的地区不能播放这首背景音乐 このページはお住まいの地域からご利用になれません Cannot use this page from the area to live");
                $(".nyarukoplayer_audiodiv").remove();
                if($.isFunction(nyarukoplayerCallback_MusicLanguageblock)){
                    nyarukoplayerCallback_MusicLanguageblock(); 
                }
                return;
            }
        }
    }
    $(".nyarukoplayer_musiccontrol").html('<source src="'+nyarukoplayer_musicfile+'" />');
    var audio = document.getElementById("nyarukoplayer_musiccontrol");
    var audiodiv = $(".nyarukoplayer_audiodiv");
    setTimeout(function(){audio.pause();},100);
    audiodiv.click(function(){
        //event.stopPropagation();
        if(document.getElementById("nyarukoplayer_musiccontrol").paused)
        {
            nyarukoplayer_playmusic(true);
            return;
        }
        nyarukoplayer_playmusic(false);
        $(".nyarukoplayer_lrc").html("");
    });
    if (lrc) {
        var lines = lrc.split('\n');
        var pattern = /\[\d{2}:\d{2}.\d{2}\]/g;
        var result = [];
        while (!pattern.test(lines[0])) {    
            lineslines = lines.slice(1);
        };
        lines[lines.length - 1].length === 0 && lines.pop();
        lines.forEach(function(v, i, a) {
            var time = v.match(pattern);
            var value = v.replace(pattern, '');
            time.forEach(function(v1, i1, a1) {
                var t = v1.slice(1, -1).split(':');
                result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
            });
        });
        var mi = 0;
        var mlen = result.length;
        var mj, md;
        for (; mi < mlen; mi++) {
            for (mj = 0; mj < mlen; mj++) {
                if (result[mi][0] < result[mj][0]) {
                    md = result[mj];
                    result[mj] = result[mi];
                    result[mi] = md;
                }
            }
        }
        nyarukoplayer_lrc = [];
        for(var i = 0; i < result.length; i++){
            var lang = result[i][1];
            if (lang == "") {
                lang = ["",""];
            } else {
                lang = lang.split('|');
            }
            nyarukoplayer_lrc[i] = [result[i][0]+nyarukoplayer_lrctime,lang[0],lang[1]];
        }
        audio.ontimeupdate = function() {
            for (var i = 0, l = nyarukoplayer_lrc.length; i < l; i++) {
                if (nyarukoplayer_lrcoldtime == -1) {
                    if (this.currentTime < 1) {
                        nyarukoplayer_lrcoldtime = 0;
                    } else {
                        break;
                    }
                }
                var nyarukoplayerlrc0 = nyarukoplayer_lrc[i][0];
                if (this.currentTime > nyarukoplayerlrc0 && nyarukoplayer_lrcoldtime < nyarukoplayerlrc0) {
                    nyarukoplayer_lrcoldtime = this.currentTime;
                    var nowlrc = "";
                    if (nyarukoplayer_cnlrc && nyarukoplayer_lrc[i][2]) {
                        nowlrc = nyarukoplayer_lrc[i][2];
                    } else {
                        nowlrc = nyarukoplayer_lrc[i][1];
                    }
                    if (nowlrc == "END") {
                        nowlrc = "";
                        if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Lyric End.");
                        nyarukoplayer_lrcoldtime = -1;
                        if($.isFunction(nyarukoplayerCallback_LyricEnd)){
                            nyarukoplayerCallback_LyricEnd();  
                        }
                    }
                    if ($(".nyarukoplayer_lrc").html() != nowlrc) {
                        if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] LRC "+i+"/"+l+"|"+this.currentTime+"/"+nyarukoplayerlrc0);
                        var lrcdiv = $(".nyarukoplayer_lrc");
                        if (document.hidden) {
                            lrcdiv.text(nowlrc);
                        } else {
                            lrcdiv.fadeTo(200,0,function() {
                                nyarukoplayer_lrctimers = nowlrc;
                                lrcdiv.text("");
                                nyarukoplayer_lrctimer = setInterval(function(){
                                    if(document.getElementById("nyarukoplayer_musiccontrol").paused) {
                                        clearInterval(nyarukoplayer_lrctimer);
                                        nyarukoplayer_lrctimeri = 0;
                                        nyarukoplayer_lrctimers = "";
                                        return;
                                    }
                                    lrcdiv.append(nyarukoplayer_lrctimers.charAt(nyarukoplayer_lrctimeri));  
                                    if(nyarukoplayer_lrctimeri ++ === nyarukoplayer_lrctimers.length){  
                                        clearInterval(nyarukoplayer_lrctimer);
                                        nyarukoplayer_lrctimeri = 0;
                                    }
                                },100);
                                lrcdiv.fadeTo(0,1,null);
                            });
                        }
                        if (nyarukoplayer_titlelrc) {
                            document.title = "♪" + nowlrc;
                        }
                    }
                    break;
                }
            }
        }
        $(".nyarukoplayer_lrc").click(function(){
            nyarukoplayer_cnlrc = !nyarukoplayer_cnlrc;
            if (nyarukoplayer_cnlrc) {
                $(this).html("(切换为中文歌词...)");
            } else {
                $(this).html("(切换为原版歌词...)");
            }
        });
        if (nyarukoplayer_consolelog) console.log("[NyarukoPlayer] Lyrics loaded.");
        if($.isFunction(nyarukoplayerCallback_LyricsLoaded)){
            nyarukoplayerCallback_LyricsLoaded();  
        }
    }
}
function nyarukoplayer_nochkarea(val = false) {
    if ($.isFunction($.cookie)) $.cookie('nochkarea', val, { expires: 365 });
    location.reload(false);
}
function nyarukoplayer_disable(val = false) {
    if ($.isFunction($.cookie)) $.cookie('disable', val, { expires: 365 });
    location.reload(false);
}
function nyarukoplayer_musicdiglog_close() {
    $('.nyarukoplayer_musicdiglog').animate({
        "left":"200%"
    },1000,function () {
        $('.nyarukoplayer_musicdiglog').remove();
    });
}
function nyarukoplayer_musicdiglog_nomusic() {
    setTimeout(function(){
        nyarukoplayer_musicdiglog_close();
        nyarukoplayer_ready();
    },500);
}
function nyarukoplayer_musicdiglog_open() {
    if ($('.nyarukoplayer_musicdiglog').length != 0 || nyarukoplayer_playd) {
        return -1;
    }
    if (!(nyarukoplayer_lrcfile && nyarukoplayer_musicfile)) {
        nyarukoplayer_musicdiglog_nomusic();
        return 2;
    }
    var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!isiOS && $.isFunction($.cookie) && $.cookie('playmusic') == "1") {
        setTimeout(function(){
            nyarukoplayer_playmusic(true);
            nyarukoplayer_musicdiglog_close();
            nyarukoplayer_ready();
        },500);
        return 1;
    } else if (!isiOS && $.isFunction($.cookie) && $.cookie('playmusic') == "2") {
        nyarukoplayer_musicdiglog_nomusic();
        return 2;
    } else {
        var bodyhtml = '<div id="nyarukoplayer_musicdiglog"><h1>要开启背景音乐吗？</h1><p><a id="nyarukoplayer_musicdiglog_yes">播放(推荐)</a></p><p><a id="nyarukoplayer_musicdiglog_no">不要播放</a></p>';
        if (!isiOS) {
            bodyhtml = bodyhtml + '<p><input type="checkbox" id="nyarukoplayer_musicdiglog_save" value="1" checked="checked" />今日不再询问</p>';
        }
        bodyhtml = bodyhtml + '</div>';
        $("body").append(bodyhtml);
        $(".nyarukoplayer_musicdiglog_yes").click(function(){
            if (!isiOS && $.isFunction($.cookie) && $(".nyarukoplayer_musicdiglog_save").prop("checked")) {
                $.cookie('playmusic', "1", { expires: 1 });
            }
            nyarukoplayer_playmusic(true);
            nyarukoplayer_musicdiglog_close();
            nyarukoplayer_ready();
            nyarukoplayer_play();
        });
        $(".nyarukoplayer_musicdiglog_no").click(function(){
            if (!isiOS && $.isFunction($.cookie) && $(".nyarukoplayer_musicdiglog_save").prop("checked")) {
                $.cookie('playmusic', "2", { expires: 1 });
            }
            nyarukoplayer_musicdiglog_close();
            nyarukoplayer_ready();
            nyarukoplayer_play();
        });
        return 3;
    }
}
function nyarukoplayer_checkWebpSupport() {
    const canvas = document.createElement('canvas');
    if (Boolean(canvas.getContext && canvas.getContext('2d'))) {
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }
    return false;
}
function nyarukoplayer_browserok() {
    var brow = navigator.userAgent.toLowerCase();
    var bInfo="";
    if(/ie/.test(brow)){bInfo="IE";}
    if(/opera/.test(brow)){bInfo="Opera";}
    if (bInfo=="") {return null;}
    return "抱歉,暂不支持"+bInfo+",建议使用最新版Chrome。";
}
