// Row format: [city, university, field (D = Derecho, E = Economía), plazas, meses, nivel, lifestyle, size, citylife, difficulty, prestige]
// "|" in nivel = line break. Ratings are 1-5 (difficulty: 5 = hardest).
const FLAGS = {
  "Alemania": "🇩🇪", "Austria": "🇦🇹", "Bélgica": "🇧🇪", "Chipre": "🇨🇾", "Dinamarca": "🇩🇰",
  "Eslovenia": "🇸🇮", "Finlandia": "🇫🇮", "Francia": "🇫🇷", "Grecia": "🇬🇷", "Hungría": "🇭🇺",
  "Irlanda": "🇮🇪", "Italia": "🇮🇹", "Letonia": "🇱🇻", "Lituania": "🇱🇹", "Noruega": "🇳🇴",
  "Paises Bajos": "🇳🇱", "Polonia": "🇵🇱", "Portugal": "🇵🇹", "Reino Unido": "🇬🇧",
  "República Checa": "🇨🇿", "Suecia": "🇸🇪", "Suiza": "🇨🇭"
};

const RAW = {
  "Alemania": [
    ["Aachen","RWTH Aachen","E",3,5,"Inglés|Alemán (B2)",2,5,4,4,4],
    ["Berlin","FU Berlin","E",3,10,"Inglés|Alemán (B2)",2,4,5,3,4],
    ["Berlin","HU Berlin","E",5,5,"Inglés|Alemán (B2)",2,4,5,4,4],
    ["Frankfurt","Goethe Uni Frankfurt","E",2,5,"Inglés|Alemán (B2)",3,5,4,3,3],
    ["Freiburg","Uni Freiburg","E",3,5,"Inglés|Alemán (C1)",3,3,3,3,4],
    ["Freiburg","Uni Freiburg","E",2,9,"Inglés|Alemán (C1)",3,3,3,3,4],
    ["Konstanz","Uni Konstanz","E",8,10,"Inglés|Alemán (B2)",3,2,3,3,3],
    ["Köln","UoC (Köln)","D",6,10,"Inglés|Alemán (B1)",3,5,4,3,3],
    ["Köln","UoC (Köln)","E",4,10,"Inglés|Alemán (B2)",3,5,4,3,3],
    ["Mannheim","Uni Mannheim","E",15,10,"Inglés|Alemán (B2)",4,2,3,4,4],
    ["Munich","LMU Munich","E",4,9,"Inglés|Alemán (B2)",4,5,4,4,5],
    ["Munich","TUM","E",2,9,"Inglés|Alemán (B2)",3,5,4,4,5],
    ["Munich","TUM","E",5,10,"Inglés|Alemán (B2)",3,5,4,4,5],
    ["Munich","TUM","E",2,12,"Inglés|Alemán (B2)",3,5,4,4,5],
    ["Münster","WWU Münster","D",4,10,"Alemán (B1)",3,5,3,3,3],
    ["Oestrich-Winkel","EBS","D",4,5,"Inglés",5,1,2,4,3],
    ["Regensburg","Uni Regensburg","D",2,5,"Inglés|Alemán (B2)",3,3,4,3,3],
    ["Regensburg","Uni Regensburg","E",4,5,"Inglés|Alemán (B2)",3,3,4,3,3]
  ],
  "Austria": [
    ["Graz","Uni Graz","E",3,9,"Inglés|Alemán (B2)",3,4,3,3,3],
    ["Vienna","Uni Wien","D",4,5,"Inglés|Alemán (B2)",3,5,5,3,4],
    ["Vienna","Uni Wien","E",1,9,"Inglés|Alemán (B2)",3,5,5,3,4],
    ["Vienna","WU Wien","E",3,5,"Inglés|Alemán (B2)",4,3,5,4,4]
  ],
  "Bélgica": [
    ["Antwerp","UAntwerp","E",6,5,"Inglés",3,3,4,3,3],
    ["Brussels","ULB","D",6,5,"Francés",3,3,4,3,3],
    ["Brussels","ULB","E",6,5,"Inglés",3,3,4,3,3],
    ["Louvain-la-Neuve","UCLouvain","E",6,5,"Inglés|Francés",3,4,3,3,3]
  ],
  "Chipre": [
    ["Nicosia","UCY","E",4,5,"Inglés",3,2,2,2,2]
  ],
  "Dinamarca": [
    ["Copenhagen","CBS","E",2,5,"Inglés",4,3,4,4,4],
    ["Odense","SDU","E",2,5,"Inglés",3,4,3,3,3]
  ],
  "Eslovenia": [
    ["Ljubljana","Uni Ljubljana","D",2,5,"Inglés",3,4,4,3,3],
    ["Ljubljana","Uni Ljubljana","E",1,5,"Inglés",3,4,4,3,3]
  ],
  "Finlandia": [
    ["Espoo","Aalto","E",2,5,"Inglés",3,3,4,4,4],
    ["Joensuu","UEF","D",6,5,"Inglés",2,2,2,3,2],
    ["Turku","Åbo Akademi","D",2,9,"Inglés",3,1,3,3,2]
  ],
  "Francia": [
    ["Aix-en-Provence","Aix-Marseille","D",5,10,"Francés",3,5,4,3,3],
    ["Aix-en-Provence","Aix-Marseille","E",4,9,"Inglés|Francés",3,5,4,3,3],
    ["Bordeaux","Uni Bordeaux","D",6,9,"Francés",3,5,4,3,3],
    ["Cachan","ENS Paris-Saclay","E",4,9,"Francés",4,1,3,5,4],
    ["Créteil","UPEC","E",2,9,"Inglés|Francés",3,3,4,3,2],
    ["Lille","Uni Lille","D",2,5,"Inglés|Francés",3,5,3,3,3],
    ["Lille","Univ. Catholique Lille","D",2,5,"Inglés|Francés",3,4,3,3,2],
    ["Montpellier","Uni Montpellier","D",3,9,"Francés",3,5,4,3,3],
    ["Nanterre","Paris Nanterre","D",9,9,"Francés",3,4,4,3,3],
    ["Nice","Uni Côte d'Azur","D",6,5,"Francés",3,4,4,3,3],
    ["Paris","Panthéon-Assas (Paris II)","D",5,9,"Francés",4,3,4,4,4],
    ["Paris","Panthéon-Sorbonne (Paris I)","E",4,9,"Francés",3,4,4,3,4],
    ["Paris-Saclay","Paris-Saclay","D",1,10,"Francés",3,4,3,4,4],
    ["Paris-Saclay","Paris-Saclay","E",4,10,"Francés",3,4,3,4,4],
    ["Toulouse","Toulouse Capitole","D",2,10,"Francés",3,3,4,3,3],
    ["Toulouse","Toulouse Capitole","E",2,10,"Inglés|Francés",3,3,4,3,3],
    ["Versailles","UVSQ","D",6,5,"Francés",3,3,3,3,2]
  ],
  "Grecia": [
    ["Athens","NKUA","D",6,5,"Inglés",3,5,4,3,3]
  ],
  "Hungría": [
    ["Budapest","ELTE","D",2,5,"Inglés",3,4,5,3,3]
  ],
  "Irlanda": [
    ["Dublin","Trinity College Dublin","D",4,5,"Inglés",4,3,4,4,5],
    ["Dublin","UCD","D",5,9,"Inglés",3,4,4,3,4]
  ],
  "Italia": [
    ["Bologna","Uni Bologna","D",3,5,"Inglés|Italiano (A2)",3,5,5,3,4],
    ["Brescia","Uni Brescia","D",2,5,"Italiano (B1)",3,3,3,3,2],
    ["Cagliari","Uni Cagliari","D",2,5,"Inglés|Italiano (A2)",3,4,3,2,2],
    ["Caserta","Vanvitelli","D",2,10,"Italiano (B1)",3,3,3,2,2],
    ["Ferrara","Uni Ferrara","E",1,9,"Inglés|Italiano (B2)",3,4,3,3,2],
    ["Florence","Uni Firenze","D",2,5,"Inglés|Italiano (B1)",3,5,5,3,3],
    ["Genoa","Uni Genova","D",3,6,"Inglés|Italiano (B1)",3,4,3,3,2],
    ["Messina","Uni Messina","D",1,5,"Inglés|Italiano (B1)",2,3,3,2,2],
    ["Milan","Bocconi","D",4,5,"Inglés|Italiano (B1)",5,2,5,5,5],
    ["Milan","Bocconi","E",6,5,"Inglés|Italiano (B1)",5,2,5,5,5],
    ["Milan","Cattolica Milano","D",3,9,"Inglés|Italiano (B2)",4,4,5,3,3],
    ["Milan","Uni Milano (Statale)","E",2,6,"Inglés|Italiano (B2)",3,5,5,3,3],
    ["Milan","Uni Milano-Bicocca","E",6,9,"Italiano (B1)",3,4,5,3,2],
    ["Modena","UniModena","D",4,5,"Italiano (B1)",3,3,3,3,2],
    ["Modena","UniModena","E",2,6,"Italiano (B1)",3,3,3,3,2],
    ["Naples","Federico II","D",2,9,"Italiano (B1)",3,5,4,3,3],
    ["Naples","Parthenope","E",2,5,"Inglés|Italiano (B1)",3,3,4,2,2],
    ["Padua","Uni Padova","E",2,9,"Inglés|Italiano (A2)",3,5,4,3,4],
    ["Palermo","Uni Palermo","D",4,9,"Italiano (B1)",3,5,4,2,2],
    ["Parma","Uni Parma","D",3,6,"Italiano (B1)",3,4,3,3,2],
    ["Pavia","Uni Pavia","D",2,6,"Italiano (B1)",3,3,3,3,3],
    ["Perugia","Uni Perugia","D",10,9,"Italiano (B1)",3,3,3,3,2],
    ["Pisa","Uni Pisa","D",8,10,"Italiano (B1)",3,5,4,3,3],
    ["Rome","LUISS","D",2,5,"Inglés|Italiano (B2)",5,1,5,4,4],
    ["Rome","LUISS","E",2,5,"Inglés|Italiano (B2)",5,1,5,4,4],
    ["Rome","LUMSA","D",2,9,"Inglés|Italiano (B1)",3,2,5,3,2],
    ["Rome","Roma Tre","D",3,5,"Italiano (B1)",3,4,5,3,2],
    ["Rome","Roma Tre","E",3,5,"Italiano (B1)",3,4,5,3,2],
    ["Rome","Sapienza","D",4,5,"Inglés|Italiano (B1)",3,5,5,3,4],
    ["Rome","Sapienza","E",6,5,"Inglés|Italiano (B1)",3,5,5,3,4],
    ["Rome","Tor Vergata","E",4,5,"Inglés|Italiano (B1)",3,4,5,3,3],
    ["Salerno","Uni Salerno","D",2,6,"Italiano (A2)",2,3,3,2,2],
    ["Siena","Uni Siena","D",4,9,"Inglés|Italiano (B1)",3,3,3,3,3],
    ["Trieste","Uni Trieste","D",3,9,"Italiano (B1)",3,3,3,3,2],
    ["Turin","Uni Torino","D",8,5,"Inglés|Italiano (B1)",3,5,4,3,3]
  ],
  "Letonia": [
    ["Riga","RSU","D",4,5,"Inglés",3,2,4,2,2],
    ["Riga","SSE Riga","E",2,5,"Inglés",4,1,4,4,3]
  ],
  "Lituania": [
    ["Kaunas","VMU","D",2,5,"Inglés",3,2,3,2,2]
  ],
  "Noruega": [
    ["Trondheim","NTNU","E",6,5,"Inglés",2,5,3,3,3]
  ],
  "Paises Bajos": [
    ["Amsterdam","UvA","E",6,10,"Inglés",3,5,4,3,4],
    ["Maastricht","Maastricht Uni","D",4,5,"Inglés",3,3,4,3,4],
    ["Maastricht","Maastricht Uni","E",8,9,"Inglés",3,3,4,3,4],
    ["Rotterdam","EUR (Erasmus)","E",8,5,"Inglés",3,4,5,3,4],
    ["Tilburg","Tilburg Uni","E",4,5,"Inglés",3,3,3,3,3],
    ["Utrecht","Utrecht Uni","E",2,10,"Inglés",3,4,4,3,4]
  ],
  "Polonia": [
    ["Białystok","Uni Białystok","D",6,10,"Inglés",2,2,2,2,2],
    ["Warsaw","Kozminski","D",4,5,"Inglés",4,2,4,3,3],
    ["Warsaw","SGH Warsaw","E",4,5,"Inglés",4,2,4,4,3],
    ["Warsaw","Uni Warsaw","D",2,9,"Inglés",3,4,4,3,3]
  ],
  "Portugal": [
    ["Coimbra","Uni Coimbra","D",2,9,"Portugués (B2)",3,3,3,3,3],
    ["Lisbon","Católica Lisbon / Porto","D",2,6,"Inglés|Portugués (B1)",4,2,5,3,3],
    ["Lisbon","Católica Lisbon / Porto","E",2,5,"Inglés|Portugués (C2)",4,2,5,3,3],
    ["Lisbon","NOVA Lisbon","E",1,5,"Inglés|Portugués (A2)",3,3,5,3,3],
    ["Lisbon","NOVA Lisbon","E",1,5,"Inglés|Portugués (A2)",3,3,5,3,3],
    ["Lisbon","Uni Lisboa","D",2,10,"Portugués (B1)",3,5,5,3,3],
    ["Porto","Uni Porto","E",3,5,"Inglés",3,4,5,3,3]
  ],
  "Reino Unido": [
    ["Bristol","Bristol Uni","D",4,10,"Inglés",3,4,4,4,4],
    ["Canterbury","Kent Uni","E",2,9,"Inglés",3,3,3,3,3],
    ["Coventry","Coventry Uni","E",8,5,"Inglés",2,4,3,2,2],
    ["Coventry","Coventry Uni","E",8,5,"Inglés",2,4,3,2,2],
    ["Coventry","Warwick","E",2,9,"Inglés",3,4,3,4,5],
    ["Edinburgh","Heriot-Watt","E",1,10,"Inglés",3,2,4,3,3],
    ["Kingston","Kingston Uni","E",2,10,"Inglés",2,3,4,2,2],
    ["London","UCL","D",6,9,"Inglés",3,5,4,4,5],
    ["London","UCL","E",4,5,"Inglés",3,5,4,4,5],
    ["Loughborough","Loughborough","E",8,5,"Inglés",3,3,3,3,3],
    ["Loughborough","Loughborough","E",8,5,"Inglés",3,3,3,3,3],
    ["Ormskirk","Edge Hill","D",2,9,"Inglés",2,2,2,2,2],
    ["Sheffield","Sheffield Uni","E",4,5,"Inglés",3,4,4,3,4]
  ],
  "República Checa": [
    ["Brno","Masaryk Uni","D",4,5,"Inglés",3,4,5,3,3],
    ["Prague","AMBIS","E",2,5,"Inglés",2,1,4,2,1],
    ["Prague","Charles Uni","D",2,9,"Inglés",3,5,5,3,4]
  ],
  "Suecia": [
    ["Linköping","Linköping Uni","E",2,5,"Inglés",2,4,3,3,3],
    ["Örebro","Örebro Uni","D",4,5,"Inglés",2,3,2,3,2]
  ],
  "Suiza": [
    ["Bern","Uni Bern","E",2,9,"Inglés|Alemán (B2)",3,3,3,3,3],
    ["Fribourg","Uni Fribourg","D",2,10,"Francés|Alemán (B1)",3,2,2,3,3],
    ["Lausanne","Uni Lausanne","D",1,10,"Francés",3,3,3,3,3],
    ["Lausanne","Uni Lausanne","E",3,10,"Francés",3,3,3,3,3],
    ["Lucerne","Uni Luzern","D",2,5,"Inglés|Alemán (B2)",3,1,2,3,2],
    ["Zurich","UZH","D",3,5,"Inglés|Alemán (C1)",3,4,4,4,4]
  ]
};

const data = [];
for (const [country, rows] of Object.entries(RAW)) {
  for (const r of rows) {
    data.push({
      country, flag: FLAGS[country],
      city: r[0], university: r[1],
      field: r[2] === "D" ? "Derecho" : "Economía",
      fieldClass: r[2] === "D" ? "derecho" : "economia",
      plazas: r[3], meses: r[4], nivel: r[5].replace("|", "\n"),
      lifestyle: r[6], size: r[7], citylife: r[8], difficulty: r[9], prestige: r[10]
    });
  }
}

// Overall score: difficulty is inverted (less difficult = better)
data.forEach(d => {
  d.overall = Math.round(((d.lifestyle + d.size + d.citylife + (6 - d.difficulty) + d.prestige) / 5) * 100) / 100;
});
const sortedScores = data.map(d => d.overall).sort((a, b) => b - a);
data.forEach(d => { d.rank = sortedScores.indexOf(d.overall) + 1; }); // ties share the same rank

// Universities with a CUNEF agreement (shows an orange CUNEF tag)
const CUNEF = new Set([
  "Uni Pavia", "Uni Firenze", "Cattolica Milano", "Roma Tre", "Uni Pisa", "Kozminski",
  "VMU", "UCD", "Linköping Uni", "Univ. Catholique Lille", "Uni Bordeaux",
  "Toulouse Capitole", "Aix-Marseille", "EBS", "WWU Münster"
]);
data.forEach(d => { d.cunef = CUNEF.has(d.university); });
