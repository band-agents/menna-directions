/* What makes her a working influencer, not a one-hit account. Every number was read off her live profiles on 14 Oct 2026:
   Instagram history (2,400 posts since 7 Aug 2018), the Reels grid view counts, and TikTok's "Popular" tab. */
(function(){
const IG=c=>'https://www.instagram.com/reel/'+c+'/';
const TT=id=>'https://www.tiktok.com/@mennaelsonny5/video/'+id;
const PROOF={
  years:8, since:'August 2018', posts:'2,400', likes:'165M', comments:'5.7M',
  brands:33, returning:15, platforms:'10M', ig:'5.2M', tt:'2.9M', fb:'1.9M', ttLikes:'53M',
  topIG:'29.8M', topTT:'14.3M'
};
// Highest-reaching videos across both platforms, by views.
const TOP=[
  {v:29.8,l:'901K',p:'Instagram',t:'The announcement',sub:'“Alhamdulillah”: expecting Laila',y:2024,img:'ig-C9Anh70MBVn',url:IG('C9Anh70MBVn')},
  {v:15.6,l:'785K',p:'Instagram',t:'The wedding',sub:'“The dream of years”',y:2023,img:'ig-CuzMNDHLxCS',url:IG('CuzMNDHLxCS')},
  {v:14.3,l:'1.2M',p:'TikTok',t:'Makkah, with Sasa',sub:'Her first Umrah as a wife',y:2023,img:'tt-7295833980970994949',url:TT('7295833980970994949')},
  {v:13.3,l:'818K',p:'Instagram',t:'Makkah, the reel',sub:'“A journey of love, with the one we love”',y:2023,img:'ig-CzCYQFksu64',url:IG('CzCYQFksu64')},
  {v:12.5,l:'524K',p:'TikTok',t:'Laila turns two',sub:'Her daughter’s birthday',y:2026,img:'tt-7671638633211890964',url:TT('7671638633211890964')},
  {v:9.9,l:'644K',p:'TikTok',t:'“A new life begins”',sub:'The wedding day',y:2023,img:'tt-7266511546166086917',url:TT('7266511546166086917')},
  {v:8.7,l:'497K',p:'TikTok',t:'The girls',sub:'A night with her friends',y:2021,img:'tt-6961586597800332549',url:TT('6961586597800332549')},
  {v:7.0,l:'132K',p:'Instagram',t:'Episode 1',sub:'The home tour series',y:2026,img:'ig-DURWIJpjEvX',url:IG('DURWIJpjEvX')}
];
// Career line, oldest first. Only events that can be seen on her profiles.
const TIMELINE=[
  {y:'2018',t:'First post',d:'7 August 2018. Outfit photos from Cairo, a few hundred likes each.'},
  {y:'2019',t:'First brand partners',d:'DeFacto, Jumia and Cizaro start tagging her. 392 posts that year.'},
  {y:'2020',t:'Xiaomi, LC Waikiki, Koton',d:'Tech and fashion houses sign on. Xiaomi has stayed for six years.'},
  {y:'2021',t:'The audience arrives',d:'Average post passes 98K likes and 4,300 comments.'},
  {y:'2023',t:'The wedding',d:'Married Sasa. The wedding reel reaches 15.6M views; Makkah 14.3M on TikTok.'},
  {y:'2024',t:'Laila',d:'The pregnancy announcement becomes her most-watched post: 29.8M views.'},
  {y:'2026',t:'TV, airlines, tourism',d:'Sundae’s Ramadan commercial, Gulf Air, Hala Thailand, Kaspersky, vivo.'}
];
// Her worlds, with only the new photography.
const WORLDS=[
  {id:'studio',t:'Beauty & glam',d:'Studio portraits, couture gowns, red lips.',imgs:'st-lace-close1 ev-brown-close st-navy2 ev-sequin2 st-bridal-close lp-veil1 ev-burgundy2 nt-fur2 st-lace2 ev-leopard3 pk-dress2 rr-grey3 st-navy4 ev-brown1 nt-red1 bt-lips st-lace-eye ab-black1'.split(' ')},
  {id:'street',t:'Fashion & street',d:'Cairo and Dubai, one colour at a time.',imgs:'sf-redleather1 sf-orange1 sf-camel2 sf-blazer1 sf-teal1 sf-marina1 sf-flame sf-cream2 sf-redcoat sf-store1 sf-blue1 sf-plaid sf-poncho sf-white sf-orange2 sf-redleather3'.split(' ')},
  {id:'travel',t:'Travel',d:'Egypt first. Then Kenya, Dubai, Albania, Thailand.',imgs:'tr-abu1 tr-pyramid1 tr-safari-red1 tr-nile1 tr-jeep3 tr-clouds1 tr-albania2 tr-dubai1 tr-olddubai2 tr-swim2 tr-citadel tr-sea1 tr-luxor tr-yellow1 tr-aswan2 tr-albania3 tr-safari-red3 tr-dubai3'.split(' ')},
  {id:'family',t:'Family',d:'Sasa, Laila, and the days in between.',imgs:'fm-yellow1 cp-tunnel1 fm-lilac1 wd-2 fm-pink1 pg-white2 mk-2 fm-street1 cp-valentine1 fm-fur1 wd-3 fm-yellow3 cp-night fm-plane mk-3 fm-shop'.split(' ')}
];
window.MP={PROOF,TOP,TIMELINE,WORLDS,IG,TT};
})();
