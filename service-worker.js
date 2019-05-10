/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","6eb86ef941eb970f2cdf8a557dd927e0"],["about/index.html","d9bb8cb47d1142493ac0c4d869d9eae3"],["archives/2014/12/index.html","904b3630f54c12576201a7cbf70a5f3d"],["archives/2014/index.html","fe24dc81f8d519db13df3c6dc1cac2b3"],["archives/2015/01/index.html","0996434fca5338592be92623b8cc28b0"],["archives/2015/02/index.html","2b046a8330c6b7a1a5f9ae3cf8d94cab"],["archives/2015/03/index.html","ebf17e3a3c325b721ca06a2caf1d274f"],["archives/2015/04/index.html","a38b809554233c8b79d1d50fd926d72b"],["archives/2015/05/index.html","d511be38cd9e032d20c6dfb079da2d92"],["archives/2015/06/index.html","814576a2be121df2c521dc00a1a2332e"],["archives/2015/07/index.html","22a8318c8af79af7202506bc679b7d39"],["archives/2015/08/index.html","5bcccf73d2be3b3d6fc271e3ba173c1b"],["archives/2015/09/index.html","fcb79b50c95ad125bfa910f12ca027fe"],["archives/2015/10/index.html","926a82e3a291593e755f7cf6eeb86b6e"],["archives/2015/11/index.html","c4e04f7385a69a78f0ce782a4a5f0689"],["archives/2015/12/index.html","5dc775996f169c04f78de15a2212f404"],["archives/2015/index.html","244b76258444d210924810901f8ebc60"],["archives/2015/pages/2/index.html","6498635ea17de18e24427be6d4ffe687"],["archives/2015/pages/3/index.html","ed813f4287d7a11f90b9cdc32a537421"],["archives/2015/pages/4/index.html","b5757d412b47287c70ee0e1f4f2220fb"],["archives/2015/pages/5/index.html","62d53f13f5d864f0ff91479dc1ddf184"],["archives/2015/pages/6/index.html","70b985f3e07bd74b1a7c1014c50e682b"],["archives/2016/01/index.html","f898f57005e40df0123d4285d5c6dba9"],["archives/2016/03/index.html","6f04b1af83a16aa6251f5ba02ef769a2"],["archives/2016/05/index.html","6228dda821bdfb0f3084bb06641c778b"],["archives/2016/06/index.html","ae149e66fc9fc391f8c71051f467cd63"],["archives/2016/07/index.html","efed77e4f43a2d67050fdafc6ad0cd5c"],["archives/2016/09/index.html","29751d5fe2e12d840f8f49e8fcc67b79"],["archives/2016/10/index.html","a1c301bfaf6d50034b5dce10a1395843"],["archives/2016/11/index.html","5403d5bc9912ad106646f6e4f7dab9aa"],["archives/2016/index.html","fff26f163804760a833c5e5520bbbb76"],["archives/2016/pages/2/index.html","0566b7be1165013164359e020e25d3a3"],["archives/2016/pages/3/index.html","6fad9b47f9ab10d0e3733266787144a2"],["archives/2017/02/index.html","4eab887b17b6857eb7c55cfb788ec997"],["archives/2017/03/index.html","bb8b8c60429aa63961d58c697001d2eb"],["archives/2017/04/index.html","5e1e9d397a809c7e3d5c1a6bbe5db37c"],["archives/2017/05/index.html","17faa5ca505a91f01ae3052af10f48cd"],["archives/2017/07/index.html","e53cf09d1375471a5250659b38bba4f1"],["archives/2017/08/index.html","598897c29567310fd2cbec3d06d880ae"],["archives/2017/09/index.html","0abe32152262de4bac491c741e82da39"],["archives/2017/10/index.html","352ef12ca0c44c762e7592f500cae3ca"],["archives/2017/11/index.html","237d37392d357c30b26a0a61f83ba044"],["archives/2017/12/index.html","5e310c868fe3eed65435b6fea698ad3d"],["archives/2017/index.html","bbfd72464c7639bca5343e558647fd8d"],["archives/2017/pages/2/index.html","f328ca133024e62e0e00a0f73a27d025"],["archives/2018/01/index.html","3a6c0caa37056ed6ed0ea3118de57772"],["archives/2018/02/index.html","da05669c2faba6bce5b0b34dc28df1c5"],["archives/2018/03/index.html","bf0ff13b90bafe3a9cad91db016cbc55"],["archives/2018/04/index.html","632864d5f7948340bc67c7924b000971"],["archives/2018/05/index.html","804322c79e5126e20706b6e0ba6569af"],["archives/2018/06/index.html","6457b6de81aab2ef4355460884c3771f"],["archives/2018/07/index.html","e46b167b2eb647ed250a7bc407057f5a"],["archives/2018/08/index.html","5a2084c5e0dc8ff163c56abbbdf604e8"],["archives/2018/09/index.html","bca94c33c887babc25b8d7095ddeda26"],["archives/2018/10/index.html","cc247bc3321cb56408ff489b8a140b0b"],["archives/2018/index.html","47a8b1db6827e96ce25157c553fb6e60"],["archives/2018/pages/2/index.html","e967e07aeae05e57b008efa8c30a8af8"],["archives/2018/pages/3/index.html","d1cf903212c67ddb2fd37974c58fd803"],["archives/2018/pages/4/index.html","7e1931222d1a490b486a15bafb8f039a"],["archives/2019/01/index.html","33fbc94ac993d8bcae0f0d07ed0ead65"],["archives/2019/02/index.html","60a41751344653934fe8e7ab491766d1"],["archives/2019/03/index.html","e0b423591bbd7875b411923839e8b223"],["archives/2019/04/index.html","12969c154bfe12bf0f0a08715d7501c6"],["archives/2019/05/index.html","feefde7046b4fe49d337602b8b20f6c3"],["archives/2019/index.html","a72fa4c91566b2fd0da02f581fbc0f26"],["archives/index.html","2d44537c5eb2db4e72e519ae590d0367"],["archives/pages/10/index.html","8bc2c77eadf39e51ae820c9f73b50183"],["archives/pages/11/index.html","6432fd0700818613751cf8afebcefe3f"],["archives/pages/12/index.html","ce53351d01f11216916694228403dc45"],["archives/pages/13/index.html","87c2d173bf4cf6fa31757d72a9a0054e"],["archives/pages/14/index.html","46f4490547036b70ce11cc92848aa644"],["archives/pages/2/index.html","b1285f1581513226f5a505dcf1de60c2"],["archives/pages/3/index.html","217b1fc270ad5b87982276c6e0dcc770"],["archives/pages/4/index.html","8dc8a60926f10c191a95862560e98a74"],["archives/pages/5/index.html","d5f0602784bfc6680d19533fd6229947"],["archives/pages/6/index.html","24a20b054e85da8b896be9dcf52bdf67"],["archives/pages/7/index.html","e47604ad1f6b03d8c2cc52dcf097ba97"],["archives/pages/8/index.html","78aba2f26f81973d8a4ac985e93e45fa"],["archives/pages/9/index.html","9bf413d6ddb83e5235b54bbb0206c35a"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/brand.jpg","734f817bbb181d0180d7b37749769cc0"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/bixin.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/bixin.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","0ec1ed67a1183fb8cfcfa515b743458d"],["assets/scripts/main.js","6841c187e1a5e4acc28336897fc08f9b"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","e20a0cab5d504c5012fb0c41cda9c1fe"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","657d260380f7135d36dab3a0cba1664f"],["books/index.html","d4198a2f12545008b68d6e0c3ad2a281"],["categories/Unity3D/index.html","0186ee04932c9e15c313bf0615fddea0"],["categories/Unity3D/pages/2/index.html","f69c01636ed53906d7144773cd268c95"],["categories/index.html","050fc05254119de4e30583f039a2c2e1"],["categories/人工智能/index.html","991f3594e6143bf8233ad764cfadce08"],["categories/前端开发/index.html","c520f75addc83dd874de7287234130fd"],["categories/单机游戏/index.html","ee704e034ed65b3792b225c133f5d45d"],["categories/开发工具/index.html","f9aeb4a0348245e7360934279e93edb3"],["categories/数据分析/index.html","d484cd2e9fc1c75543c884c198d06629"],["categories/数据存储/index.html","eb8e66f5b594b678c75165d66ca0176d"],["categories/游戏开发/index.html","31239d03292258c66fb442af3b2017aa"],["categories/游戏开发/pages/2/index.html","bac87791224cf2801923383102bfc629"],["categories/游戏引擎/index.html","d94d25c67ac2888c09ce274dd4ddb0d1"],["categories/独立博客/index.html","5f2db73c7937d77e18bd557142c39624"],["categories/生活感悟/index.html","07289dfd9e2b97ba78e4ca7b934fc204"],["categories/生活感悟/pages/2/index.html","b528a25ab6966e7f7fc26fefc6409f6b"],["categories/生活感悟/pages/3/index.html","370898e383d68bcb0995e013c796df6f"],["categories/编程语言/index.html","7743809107e7e747134762f2b2fd6c4f"],["categories/编程语言/pages/2/index.html","b363e5660ffaf789776744f8641e9535"],["categories/编程语言/pages/3/index.html","7b888d75ec357d8ec8d392e197d57082"],["categories/编程语言/pages/4/index.html","4e719fad9eeb8929c7d64f62795fb7db"],["categories/读书笔记/index.html","5e6d63ce9bf2a44986923f801ddfc3c5"],["categories/读书笔记/pages/2/index.html","b865ca5d20ac380e112ee3784bd43b27"],["index.html","54efd59e8877fb76706d3b2d4472f5a5"],["movies/index.html","86ed4ef37eb9d6226441c5e8612a9326"],["musics/index.html","6e52958bf4f49720e1e841d606d4bd1a"],["pages/10/index.html","fb12c19f8b242449029f6c364512ef8b"],["pages/11/index.html","d47958d1fabe8bd13b9f438a399f2554"],["pages/12/index.html","e274a0628e4c4be56790869d3ab11f77"],["pages/13/index.html","ade4eb2dbf635bcadcb87f3aa5030309"],["pages/14/index.html","82ffa196a8c7fa2ac3cbd01f66dbf855"],["pages/2/index.html","238ad80e06810bac89425ecdc97bb01d"],["pages/3/index.html","0d58d0ea73647a64e8530b35ff57686e"],["pages/4/index.html","3b7b62ec21d16db662fa0ad38f6cbc8a"],["pages/5/index.html","556f917a7fabfe96a5f2ed94623bfb10"],["pages/6/index.html","609332044c19f90c86512781932b1d4e"],["pages/7/index.html","8e20dd53dc399ccb0864e1b545d47f9b"],["pages/8/index.html","557dc31fa11fdfc1d422592abcbdba09"],["pages/9/index.html","29d0201cb4e639cfdfaf1ebebbee12e0"],["posts/1059499448/index.html","f84c899dc761b32a64ab308da126050c"],["posts/1082185388/index.html","3f9fdad228333b30143bd4879017da1a"],["posts/1099762326/index.html","31b9bab534c1a04655af3a9edb3792fc"],["posts/1113828794/index.html","2ede31450dad41d53255b37d965dc2bd"],["posts/1118169753/index.html","e16b7bdddb79615a8994c086cfd2fef9"],["posts/1122710277/index.html","d3038a4ffce0503dc5cdfb640b80df53"],["posts/1124152964/index.html","718a2af69a84fe724e1a107c412a6f57"],["posts/1127467740/index.html","a03fc360091c86200597dbbd5b90330e"],["posts/1150071886/index.html","c9faeb3ec785498760ede932396d616f"],["posts/1150143610/index.html","d57be55dbbb5edd90bd6586eeb7902b0"],["posts/1152813120/index.html","29283083e454a36a47d11263e09968e3"],["posts/115524443/index.html","4d0b81eb4686df6e201d439b06afa6cc"],["posts/1156673678/index.html","d9cdf774972c3d986a326fd54a2fd001"],["posts/1166840790/index.html","f852f345e4ab883776920fede4bd2332"],["posts/1176959868/index.html","cb22eddd790a92d9b70ef2472eb6f243"],["posts/1190622881/index.html","20a951eb1927ea143b67ac5c9fdd1ee3"],["posts/123663202/index.html","82bdb539687eae09d45ac98ba69acec2"],["posts/124807650/index.html","226464f966881d51bf0bceb4f181f6a4"],["posts/1254783039/index.html","45ed494ebb8110a1e19fa7018219653c"],["posts/1320325685/index.html","e8a6b5260bb8f55afd67f5d030225e74"],["posts/1329254441/index.html","cc1f4e0d361fc241f612e49578750288"],["posts/1357715684/index.html","b555ac9470b36238b7ce6d1d2529d1be"],["posts/1358971951/index.html","f9a2e5e290e33784ba6dfaca88215735"],["posts/1386017461/index.html","e7f3a9a0306af047ddaeea52e391d6cc"],["posts/1394521917/index.html","48d19b675626353b322faccca806d26e"],["posts/1397717193/index.html","1332ba0d1b9500ca4e9bbc3c3e5f70e2"],["posts/1424645834/index.html","207eb87d987334a6b0e719c6605c51f2"],["posts/1444577573/index.html","56d351926a45648bd375a5ce6da63a82"],["posts/1467630055/index.html","73c6d3019021ec3e20624e612ec7cdaa"],["posts/1478979553/index.html","6307d066a87ee2ae58d9f4f1716aa6c4"],["posts/166983157/index.html","fed27e486022ee49787282734a473ee4"],["posts/1670305415/index.html","b8be9a752fd481762ae3030abba868df"],["posts/1684318907/index.html","fcc2839ece1939147b773144a39ac0bd"],["posts/1700650235/index.html","7509e8fd1ba2a68883c7684ceb016f38"],["posts/172426938/index.html","ff41f2c91c56812ad6e413ea991e5f21"],["posts/1836680899/index.html","62be6228414a7c75f68cc16b33b94f20"],["posts/183718218/index.html","9df6ba73bf50eab013abb502b124b937"],["posts/187480982/index.html","0ad067b4293bac7e4a9a6862c53881b4"],["posts/1930050594/index.html","9e0f6157dd570c08314c4bb46402340a"],["posts/1933583281/index.html","c7646de53354759b6205f19b3ec5fab9"],["posts/1940333895/index.html","12d3e865b168ea1886568850be284454"],["posts/1983298072/index.html","a4b16c38dd788518e2d7710e15b375c1"],["posts/1989654282/index.html","d7e0c35e8f9c9b6d270d1483c5ba5798"],["posts/2038378679/index.html","a07b0a718411ae7577c2a54b2c399a5b"],["posts/2041685704/index.html","3e1a7e7d1013d01b781046b2fecfa4cb"],["posts/21112647/index.html","9534c574b1025070fc9a3d1f9760b59f"],["posts/2158696176/index.html","aeec48dc67f50da6bd6d4128f76313e4"],["posts/2171683728/index.html","93f4c736da07ddab8d19ee99634059e5"],["posts/2186770732/index.html","fc388132da40f86c6f72f248a943a3b6"],["posts/2275646954/index.html","078f0e5a403b61feed59f7775f849d46"],["posts/2314414875/index.html","5b41394dfa4546641f5a10db64c06585"],["posts/2418566449/index.html","76ab9d9631cacd31418598caacbb3881"],["posts/2436573863/index.html","9efc66d3493df4f3822ef99e4da42dce"],["posts/2462008667/index.html","e265ed6941d789b89ed388ee6a541f93"],["posts/2463121881/index.html","e2048534bc95504f404d4f4cd20bd270"],["posts/2527231326/index.html","ef505ea6d60d90ee6e0cb48f0bb92867"],["posts/2583252123/index.html","a5f793f5d65f71f657df105ac5a5d5af"],["posts/2613006280/index.html","b1b0752bc0038e5492b0c839b4ef0098"],["posts/2617501472/index.html","3314f48349f3da02120eefaeef0c7b0c"],["posts/2676125676/index.html","087eefbf2fd9fe5f037bd28f8aa6936b"],["posts/2734896333/index.html","d8fa712c365b37b8251bd9a726b26bb0"],["posts/2752169106/index.html","611712a883e92f8039fec6d1111df724"],["posts/2799263488/index.html","4b787ac29675e4421221697e3d7edee0"],["posts/2805694118/index.html","3c784a17aff9261c9a8f7bfa235fe560"],["posts/2809571715/index.html","58e9be499ea9f51976a457c586575ea6"],["posts/2822230423/index.html","f4618bcb467af974687990acb44a8d66"],["posts/2829333122/index.html","b40e50222488416458568e1d1fc0d18d"],["posts/2911923212/index.html","cc86df0aa012e17c6f4b0e3344e86781"],["posts/2941880815/index.html","f630a3d4413688f843f0dd3475a689d4"],["posts/2950334112/index.html","14cd803185d430906e73e7056b6867bb"],["posts/2954591764/index.html","f5110f9a6be767c4629e381561c5415f"],["posts/3019914405/index.html","f6cc72353bab9cdcc6821a5ae71503ae"],["posts/3032366281/index.html","af23a1b5193538e030269ce9f87e78ff"],["posts/3040357134/index.html","71a04fc11bc124f070bea1f7646f697b"],["posts/305484621/index.html","f870d422221e0b740fcfcc1fb2ad76f7"],["posts/3083474169/index.html","061d776c14ba256b3ed933f93cf19b27"],["posts/3111375079/index.html","52a24430b0caa0a021f04a7cd65a3001"],["posts/3120185261/index.html","81de25ef703d05dd01798b98ade516e3"],["posts/316230277/index.html","fc3753dbff9938ed6e620b09970c409e"],["posts/3175881014/index.html","c5ff8a7c148f91d26d443d9d2542fc12"],["posts/3222622531/index.html","5c6444c5176a0dfed894e432c5bb1ebe"],["posts/3247186509/index.html","1b454e55640b80f70969bbf28c371e41"],["posts/3269605707/index.html","119f80cbe1879bc92ec80c5c75660b6f"],["posts/3291578070/index.html","f6350aba321c47551275135b8f42232a"],["posts/331752533/index.html","69d2cbd1f5c7a1e199aaea5dc86bfaac"],["posts/3321992673/index.html","70f76d9836e156fe2837b2ef1bb7894c"],["posts/335366821/index.html","d086684847f3397663bf3ea362b0cdb8"],["posts/3356910090/index.html","4fcd84c099750d31cb42b49478edccf6"],["posts/337943766/index.html","7efd2bb0005c8575abd7b6910d57558b"],["posts/3417652955/index.html","8c46c2a6755f5bd1bb250f1dcd793508"],["posts/3444626340/index.html","ec138a837098750a173564c720857609"],["posts/3449402269/index.html","3333ee3c9fd1435f40a558c3187192ce"],["posts/345410188/index.html","1e13b77905ea2bde234b5dfb82f75614"],["posts/3461518355/index.html","cae4854f73147d2005c5ef1652af2dbe"],["posts/352037321/index.html","b9260ecd837b29bd7ec602face805654"],["posts/3521618732/index.html","2cc1bcbd75b25d62a87a536ec0d33faf"],["posts/3568552646/index.html","4f79da484a8c7b8bc1b519639adb9cec"],["posts/3603924376/index.html","0534ee4fa345c087524ce5c552ff2290"],["posts/3637847962/index.html","1ffb7778972b2baf378b0aa65881b36f"],["posts/3642630198/index.html","aae071c63dbca7a58efb31e9e733eb90"],["posts/3653662258/index.html","859f971ad1b93c38f24d346cf3aca4a0"],["posts/3653716295/index.html","76c8dcdb303872d0fc6d3a69039f2d27"],["posts/3657008967/index.html","ad91bacdbc582093e56b7b675e1f1cfe"],["posts/3668933172/index.html","472cbf4167ce055abc7b05db05a14a41"],["posts/3695777215/index.html","e751df694ceff8e5c4099089b305cc5d"],["posts/3736599391/index.html","4572c2fec01b952b88623a2e23c98b67"],["posts/3782208845/index.html","c2d4a0e2e734180bde3ba8196f12bcef"],["posts/3789971938/index.html","c54833ce6dd843d51abe8bc1794fd43e"],["posts/380519286/index.html","f9f8fd9884fb5e61fa02041d0a28192a"],["posts/3846545990/index.html","b181315db5cfbb63fc0a63421cddb73f"],["posts/3873710624/index.html","a85ee92f57f6f833b681d34a048997fd"],["posts/3959327595/index.html","7def34ca3e3bdedae559cc90d4020331"],["posts/3995512051/index.html","b84a129d5b48fc4c54cbf5bd94efd1ec"],["posts/4088452183/index.html","bd20ef3af704f0b53e21e4641bbff0b3"],["posts/4158690468/index.html","3d570d8fbe56201c30a754c653c38877"],["posts/4159187524/index.html","4527aae8353ab9abb924f498eb774aa8"],["posts/4197961431/index.html","f04e60d3bd65f4fe9ceba7bf1a0305de"],["posts/4205536912/index.html","5c54788bf278f172440ffb636bc90806"],["posts/426338252/index.html","a1f99cbc3f8cfdfd7b541bb0f4037966"],["posts/450254281/index.html","c9eb0be2eb30724b17670d5bf5bbdd2c"],["posts/4891372/index.html","bb8a1a54a95c020fe439842ee4d1e996"],["posts/569337285/index.html","ee7aed2e5f49498ca46490e0e0db44c0"],["posts/570137885/index.html","75599980aba37066a290fb781a4da2ac"],["posts/570888918/index.html","3f68ab0bf35bc081f05e7d4fdfbc4451"],["posts/582264328/index.html","1cac34e06ca1c98e54306975b55c0cd2"],["posts/632291273/index.html","043c839ccd8dbe501591365ef43b1d0f"],["posts/70687890/index.html","a49dad83018bcb1c520bc65be3d7abb0"],["posts/719322223/index.html","b76e85de2233a20cdaff89dce852878d"],["posts/720539850/index.html","9126970d98b0ec28035b0c49d8b5a1fe"],["posts/786195243/index.html","cf7a1bba8eaef9ba05ee59c2d86c5087"],["posts/795474045/index.html","e4d0a85a98ddd09d0cd0e687b6449c41"],["posts/815861661/index.html","ddfb29bce51c80905f7a639cee30cb5a"],["posts/821259985/index.html","676ae2d07fefaf2ba6e2dac116cb4d18"],["posts/828223375/index.html","d472f195c9a2c3b3e4b390d092cbeb51"],["posts/887585917/index.html","22e31a71cde6ae611d30bdb81230dc07"],["posts/906436376/index.html","b490fc12780fb59435623e29b20b1d53"],["posts/907824546/index.html","8e2733174f7bea78afe80fd561b790ac"],["posts/927393529/index.html","41fa329bd44edbf6665d894455f1ac4e"],["posts/94443781/index.html","850aa9e7042b218a5c9a37b6d75de5fa"],["tags/2014/index.html","6ff54dcbb2b1eb20ec8bea9d3743bd98"],["tags/AI/index.html","5ab054bdc3f77616975038f70ebe5a54"],["tags/AOP/index.html","69567e25c2dd4bf4267ea66565db0c25"],["tags/AR/index.html","cdcd94bcda27cb008b84b2f702f95e7b"],["tags/AssetBundle/index.html","3bc2eaef8e9b885dcb44418fe3464bb5"],["tags/C/index.html","1595d38b4c2ab7b730ecff9aa1eab63f"],["tags/CG/index.html","97027bdcbaeba6fb107d95410c084348"],["tags/CI/index.html","1cf6af0bf7cb9ed83cb65a4e08bf8488"],["tags/CORS/index.html","93533671e13cabf407d8938f736fc4ce"],["tags/CSharp/index.html","ca3105f0d775f9fdcf55425c1ae362bc"],["tags/Castle/index.html","dac9f9a25e4d0a1efc4436aaa1be0e99"],["tags/DBeaver/index.html","b8098150ac3f0b6381ac9c37c906df27"],["tags/Docker/index.html","701f9a78ede021f9b09f2df8724bddbe"],["tags/Dynamic-Proxy/index.html","f401c6db3ab6f818f404abfaa11a62ec"],["tags/EF/index.html","4929334ca0d58f10640c0891bc252f7e"],["tags/ES6/index.html","5300e884a8d7c3cebe064213ab5d7dc5"],["tags/EasyAR/index.html","0c52b9eee8d4ac2b975e19c2a84356bf"],["tags/Excel/index.html","a80cac45848e45e0a4df222377cc15b9"],["tags/FP/index.html","0e298e7495c0cd12c52c9d4c1b510f8d"],["tags/Form/index.html","3dc268d7d4bdab08f37c866cfd246af3"],["tags/Git/index.html","e99ce183cce85d1a24cfed9c3a745931"],["tags/Github/index.html","eb530ec2b5110ca81d5b9e3d387a817b"],["tags/HTML5/index.html","f0d65b7935627b21a96e83542772fbe6"],["tags/HTTP/index.html","8312432cd9988c373d66cca9c93d3450"],["tags/Hexo/index.html","7f87ec8b5c6a2317baa7730d6f26be1a"],["tags/HttpClient/index.html","b5c72999e5119f0e28a2f1858b5b872c"],["tags/IDE/index.html","ef39712515b8e01b0a1bf2dd57826a49"],["tags/JS/index.html","2af3bf7d900f040448c6bdec5c436bd2"],["tags/JSON/index.html","abb62e7032b16c0bc4fe58362a0240e5"],["tags/JSONP/index.html","7b3eb991c74b19b43c20d5ab4fc3feb9"],["tags/Java/index.html","2dca74bd10ab0e97647632f9029c83e2"],["tags/JavaScript/index.html","069ef8a98077c5149362fc4068c9f412"],["tags/Jexus/index.html","91288c48612319f2d450be21628a6613"],["tags/Kindle/index.html","3105b1d9a2e3e4f66a4847ba86eaf142"],["tags/Lambda/index.html","ae0024a0035b036b564d184833cbdb4f"],["tags/Linux/index.html","8f37c90d5a824d00ff0c3d8e6bc2bb1c"],["tags/Logger/index.html","046919b43507e1a48a43a3dae225d692"],["tags/Love2D/index.html","3f73c432932ea4b604fb9da318ac0d0c"],["tags/Lua/index.html","554db4669d41d68b9010ab818b82138b"],["tags/MMD/index.html","4dd4aba5ae0522c953f1b486e613f042"],["tags/MSBuild/index.html","235aa6a2445af091aa0d3ac51bff377e"],["tags/MVVM/index.html","600616653dda7e540c2161ded693b5e5"],["tags/MapReduce/index.html","16f9495ee3573114c58e5e97a937ff24"],["tags/Markdown/index.html","baa274def01411a672ae1a27da6e3f95"],["tags/Mecanim/index.html","63f30f268d400dff06f7f70478e04f66"],["tags/Mono/index.html","dcf2aaed0618f802e552f5fe318decd3"],["tags/NET-Core/index.html","b63512f249f5a545500f855106cef94b"],["tags/NET/index.html","ea7999995e111883a470948331014636"],["tags/OBJ/index.html","d4ff59417f7cd2baec278a2432a4d71b"],["tags/Oracle/index.html","e72a350cab161b7c4065d8c52c7204c6"],["tags/PL-SQL/index.html","d1160fbb55b74cdb273f34a2695883a7"],["tags/PWA/index.html","bd5013d457828b4ad35e7da4eb7b4e8c"],["tags/Python/index.html","fe69ecf4679edaa1750193f6ee9e52f2"],["tags/RESTful/index.html","bbdb0ac46e8ac7ae858c77ec49589050"],["tags/RFC/index.html","ab5919d41a7e77d87d703c3d5a011b46"],["tags/RPG/index.html","9fea1928b140553717b09482f9cfa859"],["tags/React/index.html","0cc033da09ecdda81c5350c042ebef97"],["tags/Redis/index.html","971eb68c9d098c68a283692dccab7f8d"],["tags/SDL/index.html","bf0e9637ed24718d3d1cf231679e5266"],["tags/SQLite/index.html","39582decbaeea20fe541e8114000f441"],["tags/SSE/index.html","611d4f0395877407dcaa79d1b32f0456"],["tags/SVN/index.html","20c23beef5b0b7a7cb9ba3a40a132a7a"],["tags/Script/index.html","8a42186d59e6d09ad787aab0209101ac"],["tags/Shader/index.html","07608e5638687201091da199fc42ab25"],["tags/Socket/index.html","2d395fbdb42fe964779f3ec04b0948fc"],["tags/Sonar/index.html","20743bd012c092acf1b533bfb5409897"],["tags/SourceTree/index.html","0ea686e6179d29b774ca5c49892231da"],["tags/Sublime/index.html","bf997a2f9a0fc4cc9571e2154c4de208"],["tags/Trace/index.html","180a2fa90a9d15298088708fc9cc5526"],["tags/Travis/index.html","b45c464320c4061144c83e4482e60b29"],["tags/Unity/index.html","e7cb57df669193f3e8e3f21617dcc57c"],["tags/Unity3D/index.html","8b77df25d08c47c5772ae73242b10032"],["tags/Unity3D/pages/2/index.html","e23b544fb54fe37dc13150a60f2f6ef1"],["tags/Unity3D/pages/3/index.html","5adaffa26cc43c685f9a8ea7d395a37e"],["tags/VSCode/index.html","03e6a6a95f25e89b9774560d3a7c5ed1"],["tags/Visual-Studio/index.html","002b41adce717e8e68b6ffe7f1346bde"],["tags/Vue/index.html","9e5048cd1133046465d95c1937ee77d7"],["tags/WSL/index.html","8bb04dfe13c4ee07fca4a52ceb4b41df"],["tags/Web/index.html","9370eaa4a09479b0baa63e34ee95e73c"],["tags/WebApi/index.html","6b11cca23edbf2d47eae332a0b1fea71"],["tags/WebSocket/index.html","a2525585d6b1ed088d9d45cf1465fb47"],["tags/Wechat/index.html","052628a28a1d656bf62956592da4cbad"],["tags/Windows/index.html","944b2e00e217204a2fca7b83453cdc8d"],["tags/disunity/index.html","de35c4635954935913aa66ede39ac078"],["tags/index.html","85b81782227adff72e79962d9f0fbb8f"],["tags/matplotlib/index.html","8bf952950fd11bed4e3d820f22d0922f"],["tags/uGUI/index.html","7202b2175a132f3b3cd6b05586990a17"],["tags/zTree/index.html","efcc1f4ddadb4d947e086062a89dfd8f"],["tags/一出好戏/index.html","50a849367d6503a975537c6f8616e702"],["tags/七牛/index.html","1c36c05af822665d0fede707e35e3c09"],["tags/主从复制/index.html","1261448e6100b208b4134382dfa764a4"],["tags/事件/index.html","98192b40858b8d9da044bfea742cf5cc"],["tags/二维码/index.html","bd51872cb7c266262f02f3c9deca849d"],["tags/云音乐/index.html","992ba513b62a4a1977275c96230369e8"],["tags/互联网/index.html","86cd96cf60328af6ff6e3002fd311202"],["tags/亲情/index.html","202d841b8fe7506ec4f6f2c12e1b4f9b"],["tags/人文/index.html","d034b4a865b22d9cb07263aca89beeb9"],["tags/人生/index.html","0bd373670170228b38de7a8c78be1232"],["tags/仙剑奇侠传/index.html","cb04d2e5887107641efb79bc8bb52e01"],["tags/价值/index.html","96d60cb9b79b38dc1ce6e85158e6a1d2"],["tags/优化/index.html","4789e5e8069d525189d00cc2dca20681"],["tags/全智贤/index.html","f7dd544933f01fc8e59f4c7a5d8e57ef"],["tags/公众号/index.html","34c5dcbe835c4694f4785e98b53f63f2"],["tags/关卡系统/index.html","e97f79085b1b6353c69d5955c481be29"],["tags/函数式编程/index.html","9254acae2970b2159922bea647058f75"],["tags/别离/index.html","c77acc153f124ab8848d7469f1b53e46"],["tags/前任/index.html","44ff5037eaa7534e9de8e5d819a2a746"],["tags/前端/index.html","bd644cf29f139d058cc728973f491a1b"],["tags/剑指Offer/index.html","ecbffb435968751d4cb436f89ba313bc"],["tags/加密/index.html","72ad52253802cc63c8a03e79c8ad0b98"],["tags/动态加载/index.html","316762de581029d150106ff3d059ff7a"],["tags/动画/index.html","6e3cdb563f9b8eb4f8536e35eeba78bf"],["tags/单机游戏/index.html","64f0137269e1bacfcf1de4d66f027e4a"],["tags/印度/index.html","7e8adf7b9f6e7bedacd09b57455d1bef"],["tags/反编译/index.html","cce5fdfba2e83853f093f0498e645729"],["tags/同步/index.html","42ef4c232a1832072706cc17a694eb4a"],["tags/后端/index.html","87374e57a02c539a676433e33c3d1c76"],["tags/命令/index.html","d32add0083c7fa20fdcc614a2c46222d"],["tags/和平/index.html","2dd83ddb8faf6547609becca94ca7756"],["tags/响应式/index.html","d7a3001c08f53d041cf307564a7782b0"],["tags/哲学/index.html","98f5dac32928fd1118fd164dd6176f6f"],["tags/回家/index.html","31ea3211be818aaa2e0c03d24e863f31"],["tags/回忆/index.html","78a671fb412d198debb3a4b2ffcec742"],["tags/回首/index.html","797a994f1ea52750be555d8567adfa5d"],["tags/图床/index.html","015cea7c9fff4de5c7e2be84fcfec0cc"],["tags/图形/index.html","dc5b82db16fbf16ccdaaa1bf08c73e75"],["tags/塔防/index.html","e7c10c08f2b7aaebd3718aa151f984a5"],["tags/增强现实/index.html","c2772f89e57c6224fb064e6266a98740"],["tags/夏目漱石/index.html","e832f7b5886ebdd62a7774cf2f896599"],["tags/多线程/index.html","07b3f1f9d32799d3258da252a7f85387"],["tags/大护法/index.html","6c73877c94440531819654dff07423c8"],["tags/委托/index.html","47b523953c9038e485e989f92d789dc6"],["tags/孤独/index.html","5d120dab1e516e8c7a0344c3f77c5541"],["tags/展望/index.html","1066ed80f73bed9684e54bee2c70e469"],["tags/工作/index.html","a63e2b636b689ead653a5144c54ed9bd"],["tags/平凡/index.html","7b5d37bfd295b3ecde48865648460c8d"],["tags/年华/index.html","f0598dabed9482ca4500799bafa3dab7"],["tags/开源/index.html","1dfb28dac534d0a945eb77dd1d029406"],["tags/异常/index.html","5719c399b04926edd2766a650aabf457"],["tags/异步/index.html","b14e72d28ff7c377659c3fa91ed543ff"],["tags/引擎/index.html","332a0e83f92a0bb35271a990306bbc74"],["tags/影评/index.html","d7ec8d3e2acdd000695f3cf311999990"],["tags/微信/index.html","7638bf0377e16ae0aed87e61972470f4"],["tags/微博/index.html","4c60ce1d118ed6a52cdd95c693a0e995"],["tags/心情/index.html","5cb1262cdb48afc8b76e717c945da64d"],["tags/思维/index.html","4c215e8c3eda02286aba46f361dc7d8a"],["tags/总结/index.html","92ec57080c4f705930da859a2480478c"],["tags/想法/index.html","d887d5e273e200fccf59b483be349a69"],["tags/感悟/index.html","49dd894060ddf7cdf741a3b70ccf67bf"],["tags/成长/index.html","28c7d1dca07b15b66aad762e1ac3d353"],["tags/我是猫/index.html","6df4c8100f80e90c1b2ffbb1db18ea51"],["tags/扩展/index.html","414d0b0aaab93e7bd725f121ad1cd9e8"],["tags/扩展方法/index.html","8c00b15888d744ae2297953878878016"],["tags/技术/index.html","9ac49b1611f4446f1b4995aca2105de4"],["tags/拖拽/index.html","6c647a00431a8cd44dc78a772e29bf6b"],["tags/插件/index.html","dd291f6b251ad00d06cfb2909cc0dbf4"],["tags/数字/index.html","3e74a827c4be42c5d1a11f7d275b4e7b"],["tags/数学/index.html","4350c5911a1da74fb58453cfd1f683a8"],["tags/数据/index.html","ab9ba7397110cbf4c96d85c090fa8bcb"],["tags/数据库/index.html","21d719d077bf57ef402338a10af9a0cc"],["tags/文本分类/index.html","9ed0295996c71740177c58259f5cd7a6"],["tags/无问西东/index.html","32c002735c5b38329dd78610ad4a13b5"],["tags/日剧/index.html","616b89970c080cc39faa431745f98272"],["tags/日志/index.html","035b2340405c2ad527466b1dc14d8182"],["tags/日本文学/index.html","a9c934acd3bb09de94402dbad48f380d"],["tags/时区/index.html","ad037f6dc499ad7fe42d0251c3b0e61e"],["tags/时间/index.html","cbce20aed4b10b0723d72cc25de298bc"],["tags/服务器/index.html","3922e5fec3e60f367c6664183560c422"],["tags/朝圣/index.html","34e2532e845cdfb318f95b191316e29a"],["tags/朴素贝叶斯/index.html","053b55ba2083d99a151650677df10e45"],["tags/架构/index.html","06864d95238f7a0948a9624a874991d5"],["tags/校验/index.html","0b10c62da3c38c359095f1de3a289f94"],["tags/格式/index.html","e10d9ee20676889cf3e66007ec7b5847"],["tags/格式化/index.html","8cab7dc2844fa407452d17f0d6b00b58"],["tags/梦想/index.html","a72d7bc770705eccbed0a02a311827a4"],["tags/概率/index.html","4d586297eb193deed477b5aa7ef65dd4"],["tags/模板/index.html","38b76a2d5ee929d2e5a63d530fa45ee5"],["tags/毕业/index.html","92c8856d1c0c8711e6de15b637059a4e"],["tags/毕业季/index.html","9ca81621e167f08aad0b40621775e0db"],["tags/消息/index.html","de07c41f82dc146b01b8843b0a31a2a6"],["tags/游戏/index.html","5204eee1c2232439e5ff4430f5dfe184"],["tags/游戏/pages/2/index.html","e5d22aa98c81f996f00756fe11499927"],["tags/游戏开发/index.html","8198595fe55f776af069d3783fafe683"],["tags/游戏引擎/index.html","6482f75c9a2acc9de4328eb1942e0351"],["tags/爱情/index.html","2cd87238c87a0364d4f30043465182e2"],["tags/版本控制/index.html","2a0e4548572f4ee3c7426933545d91bd"],["tags/版权/index.html","0cb950967dda69da7c628f5f568510e7"],["tags/特性/index.html","cf2e5a632b78e352a13dc4f2d716c808"],["tags/状态/index.html","e719dc34c890683080d2d0a39cc8276a"],["tags/现实/index.html","4ec054fc20d5a096d1b32f5da4431f9e"],["tags/生活/index.html","7193644afd7f64214b9ef02855ecca3e"],["tags/电影/index.html","683237df526511a3f461b011c03b0ca6"],["tags/画家/index.html","b6129d99766ba0a51187cfaad6103bb3"],["tags/知识共享/index.html","2f32ba554a9a97d1347118466b005ae6"],["tags/矫情/index.html","e72108cc5990d5761c1f9692ccb470ec"],["tags/程序员/index.html","4629c0bf49ad4e215d7af0271670362d"],["tags/穹之扉/index.html","a43920e19e4a91d05f31030e7a0170fa"],["tags/穿搭/index.html","1b3ccb052f3c6ff1da93aab06dcbe615"],["tags/童话/index.html","40eb60738a13c3827582f6fdd41e1822"],["tags/笔记/index.html","4cec4aa7ac8a578d8bdb1756b5199913"],["tags/算法/index.html","64197b7deb10e52f54ad511db5b9ae53"],["tags/米花之味/index.html","98042932716962012670d718a604846f"],["tags/缓存/index.html","43346af4e049e24cdd3e4e03ee725fe6"],["tags/编程/index.html","895b57082944f18f8627033e99e43501"],["tags/编译/index.html","493e0c6d22882317a6202ca1b90ac53f"],["tags/编辑器/index.html","9cf77ab01ec1cdcc6715f33ee221af77"],["tags/网易/index.html","58f7e852da8c015529b2d7ba1ca45def"],["tags/脚本/index.html","4c6b32be62bd91585d03a98f0175ac02"],["tags/脚本语言/index.html","3c6b22e32f65616f8dde1b7389e7f0a5"],["tags/虚拟摇杆/index.html","ca4bb65695128489789dcdbafa272c13"],["tags/蛋炒饭/index.html","6115b2cd9a6c2be37b40b0c327008857"],["tags/装饰器/index.html","5151f74ecdaf8640585a7b6534becefe"],["tags/西安/index.html","ae5a3bb5d097c0796b12e73d5cbcd873"],["tags/计算机图形/index.html","482d9d7e187d6651c1532d8db2fdb5a9"],["tags/设计/index.html","d97e1b53e0b84aa38b97f20f70fd3bbf"],["tags/设计模式/index.html","633b1ee23943f0c47c2e97274d9ca1eb"],["tags/词云/index.html","b9c1d67b1a101980cebc8b830e13648e"],["tags/诗人/index.html","8cfc7a4515359c38fb55547a92ded3da"],["tags/语法/index.html","31446086c5d9a9013192e759522a42c6"],["tags/请记住我/index.html","af0432dafd138df3cf41236284e89d50"],["tags/读书/index.html","c2ba4dd2789e9105151cbe89e163235b"],["tags/读写分离/index.html","dd9628a715abe0b558ec7ffe2c66897a"],["tags/调试/index.html","e8c625252110a348f5bc62edb8700a66"],["tags/贝塞尔曲线/index.html","e06417e93bde80025d55904afed97fab"],["tags/贪吃蛇/index.html","e528d4675616f01de45ac1179210072d"],["tags/资源提取/index.html","86ad4b1f0c0e6e05881d3c75e2490ede"],["tags/跨域/index.html","2094716e48f8f1d503498ab6bc4decc6"],["tags/跨平台/index.html","36cba4c747f2fcbdf5dc7050f8b63e6f"],["tags/转盘/index.html","450e7226a3bd4cc81f1961d8650d982f"],["tags/通信/index.html","2b2bd4249deef3de89ac11b4c7960f1e"],["tags/邪不压正/index.html","9c33618a1a04289294211dca602c4437"],["tags/部署/index.html","984b17b1b1bf5d50dd56778358d7e0b5"],["tags/重试/index.html","6637a79def6fc37142ea776afcefa52e"],["tags/阅读/index.html","ba9cbc53129783d236a13a3436aca4e5"],["tags/阿里/index.html","3929d5e9bcb4d7b6a980f0f49901303d"],["tags/霍金/index.html","f05ca752c08557df8acd7469eb5ca2ae"],["tags/青春/index.html","5dd7c563361d18dcdcaea442036bea38"],["tags/面试/index.html","9519067a1fae009fd7a24e9f759d0d90"],["tags/韩寒/index.html","799b9e3e410fb303bf62e3b4fe9c8534"],["tags/马尔克斯/index.html","94d0ac296c8668a7d9156a6fe5a3b29c"],["tags/黑客/index.html","7334be953d03f4d8dc1f6a74cd4442ff"],["wiki/index.html","2a4816e8dfc71ffed828241dddf12ef1"],["works/index.html","be077d6962cc48d0bbe10e6d21c544c6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







