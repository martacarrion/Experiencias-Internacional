const universities = [

{ university:"TECHNISCHE UNIVERSITÄT WIEN", city:"VIENNA", country:"AUSTRIA", lat:48.2082, lon:16.3738, website:"https://www.tuwien.at", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/austria" },
{ university:"TECHNIKUM WIEN", city:"VIENNA", country:"AUSTRIA", lat:48.2082, lon:16.3738, website:"https://www.technikum-wien.at", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/austria" },

{ university:"TECHNISCHE UNIVERSITÄT BERLIN", city:"BERLIN", country:"GERMANY", lat:52.5200, lon:13.4050, website:"https://www.tu-berlin.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"TECHNISCHE UNIVERSITÄT BRAUNSCHWEIG", city:"BRAUNSCHWEIG", country:"GERMANY", lat:52.2689, lon:10.5268, website:"https://www.tu-braunschweig.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"UNIVERSITÄT BREMEN", city:"BREMEN", country:"GERMANY", lat:53.0793, lon:8.8017, website:"https://www.uni-bremen.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"TECHNISCHE UNIVERSITÄT DARMSTADT", city:"DARMSTADT", country:"GERMANY", lat:49.8728, lon:8.6512, website:"https://www.tu-darmstadt.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"HTW DRESDEN", city:"DRESDEN", country:"GERMANY", lat:51.0504, lon:13.7373, website:"https://www.htw-dresden.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"UNIVERSITÄT ERLANGEN-NÜRNBERG", city:"ERLANGEN", country:"GERMANY", lat:49.5897, lon:11.0119, website:"https://www.fau.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"FURTWANGEN UNIVERSITY", city:"FURTWANGEN", country:"GERMANY", lat:48.0516, lon:8.2077, website:"https://www.hs-furtwangen.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"TU HAMBURG", city:"HAMBURG", country:"GERMANY", lat:53.5511, lon:9.9937, website:"https://www.tuhh.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"LEIBNIZ UNIVERSITÄT HANNOVER", city:"HANNOVER", country:"GERMANY", lat:52.3759, lon:9.7320, website:"https://www.uni-hannover.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"FH WESTKÜSTE", city:"HEIDE", country:"GERMANY", lat:54.1961, lon:9.0937, website:"https://www.fh-westkueste.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"KIT KARLSRUHE", city:"KARLSRUHE", country:"GERMANY", lat:49.0069, lon:8.4037, website:"https://www.kit.edu", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"UNIVERSITÄT KASSEL", city:"KASSEL", country:"GERMANY", lat:51.3127, lon:9.4797, website:"https://www.uni-kassel.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"TH KÖLN", city:"COLOGNE", country:"GERMANY", lat:50.9375, lon:6.9603, website:"https://www.th-koeln.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"UNIVERSITÄT MAGDEBURG", city:"MAGDEBURG", country:"GERMANY", lat:52.1205, lon:11.6276, website:"https://www.ovgu.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"TECHNISCHE UNIVERSITÄT MÜNCHEN", city:"MUNICH", country:"GERMANY", lat:48.1351, lon:11.5820, website:"https://www.tum.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"UNIVERSITÄT STUTTGART", city:"STUTTGART", country:"GERMANY", lat:48.7758, lon:9.1829, website:"https://www.uni-stuttgart.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },
{ university:"UNIVERSITÄT ULM", city:"ULM", country:"GERMANY", lat:48.4011, lon:9.9876, website:"https://www.uni-ulm.de", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/alemania" },

{ university:"UNIVERSITE DE LIEGE", city:"LIEGE", country:"BELGIUM", lat:50.6326, lon:5.5797, website:"https://www.uliege.be", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/belgica" },
{ university:"UNIVERSITE CATHOLIQUE DE LOUVAIN", city:"LOUVAIN", country:"BELGIUM", lat:50.8798, lon:4.7005, website:"https://www.uclouvain.be", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/belgica" },
{ university:"UNIVERSITEIT ANTWERPEN", city:"ANTWERP", country:"BELGIUM", lat:51.2194, lon:4.4025, website:"https://www.uantwerpen.be", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/belgica" },
{ university:"VRIJE UNIVERSITEIT BRUSSEL", city:"BRUSSELS", country:"BELGIUM", lat:50.8503, lon:4.3517, website:"https://www.vub.be", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/belgica" },
{ university:"UNIVERSITEIT GENT", city:"GHENT", country:"BELGIUM", lat:51.0543, lon:3.7174, website:"https://www.ugent.be", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/belgica" },
{ university:"KU LEUVEN", city:"LEUVEN", country:"BELGIUM", lat:50.8798, lon:4.7005, website:"https://www.kuleuven.be", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/belgica" },

{ university:"ETH ZURICH", city:"ZURICH", country:"SWITZERLAND", lat:47.3769, lon:8.5417, website:"https://ethz.ch", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/suiza" },

{ university:"INSTITUT POLYTECHNIQUE BORDEAUX", city:"BORDEAUX", country:"FRANCE", lat:44.8378, lon:-0.5792, website:"https://www.bordeaux-inp.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"ENSICAEN", city:"CAEN", country:"FRANCE", lat:49.1829, lon:-0.3707, website:"https://www.ensicaen.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"ENSEA", city:"CERGY", country:"FRANCE", lat:49.0356, lon:2.0604, website:"https://www.ensea.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"TELECOM SUDPARIS", city:"EVRY", country:"FRANCE", lat:48.6233, lon:2.4290, website:"https://www.telecom-sudparis.eu", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"CENTRALE SUPELEC", city:"GIF SUR YVETTE", country:"FRANCE", lat:48.7015, lon:2.1340, website:"https://www.centralesupelec.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"UNIVERSITE DU MAINE", city:"LE MANS", country:"FRANCE", lat:48.0061, lon:0.1996, website:"https://www.univ-lemans.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"IMT LILLE DOUAI", city:"LILLE", country:"FRANCE", lat:50.6292, lon:3.0573, website:"https://imt-lille-douai.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"INSA LYON", city:"LYON", country:"FRANCE", lat:45.7640, lon:4.8357, website:"https://www.insa-lyon.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"IMT ATLANTIQUE", city:"NANTES", country:"FRANCE", lat:47.2184, lon:-1.5536, website:"https://www.imt-atlantique.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },
{ university:"TELECOM PARIS", city:"PARIS", country:"FRANCE", lat:48.8566, lon:2.3522, website:"https://www.telecom-paris.fr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/francia" },

{ university:"RUSENSKI UNIVERSITET ANGEL KUNCHEV", city:"ROUSSE", country:"BULGARIA", lat:43.8356, lon:25.9657, website:"https://www.uni-ruse.bg", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/bulgaria" },
{ university:"TECHNICAL UNIVERSITY SOFIA", city:"SOFIA", country:"BULGARIA", lat:42.6977, lon:23.3219, website:"https://www.tu-sofia.bg", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/bulgaria" },
{ university:"COLLEGE OF TELECOMMUNICATIONS AND POSTS", city:"SOFIA", country:"BULGARIA", lat:42.6977, lon:23.3219, website:"https://www.ctp.bg", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/bulgaria" },

{ university:"BRNO UNIVERSITY OF TECHNOLOGY", city:"BRNO", country:"CZECHIA", lat:49.1951, lon:16.6068, website:"https://www.vut.cz", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/republica-checa" },
{ university:"TECHNICAL UNIVERSITY OSTRAVA", city:"OSTRAVA", country:"CZECHIA", lat:49.8209, lon:18.2625, website:"https://www.vsb.cz", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/republica-checa" },
{ university:"CZECH TECHNICAL UNIVERSITY", city:"PRAGUE", country:"CZECHIA", lat:50.0755, lon:14.4378, website:"https://www.cvut.cz", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/republica-checa" },

{ university:"NATIONAL TECHNICAL UNIVERSITY OF ATHENS", city:"ATHENS", country:"GREECE", lat:37.9838, lon:23.7275, website:"https://www.ntua.gr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/grecia" },

{ university:"UNIVERSITY OF DUBROVNIK", city:"DUBROVNIK", country:"CROATIA", lat:42.6507, lon:18.0944, website:"https://www.unidu.hr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/croacia" },
{ university:"UNIVERSITY OF ZAGREB", city:"ZAGREB", country:"CROATIA", lat:45.8150, lon:15.9819, website:"https://www.unizg.hr", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/croacia" },

{ university:"BUDAPEST UNIVERSITY OF TECHNOLOGY", city:"BUDAPEST", country:"HUNGARY", lat:47.4979, lon:19.0402, website:"https://www.bme.hu", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/hungria" },
{ university:"UNIVERSITY OF DEBRECEN", city:"DEBRECEN", country:"HUNGARY", lat:47.5316, lon:21.6273, website:"https://www.unideb.hu", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/hungria" },
{ university:"SZECHENYI ISTVAN UNIVERSITY", city:"GYOR", country:"HUNGARY", lat:47.6875, lon:17.6504, website:"https://www.sze.hu", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/hungria" },

{ university:"UNIVERSITA DI BOLOGNA", city:"BOLOGNA", country:"ITALY", lat:44.4949, lon:11.3426, website:"https://www.unibo.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI BRESCIA", city:"BRESCIA", country:"ITALY", lat:45.5416, lon:10.2118, website:"https://www.unibs.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI CAGLIARI", city:"CAGLIARI", country:"ITALY", lat:39.2238, lon:9.1217, website:"https://www.unica.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DELLA CALABRIA", city:"COSENZA", country:"ITALY", lat:39.2983, lon:16.2537, website:"https://www.unical.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"POLITECNICO DI MILANO", city:"MILAN", country:"ITALY", lat:45.4642, lon:9.1900, website:"https://www.polimi.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI PALERMO", city:"PALERMO", country:"ITALY", lat:38.1157, lon:13.3615, website:"https://www.unipa.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI PARMA", city:"PARMA", country:"ITALY", lat:44.8015, lon:10.3279, website:"https://www.unipr.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI PERUGIA", city:"PERUGIA", country:"ITALY", lat:43.1107, lon:12.3908, website:"https://www.unipg.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI ROMA TOR VERGATA", city:"ROME", country:"ITALY", lat:41.9028, lon:12.4964, website:"https://web.uniroma2.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI SALERNO", city:"SALERNO", country:"ITALY", lat:40.6824, lon:14.7681, website:"https://www.unisa.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"UNIVERSITA DI SIENA", city:"SIENA", country:"ITALY", lat:43.3188, lon:11.3308, website:"https://www.unisi.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },
{ university:"POLITECNICO DI TORINO", city:"TURIN", country:"ITALY", lat:45.0703, lon:7.6869, website:"https://www.polito.it", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/italia" },

{ university:"TECHNOLOGICAL UNIVERSITY DUBLIN", city:"DUBLIN", country:"IRELAND", lat:53.3498, lon:-6.2603, website:"https://www.tudublin.ie", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/irlanda" },

{ university:"HVL UNIVERSITY", city:"BERGEN", country:"NORWAY", lat:60.3913, lon:5.3221, website:"https://www.hvl.no", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/noruega" },
{ university:"UNIVERSITY OF STAVANGER", city:"STAVANGER", country:"NORWAY", lat:58.9700, lon:5.7331, website:"https://www.uis.no", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/noruega" },
{ university:"UNIVERSITY OF TROMSO", city:"TROMSO", country:"NORWAY", lat:69.6492, lon:18.9553, website:"https://uit.no", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/noruega" },
{ university:"NTNU", city:"TRONDHEIM", country:"NORWAY", lat:63.4305, lon:10.3951, website:"https://www.ntnu.edu", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/noruega" },

{ university:"TECHNICAL UNIVERSITY EINDHOVEN", city:"EINDHOVEN", country:"NETHERLANDS", lat:51.4416, lon:5.4697, website:"https://www.tue.nl", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/holanda" },

{ university:"UNIVERSIDADE DE LISBOA", city:"LISBON", country:"PORTUGAL", lat:38.7223, lon:-9.1393, website:"https://www.ulisboa.pt", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/portugal" },
{ university:"UNIVERSIDADE DO PORTO", city:"PORTO", country:"PORTUGAL", lat:41.1579, lon:-8.6291, website:"https://www.up.pt", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/portugal" },

{ university:"POLITECHNIKA GDANSKA", city:"GDANSK", country:"POLAND", lat:54.3520, lon:18.6466, website:"https://pg.edu.pl", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/polonia" },
{ university:"AGH UNIVERSITY", city:"KRAKOW", country:"POLAND", lat:50.0647, lon:19.9450, website:"https://www.agh.edu.pl", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/polonia" },
{ university:"POLITECHNIKA LODZKA", city:"LODZ", country:"POLAND", lat:51.7592, lon:19.4550, website:"https://p.lodz.pl", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/polonia" },
{ university:"POLITECHNIKA WARSZAWSKA", city:"WARSAW", country:"POLAND", lat:52.2297, lon:21.0122, website:"https://www.pw.edu.pl", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/polonia" },
{ university:"UNIVERSITY OF WROCLAW", city:"WROCLAW", country:"POLAND", lat:51.1079, lon:17.0385, website:"https://www.uni.wroc.pl", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/polonia" },

{ university:"TECHNICAL UNIVERSITY IASI", city:"IASI", country:"ROMANIA", lat:47.1585, lon:27.6014, website:"https://www.tuiasi.ro", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/rumania" },
{ university:"UNIVERSITY OF ORADEA", city:"ORADEA", country:"ROMANIA", lat:47.0465, lon:21.9189, website:"https://www.uoradea.ro", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/rumania" },

{ university:"UNIVERSITY OF NIS", city:"NIS", country:"SERBIA", lat:43.3209, lon:21.8958, website:"https://www.ni.ac.rs", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/serbia" },

{ university:"UNIVERSITY OF GAVLE", city:"GAVLE", country:"SWEDEN", lat:60.6749, lon:17.1413, website:"https://www.hig.se", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/suecia" },
{ university:"KTH STOCKHOLM", city:"STOCKHOLM", country:"SWEDEN", lat:59.3293, lon:18.0686, website:"https://www.kth.se", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/suecia" },

{ university:"AALTO UNIVERSITY", city:"ESPOO", country:"FINLAND", lat:60.2055, lon:24.6559, website:"https://www.aalto.fi", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/finlandia" },
{ university:"UNIVERSITY OF OULU", city:"OULU", country:"FINLAND", lat:65.0121, lon:25.4651, website:"https://www.oulu.fi", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/finlandia" },
{ university:"TURKU UNIVERSITY OF APPLIED SCIENCES", city:"TURKU", country:"FINLAND", lat:60.4518, lon:22.2666, website:"https://www.tuas.fi", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/finlandia" },

{ university:"UNIVERSITY OF LJUBLJANA", city:"LJUBLJANA", country:"SLOVENIA", lat:46.0569, lon:14.5058, website:"https://www.uni-lj.si", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/eslovenia" },
{ university:"UNIVERSITY OF MARIBOR", city:"MARIBOR", country:"SLOVENIA", lat:46.5547, lon:15.6459, website:"https://www.um.si", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/eslovenia" },

{ university:"TECHNICAL UNIVERSITY KOSICE", city:"KOSICE", country:"SLOVAKIA", lat:48.7164, lon:21.2611, website:"https://www.tuke.sk", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/eslovaquia" },
{ university:"UNIVERSITY OF ZILINA", city:"ZILINA", country:"SLOVAKIA", lat:49.2231, lon:18.7394, website:"https://www.uniza.sk", experience:"https://outstudentsetsit.blogs.upv.es/experiencias/eslovaquia" }

];