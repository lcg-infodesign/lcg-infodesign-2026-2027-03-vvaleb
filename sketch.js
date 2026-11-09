let riversData = [
  { id: 1, name: "Nile–White Nile–Blue Nile", countries: "Burundi, Tanzania, Rwanda, Uganda, DR Congo, Kenya, South Sudan, Sudan, Ethiopia, Eritrea, Egypt", length: 6650, area: 3254555, discharge: 2800, outflow: "Mediterranean Sea", continent: "Africa", tributaries: 2, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 2, name: "Amazon–Ucayali–Tambo–Ene–Mantaro", countries: "Brazil, Peru, Bolivia, Colombia, Ecuador, Venezuela", length: 6575, area: 7050000, discharge: 209000, outflow: "Atlantic Ocean", continent: "South America", tributaries: 1100, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 3, name: "Yangtze", countries: "China", length: 6300, area: 1808500, discharge: 31900, outflow: "East China Sea", continent: "Asia", tributaries: 700, min_temp: 16, max_temp: 18, avg_temp: 17.0 },
  { id: 4, name: "Mississippi–Missouri–Jefferson–Beaverhead–Red Rock–Hell Roaring", countries: "United States", length: 6275, area: 2980000, discharge: 16200, outflow: "Gulf of Mexico", continent: "North America", tributaries: 250, min_temp: 10, max_temp: 25, avg_temp: 17.5 },
  { id: 5, name: "Yenisei–Angara–Selenge–Ider", countries: "Russia, Mongolia", length: 5539, area: 2580000, discharge: 19800, outflow: "Kara Sea", continent: "Asia", tributaries: 102, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 6, name: "Yellow River", countries: "China", length: 5464, area: 752546, discharge: 2110, outflow: "Bohai Sea", continent: "Asia", tributaries: 50, min_temp: 8, max_temp: 15, avg_temp: 11.5 },
  { id: 7, name: "Ob–Irtysh", countries: "Russia, Kazakhstan", length: 5410, area: 2990000, discharge: 12800, outflow: "Gulf of Ob", continent: "Asia", tributaries: 50, min_temp: -5, max_temp: 10, avg_temp: 2.5 },
  { id: 8, name: "Río de la Plata–Paraná–Grande", countries: "Argentina, Brazil", length: 4880, area: 3100000, discharge: 25700, outflow: "Atlantic Ocean", continent: "South America", tributaries: 80, min_temp: 15, max_temp: 22, avg_temp: 18.5 },
  { id: 9, name: "Congo–Chambeshi", countries: "Democratic Republic of the Congo", length: 4700, area: 4014500, discharge: 41300, outflow: "Atlantic Ocean", continent: "Africa", tributaries: 40, min_temp: 22, max_temp: 26, avg_temp: 24.0 },
  { id: 10, name: "Amur–Argun", countries: "Russia, China, Mongolia", length: 4480, area: 1855000, discharge: 11000, outflow: "Sea of Okhotsk", continent: "Asia", tributaries: 30, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 11, name: "Lena", countries: "Russia", length: 4400, area: 2490000, discharge: 16400, outflow: "Arctic Ocean", continent: "Asia", tributaries: 20, min_temp: -15, max_temp: 5, avg_temp: -5.0 },
  { id: 12, name: "Mekong–Lancang", countries: "China, Myanmar, Laos, Thailand, Cambodia, Vietnam", length: 4350, area: 795000, discharge: 16000, outflow: "South China Sea", continent: "Asia", tributaries: 100, min_temp: 22, max_temp: 28, avg_temp: 25.0 },
  { id: 13, name: "Mackenzie–Slave–Peace–Finlay", countries: "Canada", length: 4241, area: 1740000, discharge: 9700, outflow: "Arctic Ocean", continent: "North America", tributaries: 40, min_temp: -5, max_temp: 10, avg_temp: 2.5 },
  { id: 14, name: "Niger", countries: "Nigeria, Mali, Niger, Guinea, Benin", length: 4180, area: 2092000, discharge: 6000, outflow: "Gulf of Guinea", continent: "Africa", tributaries: 30, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 15, name: "Brahmaputra–Tsangpo", countries: "China, India, Bangladesh", length: 3960, area: 651335, discharge: 19800, outflow: "Bay of Bengal", continent: "Asia", tributaries: 40, min_temp: 15, max_temp: 25, avg_temp: 20.0 },
  { id: 16, name: "Murray–Darling", countries: "Australia", length: 3750, area: 1061469, discharge: 767, outflow: "Indian Ocean", continent: "Australia", tributaries: 10, min_temp: 15, max_temp: 30, avg_temp: 22.5 },
  { id: 17, name: "Tocantins–Araguaia", countries: "Brazil", length: 3650, area: 967059, discharge: 13700, outflow: "Atlantic Ocean", continent: "South America", tributaries: 30, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 18, name: "Volga", countries: "Russia", length: 3645, area: 1360000, discharge: 8060, outflow: "Caspian Sea", continent: "Europe", tributaries: 200, min_temp: -5, max_temp: 10, avg_temp: 2.5 },
  { id: 19, name: "Shatt al-Arab–Euphrates", countries: "Iraq, Turkey, Syria, Iran", length: 3600, area: 879790, discharge: 1350, outflow: "Persian Gulf", continent: "Asia", tributaries: 20, min_temp: 15, max_temp: 30, avg_temp: 22.5 },
  { id: 20, name: "Purús", countries: "Brazil, Peru", length: 3379, area: 371042, discharge: 8400, outflow: "Amazon River", continent: "South America", tributaries: 60, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 21, name: "Madeira–Mamoré–Grande", countries: "Brazil, Bolivia, Peru", length: 3379, area: 850000, discharge: 31000, outflow: "Amazon River", continent: "South America", tributaries: 50, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 22, name: "Yukon", countries: "United States, Canada", length: 3190, area: 832700, discharge: 6430, outflow: "Bering Sea", continent: "North America", tributaries: 30, min_temp: -10, max_temp: 15, avg_temp: 2.5 },
  { id: 23, name: "Indus", countries: "Pakistan, India, China, Afghanistan", length: 3180, area: 1155000, discharge: 6000, outflow: "Arabian Sea", continent: "Asia", tributaries: 10, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 24, name: "São Francisco", countries: "Brazil", length: 3150, area: 641000, discharge: 2850, outflow: "Atlantic Ocean", continent: "South America", tributaries: 168, min_temp: 20, max_temp: 25, avg_temp: 22.5 },
  { id: 25, name: "Syr Darya–Naryn", countries: "Uzbekistan, Kazakhstan, Kyrgyzstan, Tajikistan", length: 3019, area: 219000, discharge: 1210, outflow: "Aral Sea", continent: "Asia", tributaries: 10, min_temp: 0, max_temp: 15, avg_temp: 7.5 },
  { id: 26, name: "Salween", countries: "China, Myanmar, Thailand", length: 2990, area: 271914, discharge: 16300, outflow: "Andaman Sea", continent: "Asia", tributaries: 15, min_temp: 20, max_temp: 25, avg_temp: 22.5 },
  { id: 27, name: "Saint Lawrence–Great Lakes", countries: "Canada, United States", length: 3058, area: 1344200, discharge: 10400, outflow: "Atlantic Ocean", continent: "North America", tributaries: 40, min_temp: 0, max_temp: 10, avg_temp: 5.0 },
  { id: 28, name: "Rio Grande", countries: "United States, Mexico", length: 3057, area: 558000, discharge: 160, outflow: "Gulf of Mexico", continent: "North America", tributaries: 30, min_temp: 15, max_temp: 25, avg_temp: 20.0 },
  { id: 29, name: "Lower Tunguska", countries: "Russia", length: 2989, area: 488000, discharge: 4780, outflow: "Yenisei River", continent: "Asia", tributaries: 15, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 30, name: "Danube", countries: "Germany, Austria, Slovakia, Hungary, Croatia, Serbia, Bulgaria, Romania, Moldova, Ukraine", length: 2860, area: 817000, discharge: 6450, outflow: "Black Sea", continent: "Europe", tributaries: 300, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 31, name: "Chishui", countries: "China", length: 2860, area: 142936, discharge: 3800, outflow: "Yangtze River", continent: "Asia", tributaries: 20, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 32, name: "Zambezi", countries: "Zambia, Angola, Mozambique, Zimbabwe, Malawi, Tanzania, Namibia, Botswana", length: 2734, area: 1390000, discharge: 4900, outflow: "Indian Ocean", continent: "Africa", tributaries: 30, min_temp: 20, max_temp: 25, avg_temp: 22.5 },
  { id: 33, name: "Amu Darya", countries: "Tajikistan, Uzbekistan, Turkmenistan, Afghanistan", length: 2620, area: 534739, discharge: 2560, outflow: "Aral Sea", continent: "Asia", tributaries: 10, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 34, name: "Dnieper", countries: "Russia, Belarus, Ukraine", length: 2285, area: 504000, discharge: 1670, outflow: "Black Sea", continent: "Europe", tributaries: 30, min_temp: 0, max_temp: 15, avg_temp: 7.5 },
  { id: 35, name: "Ganges–Hooghly", countries: "India, Nepal, Bangladesh", length: 2525, area: 1000000, discharge: 16000, outflow: "Bay of Bengal", continent: "Asia", tributaries: 20, min_temp: 15, max_temp: 25, avg_temp: 20.0 },
  { id: 36, name: "Nelson–Saskatchewan", countries: "Canada, United States", length: 2575, area: 1070000, discharge: 2370, outflow: "Hudson Bay", continent: "North America", tributaries: 20, min_temp: 0, max_temp: 10, avg_temp: 5.0 },
  { id: 37, name: "Vilyuy", countries: "Russia", length: 2646, area: 491000, discharge: 1350, outflow: "Lena River", continent: "Asia", tributaries: 10, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 38, name: "Kolyma", countries: "Russia", length: 2513, area: 643000, discharge: 3910, outflow: "East Siberian Sea", continent: "Asia", tributaries: 5, min_temp: -20, max_temp: 5, avg_temp: -7.5 },
  { id: 39, name: "Colorado", countries: "United States, Mexico", length: 2330, area: 637137, discharge: 642, outflow: "Gulf of California", continent: "North America", tributaries: 20, min_temp: 10, max_temp: 30, avg_temp: 20.0 },
  { id: 40, name: "Loire", countries: "France", length: 1020, area: 117054, discharge: 802, outflow: "Bay of Biscay", continent: "Europe", tributaries: 10, min_temp: 5, max_temp: 20, avg_temp: 12.5 },
  { id: 41, name: "Uruguay", countries: "Brazil, Uruguay, Argentina", length: 1838, area: 385000, discharge: 4900, outflow: "Rio de la Plata", continent: "South America", tributaries: 10, min_temp: 15, max_temp: 20, avg_temp: 17.5 },
  { id: 42, name: "Ural", countries: "Russia, Kazakhstan", length: 2428, area: 231000, discharge: 400, outflow: "Caspian Sea", continent: "Europe", tributaries: 10, min_temp: -5, max_temp: 10, avg_temp: 2.5 },
  { id: 43, name: "Blue Nile", countries: "Burundi, Tanzania, Rwanda, Uganda, DR Congo, Kenya, South Sudan, Sudan, Ethiopia, Eritrea, Egypt", length: 1450, area: 3254555, discharge: 2800, outflow: "Mediterranean Sea", continent: "Africa", tributaries: 2, min_temp: 20, max_temp: 30, avg_temp: 25.0 },
  { id: 44, name: "Sepik", countries: "Papua New Guinea, Indonesia", length: 1126, area: 77995, discharge: 101, outflow: "Pacific Ocean", continent: "Oceania", tributaries: 15, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 45, name: "Tapajós", countries: "Brazil", length: 2100, area: 487103, discharge: 12849, outflow: "Amazon River", continent: "South America", tributaries: 20, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 46, name: "Seine", countries: "France", length: 777, area: 78500, discharge: 470, outflow: "English Channel", continent: "Europe", tributaries: 10, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 47, name: "Douro", countries: "Spain, Portugal", length: 897, area: 97280, discharge: 423, outflow: "Atlantic Ocean", continent: "Europe", tributaries: 15, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 48, name: "Irrawaddy", countries: "Myanmar", length: 2170, area: 413710, discharge: 13159, outflow: "Indian Ocean", continent: "Asia", tributaries: 10, min_temp: 20, max_temp: 30, avg_temp: 25.0 },
  { id: 49, name: "Shinano", countries: "Japan", length: 367, area: 1191, discharge: 546, outflow: "Sea of Japan", continent: "Asia", tributaries: 10, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 50, name: "Magdalena", countries: "Colombia", length: 1550, area: 257438, discharge: 7150, outflow: "Caribbean Sea", continent: "South America", tributaries: 10, min_temp: 20, max_temp: 25, avg_temp: 22.5 },
  { id: 51, name: "Godavari", countries: "India", length: 1465, area: 312812, discharge: 3085, outflow: "Bay of Bengal", continent: "Asia", tributaries: 30, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 52, name: "Beni", countries: "Bolivia", length: 1580, area: 200000, discharge: 14130, outflow: "Madeira River", continent: "South America", tributaries: 15, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 53, name: "Po", countries: "Italy", length: 652, area: 74000, discharge: 1500, outflow: "Adriatic Sea", continent: "Europe", tributaries: 141, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 54, name: "Limpopo", countries: "Botswana, South Africa, Zimbabwe, Mozambique", length: 1800, area: 415000, discharge: 170, outflow: "Indian Ocean", continent: "Africa", tributaries: 24, min_temp: 20, max_temp: 30, avg_temp: 25.0 },
  { id: 55, name: "Dniester", countries: "Ukraine, Moldova", length: 1352, area: 72100, discharge: 310, outflow: "Black Sea", continent: "Europe", tributaries: 14, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 56, name: "Columbia–Snake", countries: "United States, Canada", length: 2000, area: 668217, discharge: 7420, outflow: "Pacific Ocean", continent: "North America", tributaries: 38, min_temp: 5, max_temp: 20, avg_temp: 12.5 },
  { id: 57, name: "Rhine", countries: "Switzerland, Liechtenstein, Austria, Germany, France, Netherlands", length: 1233, area: 185000, discharge: 2900, outflow: "North Sea", continent: "Europe", tributaries: 865, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 58, name: "Fraser", countries: "Canada", length: 1375, area: 23300, discharge: 348, outflow: "Strait of Georgia", continent: "North America", tributaries: 17, min_temp: 0, max_temp: 10, avg_temp: 5.0 },
  { id: 59, name: "Orinoco", countries: "Venezuela, Colombia, Guyana", length: 2140, area: 880000, discharge: 33000, outflow: "Atlantic Ocean", continent: "South America", tributaries: 75, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 60, name: "Red River", countries: "China, Vietnam", length: 1360, area: 242500, discharge: 1250, outflow: "Gulf of Tonkin", continent: "Asia", tributaries: 12, min_temp: 20, max_temp: 30, avg_temp: 25.0 },
  { id: 61, name: "Tagus", countries: "Spain, Portugal", length: 1007, area: 80900, discharge: 430, outflow: "Atlantic Ocean", continent: "Europe", tributaries: 36, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 62, name: "Ebro", countries: "Spain", length: 910, area: 85262, discharge: 426, outflow: "Mediterranean Sea", continent: "Europe", tributaries: 37, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 63, name: "Meuse", countries: "France, Belgium, Netherlands", length: 925, area: 36577, discharge: 357, outflow: "North Sea", continent: "Europe", tributaries: 36, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 64, name: "Drava", countries: "Italy, Austria, Slovenia, Croatia, Hungary", length: 725, area: 40926, discharge: 580, outflow: "Danube River", continent: "Europe", tributaries: 26, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 65, name: "Neman", countries: "Belarus, Lithuania, Russia", length: 937, area: 98200, discharge: 678, outflow: "Curonian Lagoon", continent: "Europe", tributaries: 14, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 66, name: "Han", countries: "China", length: 1416, area: 2638, discharge: 2417, outflow: "Yellow Sea", continent: "Asia", tributaries: 9, min_temp: 10, max_temp: 25, avg_temp: 17.5 },
  { id: 67, name: "Guaporé", countries: "Brazil, Bolivia", length: 1750, area: 351750, discharge: 35000, outflow: "Amazon River", continent: "South America", tributaries: 12, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 68, name: "Mackenzie", countries: "Canada", length: 4241, area: 1740000, discharge: 9700, outflow: "Arctic Ocean", continent: "North America", tributaries: 21, min_temp: -5, max_temp: 15, avg_temp: 5.0 },
  { id: 69, name: "Seversky Donets", countries: "Russia, Ukraine", length: 1053, area: 98800, discharge: 160, outflow: "Don River", continent: "Europe", tributaries: 14, min_temp: 5, max_temp: 20, avg_temp: 12.5 },
  { id: 70, name: "Vistula", countries: "Poland", length: 1047, area: 194424, discharge: 1080, outflow: "Baltic Sea", continent: "Europe", tributaries: 27, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 71, name: "Neva", countries: "Russia", length: 74, area: 281000, discharge: 2490, outflow: "Baltic Sea", continent: "Europe", tributaries: 7, min_temp: -5, max_temp: 10, avg_temp: 2.5 },
  { id: 72, name: "Tocantins", countries: "Brazil", length: 3650, area: 967059, discharge: 13700, outflow: "Atlantic Ocean", continent: "South America", tributaries: 36, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 73, name: "Churchill", countries: "Canada", length: 1690, area: 287000, discharge: 529, outflow: "Hudson Bay", continent: "North America", tributaries: 5, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 74, name: "Mures", countries: "Romania, Hungary", length: 768, area: 28500, discharge: 185, outflow: "Danube River", continent: "Europe", tributaries: 9, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 75, name: "Khatanga", countries: "Russia", length: 2278, area: 364000, discharge: 4100, outflow: "Laptev Sea", continent: "Asia", tributaries: 3, min_temp: -20, max_temp: 5, avg_temp: -7.5 },
  { id: 76, name: "Xingu", countries: "Brazil", length: 1980, area: 531250, discharge: 9600, outflow: "Amazon River", continent: "South America", tributaries: 25, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 77, name: "Sanaga", countries: "Cameroon", length: 918, area: 133000, discharge: 1925, outflow: "Atlantic Ocean", continent: "Africa", tributaries: 12, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 78, name: "Liao", countries: "China", length: 1345, area: 219000, discharge: 500, outflow: "Bohai Sea", continent: "Asia", tributaries: 13, min_temp: 5, max_temp: 20, avg_temp: 12.5 },
  { id: 79, name: "Mahanadi", countries: "India", length: 858, area: 141600, discharge: 2100, outflow: "Bay of Bengal", continent: "Asia", tributaries: 11, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 80, name: "Red River of the North", countries: "United States, Canada", length: 885, area: 289500, discharge: 288, outflow: "Lake Winnipeg", continent: "North America", tributaries: 7, min_temp: -10, max_temp: 10, avg_temp: 0.0 },
  { id: 81, name: "Rio Negro", countries: "Brazil, Colombia", length: 2250, area: 691000, discharge: 29060, outflow: "Amazon River", continent: "South America", tributaries: 10, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 82, name: "Sutlej", countries: "China, India, Pakistan", length: 1450, area: 395000, discharge: 500, outflow: "Indus River", continent: "Asia", tributaries: 8, min_temp: 10, max_temp: 25, avg_temp: 17.5 },
  { id: 83, name: "Desna", countries: "Russia, Ukraine", length: 1130, area: 88900, discharge: 360, outflow: "Dnieper River", continent: "Europe", tributaries: 6, min_temp: 5, max_temp: 15, avg_temp: 10.0 },
  { id: 84, name: "Pechora", countries: "Russia", length: 1809, area: 322000, discharge: 4040, outflow: "Barents Sea", continent: "Europe", tributaries: 12, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 85, name: "Tigris", countries: "Turkey, Iraq, Syria", length: 1850, area: 375000, discharge: 1200, outflow: "Shatt al-Arab", continent: "Asia", tributaries: 10, min_temp: 20, max_temp: 30, avg_temp: 25.0 },
  { id: 86, name: "Aras", countries: "Turkey, Armenia, Azerbaijan, Iran", length: 1072, area: 102000, discharge: 285, outflow: "Kura River", continent: "Asia", tributaries: 11, min_temp: 10, max_temp: 25, avg_temp: 17.5 },
  { id: 87, name: "Liard", countries: "Canada", length: 1115, area: 277100, discharge: 3513, outflow: "Mackenzie River", continent: "North America", tributaries: 15, min_temp: -5, max_temp: 15, avg_temp: 5.0 },
  { id: 88, name: "Vychegda", countries: "Russia", length: 1130, area: 121000, discharge: 1795, outflow: "Northern Dvina", continent: "Europe", tributaries: 5, min_temp: -10, max_temp: 5, avg_temp: -2.5 },
  { id: 89, name: "Olenyok", countries: "Russia", length: 2292, area: 220000, discharge: 1210, outflow: "Laptev Sea", continent: "Asia", tributaries: 5, min_temp: -20, max_temp: 5, avg_temp: -7.5 },
  { id: 90, name: "Trombetas", countries: "Brazil", length: 1300, area: 133630, discharge: 4055, outflow: "Amazon River", continent: "South America", tributaries: 9, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 91, name: "Kuskokwim", countries: "United States", length: 1165, area: 118000, discharge: 1600, outflow: "Bering Sea", continent: "North America", tributaries: 7, min_temp: -10, max_temp: 10, avg_temp: 0.0 },
  { id: 92, name: "Olenek", countries: "Russia", length: 2292, area: 210000, discharge: 1400, outflow: "Laptev Sea", continent: "Asia", tributaries: 5, min_temp: -20, max_temp: 5, avg_temp: -7.5 },
  { id: 93, name: "Barito", countries: "Indonesia", length: 900, area: 70000, discharge: 800, outflow: "Java Sea", continent: "Asia", tributaries: 14, min_temp: 25, max_temp: 30, avg_temp: 27.5 },
  { id: 94, name: "Ural", countries: "Russia, Kazakhstan", length: 2428, area: 231000, discharge: 400, outflow: "Caspian Sea", continent: "Europe", tributaries: 10, min_temp: -5, max_temp: 10, avg_temp: 2.5 },
  { id: 95, name: "Teles Pires", countries: "Brazil", length: 1370, area: 141830, discharge: 5300, outflow: "Amazon River", continent: "South America", tributaries: 13, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 96, name: "Arkansas", countries: "United States", length: 2349, area: 505000, discharge: 800, outflow: "Mississippi River", continent: "North America", tributaries: 12, min_temp: 10, max_temp: 30, avg_temp: 20.0 },
  { id: 97, name: "Blue Nile", countries: "Burundi, Tanzania, Rwanda, Uganda, DR Congo, Kenya, South Sudan, Sudan, Ethiopia, Eritrea, Egypt", length: 1450, area: 3254555, discharge: 2800, outflow: "Mediterranean Sea", continent: "Africa", tributaries: 2, min_temp: 20, max_temp: 30, avg_temp: 25.0 },
  { id: 98, name: "Tapajós", countries: "Brazil", length: 2100, area: 487103, discharge: 12849, outflow: "Amazon River", continent: "South America", tributaries: 20, min_temp: 24, max_temp: 28, avg_temp: 26.0 },
  { id: 99, name: "Po", countries: "Italy", length: 652, area: 74000, discharge: 1500, outflow: "Adriatic Sea", continent: "Europe", tributaries: 141, min_temp: 10, max_temp: 20, avg_temp: 15.0 },
  { id: 100, name: "Limpopo", countries: "Botswana, South Africa, Zimbabwe, Mozambique", length: 1800, area: 415000, discharge: 170, outflow: "Indian Ocean", continent: "Africa", tributaries: 24, min_temp: 20, max_temp: 30, avg_temp: 25.0 }
];

let stones = [];
let hoveredStone = null;
let selectedStone = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateLayout();
}

function updateLayout() {
  stones = [];
  let cols = 10;
  let marginX = 80;
  let marginY = 60;
  
  let spacingX = (width - marginX * 2) / (cols - 1);
  let spacingY = (height - marginY * 2) / 9;

  for (let i = 0; i < riversData.length; i++) {
    let d = riversData[i];
    let col = i % cols;
    let row = floor(i / cols);
    let x = marginX + col * spacingX;
    let y = marginY + row * spacingY;

    stones.push(new Stone(x, y, d));
  }
}

function draw() {
  background(22, 26, 32);

  hoveredStone = null;
  for (let s of stones) {
    s.update();
    s.display();
    if (s.isHovered()) {
      hoveredStone = s;
    }
  }

  // Pannelli
  if (selectedStone) {
    selectedStone.drawDetailPanel();
  } else if (hoveredStone) {
    hoveredStone.drawTooltip();
  }
}

function mousePressed() {
  if (hoveredStone) {
    if (selectedStone === hoveredStone) {
      selectedStone = null;
    } else {
      selectedStone = hoveredStone;
    }
  } else {
    selectedStone = null;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  updateLayout();
}

// Pietree 
class Stone {
  constructor(x, y, data) {
    this.x = x;
    this.y = y;
    this.data = data;
    
    // Dimensione in base a portata acq 
    this.baseRadius = map(sqrt(data.discharge), 5, 180, 6, 28);
    
    this.numVertices = floor(random(7, 11));
    this.offsets = [];
    for (let i = 0; i < this.numVertices; i++) {
      this.offsets.push(random(0.75, 1.2));
    }

    // Colori in base a temp
    this.col = color(
      map(data.avg_temp, -10, 30, 60, 220),
      map(data.avg_temp, -10, 30, 130, 90),
      map(data.avg_temp, -10, 30, 240, 70)
    );
  }

  update() {}

  display() {
    push();
    translate(this.x, this.y);

    let isHov = this.isHovered();
    let isSel = (selectedStone === this);

    if (isSel) {
      noFill();
      stroke(255, 200, 50, 200);
      strokeWeight(3);
      ellipse(0, 0, this.baseRadius * 2.8);
    } else if (isHov) {
      noFill();
      stroke(255, 255, 255, 150);
      strokeWeight(2);
      ellipse(0, 0, this.baseRadius * 2.4);
    }

    fill(this.col);
    stroke(isHov || isSel ? 255 : 35, isHov || isSel ? 255 : 110);
    strokeWeight(isHov || isSel ? 2 : 1);

    beginShape();
    for (let i = 0; i < this.numVertices; i++) {
      let angle = map(i, 0, this.numVertices, 0, TWO_PI);
      let r = this.baseRadius * this.offsets[i];
      let px = cos(angle) * r;
      let py = sin(angle) * r * 0.85; 
      vertex(px, py);
    }
    endShape(CLOSE);

    // dettagli pietra
    noFill();
    stroke(255, 60);
    strokeWeight(1.2);
    beginShape();
    vertex(-this.baseRadius * 0.2, -this.baseRadius * 0.2);
    vertex(this.baseRadius * 0.1, this.baseRadius * 0.3);
    endShape();

    pop();
  }

  isHovered() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    return d < max(this.baseRadius, 12);
  }

  drawTooltip() {
    push();
    let boxW = 210;
    let boxH = 60;
    let bx = mouseX + 15;
    let by = mouseY + 15;

    if (bx + boxW > width) bx = mouseX - boxW - 15;
    if (by + boxH > height) by = mouseY - boxH - 15;

    fill(20, 24, 30, 235);
    stroke(90, 110, 130);
    strokeWeight(1);
    rect(bx, by, boxW, boxH, 6);

    noStroke();
    fill(255);
    textSize(12);
    textStyle(BOLD);
    text(this.data.name, bx + 10, by + 10, boxW - 18);

    textSize(10);
    textStyle(NORMAL);
    fill(180, 195, 210);
    text(`Continente: ${this.data.continent}`, bx + 10, by + 30);
    text(`Portata: ${this.data.discharge} m³/s | Temp: ${this.data.avg_temp}°C`, bx + 10, by + 44);
    pop();
  }

  drawDetailPanel() {
    push();
    let panelW = 300;
    let panelH = 195;
    let px = width - panelW - 30;
    let py = 30;

    fill(18, 22, 28, 250);
    stroke(80, 140, 220);
    strokeWeight(2);
    rect(px, py, panelW, panelH, 8);


    fill(255);
    textSize(13);
    text(this.data.name, px + 15, py + 38, panelW - 30);

    textSize(11);
    textStyle(NORMAL);
    fill(200, 215, 230);
    let infoY = py + 68;
    let stepY = 18;

    text(`• Nazioni: ${this.data.countries}`, px + 15, infoY);
    text(`• Continente: ${this.data.continent}`, px + 15, infoY + stepY);
    text(`• Lunghezza: ${this.data.length} km`, px + 15, infoY + stepY * 2);
    text(`• Area Bacino: ${this.data.area} km²`, px + 15, infoY + stepY * 3);
    text(`• Portata: ${this.data.discharge} m³/s`, px + 15, infoY + stepY * 4);
    text(`• Temp. Media: ${this.data.avg_temp} °C`, px + 15, infoY + stepY * 5);

   
    pop();
  }
}