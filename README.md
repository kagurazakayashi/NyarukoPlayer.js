# NyarukoPlayer.js

- NyarukoPlayer 是一个为网页增加动态背景图和歌词音乐的基于 jQuery 的 JavaScript 脚本。
- 是一些背景视频的替代品，可以让流量少很多的同时保证清晰。

## 功能

### 配置存储特性
- 使用单独的 JSON 存储全局配置，包括：
  - 图片与动画：每张背景图片的名称、尺寸、动画起始位置、动画结束位置。
  - 脚本的参数：
- 使用 Cookie 存储用户配置，包括：
  - 可以指定某个语言环境下不加载背景音乐，允许使用 Cookie 临时禁用。
  - 可以通过 Cookie 允许和禁用此脚本的功能（例如可以让用户在他们的流量计费设备上不加载这些图片和音乐）。
- ~~使用修改变量方式存储全局配置~~
  - 这项功能已经弃用，改为由 JSON 统一读取配置。
  - ~~可以通过修改变量配置多个功能开关和各种资源路径。~~
  - ~~有控制台输出开关，方便调试。~~

### 加载过程特性
- 加载时在顶部显示进度条和百分比。
- 加载错误等会在页面顶端给予用户提示。
- 加载完成之前过发生错误时不影响网页正常工作，将显示网页原本的背景图片。

### 背景图片特性
- 每次动画执行前自动计算图片坐标，让图片能填满页面，而不产生拉伸和空白区域，并根据需要自动确定是否要执行当前动画。
- 自动识别浏览器是否支持 webp 格式图片，如果是则自动使用，否则自动加载 jpeg 或指定的其他格式图片。可以在配置中禁用 webp 及指定图片扩展名。

### 图片动画特性
- 可以在配置中指定每张图片的运动方向，目前支持：
  - 从左到右(L-R)
  - 从右到左(R-L)
  - 从上到下(U-D)
  - 从下到上(D-U)
  - 中心放大(C-B)
  - ~~中心缩小(C-S)~~（尚未提供）
- 以保持图片适配填充背景为优先，如果当前网页显示区域比例和图片比例相等，将不产生动画。
- 网页切到后台背景图片动画将自动暂停。

### 背景音乐特性
- 可以自动播放背景音乐，并允许用户通过按钮播放和暂停。
- 在被访问时可以由用户选择是否要播放背景音乐，并记住此设置一段时间。
- 可以识别 iOS Safari 的背景音乐策略，需要用户的响应，并在全局后台播放。

### 歌词显示特性
- 可以载入 .lrc 歌词并在底部同步显示。
- 可以配置歌词偏移时间。
- 页面切出后可在标题栏显示同步歌词并暂停图片动画。可以在配置中禁用。
- 可以载入双语言歌词，点击歌词可以切换原文歌词和译文歌词。可以在配置中指定初始显示的歌词。
- 歌词实时换词时有过渡动画，在网页被切到后台时自动取消过渡动画。

### 脚本特性
- 导入的库仅有一个 cookie 库。
- 所有的全局变量和方法名称都有统一的前缀，减少名称冲突可能。
- 有充足的回调方法。

## 集成指南

### 1.准备网页

- 创建一个 HTML5 网页，使用 UTF8 编码。
```
<html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
```

- 创建并导入与之关联的 CSS 样式和 JS 脚本，例如：
```
<link rel="stylesheet" type="text/css" href="indexfiles/index.css" />
<script type="text/javascript" src="indexfiles/index.js"></script>
```

### 2.变更配置
- 创建一个文件夹（这里以 indexfiles/ 为例），用于保存多媒体资源和配置。
- 在文件夹中新建一个 .json 文件，用于存储设定。
- 参考下面的 **JSON 文件示例**进行设定。

### 3.导入相关文件和依赖
导入样式表：
```
<link rel="stylesheet" type="text/css" href="indexfiles/nyarukoplayer.css" />
```

导入依赖
Jquery：
```
<script type="text/javascript" src="indexfiles/jquery.cookie.js"></script>
```

Jquery 的 Cookie 库：
```
<script type="text/javascript" src="indexfiles/jquery.cookie.js"></script>
```

导入主脚本：
```
<script type="text/javascript" src="indexfiles/nyarukoplayer.js"></script>
```

### 4.创建所需 HTML 元素

创建载入进度条：
```
<div id="nyarukoplayer_loading">
    <noscript>错误：页面没有成功运行，请允许 javascript 以获得最佳浏览体验。</noscript>
    <div id="nyarukoplayer_loadingok">
        Loading...
    </div>
</div>
```
创建背景动画 div ：
```
<div id="nyarukoplayer"></div>
```

创建屏蔽 div ，防止右键图片另存为和图片拖曳：
```
<div id="nyarukoplayer_def"></div>
```

写入你的网页内容。

创建背景音乐和背景音乐开关按钮：
```
<div id="nyarukoplayer_audiodiv">
    <audio id="nyarukoplayer_musiccontrol" autoplay loop>
    </audio>
</div>
```

创建实时歌词显示 div ：
```
<div id="nyarukoplayer_lrc" name="点此可以切换歌词语言"></div>
```

### 5.初始化

在自己的 js 中添加代码（不是 nyarukoplayer.js ），在网页加载完毕后初始化 NyarukoPlayer 。
```
$(document).ready(function(){
    nyarukoplayer_init("indexfiles/nyaruko.json",true);
});
```
nyarukoplayer_init 接受两个参数：
- 第一个是 json 配置文件路径。
- 第二个是是否开启控制台输出，便于调试。

至此功能已经实现。

### 6.实现所需的代理方法(可选步骤)

在自己的 js 中添加代码。可用的代理方法列表：

- 动画开始
  - nyarukoplayerCallback_AnimateStart = function(){};
- 动画结束
  - nyarukoplayerCallback_AnimateEnd = function(){};
- 歌词结束
  - nyarukoplayerCallback_LyricEnd = function(){};
- 设置已载入
  - nyarukoplayerCallback_ConfigurationLoaded = function(){};
- 图片已载入
  - nyarukoplayerCallback_ImageLoaded = function(){};
- 歌词已载入
  - nyarukoplayerCallback_LyricsLoaded = function(){};
- 音乐语言屏蔽
  - nyarukoplayerCallback_MusicLanguageblock = function(){};
- 音乐被禁用
  - nyarukoplayerCallback_MusicDisabled = function(){};
- 出现错误
  - nyarukoplayerCallback_Error = function(msg){};
  - msg: (string)错误信息。
- 音乐播放
  - nyarukoplayerCallback_MusicPlay = function(){};
- 音乐暂停
  - nyarukoplayerCallback_MusicPause = function(){};

使用示例：
```
nyarukoplayerCallback_AnimateEnd = function() {
    $("#titlebox").css("background","transparent");
}
```

## 其他技巧
### 让切出网页后标题栏自动显示歌词

在自己的 js 中添加代码：
```
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        nyarukoplayer_titlelrc = true;
    } else  {
        nyarukoplayer_titlelrc = false;
        document.title = "神楽坂雅詩的个人网站 - 神楽坂雅詩的小世界"; //原来的网页名
    }
}, false);
```

### 允许代码或用户在本地禁用/启用 NyarukoPlayer

在自己的 js 中添加代码：
```
function disablemedia() {
    if ($.cookie("disable") == "true") {
        nyarukoplayer_disable(false);
    } else {
        nyarukoplayer_disable(true);
    }
}
```

## 配置文件示例

### JSON 配置文件示例

```
[
    {
        "cnlrc":true, //初始歌词语言，单语言请用 false 。
        "lrctime":0.5, //歌词偏移时间，如果 lrc 歌词有时间偏差可以在此修正。
        "titlelrc":false, //标题栏歌词，只设定初始值。可以通过在代码中改变智能化。
        "imgtype":"jpg", //主图片扩展名，读取时会用此扩展名，例如 "1.jpg"。
        "webp":true, //WEBP支持，如果检测到浏览器可用 webp ，则优先读取 webp 扩展名，例如 "1.webp"。
        "replay":false, //动画结束后自动重播
        "imgdir":"indexpage/", //图片路径(文件夹)，读取时会例如 "indexpage/1.jpg"。
        "musicbtnimg":"indexpage/btn_audio.png", //音乐播放暂停按钮图片路径
        "lrcfile":"indexpage/nyaruko.lrc", //歌词文件路径
        "musicfile":"indexpage/nyaruko.mp3", //音频文件路径
        "musicblock":"ja|en" //当浏览器为以下语言时，不播放音乐。多个语言用「|」分隔。
    },
    [
        [
            "1", //图片文件名，不要带路径和扩展名
            2154,1080, //图片的准确尺寸（px）
            "L","R",7.39 //动画从左(L)到右(R)进行，持续时间7.39秒。
        ],
        [
            "2", //实际指向文件基于上面的设置，将类似于 "indexpage/2.jpg"。
            1920,1263,
            "U","D",7.52 //动画从上(U)到下(D)进行，持续时间7.52秒。
        ],
        [
            "3",
            1920,1560,
            "U","D",7.08
        ],
        [
            "4",
            1920,1080,
            "C","B",4.00 //动画从中心(C)到放大(B)进行，持续时间4.00秒。
        ],
        [
            "5",
            1920,2115,
            "D","U",10.5 //动画从下(D)到上(U)进行，持续时间10.5秒。
        ]
    ]
]
```

### LRC 歌词文件示例

请按照格式 `[分:秒.分秒]原文歌词|中文歌词` 进行书写，如果只有原文则只写原文，最后应以 `END` 设定结束点，END后不要再接歌词。
```
[00:00.00]这いよりますか？ 生のうねり！|要潜行於这股惊涛骇浪吗
[00:02.78]SAN値ピンチ SAN値ピンチ SAN値ピンチ SAN値ピンチ|SAN値!即将归零!SAN値!即将归零!
[00:15.16]谁だ？ 邪魔するな my my LOVE|是谁啊 别来干扰我的恋情
// 此处省略部分
[02:50.02]这いよりました！じゃあまた 来周！(破ッ)|还想潜行吗那么下周再会(哈!)
[02:56.00]『恋は浑沌の隷也』|『恋爱乃混沌之奴隶』
[02:57.00]歌：后ろから这いより队G //注：如果无双语歌词，将直接显示此条歌词
// 此处省略部分
[03:50.64]这いよりますか？ 生(せい)のうねり！(破ッ)|要潜行於这股惊涛骇浪吗(哈!)
[03:54.22]END //注：应设定结束点，END后不要再接歌词。
```

## 许可协议
Apache.

```
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
```