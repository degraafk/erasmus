// UC3M Erasmus 2026-27 offer (Anexo 1): totals over ALL degrees.
// uni = all plazas at that university code, cityTotal = all plazas in every university sharing the code's city prefix.
const UC3M = {
 "AMBIS": {
  "code": "CZ PRAHA11",
  "city": "PRAHA",
  "uni": 2,
  "cityTotal": 11
 },
 "Aalto": {
  "code": "SF ESPOO12",
  "city": "ESPOO",
  "uni": 12,
  "cityTotal": 12
 },
 "Aix-Marseille": {
  "code": "F MARSEIL84",
  "city": "MARSEIL",
  "uni": 9,
  "cityTotal": 21
 },
 "Bocconi": {
  "code": "I MILANO04",
  "city": "MILANO",
  "uni": 22,
  "cityTotal": 55
 },
 "Bristol Uni": {
  "code": "UK BRISTOL01",
  "city": "BRISTOL",
  "uni": 4,
  "cityTotal": 4
 },
 "CBS": {
  "code": "DK KOBENHA05",
  "city": "KOBENHA",
  "uni": 8,
  "cityTotal": 8
 },
 "Cattolica Milano": {
  "code": "I MILANO03",
  "city": "MILANO",
  "uni": 3,
  "cityTotal": 55
 },
 "Católica Lisbon / Porto": {
  "code": "P LISBOA01",
  "city": "LISBOA",
  "uni": 8,
  "cityTotal": 33
 },
 "Charles Uni": {
  "code": "CZ PRAHA07",
  "city": "PRAHA",
  "uni": 5,
  "cityTotal": 11
 },
 "Coventry Uni": {
  "code": "UK COVENTR02",
  "city": "COVENTR",
  "uni": 24,
  "cityTotal": 26
 },
 "EBS": {
  "code": "D OESTRIC01",
  "city": "OESTRIC",
  "uni": 7,
  "cityTotal": 7
 },
 "ELTE": {
  "code": "HU BUDAPES01",
  "city": "BUDAPES",
  "uni": 8,
  "cityTotal": 14
 },
 "ENS Paris-Saclay": {
  "code": "F CACHAN03",
  "city": "CACHAN",
  "uni": 4,
  "cityTotal": 4
 },
 "EUR (Erasmus)": {
  "code": "NL ROTTERD01",
  "city": "ROTTERD",
  "uni": 18,
  "cityTotal": 18
 },
 "Edge Hill": {
  "code": "UK ORMSKIR01",
  "city": "ORMSKIR",
  "uni": 2,
  "cityTotal": 2
 },
 "FU Berlin": {
  "code": "D BERLIN01",
  "city": "BERLIN",
  "uni": 7,
  "cityTotal": 16
 },
 "Federico II": {
  "code": "I NAPOLI01",
  "city": "NAPOLI",
  "uni": 3,
  "cityTotal": 7
 },
 "Goethe Uni Frankfurt": {
  "code": "D FRANKFU01",
  "city": "FRANKFU",
  "uni": 2,
  "cityTotal": 2
 },
 "HU Berlin": {
  "code": "D BERLIN13",
  "city": "BERLIN",
  "uni": 9,
  "cityTotal": 16
 },
 "Heriot-Watt": {
  "code": "UK EDINBUR02",
  "city": "EDINBUR",
  "uni": 4,
  "cityTotal": 4
 },
 "Kent Uni": {
  "code": "UK CANTERB01",
  "city": "CANTERB",
  "uni": 2,
  "cityTotal": 2
 },
 "Kingston Uni": {
  "code": "UK KINGSTO01",
  "city": "KINGSTO",
  "uni": 4,
  "cityTotal": 4
 },
 "Kozminski": {
  "code": "PL WARSZAW21",
  "city": "WARSZAW",
  "uni": 10,
  "cityTotal": 38
 },
 "LMU Munich": {
  "code": "D MUNCHEN01",
  "city": "MUNCHEN",
  "uni": 4,
  "cityTotal": 17
 },
 "LUISS": {
  "code": "I ROMA03",
  "city": "ROMA",
  "uni": 8,
  "cityTotal": 82
 },
 "LUMSA": {
  "code": "I ROMA04",
  "city": "ROMA",
  "uni": 4,
  "cityTotal": 82
 },
 "Linköping Uni": {
  "code": "S LINKOPI01",
  "city": "LINKOPI",
  "uni": 6,
  "cityTotal": 6
 },
 "Loughborough": {
  "code": "UK LOUGHBO01",
  "city": "LOUGHBO",
  "uni": 19,
  "cityTotal": 19
 },
 "Maastricht Uni": {
  "code": "NL MAASTRI01",
  "city": "MAASTRI",
  "uni": 28,
  "cityTotal": 28
 },
 "Masaryk Uni": {
  "code": "CZ BRNO05",
  "city": "BRNO",
  "uni": 6,
  "cityTotal": 6
 },
 "NKUA": {
  "code": "G ATHINE01",
  "city": "ATHINE",
  "uni": 6,
  "cityTotal": 6
 },
 "NOVA Lisbon": {
  "code": "P LISBOA03",
  "city": "LISBOA",
  "uni": 12,
  "cityTotal": 33
 },
 "NTNU": {
  "code": "N TRONDHE01",
  "city": "TRONDHE",
  "uni": 26,
  "cityTotal": 26
 },
 "Panthéon-Assas (Paris II)": {
  "code": "F PARIS002",
  "city": "PARIS",
  "uni": 9,
  "cityTotal": 83
 },
 "Panthéon-Sorbonne (Paris I)": {
  "code": "F PARIS001",
  "city": "PARIS",
  "uni": 8,
  "cityTotal": 83
 },
 "Paris Nanterre": {
  "code": "F PARIS010",
  "city": "PARIS",
  "uni": 15,
  "cityTotal": 83
 },
 "Paris-Saclay": {
  "code": "F PARIS481",
  "city": "PARIS",
  "uni": 5,
  "cityTotal": 83
 },
 "Parthenope": {
  "code": "I NAPOLI03",
  "city": "NAPOLI",
  "uni": 2,
  "cityTotal": 7
 },
 "RSU": {
  "code": "LV RIGA03",
  "city": "RIGA",
  "uni": 8,
  "cityTotal": 24
 },
 "RWTH Aachen": {
  "code": "D AACHEN01",
  "city": "AACHEN",
  "uni": 12,
  "cityTotal": 12
 },
 "Roma Tre": {
  "code": "I ROMA16",
  "city": "ROMA",
  "uni": 19,
  "cityTotal": 82
 },
 "SDU": {
  "code": "DK ODENSE01",
  "city": "ODENSE",
  "uni": 10,
  "cityTotal": 10
 },
 "SGH Warsaw": {
  "code": "PL WARSZAW03",
  "city": "WARSZAW",
  "uni": 8,
  "cityTotal": 38
 },
 "SSE Riga": {
  "code": "LV RIGA14",
  "city": "RIGA",
  "uni": 2,
  "cityTotal": 24
 },
 "Sapienza": {
  "code": "I ROMA01",
  "city": "ROMA",
  "uni": 31,
  "cityTotal": 82
 },
 "Sheffield Uni": {
  "code": "UK SHEFFIE01",
  "city": "SHEFFIE",
  "uni": 12,
  "cityTotal": 12
 },
 "TUM": {
  "code": "D MUNCHEN02",
  "city": "MUNCHEN",
  "uni": 13,
  "cityTotal": 17
 },
 "Tilburg Uni": {
  "code": "NL TILBURG01",
  "city": "TILBURG",
  "uni": 10,
  "cityTotal": 10
 },
 "Tor Vergata": {
  "code": "I ROMA02",
  "city": "ROMA",
  "uni": 20,
  "cityTotal": 82
 },
 "Toulouse Capitole": {
  "code": "F TOULOUS01",
  "city": "TOULOUS",
  "uni": 9,
  "cityTotal": 16
 },
 "Trinity College Dublin": {
  "code": "IRLDUBLIN01",
  "city": "DUBLIN",
  "uni": 8,
  "cityTotal": 25
 },
 "UAntwerp": {
  "code": "B ANTWERP01",
  "city": "ANTWERP",
  "uni": 18,
  "cityTotal": 18
 },
 "UCD": {
  "code": "IRLDUBLIN02",
  "city": "DUBLIN",
  "uni": 14,
  "cityTotal": 25
 },
 "UCL": {
  "code": "UK LONDON029",
  "city": "LONDON",
  "uni": 16,
  "cityTotal": 42
 },
 "UCLouvain": {
  "code": "B LOUVAIN01",
  "city": "LOUVAIN",
  "uni": 8,
  "cityTotal": 8
 },
 "UCY": {
  "code": "CY NICOSIA01",
  "city": "NICOSIA",
  "uni": 8,
  "cityTotal": 8
 },
 "UEF": {
  "code": "SF KUOPIO12",
  "city": "KUOPIO",
  "uni": 8,
  "cityTotal": 8
 },
 "ULB": {
  "code": "B BRUXEL04",
  "city": "BRUXEL",
  "uni": 15,
  "cityTotal": 19
 },
 "UPEC": {
  "code": "F PARIS012",
  "city": "PARIS",
  "uni": 4,
  "cityTotal": 83
 },
 "UVSQ": {
  "code": "F VERSAIL11",
  "city": "VERSAIL",
  "uni": 9,
  "cityTotal": 9
 },
 "UZH": {
  "code": "CH ZURICH01",
  "city": "ZURICH",
  "uni": 5,
  "cityTotal": 5
 },
 "Uni Bern": {
  "code": "CH BERN01",
  "city": "BERN",
  "uni": 5,
  "cityTotal": 9
 },
 "Uni Białystok": {
  "code": "PL BIALYST04",
  "city": "BIALYST",
  "uni": 6,
  "cityTotal": 6
 },
 "Uni Bologna": {
  "code": "I BOLOGNA01",
  "city": "BOLOGNA",
  "uni": 26,
  "cityTotal": 26
 },
 "Uni Bordeaux": {
  "code": "F BORDEAU58",
  "city": "BORDEAU",
  "uni": 6,
  "cityTotal": 26
 },
 "Uni Brescia": {
  "code": "I BRESCIA01",
  "city": "BRESCIA",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Cagliari": {
  "code": "I CAGLIAR01",
  "city": "CAGLIAR",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Coimbra": {
  "code": "P COIMBRA01",
  "city": "COIMBRA",
  "uni": 9,
  "cityTotal": 11
 },
 "Uni Côte d'Azur": {
  "code": "F NICE42",
  "city": "NICE",
  "uni": 8,
  "cityTotal": 8
 },
 "Uni Ferrara": {
  "code": "I FERRARA01",
  "city": "FERRARA",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Firenze": {
  "code": "I FIRENZE01",
  "city": "FIRENZE",
  "uni": 3,
  "cityTotal": 3
 },
 "Uni Freiburg": {
  "code": "D FREIBUR01",
  "city": "FREIBUR",
  "uni": 5,
  "cityTotal": 5
 },
 "Uni Fribourg": {
  "code": "CH FRIBOUR01",
  "city": "FRIBOUR",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Genova": {
  "code": "I GENOVA01",
  "city": "GENOVA",
  "uni": 8,
  "cityTotal": 8
 },
 "Uni Graz": {
  "code": "A GRAZ01",
  "city": "GRAZ",
  "uni": 6,
  "cityTotal": 12
 },
 "Uni Konstanz": {
  "code": "D KONSTAN01",
  "city": "KONSTAN",
  "uni": 12,
  "cityTotal": 12
 },
 "Uni Lausanne": {
  "code": "CH LAUSANN01",
  "city": "LAUSANN",
  "uni": 6,
  "cityTotal": 6
 },
 "Uni Lille": {
  "code": "F LILLE103",
  "city": "LILLE",
  "uni": 5,
  "cityTotal": 25
 },
 "Uni Lisboa": {
  "code": "P LISBOA109",
  "city": "LISBOA",
  "uni": 13,
  "cityTotal": 33
 },
 "Uni Ljubljana": {
  "code": "SI LJUBLJA01",
  "city": "LJUBLJA",
  "uni": 5,
  "cityTotal": 5
 },
 "Uni Luzern": {
  "code": "CH LUZERN01",
  "city": "LUZERN",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Mannheim": {
  "code": "D MANNHEI01",
  "city": "MANNHEI",
  "uni": 29,
  "cityTotal": 33
 },
 "Uni Messina": {
  "code": "I MESSINA01",
  "city": "MESSINA",
  "uni": 1,
  "cityTotal": 1
 },
 "Uni Milano (Statale)": {
  "code": "I MILANO01",
  "city": "MILANO",
  "uni": 14,
  "cityTotal": 55
 },
 "Uni Milano-Bicocca": {
  "code": "I MILANO16",
  "city": "MILANO",
  "uni": 12,
  "cityTotal": 55
 },
 "Uni Montpellier": {
  "code": "F MONTPEL54",
  "city": "MONTPEL",
  "uni": 3,
  "cityTotal": 6
 },
 "Uni Padova": {
  "code": "I PADOVA01",
  "city": "PADOVA",
  "uni": 6,
  "cityTotal": 6
 },
 "Uni Palermo": {
  "code": "I PALERMO01",
  "city": "PALERMO",
  "uni": 4,
  "cityTotal": 4
 },
 "Uni Parma": {
  "code": "I PARMA01",
  "city": "PARMA",
  "uni": 3,
  "cityTotal": 3
 },
 "Uni Pavia": {
  "code": "I PAVIA01",
  "city": "PAVIA",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Perugia": {
  "code": "I PERUGIA01",
  "city": "PERUGIA",
  "uni": 14,
  "cityTotal": 20
 },
 "Uni Pisa": {
  "code": "I PISA01",
  "city": "PISA",
  "uni": 18,
  "cityTotal": 18
 },
 "Uni Porto": {
  "code": "P PORTO02",
  "city": "PORTO",
  "uni": 11,
  "cityTotal": 11
 },
 "Uni Regensburg": {
  "code": "D REGENSB01",
  "city": "REGENSB",
  "uni": 8,
  "cityTotal": 8
 },
 "Uni Salerno": {
  "code": "I SALERNO01",
  "city": "SALERNO",
  "uni": 2,
  "cityTotal": 2
 },
 "Uni Siena": {
  "code": "I SIENA01",
  "city": "SIENA",
  "uni": 10,
  "cityTotal": 10
 },
 "Uni Torino": {
  "code": "I TORINO01",
  "city": "TORINO",
  "uni": 17,
  "cityTotal": 24
 },
 "Uni Trieste": {
  "code": "I TRIESTE01",
  "city": "TRIESTE",
  "uni": 7,
  "cityTotal": 7
 },
 "Uni Warsaw": {
  "code": "PL WARSZAW01",
  "city": "WARSZAW",
  "uni": 5,
  "cityTotal": 38
 },
 "Uni Wien": {
  "code": "A WIEN01",
  "city": "WIEN",
  "uni": 9,
  "cityTotal": 31
 },
 "UniModena": {
  "code": "I MODENA01",
  "city": "MODENA",
  "uni": 10,
  "cityTotal": 10
 },
 "Univ. Catholique Lille": {
  "code": "F LILLE11",
  "city": "LILLE",
  "uni": 12,
  "cityTotal": 25
 },
 "UoC (Köln)": {
  "code": "D KOLN01",
  "city": "KOLN",
  "uni": 19,
  "cityTotal": 19
 },
 "Utrecht Uni": {
  "code": "NL UTRECHT01",
  "city": "UTRECHT",
  "uni": 6,
  "cityTotal": 10
 },
 "UvA": {
  "code": "NL AMSTERD01",
  "city": "AMSTERD",
  "uni": 12,
  "cityTotal": 20
 },
 "VMU": {
  "code": "LT KAUNAS01",
  "city": "KAUNAS",
  "uni": 4,
  "cityTotal": 4
 },
 "Vanvitelli": {
  "code": "I NAPOLI09",
  "city": "NAPOLI",
  "uni": 2,
  "cityTotal": 7
 },
 "WU Wien": {
  "code": "A WIEN05",
  "city": "WIEN",
  "uni": 6,
  "cityTotal": 31
 },
 "WWU Münster": {
  "code": "D MUNSTER01",
  "city": "MUNSTER",
  "uni": 6,
  "cityTotal": 6
 },
 "Warwick": {
  "code": "UK COVENTR01",
  "city": "COVENTR",
  "uni": 2,
  "cityTotal": 26
 },
 "Åbo Akademi": {
  "code": "SF TURKU02",
  "city": "TURKU",
  "uni": 2,
  "cityTotal": 2
 },
 "Örebro Uni": {
  "code": "S OREBRO01",
  "city": "OREBRO",
  "uni": 4,
  "cityTotal": 4
 }
};
