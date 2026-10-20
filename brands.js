/* Every brand on Menna's collab list, plus the partners already verified from her captions.
   Posts and likes were counted from her full Instagram history (1,944 posts, Sep 2020 – Oct 2026) on 6 Oct 2026:
   a post counts when it tags, mentions or is a paid partnership with the brand's account.
   Brands with no Instagram post (Trendyol, inDrive, Air Arabia, Yango Play) ran on TikTok or stories; they show their logo only. */
(function(){
const P=c=>'https://www.instagram.com/p/'+c+'/';
const R=c=>'https://www.instagram.com/reel/'+c+'/';
const B=[
 // fashion
 {id:'defacto',name:'DeFacto',cat:'fashion',logo:'defacto',imgs:['b-defacto2','b-defacto5','b-defacto6','b-defacto1','b-defacto3','b-defacto4'],posts:17,likes:'1.28M',since:2019,top:'248K',line:'Her longest fashion partnership. Couple looks with Sasa, her first Mother’s Day as a mum, and the family in matching pinks.',url:P('DC2CVJcsgTA'),feat:1},
 {id:'lcw',name:'LC Waikiki',cat:'fashion',logo:'lcwaikiki',imgs:['b-lcw'],posts:3,likes:'145K',since:2020,line:'New Year styling with the kids at LC Waikiki, with her code MENNA15.',url:R('DEAvH1kM1os')},
 {id:'max',name:'MAX Fashion',cat:'fashion',logo:'max',imgs:['b-max'],posts:1,since:2026,line:'“Shades of summer.” The new MAX collection, styled at home.',url:R('Db6LFEDssgZ')},
 {id:'trendyol',name:'Trendyol',cat:'fashion',logo:'trendyol',imgs:[],line:'Fashion hauls on TikTok and stories.',url:null},
 {id:'adidas',name:'adidas Arabia',cat:'fashion',logo:'adidas',imgs:['cp-adidas'],posts:1,likes:'18.9K',since:2026,line:'Shopping for Laila’s first year of nursery, and her first pair of sneakers.',url:R('DconaDDMLSs')},
 {id:'koton',name:'Koton',cat:'fashion',logo:'koton',imgs:['b-koton2','cp-koton'],posts:2,likes:'54.3K',since:2020,line:'A new look every day from Koton’s newest store, at City Centre Almaza.',url:R('DbEKBKOsxk6')},
 // beauty
 {id:'amanda',name:'Amanda Milano',cat:'beauty',logo:'amanda',imgs:['b-amanda2','cp-amanda'],posts:5,likes:'60.4K',since:2025,line:'One red lip, one perfect wing. “Guess how this look turns out?”',url:R('DZ24G2XsycB')},
 {id:'celimax',name:'Celimax',cat:'beauty',logo:'celimax',imgs:['b-celimax2','cp-celimax'],posts:2,since:2026,line:'Her full Ramadan skincare routine, bare skin and all.',url:R('DVy1KW5jHOA')},
 {id:'telofill',name:'Telofill',cat:'beauty',logo:'telofill',imgs:['b-telofill'],posts:3,likes:'35.3K',since:2024,line:'“My favourite thing to hear: you smell nice.” Body mists, with code Menna5.',url:R('DQw5dt_jAWN')},
 {id:'chandbe',name:'Chandbe',cat:'beauty',logo:'chandbe',imgs:['b-chandbe'],posts:1,since:2025,line:'A pink girls’ day: turning the living room into a salon for Pinky Friday.',url:R('DRpzPJWDLt9')},
 {id:'avens',name:'Avens',cat:'beauty',logo:'avens',imgs:['cp-avens'],posts:1,since:2026,top:'1.1M',topl:'TikTok views',line:'“Every girl is a princess.” A pink ball gown and a tiara. Four times her usual reach.',url:'https://www.tiktok.com/@mennaelsonny5/video/7680596784351153428'},
 // tech
 {id:'xiaomi',name:'Xiaomi & Redmi',cat:'tech',logo:'xiaomi',imgs:['b-xiaomi8','cp-xiaomi-hat','b-xiaomi7','b-redmi2','cp-redmi','cp-xiaomi-lavender','cp-xiaomi-couple'],posts:27,likes:'933K',since:2020,line:'Six years of launches, from the first Redmi to the 17 series. Couple shoots, a jungle battery test and a lot of selfies.',url:R('Dc4Ps9PsBUB'),feat:1},
 {id:'vivo',name:'vivo',cat:'tech',logo:'vivo',imgs:['b-vivo'],posts:1,since:2026,line:'“A day with vivo.” Quiet, close and in blue stripes.',url:R('DVmDLyqDPkM')},
 {id:'kaspersky',name:'Kaspersky',cat:'tech',logo:'kaspersky',imgs:['b-kaspersky'],posts:1,likes:'7.4K',since:2026,line:'More time online in Ramadan, so keep it all protected with Kaspersky Premium.',url:R('DV4JhZDDHgp')},
 {id:'techme',name:'TechMe',cat:'tech',logo:'techme',imgs:['b-techme'],posts:2,likes:'17.6K',since:2025,line:'Mother’s Day gift picks, branch by branch across Cairo.',url:R('DV_r8lIDL-7')},
 {id:'yango',name:'Yango Play',cat:'tech',logo:'yango-play',imgs:[],line:'Streaming partnership on TikTok and stories.',url:null},
 // food
 {id:'carrefour',name:'Carrefour',cat:'food',logo:'carrefour',imgs:['b-carrefour4','cp-carrefour-mall','cp-carrefour-fish','cp-carrefour-kitchen'],posts:8,likes:'116K',since:2022,line:'The shopping festival, the fresh fish counter and cooking it with her mum.',url:R('DZatmI8sAp1'),feat:1},
 {id:'etoile',name:'Etoile',cat:'food',logo:'etoile',imgs:['b-etoile1','b-etoile2'],posts:8,likes:'588K',since:2022,top:'177K',line:'“This is what made the gathering sweet.” Ramadan nights with Sasa and a box of Etoile.',url:R('DVEwmQADMUS'),feat:1},
 {id:'sunny',name:'Sunny',cat:'food',logo:'sunny',imgs:['b-sunny'],posts:4,likes:'172K',since:2021,line:'Butterfly shrimp “the way mum makes it”, for a Mother’s Day recipe contest.',url:R('DWJ7xFyjDNP')},
 {id:'tseppas',name:'Tseppas',cat:'food',logo:'tseppas',imgs:['b-tseppas1','b-tseppas2'],posts:2,likes:'27.8K',since:2025,line:'“Sweets with the taste of the old days.” The Ramadan table, Tseppas style.',url:R('DU84EIgjMyo')},
 {id:'citycafe',name:'City Café',cat:'food',logo:'citycafe',imgs:['cp-citycafe'],posts:1,since:2026,line:'The face of the 3-in-1 range. “Creamy, quick and delicious.”',url:R('DTyEC8djKy4')},
 {id:'sundae',name:'Sundae',cat:'food',logo:'sundae',imgs:['b-sundae-tv'],pos:'86% 50%',posts:1,likes:'25.8K',since:2026,line:'Ramadan 2026 TV commercial for Sundae ice cream. “With Sundae you’ll live the sweet moment until you make it happen.”',url:R('DU_ZR_FAMhs')},
 {id:'blaban',name:'B.Laban',cat:'food',logo:'blaban',imgs:['cp-blaban-event'],posts:14,likes:'667K',since:2023,line:'From the Chookies launch stand to dessert in Menna’s Kitchen.',url:'https://www.instagram.com/menna_el_sonny/'},
 // home & retail
 {id:'elnasr',name:'El Nasr Center',cat:'home',logo:'elnasr',imgs:['b-elnasr'],posts:3,likes:'85.6K',since:2023,line:'A full tour of El Nasr: “literally everything is here, and the prices are lovely.”',url:R('Co7sEshDxMx')},
 {id:'mazloum',name:'Mazloum',cat:'home',logo:'mazloum',imgs:['b-mazloum'],posts:1,likes:'12.3K',since:2026,line:'A whole new bathroom for EGP 5,290, at Mazloum Tiles & More.',url:R('DUgbSC_DK69')},
 {id:'kabbani',name:'Kabbani Furniture',cat:'home',logo:'kabbani',imgs:['b-kabbani'],posts:2,since:2025,line:'The offers launch night, with five cars in the prize draw.',url:R('DRArQJUDBKZ')},
 {id:'midea',name:'Midea',cat:'home',logo:'midea',imgs:['cp-midea'],posts:3,likes:'91.6K',since:2024,line:'The Super Season offers, explained the way a friend would.',url:'https://www.tiktok.com/@mennaelsonny5/video/7673248943521680660'},
 // travel
 {id:'hala',name:'Hala Thailand',cat:'travel',logo:'hala-thailand',imgs:['b-hala2','b-hala4','b-hala5','b-hala1','b-hala3'],posts:9,likes:'187K',since:2026,line:'Thailand with Sasa and Laila, told day by day for Arab families.',url:P('DdrN3Jvkiv3'),feat:1},
 {id:'gulfair',name:'Gulf Air',cat:'travel',logo:'gulf-air',imgs:['b-gulfair2','b-gulfair3'],posts:1,likes:'100K',since:2026,line:'“Just us, making memories.” The family flight to Thailand.',url:P('DdjdJp3E1xi'),feat:1},
 {id:'airarabia',name:'Air Arabia',cat:'travel',logo:'air-arabia',imgs:[],line:'Travel partnership on TikTok and stories.',url:null},
 // services
 {id:'ajman',name:'Ajman Free Zone',cat:'services',logo:'ajman-free-zone',imgs:['b-ajman'],posts:1,since:2026,line:'Everything you need for a UAE residency, at the Cairo and Alexandria roadshows.',url:R('DTs9ew4DPtF')},
 {id:'fawry',name:'Fawry',cat:'services',logo:'fawry',imgs:['b-fawry'],posts:1,since:2025,line:'The yellow myFawry card, with Dahab Masr gold prizes.',url:R('DSnPNiLjAgN')},
 {id:'indrive',name:'inDrive',cat:'services',logo:'indrive',imgs:[],line:'Ride-hailing partnership on TikTok and stories.',url:null}
];
const CATS=[['all','All'],['fashion','Fashion'],['beauty','Beauty'],['tech','Tech'],['food','Food'],['home','Home'],['travel','Travel'],['services','Apps & services']];
window.MB={B,CATS,get:id=>B.find(b=>b.id===id)};
// Feed the shared sheet: every brand becomes a campaign the kit can open.
const D=window.MD;
D.CAMP=B.map(b=>({id:b.id,brand:b.name,cat:CATS.find(c=>c[0]===b.cat)[1],imgs:b.imgs,logo:b.logo,
  stat:b.posts?(b.likes||String(b.posts)):'♥',sl:b.posts?(b.likes?`likes across ${b.posts} post${b.posts>1?'s':''}`:`post${b.posts>1?'s':''} on Instagram`):'on TikTok and stories',
  d:b.line,plat:b.posts?`Since ${b.since}`:'TikTok + stories',links:b.url?[[b.url.includes('tiktok')?'Watch on TikTok':'See it on Instagram',b.url]]:[]}));
D.camp=id=>D.CAMP.find(c=>c.id===id);
D.STATS=[['5.2M','Instagram'],['2.8M','TikTok'],['1.9M','Facebook'],['52.8M','TikTok likes']];
})();
