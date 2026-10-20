/* Shared content for the three Menna El Sonny designs. Every number here was read off her live profiles on 4–5 Oct 2026. */
(function(){
const TT=id=>'https://www.tiktok.com/@mennaelsonny5/video/'+id;
const IG='https://www.instagram.com/menna_el_sonny/';
const W={
  fashion:'fa-pink-ruffle fa-gold-tweed x-pinkskirt fa-velvet fa-tie x-peplum fa-loewe fa-abaya fa-blazer-cape fa-minnie fa-white-night x-navy fa-yellow-knit fa-burgundy-hat fa-denim-dress fa-tweed fa-red-leather fa-shawl x-crochet fa-hood-coat fa-mustard fa-plaid fa-audi fa-prada fa-sporty fa-cowprint fa-khan fa-denim-boots fa-brown-lift fa-knit-hood fa-mirror fa-cairo-night fa-denim-selfie fa-zahra x-pinkbath x-villa fa-yassmin fa-bridal-try x-satin x-nile'.split(' '),
  beauty:'be-bride3 x-glam be-vanity be-bride2 x-redlip cp-amanda be-skin-talk cp-avens be-flatlay be-studio cp-celimax be-macro cp-dosh cp-ohana be-bride1 be-phone'.split(' '),
  travel:'th-hotel ke-lion th-vibes x-rust ke-hakuna th-view x-plum ke-safari th-portrait sa-trip4 th-sea x-bkknight ke-serval eg-flag ke-tz2 th-lvcafe x-sequin ke-turtles eg-sudr sa-makkah th-shopping x-tropic ke-tz3 co-nile th-colors ke-zanzibar2 th-boat eg-summer1 ke-tz4 th-water2 fa-khan sa-trip2 ke-tz1 th-look eg-summer2 ke-zanzibar1 th-moments tr-gulfair x-plane'.split(' '),
  food:'fo-ramadan fo-pasta fo-mennas-kitchen cp-citycafe fo-cake fo-hawawshi fo-kitchen cp-blaban-event cp-carrefour-kitchen cp-carrefour-fish fo-dinner-date th-food th-lvcafe'.split(' '),
  mama:'mo-matching-pink mo-newborn mo-yellow-shoot mo-kiss mo-surprise mo-blue mo-family-yellow mo-airport mo-ramadan mo-baby cp-adidas'.split(' '),
  couple:'x-wedding co-sunflowers co-nile co-pool co-desert x-couple co-ramadan co-elevator co-cinema co-fun cp-xiaomi-couple fo-pasta co-3years'.split(' ')
};
const WORLDS=[
  {id:'fashion',t:'Fashion',ar:'أزياء',cover:'fa-gold-tweed',d:'Modest, in full colour. Tailoring, tweed, ruffles and a lot of hats.'},
  {id:'beauty',t:'Beauty',ar:'جمال',cover:'be-bride3',d:'Bridal glam, red lips and the skincare she actually uses.'},
  {id:'travel',t:'Travel',ar:'سفر',cover:'ke-lion',d:'Thailand, Kenya, Tanzania, Zanzibar, Makkah, Madinah and Egypt.'},
  {id:'food',t:"Menna's Kitchen",ar:'مطبخ منة',cover:'fo-ramadan',d:'Recipes, Ramadan tables and dessert first.'},
  {id:'mama',t:'Mama',ar:'ماما',cover:'mo-matching-pink',d:'Motherhood, matching outfits and family days out.'},
  {id:'couple',t:'Us two',ar:'أنا وساسا',cover:'co-sunflowers',d:'Menna and Sasa, married since 2023.'}
];
const CAMP=[
  {id:'xiaomi',brand:'Xiaomi & Redmi',cat:'Tech',imgs:'cp-xiaomi-hat cp-redmi cp-xiaomi-lavender cp-xiaomi-glasses cp-xiaomi-couple cp-xiaomi-yoga'.split(' '),stat:'6',sl:'posts with @xiaomi.egypt',d:'Phone launches in her voice: a blue-hat selfie, a Redmi Note screen takeover, a couple shoot with Sasa and a garden workout.',plat:'Instagram + TikTok',links:[['Instagram',IG]]},
  {id:'avens',brand:'Avens Cosmetics',cat:'Beauty',imgs:['cp-avens','be-vanity'],stat:'1.1M',sl:'TikTok views',d:'"Every girl is a princess." A pink ball gown, a tiara and the product in her hands. Four times her usual reach.',plat:'TikTok',links:[['Watch on TikTok',TT('7680596784351153428')]]},
  {id:'maxim',brand:'Maxim Wedding Dress',cat:'Bridal',imgs:['fa-bridal-try'],stat:'1,030',sl:'comments on one reel',d:'"Help me choose for the next occasion." Her audience picked the gown and stayed to talk. Plus 42K likes and 423K TikTok views.',plat:'Instagram + TikTok',links:[['Watch on TikTok',TT('7690635269661396245')],['See the reel','https://www.instagram.com/menna_el_sonny/reel/Dd1ov3lTaJ5/']]},
  {id:'elite',brand:'Elite Dresses',cat:'Bridal',imgs:'be-bride2 be-bride3 be-bride1'.split(' '),stat:'3',sl:'bridal looks',d:'A bridal glam story with Elite Dresses, a veil by Nada El Sherif and makeup by Ayane Azy.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'carrefour',brand:'Carrefour Egypt',cat:'Food',imgs:'cp-carrefour-mall cp-carrefour-fish cp-carrefour-kitchen'.split(' '),stat:'4',sl:'posts',d:'Supermarket runs, the fresh fish counter and cooking it at home with her mum.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'blaban',brand:'B.Laban',cat:'Food',imgs:'cp-blaban-event fo-mennas-kitchen fo-cake fa-denim-bucket'.split(' '),stat:'5',sl:'posts',d:"From handing out Chookies at the launch stand to dessert in Menna's Kitchen.",plat:'Instagram',links:[['Instagram',IG]]},
  {id:'citycafe',brand:'City Café',cat:'Food',imgs:['cp-citycafe'],stat:'Face',sl:'of the campaign',d:'"Creamy, for a rich moment." A soft-pink key visual with Menna as the face of the 3-in-1 range.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'midea',brand:'Midea Egypt',cat:'Home',imgs:['cp-midea'],stat:'151.7K',sl:'TikTok views',d:'The Super Season offers, explained the way a friend would.',plat:'TikTok',links:[['Watch on TikTok',TT('7673248943521680660')]]},
  {id:'lamarblue',brand:'Lamar Blue',cat:'Fashion',imgs:'cp-lamarblue ke-turtles ke-zanzibar2'.split(' '),stat:'3',sl:'posts',d:'Modest swimwear, tested properly: in the water with turtles in Zanzibar.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'adidas',brand:'adidas Arabia',cat:'Fashion',imgs:['cp-adidas'],stat:'Kids',sl:'campaign',d:'A first pair of sneakers, chosen by her daughter.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'koton',brand:'Koton',cat:'Fashion',imgs:['cp-koton'],stat:'In-store',sl:'styling',d:'A tailored brown blazer and a striped skirt, styled on the shop floor.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'amanda',brand:'Amanda Milano',cat:'Beauty',imgs:['cp-amanda','x-redlip'],stat:'Red',sl:'lip launch',d:'One red lip, one perfect wing.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'celimax',brand:'Celimax',cat:'Beauty',imgs:['cp-celimax'],stat:'Glow',sl:'skincare routine',d:'Bare skin, a hoodie and a K-beauty routine she actually uses.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'dosh',brand:'Dosh',cat:'Beauty',imgs:['cp-dosh'],stat:'86.3K',sl:'TikTok views',d:'"Hush, we\'ll talk after the shower." The Fresh & Soft set.',plat:'TikTok',links:[['Watch on TikTok',TT('7657500340362824980')]]},
  {id:'ohana',brand:'Ohana',cat:'Beauty',imgs:['cp-ohana'],stat:'Chat',sl:'body care',d:'A sit-down chat with the body mist in hand.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'gulfair',brand:'Gulf Air',cat:'Travel',imgs:'tr-gulfair x-plane'.split(' '),stat:'2',sl:'flights',d:'Cairo to Bangkok and back, in her travel whites.',plat:'Instagram',links:[['Instagram','https://www.instagram.com/menna_el_sonny/p/Dd6U4HLjLWL/']]},
  {id:'kempinski',brand:'Siam Kempinski',cat:'Travel',imgs:'th-hotel th-view'.split(' '),stat:'Bangkok',sl:'hotel stay',d:'"First stop in Thailand: our beautiful hotel."',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'movenpick',brand:'Mövenpick Makkah',cat:'Travel',imgs:'sa-makkah sa-trip2'.split(' '),stat:'Umrah',sl:'hotel stay',d:'Rooms facing the Haram, for the trip that matters most.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'vintro',brand:'Vintro Inn Ras Sudr',cat:'Travel',imgs:['eg-sudr'],stat:'Family',sl:'getaway',d:'"A wonderful family holiday." Yellow chiffon on the Red Sea.',plat:'Instagram',links:[['Instagram',IG]]},
  {id:'turkish',brand:'Turkish Airlines',cat:'Travel',imgs:['tr-golf'],stat:'Golf',sl:'event',d:'A day on the green with Turkish Airlines.',plat:'Instagram',links:[['Instagram',IG]]}
];
const VIDS=[
  {brand:'Yassmin Ghareb',cat:'Fashion',v:'701.5K',id:'7663823433330969877'},
  {brand:'Seventeen',cat:'Food',v:'196.7K',id:'7666534377488190741'},
  {brand:'Garnier × Smoochy',cat:'Beauty',v:'170.1K',id:'7667920733380578580'},
  {brand:'Oman Air',cat:'Travel',v:'110.5K',id:'7665816200731135253'},
  {brand:"L'Clinic Thailand",cat:'Beauty',v:'107.5K',id:'7673135804667120916'},
  {brand:'SHEIN',cat:'Fashion',v:'83.5K',id:'7692093625789992212'}
];
const SERV=[
 {id:'tiktok',t:'Signature TikTok',short:'TikTok story',img:'cp-avens',d:'Your product inside a story people watch to the end, written with you and told in her voice.',del:['One vertical video, 30–60 seconds','Concept and script approved by you','Link in bio for the campaign','30 days of organic usage'],proof:'250K',pl:'views on a typical video',ex:['avens','midea','dosh'],best:'Launches, beauty, FMCG'},
 {id:'editorial',t:'Instagram Editorial',short:'Reel + carousel',img:'fa-gold-tweed',d:'A styled look for the main feed, shot like a magazine page.',del:['One reel and one carousel','Story set with link sticker','Collab post with your account','Selected stills for you'],proof:'5.1M',pl:'Instagram followers',ex:['koton','amanda','lamarblue'],best:'Fashion, jewellery, accessories'},
 {id:'choose',t:'Choose With Me',short:'Audience vote',img:'fa-bridal-try',d:'Her followers vote on the look. Your product becomes a conversation.',del:['Reel with two or three options','Poll stories and a reveal','Replies in the comments'],proof:'1,030',pl:'comments on one reel',ex:['maxim'],best:'Bridal, occasion wear, shades'},
 {id:'bridal',t:'Bridal & Occasion',short:'Gowns + glam',img:'be-bride3',d:'Gowns, veils, glam and jewellery, told with the romance of her own wedding.',del:['Editorial shoot, up to three looks','Reel and carousel','Behind-the-scenes stories'],proof:'7.3M',pl:'views on her wedding video',ex:['elite','maxim'],best:'Bridal houses, jewellers, makeup artists'},
 {id:'travel',t:'Travel Series',short:'Hotels + airlines',img:'th-vibes',d:'A destination told day by day on both platforms: the flight, the room, the table, the view.',del:['Three to seven days, posting daily','Two TikToks, two reels, daily stories','Your brand tagged in every post','A photo set for your channels'],proof:'14.3M',pl:'views on her Makkah video',ex:['gulfair','kempinski','movenpick'],best:'Hotels, airlines, tourism boards'},
 {id:'beauty',t:'Get Ready With Me',short:'Beauty routine',img:'be-vanity',d:'Her #getreadywithnosa routine, with your product in her hands.',del:['A get-ready-with-me TikTok','Before-and-after reel','Shade or routine carousel'],proof:'457K',pl:'views on a single GRWM',ex:['celimax','amanda','ohana'],best:'Makeup, skincare, fragrance'},
 {id:'mama',t:'Mama & Family',short:'Family content',img:'mo-matching-pink',d:"Matching outfits, first sneakers and family days out, for brands that belong in a young family's life.",del:['Family reel','Mother-and-daughter look','Stories from the day'],proof:'12.4M',pl:"views on her daughter's birthday",ex:['adidas'],best:'Kidswear, baby care, family venues'},
 {id:'kitchen',t:"Menna's Kitchen",short:'Food + recipes',img:'fo-ramadan',d:'Recipes, Ramadan tables and dessert-first moments from her own kitchen.',del:['Recipe reel','Ingredient haul','Ramadan or seasonal special'],proof:'5',pl:'B.Laban posts in one partnership',ex:['blaban','carrefour','citycafe'],best:'Food, drinks, supermarkets'},
 {id:'couple',t:'Couple with Sasa',short:'Two faces',img:'co-sunflowers',d:'Sketches, dates and gifting with her husband. One audience that shares everything.',del:['Couple sketch TikTok','Date-night reel','Gifting stories'],proof:'1.4M',pl:'views on a couple sketch',ex:['xiaomi'],best:'Tech, gifting, restaurants'},
 {id:'events',t:'Events & Launches',short:'Appearances',img:'cp-blaban-event',d:'Launches, store openings and red carpets, with live stories and a recap afterwards.',del:['An appearance at your event','Live stories','A recap reel'],proof:'Live',pl:'stories from the room',ex:['blaban','turkish'],best:'Launches, openings'},
 {id:'ambassador',t:'Brand Ambassador',short:'A season',img:'cp-xiaomi-hat',d:'A season-long partnership with a monthly plan, category exclusivity and her face on your campaigns.',del:['Three to twelve months','Monthly content calendar','Category exclusivity','A campaign shoot'],proof:'6',pl:'Xiaomi posts in one partnership',ex:['xiaomi'],best:'Tech, beauty, fashion houses'},
 {id:'usage',t:'Content for Ads',short:'Usage rights',img:'x-glam',d:'Content made for your own channels and paid ads, licensed for the period you need.',del:['Photo and video sets','Paid-ad whitelisting','Usage from one to twelve months'],proof:'Ads',pl:'vertical and square formats',ex:[],best:'Performance marketing, e-commerce'}
];
const PACKS=[
  {id:'rose',t:'The Rose',sub:'One moment',items:['One TikTok or one reel','A story set','Concept approval','30 days of usage'],price:'[YOUR PRICE]'},
  {id:'peony',t:'The Peony',sub:'A campaign',items:['Two TikToks and one reel','One carousel, two story sets','Choose With Me or GRWM','Results report','60 days of usage'],price:'[YOUR PRICE]',star:true},
  {id:'maison',t:'The Maison',sub:'A season',items:['Three to twelve months','Monthly content plan','Category exclusivity','Shoot and appearances','Paid-ad whitelisting'],price:'On request'}
];
const REELS=[['sa-trip4','14.3M','Makkah, with Sasa','7295833980970994949'],['mo-yellow-shoot','12.4M',"Her daughter's birthday",'7671638633211890964'],['x-wedding','7.3M','The wedding','7257131468625956101'],['cp-avens','1.1M','Avens Cosmetics','7680596784351153428']];
const STATS=[['5.1M','Instagram'],['2.9M','TikTok'],['52.8M','TikTok likes'],['250K','views, typical video'],['14.3M','views, top video']];
const BRANDS=['Samsung','Xiaomi',"L'Oréal",'Avens','Carrefour','adidas','Gulf Air','Turkish Airlines','Midea','Garnier','B.Laban','Koton','Maxim','Kempinski','DeFacto','City Café','Oman Air','SHEIN','Daniel Wellington','Mövenpick'];
const ARCH=['Samsung',"L'Oréal",'DeFacto','Daniel Wellington','Cizaro','La Fémme','Premier Pharma','Eveline','Dettol','Andaz Pattaya','Sofitel Madinah'];
const PRESS=[['Youm7','2021 · 2022'],['El Watan','2021'],['Masrawy','2023'],['Cairo24','2023'],['Al-Ain','2024']];
window.MD={TT,IG,W,WORLDS,CAMP,VIDS,SERV,PACKS,REELS,STATS,BRANDS,ARCH,PRESS,EMAIL:'mennaelsony@hotmail.com',
  I:n=>'img/'+n+'.jpg', camp:id=>CAMP.find(c=>c.id===id), serv:id=>SERV.find(s=>s.id===id)};
})();
