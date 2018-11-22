// There are all available commands
'use strict';
const payloadsMap = new Map();


// Set FACULTIES
payloadsMap.set('vse', 'Vysoká škola ekonomická v Praze (VŠE), založená v roce 1953, je největší veřejnou vysokou školou ekonomickou v České republice. VŠE se člení na 6 fakult a v současné době téměř 16 tisíc studentů.')
	.set('ffu', 'V současné době fakultu tvoří sedm kateder – bankovnictví a pojišťovnictví, didaktiky ekonomických předmětů, financí a oceňování podniku, finančního účetnictví a auditingu, měnové teorie a politiky, manažerského účetnictví, veřejných financí.')
	.set('fmv', 'FMV na základě jednotného ekonomického standardu VŠE rozvíjí studium a vědecko-výzkumnou činnost zejména v oblastech mezinárodní ekonomické vztahy, cestovní ruch, mezinárodní politika a diplomacie, politologie, obchodní a mezinárodní právo.')
	.set('fph', 'Fakulta podnikohospodářská Vysoké školy ekonomické v Praze patří mezi nejvýznamnější fakulty zaměřené na oblast managementu v regionu střední a východní Evropy. Posláním fakulty je vytvářet a předávat znalosti, rozvíjet dovednosti a formovat postoje pro úspěšné řízení firem a organizací.')
	.set('fis', 'Fakulta informatiky a statistiky sdružuje katedry a studijní obory zabývající se informačními systémy, statistickými, ekonometrickými a demografickými metodami, a jejich aplikacemi ve všech oblastech hospodářského života 💻.')
	.set('nf', 'Národohospodářská fakulta připravuje odborně kvalifikované ekonomy, kteří najdou uplatnění v soukromém i veřejném sektoru v ČR i v za­hraničí. Poskytuje studentům vzdělání v širokém spektru předmětů ekonomických, právních a dalších společenskovědních disciplín.')
	.set('fm', 'Fakulta managementu v Jindřichově Hradci je jedinou mimopražskou fakultou Vysoké školy ekonomické v Praze. Nabízí modulárně koncipované vzdělání ve všech stupních vysokoškolského studia v oboru Ekonomika a management.');

// Set DORMITORIES
payloadsMap.set('blanice', 'Rozlehlá desetipatrová panelová budova s kapacitou 1036 lůžek je situována v areálu kolejí na Jižním Městě v Praze 4. V blízkosti se nachází autobusová zastávka Volha. Zastávka metra Chodov (červená trasa C) je vzdálena tři zastávky autobusem MHD ze zastávky Volha. K dispozici je 516 dvoulůžkových pokojů, které jsou uspořádány do buněk. Struktura buněk je 2+2 (dva dvoulůžkové pokoje), tedy v rámci jedné buňky jsou umístěna 4 lůžka.')
	.set('vltava', 'Rozlehlá desetipatrová panelová budova, která je ve správě Univerzity Karlovy, je situována v areálu kolejí na Jižním Městě v Praze 4. Vysoká škola ekonomická disponuje 508 lůžky na pokojích v šestém až desátém patře budovy, což je polovina z celkové kapacity budovy. V blízkosti se nachází autobusová zastávka Volha. Zastávka metra Chodov (červená trasa C) je vzdálena tři zastávky autobusem MHD ze zastávky Volha.')
	.set('jarov1', 'Bydlení na koleji má poměrně zásadní výhody oproti pronájmu bytu. Není třeba se o nic starat, veškeré vybavení máte k dispozici už při nastěhování. Mimo běžného zařízení pokoje můžete používat také pračku, kuchyňku, studovnu a podobně. Stejně jako máte možnost za velmi výhodných podmínek využívat sportovního vybavení, například posiloven a dalších život zpříjemňujících vymožeností, jejichž nabídka se stále zpestřuje.')
	.set('jarov1E', 'Bydlení na koleji má poměrně zásadní výhody oproti pronájmu bytu. Není třeba se o nic starat, veškeré vybavení máte k dispozici už při nastěhování. Mimo běžného zařízení pokoje můžete používat také pračku, kuchyňku, studovnu a podobně. Stejně jako máte možnost za velmi výhodných podmínek využívat sportovního vybavení, například posiloven a dalších život zpříjemňujících vymožeností, jejichž nabídka se stále zpestřuje.')
	.set('jarov2', 'Bydlení na koleji má poměrně zásadní výhody oproti pronájmu bytu. Není třeba se o nic starat, veškeré vybavení máte k dispozici už při nastěhování. Mimo běžného zařízení pokoje můžete používat také pračku, kuchyňku, studovnu a podobně. Stejně jako máte možnost za velmi výhodných podmínek využívat sportovního vybavení, například posiloven a dalších život zpříjemňujících vymožeností, jejichž nabídka se stále zpestřuje.')
	.set('jarov3G', 'Bydlení na koleji má poměrně zásadní výhody oproti pronájmu bytu. Není třeba se o nic starat, veškeré vybavení máte k dispozici už při nastěhování. Mimo běžného zařízení pokoje můžete používat také pračku, kuchyňku, studovnu a podobně. Stejně jako máte možnost za velmi výhodných podmínek využívat sportovního vybavení, například posiloven a dalších život zpříjemňujících vymožeností, jejichž nabídka se stále zpestřuje.')
	.set('roos', 'Rooseveltova kolej je sedmipatrová budova ze čtyřicátých let dvacátého století, která byla kompletně zrekonstruovaná v roce 2001 s bezbariérovým vstupem a disponuje kapacitou 373 lůžek. K dispozici je 19 jednolůžkových, 111 dvoulůžkových a 44 třílůžkových pokojů. Polovina pokojů je uspořádána do buněk s vlastním sociálním zařízením a polovina pokojů má společné sociální zařízení na patře.')
	.set('svec', 'Kolej vznikla přestavbou bývalých vojenských kasáren. Poloha objektu, jehož kapacita je 304 lůžek, je přímo ve středu města, v těsné blízkosti městského parku. Od fakulty je vzdálen přibližně 10 minut chůze.');

// Set about Developer
payloadsMap.set('sayAboutMe', 'Student Vysoké školy ekonomické a NODE js programátor. Bota jsem vytvořil jako zadání bakalářské práce v roce 2017. Prvotním cílem bylo se naučit programovat v javascriptu, ale nakonec se z toho vyklubal komplexní projekt.');



module.exports = {
	payloadsMap : payloadsMap
};
