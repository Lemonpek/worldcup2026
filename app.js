const FIXTURES = [
  [1,1,'2026-06-11T19:00:00Z','Mexico City Stadium','Mexico','South Africa','Group A',2,0],
  [2,1,'2026-06-12T02:00:00Z','Guadalajara Stadium','Korea Republic','Czechia','Group A',2,1],
  [3,1,'2026-06-12T19:00:00Z','Toronto Stadium','Canada','Bosnia and Herzegovina','Group B',1,1],
  [4,1,'2026-06-13T01:00:00Z','Los Angeles Stadium','USA','Paraguay','Group D',4,1],
  [8,1,'2026-06-13T19:00:00Z','San Francisco Bay Area Stadium','Qatar','Switzerland','Group B',1,1],
  [7,1,'2026-06-13T22:00:00Z','New York/New Jersey Stadium','Brazil','Morocco','Group C',1,1],
  [5,1,'2026-06-14T01:00:00Z','Boston Stadium','Haiti','Scotland','Group C',0,1],
  [6,1,'2026-06-14T04:00:00Z','BC Place Vancouver','Australia','Turkiye','Group D',2,0],
  [10,1,'2026-06-14T17:00:00Z','Houston Stadium','Germany','Curacao','Group E',7,1],
  [11,1,'2026-06-14T20:00:00Z','Dallas Stadium','Netherlands','Japan','Group F',2,2],
  [9,1,'2026-06-14T23:00:00Z','Philadelphia Stadium',"Cote d'Ivoire",'Ecuador','Group E',1,0],
  [12,1,'2026-06-15T02:00:00Z','Monterrey Stadium','Sweden','Tunisia','Group F',5,1],
  [14,1,'2026-06-15T16:00:00Z','Atlanta Stadium','Spain','Cabo Verde','Group H',0,0],
  [16,1,'2026-06-15T19:00:00Z','Seattle Stadium','Belgium','Egypt','Group G',1,1],
  [13,1,'2026-06-15T22:00:00Z','Miami Stadium','Saudi Arabia','Uruguay','Group H',1,1],
  [15,1,'2026-06-16T01:00:00Z','Los Angeles Stadium','IR Iran','New Zealand','Group G',2,2],
  [17,1,'2026-06-16T19:00:00Z','New York/New Jersey Stadium','France','Senegal','Group I',3,1],
  [18,1,'2026-06-16T22:00:00Z','Boston Stadium','Iraq','Norway','Group I',null,null],
  [19,1,'2026-06-17T01:00:00Z','Kansas City Stadium','Argentina','Algeria','Group J',null,null],
  [20,1,'2026-06-17T04:00:00Z','San Francisco Bay Area Stadium','Austria','Jordan','Group J',null,null],
  [23,1,'2026-06-17T17:00:00Z','Houston Stadium','Portugal','Congo DR','Group K',null,null],
  [22,1,'2026-06-17T20:00:00Z','Dallas Stadium','England','Croatia','Group L',null,null],
  [21,1,'2026-06-17T23:00:00Z','Toronto Stadium','Ghana','Panama','Group L',null,null],
  [24,1,'2026-06-18T02:00:00Z','Mexico City Stadium','Uzbekistan','Colombia','Group K',null,null],
  [25,2,'2026-06-18T16:00:00Z','Atlanta Stadium','Czechia','South Africa','Group A',null,null],
  [26,2,'2026-06-18T19:00:00Z','Los Angeles Stadium','Switzerland','Bosnia and Herzegovina','Group B',null,null],
  [27,2,'2026-06-18T22:00:00Z','BC Place Vancouver','Canada','Qatar','Group B',null,null],
  [28,2,'2026-06-19T01:00:00Z','Guadalajara Stadium','Mexico','Korea Republic','Group A',null,null],
  [32,2,'2026-06-19T19:00:00Z','Seattle Stadium','USA','Australia','Group D',null,null],
  [30,2,'2026-06-19T22:00:00Z','Boston Stadium','Scotland','Morocco','Group C',null,null],
  [29,2,'2026-06-20T01:00:00Z','Philadelphia Stadium','Brazil','Haiti','Group C',null,null],
  [31,2,'2026-06-20T04:00:00Z','San Francisco Bay Area Stadium','Turkiye','Paraguay','Group D',null,null],
  [35,2,'2026-06-20T17:00:00Z','Houston Stadium','Netherlands','Sweden','Group F',null,null],
  [33,2,'2026-06-20T20:00:00Z','Toronto Stadium','Germany',"Cote d'Ivoire",'Group E',null,null],
  [34,2,'2026-06-21T00:00:00Z','Kansas City Stadium','Ecuador','Curacao','Group E',null,null],
  [36,2,'2026-06-21T04:00:00Z','Monterrey Stadium','Tunisia','Japan','Group F',null,null],
  [38,2,'2026-06-21T16:00:00Z','Atlanta Stadium','Spain','Saudi Arabia','Group H',null,null],
  [39,2,'2026-06-21T19:00:00Z','Los Angeles Stadium','Belgium','IR Iran','Group G',null,null],
  [37,2,'2026-06-21T22:00:00Z','Miami Stadium','Uruguay','Cabo Verde','Group H',null,null],
  [40,2,'2026-06-22T01:00:00Z','BC Place Vancouver','New Zealand','Egypt','Group G',null,null],
  [43,2,'2026-06-22T17:00:00Z','Dallas Stadium','Argentina','Austria','Group J',null,null],
  [42,2,'2026-06-22T21:00:00Z','Philadelphia Stadium','France','Iraq','Group I',null,null],
  [41,2,'2026-06-23T00:00:00Z','New York/New Jersey Stadium','Norway','Senegal','Group I',null,null],
  [44,2,'2026-06-23T03:00:00Z','San Francisco Bay Area Stadium','Jordan','Algeria','Group J',null,null],
  [47,2,'2026-06-23T17:00:00Z','Houston Stadium','Portugal','Uzbekistan','Group K',null,null],
  [45,2,'2026-06-23T20:00:00Z','Boston Stadium','England','Ghana','Group L',null,null],
  [46,2,'2026-06-23T23:00:00Z','Toronto Stadium','Panama','Croatia','Group L',null,null],
  [48,2,'2026-06-24T02:00:00Z','Guadalajara Stadium','Colombia','Congo DR','Group K',null,null],
  [51,3,'2026-06-24T19:00:00Z','BC Place Vancouver','Switzerland','Canada','Group B',null,null],
  [52,3,'2026-06-24T19:00:00Z','Seattle Stadium','Bosnia and Herzegovina','Qatar','Group B',null,null],
  [49,3,'2026-06-24T22:00:00Z','Miami Stadium','Scotland','Brazil','Group C',null,null],
  [50,3,'2026-06-24T22:00:00Z','Atlanta Stadium','Morocco','Haiti','Group C',null,null],
  [53,3,'2026-06-25T01:00:00Z','Mexico City Stadium','Czechia','Mexico','Group A',null,null],
  [54,3,'2026-06-25T01:00:00Z','Monterrey Stadium','South Africa','Korea Republic','Group A',null,null],
  [55,3,'2026-06-25T20:00:00Z','Philadelphia Stadium','Curacao',"Cote d'Ivoire",'Group E',null,null],
  [56,3,'2026-06-25T20:00:00Z','New York/New Jersey Stadium','Ecuador','Germany','Group E',null,null],
  [57,3,'2026-06-25T23:00:00Z','Dallas Stadium','Japan','Sweden','Group F',null,null],
  [58,3,'2026-06-25T23:00:00Z','Kansas City Stadium','Tunisia','Netherlands','Group F',null,null],
  [59,3,'2026-06-26T02:00:00Z','Los Angeles Stadium','Turkiye','USA','Group D',null,null],
  [60,3,'2026-06-26T02:00:00Z','San Francisco Bay Area Stadium','Paraguay','Australia','Group D',null,null],
  [61,3,'2026-06-26T19:00:00Z','Boston Stadium','Norway','France','Group I',null,null],
  [62,3,'2026-06-26T19:00:00Z','Toronto Stadium','Senegal','Iraq','Group I',null,null],
  [65,3,'2026-06-27T00:00:00Z','Houston Stadium','Cabo Verde','Saudi Arabia','Group H',null,null],
  [66,3,'2026-06-27T00:00:00Z','Guadalajara Stadium','Uruguay','Spain','Group H',null,null],
  [63,3,'2026-06-27T03:00:00Z','Seattle Stadium','Egypt','IR Iran','Group G',null,null],
  [64,3,'2026-06-27T03:00:00Z','BC Place Vancouver','New Zealand','Belgium','Group G',null,null],
  [67,3,'2026-06-27T21:00:00Z','New York/New Jersey Stadium','Panama','England','Group L',null,null],
  [68,3,'2026-06-27T21:00:00Z','Philadelphia Stadium','Croatia','Ghana','Group L',null,null],
  [71,3,'2026-06-27T23:30:00Z','Miami Stadium','Colombia','Portugal','Group K',null,null],
  [72,3,'2026-06-27T23:30:00Z','Atlanta Stadium','Congo DR','Uzbekistan','Group K',null,null],
  [69,3,'2026-06-28T02:00:00Z','Kansas City Stadium','Algeria','Austria','Group J',null,null],
  [70,3,'2026-06-28T02:00:00Z','Dallas Stadium','Jordan','Argentina','Group J',null,null],
  [73,4,'2026-06-28T19:00:00Z','Los Angeles Stadium','2A','2B','Round of 32',null,null],
  [76,4,'2026-06-29T17:00:00Z','Houston Stadium','1C','2F','Round of 32',null,null],
  [74,4,'2026-06-29T20:30:00Z','Boston Stadium','1E','3ABCDF','Round of 32',null,null],
  [75,4,'2026-06-30T01:00:00Z','Monterrey Stadium','1F','2C','Round of 32',null,null],
  [78,4,'2026-06-30T17:00:00Z','Dallas Stadium','2E','2I','Round of 32',null,null],
  [77,4,'2026-06-30T21:00:00Z','New York/New Jersey Stadium','1I','3CDFGH','Round of 32',null,null],
  [79,4,'2026-07-01T01:00:00Z','Mexico City Stadium','1A','3CEFHI','Round of 32',null,null],
  [80,4,'2026-07-01T16:00:00Z','Atlanta Stadium','1L','3EHIJK','Round of 32',null,null],
  [82,4,'2026-07-01T20:00:00Z','Seattle Stadium','1G','3AEHIJ','Round of 32',null,null],
  [81,4,'2026-07-02T00:00:00Z','San Francisco Bay Area Stadium','1D','3BEFIJ','Round of 32',null,null],
  [84,4,'2026-07-02T19:00:00Z','Los Angeles Stadium','1H','2J','Round of 32',null,null],
  [83,4,'2026-07-02T23:00:00Z','Toronto Stadium','2K','2L','Round of 32',null,null],
  [85,4,'2026-07-03T03:00:00Z','BC Place Vancouver','1B','3EFGIJ','Round of 32',null,null],
  [88,4,'2026-07-03T18:00:00Z','Dallas Stadium','2D','2G','Round of 32',null,null],
  [86,4,'2026-07-03T22:00:00Z','Miami Stadium','1J','2H','Round of 32',null,null],
  [87,4,'2026-07-04T01:30:00Z','Kansas City Stadium','1K','3DEIJL','Round of 32',null,null],
  [90,5,'2026-07-04T17:00:00Z','Houston Stadium','To be announced','To be announced','Round of 16',null,null],
  [89,5,'2026-07-04T21:00:00Z','Philadelphia Stadium','To be announced','To be announced','Round of 16',null,null],
  [91,5,'2026-07-05T20:00:00Z','New York/New Jersey Stadium','To be announced','To be announced','Round of 16',null,null],
  [92,5,'2026-07-06T00:00:00Z','Mexico City Stadium','To be announced','To be announced','Round of 16',null,null],
  [93,5,'2026-07-06T19:00:00Z','Dallas Stadium','To be announced','To be announced','Round of 16',null,null],
  [94,5,'2026-07-07T00:00:00Z','Seattle Stadium','To be announced','To be announced','Round of 16',null,null],
  [95,5,'2026-07-07T16:00:00Z','Atlanta Stadium','To be announced','To be announced','Round of 16',null,null],
  [96,5,'2026-07-07T20:00:00Z','BC Place Vancouver','To be announced','To be announced','Round of 16',null,null],
  [97,6,'2026-07-09T20:00:00Z','Boston Stadium','To be announced','To be announced','Quarter-final',null,null],
  [98,6,'2026-07-10T19:00:00Z','Los Angeles Stadium','To be announced','To be announced','Quarter-final',null,null],
  [99,6,'2026-07-11T21:00:00Z','Miami Stadium','To be announced','To be announced','Quarter-final',null,null],
  [100,6,'2026-07-12T01:00:00Z','Kansas City Stadium','To be announced','To be announced','Quarter-final',null,null],
  [101,7,'2026-07-14T19:00:00Z','Dallas Stadium','To be announced','To be announced','Semi-final',null,null],
  [102,7,'2026-07-15T19:00:00Z','Atlanta Stadium','To be announced','To be announced','Semi-final',null,null],
  [103,8,'2026-07-18T21:00:00Z','Miami Stadium','To be announced','To be announced','Third-place match',null,null],
  [104,8,'2026-07-19T19:00:00Z','New York/New Jersey Stadium','To be announced','To be announced','Final',null,null]
].map(([match,round,date,venue,home,away,stage,homeScore,awayScore]) => ({
  match, round, date, venue, home, away, stage, homeScore, awayScore
}));

const TEAM_ZH = {
  Argentina:'阿根廷', France:'法国', Brazil:'巴西', Spain:'西班牙', England:'英格兰', Portugal:'葡萄牙',
  Netherlands:'荷兰', Belgium:'比利时', Germany:'德国', Croatia:'克罗地亚', Uruguay:'乌拉圭', Morocco:'摩洛哥',
  Colombia:'哥伦比亚', Mexico:'墨西哥', USA:'美国', Switzerland:'瑞士', Japan:'日本', Sweden:'瑞典',
  Senegal:'塞内加尔', Austria:'奥地利', Norway:'挪威', Ecuador:'厄瓜多尔', 'IR Iran':'伊朗',
  'Korea Republic':'韩国', Australia:'澳大利亚', Turkiye:'土耳其', Paraguay:'巴拉圭', Scotland:'苏格兰',
  Czechia:'捷克', 'South Africa':'南非', Canada:'加拿大', Qatar:'卡塔尔',
  'Bosnia and Herzegovina':'波黑', Haiti:'海地', Curacao:'库拉索', "Cote d'Ivoire":'科特迪瓦',
  Tunisia:'突尼斯', 'Cabo Verde':'佛得角', Egypt:'埃及', 'Saudi Arabia':'沙特阿拉伯',
  'New Zealand':'新西兰', Iraq:'伊拉克', Algeria:'阿尔及利亚', Jordan:'约旦', 'Congo DR':'刚果（金）',
  Ghana:'加纳', Panama:'巴拿马', Uzbekistan:'乌兹别克斯坦', 'To be announced':'待定'
};

const ALIASES = {
  阿根廷:'Argentina', 法国:'France', 巴西:'Brazil', 西班牙:'Spain', 英格兰:'England', 葡萄牙:'Portugal',
  荷兰:'Netherlands', 比利时:'Belgium', 德国:'Germany', 克罗地亚:'Croatia', 乌拉圭:'Uruguay',
  摩洛哥:'Morocco', 哥伦比亚:'Colombia', 墨西哥:'Mexico', 美国:'USA', 瑞士:'Switzerland',
  日本:'Japan', 瑞典:'Sweden', 塞内加尔:'Senegal', 奥地利:'Austria', 挪威:'Norway',
  厄瓜多尔:'Ecuador', 伊朗:'IR Iran', 韩国:'Korea Republic', 澳大利亚:'Australia',
  土耳其:'Turkiye', 巴拉圭:'Paraguay', 苏格兰:'Scotland', 捷克:'Czechia', 南非:'South Africa',
  加拿大:'Canada', 卡塔尔:'Qatar', 波黑:'Bosnia and Herzegovina', 海地:'Haiti', 库拉索:'Curacao',
  科特迪瓦:"Cote d'Ivoire", 突尼斯:'Tunisia', 佛得角:'Cabo Verde', 埃及:'Egypt',
  沙特:'Saudi Arabia', 沙特阿拉伯:'Saudi Arabia', 新西兰:'New Zealand', 伊拉克:'Iraq',
  阿尔及利亚:'Algeria', 约旦:'Jordan', 刚果金:'Congo DR', '刚果（金）':'Congo DR',
  加纳:'Ghana', 巴拿马:'Panama', 乌兹别克斯坦:'Uzbekistan', Czech:'Czechia',
  Türkiye:'Turkiye', 'Côte d’Ivoire':"Cote d'Ivoire", 'Côte dIvoire':"Cote d'Ivoire"
};

const BASE_PROFILES = {
  Argentina:[94,94,88,89,92,90,93,96], France:[93,94,87,88,91,91,89,92],
  Brazil:[91,92,84,87,90,86,90,94], Spain:[91,91,88,92,88,90,88,91],
  England:[90,91,86,86,89,88,87,88], Portugal:[89,91,83,85,89,85,86,89],
  Netherlands:[88,88,86,87,86,87,84,87], Belgium:[86,87,82,84,85,82,85,87],
  Germany:[86,87,83,84,86,82,89,86], Croatia:[85,84,86,86,82,84,91,84],
  Uruguay:[84,84,85,83,82,85,90,83], Morocco:[83,82,84,85,81,86,82,82],
  Colombia:[82,82,82,81,81,80,82,81], Mexico:[80,79,80,80,79,79,82,80],
  USA:[80,81,79,80,80,78,75,81], Switzerland:[79,78,80,80,77,81,79,78],
  Japan:[78,78,79,82,77,78,76,79], Sweden:[78,77,78,77,76,79,78,76],
  Senegal:[77,77,78,78,77,78,75,77], Austria:[77,76,78,79,76,77,73,76],
  Norway:[76,82,74,75,76,73,70,80], Ecuador:[76,75,75,76,75,77,72,76],
  'IR Iran':[75,74,75,75,75,76,75,74], 'Korea Republic':[75,76,74,76,75,74,74,76],
  Australia:[74,73,75,74,74,75,76,73], Turkiye:[74,75,73,74,74,72,74,75],
  Paraguay:[73,72,73,72,73,74,74,72], Scotland:[73,72,73,73,72,74,73,72],
  Czechia:[72,71,72,73,71,73,72,71], 'South Africa':[70,69,70,70,70,71,69,70],
  Canada:[70,71,69,70,70,68,67,71], Qatar:[69,68,69,70,69,68,67,68],
  'Bosnia and Herzegovina':[69,69,68,68,68,68,69,69], Haiti:[64,63,64,64,63,62,62,64],
  Curacao:[62,62,63,64,63,62,60,62], "Cote d'Ivoire":[75,76,74,75,75,74,77,76],
  Tunisia:[70,69,70,71,70,71,70,69], 'Cabo Verde':[67,66,67,68,68,67,63,66],
  Egypt:[74,75,73,73,74,73,75,76], 'Saudi Arabia':[70,69,72,70,70,69,72,69],
  'New Zealand':[64,63,65,64,64,64,62,63], Iraq:[67,66,68,67,67,67,65,66],
  Algeria:[74,75,73,74,74,73,76,75], Jordan:[66,65,67,67,66,66,64,65],
  'Congo DR':[70,70,69,70,70,69,68,70], Ghana:[73,73,72,72,72,72,76,73],
  Panama:[68,67,68,69,68,67,66,67], Uzbekistan:[69,68,70,69,69,69,65,68]
};

const CLUB_EXPOSURE = {
  Argentina:[.78,.16,.05,.01], France:[.82,.13,.04,.01], Brazil:[.76,.16,.06,.02], Spain:[.84,.12,.03,.01],
  England:[.80,.15,.04,.01], Portugal:[.74,.18,.06,.02], Netherlands:[.68,.22,.08,.02], Belgium:[.62,.25,.10,.03],
  Germany:[.72,.20,.06,.02], Croatia:[.55,.28,.13,.04], Uruguay:[.48,.30,.17,.05], Morocco:[.45,.32,.18,.05],
  Colombia:[.38,.34,.20,.08], Mexico:[.18,.36,.32,.14], USA:[.28,.38,.24,.10], Switzerland:[.42,.36,.16,.06],
  Japan:[.30,.36,.24,.10], Sweden:[.34,.36,.20,.10], Senegal:[.38,.34,.20,.08], Austria:[.42,.36,.16,.06],
  Norway:[.48,.28,.16,.08], Ecuador:[.24,.36,.28,.12], 'IR Iran':[.12,.26,.38,.24],
  'Korea Republic':[.28,.32,.28,.12], Australia:[.16,.30,.36,.18], Turkiye:[.24,.38,.26,.12],
  Paraguay:[.20,.34,.30,.16], Scotland:[.18,.36,.32,.14], Czechia:[.22,.38,.28,.12],
  "Cote d'Ivoire":[.34,.36,.22,.08], Egypt:[.34,.30,.24,.12], Algeria:[.30,.36,.24,.10],
  Ghana:[.30,.34,.24,.12], Canada:[.32,.30,.24,.14], 'Saudi Arabia':[.08,.20,.42,.30],
  Qatar:[.04,.16,.40,.40], 'South Africa':[.08,.22,.38,.32], 'Cabo Verde':[.12,.28,.38,.22],
  'Bosnia and Herzegovina':[.16,.34,.34,.16], Tunisia:[.14,.32,.36,.18], Iraq:[.08,.22,.40,.30],
  Jordan:[.06,.18,.42,.34], Panama:[.08,.24,.40,.28], Uzbekistan:[.08,.24,.42,.26],
  Haiti:[.06,.18,.38,.38], Curacao:[.08,.24,.36,.32], 'New Zealand':[.06,.18,.38,.38],
  'Congo DR':[.18,.34,.32,.16]
};

const CLUB_TIERS = [
  {label:'欧冠争冠级', multiplier:1.10},
  {label:'五大联赛主力级', multiplier:1.04},
  {label:'强联赛轮换级', multiplier:0.99},
  {label:'本土/区域联赛级', multiplier:0.93}
];

const TEAM_SALARY_INDEX = {
  Argentina:96, France:98, Brazil:95, Spain:94, England:96, Portugal:93, Netherlands:90, Germany:91,
  Belgium:87, Croatia:84, Uruguay:82, Morocco:80, Colombia:79, Norway:82, Senegal:78, Switzerland:78,
  USA:77, Mexico:76, Japan:75, Sweden:74, Austria:74, "Cote d'Ivoire":73, Turkiye:73,
  Ecuador:72, Ghana:71, Algeria:71, Egypt:70, 'Korea Republic':70, Paraguay:69, Scotland:69,
  Australia:68, Czechia:68, 'IR Iran':67, Canada:67, 'Saudi Arabia':66, Tunisia:65,
  'Bosnia and Herzegovina':65, 'Cabo Verde':63, Qatar:62, 'Congo DR':62, Uzbekistan:61,
  'South Africa':60, Iraq:59, Panama:58, Jordan:57, Curacao:55, Haiti:54, 'New Zealand':54
};

const STAR_IMPACT = {
  Argentina:[98,91,87], France:[96,93,90], Brazil:[94,91,85], Spain:[92,94,88], England:[95,90,88],
  Portugal:[94,89,84], Netherlands:[89,88,88], Germany:[88,90,86], Belgium:[88,87,82],
  Croatia:[86,89,84], Uruguay:[86,83,84], Morocco:[84,82,84], Colombia:[84,82,80],
  Norway:[95,78,75], Senegal:[84,80,82], Switzerland:[79,80,80], USA:[80,78,76],
  Mexico:[78,77,76], Japan:[79,80,75], Sweden:[82,76,76], Austria:[78,79,76],
  "Cote d'Ivoire":[82,76,75], Turkiye:[80,77,74], Ecuador:[77,75,75], Ghana:[78,75,73],
  Algeria:[79,76,73], Egypt:[85,76,72], 'Korea Republic':[84,78,74], Paraguay:[75,73,74],
  Scotland:[75,74,74], Australia:[73,72,73], Czechia:[73,73,72], 'IR Iran':[74,73,73],
  Canada:[82,74,70], 'Saudi Arabia':[72,71,70], Tunisia:[71,71,72], 'Bosnia and Herzegovina':[72,71,70],
  'Cabo Verde':[70,70,69], Qatar:[69,69,68], 'Congo DR':[73,70,70], Uzbekistan:[70,70,69],
  'South Africa':[68,68,68], Iraq:[68,68,68], Panama:[67,67,67], Jordan:[66,66,66],
  Curacao:[65,65,65], Haiti:[64,64,64], 'New Zealand':[64,64,64]
};

const STAR_PLAYERS = {
  Argentina:[['Lionel Messi','进攻/策应'],['Lautaro Martinez','进攻'],['Cristian Romero','防守']],
  France:[['Kylian Mbappe','进攻'],['Antoine Griezmann','策应'],['William Saliba','防守']],
  Brazil:[['Vinicius Junior','进攻'],['Rodrygo','进攻/策应'],['Marquinhos','防守']],
  Spain:[['Lamine Yamal','进攻/策应'],['Pedri','策应'],['Rodri','防守/策应']],
  England:[['Harry Kane','进攻'],['Jude Bellingham','策应/进攻'],['Declan Rice','防守/策应']],
  Portugal:[['Cristiano Ronaldo','进攻'],['Bruno Fernandes','策应'],['Ruben Dias','防守']],
  Netherlands:[['Cody Gakpo','进攻'],['Frenkie de Jong','策应'],['Virgil van Dijk','防守']],
  Germany:[['Jamal Musiala','进攻/策应'],['Florian Wirtz','策应'],['Antonio Rudiger','防守']],
  Belgium:[['Romelu Lukaku','进攻'],['Kevin De Bruyne','策应'],['Jeremy Doku','进攻']],
  Croatia:[['Luka Modric','策应'],['Josko Gvardiol','防守/推进'],['Mateo Kovacic','策应']],
  Uruguay:[['Darwin Nunez','进攻'],['Federico Valverde','策应/防守'],['Ronald Araujo','防守']],
  Morocco:[['Achraf Hakimi','进攻/防守'],['Hakim Ziyech','策应'],['Yassine Bounou','门将']],
  Colombia:[['Luis Diaz','进攻'],['James Rodriguez','策应'],['Davinson Sanchez','防守']],
  Norway:[['Erling Haaland','进攻'],['Martin Odegaard','策应'],['Sander Berge','防守/策应']],
  Senegal:[['Sadio Mane','进攻'],['Nicolas Jackson','进攻'],['Kalidou Koulibaly','防守']],
  Switzerland:[['Granit Xhaka','策应'],['Manuel Akanji','防守'],['Breel Embolo','进攻']],
  USA:[['Christian Pulisic','进攻'],['Weston McKennie','策应'],['Tyler Adams','防守']],
  Mexico:[['Santiago Gimenez','进攻'],['Edson Alvarez','防守/策应'],['Hirving Lozano','进攻']],
  Japan:[['Takefusa Kubo','进攻/策应'],['Kaoru Mitoma','进攻'],['Wataru Endo','防守/策应']],
  Sweden:[['Alexander Isak','进攻'],['Dejan Kulusevski','策应/进攻'],['Victor Lindelof','防守']],
  Austria:[['David Alaba','防守/策应'],['Marcel Sabitzer','策应'],['Marko Arnautovic','进攻']],
  "Cote d'Ivoire":[['Sebastien Haller','进攻'],['Franck Kessie','策应/防守'],['Simon Adingra','进攻']],
  Turkiye:[['Hakan Calhanoglu','策应'],['Arda Guler','进攻/策应'],['Merih Demiral','防守']],
  Ecuador:[['Moises Caicedo','防守/策应'],['Piero Hincapie','防守'],['Enner Valencia','进攻']],
  Ghana:[['Mohammed Kudus','进攻/策应'],['Thomas Partey','策应/防守'],['Inaki Williams','进攻']],
  Algeria:[['Riyad Mahrez','进攻/策应'],['Ismael Bennacer','策应'],['Ramy Bensebaini','防守']],
  Egypt:[['Mohamed Salah','进攻'],['Omar Marmoush','进攻'],['Mohamed Elneny','策应/防守']],
  'Korea Republic':[['Son Heung-min','进攻'],['Lee Kang-in','策应'],['Kim Min-jae','防守']],
  Paraguay:[['Miguel Almiron','进攻/策应'],['Julio Enciso','进攻'],['Gustavo Gomez','防守']],
  Scotland:[['Scott McTominay','进攻/策应'],['John McGinn','策应'],['Andy Robertson','防守/策应']],
  Australia:[['Mathew Ryan','门将'],['Jackson Irvine','策应'],['Harry Souttar','防守']],
  Czechia:[['Patrik Schick','进攻'],['Tomas Soucek','策应/防守'],['Adam Hlozek','进攻']],
  'IR Iran':[['Mehdi Taremi','进攻'],['Sardar Azmoun','进攻'],['Alireza Jahanbakhsh','策应']],
  Canada:[['Alphonso Davies','进攻/防守'],['Jonathan David','进攻'],['Stephen Eustaquio','策应']],
  'Saudi Arabia':[['Salem Al-Dawsari','进攻'],['Firas Al-Buraikan','进攻'],['Mohamed Kanno','策应']],
  Tunisia:[['Ellyes Skhiri','防守/策应'],['Hannibal Mejbri','策应'],['Wahbi Khazri','进攻']],
  'Bosnia and Herzegovina':[['Edin Dzeko','进攻'],['Miralem Pjanic','策应'],['Sead Kolasinac','防守']],
  'Cabo Verde':[['Ryan Mendes','进攻'],['Bebe','进攻'],['Logan Costa','防守']],
  Qatar:[['Akram Afif','进攻/策应'],['Almoez Ali','进攻'],['Hassan Al-Haydos','策应']],
  'Congo DR':[['Yoane Wissa','进攻'],['Chancel Mbemba','防守'],['Cedric Bakambu','进攻']],
  Uzbekistan:[['Eldor Shomurodov','进攻'],['Abdukodir Khusanov','防守'],['Oston Urunov','策应']],
  'South Africa':[['Percy Tau','进攻'],['Teboho Mokoena','策应'],['Ronwen Williams','门将']],
  Iraq:[['Aymen Hussein','进攻'],['Ali Jasim','进攻/策应'],['Zidane Iqbal','策应']],
  Panama:[['Adalberto Carrasquilla','策应'],['Michael Murillo','防守/推进'],['Jose Fajardo','进攻']],
  Jordan:[['Mousa Al-Taamari','进攻'],['Yazan Al-Naimat','进攻'],['Nizar Al-Rashdan','策应']],
  Curacao:[['Leandro Bacuna','策应'],['Juninho Bacuna','策应'],['Vurnon Anita','防守/策应']],
  Haiti:[['Duckens Nazon','进攻'],['Frantzdy Pierrot','进攻'],['Bryan Alceus','策应']],
  'New Zealand':[['Chris Wood','进攻'],['Sarpreet Singh','策应'],['Winston Reid','防守']]
};

const HISTORICAL_H2H = [
  {date:'2002-05-31', competition:'世界杯', home:'France', away:'Senegal', homeScore:0, awayScore:1},
  {date:'2018-07-11', competition:'世界杯', home:'Croatia', away:'England', homeScore:2, awayScore:1},
  {date:'2021-06-13', competition:'欧洲杯', home:'England', away:'Croatia', homeScore:1, awayScore:0},
  {date:'2018-11-18', competition:'欧国联', home:'England', away:'Croatia', homeScore:2, awayScore:1},
  {date:'2018-06-23', competition:'世界杯', home:'Korea Republic', away:'Mexico', homeScore:1, awayScore:2},
  {date:'1998-06-13', competition:'世界杯', home:'Korea Republic', away:'Mexico', homeScore:1, awayScore:3},
  {date:'2010-06-05', competition:'友谊赛', home:'USA', away:'Australia', homeScore:3, awayScore:1},
  {date:'2016-06-08', competition:'美洲杯', home:'Brazil', away:'Haiti', homeScore:7, awayScore:1},
  {date:'2002-06-14', competition:'世界杯', home:'Tunisia', away:'Japan', homeScore:0, awayScore:2},
  {date:'2022-06-14', competition:'麒麟杯', home:'Japan', away:'Tunisia', homeScore:0, awayScore:3},
  {date:'2023-10-17', competition:'友谊赛', home:'Japan', away:'Tunisia', homeScore:2, awayScore:0},
  {date:'2010-06-11', competition:'世界杯', home:'South Africa', away:'Mexico', homeScore:1, awayScore:1},
  {date:'2012-02-29', competition:'友谊赛', home:'South Africa', away:'Senegal', homeScore:0, awayScore:0},
  {date:'2019-07-19', competition:'非洲杯', home:'Senegal', away:'Algeria', homeScore:0, awayScore:1},
  {date:'2023-09-12', competition:'友谊赛', home:'Senegal', away:'Algeria', homeScore:0, awayScore:1},
  {date:'2018-06-25', competition:'世界杯', home:'Saudi Arabia', away:'Egypt', homeScore:2, awayScore:1},
  {date:'2006-06-14', competition:'世界杯', home:'Saudi Arabia', away:'Tunisia', homeScore:2, awayScore:2},
  {date:'2018-06-20', competition:'世界杯', home:'Uruguay', away:'Saudi Arabia', homeScore:1, awayScore:0},
  {date:'2014-06-25', competition:'世界杯', home:'Switzerland', away:'Honduras', homeScore:3, awayScore:0},
  {date:'2018-06-17', competition:'世界杯', home:'Brazil', away:'Switzerland', homeScore:1, awayScore:1},
  {date:'2022-11-28', competition:'世界杯', home:'Brazil', away:'Switzerland', homeScore:1, awayScore:0},
  {date:'2018-06-15', competition:'世界杯', home:'Morocco', away:'IR Iran', homeScore:0, awayScore:1},
  {date:'2022-11-23', competition:'世界杯', home:'Belgium', away:'Canada', homeScore:1, awayScore:0},
  {date:'2022-12-01', competition:'世界杯', home:'Croatia', away:'Belgium', homeScore:0, awayScore:0},
  {date:'2022-12-17', competition:'世界杯', home:'Croatia', away:'Morocco', homeScore:2, awayScore:1},
  {date:'2022-11-23', competition:'世界杯', home:'Morocco', away:'Croatia', homeScore:0, awayScore:0},
  {date:'2022-11-24', competition:'世界杯', home:'Portugal', away:'Ghana', homeScore:3, awayScore:2},
  {date:'2014-06-26', competition:'世界杯', home:'Portugal', away:'Ghana', homeScore:2, awayScore:1},
  {date:'2022-11-28', competition:'世界杯', home:'Portugal', away:'Uruguay', homeScore:2, awayScore:0},
  {date:'2018-06-30', competition:'世界杯', home:'Uruguay', away:'Portugal', homeScore:2, awayScore:1},
  {date:'2022-11-26', competition:'世界杯', home:'Argentina', away:'Mexico', homeScore:2, awayScore:0},
  {date:'2010-06-27', competition:'世界杯', home:'Argentina', away:'Mexico', homeScore:3, awayScore:1},
  {date:'2006-06-24', competition:'世界杯', home:'Argentina', away:'Mexico', homeScore:2, awayScore:1},
  {date:'2022-12-09', competition:'世界杯', home:'Netherlands', away:'Argentina', homeScore:2, awayScore:2},
  {date:'2014-07-09', competition:'世界杯', home:'Netherlands', away:'Argentina', homeScore:0, awayScore:0},
  {date:'1998-07-04', competition:'世界杯', home:'Netherlands', away:'Argentina', homeScore:2, awayScore:1},
  {date:'2022-12-18', competition:'世界杯', home:'Argentina', away:'France', homeScore:3, awayScore:3},
  {date:'2018-06-30', competition:'世界杯', home:'France', away:'Argentina', homeScore:4, awayScore:3},
  {date:'2014-07-08', competition:'世界杯', home:'Brazil', away:'Germany', homeScore:1, awayScore:7},
  {date:'2022-12-05', competition:'世界杯', home:'Brazil', away:'Korea Republic', homeScore:4, awayScore:1},
  {date:'2018-06-27', competition:'世界杯', home:'Korea Republic', away:'Germany', homeScore:2, awayScore:0},
  {date:'2022-11-27', competition:'世界杯', home:'Spain', away:'Germany', homeScore:1, awayScore:1},
  {date:'2010-07-07', competition:'世界杯', home:'Germany', away:'Spain', homeScore:0, awayScore:1},
  {date:'2022-12-06', competition:'世界杯', home:'Morocco', away:'Spain', homeScore:0, awayScore:0}
];

const PLAYER_ROLE_BLUEPRINTS = [
  {role:'ST', label:'中锋', share:.92, attack:.34, support:.16, defense:.05, keeper:0},
  {role:'WG', label:'边锋', share:.88, attack:.30, support:.20, defense:.08, keeper:0},
  {role:'AM', label:'前腰', share:.86, attack:.24, support:.30, defense:.08, keeper:0},
  {role:'CM', label:'中场', share:.84, attack:.15, support:.30, defense:.17, keeper:0},
  {role:'DM', label:'后腰', share:.82, attack:.08, support:.23, defense:.28, keeper:0},
  {role:'FB', label:'边后卫', share:.80, attack:.10, support:.20, defense:.26, keeper:0},
  {role:'CB', label:'中卫', share:.84, attack:.04, support:.10, defense:.38, keeper:0},
  {role:'GK', label:'门将', share:.78, attack:0, support:.06, defense:.18, keeper:.42}
];

const SCORE_FEED_URL = 'https://fixturedownload.com/feed/json/fifa-world-cup-2026';
const SCORE_FEED_ENDPOINTS = [
  {url:'/api/scores', source:'本地比分代理'},
  {url:SCORE_FEED_URL, source:'FixtureDownload'},
  {url:`https://api.allorigins.win/raw?url=${encodeURIComponent(SCORE_FEED_URL)}`, source:'FixtureDownload 代理'}
];
const PROFILE_KEYS = ['rating','players','coach','tactic','form','defense','experience','attack'];
const fixturesByKey = new Map();
const explicitScores = new Map();
let calibratedProfiles = loadCalibration();
let lastEvaluation = null;
let fixtureViewMode = 'forecast';
let latestScoreSource = '本地内置比分';
let latestScoreRefreshAt = null;
let isRefreshingScores = false;

const elements = {
  nextTitle: document.querySelector('#nextMatchTitle'),
  nextBadge: document.querySelector('#nextMatchBadge'),
  nextScoreline: document.querySelector('#nextScoreline'),
  nextProbabilities: document.querySelector('#nextProbabilities'),
  coverageMetric: document.querySelector('#coverageMetric'),
  accuracyMetric: document.querySelector('#accuracyMetric'),
  accuracyCaption: document.querySelector('#accuracyCaption'),
  modelMetric: document.querySelector('#modelMetric'),
  searchInput: document.querySelector('#searchInput'),
  groupFilter: document.querySelector('#groupFilter'),
  statusFilter: document.querySelector('#statusFilter'),
  refreshScoresButton: document.querySelector('#refreshScoresButton'),
  scoreSyncStatus: document.querySelector('#scoreSyncStatus'),
  resetModelButton: document.querySelector('#resetModelButton'),
  fixturePanelTitle: document.querySelector('#fixturePanelTitle'),
  forecastModeButton: document.querySelector('#forecastModeButton'),
  historyModeButton: document.querySelector('#historyModeButton'),
  fixtureHeaderRow: document.querySelector('#fixtureHeaderRow'),
  fixtureRows: document.querySelector('#fixtureRows'),
  fixtureCount: document.querySelector('#fixtureCount'),
  resultInput: document.querySelector('#resultInput'),
  loadSampleButton: document.querySelector('#loadSampleButton'),
  evaluateButton: document.querySelector('#evaluateButton'),
  calibrateButton: document.querySelector('#calibrateButton'),
  testSummary: document.querySelector('#testSummary'),
  teamPowerList: document.querySelector('#teamPowerList'),
  playerModelSummary: document.querySelector('#playerModelSummary'),
  starPlayerList: document.querySelector('#starPlayerList')
};

init();

function init() {
  FIXTURES.forEach(match => fixturesByKey.set(matchKey(match.home, match.away), match));
  populateFilters();
  elements.resultInput.value = sampleRecentScores();
  bindEvents();
  render();
  refreshLatestScores({silent:true});
}

function bindEvents() {
  ['input','change'].forEach(eventName => {
    elements.searchInput.addEventListener(eventName, render);
    elements.groupFilter.addEventListener(eventName, render);
    elements.statusFilter.addEventListener(eventName, render);
  });
  elements.loadSampleButton.addEventListener('click', () => {
    elements.resultInput.value = sampleRecentScores();
    evaluateResults(false);
  });
  elements.evaluateButton.addEventListener('click', () => evaluateResults(false));
  elements.calibrateButton.addEventListener('click', () => evaluateResults(true));
  elements.refreshScoresButton.addEventListener('click', () => refreshLatestScores({silent:false}));
  elements.forecastModeButton.addEventListener('click', () => {
    fixtureViewMode = 'forecast';
    render();
  });
  elements.historyModeButton.addEventListener('click', () => {
    fixtureViewMode = 'history';
    render();
  });
  elements.resetModelButton.addEventListener('click', () => {
    calibratedProfiles = {};
    localStorage.removeItem('wc2026-calibration');
    lastEvaluation = null;
    render();
    elements.testSummary.innerHTML = '已重置模型校准，当前使用基础实力画像。';
  });
}

function populateFilters() {
  const groups = [...new Set(FIXTURES.map(match => match.stage))];
  elements.groupFilter.innerHTML = '<option value="all">全部</option>' +
    groups.map(group => `<option value="${escapeHtml(group)}">${stageLabel(group)}</option>`).join('');
}

async function refreshLatestScores({silent = false} = {}) {
  if (isRefreshingScores) return;
  isRefreshingScores = true;
  updateScoreSyncStatus(silent ? '后台检查最新比分...' : '正在刷新最新比分...', 'loading');

  try {
    const {data, source} = await fetchScoreFeed();
    const mergeResult = mergeScoreFeed(data);
    latestScoreSource = source;
    latestScoreRefreshAt = new Date();
    updateScoreSyncStatus(`已更新 ${mergeResult.scoredCount} 场，来源：${source}`, 'success');
    render();
  } catch (error) {
    updateScoreSyncStatus(`刷新失败，继续使用本地数据`, 'error');
  } finally {
    isRefreshingScores = false;
  }
}

async function fetchScoreFeed() {
  let lastError = null;
  for (const endpoint of SCORE_FEED_ENDPOINTS) {
    try {
      const data = await fetchJsonWithTimeout(endpoint.url, endpoint.url === '/api/scores' ? 12000 : 8000);
      return {data, source:endpoint.source};
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('No score endpoints available');
}

async function fetchJsonWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {cache:'no-store', signal:controller.signal});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

function mergeScoreFeed(feedRows) {
  if (!Array.isArray(feedRows)) throw new Error('Unexpected score feed shape');
  let scoredCount = 0;
  let changedCount = 0;

  feedRows.forEach(row => {
    const matchNumber = Number(row.MatchNumber);
    const fixture = FIXTURES.find(match => match.match === matchNumber);
    if (!fixture) return;

    const homeScore = parseFeedScore(row.HomeTeamScore);
    const awayScore = parseFeedScore(row.AwayTeamScore);
    if (homeScore === null || awayScore === null) return;

    scoredCount += 1;
    if (fixture.homeScore !== homeScore || fixture.awayScore !== awayScore) changedCount += 1;
    fixture.homeScore = homeScore;
    fixture.awayScore = awayScore;
  });

  return {scoredCount, changedCount};
}

function parseFeedScore(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function updateScoreSyncStatus(message, state = 'idle') {
  elements.scoreSyncStatus.textContent = message;
  elements.scoreSyncStatus.dataset.state = state;
  elements.refreshScoresButton.disabled = state === 'loading';
}

function render() {
  const now = new Date();
  const matches = fixtureViewMode === 'history' ? filteredPlayedFixtures() : filteredFixtures(now);
  renderOverview(now);
  renderFixtures(matches);
  renderTeamPower();
  renderStarPlayers();
}

function renderOverview(now) {
  const unplayedKnown = FIXTURES.filter(isUnplayedKnownMatch);
  const next = unplayedKnown[0] || FIXTURES.find(isKnownMatch);
  const prediction = next ? predictMatch(next) : null;

  elements.coverageMetric.textContent = unplayedKnown.length;
  elements.modelMetric.textContent = Object.keys(calibratedProfiles).length ? '已校准' : '基础';

  if (lastEvaluation) {
    elements.accuracyMetric.textContent = `${Math.round(lastEvaluation.resultAccuracy * 100)}%`;
    elements.accuracyCaption.textContent = `赛果命中 ${lastEvaluation.resultHits}/${lastEvaluation.count}，完全比分 ${lastEvaluation.exactHits}/${lastEvaluation.count}`;
  } else {
    const currentStats = comparisonStats(FIXTURES);
    if (currentStats.count) {
      elements.accuracyMetric.textContent = `${Math.round(currentStats.resultAccuracy * 100)}%`;
      elements.accuracyCaption.textContent = `已有真实比分：赛果 ${currentStats.resultHits}/${currentStats.count}，完全比分 ${currentStats.exactHits}/${currentStats.count}`;
    } else {
      elements.accuracyMetric.textContent = '--';
      elements.accuracyCaption.textContent = '粘贴最近比分后自动评估';
    }
  }

  if (!next || !prediction) return;
  elements.nextTitle.textContent = `${zh(next.home)} vs ${zh(next.away)}`;
  elements.nextBadge.textContent = `${stageLabel(next.stage)} #${next.match}`;
  elements.nextScoreline.textContent = `${prediction.homeGoals} : ${prediction.awayGoals}`;
  elements.nextProbabilities.innerHTML = [
    ['主胜', prediction.homeWin],
    ['平局', prediction.draw],
    ['客胜', prediction.awayWin]
  ].map(([label, value]) => `<div class="prob-item"><span>${label}</span><b>${pct(value)}</b></div>`).join('');
}

function filteredFixtures(now) {
  const term = normalizeSearch(elements.searchInput.value);
  const stage = elements.groupFilter.value;
  const status = elements.statusFilter.value;

  return FIXTURES.filter(match => {
    const real = scoreFor(match);
    const isUnplayed = !real && isKnownMatch(match);
    const isPlayed = real !== null;
    const text = normalizeSearch(`${match.home} ${match.away} ${zh(match.home)} ${zh(match.away)} ${match.stage}`);
    if (term && !text.includes(term)) return false;
    if (stage !== 'all' && match.stage !== stage) return false;
    if (status === 'future' && !isUnplayed) return false;
    if (status === 'played' && !isPlayed) return false;
    return true;
  });
}

function filteredPlayedFixtures() {
  const term = normalizeSearch(elements.searchInput.value);
  const stage = elements.groupFilter.value;

  return FIXTURES.filter(match => {
    const real = scoreFor(match);
    const text = normalizeSearch(`${match.home} ${match.away} ${zh(match.home)} ${zh(match.away)} ${match.stage}`);
    if (!real || !isKnownMatch(match)) return false;
    if (term && !text.includes(term)) return false;
    if (stage !== 'all' && match.stage !== stage) return false;
    return true;
  });
}

function renderFixtures(matches) {
  renderFixtureModeChrome();
  elements.fixtureCount.textContent = `${matches.length} 场`;
  if (!matches.length) {
    elements.fixtureRows.innerHTML = `<tr><td colspan="${fixtureViewMode === 'history' ? 7 : 8}" class="empty-state">没有匹配的比赛。</td></tr>`;
    return;
  }

  elements.fixtureRows.innerHTML = fixtureViewMode === 'history'
    ? renderHistoryRows(matches)
    : renderForecastRows(matches);
}

function renderFixtureModeChrome() {
  const isHistory = fixtureViewMode === 'history';
  elements.fixturePanelTitle.textContent = isHistory ? '本届已完赛比分预测对比' : '自动预测未来对战比分';
  elements.forecastModeButton.classList.toggle('active', !isHistory);
  elements.historyModeButton.classList.toggle('active', isHistory);
  elements.fixtureHeaderRow.innerHTML = isHistory
    ? `<th>时间</th><th>对阵</th><th>模型预测</th><th>实际比分</th><th>比分对比</th><th>胜负对比</th><th>误差/RPS</th>`
    : `<th>时间</th><th>对阵</th><th>预测</th><th>胜平负</th><th>关键因素</th><th>真实比分</th><th>比分对比</th><th>胜负对比</th>`;
}

function renderForecastRows(matches) {
  const now = new Date();
  return matches.map(match => {
    const prediction = isKnownMatch(match) ? predictMatch(match) : null;
    const real = scoreFor(match);
    const comparison = prediction && real ? comparePrediction(prediction, real) : null;
    const state = matchStateInfo(match, now);
    const date = new Intl.DateTimeFormat('zh-CN', {
      month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'
    }).format(new Date(match.date));

    return `<tr class="${comparison ? comparisonRowClass(comparison) : 'row-pending'}">
      <td>
        <strong>${date}</strong>
        <div class="match-meta">${stageLabel(match.stage)} #${match.match}</div>
        <span class="match-state ${state.className}">${state.label}</span>
      </td>
      <td>
        <div class="match-cell">
          <strong>${zh(match.home)} vs ${zh(match.away)}</strong>
          <span class="match-meta">${escapeHtml(match.venue)}</span>
        </div>
      </td>
      <td>${prediction ? `<span class="predicted-score">${prediction.homeGoals}-${prediction.awayGoals}</span>` : '<span class="real-score">待产生晋级球队</span>'}</td>
      <td>${prediction ? outcomeBars(prediction) : ''}</td>
      <td>${prediction ? factorTags(match, prediction) : ''}</td>
      <td>${real ? `<strong>${real.home}-${real.away}</strong><div class="real-score">${actualResultText(real)}</div>` : '<span class="real-score">暂无</span>'}</td>
      <td>${comparison ? scoreComparisonCell(comparison) : '<span class="compare-pending">待赛果</span>'}</td>
      <td>${comparison ? outcomeComparisonCell(comparison) : '<span class="compare-pending">待赛果</span>'}</td>
    </tr>`;
  }).join('');
}

function renderHistoryRows(matches) {
  const now = new Date();
  return matches.map(match => {
    const prediction = isKnownMatch(match) ? predictMatch(match) : null;
    const real = scoreFor(match);
    const comparison = prediction && real ? comparePrediction(prediction, real) : null;
    const actualOutcome = real ? outcome(real.home, real.away) : null;
    const rps = prediction && actualOutcome ? rankedProbabilityScore(prediction, actualOutcome) : null;
    const state = matchStateInfo(match, now);
    const date = new Intl.DateTimeFormat('zh-CN', {
      month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'
    }).format(new Date(match.date));

    return `<tr class="${comparison ? comparisonRowClass(comparison) : 'row-pending'}">
      <td>
        <strong>${date}</strong>
        <div class="match-meta">${stageLabel(match.stage)} #${match.match}</div>
        <span class="match-state ${state.className}">${state.label}</span>
      </td>
      <td>
        <div class="match-cell">
          <strong>${zh(match.home)} vs ${zh(match.away)}</strong>
          <span class="match-meta">${escapeHtml(match.venue)}</span>
        </div>
      </td>
      <td>${prediction ? `<span class="predicted-score">${prediction.homeGoals}-${prediction.awayGoals}</span><div class="real-score">${outcomeText(outcome(prediction.homeGoals, prediction.awayGoals))}</div>` : '<span class="real-score">待产生晋级球队</span>'}</td>
      <td>${real ? `<strong>${real.home}-${real.away}</strong><div class="real-score">${actualResultText(real)}</div>` : '<span class="compare-pending">暂无</span>'}</td>
      <td>${comparison ? scoreComparisonCell(comparison) : '<span class="compare-pending">暂无</span>'}</td>
      <td>${comparison ? outcomeComparisonCell(comparison) : '<span class="compare-pending">暂无</span>'}</td>
      <td>${comparison ? playedErrorCell(comparison, rps) : '<span class="compare-pending">暂无</span>'}</td>
    </tr>`;
  }).join('');
}

function renderTeamPower() {
  const entries = Object.keys(BASE_PROFILES)
    .map(team => [team, powerRating(team)])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 16);

  elements.teamPowerList.innerHTML = entries.map(([team, value]) => `
    <div class="team-row">
      <strong>${zh(team)}</strong>
      <div class="team-power-track"><span style="width:${Math.max(4, value)}%"></span></div>
      <span>${Math.round(value)}</span>
    </div>
  `).join('');

  const top = entries.slice(0, 3).map(([team]) => zh(team)).join('、');
  elements.playerModelSummary.innerHTML = `
    <strong>Elo + Dixon-Coles + 球员薪资代理版</strong>
    <span>已按俱乐部层级、薪资/市场价值指数、明星球员、进攻/防守/策应/门将聚合；当前综合领先：${top}。</span>
  `;
}

function renderStarPlayers() {
  const teams = Object.keys(BASE_PROFILES)
    .map(team => [team, powerRating(team)])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  elements.starPlayerList.innerHTML = `
    <p class="star-note">候选名单用于模型权重展示，不代表 2026 最终官方报名名单。</p>
    ${teams.map(([team]) => {
      const players = STAR_PLAYERS[team] || [];
      return `<div class="star-team">
        <div class="star-team-head">
          <strong>${zh(team)}</strong>
          <span>薪资指数 ${Math.round(marketProfile(team).salary)}</span>
        </div>
        <div class="star-chips">
          ${players.map(([name, role]) => `<span><b>${escapeHtml(name)}</b>${escapeHtml(role)}</span>`).join('')}
        </div>
      </div>`;
    }).join('')}
  `;
}

function predictMatch(match) {
  const home = profile(match.home);
  const away = profile(match.away);
  const homePlayers = aggregatePlayerPool(match.home);
  const awayPlayers = aggregatePlayerPool(match.away);
  const homeMarket = marketProfile(match.home);
  const awayMarket = marketProfile(match.away);
  const elo = eloMatchup(match.home, match.away, match.venue);
  const hostBoost = hostAdvantage(match.home, match.venue);
  const knockoutFactor = match.round >= 4 ? 0.94 : 1;
  const marketTempo = 1 + (homeMarket.starAttack + awayMarket.starAttack - 166) / 900;
  const tempo = clamp(0.88, 1.22, 0.95 + (homePlayers.tempo + awayPlayers.tempo - 150) / 240 + marketTempo - 1);
  const attackHome = weighted(home, {rating:.12, players:.12, coach:.06, tactic:.10, form:.10, experience:.04, attack:.10}) +
    homePlayers.attack * .26 + homePlayers.support * .09 + homeMarket.attackPremium * .13 + elo.homeQuality * .06;
  const attackAway = weighted(away, {rating:.12, players:.12, coach:.06, tactic:.10, form:.10, experience:.04, attack:.10}) +
    awayPlayers.attack * .26 + awayPlayers.support * .09 + awayMarket.attackPremium * .13 + elo.awayQuality * .06;
  const defendHome = weighted(home, {rating:.11, players:.09, coach:.07, tactic:.12, form:.08, defense:.12, experience:.04}) +
    homePlayers.defense * .29 + homePlayers.keeper * .15 + homeMarket.defensePremium * .10 + elo.homeQuality * .05;
  const defendAway = weighted(away, {rating:.11, players:.09, coach:.07, tactic:.12, form:.08, defense:.12, experience:.04}) +
    awayPlayers.defense * .29 + awayPlayers.keeper * .15 + awayMarket.defensePremium * .10 + elo.awayQuality * .05;
  const homeMismatch = mismatchMultiplier(attackHome - defendAway, homeMarket.upside - awayMarket.resilience, elo.homeWin - elo.awayWin);
  const awayMismatch = mismatchMultiplier(attackAway - defendHome, awayMarket.upside - homeMarket.resilience, elo.awayWin - elo.homeWin);
  const collapseHome = defensiveCollapseMultiplier(awayMarket.upside, homeMarket.resilience, awayPlayers.attack - homePlayers.defense);
  const collapseAway = defensiveCollapseMultiplier(homeMarket.upside, awayMarket.resilience, homePlayers.attack - awayPlayers.defense);

  const homeLambda = clamp(0.22, 6.8, 1.22 * Math.exp((attackHome - defendAway) / 34) * hostBoost * knockoutFactor * tempo * homeMismatch * collapseAway);
  const awayLambda = clamp(0.18, 6.4, 1.12 * Math.exp((attackAway - defendHome) / 34) * (2 - hostBoost) * knockoutFactor * tempo * awayMismatch * collapseHome);
  const rho = dixonColesRho(homeLambda, awayLambda, Math.abs(elo.homeWin - elo.awayWin));
  const matrix = normalizeMatrix(scoreMatrix(homeLambda, awayLambda, rho));
  const probs = outcomeProbabilities(matrix);
  const best = recommendedScore(matrix, homeLambda, awayLambda, match.round, {
    edge: attackHome - attackAway,
    defensiveEdge: defendHome - defendAway,
    clubEdge: homePlayers.club - awayPlayers.club,
    salaryEdge: homeMarket.salary - awayMarket.salary,
    starEdge: homeMarket.starAttack - awayMarket.starAttack,
    homeWin: probs.homeWin,
    awayWin: probs.awayWin
  });
  return {
    homeGoals: best.home,
    awayGoals: best.away,
    exactProbability: best.probability,
    homeWin: probs.homeWin,
    draw: probs.draw,
    awayWin: probs.awayWin,
    homeLambda,
    awayLambda,
    edge: attackHome - attackAway,
    defensiveEdge: defendHome - defendAway,
    homePlayers,
    awayPlayers,
    homeMarket,
    awayMarket,
    elo,
    rho,
    tempo
  };
}

function scoreMatrix(homeLambda, awayLambda, rho = 0) {
  const maxGoals = 10;
  const matrix = [];
  for (let h = 0; h <= maxGoals; h += 1) {
    for (let a = 0; a <= maxGoals; a += 1) {
      matrix.push({
        home:h,
        away:a,
        probability:poisson(h, homeLambda) * poisson(a, awayLambda) * dixonColesTau(h, a, homeLambda, awayLambda, rho)
      });
    }
  }
  return matrix;
}

function mostLikelyScore(matrix) {
  return matrix.reduce((best, item) => item.probability > best.probability ? item : best, matrix[0]);
}

function recommendedScore(matrix, homeLambda, awayLambda, round, context) {
  const mode = mostLikelyScore(matrix);
  const expectedHome = Math.max(0, Math.round(homeLambda));
  const expectedAway = Math.max(0, Math.round(awayLambda));
  const targetTotal = homeLambda + awayLambda;
  const candidates = matrix
    .filter(item => item.probability >= mode.probability * 0.48)
    .map(item => {
      const xgDistance = Math.abs(item.home - homeLambda) + Math.abs(item.away - awayLambda);
      const totalDistance = Math.abs(item.home + item.away - targetTotal);
      const drawPenalty = item.home === item.away && Math.abs(homeLambda - awayLambda) > .38 ? .18 : 0;
      const knockoutPenalty = round >= 4 && item.home + item.away > targetTotal + 1.2 ? .22 : 0;
      const modeBonus = item.home === mode.home && item.away === mode.away ? -.08 : 0;
      return {
        ...item,
        rankScore: item.probability * 1.25 - xgDistance * .08 - totalDistance * .04 - drawPenalty - knockoutPenalty + modeBonus
      };
    })
    .sort((a, b) => b.rankScore - a.rankScore);

  const expectedCandidate = candidates.find(item => Math.abs(item.home - expectedHome) <= 1 && Math.abs(item.away - expectedAway) <= 1);
  const selected = expectedCandidate || candidates[0] || mode;
  const strongHome = context.edge > 8 && context.defensiveEdge > 5 && context.clubEdge > 2 && context.homeWin > .50;
  const strongAway = context.edge < -8 && context.defensiveEdge < -5 && context.clubEdge < -2 && context.awayWin > .50;
  const blowoutHome = context.edge > 12 && context.salaryEdge > 10 && context.starEdge > 8 && context.homeWin > .58;
  const blowoutAway = context.edge < -12 && context.salaryEdge < -10 && context.starEdge < -8 && context.awayWin > .58;
  const extremeHome = context.edge > 18 && context.salaryEdge > 20 && context.starEdge > 14 && context.homeWin > .66;
  const extremeAway = context.edge < -18 && context.salaryEdge < -20 && context.starEdge < -14 && context.awayWin > .66;
  const groupStage = round < 4;

  if (groupStage && blowoutHome && homeLambda >= 3.0) {
    return {...selected, home: clamp(4, extremeHome ? 7 : 4, Math.round(homeLambda + (extremeHome ? .8 : .2))), away: Math.min(selected.away, Math.max(0, Math.round(awayLambda - .2)))};
  }
  if (groupStage && blowoutAway && awayLambda >= 2.8) {
    return {...selected, home: Math.min(selected.home, Math.max(0, Math.round(homeLambda - .2))), away: clamp(4, extremeAway ? 7 : 4, Math.round(awayLambda + (extremeAway ? .8 : .2)))};
  }
  if (groupStage && strongHome && selected.home < 3 && selected.home >= selected.away) {
    return {...selected, home: selected.home + 1};
  }
  if (groupStage && strongAway && selected.away < 3 && selected.away >= selected.home) {
    return {...selected, away: selected.away + 1};
  }
  return selected;
}

function outcomeProbabilities(matrix) {
  return matrix.reduce((acc, item) => {
    if (item.home > item.away) acc.homeWin += item.probability;
    else if (item.home === item.away) acc.draw += item.probability;
    else acc.awayWin += item.probability;
    return acc;
  }, {homeWin:0, draw:0, awayWin:0});
}

function comparisonStats(matches) {
  const stats = matches.reduce((acc, match) => {
    const real = scoreFor(match);
    if (!real || !isKnownMatch(match)) return acc;
    const prediction = predictMatch(match);
    const comparison = comparePrediction(prediction, real);
    acc.count += 1;
    acc.resultHits += comparison.outcomeHit ? 1 : 0;
    acc.exactHits += comparison.scoreHit ? 1 : 0;
    acc.totalGoalError += comparison.goalError;
    return acc;
  }, {count:0, resultHits:0, exactHits:0, totalGoalError:0});

  return {
    ...stats,
    resultAccuracy: stats.count ? stats.resultHits / stats.count : 0,
    exactAccuracy: stats.count ? stats.exactHits / stats.count : 0,
    mae: stats.count ? stats.totalGoalError / (stats.count * 2) : 0
  };
}

function comparePrediction(prediction, real) {
  const predictedOutcome = outcome(prediction.homeGoals, prediction.awayGoals);
  const actualOutcome = outcome(real.home, real.away);
  return {
    predictedScore: `${prediction.homeGoals}-${prediction.awayGoals}`,
    actualScore: `${real.home}-${real.away}`,
    predictedOutcome,
    actualOutcome,
    scoreHit: prediction.homeGoals === real.home && prediction.awayGoals === real.away,
    outcomeHit: predictedOutcome === actualOutcome,
    goalError: Math.abs(prediction.homeGoals - real.home) + Math.abs(prediction.awayGoals - real.away)
  };
}

function scoreComparisonCell(comparison) {
  const status = comparison.scoreHit ? '命中' : `未中，误差 ${comparison.goalError} 球`;
  const className = comparison.scoreHit ? 'compare-hit' : 'compare-miss';
  return `<span class="${className}">${status}</span><div class="compare-detail">预测 ${comparison.predictedScore} / 实际 ${comparison.actualScore}</div>`;
}

function outcomeComparisonCell(comparison) {
  const className = comparison.outcomeHit ? 'compare-hit' : 'compare-miss';
  return `<span class="${className}">${comparison.outcomeHit ? '命中' : '未中'}</span><div class="compare-detail">预测 ${outcomeText(comparison.predictedOutcome)} / 实际 ${outcomeText(comparison.actualOutcome)}</div>`;
}

function playedErrorCell(comparison, rps) {
  const quality = comparison.goalError <= 1 ? '接近' : comparison.goalError <= 3 ? '偏差中等' : '偏差较大';
  const className = comparison.goalError <= 1 ? 'error-low' : comparison.goalError <= 3 ? 'error-mid' : 'error-high';
  return `<div class="history-note ${className}">
    <span>${quality}</span>
    <small>进球误差 ${comparison.goalError} 球</small>
    <small>RPS ${rps === null ? '--' : rps.toFixed(3)}</small>
  </div>`;
}

function comparisonRowClass(comparison) {
  if (comparison.scoreHit) return 'row-score-hit';
  if (comparison.outcomeHit) return 'row-outcome-hit';
  return 'row-miss';
}

function historicalSummary(match, prediction) {
  const records = getHistoricalMatches(match.home, match.away);
  if (!records.length) return null;

  const normalized = records.map(record => normalizeHistoryRecord(record, match.home, match.away));
  const totalHome = normalized.reduce((sum, record) => sum + record.homeScore, 0);
  const totalAway = normalized.reduce((sum, record) => sum + record.awayScore, 0);
  const historyOutcomeCounts = normalized.reduce((acc, record) => {
    acc[outcome(record.homeScore, record.awayScore)] += 1;
    return acc;
  }, {H:0, D:0, A:0});
  const topHistoryOutcome = Object.entries(historyOutcomeCounts).sort((a, b) => b[1] - a[1])[0][0];
  const predictedOutcome = outcome(prediction.homeGoals, prediction.awayGoals);
  const avgHome = totalHome / normalized.length;
  const avgAway = totalAway / normalized.length;
  const predictionDistance = Math.abs(prediction.homeGoals - avgHome) + Math.abs(prediction.awayGoals - avgAway);

  return {
    records: normalized,
    count: normalized.length,
    avgHome,
    avgAway,
    historyOutcomeCounts,
    topHistoryOutcome,
    predictedOutcome,
    trendAligned: topHistoryOutcome === predictedOutcome,
    predictionDistance
  };
}

function getHistoricalMatches(home, away) {
  return HISTORICAL_H2H
    .filter(record => (record.home === home && record.away === away) || (record.home === away && record.away === home))
    .sort((a, b) => b.date.localeCompare(a.date));
}

function normalizeHistoryRecord(record, currentHome, currentAway) {
  const sameDirection = record.home === currentHome && record.away === currentAway;
  return {
    date: record.date,
    competition: record.competition,
    home: currentHome,
    away: currentAway,
    homeScore: sameDirection ? record.homeScore : record.awayScore,
    awayScore: sameDirection ? record.awayScore : record.homeScore,
    originalHome: record.home,
    originalAway: record.away,
    originalHomeScore: record.homeScore,
    originalAwayScore: record.awayScore
  };
}

function historyScoreList(records) {
  return `<div class="history-list">
    ${records.slice(0, 4).map(record => `
      <div class="history-match">
        <strong>${record.originalHomeScore}-${record.originalAwayScore}</strong>
        <span>${record.date} ${escapeHtml(zh(record.originalHome))} vs ${escapeHtml(zh(record.originalAway))}</span>
      </div>
    `).join('')}
  </div>`;
}

function historyAverageCell(history) {
  return `<span class="history-average">${history.avgHome.toFixed(1)}-${history.avgAway.toFixed(1)}</span>
    <div class="compare-detail">${history.count} 场，按当前主客视角</div>`;
}

function historyTrendCell(history) {
  const className = history.trendAligned ? 'compare-hit' : 'compare-miss';
  return `<span class="${className}">${history.trendAligned ? '倾向一致' : '倾向不一致'}</span>
    <div class="compare-detail">预测 ${outcomeText(history.predictedOutcome)} / 历史 ${outcomeText(history.topHistoryOutcome)}</div>`;
}

function historyNoteCell(history) {
  const distanceText = history.predictionDistance <= 1.2 ? '接近历史均值' : history.predictionDistance <= 2.4 ? '高于历史均值' : '明显高于历史均值';
  const counts = `主${history.historyOutcomeCounts.H} 平${history.historyOutcomeCounts.D} 客${history.historyOutcomeCounts.A}`;
  return `<div class="history-note">
    <span>${distanceText}</span>
    <small>${counts}</small>
  </div>`;
}

function dixonColesTau(homeGoals, awayGoals, homeLambda, awayLambda, rho) {
  if (homeGoals === 0 && awayGoals === 0) return Math.max(0.2, 1 - homeLambda * awayLambda * rho);
  if (homeGoals === 0 && awayGoals === 1) return Math.max(0.2, 1 + homeLambda * rho);
  if (homeGoals === 1 && awayGoals === 0) return Math.max(0.2, 1 + awayLambda * rho);
  if (homeGoals === 1 && awayGoals === 1) return Math.max(0.2, 1 - rho);
  return 1;
}

function dixonColesRho(homeLambda, awayLambda, winGap) {
  const closeMatch = 1 - clamp(0, 1, winGap / .38);
  const lowScoring = 1 - clamp(0, 1, (homeLambda + awayLambda - 2.1) / 3.2);
  return clamp(-0.12, 0.06, -0.08 * closeMatch * lowScoring + 0.04 * (1 - closeMatch));
}

function normalizeMatrix(matrix) {
  const total = matrix.reduce((sum, item) => sum + item.probability, 0) || 1;
  return matrix.map(item => ({...item, probability:item.probability / total}));
}

function evaluateResults(shouldCalibrate) {
  const parsed = parseChineseResults(elements.resultInput.value);
  if (!parsed.length) {
    elements.testSummary.innerHTML = '没有识别到比分。格式示例：<strong>墨西哥 2-0 南非</strong>。';
    return;
  }

  let resultHits = 0;
  let exactHits = 0;
  let totalAbsError = 0;
  let totalRps = 0;
  const rows = [];

  parsed.forEach(result => {
    explicitScores.set(matchKey(result.home, result.away), {home:result.homeScore, away:result.awayScore});
    const fixture = fixturesByKey.get(matchKey(result.home, result.away)) || {
      home: result.home, away: result.away, round: 1, venue: '', stage: '测试'
    };
    const pred = predictMatch(fixture);
    const actualOutcome = outcome(result.homeScore, result.awayScore);
    const predictedOutcome = outcome(pred.homeGoals, pred.awayGoals);
    totalRps += rankedProbabilityScore(pred, actualOutcome);
    if (actualOutcome === predictedOutcome) resultHits += 1;
    if (pred.homeGoals === result.homeScore && pred.awayGoals === result.awayScore) exactHits += 1;
    totalAbsError += Math.abs(pred.homeGoals - result.homeScore) + Math.abs(pred.awayGoals - result.awayScore);
    rows.push({fixture, result, pred, actualOutcome, predictedOutcome});
  });

  lastEvaluation = {
    count: parsed.length,
    resultHits,
    exactHits,
    resultAccuracy: resultHits / parsed.length,
    exactAccuracy: exactHits / parsed.length,
    mae: totalAbsError / (parsed.length * 2),
    rps: totalRps / parsed.length
  };

  if (shouldCalibrate) {
    rows.forEach(({fixture, result, pred}) => calibrateWithResult(fixture, result, pred));
    saveCalibration();
  }

  elements.testSummary.innerHTML = `
    <strong>${shouldCalibrate ? '已测试并校准。' : '测试完成。'}</strong><br>
    赛果命中：${resultHits}/${parsed.length}（${pct(lastEvaluation.resultAccuracy)}），完全比分：${exactHits}/${parsed.length}（${pct(lastEvaluation.exactAccuracy)}）。<br>
    平均单队进球误差：${lastEvaluation.mae.toFixed(2)} 球，RPS：${lastEvaluation.rps.toFixed(3)}。${shouldCalibrate ? '<br>近期状态、进攻、防守参数已轻微更新。' : ''}
  `;
  render();
}

function calibrateWithResult(fixture, result, pred) {
  const homeProfile = mutableProfile(fixture.home);
  const awayProfile = mutableProfile(fixture.away);
  const actualDiff = result.homeScore - result.awayScore;
  const predictedDiff = pred.homeGoals - pred.awayGoals;
  const diffError = clamp(-3, 3, actualDiff - predictedDiff);
  const homeAttackError = clamp(-3, 3, result.homeScore - pred.homeGoals);
  const awayAttackError = clamp(-3, 3, result.awayScore - pred.awayGoals);

  homeProfile.form = clamp(45, 99, homeProfile.form + diffError * 1.4 + homeAttackError * 0.5);
  awayProfile.form = clamp(45, 99, awayProfile.form - diffError * 1.4 + awayAttackError * 0.5);
  homeProfile.attack = clamp(45, 99, homeProfile.attack + homeAttackError * 0.8);
  awayProfile.attack = clamp(45, 99, awayProfile.attack + awayAttackError * 0.8);
  homeProfile.defense = clamp(45, 99, homeProfile.defense - awayAttackError * 0.6);
  awayProfile.defense = clamp(45, 99, awayProfile.defense - homeAttackError * 0.6);
}

function parseChineseResults(text) {
  return text.split(/\n+/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const normalized = line.replace(/\s+/g, ' ');
      const match = normalized.match(/^(.+?)\s+(\d+)\s*(?:[-–:：]|比)\s*(\d+)\s+(.+)$/);
      if (!match) return null;
      const home = canonicalTeam(match[1].trim());
      const away = canonicalTeam(match[4].trim());
      if (!home || !away) return null;
      return {home, away, homeScore:Number(match[2]), awayScore:Number(match[3])};
    })
    .filter(Boolean);
}

function sampleRecentScores() {
  return FIXTURES
    .map(match => ({match, score:scoreFor(match)}))
    .filter(({score}) => score !== null)
    .map(({match, score}) => `${zh(match.home)} ${score.home}-${score.away} ${zh(match.away)}`)
    .join('\n');
}

function outcomeBars(prediction) {
  return `<div class="outcome-bars">
    ${bar('主', prediction.homeWin)}
    ${bar('平', prediction.draw)}
    ${bar('客', prediction.awayWin)}
  </div>`;
}

function bar(label, value) {
  return `<div class="bar"><span>${label}</span><div class="bar-track"><span class="bar-fill" style="width:${pct(value)}"></span></div><b>${pct(value)}</b></div>`;
}

function factorTags(match, pred) {
  const tags = [];
  if (hostAdvantage(match.home, match.venue) > 1.03) tags.push('主办国加成');
  if (Math.abs(pred.edge) > 5) tags.push(pred.edge > 0 ? '球员池火力主队强' : '球员池火力客队强');
  if (Math.abs(pred.defensiveEdge) > 5) tags.push(pred.defensiveEdge > 0 ? '防线/门将主队优' : '防线/门将客队优');
  if (Math.abs(pred.homeMarket.salary - pred.awayMarket.salary) > 10) tags.push('薪资价值差明显');
  if (Math.abs(pred.homeMarket.starAttack - pred.awayMarket.starAttack) > 8) tags.push('明星进攻点');
  if (Math.max(pred.homePlayers.club, pred.awayPlayers.club) > 104) tags.push('高强度俱乐部班底');
  if (Math.max(pred.homePlayers.support, pred.awayPlayers.support) > 86) tags.push('策应创造强');
  if (Math.max(pred.homeWin, pred.draw, pred.awayWin) < 0.46) tags.push('不确定性高');
  if (match.round >= 4) tags.push('淘汰赛偏保守');
  if (!tags.length) tags.push('实力接近');
  return `<div class="factor-tags">${tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}</div>`;
}

function scoreFor(match) {
  const explicit = explicitScores.get(matchKey(match.home, match.away));
  if (explicit) return explicit;
  if (match.homeScore !== null && match.awayScore !== null) return {home:match.homeScore, away:match.awayScore};
  return null;
}

function profile(team) {
  const base = BASE_PROFILES[team];
  if (!base) return objectProfile([68,68,68,68,68,68,68,68]);
  return {...objectProfile(base), ...(calibratedProfiles[team] || {})};
}

function marketProfile(team) {
  const teamProfile = profile(team);
  const salary = TEAM_SALARY_INDEX[team] || clamp(50, 90, teamProfile.players * .72 + teamProfile.rating * .18);
  const [starAttack, starSupport, starDefense] = STAR_IMPACT[team] || [
    clamp(55, 88, teamProfile.attack),
    clamp(55, 88, teamProfile.tactic),
    clamp(55, 88, teamProfile.defense)
  ];
  const logSalary = 70 + Math.log1p(Math.max(0, salary - 50)) * 8.6;
  const starConcentration = clamp(0, 1, (Math.max(starAttack, starSupport, starDefense) - salary) / 18);
  const salaryPremium = clamp(50, 103, logSalary);
  return {
    salary,
    salaryPremium,
    starAttack,
    starSupport,
    starDefense,
    attackPremium: salaryPremium * .46 + starAttack * .38 + starSupport * .16,
    defensePremium: salaryPremium * .38 + starDefense * .44 + starSupport * .18,
    upside: salaryPremium * .35 + starAttack * .45 + starSupport * .20 + starConcentration * 9,
    resilience: salaryPremium * .30 + starDefense * .48 + starSupport * .22
  };
}

function eloMatchup(homeTeam, awayTeam, venue) {
  const homeProfile = profile(homeTeam);
  const awayProfile = profile(awayTeam);
  const homeElo = 1320 + homeProfile.rating * 8.2 + homeProfile.experience * 2.1 + homeProfile.form * 1.7 +
    (hostAdvantage(homeTeam, venue) > 1 ? 45 : 0);
  const awayElo = 1320 + awayProfile.rating * 8.2 + awayProfile.experience * 2.1 + awayProfile.form * 1.7;
  const homeWinRaw = 1 / (1 + Math.pow(10, -(homeElo - awayElo) / 420));
  const drawBase = clamp(.16, .34, .29 - Math.abs(homeWinRaw - .5) * .22);
  const nonDraw = 1 - drawBase;
  return {
    homeElo,
    awayElo,
    homeQuality: clamp(55, 100, (homeElo - 1780) / 8 + 78),
    awayQuality: clamp(55, 100, (awayElo - 1780) / 8 + 78),
    homeWin: homeWinRaw * nonDraw,
    draw: drawBase,
    awayWin: (1 - homeWinRaw) * nonDraw
  };
}

function mismatchMultiplier(edge, marketEdge, winEdge) {
  const edgeBoost = clamp(-0.10, 0.22, edge / 120);
  const marketBoost = clamp(-0.08, 0.18, marketEdge / 160);
  const winBoost = clamp(-0.06, 0.16, winEdge / 2.5);
  return clamp(0.82, 1.42, 1 + edgeBoost + marketBoost + winBoost);
}

function defensiveCollapseMultiplier(attackingUpside, defensiveResilience, playerGap) {
  const gap = attackingUpside - defensiveResilience + playerGap * .16;
  if (gap < 8) return 1;
  return clamp(1, 1.34, 1 + Math.pow((gap - 7) / 45, 1.28));
}

function rankedProbabilityScore(prediction, actualOutcome) {
  const forecast = [prediction.homeWin, prediction.draw, prediction.awayWin];
  const observed = actualOutcome === 'H' ? [1,0,0] : actualOutcome === 'D' ? [0,1,0] : [0,0,1];
  let score = 0;
  let forecastCum = 0;
  let observedCum = 0;
  for (let index = 0; index < forecast.length - 1; index += 1) {
    forecastCum += forecast[index];
    observedCum += observed[index];
    score += Math.pow(forecastCum - observedCum, 2);
  }
  return score / 2;
}

function generatePlayerPool(team) {
  const teamProfile = profile(team);
  const exposure = CLUB_EXPOSURE[team] || defaultClubExposure(teamProfile.rating);
  const market = marketProfile(team);
  return PLAYER_ROLE_BLUEPRINTS.map((blueprint, index) => {
    const tierIndex = pickTierIndex(exposure, index / PLAYER_ROLE_BLUEPRINTS.length);
    const tier = CLUB_TIERS[tierIndex];
    const roleBias = blueprint.role === 'ST' || blueprint.role === 'WG' || blueprint.role === 'AM'
      ? teamProfile.attack
      : blueprint.role === 'GK'
        ? (teamProfile.defense + teamProfile.experience) / 2
        : blueprint.role === 'CM'
          ? (teamProfile.tactic + teamProfile.players) / 2
          : teamProfile.defense;
    const salaryLift = (market.salaryPremium - 82) * .12;
    const starLift = (blueprint.role === 'ST' || blueprint.role === 'WG' || blueprint.role === 'AM')
      ? (market.starAttack - teamProfile.attack) * .18
      : blueprint.role === 'CM'
        ? (market.starSupport - teamProfile.tactic) * .15
        : (market.starDefense - teamProfile.defense) * .14;
    const overall = clamp(48, 99, (teamProfile.players * .38 + teamProfile.rating * .22 + roleBias * .28 + teamProfile.form * .12) * tier.multiplier + salaryLift + starLift);
    return {
      name: `${zh(team)}${blueprint.label}`,
      role: blueprint.role,
      clubTier: tier.label,
      starterShare: blueprint.share,
      overall,
      attack: clamp(35, 99, overall * .56 + teamProfile.attack * .44 + blueprint.attack * 30),
      defense: clamp(35, 99, overall * .54 + teamProfile.defense * .46 + blueprint.defense * 30),
      support: clamp(35, 99, overall * .52 + teamProfile.tactic * .48 + blueprint.support * 30),
      keeper: clamp(20, 99, blueprint.keeper ? overall * .62 + teamProfile.defense * .38 + 8 : 38),
      clubMultiplier: tier.multiplier
    };
  });
}

function aggregatePlayerPool(team) {
  const pool = generatePlayerPool(team);
  const totals = pool.reduce((acc, player) => {
    const weight = player.starterShare * player.clubMultiplier;
    acc.weight += weight;
    acc.attack += player.attack * weight;
    acc.defense += player.defense * weight;
    acc.support += player.support * weight;
    acc.keeper += player.keeper * weight;
    acc.club += player.clubMultiplier * 100 * weight;
    acc.tempo += (player.attack * .45 + player.support * .35 + player.defense * .20) * weight;
    return acc;
  }, {weight:0, attack:0, defense:0, support:0, keeper:0, club:0, tempo:0});

  return {
    attack: totals.attack / totals.weight,
    defense: totals.defense / totals.weight,
    support: totals.support / totals.weight,
    keeper: totals.keeper / totals.weight,
    club: totals.club / totals.weight,
    tempo: totals.tempo / totals.weight,
    topTierShare: (CLUB_EXPOSURE[team] || defaultClubExposure(profile(team).rating))[0]
  };
}

function defaultClubExposure(rating) {
  const elite = clamp(.02, .55, (rating - 62) / 80);
  const top = clamp(.18, .42, (rating - 58) / 90);
  const rotation = clamp(.22, .44, .34 - elite / 6);
  return normalizeExposure([elite, top, rotation, 1 - elite - top - rotation]);
}

function normalizeExposure(values) {
  const fixed = values.map(value => Math.max(.02, value));
  const sum = fixed.reduce((acc, value) => acc + value, 0);
  return fixed.map(value => value / sum);
}

function pickTierIndex(exposure, percentile) {
  let acc = 0;
  for (let index = 0; index < exposure.length; index += 1) {
    acc += exposure[index];
    if (percentile <= acc) return index;
  }
  return exposure.length - 1;
}

function mutableProfile(team) {
  calibratedProfiles[team] = {...profile(team)};
  return calibratedProfiles[team];
}

function objectProfile(values) {
  return PROFILE_KEYS.reduce((acc, key, index) => {
    acc[key] = values[index];
    return acc;
  }, {});
}

function weighted(profileObject, weights) {
  return Object.entries(weights).reduce((sum, [key, weight]) => sum + profileObject[key] * weight, 0);
}

function powerRating(team) {
  const teamProfile = profile(team);
  return weighted(teamProfile, {
    rating:.30, players:.22, coach:.09, tactic:.11, form:.11, defense:.08, experience:.04, attack:.05
  });
}

function hostAdvantage(team, venue) {
  if (team === 'Mexico' && /Mexico|Guadalajara|Monterrey/.test(venue)) return 1.09;
  if (team === 'USA' && /Los Angeles|Seattle|Dallas|Boston|Houston|Atlanta|Philadelphia|Kansas|Miami|New York|San Francisco/.test(venue)) return 1.08;
  if (team === 'Canada' && /Toronto|Vancouver|BC Place/.test(venue)) return 1.08;
  return 1.00;
}

function canonicalTeam(value) {
  if (BASE_PROFILES[value]) return value;
  if (ALIASES[value]) return ALIASES[value];
  const lower = value.toLowerCase();
  const direct = Object.keys(BASE_PROFILES).find(team => team.toLowerCase() === lower);
  if (direct) return direct;
  const zhHit = Object.entries(TEAM_ZH).find(([, name]) => name === value);
  return zhHit ? zhHit[0] : null;
}

function matchKey(home, away) {
  return `${home}__${away}`;
}

function isKnownMatch(match) {
  return !/^\d|To be announced/.test(match.home) && !/^\d|To be announced/.test(match.away);
}

function isUnplayedKnownMatch(match) {
  return isKnownMatch(match) && !scoreFor(match);
}

function matchStateInfo(match, now = new Date()) {
  if (scoreFor(match)) return {label:'已完赛', className:'state-played'};
  if (!isKnownMatch(match)) return {label:'待定', className:'state-pending'};
  if (new Date(match.date) <= now) return {label:'进行中/待完赛', className:'state-live'};
  return {label:'未开赛', className:'state-upcoming'};
}

function stageLabel(stage) {
  return {
    'Group A':'A组', 'Group B':'B组', 'Group C':'C组', 'Group D':'D组',
    'Group E':'E组', 'Group F':'F组', 'Group G':'G组', 'Group H':'H组',
    'Group I':'I组', 'Group J':'J组', 'Group K':'K组', 'Group L':'L组',
    'Round of 32':'32强', 'Round of 16':'16强', 'Quarter-final':'1/4决赛',
    'Semi-final':'半决赛', 'Third-place match':'季军赛', Final:'决赛'
  }[stage] || stage;
}

function zh(team) {
  return TEAM_ZH[team] || team;
}

function actualResultText(score) {
  const result = outcome(score.home, score.away);
  return outcomeText(result);
}

function outcome(homeScore, awayScore) {
  if (homeScore > awayScore) return 'H';
  if (homeScore < awayScore) return 'A';
  return 'D';
}

function outcomeText(value) {
  return value === 'H' ? '主胜' : value === 'A' ? '客胜' : '平局';
}

function poisson(k, lambda) {
  return Math.exp(-lambda) * Math.pow(lambda, k) / factorial(k);
}

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i += 1) result *= i;
  return result;
}

function pct(value) {
  return `${Math.round(value * 100)}%`;
}

function clamp(min, max, value) {
  return Math.min(max, Math.max(min, value));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  }[char]));
}

function normalizeSearch(value) {
  return String(value || '').trim().toLowerCase().replace(/\s+/g, '');
}

function loadCalibration() {
  try {
    return JSON.parse(localStorage.getItem('wc2026-calibration') || '{}');
  } catch {
    return {};
  }
}

function saveCalibration() {
  localStorage.setItem('wc2026-calibration', JSON.stringify(calibratedProfiles));
}
