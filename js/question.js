const quiz = [
    {
        q:'Zageszczenie izobar na mapie pogody informuje: ',
        options: ['O slabnieciu wiatru','Zmianie zachmurzenia','Wystapieniu silnego wiatru'],
        answer: 2,
        topic: "meteo"
    },
    {
        q:'Przy dobrej pogodzie zaobserwowano chmury cirrus i cirrostratus, zwiastuje to: ',
        options: ['Dalsze utrzymywanie sie dobrej pogody','Zblizanie sie frontu chlodnego','Zblizanie sie frontu cieplego'],
        answer: 2,
        topic: "meteo"
    },
    {
        q:'W komunikacie meteorologicznym podano, ze nad srodkowa Polska bedzie przemieszczal sie front chlodny z zachodu na wschod. Jakiej pogody mozna sie spodziewac na Zalewie Zegrzynskim?',
        options: ['Bez opadow, male zachmurzenie','Ciagly opad deszczu slabnacy wiatr','Duze zachmurzenia, burze, szkwaly'],
        answer: 2,
        topic: "meteo"
    },
    {
        q:'Na mapie synoptycznej pokazanej w TV srodek wyzu jest polozony na polnoc od naszej pozycji. Jakiego kierunku wiatru mozna sie spodziewac? ',
        options: ['Polnocno wschodniego','Poludniowo wschodniego','Zachodniego'],
        answer: 0,
        topic: "meteo"
    },
    {
        q:'Na horyzoncie widac chmure jak obok, slychac grzmoty. Jakiej pogody mozna sie spodziewac?',
        options: ['Silny wiatr bez opadow','Gwaltowne opady, silne szkwaly','Dlugotrwaly deszcz, slaby wiatr'],
        img: 'img/1.png',        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'W prognozie okreslono wiatr jako ,,slaby".',
        options: ['W skali Beauforta to 7B','W skali Beauforta to 2B','W skali Beauforta to 5B'],
        answer: 1,
        topic: "meteo"
    },
    {
        q:'Wiatr przyziemny w wyzu wieje:',
        options: ['Prostopadle do izobar od centrum wyzu','Do centrum wyzu z zewnatrz','Od srodka wyzu odchylony zgodnie z ruchem wskazowek zegara, kat 20-400 do izobary'],
        answer: 2,
        topic: "meteo"
    },
    {
        q:'Jakiej pogody mozna spodziewac sie na obszarze wyzowym?',
        options: ['Duze zachmurzenie opady','Burze, opady przelotne','Male zachmurzenie lub bezchmurnie brak opadow'],
        answer: 2,
        topic: "meteo"
    },
    {
        q:'Radiowy morski komunikat meteorologiczny posiada nastepujacy schemat:',
        options: ['Prognoza na nastepne 24 godziny','Ostrzezenia, sytuacja baryczna, prognoza na 12 godzin, orientacyjna prognoza na nastepne 12 godzin','Omowienie sytuacji barycznej, prognoza na 12 godzin'],
        answer: 1,
        topic: "meteo"
    },
    {
        q:'Ktore z wymienionych chmur daja znaczne opady?',
        options: ['Cirrus i stratus','Altostratus i Altocumulus','Nimbostratus i Cumulonimbus'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'W komunikatach pogody nadawanych przez radio podawane sa przede wszystkim ponizsze informacje',
        options: ['Wilgotnosc wzgledna','Kierunek i sila wiatru, temperatura, opad','Rodzaje wystepujacych chmur'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Na mapie synoptycznej taki symbol oznacza:',
        options: ['Front cieply','Front zokludowany','Front chlodny'],
        img: 'img/3.png',        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Bryza dzienna (morska) to wiatr lokalny wiejacy:',
        options: ['Od strony ladu nad morze lub jezioro','Od strony morza lub jeziora nad lad','Wzdluz brzegu'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Powierzchnia (warstwa) rozdzielajaca mase powietrza cieplego od masy powietrza chlodnego w przypadku kiedy powietrze cieple naplywa na chlodne to:',
        options: ['Front chlodny','Front cieply','Front zokludowany'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Powierzchnia (warstwa) rozdzielajaca mase powietrza chlodnego od masy powietrza cieplego w przypadku kiedy powietrze chlodne naplywa pod cieple to:',
        options: ['Front chlodny','Front cieply','Front zokludowany'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Pojawiajace sie na niebie chmury cirrus a potem stopniowo cirrostratus, altostratus, stratus swiadcza o nadejsciu',
        options: ['Frontu cieplego','Frontu chlodnego','Ukladu wyzowego'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Pojawiajace sie na niebie wysoko wypietrzone chmury Cumulonimbus jak na zdjeciu swiadcza o nadejsciu :',
        options: ['frontu cieplego','frontu chlodnego','opadow przy slabym wietrze'],        
        img: 'img/4.png',	
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Kolejne pojawianie sie chmur pokazanych na rysunku Cirrus i Cirrostratus przy spadku cisnienia zwiastuje:',
        options: ['Dalsze utrzymywanie sie dobrej pogody','Slabniecie wiatru i wzrost temperatury','Zblizanie sie frontu cieplego'],        
	img: 'img/5.png',
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Pojawiajace sie rano i nieznacznie rozbudowujace sie drobne chmury Cumulus pokazane na rysunku zwiastuja:',
        options: ['ladniejsza, sloneczna pogode','nadejscie dlugotrwalych opadow deszczu','nadejscie burz i silnych wiatrow'],        
	img: 'img/5.png',
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Gdzie w ukladzie nizowym wystepuje najwieksze i najmniejsze cisnienie atmosferyczne?',
        options: ['Najmniejsze w srodku, a najwieksze na zewnatrz','Najwieksze w srodku a najmniejsze na zewnatrz','Najwieksze w czesci polnocnej, a najmniejsze w poludniowej'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Z ktorych chmur mozna spodziewac sie opadow deszczu ?',
        options: ['Nimbostratus, Cumulonimbus','Cirrus i cirrostratus','Stratocumulus, Cirrocumulus'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Silne szkwaly moga towarzyszyc chmurom',
        options: ['Nimbostratus','Cumulonimbus','Stratus'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Front atmosferyczny jest to',
        options: ['Linia laczaca osrodki wysokiego cisnienia na danym obszarze','Zasieg wystepowania opadow na danym obszarze','Powierzchnia (warstwa) rozgraniczajaca dwie masy powietrza o odmiennych wlasciwosciach (szczegolnie o roznej temperaturze)'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Pogoda wystepujaca w wyzu barycznym to',
        options: ['Pogoda zmienna','Pogoda pochmurna - deszczowa','Pogoda z malym zachmurzeniem - bez opadow'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Izobary kreslone na mapach pogody sa to',
        options: ['Linie laczace punkty o jednakowej temperaturze','Linie laczace punkty o jednakowej wilgotnosci powietrza','Linie laczace punkty o jednakowej wartosci cisnienia'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Podczas bryzy nocnej wiatr wieje',
        options: ['Od ladu do wody','Od wody do ladu','Zmienia kierunek na rownolegly do linii brzegowej'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Jezeli w prognozie radiowej slyszymy ,,niz znad Danii poglebia sie i przesuwa szybko na poludniowy wschod", to w ciagu najblizszej doby na Zalewie Zegrzynskim spodziewamy sie',
        options: ['Slabnacych wiatrow z kierunkow wschodnich','Rosnacej sily wiatru z kierunkow zachodnich','Slabych wiatrow polnocnych'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Widzisz bliska chmure jak na zdjeciu , wieje slaby wiatr w jej kierunku, zakladasz ze:',
        options: ['Chmura zaniknie nim do nas dotrze','Chmura zmierza w naszym kierunku i nalezy podjac przygotowania zwiazane z wystapieniem bardzo silnego szkwalistego wiatru i zmiana jego kierunku','Chmura odejdzie z wiatrem'],        
	img: 'img/7.png',
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Lampa ostrzegawcza funkcjonujaca w ramach Systemu Sygnalizacji Ostrzegawczej na szlaku Wielkich Jezior Mazurskich nadaje sygnaly swietlne z czestotliwoscia 90 blyskow na minute. Oznacza to: ',
        options: [',,Uwaga". Spodziewane burze i wiatr, bez wskazania dokladnego czasu i miejsca nadejscia zjawiska meteorologicznego.',',,Niebezpieczenstwo". Wystepowanie burzy oraz silnego wiatru w bliskim obszarze','Brak spodziewanych niebezpiecznych zjawisk meteorologicznych'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Lampa ostrzegawcza funkcjonujaca w ramach Systemu Sygnalizacji Ostrzegawczej na szlaku Wielkich Jezior Mazurskich nadaje sygnaly swietlne z czestotliwoscia 40 blyskow na minute. Oznacza to:',
        options: [',,Uwaga". Spodziewane burze i wiatr, bez wskazania dokladnego czasu i miejsca nadejscia zjawiska meteorologicznego.',',,Niebezpieczenstwo". Wystepowanie burzy oraz silnego wiatru w bliskim obszarze','Brak spodziewanych niebezpiecznych zjawisk meteorologicznych'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Symbol na mapie synoptycznej jak na rysunku, oznacza:',
        options: ['Front chlodny','Front cieply','Front zokludowany'],        
	img: 'img/8.png',
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Wiatr przyziemny w nizu wieje (polkula polnocna): ',
        options: ['Prostopadle do izobar do centrum nizu','Od centrum nizu z zewnatrz','Do srodka nizu, przeciwnie do ruchu wskazowek zegara, kat 20?-40? do izobary'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Wiatr okreslony w komunikacie meteorologicznym jako 1 - 2 w skali Beauforta to:',
        options: ['Wiatr slaby','Wiatr umiarkowany','Wiatr bardzo silny'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Wiatr okreslony w komunikacie meteorologicznym jako 4 w skali Beauforta to: ',
        options: ['Wiatr slaby','Wiatr umiarkowany','Wiatr bardzo silny'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Wiatr okreslony w komunikacie meteorologicznym jako 6 - 7 w skali Beauforta to: ',
        options: ['Sztorm','Wiatr umiarkowany','Wiatr bardzo silny'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'W ciagu dnia obserwowano chmury jak na rysunku. Po poludniu wiatr oslabl, a chmury powoli zanikaja, cisnienie nie zmienialo sie. Jakiej pogody mozna sie spodziewac?',
        options: ['Podobnej pogody bez opadow i niewielkim zachmurzeniu','Wzrostu zachmurzenia, przelotnych opadow','Bardzo silnego wiatru przy niewielkim zachmurzeniu'],        
	img: 'img/9.png',
	answer: 0,
        topic: "meteo"
    },
    {
        q:'W prognozie meteorologicznej podano, ze front chlodny zwiazany z nizem nad srodkowym Baltykiem przemieszcza sie nad Polska z zachodu na wschod. Na Zalewie Zegrzynskim wiatr jest poludniowo zachodni. Jakiej zmiany wiatru mozemy sie spodziewac? ',
        options: ['Zmiany wiatru na zachodni i polnocno-zachodni','Zmiany wiatru na poludniowy i poludniowo-wschodni','Zmiany wiatru na polnocno-wschodni'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Na rysunku pokazano fragment mapy synoptycznej. Jakiego wiatru mozemy spodziewac sie w Polsce?',
        options: ['Polnocno-wschodniego','Zachodniego','Poludniowo-wschodniego'],        
	img: 'img/10.png',
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Na rysunku pokazano diagram kierunku i sily wiatru dla jednej doby ( godziny od 08.00 do  08.00). Prognoza ICM. Jak zmieni sie kierunek i sila wiatru w stopniach Beauforta w ciagu tej doby?',
        options: ['na poczatku okresu SE 3B na koncu S-SW 2B','na poczatku okresu SW 2B na koncu S-SW 3B','na poczatku okresu NW 30B na koncu SE 20B'],        
	img: 'img/11.png',
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Na polskiej mapie synoptycznej poszczegolne skroty ,, N, W, " oznaczaja kolejno',
        options: ['Wiatr polnocny (North), wiatr zachodni (West)','Centrum nizu, centrum wyzu','Chmury niskie, chmury wysokie'],        
	img: 'img/12.png',
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Halo wokol slonca zwiastuje',
        options: ['Jest spowodowane chmurami cirrostratus, a zatem zwiastuje zblizanie sie frontu cieplego i pogorszenie sie pogody','Jest spowodowane zmniejszona wilgotnoscia powietrza, a zatem wskazuje polepszenie pogody','Jest spowodowane zwiekszona wilgotnoscia powietrza, a zatem wskazuje na mozliwosc wystapienia mgiel'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'W jakim ukladzie barycznym moga wystepowac obszary o silniejszym wietrze?',
        options: ['Tylko w wyzu barycznym','tylko w nizu barycznym','Zarowno w wyzu jak i nizu bo zalezy to od gradientu cisnienia'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Przed poludniem zaobserwowano rozwoj chmur klebiastych cumulus rozbudowujacych sie coraz wyzej i skupiajacych sie w duze zespoly. Jakiej pogody mozna sie spodziewac w  najblizszych godzinach? ',
        options: ['Ochlodzenia przy braku opadow','Niewielkich opadow przy slabym wietrze','Pogody burzowej, szkwalistego wiatru'],        
	answer: 2,
        topic: "meteo"
    },
    {
        q:'Stosunkowo dlugie i umiarkowane opady wystepuja zazwyczaj:',
        options: ['Przy przechodzeniu frontu chlodnego','Przy przechodzeniu frontu cieplego','Na obszarach wyzowych'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Krotkotrwale i gwaltowne opady wystepuja zazwyczaj:',
        options: ['Przy przechodzeniu frontu chlodnego','Przy przechodzeniu frontu cieplego','Na obszarach o podwyzszonym cisnieniu'],        
	answer: 0,
        topic: "meteo"
    },
    {
        q:'Front zokludowany powstaje na skutek',
        options: ['Nasuniecie sie frontu cieplego na front chlodny ze wzgledu na jego szybsze przemieszczanie sie','Nasuniecie sie frontu chlodnego na front cieply ze wzgledu na jego szybsze przemieszczanie sie','Wzrostu cisnienia na obszarze nizowym'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'W komunikacie meteorologicznym podano, ze nad Polska rozbudowuje sie uklad wyzowy. Jakiej pogody mozna sie spodziewac?',
        options: ['Niewielkich opadow, przy duzym zachmurzeniu','Niewielkiego zachmurzenia lub pogody bezchmurnej, brak opadow','Burz i przelotnych opadow'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Wzrostu sily wiatru podczas zeglugi wzdluz nawietrznego brzegu mozna sie spodziewac w miejscach',
        options: [' Gdzie brzeg jest wysoki lub zalesiony','W miejscach obnizenia (przerwach) wysokiej linii brzegowej','Uksztaltowanie terenu nie ma wplywu na szybkosc wiatru'],        
	answer: 1,
        topic: "meteo"
    },
    {
        q:'Znak zakazujacy wejscia do sluzy to',
        options: ['Jedno zielone swiatlo','Dwa swiatla czerwone','Swiatlo czerwone i zielone obok siebie'],        
	answer: 1,
        topic: "locja"
    },
    {
        q:'Co oznacza taki znak na moscie ?',
        options: ['Zakaz przeplywania pod przeslem','Ruch w obu kierunkach pod przeslem','Ruch w jednym kierunku pod przeslem'],        
	answer: 2,
    img: 'img/13.png',
        topic: "locja"
    },
    {
        q:'Jacht na jeziorze Niegocin plynie w kierunku polnocnym, na kursie zaobserwowano boje jak na rysunku (oznakowanie w gore Polnoc- Poludnie /Wegorzewo - Pisz). Jak ja minad?',
        options: [' Prawa burta','Nie wplywad - zakaz zeglugi','Lewa burta'],        
	answer: 0,
    img: 'img/14.png',
        topic: "locja"
    },
    {
        q:'Co oznacza pokazana tablica ?',
        options: [' Zakaz zeglugi na silniku','Dozwolone plywanie na silniku','Nakaz zeglugi na silniku'],
	answer: 1,
    img: 'img/15.png',
        topic: "locja"
    },
    {
        q:'Jakie minimum pomocy nawigacyjnych nalezy mied na jachcie zeglujacym na Zatoce Gdanskiej ?',
        options: ['Mape, locje akwenu i kompas','Sekstant i Rocznik Astronomiczny','Spis radiostacji i Locje Baltyku'],        
	answer: 0,
        topic: "locja"
    },
    {
        q:'Co oznacza taki znak na kanale ?',
        options: [' Prawa burta','Nie wplywad - zakaz zeglugi','Lewa burta'],        
	answer: 1,
    img: 'img/16.png',
        topic: "locja"
    },
    {
        q:'Plynac na Mazury rzeka Pisa pod prad zauwazono na nurcie tyke jak na rysunku. Jak ja ominad ? ',
        options: ['Prawa burta','Lewa burta','Z dowolnej strony '],
	answer: 0,
    img: 'img/17.png',
        topic: "locja"
    },
    {
        q:'Co oznacza ten znak ?',
        options: ['Nakaz zeglugi tylko z jednym zaglem','Pierwszeostwo przejscia dla jachtow zaglowych','Zakaz zeglugi pod zaglami'],        
	answer: 2,
    img: 'img/18.png',
        topic: "locja"
    },
    {
        q:'Co oznacza ten znak i jak sie zachowad ? ',
        options: ['Przystao statkow pasazerskich, mijad daleko','Prom na uwiezi. Mijad za rufa nie za blisko','Dozwolone cumowanie dla jachtow'],        
	answer: 1,
    img: 'img/19.png',
        topic: "locja"
    },
    {
        q:'Wchodzac do sluzy najwazniejsze jest przygotowanie: ',
        options: ['Kotwicy do rzucenia','Dwoch dlugich cum','Kola ratunkowego z rzutka'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Na kursie jachtu zaobserwowano jeden z pokazanych znakow. Jak go mozna minad?',
        options: ['Tylko lewa burta','Tylko prawa burta','W dowolny sposob prawa lub lewa burta'],        
	answer: 2,
    img: 'img/20.png',
        topic: "locja"
    },
    {
        q:'Zeglujemy na Zalewie Szczecioskim. W locji znalezlismy informacje, ze do portu Stepnica nalezy wchodzid w nabiezniku - stawa dolna z rombem, stawa gorna z trojkatem. Zaobserwowano nabieznik jak na rysunku. Jak zmienid kurs aby wejsd w linie nabieznika?',
        options: ['W prawo','Nie nalezy zmieniad kursu','W lewo'],        
	answer: 2,
    img: 'img/21.png',
        topic: "locja"
    },
    {
        q:'Przy wyjsciu z kanalu zaobserwowano taki znak. Co oznacza ?',
        options: ['Nakaz zeglugi na silniku','Zakaz zeglugi na silniku','Dozwolone plywanie na silniku malej mocy'],
	answer: 1,
    img: 'img/22.png',
        topic: "locja"
    },
    {
        q:'Plynac kanalem zaobserwowano taki znak. Co oznacza?',
        options: ['Uwaga przeszkoda podwodna','Nakaz dawania sygnalu dzwiekowego','Zakaz zatrzymywania sie'],        
	answer: 1,
    img: 'img/23.png',
        topic: "locja"
    },
    {
        q:'Zblizajac sie do mostu na kanale zaobserwowano taki znak. Co on oznacza?',
        options: [' Zakaz przejscia jachtow o dlugosci powyzej 7,5 m','Wysokosd przejscia nad linia wody 7,5 m','Zakaz cumowania jachtow o dlugosci 7,5 m'],        
	answer: 1,
    img: 'img/24.png',
        topic: "locja"
    },
    {
        q:'Plynac kanalem zaobserwowano taki znak. Jak postepowad?',
        options: ['Obserwowad czy nie przeplywa prom i ewentualnie ustapid z drogi','Znak oznacza przystao - mozna ewentualnie cumowad','Male statki maja pierwszeostwo przejscia'],
	answer: 0,
    img: 'img/25.png',
        topic: "locja"
    },
    {
        q:'W poblizu brzegu zaobserwowano kilka boi jak na rysunku. Co one oznaczaja i jak sie zachowad?',
        options: ['Akwen dozwolony do zeglugi tylko z mala predkoscia','Akwen zamkniety. Nie wplywad','Niedozwolona zegluga pod zaglami, mozna plynad na wioslach'],        
	answer: 1,
    img: 'img/26.png',
        topic: "locja"
    },
    {
        q:'Jacht plynac kanalem na pewnym odcinku zauwazyl znak jak na rysunku. Co on oznacza?',
        options: ['Dozwolone cumowanie','Zakaz cumowania','Parking tylko dla lodzi motorowych'],        
	answer: 0,
    img: 'img/27.png',
        topic: "locja"
    },
    {
        q:'Jacht po wyplynieciu z przesmyku miedzy jeziorami. Zaobserwowal plawe jak na rysunku. Co ona oznacza?',
        options: ['Plycizne, ktora mozna mijad z obu stron','Rozwidlenie szlaku zeglownego','Akwen hodowli ryb, nie wplywad'],
	answer: 1,
    img: 'img/28.png',
        topic: "locja"
    },
    {
        q:'Na moscie stalym zaobserwowano znak jak na rysunku. Jak przechodzid pod mostem?',
        options: ['Przechodzid pod mostem trzymajac sie prawej strony','Przechodzid w dowolny sposob bo to przejscie jednokierunkowe','Oczekiwad na sygnal zezwalajacy na przejscie'],        
	answer: 0,
    img: 'img/29.png',
        topic: "locja"
    },
    {
        q:'Na wejsciu do kanalu zaobserwowano znak jak na rysunku. Co on oznacza?',
        options: ['Zakaz wplywania poza znak','Nakaz zrzucenia zagli','Zakaz cumowania po prawej stronie'],        
	answer: 0,
    img: 'img/30.png',
        topic: "locja"
    },
    {
        q:'Jacht plynie w kierunku zachodnim. Na kursie zaobserwowano plawe jak na rysunku. Po ktorej stronie ja minad ?',
        options: ['Po polnocnej','Po poludniowej','Mozna minad z obu stron'],
	answer: 0,
    img: 'img/31.png',
        topic: "locja"
    },
    {
        q:'Na kursie jachtu plynacego na polnoc zaobserwowano plawe jak na rysunku. Co ona oznacza i jak postapid?',
        options: ['Zachodnia strone niebezpieczeostwa, minad lewa burta','Wschodnia strone niebezpieczeostwa, minad prawa burta','Poludniowa strone niebezpieczeostwa, minad w bezpiecznej odleglosci (sprawdzajac na mapie polozenie niebezpieczeostwa)'],        
	answer: 2,
    img: 'img/32.png',
        topic: "locja"
    },
    {
        q:'Jacht plynacy na polnoc zaobserwowal z lewej burty przed dziobem plawe jak na rysunku. Jak bezpiecznie ominad niebezpieczeostwo?',
        options: ['Kontynuowad kurs mijajac plawe lewa burta','Zmienid kurs w lewo i minad plawe prawa burta','Zawrocid bo plawa stoi na poludnie od niebezpieczeostwa'],        
	answer: 0,
    img: 'img/33.png',
        topic: "locja"
    },
    {
        q:'Na kursie jachtu zaobserwowano plawe jak na rysunku. Co ona oznacza?',
        options: ['Po zachodniej stronie plawy znajduje sie niebezpieczeostwo','Po wschodniej stronie plawy znajduje sie niebezpieczeostwo','Plawa oznacza male odosobnione niebezpieczeostwo'],
	answer: 1,
    img: 'img/34.png',
        topic: "locja"
    },
    {
        q:'Jacht plynacy rzeka Pisa pod prad zaobserwowal znak jak na rysunku. Jak nalezy bezpiecznie go minad?',
        options: ['Prawa burta','Lewa burta','Oznacza odosobnione niebezpieczeostw, mozna mijad z obu stron'],
	answer: 1,
    img: 'img/35.png',
        topic: "locja"
    },
    {
        q:'Jacht na jeziorze plynie w kierunku zachodnim (oznakowanie ,,w gore" z zachodu na wschod), na kursie zaobserwowano tyke jak na rysunku. Jak ja minad?',
        options: ['Prawa burta','Nie wplywac - rezerwat ptakow','Lewa burta'],        
	answer: 2,
    img: 'img/36.png',
        topic: "locja"
    },
    {
        q:'Jacht o dlugosci 8 m i wysokosci masztu 14 m wplywa do kanalu. Na brzegu ustawione sa znaki jak na rysunku. Co nalezy zrobic ?',
        options: ['Nie ma przeszkod, plynad dalej','Polozyd maszt i plynad dalej','Nie da sie przejsd jacht jest za dlugi'],
	answer: 1,
    img: 'img/37.png',
        topic: "locja"
    },
    {
        q:'W systemie kardynalnym plawy ustawia sie w stosunku do niebezpieczeostwa',
        options: ['zawsze 4 plawy: na N, na S, na W i na E od niebezpieczeostwa','W zaleznosci od polozenia i wielkosci niebezpieczeostwa jedna lub wiecej plaw odpowiednio na N, S, W czy E od niebezpieczeostwa','Tylko dwie plawy na N i S lub E i W od niebezpieczeostwa'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Gdzie mozna znalezd informacje o kierunkach oznakowania nawigacyjnego na srodladowych drogach wodnych?',
        options: ['Na mapach turystycznych','W zalaczniku nr 9 do przepisow zeglugowych na srodladowych drogach wodnych (Rozporzadzenie Ministra Infrastruktury z 28.04.2003 r)','W Rozporzadzeniu Ministra Sportu i Turystyki w sprawie uprawiania turystyki wodnej'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Na odnodze kanalu zeglownego zaobserwowano znak jak na rysunku. Co oznacza i jak sie zachowac?',
        options: ['Sluza, plynad i obserwowad sygnaly','Jaz, niebezpieczeostwo, moze byd silny prad, upewnic sie czy mozna przeplywad.','Przystao mozna zacumowad przy nabrzezu'],        
	answer: 1,
    img: 'img/38.png',
        topic: "locja"
    },
    {
        q:'Tama spietrzajaca wode lecz nie zawsze pozwalajaca na przeplywanie jednostek plywajacych to: ',
        options: ['Sluza','Jaz','Ostroga'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Budowla hydrotechniczna pozwalajaca na przechodzenie jednostek z akwenu o wyzszym poziomie wody do akwenu o nizszym poziomie lub odwrotnie to:',
        options: ['Sluza komorowa','Jaz','Zapora'],
	answer: 0,
        topic: "locja"
    },
    {
        q:'Jacht plynacy rzeka z pradem zaobserwowal na kursie znak jak na rysunku. Co on oznacza i co nalezy zrobid?',
        options: ['Przeszkoda na szlaku, mozna minad z obu stron','Rozwidlenie szlaku zeglownego, sprawdzic na mapie gdzie plynad.','Dopuszczalny postoj po prawej stronie szlaku zeglownego'],
	answer: 0,
    img: 'img/39.png',
        topic: "locja"
    },
    {
        q:'Plynac kanalem zaobserwowano znak jak na rysunku. Jezeli na trojkacie z prawej strony znaku znajduje sie liczba to co ona oznacza?',
        options: ['Liczbe jednostek ktore moga tu cumowac','Odleglosd w m okreslajaca dlugosc odcinka do cumowania','Glebokosc przy nabrzezu przeznaczonym do cumowania'],        
	answer: 1,
    img: 'img/40.png',
        topic: "locja"
    },
    {
        q:'Jacht na jeziorze Sniardwy plynie na poludnie w kierunku miejscowosci Pisz. Na kursie zaobserwowano stozkowa plawe (1) a kilkadziesiat metrow dalej plawe jak na rysunku (2). Jak mijad te znaki?',
        options: ['Plawe zielona (1) lewa burta, plawe (2) tez lewa burta','Plawe zielona (1) prawa burta, plawe (2) lewa burta','Plawe zielona (1) prawa burta, plawe (2) tez prawa burta'],
	answer: 2,
    img: 'img/41.png',
        topic: "locja"
    },
    {
        q:'W systemie kardynalnym plawy ustawia sie w stosunku do niebezpieczeostwa:',
        options: ['zawsze 4 plawy: na N, na S, na W i na E od niebezpieczeostwa','W zaleznosci od polozenia i wielkosci niebezpieczeostwa jedna lub wiecej plaw odpowiednio na N, S, W czy E od niebezpieczeostwa','Tylko dwie plawy na N i S lub E i W od niebezpieczeostwa'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Jacht plynacy na poludnie zaobserwowal na kursie najpierw pierwsza plawe, a dalej w prawo od kursu druga plawe. Jak plynad aby ominad niebezpieczeostwo? ',
        options: ['Zmienic kurs w lewo i minad obie plawy prawa burta','Zmienic kurs w lewo i minad plawe (rys.1) prawa burta, a plawe (rys. 2) lewa burta','Zmienic kurs w prawo i minad obie plawy 1 2 ( rys.1 i 2 ) lewa burta.'],
	answer: 2,
    img: 'img/42.png',
        topic: "locja"
    },
    {
        q:'Plynac wzdluz brzegu jeziora zaobserwowano na brzegu znak jak na rysunku. Co on oznacza ?',
        options: ['Punkt nadawania ostrzezeo meteorologicznych','Wejscie do kanalu - po lewej stronie znaku','Wejscie do kanalu - po prawej stronie znaku'],        
	answer: 1,
    img: 'img/43.png',
        topic: "locja"
    },
    {
        q:'Plynac wzdluz brzegu jeziora zaobserwowano na brzegu znak jak na rysunku. Co on oznacza ?',
        options: ['Punkt nadawania ostrzezeo meteorologicznych','Wejscie do kanalu - po lewej stronie znaku','Wejscie do kanalu - po prawej stronie znaku'],
	answer: 2,
    img: 'img/44.png',
        topic: "locja"
    },
    {
        q:'Przy zegludze w gore rzeki ( pod prad) prawa burta nalezy mijac:',
        options: ['Plawy lub tyki czerwone ze znakiem szczytowym walec.','Plawy lub tyki zielone ze znakiem szczytowym stozek.','Plawy lub tyki z wiecha'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Na brzegu zaobserwowano znak jak na rysunku. Jak nalezy sie zachowac?',
        options: [' Uwaga, moga przeplywad szybkie lodzie motorowe i skutery wodne','Zmniejszyc szybkosd, aby nie wytwarzad fali','Nierowna linia brzegowa, splycenia, zachowad ostroznosc'],
	answer: 1,
    img: 'img/45.png',
        topic: "locja"
    },
    {
        q:'Czy pod stalymi mostami mozna przeplywad w dowolnym miejscu?',
        options: ['Nie, mozna przeplywad tylko po zaobserwowaniu sygnalu wolnego przejscia','Tak, po upewnieniu sie czy wysokosd mostu jest wystarczajaca i pod oznakowanym przeslem','Tak, w dowolnym miejscu jezeli wysokosd mostu jest wystarczajaca'],        
	answer: 1,
        topic: "locja"
    },
    {
        q:'Jacht zbliza sie do mostu zwodzonego. Na moscie zaobserwowano sygnal jak na rysunku. Jak nalezy sie zachowad?',
        options: [' Most uszkodzony, zakaz przejscia','Otwarcie mostu nastapi za dwie godziny','Przygotowac  sie  do  przejscia,  wkrotce nastapi otwarcie mostu'],
	answer: 2,
    img: 'img/46.png',
        topic: "locja"
    },
    {
        q:'Jacht o wysokosci masztu 8m, szerokosci 4m i zanurzeniu 1m, zaobserwowal przy wejsciu do kanalu tablice jak na rysunku. Jak nalezy postapid? ',
        options: ['Nie da sie przejsd, nalezy zawrocic','Mozna przejsd po polozeniu masztu','Mozna przejsd nie ma przeszkod'],
	answer: 1,
    img: 'img/47.png',
        topic: "locja"
    },
    {
        q:'Zeglujac prawa strona toru wodnego zauwazono blisko brzegu znak jak na rysunku. Co on oznacza i jak sie zachowac?',
        options: ['Miejsce dogodne do zacumowania. Mozna podejsd blisko lub cumowac','ostrzezenie o duzym ruchu. Zeglowad ostroznie','Miejsce niebezpieczne przy prawym brzegu. Ominad w bezpiecznej odleglosci'],
	answer: 2,
    img: 'img/48.png',
        topic: "locja"
    },
    {
        q:'Zeglujac po jeziorze zaobserwowano statek ktory podniosl sygnal jak na rysunku (biala kula). Co on oznacza i jak sie zachowad?',
        options: ['Statek stoi na kotwicy. Mijad nie za blisko','Na akwenie odbywaja sie zawody sportowe (np. regaty) Nie wplywac oddalid sie od tego akwenu.','Statek dryfuje. Mijad po stronie nawietrznej'],        
	answer: 1,
    img: 'img/49.png',
        topic: "locja"
    },
    {
        q:'Na kanale zaobserwowano ustawione znaki jak na rysunku. Co one oznaczaja?',
        options: [' Dozwolony postoj - punkt zdawania sciekow','Dozwolony postoj w strone wskazana bialym trojkatem - punkt tankowania wody pitnej','Dozwolony postoj tylko dla statkow wiozacych ladunki ciekle.'],
	answer: 1,
    img: 'img/50.png',
        topic: "locja"
    },
    {
        q:'W przesmyku miedzy jeziorami zaobserwowano dwie tyki ze znakami jak na rysunku. Co one oznaczaja i jak sie zachowad?',
        options: [' Miedzy znakami jest przeszkoda. Omijad po stronie bialych trojkatow','Zalecone przejscie pomiedzy znakami (miedzy zielonymi trojkatami)','Kazdy znak oznacza odosobnione niebezpieczeostwo. Mijad dowolnie'],
	answer: 1,
    img: 'img/51.png',
        topic: "locja"
    },
    {
        q:'Zeglujac lewa strona toru wodnego zauwazono blisko brzegu znak jak na rysunku. Co on oznacza i jak sie zachowac?',
        options: [' Miejsce dogodne do zacumowania. Mozna podejsd blisko lub cumowac','Ostrzezenie o duzym ruchu zeglugowym. Zeglowac ostroznie','Miejsce niebezpieczne przy lewym brzegu. Ominac w bezpiecznej odleglosci'],
	answer: 2,
    img: 'img/52.png',
        topic: "locja"
    },
    {
        q:'Na kanale zaobserwowano cztery jachty zacumowane po dwa burta w burte, a na brzegu znaki jak na rysunku. Czy mozemy za zgoda jednego z tych jachtow zacumowad do jego burty?',
        options: ['Tak, jest to dozwolone','Nie, dozwolone jest cumowanie tylko czterech jachtow','Nie, te jachty zacumowaly nieprawidlowo, niedozwolone jest cumowanie burta w burte'],        
	answer: 0,
    img: 'img/53.png',
        topic: "locja"
    },
    {
        q:'Jednym z elementow regulacji rzeki jest ostroga; jest ona budowla:',
        options: ['Usytuowana poprzecznie do przeplywu rzeki','Usytuowana rownolegle do przeplywu rzeki','Polozona w srodku koryta rzeki.'],
	answer: 0,
        topic: "locja"
    },
    {
        q:'Kierunek szlaku zeglownego (po prawej rece strona prawa - znaki czerwone, po lewej rece strona lewa - znaki zielone) na jeziorze jest okreslany:',
        options: ['Przez wlasciwy urzad zeglugi srodladowej z zasady w kierunku z poludnia na polnoc oraz ze wschodu na zachod.','Zawsze taki jak na rzece wpadajacej do jeziora','Zawsze taki jak na rzece wyplywajacej z jeziora'],
	answer: 0,
        topic: "locja"
    },
    {
        q:'Prawa strona szlaku zeglownego na rzece jest strona, ktora znajduje sie:',
        options: ['Na prawo od statku plynacego w dol rzeki (od zrodla do ujscia)','Na prawo od statku plynacego w gore rzeki (od ujscia do zrodla)','Na polnocnym lub wschodnim brzegu.'],
	answer: 0,
        topic: "locja"
    },
    {
        q:'Cumujac w sluzie nalezy',
        options: ['Oblozyd dokladnie cumy na urzadzeniach do cumowania tak aby powstale zawirowania wody i prad nie porwal jachtu','W ogole nie zakladad cum ze wzgledu na zmiany poziomu wody lecz caly czas odpychac sie bosakiem i pagajami od brzegow komory sluzy','Zalozyd cumy na biegowo, luzowad lub wybierad je w miare podnoszenia lub obnizania lustra wody.'],        
	answer: 2,
        topic: "locja"
    },
    {
        q:'Przed mostami zwodzonymi jedno lub wiecej swiatel czerwonych umieszczonych poziomo oznacza:',
        options: ['Zakaz przejscia','Przygotowad sie do przejscia','Otwieranie mostu okresowo wstrzymane.'],
	answer: 0,
        topic: "locja"
    },
    {
        q:'Plynac z Wisla z Torunia do Warszawy na kursie widzimy plawe (kolor trudno okreslid) w ksztalcie walca:',
        options: ['Mijam ja prawa burta','Mijam ja lewa burta','Moge wyminad po kazdej stronie bo to stara plawa nie obowiazujaca obecnie.'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Wplywajac do portu Jastarnia na Zatoce Gdaoskiej kursem na polnoc zielona plawe  pozostawiamy:',
        options: ['Po prawej burcie','Po lewej burcie','Obojetne, bo jest to plawa wyznaczajaca srodek farwateru.'],
	answer: 0,
        topic: "locja"
    },
    {
        q:'Na brzegu zaobserwowano tablice jak na rysunku obok. Co ona oznacza i jak postapic?',
        options: ['Uwaga - most o wysokosci przesla nad woda podanej na znaku (12 m)','Zakaz ruchu statkow o mocy silnika (KM) podanej na znaku','Nakaz nie przekraczania predkosci 12 km/h, dostosowad szybkosd'],        
	answer: 2,
    img: 'img/54.png',
        topic: "locja"
    },
    {
        q:'Zaobserwowano znak przedstawiony na rysunku, Co on oznacza?',
        options: ['Nakaz zachowania szczegolnej ostroznosci','Zakaz ruchu statkow zaglowych','Nakaz nadania sygnalu dzwiekowego'],
	answer: 0,
    img: 'img/55.png',
        topic: "locja"
    },
    {
        q:'Nabieznik jest to: ',
        options: ['Para wbitych w dno pali sluzacych do cumowania','Betonowy slup lub inny charakterystyczny znak stojacy na ladzie','Para staw albo innych stalych obiektow wyznaczajaca kierunek'],
	answer: 2,
        topic: "locja"
    },
    {
        q:'Jesli plyniesz rzeka wzdluz prawego brzegu i zobaczysz jeden ze znakow pokazanych na rysunku, to nalezy:',
        options: ['Zatrzymad sie przy brzegu i zlozyd maszt, w poblizu sluza','Spodziewad sie przejscia szlaku zeglownego na lewy brzeg i odpowiednio zmienid kurs','Miejsce niebezpieczne przy prawym brzegu'],
	answer: 1,
    img: 'img/56.png',
        topic: "locja"
    },
    {
        q:'Plynac rzeka wzdluz lewego brzegu widzisz jeden ze znakow pokazanych na rysunku, wtedy powinienes:',
        options: ['Zatrzymad sie przy brzegu i zlozyd maszt, w poblizu most','Spodziewad sie przejscia szlaku zeglownego na prawy brzeg, odpowiednio zmienid kurs','Ze szlak zeglowny przebiega przy lewym brzegu.'],        
	answer: 1,
    img: 'img/57.png',
        topic: "locja"
    },
    {
        q:'Przedstawione na rysunku znaki oznaczaja:',
        options: ['Przebieg szlaku wzdluz lewego brzegu','Przebieg szlaku wzdluz prawego brzegu','Miejsce niebezpieczne na lewym brzegu'],
	answer: 1,
    img: 'img/58.png',
        topic: "locja"
    },
    {
        q:'Przedstawione na rysunku znaki oznaczaja:',
        options: ['Przejscie szlaku zeglownego na lewy brzeg','Miejsce niebezpieczne na prawym brzegu','Przebieg szlaku wzdluz lewego brzegu'],
	answer: 2,
    img: 'img/59.png',
        topic: "locja"
    },
    {
        q:'Na Zatoce Gdaoskiej zaobserwowano jeden ze znakow jak na rysunku. Co oznacza i jak postapid?',
        options: ['Akwen zakazany, nie wplywad poza znak','Rezerwat przyrodniczy, nie wolno kotwiczyd','Os lub poczatek toru wodnego (t.zw. znak bezpiecznej wody), Obserwowad dalsze znaki toru wodnego i plynad wg. nich'],
	answer: 2,
    img: 'img/60.png',
        topic: "locja"
    },
    {
        q:'Jakim znakiem oznaczony jest slip (pochylnia) przeznaczony do wyciagania jachtow z wody?',
        options: ['Znakiem nr 1','Znakiem nr 2','znakiem nr 3'],        
	answer: 0,
    img: 'img/61.png',
        topic: "locja"
    },
    {
        q:'Przy wejsciu do portu zaobserwowano znak jak na rysunku.Co on oznacza i jak postapid?',
        options: ['Oznacza ,,Marine" dla jachtow, mozna wplywad.','Zakaz wejscia dla jednostek sportowych, nie wplywad','Zakaz zeglugi dla skuterow wodnych i szybkich lodzi motorowych'],
	answer: 1,
    img: 'img/62.png',
        topic: "locja"
    },
    {
        q:'Na bocznej odnodze szlaku zeglownego ustawiona jest tablica jak na rysunku. Czy mozna tam wplywad?',
        options: ['Tak, oznacza zezwolenie przejscia','Nie, oznacza rezerwat przyrody - nie mozna wplywad','Nie, oznacza akwen hodowli ryb - nie mozna wplywad '],
	answer: 0,
    img: 'img/63.png',
        topic: "locja"
    },
    {
        q:'Na polskiej mapie morskiej naniesione sa oznaczenia jak na rysunku obok. Co one oznaczaja?',
        options: ['Glebokosci odpowiednio 25m i 34 m','Glebokosci odpowiednio 2,5m i 3,4 m','Glebokosci odpowiednio 2 saznie i 5 stop, 3 saznie 4 stopy'],
	answer: 1,
    img: 'img/64.png',
        topic: "locja"
    },
    {
        q:'Plynac rzeka z pradem zaobserwowano boje stozkowa o trudnym do rozpoznania kolorze. Co moze oznaczad i jak ja minad?',
        options: ['Prawa strone szlaku zeglownego, minad prawa burta','Lewa strone szlaku zeglownego, minad lewa burta','Lewa strone szlaku zeglownego, minad prawa burta'],
	answer: 1,
        topic: "locja"
    },
    {
        q:'Plynac na Zalewie Szczecioskim na polnoc zaobserwowano na kursie tyke, kolor trudno okreslid ale widad znak szczytowy jak na rysunku. Jak ja wyminad?',
        options: ['Prawa burta','Lewa burta','Zawrocid'],
	answer: 0,
    img: 'img/65.png',
        topic: "locja"
    },
    {
        q:'Plynac na Zatoce Gdaoskiej do portu w kierunku zachodnim w poblizu wejscia zaobserwowano tyke bez znaku szczytowego jak na rysunku obok. Jak ja minad?',
        options: ['Prawa burta','Lewa burta','Mozna minad z obu stron nie za blisko'],
	answer: 0,
    img: 'img/65.png',
        topic: "locja"
    },
    {
        q:'Do czlowieka za burta lekkim jachtem podchodzimy:',
        options: ['Kursem ostry bajdewind i burta zawietrzna','Kursem ostry bajdewind i burta nawietrzna','Kursem polwiatrem i burta zawietrzna'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Przy odejsciu od boi na lewy hals ustawiamy:',
        options: ['Fok prawo na wiatr, ster zero','Fok lewo na wiatr, ster lewo','Grot i fok w lopocie, ster prawo'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Sruba prawoskretna umiejscowiona jest w diametralnej jachtu. Wlaczamy silnik na bieg naprzod. Ster zero. Jaka bedzie reakcja jachtu ?',
        options: ['Rufa bedzie odrzucana w prawo','Rufa bedzie odrzucana w lewo','Jacht ruszy naprzod bez zmiany kierunku'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Sruba prawoskretna umiejscowiona w diametralnej jachtu (ster zero) silnik wlaczamy na bieg wstecz. Jaka bedzie reakcja jachtu ? ',
        options: ['Rufa bedzie odrzucana w prawo','Rufa bedzie odrzucana w lewo','Jacht ruszy wstecz bez zmiany kierunku'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jacht prawie stoi. Jest niewiele miejsca na obrot. Chcemy wykonad jachtem na silniku ciasny skret w prawo. Jak nalezy postapid?',
        options: ['Ster prawo na burt, krotko cala naprzod, silnik stop','Ster prawo na burt, wolno naprzod','Ster prawo na burt, cala naprzod'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Jacht zacumowany dziobem do pomostu odchodzi na silniku od nabrzeza na biegu wstecznym. Chcemy aby dziob odchylal sie w prawo. Jak ustawid pletwe sterowa?',
        options: ['Ustawid pletwe steru w polozeniu ,, zero"','Ustawid pletwe steru w polozeniu ,, prawo"','Ustawid pletwe steru w polozeniu ,, lewo" '],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Przy dojsciu do nabrzeza rufa podano i zamocowano dwie cumy rufowe. Czlonek zalogi na dziobie nie zdazyl zalozyl cumy dziobowej na boje. Wiatr jest silny od dziobu. Jak dalej manewrowad?',
        options: ['Starad sie zlapad boje bosakiem i przyciagad jacht dla zalozenia cumy','Silnik bardzo wolno naprzod, powoli luzowad cumy rufowe i zalozyd cume dziobowa. silnik stop. Ustawid jacht na cumach','Zalozyd odbijacze na rufie i prosid o pomoc personel przystani '],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Intensywne hamowanie zaglami polega na:',
        options: ['calkowitym wyluzowaniu zagli','maksymalnym wybraniu zagli do diametralnej jachtu','wypychaniu zagli na wiatr'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Podchodzac do boi najskuteczniej jest przeprowadzid manewr w sposob nastepujacy:',
        options: ['Zrzucid fok przed podejsciem, dochodzid w linii wiatru, zalozyd cume na biegowo, a nastepnie zrzucid grot','Zrzucid grot, podchodzid na foku z wiatrem, zalozyd cume na boje, zrzucid fok','Podchodzid pod pelnymi zaglami, po zalozeniu cumy na boje zrzucid zagle.'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Jacht (kolor zielony) stoi przy nabrzezu na cumie dziobowej obok drugiego jachtu jak na rysunku. Jak odejsd bezpiecznie pod zaglami przy wietrze odpychajacym (czerwona strzalka) i na ktory hals? Podano tylko pierwsze komendy.',
        options: ['Na prawy hals, fok prawo na wiatr, ster prawo, cume oddaj','Na lewy hals, grot prawo na wiatr, ster lewo, cume oddaj','Na prawy hals, zagle w lopocie, ster lewo, cume oddaj'],
	answer: 0,
    img: 'img/67.png',
        topic: "manewr"
    },
    {
        q:'Jacht (kolor zielony) stoi na boi przy nabrzezu obok drugiego jachtu jak na rysunku. Jak odejsd bezpiecznie przy wietrze dociskajacym (niebieska strzalka) ?',
        options: ['Na silniku, cume dziobowa wybierad z lewej burty, ster prawo, silnik wolno naprzod, cume oddad','Na silniku, cume dziobowa wybierad z prawej burty, ster lewo, wolno naprzod, cume oddad','Na silniku, ster prawo, wolno naprzod, cume oddaj '],
	answer: 1,
    img: 'img/68.png',
        topic: "manewr"
    },
    {
        q:'Jezeli czlowiek wypadl za burte na kursie pelny baksztag, to ktory z opisanych ponizej manewrow bedzie najprostszy i najszybszy?',
        options: ['Odplynad bez zmiany kursu kilkadziesiat metrow, szybko wykonad zwrot przez sztag i halsujac podchodzid do czlowieka','Natychmiast wykonad zwrot przez rufe, wyostrzyd, wykonad zwrot przez sztag i halsujac podchodzid do czlowieka','Wyostrzyd, odejsd nie za daleko, wykonad zwrot przez sztag i podejsd bajdewindem.'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Kat martwy dla danego jachtu wynosi 120st. W jakim momencie podczas halsowania nalezy wykonad zwrot przez sztag, aby mied pewnosd, ze jednym halsem doplyniemy do zadanego punktu ( n.p. boi)?',
        options: ['Kiedy plynac ostrym bajdewindem zaobserwujemy ten obiekt w kierunku ok. 60st od kursu','Kiedy plynac ostrym bajdewindem zaobserwujemy ten obiekt w kierunku ok. 120st od kursu','Kiedy plynac ostrym bajdewindem zaobserwujemy ten obiekt w kierunku ok. 90st od kursu'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Chcemy wykonad zwrot przez sztag o jak najmniejszym promieniu skretu. Ktory z manewrow opisanych ponizej bedzie najefektywniejszy?',
        options: ['Luzujemy calkowicie fok, wybieramy maksymalnie grot, dajemy ster na burte','Wybieramy maksymalnie fok i grot, dajemy ster na burte, kiedy oba zagle wejda w lopot luzujemy szot foka','Dajemy ster na burte, w momencie kiedy jacht bedzie w lini wiatru luzujemy szot grota, nawietrzny szot foka luzujemy dopiero po odpadnieciu jachtu na nowy hals, a nastepnie wybieramy zawietrzny szot foka'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Jak nalezy przygotowad cume dziobowa przy odejsciu od boi, aby manewr odejscia przeprowadzid sprawnie i bezpiecznie?',
        options: ['Zawiazad cume na boi wezlem cumowy zeglarski i dopiero potem odchodzid','Zalozyd cume na biegowo i odejsd na zadany hals','Zalozyd mozliwie najmocniejsza cume z posiadanych na jachcie, wezel nie ma znaczenia'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jacht zacumowany jest jak na rysunku. Zamierzamy odejsd wstecz na silniku. Wiatr dociskajacy niezbyt silny. Jaka powinna byd kolejnosd oddawania cum i manewry silnikiem dla sprawnego i bezpiecznego odejscia? ',
        options: ['Oddad cumy i szpringi , wolno wstecz, ster prawo','Szpring dziobowy na biegowo, odbijacz na dziob, pozostale cumy oddaj, ster lewo, bardzo wolno naprzod, stop silnik, ster zero, bardzo wolno wstecz, oddad szpring','Cumy i szpringi oddaj, ster lewo, bardzo wolno wstecz '],
	answer: 1,
    img: 'img/69.png',
        topic: "manewr"
    },
    {
        q:'Jacht (zielony) zacumowany jest jak na rysunku, kierunek wiatru pokazuje strzalka (niebieska). Jak nalezy najbezpieczniej odejsd pod zaglami? ',
        options: ['Przygotowad cumy do oddania, postawid fok, Oddad cumy i odejsd odpowiednio sterujac','Nie da sie odejsd pod zaglami','Obrocid jacht dziobem do wiatru na cumach, postawid zagle i odejsd z uzyciem szpringu rufowego zalozonego na biegowo.'],
	answer: 2,
    img: 'img/70.png',
        topic: "manewr"
    },
    {
        q:'Jacht (czerwony) jest zacumowany jak na rysunku. Jak najbezpieczniej powinien odejsd od pomostu pod zaglami (wiatr niebieska strzalka) ?',
        options: ['Przecumowad jacht do wolnej czesci pomostu rufa do wiatru. Postawid zagle i odejsd z wiatrem','Przecumowad jacht do wolnej czesci pomostu dziobem do wiatru. Postawid zagle i odejsd lewym halsem','Nie da sie odejsd, konieczna jest pomoc dla wywiezienia kotwicy lub odholowania jachtu'],
	answer: 1,
    img: 'img/71.png',
        topic: "manewr"
    },
    {
        q:'Na jachcie z instalacja elektryczna    V czud zapach tlacej sie izolacji. Jak nalezy postapid?',
        options: [' Zlokalizowad miejsce przegrzane i wylaczyd odpowiedni odbiornik energii','Natychmiast wylaczyd glowny wylacznik akumulatorow lub zdjad klemy z akumulatorow','Sprawdzid odbiorniki energii o duzej mocy i ewentualnie je wylaczyd'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'W porcie jachtowym przyjety jest system cumowania dziobem do pomostu, a rufa do boi. Jak przeprowadzid manewr cumowania w takim porcie manewrujac na silniku?',
        options: ['Przygotowad cume dziobowa i rufowa, wchodzid powoli i podczas mijania boi zalozyd cume rufowa, zatrzymad jacht przed nabrzezem i zalozyd cume dziobowa','Podejsd do nabrzeza dziobem, zalozyd cume dziobowa, luzowad cume dziobowa i cofad jacht na biegu wstecznym, zalozyd cume rufowa na boje, ustawid jacht pracujac cumami','Podejsd do boi dziobem, zatrzymad jacht i zalozyd cume rufowa rozciagnieta z rufy na dziob, na biegu naprzod podchodzid dalej do nabrzeza i zalozyd cume dziobowa'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Jacht stoi na boi. Cuma dziobowa zalozona jest na biegowo. Jest silny wiatr. Za rufa jachtu jest malo miejsca. Jak NAJBEZPIECZNIEJ odejsd pod zaglami?',
        options: ['Zalozyd na biegowo druga cume z rufy, postawid zagle, oddad cume dziobowa, a po odpadnieciu jachtu i wybraniu zagli oddad cume rufowa','Postawid zagle, wyluzowad na ile to mozliwe cume dziobowa, wybierajac ja nadad jachtowi pewna szybkosd, oddad cume i odpowiednio sterujac odejsd','Postawid zagle, oddad cume dziobowa, ustawid fok na wiatr, po odpadnieciu jachtu, wybrad zagle i odpowiednio sterujac odejsd'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Zamierzamy wyposazyd jacht w nowe cumy. Chcemy aby byly nietonace. Jaki rodzaj wybrad? ',
        options: ['Poliamidowe (nylonowe)','Poliestrowe ( np. elana )','Polipropylenowe'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Jacht morski balastowy(dlugosd 8 m). Ile cum i jakiej dlugosci powinno byd na pokladzie zgodnie z dobra praktyka zeglarska?',
        options: [' 2 cumy po ok. 8 m','4 cumy po ok. 12 m','2 cumy po ok. 4 m'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jacht balastowo mieczowy (dlugosd  7 m) eksploatowany jest na jez. Mazurskich. Jaka powinna byd orientacyjna dlugosd liny kotwicznej dla tego jachtu?',
        options: ['10 m','25 m','100 m'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Czarterujemy jacht na jeziorach Mazurskich. Jakie informacje dot. wlasciwosci jachtu z punktu widzenia BEZPIECZEOSTWA zeglugi beda dla nas NAJWAZNIEJSZE ?',
        options: ['Jaka jest pojemnosd i rodzaj akumulatorow','Czy jacht jest wyposazony w toalete chemiczna i zbiorniki na wode','Czy jacht jest niezatapialny i jaka ma statecznosd (wywracalny-niewywracalny)'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Przygotowujac mieszanke paliwa i oleju do silnika dwusuwowego nalezy kierowad sie:',
        options: ['Liczba oktanowa uzywanego paliwa','Instrukcja obslugi danego silnika','Nie ma to znaczenia, zawsze stosuje sie stosunek 1:5'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jakie niebezpieczeostwo stwarza ulatnianie sie gazu (propan-butan) z butli we wnetrzu jachtu.',
        options: ['Zatrucie zalogi, gdyz gaz jest trujacy','Tylko utrate pewnej ilosci gazu','Niebezpieczeostwo wybuchu, gdyz gaz z powietrzem tworzy mieszanine wybuchowa '],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Na malym jachcie mieczowym ( np. OMEGA) zerwal sie fal foka. Jak bezpiecznie przeprowadzid naprawe?',
        options: ['Wciagnad na maszt czlonka zalogi przy uzyciu falu grota i wymienid fal ','Polozyd maszt i wymienid fal','Przy pomoscie przechylid jacht uzywajac falu grota i wymienid fal'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Przy ladowaniu akumulatora przenosnym prostownikiem zaciski prostownika podlaczamy do akumulatora:',
        options: ['Plus prostownika - plus akumulatora, minus prostownika - minus akumulatora','Plus prostownika - minus akumulatora, minus prostownika - plus akumulatora','Plus prostownika - plus akumulatora, minus prostownika do uziemienia'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Jacht zegluje na silniku przyczepnym, w pewnym momencie obroty silnika wzrosly, ale jacht zwalnia i zatrzymuje sie. Co moze byd najbardziej prawdopodobna przyczyna takiej awarii? ',
        options: ['Rozlaczenie sruby z walkiem sruby (sciecie sworznia lub innego zabezpieczenia sruby)','Uszkodzenie jednego ze skrzydel sruby','Nakrecenie wodorostow na srube'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Jak powinno przebiegad prawidlowe zakooczenie pracy silnika przyczepnego?',
        options: ['Zmniejszyd obroty, podniesd silnik na pantografie i zgasid go wylaczeniem zaplonu.','Zmniejszyd obroty, wlaczyd ,,Luz", zgasid silnik wylacznikiem zaplonu, podniesd silnik na pantografie','Zgasid silnik wylacznikiem zaplonu, podniesd silnik na pantografie'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jacht (czerwony) z silnikiem przyczepnym stoi zacumowany jak na rysunku. Cuma rufowa i dziobowa zalozone na biegowo. Jak NAJBEZPIECZNIEJ odejsd?',
        options: ['Oddad cume rufowa, oddad cume dziobowa, uruchomid silnik, silnik wstecz','Uruchomid silnik, luzowad cume dziobowa, wybierad  cume rufowa, gdy rufa bedzie przy boi oddad cume dziobowa i rufowa silnik wstecz','Oddad cume dziobowa, uruchomid silnik, oddad cume rufowa, silnik wstecz'],
	answer: 1,
    img: 'img/72.png',
        topic: "manewr"
    },
    {
        q:'Jacht (czerwony) bez silnika stoi na przystani jak na rysunku. Wiatr strzalka niebieska. Cuma rufowa zalozona na boi na biegowo, dziobowa na biegowo. Jak NAJBEZPIECZNIEJ odejsd pod zaglami? ',
        options: ['Luzowad cume dziobowa, wybierad cume rufowa i przeniesd ja na dziob na biegowo, oddad cume dziobowa, po ustawieniu sie pod wiatr postawid zagle, oddad cume dziobowa i odejsd na zaglach','Luzowad cume dziobowa, wybierad cume rufowa oddad cume dziobowa i rufowa, zdryfowad wstecz, postawid zagle i odejsd','Oddad cume dziobowa i rufowa, postawid zagle i odejsd wstecz'],
	answer: 0,
    img: 'img/72.png',
        topic: "manewr"
    },
    {
        q:'Po uruchomieniu dwusuwowy silnik przyczepny pracuje lecz dosd silnie dymi. Co moze byd przyczyna? ',
        options: ['Zbyt duzo oleju w paliwie','Zanieczyszczony gaznik','Paliwo o zbyt niskiej liczbie oktanowej'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Tankujac zbiornik paliwa do silnika przyczepnego dla bezpiecznego przechowania zbiornika z paliwem wykonujemy n/w czynnosci.',
        options: ['Tankujemy go do pelna i zakrecamy korek wlewu','Tankujemy go do pelna i zakrecamy korek wlewu i zaworek odpowietrzania','Tankujemy z pozostawieniem pewnej wolnej przestrzeni w zbiorniku i zamykamy korek wlewu i zaworek odpowietrzajacy'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Na jachcie mamy kwasowe akumulatory obslugowe. Czy wymagaja one czynnosci konserwacyjnych?',
        options: ['Tak, dopelniania ubytkow kwasu woda destylowana','Nie wymagaja zadnej obslugi poza utrzymaniem w czystosci klem i ich ochrony przed korozja','Dopelniania ubytkow kwasu 5 % roztworem kwasu siarkowego'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Czy przy gwaltownym hamowaniu silnikiem ,,cala wstecz" i polozeniu pletwy sterowej ,,ster zero" jacht:',
        options: ['Utrzyma kurs','Bedzie skrecal w zaleznosci od kierunku obrotow sruby','Zawsze bedzie skrecal w prawo'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Komenda ,, prawy foka szot luz" oznacza:',
        options: ['Natychmiastowe i calkowite zluzowanie szota','Stopniowe luzowanie szota','Luzowanie do momentu wejscia zagla w lopot'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Zeglujac na rzece podchodzimy do pomostu wiatr, niezbyt silny. Jak nalezy podchodzid? ',
        options: ['Pod prad','Z pradem','Nie ma to znaczenia '],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Podchodzimy do pomostu prawa burta na silniku pod prad. Po zahamowaniu silnikiem jacht stoi. Jaka reakcje jachtu spowoduje wychylenie steru w takiej sytuacji?',
        options: ['Nie bedzie zadnej bo jacht stoi','Ster lewo - dziob bedzie odchylal sie od pomostu, a rufa w strone pomostu','Ster prawo - rufa bedzie odchylala sie w strone pomostu'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jakie najwazniejsze czynnosci nalezy wykonad przed kotwiczeniem?',
        options: ['Przygotowad kotwice i line kotwiczna','Upewnid sie jaka jest glebokosd w miejscu kotwiczenia, przygotowad odpowiednia dlugosd liny kotwicznej i kotwice, przygotowad zagle do zrzucenia','Przygotowad zagle do zrzucenia'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jacht wyposazony jest w line kotwiczna i kotwice Danfortha. Kotwiczymy na jeziorze na glebokosci   m. Jaka minimalna dlugosd liny kotwicznej wydad dla bezpiecznego postoju?',
        options: ['Okolo 6 m','Okolo 12 m','Okolo 24 m'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Jakie czynnosci powinien wykonad czlonek zalogi po komendzie ,,przygotowad grot do zrzucenia?',
        options: ['Zajad stanowisko pozwalajace ukladad zrzucany zagiel','Rozbuchtowad fal i ulozyd go tak by sie nie splatal, byd w gotowosci do luzowania falu','Oczekiwad na ewentualna komende ,,grot precz" i wtedy podjad odpowiednie czynnosci'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Czarterujemy jacht, zaloga liczy 5 osob. Na jachcie przekazano nam 4 pasy/kamizelki ratunkowe i jedno kolo ratunkowe. Czy jest to wyposazenie wystarczajace?',
        options: ['Tak','Nie','Tak, ale tylko na wodach srodladowych'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Komenda ,,zalozyd cume... na biegowo" oznacza:',
        options: ['Zamocowad jeden koniec cumy na pokladzie, drugi koniec przeprowadzid przez urzadzenie cumownicze na ladzie i poprowadzid z powrotem na poklad','Zamocowad cume na ladzie i ulozyd wzdluz pokladu od dziobu do rufy','Przygotowad cume do szybkiego zalozenia na urzadzenie cumownicze na ladzie'],
	answer: 0,
        topic: "manewr"
    },
    {
        q:'Jacht z otaklowaniem zaglowym typu slup ma postawione wszystkie zagle. Zamierzamy plynad dalej na silniku bez zagli. Jak przeprowadzid zrzucenie zagli?',
        options: ['W dowolnej kolejnosci','Najpierw grot, a nastepnie fok','Ustawid jacht w linii wiatru, zrzucid fok, a nastepnie grot'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Jacht plynie na silniku. Zamierzamy dalej plynad pod zaglami. W jaki sposob przeprowadzid postawienie zagli?',
        options: ['Zgasid silnik, postawid fok, a nastepnie grot','Na malej szybkosci ustawid jacht dziobem do wiatru, postawid grot, a nastepnie fok, zgasid silnik','Idac na silniku dowolnym kursem postawid fok, a nastepnie grot'],
	answer: 1,
        topic: "manewr"
    },
    {
        q:'Zarefowany grot ma zamocowany rog halsowy i refszkentle oraz zawiazane refsejzingi. Jak przeprowadzid rozrefowanie?',
        options: ['Zwolnid refszkentle, odwiazad refsejzingi, zwolnid rog halsowy','Zwolnid rog halsowy, zwolnid refszkentle, rozwiazad refsejzingi','Rozwiazad refsejzingi, zwolnid refszkentle, zwolnid rog halsowy, wybierad fal'],
	answer: 2,
        topic: "manewr"
    },
    {
        q:'Zagiel  mocowany do  masztu i bomu na jachcie typu slup to:',
        options: ['Fok','Genua','Grot'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Miecz na jachcie to:',
        options: ['Opuszczana plyta umieszczona w skrzyni lub falszkilu w srodkowej czesci jachtu.','Czesd urzadzenia sterowego','Urzadzenie do regulacji kata przechylu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Liny stalowe podtrzymujace maszt w plaszczyznie poprzecznej (np. na OMEDZE), to:',
        options: [' Wanty i topwanty','Sztag i achtersztag','Baksztag i topenanta'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Rumpel to element urzadzenia:',
        options: ['Sterowego','Kotwicznego','Urzadzeo do cumowania'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Forpik to:',
        options: ['Tylny koniec bomu','Gorny koniec gafla','Pomieszczenie na dziobie jachtu'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Fok  moze byd mocowany do sztagu  miedzy innymi przy pomocy:',
        options: ['Segarsow','Raks','Pelzaczy'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Linki sluzace do podwiazywania zagla przy jego refowaniu to:',
        options: ['Dirki','Refsejzingi','Faly'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Po uruchomieniu silnika przyczepnego NAJISTOTNIEJSZA czynnoscia jest:',
        options: ['Sprawdzenie stanu paliwa w zbiorniku','Obserwacja koloru spalin','Sprawdzenie wyplywu  wody chlodzacej'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Akumulatory kwasowe bezobslugowe powinny byd umieszczone na jachcie:',
        options: [' W pomieszczeniu wydzielonym i dobrze wentylowanym','Tylko na pokladzie','Nie ma znaczenia gdzie sie je umiesci'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Lina sluzace do podnoszenia miecza to:',
        options: ['Fal miecza','Kontrafal miecza','Szot miecza'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Krawedz zagla obszyta dla wzmocnienia nazywamy',
        options: ['Kilem','Listwa','Likiem'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Po zakooczeniu uzywania kuchenki gazowej nalezy jako pierwsza czynnosd wykonad:',
        options: ['Zamknad dokladnie zawor butli gazowej','Sprawdzid temperature butli','Oczyscid palniki kuchenki'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Jak nazywa sie urzadzenie do podnoszenia i opuszczania silnika przyczepnego?',
        options: ['Uchwyt rufowy','Pantograf','Podnosnik zawiasowy'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Jacht, ktory posiada jeden maszt i dwa zagle grot i fok ma typ osprzetu zaglowego:',
        options: ['Ket','Kecz','Slup'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Do olinowania ruchomego zaliczamy:',
        options: [' Sztagi','Achtersztag','Faly'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Knaga to element osprzetu jachtu sluzacy do:',
        options: ['Mocowania lin','Wykonywania splotow na linach','Wzmocnienia pokladu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Jak bezpiecznie sprawdzid szczelnosd instalacji gazowej na jachcie?',
        options: ['Za pomoca plomienia (zapalki, zapalniczki)','Na sluch (szum uchodzacego gazu)','Za pomoca wody ze srodkiem pieniacym (mydlo, plyn do zmywania)'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Kluza jest to:',
        options: ['Okucie lub otwor w nadburciu sluzace do prowadzenia cum czy szpringow','Ucho na pokladzie do mocowania blokow','Urzadzenie do mocowania lin ( np. szotow)'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Szpring dziobowy to lina cumownicza biegnaca:',
        options: ['Od dziobu na lad w strone rufy jachtu','Od rufy na lad w strone rufy jachtu','Od dziobu na lad przed dziob jachtu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Szoty to liny sluzace do: ',
        options: ['Stawiania zagli','Wybierania i luzowania zagli przy manewrach','Podnoszenia miecza'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Zagiel podnoszony na sztagu jachtu o osprzecie zaglowym typu slup to:',
        options: ['Bezan','Fok','Grot'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Pawez to element konstrukcyjny jachtu:',
        options: ['Wzmacniajacy dziob','Rufowe zakooczenie kadluba jachtu','Poprzeczne wzmocnienie kadluba jachtu na srodokreciu'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Komory wypornosciowe na jachcie sluza do:',
        options: [' Zapewnienia plywalnosci po napelnieniu jachtu woda po jego wywroceniu lub awarii kadluba','Poprawy statecznosci jachtu','Moga sluzyd do przechowywania sprzetu ratunkowego'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Liny podtrzymujace maszt w plaszczyznie podluznej to:',
        options: ['Sztagi i achtersztagi','Wanty i top wanty','Faly i kontrafaly'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Jacht z jednym masztem i zaglem (np. OPTYMIST). Jaki to typ osprzetu zaglowego? ',
        options: ['Slup','Szkuner','Ket'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Na jachcie dwumasztowym o przednim maszcie wyzszym, a tylnym nizszym ( np. DZ) stawia sie 3 zagle. Jaki to typ osprzetu zaglowego?',
        options: ['Szkuner','Slup','Kecz'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Zagiel o duzej powierzchni podnoszony na sztagu i siegajacy znacznie poza wanty to:',
        options: ['Fok','Grot','Genua'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Raksy to:',
        options: ['Okucia ( haczyki lub.tp) do mocowania zagla do sztagu','Okucia pokladowe do mocowania szotow','Okucia masztowe do mocowania lin olinowania stalego'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Do mocowania lin olinowania ruchomego do zagli lub lin olinowania stalego do okuc pokladowych moga byd uzywane:',
        options: ['Raksy','Pelzacze','Szakle'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Otwor w zaglu z obszyciem i/lub okuciem dla wzmocnienia (np. do mocowania refsejzingow, szotow itp.) nazywamy:',
        options: ['Kausza','Remizka','Banta'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Glowna czesd urzadzenia sterowego powodujaca zmiane kursu jachtu to:',
        options: ['Trzon steru','Pletwa sterowa','Rumpel'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Refbanta to:',
        options: ['Mechanizm do rolowania zagla','Wzmocnienie bomu dla zwiekszenia jego sztywnosci','Wzmocnienie zagla z remizkami lub remizkami i refsejzingami'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Pokazany na szkicu zagiel to:',
        options: ['Grot','Genua','Bezan'],
	answer: 2,
    img: 'img/74.png',
        topic: "budowa"
    },
    {
        q:'Pokazany na szkicu zagiel to:',
        options: ['Grot','Fok','Bezan '],
	answer: 1,
    img: 'img/75.png',
        topic: "budowa"
    },
    {
        q:'Pokazany na szkicu zagiel to:',
        options: [' Kecz','Slup','Szkuner'],
	answer: 1,
    img: 'img/76.png',
        topic: "budowa"
    },
    {
        q:'Jak nazywaja sie pokazane na szkicu kolorem czerwonym elementy rozpierajace wanty?',
        options: [' Rakskloty','Szandeki','Salingi'],
	answer: 2,
    img: 'img/77.png',
        topic: "budowa"
    },
    {
        q:'Refsejzingi to linki  sluzace do:',
        options: ['Mocowania pokrowca na na zagiel do bomu','Linki mocujace zagiel do bomu przy refowaniu zagla','Cumowania jachtu przy silnym wietrze '],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Dla umozliwienia kladzenia masztu jest on osadzany w:',
        options: ['W opetniku','Obrotowo w tzw. cegach umieszczonych na pokladzie lub nadbudowce','W jarzmie masztu'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Kabestan to urzadzenie:',
        options: ['Umozliwiajace wybieranie lin (np. szotow czy falow) z duza sila','Prowadzace laocuch kotwiczny bez tarcia o poklad','Ulatwiajace sterowanie przy duzej fali'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Do prowadzenia i regulacji ustawienia szotow zagli (np. foka) sluza:',
        options: ['Remizki','Dulki','Kipy'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Kokpit na jachcie to:',
        options: ['Przestrzeo wodoszczelna zapewniajaca plywalnosd jachtu','Pomieszczenie magazynowe na dziobie lub rufie','Przestrzeo dla zalogi skad mozna obslugiwad urzadzenia jachtu (np. szoty zagli, ster itp.) '],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Na rysunku obok pokazano element takielunku jachtu. Jest to: ',
        options: ['Luwers','Kausza','Szakla'],
	answer: 2,
    img: 'img/78.png',
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano schematycznie konstrukcje urzadzenia sterowego. Element zaznaczony kolorem czerwonym to:',
        options: ['Rumpel','Jarzmo','Pletwa steru'],
	answer: 2,
    img: 'img/79.png',
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano schematycznie konstrukcje urzadzenia sterowego. Element zaznaczony kolorem czerwonym to:',
        options: ['Rumpel','Drazek sterowy','Trzon'],
	answer: 0,
    img: 'img/80.png',
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano schematycznie olinowanie masztu. Jak nazywa sie lina oznaczona kolorem czerwonym?',
        options: ['Sztag','Achterszag','Topwanta'],
	answer: 1,
    img: 'img/81.png',
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano schematycznie olinowanie masztu. Jak nazywa sie lina oznaczona kolorem czerwonym?',
        options: ['Sztag','Achterszag','Wanta'],
	answer: 0,
    img: 'img/82.png',
        topic: "budowa"
    },
    {
        q:'Pokazana na rysunku kotwica to kotwica:',
        options: ['Danfortha','Admiralicji','Delta'],
	answer: 1,
    img: 'img/83.png',
        topic: "budowa"
    },
    {
        q:'Pokazana na rysunku kotwica to kotwica: ',
        options: ['Admiralicji','Delta','Danfortha'],
	answer: 2,
    img: 'img/84.png',
        topic: "budowa"
    },
    {
        q:'Do regulacji napiecia olinowania stalego jachtu uzywa sie:',
        options: ['Sciagaczy','Reflinek','Topenant'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Topenanta to lina sluzaca do:',
        options: ['Zapobiegania unoszeniu sie bomu przy zegludze pelnym wiatrem','Ustawiania wysokosci noku bomu i zapobiegajaca opadaniu bomu przy zrzucaniu zagli','Laczaca topy dwoch masztow'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Ktory z wymienionych elementow nie jest czescia zagla? ',
        options: [' Kipa','Lliklina','Bryt'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Polkluza jest to:',
        options: ['Maly magazynek na jachcie','Otwor umozliwiajacy odplyw wody','Okucie otwarte od gory, w ktorym pracuja cumy i szpringi'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Przy ozaglowaniu bermudzkim krawedz zagla mocowana do takielunku (masztu, sztagu) to:',
        options: [' Lik gorny','Lik przedni','Lik wolny'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Najczesciej stosowane napiecie w akumulatorach jachtowych to:',
        options: ['230 V','12 V','48 V'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Silnik przyczepny jachtu nalezy uruchomid ze sruba napedowa:',
        options: ['Uniesiona nad lustro wody','Zanurzona w wodzie','Zablokowana wlaczonym biegiem'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Pokazany na rysunku element olinowania to:',
        options: ['Szakla','Kausza','Luwers'],
	answer: 1,
    img: 'img/85.png',
        topic: "budowa"
    },
    {
        q:'Pomieszczenie sluzace do przygotowywania posilkow na jachcie, to:',
        options: ['Kubryk','Kambuz','Kingston'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Szpicgat to typ kadluba jachtu o ponizszej charakterystyce:',
        options: ['Bez pawezy, dziob i rufa ostro zakooczone.','Dziob zakooczony tepo, rufa z paweza','Dziob z duzym nawisem, rufa z bardzo szeroka paweza'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Jakiego rodzaju paliwo uzywane jest w czterosuwowych silnikach przyczepnych:',
        options: ['Benzyna zmieszana z olejem silnikowym','Olej napedowy','Czysta benzyna'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Brest, jest to:',
        options: ['Lina sluzaca do stawiania sztaksli','Lina cumownicza biegnaca prostopadle z jachtu do nabrzeza','Potoczna nazwa szotow bezana'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Garda nazywamy element konstrukcji:',
        options: [' Laczacy bom z masztem','Laczacy gafel z masztem','Laczacy bukszpryt z kadlubem'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Nok, jest to element (jeden z koocow):',
        options: ['Bomu','Gafla','Masztu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Refpatentem nazywamy element konstrukcyjny:',
        options: ['Bomu, pozwalajacy na nawijanie zagla na bom','Masztu, pozwalajacy na zwijanie zagla do masztu','Bukszprytu, pozwalajacy na przesuwanie bukszprytu do rufy'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Pik, jest to element  (jeden z koocow):',
        options: ['Bomu','Gafla','Reji'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Achterpik na jachcie znajduje sie:',
        options: [' To pomieszczenie rufowej czesci jachtu','To pomieszczenie w dziobowej czesci jachtu','To tylny koniec bomu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Sztormreling, to:',
        options: ['Barierka otaczajaca poklad','Uchwyt na nadbudowce','Drabinka sznurowa do wchodzenia z wody na poklad'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Flagsztok, jest to:',
        options: ['Drzewce, na ktorym podnosi sie bandere','Drzewce, na ktorym zaklada sie maly zagiel','Drzewce, na ktorym podwieszony jest dzwon'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Bulbkil, jest to:',
        options: ['Ksztalt dziobu jachtu','Ksztalt rufy jachtu','Jeden z rodzajow falszkila z balastem'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Lik przedni, to:',
        options: ['Nazwa krawedzi zagla mocowanej do masztu lub sztagu','Dziobowa czesd pokladu','Wzmocnienie w przedniej czesci jachtu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Gorny koniec masztu, to:',
        options: [' Pik','Top','Pieta'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Wzmocnione krawedzie zagla, to:',
        options: ['Bryty','Liki','Kieszenie'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Jacht, o otaklowaniu zaglowym typu kecz to jednostka:',
        options: ['Z jednym masztem','Z dwoma masztami','Z trzema masztami'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Spinaker, to zagiel stosowany przy zegludze: ',
        options: ['Kursami  ostro na wiatr (bejdewind)','W zegludze sztormowej','Na kursach pelnych (baksztag, fordewind )'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Hals, to lina napinajaca lub mocujaca:',
        options: [' Dolny rog zagla przy liku przednim','Dolny rog zagla przy liku tylnym (wolnym)','Gorny rog  zagla gdzie mocowany jest fal'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Refszkentla, jest lina napinajaca:',
        options: ['Rog halsowy zagla przy refowaniu','Rog szotowy zagla przy refowaniu','Rog falowy zagla'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Lazy jack, to:',
        options: ['System linek biegnacych do kolumny masztu od bomu (czesto polaczony z pokrowcem)','System linek ulatwiajacy wybieranie kotwicy','System lin do cumowanie jachtu amortyzujacy ruchy jachtu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Kooce bomu to:',
        options: ['Hals i szkentla','Nok i pieta','Pik i garda'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Bryty, sa to:',
        options: ['Pasy tkaniny, z ktorej uszyty jest zagiel','Wzmocnienie rogow zagla','Szwy laczace pasy tkaniny w zaglu'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Jacht  o osprzecie zaglowym typu ket, to:',
        options: ['Jacht posiadajacy jeden maszt i jeden zagiel','Jacht posiadajacy jeden maszt i dwa zagle','Jacht posiadajacy jeden maszt i trzy zagle'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Wzmocnienie konstrukcji pokladu w miejscu przejscia masztu przez poklad nazywa sie:',
        options: [' Jarzmo','Dejwud','Opetnik'],
	answer: 2,
        topic: "budowa"
    },
    {
        q:'Glowny wzdluzny element konstrukcyjny kadluba jachtu, to:',
        options: ['Kingston','Kil','Stewa'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'O sprawnosci ukladu chlodzenia w silniku zaburtowym swiadczy:',
        options: ['Rowno pracujacy silnik','Wyplywajaca z otworu pod silnikiem struga wody','Czyste spaliny (brak dymu w spalinach)'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Co zrobid, gdy w trakcie pracy silnika przyczepnego z otworu odplywowego przestanie wyplywad woda:',
        options: ['Wylaczyd natychmiast silnik','Zmniejszyd obroty nie gaszac silnika','Na malych obrotach zdjad pokrywe i polewad woda cylindry silnika'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Szkielet jachtu w plaszczyznie poprzecznej wzmacniaja:',
        options: ['Wregi','Gretingi','Szpigaty'],
	answer: 0,
        topic: "budowa"
    },
    {
        q:'Kontrafalem nazywamy',
        options: ['Line sluzaca do podnoszenia zagla','Line sluzaca do opuszczania zagla, dzialajaca przeciwnie do falu','Line sluzaca do trymowania zagla'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano element takielunku jachty. Jest to:',
        options: ['Sciagacz do napinania olinowania','Element do laczenia kotwicy z laocuchem','Urzadzenie do mocowania silnika'],
	answer: 0,
    img: 'img/86.png',
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano schematycznie miecz jachtu. Jaki to rodzaj miecza?',
        options: ['Szybrowy','Obrotowy','Balastowy'],
	answer: 1,
    img: 'img/87.png',
        topic: "budowa"
    },
    {
        q:'Na rysunku pokazano schematycznie miecz jachtu. Jaki to rodzaj miecza ?',
        options: ['Szybrowy','Obrotowy','Balastowy'],
	answer: 0,
    img: 'img/88.png',
        topic: "budowa"
    },
    {
        q:'Pikfal, co to za lina i do czego sluzy?',
        options: ['To kazdy fal biegnacy do topu masztu','To fal utrzymujacy gafel pod odpowiednim katem do masztu','To lina do sciagania w dol gafla przy zrzucaniu zagla gaflowego'],
	answer: 1,
        topic: "budowa"
    },
    {
        q:'Miecz na jachtach mieczowych z lekkim mieczem sluzy do:',
        options: ['Zwiekszenia oporu bocznego','Wspomagania sterowania','Poprawy statecznosci jachtu'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Jacht plynie bajdewindem z pewna szybkoscia, przy wietrze rzeczywistym o szybkosci wiekszej od zera. Najwieksza szybkosc z wymienionych ponizej ma zawsze:',
        options: ['Wiatr pozorny','Wiatr rzeczywisty','Wiatr ruchu wlasnego'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Jacht plynie pod wiatr z wyluzowanymi zaglami. Od czego zalezy dlugosc drogi hamowania?',
        options: ['Od rozmieszczenia zalogi na jachcie','Od wzajemnego polozenia srodka wyporu i srodka ozaglowania','Od masy jachtu i jego predkosci w momencie ustawienia w linii wiatru'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Przy znacznym wychyleniu pletwy sterowej w prawo (65?-75?), jacht plynacy do przodu bedzie:',
        options: ['Skrecal w lewo i hamowal','Utrzymywal kurs i mocno hamowal','Skrecal w prawo i hamowal'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Pod jakim warunkiem jacht ,,wywracalny" (kat krytyczny przechylu np. ok. 50?) moze byc dopuszczony do zeglugi?',
        options: ['Jezeli zaloga ma zalozone pasy lub kamizelki ratunkowe','Jezeli jest niezatapialny t.j. posiada zbiorniki wypornosciowe o objetosci w dm3 wiekszej od masy jachtu w kg.','Jezeli jest wyposazony w dwie pompy zezowe'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht ma postawiony grot i fok. Przed zwrotem przez sztag zluzowano szot foka. Co to spowoduje?',
        options: ['Zwiekszenie zawietrznosci jachtu, co utrudni zwrot','Zwiekszenie przechylu jachtu','Zwiekszenie nawietrznosci jachtu'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Podniesienie miecza na kursie bajdewind spowoduje:',
        options: ['Koniecznosc balastowania na nawietrznej','Zwiekszenie dryfu','Zwiekszenie szybkosci jachtu'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht jest tak skonstruowany, ze moment prostujacy przy kacie przechylu ok. 45? jest bliski zeru. Czy jest to jacht?',
        options: ['Wywracalny','Niewywracalny','Niewywracalny o ile posiada komory wypornosciowe.'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Jacht idzie pod zaglami kursem polwiatr, zagle ustawione sa poprawnie. Czy po wlaczeniu silnika naprzod, co spowoduje zwiekszenie szybkosci jachtu zagle beda nadal pracowac poprawnie?',
        options: ['Nadal poprawnie','Bedzie trzeba je bardziej wybrac','Bedzie trzeba je bardziej wyluzowac'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht jest tak skonstruowany, ze moment prostujacy w zakresie katow przechylu od 0? do 90? jest dodatni. Czy jest to jacht ?',
        options: ['Wywracalny','Niewywracalny','Niewywracalny o ile posiada komory wypornosciowe.'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Czy podniesienie miecza na kursie pelny baksztag spowoduje zwiekszenie dryfu jachtu:',
        options: ['Tak, bo zmniejszy sie sila bocznego oporu','Nie, bo sila aerodynamiczna jest skierowana w kierunku ruchu jachtu','Podniesienie miecza nie ma wplywu na dryf jachtu niezaleznie od kursu wzgl. wiatru'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Polwiatr to kurs jachtu przy wietrze rzeczywistym wiejacym w stosunku do kursu jachtu pod katem:',
        options: ['Ok. 90?','Ok. 60?','Ok. 150?'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Jacht zegluje w stosunku do wiatru rzeczywistego pod katem 60? . Jak nazywamy taki kurs wzgledem wiatru:',
        options: ['Baksztag','Bajdewind','Polwiatr'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Baksztag to kurs jachtu przy wietrze rzeczywistym wiejacym w stosunku do kursu jachtu pod katem:',
        options: ['90?','ok. 60? do 70?','ok. 100? do 170?'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Fordewind to kurs jachtu przy wietrze wiejacy w stosunku do kursu jachtu:',
        options: ['Od dziobu pod katem mniejszym od  90?','dokladnie pod katem 90?','Wiejacy dokladnie od strony rufy jachtu'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Na szkicu obok pokazano jacht i kierunek wiatru rzeczywistego (strzalka niebieska). Jakim halsem i kursem wzgledem wiatru plynie ten jacht?',
        options: ['Polwiatrem lewego halsu','Baksztagiem lewego halsu','Polwiatrem prawego halsu'],
	answer: 0,
    img: 'img/89.png',
        topic: "teoria"
    },
    {
        q:'Na szkicu obok pokazano jacht i kierunek wiatru (strzalka niebieska). Jakim halsem i kursem wzgledem wiatru plynie ten jacht?',
        options: ['Baksztagiem lewego halsu','Fordewindem lewego halsu','Fordewindem prawego halsu'],
	answer: 1,
    img: 'img/90.png',
        topic: "teoria"
    },
    {
        q:'Jacht typu slup ( postawiony grot i fok) plynie lewym halsem jezeli:',
        options: ['Ma wiatr z lewej burty (grot wybrany po prawej burcie)','Ma wiatr z tylu, a grota wybrany po lewej burcie','Ma wiatr z prawej burty (grot wybrany po lewej burcie)'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Czy na wszystkich kursach wzgl. wiatru wiatr pozorny jest ostrzejszy od wiatru rzeczywistego?',
        options: ['Nie, tylko na kursie bajdewind','Tak, na wszystkich kursach','Tak, z wyjatkiem fordewindu, kiedy wiatr pozorny ma taki sam kierunek jak wiatr rzeczywisty'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Jacht stoi zacumowany do boi, jaki wiatr odczuwamy na jachcie',
        options: ['Pozorny','Rzeczywisty','Wlasny (ruchu wlasnego)'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Wskaznik wiatru jachtu zacumowanego nieruchomo wskazuje wiatr:',
        options: ['Pozorny','Wlasny (ruchu wlasnego)','Rzeczywisty'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Wskaznik wiatru jachtu plynacego pod zaglami wskazuje wiatr:',
        options: ['Rzeczywisty','Wlasny (ruchu wlasnego)','Pozorny'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Przy ruchu jachtu do przodu wychylenie pletwy steru w strone lewej burty powoduje skret jachtu i odchylenie dziobu i rufy:',
        options: ['Skret w lewo, dziob w lewo, rufa w prawo','Skret w lewo, dziob w lewo , rufa w lewo','Skret w prawo, dziob w prawo rufa w lewo'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Przy ruchu jachtu wstecz wychylenie pletwy steru w strone prawej burty spowoduje skret jachtu i odchylenie dziobu i rufy (patrzac w kierunku rufy):',
        options: ['Skret w prawo, dziob w lewo, rufa w prawo','Skret w lewo, dziob w lewo, rufa w lewo','Skret w lewo, dziob w prawo, rufa w lewo'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Na pletwe sterowa jachtu dziala sila hydrodynamiczna, wielkosc tej sily zalezy od?',
        options: ['Kata wychylenia pletwy sterowej i jej powierzchni','Kata wychylenia pletwy sterowej, jej powierzchni i szybkosci jachtu','Tylko od powierzchni pletwy sterowej i szybkosci jachtu'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Zrzucenie foka na jachcie typu slup zeglujacym przy postawionym grocie i foku spowoduje:',
        options: ['Zwiekszenie nawietrznosci jachtu','Zmniejszenie nawietrznosci jachtu','Tylko zmniejszenie przechylu jachtu'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Znaczne zarefowanie grota na jachcie zrownowazonym zaglowo o osprzecie zaglowym typu slup przy postawionym pelnym foku spowoduje:',
        options: ['Zwiekszenie zawietrznosci jachtu','Zwiekszenie nawietrznosci jachtu','Tylko zmniejszenie sil dzialajacych na zagle'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Nadmierne wybieranie zagli ustawionych prawidlowo - pod optymalnym katem natarcia ( np. maksymalne wybranie zagli przy zegludze kursem polwiatr czy baksztag) spowoduje:',
        options: ['Zwiekszenie sily ciagu','Zmniejszenie sily ciagu i na pewnych kursach zwiekszenie dryfu','Takie ustawienie nie zmienia sily ciagu, ale moze mied wplyw na dryf'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Najwieksza sila aerodynamiczna na zaglu, powstaje przy kacie natarcia do wiatru pozornego rownym ok.',
        options: ['15? - 25?','45?','90?'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Przy koniecznosci halsowania pod wiatr przy silnym wietrze na jachcie typu slup (zegluga turystyczna) najbezpieczniej/najkorzystniej jest:',
        options: ['Zrzucic fok i zeglowad na samym grocie','Zarefowac grot i postawic mniejszy fok (lub go zarefowac, o ile jest to mozliwe, np. roler)','Maksymalnie zarefowac grot i pozostawic postawiony normalny fok'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Przy koniecznosci zeglugi z wiatrem przy bardzo silnym wietrze na jachcie typu slup NAJBEZPIECZNIEJ/NAJKORZYSTNIEJ jest:',
        options: ['Zrzucic grot i postawic mniejszy fok','Zarefowac grot i pozostawic normalny fok','Zeglowac pod pelnymi zaglami, gdyz wiatr pozorny przy duzej szybkosci bedzie slabszy od rzeczywistego'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Jacht mieczowy wyposazony jest w miecz o znacznym ciezarze (np. pewne jachty ,,TANGO"). Czy podniesienie takiego miecza wplynie na statecznosc poprzeczna jachtu?',
        options: ['Statecznosc polepszy sie','Statecznosc pogorszy sie','Nie wplynie na statecznosc poprzeczna jachtu'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Przy odbiorze jachtu od firmy czarterowej NAJWAZNIEJSZE Z PUNKTU WIDZENIA STATECZNOSCI JACHTU - BEZPIECZNEJ ZEGLUGI bedzie uzyskanie ponizszych informacji:',
        options: ['Statecznosc jachtu (wywracalny - niewywracalny), zatapialnosc (zatapialny niezatapialny)','Wymiary jachtu, powierzchnia ozaglowania','Rodzaj silnika, rodzaj urzadzen sanitarnych'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Wielkosc sily aerodynamicznej na zaglu przy tej samej sile wiatru zalezy od:',
        options: ['Tylko od kata natarcia (kat pomiedzy cieciwa zagla, a kierunkiem przeplywu wiatru)','Kata natarcia, powierzchni zagla i ksztaltu (profilu) zagla','Tylko od powierzchni zagla i materialu z jakiego jest wykonany'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht przy pewnej sile wiatru plynie kursem ostry bajdewind ze stala szybkoscia, szkwal spowodowal wzrost wiatru rzeczywistego, czy jacht moze w tej sytuacji:',
        options: ['Poplynac ostrzej do wiatru','Musi odpadac','Musi luzowac zagle, aby utrzymac kurs'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Chwilowy spadek szybkosci wiatru rzeczywistego spowoduje odczuwanie wiatru pozornego jako',
        options: ['Ostrzejszego','Pelniejszego','Znacznie slabszego bez zmiany kierunku'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Aby ulatwic szybkie odpadanie jachtu o osprzecie zaglowym typu slup idacego polwiatrem przy postawionym foku i grocie nalezy (poza sterowaniem)',
        options: ['Luzowac szoty grota','Luzowac szoty foka','Wybierac szoty grota'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Na jachcie typu slup postawiony jest grot i fok. Refowanie tylko foka przez nawijanie go na sztag (roler foka) spowoduje:',
        options: ['Przesuniecie srodka ozaglowania do tylu','Przesuniecie srodka ozaglowania do przodu','Nie zmieni polozenia srodka ozaglowania'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Refowanie grota do bomu na jachcie typu slup spowoduje zmiane polozenia srodka ozaglowania:',
        options: ['Tylko obnizenie polozenia srodka ozaglowania','Obnizenie i przesuniecie do przodu srodka ozaglowania','Polozenie srodka ozaglowania nie zmieni sie'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht pod pelnymi zaglami jest zrownowazony zaglowo. Jak zarefowanie grota i pozostawienie pelnego foka na jachcie typu slup wplynie na polozenie srodka ozaglowania i zrownowazenie (nawietrznosc/zawietrznosc) jachtu?',
        options: ['Srodek ozaglowania obnizy sie i przesunie sie do przodu, jacht bedzie zawietrzny','Srodek ozaglowania przesunie sie do tylu, jacht bedzie nawietrzny','Srodek ozaglowania tylko obnizy sie'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Jacht  typu  slup  pod  pelnymi  zaglami  jest  zrownowazony  zaglowo.  Rownoczesne znaczne zarefowanie grota przez rolowanie do masztu i foka przez nawijanie na sztag (roler foka) spowoduje:',
        options: ['Zwiekszenie zawietrznosci','Nie wplynie na zrownowazenie zaglowe jachtu','Zmniejszenie zawietrznosci'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Czy znaczna liczba osob na pokladzie jachtu przy rownomiernym ich rozmieszczeniu (bez balastowania) wplynie na statecznosc jachtu mieczowego bez balastowego? Jaki to bedzie wplyw?',
        options: ['Statecznosc poprawi sie, bo sila ciezkosci bedzie wieksza','Statecznosc pogorszy sie bo srodek ciezkosci przesunie sie do gory','Nie wplynie to na statecznosc jachtu'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jaki wplyw na dryf jachtu przy kursach na wiatr (bejdewind, polwiatr) ma jego szybkosc?',
        options: ['Przy wiekszej szybkosci dryf jest mniejszy, bo sila hydrodynamiczna na mieczu czy falszkilu bedzie wieksza','Przy mniejszej szybkosci dryf jest mniejszy, bo opory na mieczu czy falszkilu beda mniejsze','Nie ma wplywu bo zalezy tylko od ksztaltu miecza czy falszkilu'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Jakim kursem wzgledem wiatru rzeczywistego plynie pokazany na rysunku jacht (wiatr strzalka niebieska)?',
        options: ['Bajdewindem','Baksztagiem','Polwiatrem'],
	answer: 0,
    img: 'img/91.png',
        topic: "teoria"
    },
    {
        q:'Jakim kursem wzgledem wiatru rzeczywistego plynie pokazany na rysunku jacht (wiatr rzeczywisty strzalka niebieska)',
        options: ['Bajdewindem','Baksztagiem','Polwiatrem'],
	answer: 1,
    img: 'img/92.png',
        topic: "teoria"
    },
    {
        q:'Przesuniecie srodka bocznego oporu jachtu mieczowego mozna uzyskac przez:',
        options: ['Odpowiednie balastowanie wzdluzne (wieksze obciazanie dziobu lub rufy) i/lub ustawienie miecza','Odpowiednie ustawianie zagli i/lub ich refowanie','Zmiane kursu jachtu wzgledem wiatru'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Cisnienie powietrza przeplywajacego po obu stronach zagla:',
        options: ['Spada po stronie zawietrznej','Rosnie po stronie zawietrznej','Spada po stronie nawietrznej'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Wskaznik wiatru jachtu plynacego na silniku podczas ciszy wskazuje wiatr:',
        options: ['Rzeczywisty','Wlasny (ruchu wlasnego)','Pozorny'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht zmienia kurs wzgledem wiatru z kursu bajdewind do kursu baksztag odpowiednio ustawiajac zagle:',
        options: ['Sila przechylajaca nie ulega zmianie','Sila przechylajaca rosnie','Sila przechylajaca maleje'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Jacht typu slup jest zrownowazony zaglowo i plynie stalym kursem. Zerwal sie szot grota i grot nie pracuje. Jaka tendencje wykaze jacht?',
        options: ['Wyostrzy','Odpadnie','Utrzyma kurs'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Co sie stanie z jachtem, gdy na kursie polwiatr podniesiemy miecz?',
        options: ['Prawdopodobnie sie przewroci','Zwiekszy sie przechyl jachtu i zmniejszy sie dryf','Zmniejszy sie przechyl jachtu i zwiekszy sie dryf.'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Jacht plynie kursem pelnym (np. baksztagiem). Czy po wyostrzeniu (np. do bajdewindu) odczuwalny wiatr pozorny ulegnie zmianie?',
        options: ['Nie ulegnie zmianie.','Jego szybkosc zmaleje.','Jego szybkosc wzrosnie.'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Na kursie bajdewind sila powodujaca dryf:',
        options: ['Jest taka sama jak dla innych kursow wzgledem wiatru','Osiaga wartosc minimalna.','Osiaga wartosc maksymalna.'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Na kursie baksztag sila powodujaca dryf:',
        options: ['Jest taka sama jak dla pozostalych kursow wzgledem wiatru','Jest najwieksza.','Jest najmniejsza.'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Prawidlowo wykonany zwrot przez sztag to:',
        options: ['Przejscie dziobem linii wiatru od kursu baksztag jednego halsu do kursu baksztag przeciwnego halsu.','Przejscie dziobem linii wiatru od polwiatru jednego halsu do polwiatru przeciwnego halsu.','Przejscie dziobem linii wiatru od kursu bajdewind jednego halsu do kursu bajdewind przeciwnego halsu'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Dla jakiego kursu wzgledem wiatru kierunek wiatru rzeczywistego i pozornego jest taki sam?',
        options: ['Fordewindu','Baksztagu','Polwiatru'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Przeglebienie dziobu jachtu powoduje:',
        options: ['Zmniejszenie nawietrznosci.','Zwiekszenie nawietrznosci.','Zwiekszenie zawietrznosci.'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Jacht plynie wstecz na silniku. Wychylono pletwe sterowa w lewo. Jak zachowa sie jacht?',
        options: ['Rufa bedzie skrecal w kierunku wychylenia steru','Rufa bedzie skrecal przeciwnie do kierunku wychylenia steru','Bedzie plynal prosto wstecz'],
	answer: 0,
        topic: "teoria"
    },
    {
        q:'Sila ciagu dzialajaca na zagiel to:',
        options: ['Skladowa sily aerodynamicznej dzialajacej na zagiel skierowana do tylu rownolegle do osi wzdluznej jachtu.','Skladowa sily aerodynamicznej dzialajacej na zagiel skierowana prostopadle do osi wzdluznej jachtu.','Skladowa sily aerodynamicznej dzialajacej na zagiel skierowana do przodu rownolegle do osi wzdluznej jachtu.'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Sila dzialajaca na zagiel, powodujaca dryf jachtu to:',
        options: ['Skladowa sily aerodynamicznej dzialajacej na zagiel skierowana do przodu rownolegle do osi wzdluznej jachtu.','Skladowa sily aerodynamicznej dzialajacej na zagiel skierowana do tylu rownolegle do osi wzdluznej jachtu.','Skladowa sily aerodynamicznej dzialajacej na zagiel skierowana prostopadle do osi wzdluznej jachtu.'],
	answer: 2,
        topic: "teoria"
    },
    {
        q:'Na rysunku pokazano schematycznie kadlub jachtu w przechyle oraz polozenie srodka ciezkosci (SC) i srodka wyporu (SW), oraz sily dzialajace w tych punktach. Po zwiekszeniu przechylu taki jacht:',
        options: ['Przewroci sie','Nie przewroci sie','Nadal pozostanie w rownowadze przy nowym kacie przechylu'],
	answer: 0,
    img: 'img/93.png',
        topic: "teoria"
    },
    {
        q:'W jakim celu stosuje sie na jachtach zbiorniki lub inne elementy wypornosciowe?',
        options: ['Dla wzmocnienia konstrukcji jachtu','Dla zapewnienia plywalnosci po napelnieniu kadluba woda na skutek przewrocenia lub awarii kadluba','Dla polepszenia statecznosci jachtu'],
	answer: 1,
        topic: "teoria"
    },
    {
        q:'Kto oglasza alarm ,,Czlowiek za burta" ( MOB) ? ',
        options: [' Kapitan, po wywolaniu go na poklad','Kapitan, po wywolaniu zalogi na poklad','Osoba, ktora pierwsza zauwazyla wypadniecie czlowieka'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Jakiego koloru rakiet nalezy uzyd celem wezwania pomocy ?',
        options: [' Zielonych','Czerwonych','Bialych'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Jaka przyjmujemy pozycje w zimnej wodzie chcac zachowad jak najdluzej cieplo wlasne?',
        options: ['Na plecach','Pionowa','Pozycje HELP (embrionalna)'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Czlowiekowi, ktory wypadl za burte, kolo ratunkowe nalezy rzucad blisko niego:',
        options: ['Od jego nawietrznej','Od jego zawietrznej','Od tej strony, w ktora ma zwrocona twarz'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'W trakcie zeglugi bezpieczniej jest poruszad sie po pokladzie po burcie:',
        options: ['Zawietrznej','Nawietrznej','Nie ma to znaczenia'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'W poblizu jachtu na Zatoce Gdaoskiej zaobserwowano pomaraoczowy dym. Co to oznacza?',
        options: [' Wzywanie pomocy','Wzywanie pilota','Ostrzezenie ,,manewruje z trudem"'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Po wywrotce jachtu nalezy przede wszystkim:',
        options: ['Najpierw zebrad sprzet, ktory wypadl z jachtu, a potem opuscid zagle','Natychmiast wzywad pomocy','Sprawdzid czy cala zaloga jest na powierzchni wody, zalozyd pasy ratunkowe, zabezpieczyd jacht przed wywroceniem do gory dnem'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Jak wzywad pomocy w nocy (wody srodladowe - do dyspozycji jest tylko latarka)?',
        options: [' Nadawad dlugie blyski','Zataczad zapalona latarka kregi','Poruszad latarka poziomo'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Po wylowieniu czlowieka, ktory wypadl za burte stwierdzono, ze nie oddycha. Co robid?',
        options: [' Natychmiast rozpoczad akcje resuscytacyjna i wezwad pomoc','Wezwad pomoc, jak najszybciej plynad do brzegu i czekad na pomoc lekarska','Ulozyd czlowieka w pozycji bezpiecznej i zabezpieczyd przed utrata ciepla'],
	answer: 0,
        topic: "ratow"
    }, 
    {
        q:'Gwaltowne poruszanie sie czlowieka w zimnej wodzie powoduje: ',
        options: ['Polepszenie samopoczucia, lecz nie ma wplywu na czas przezycia','Wydluza czas przezycia','Skraca czas przezycia'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Przy zlamaniu kooczyny nalezy :',
        options: ['Wezwad pogotowie ratunkowe','Ulozyd poszkodowanego w t.zw. pozycji bezpiecznej','Usztywnid 2 przylegle stawy, mozliwie szybko zapewnid poszkodowanemu pomoc lekarska'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Na jachcie zerwala sie top-wanta nawietrzna, maszt nie zlamal sie. Jakie dzialanie podjad?',
        options: ['Jak najszybciej wykonad zwrot przez sztag i dokonad prowizorycznej naprawy','Wyostrzyd do linii wiatru, zrzucid zagle i dokonad prowizorycznej naprawy','Odpasd do baksztagu i dokonad prowizorycznej naprawy'],
	answer: 0,
        topic: "ratow"
    },    
    {
        q:'Czlowieka z wody podejmujemy:',
        options: [' W miejscu gdzie jest najlatwiej przy zachowaniu statecznosci jednostki','Zawsze z burty nawietrznej','Przy dziobie jachtu'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'W jakie osobiste srodki ratunkowe ma byd wyposazony jacht zeglujacy na wodach srodladowych?',
        options: ['W pasy/ kamizelki ratunkowe w ilosci takiej jak ilosd osob na pokladzie','Pasy/kamizelki ratunkowe i pasy bezpieczeostwa dla wszystkich osob na pokladzie','Zgodnie z karta bezpieczeostwa lub dowodem rejestracyjnym lub tyle ile jest osob na pokladzie plus jedna lub kolo ratunkowe'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Pierwsza pomoc przy krwawiacych ranach otwartych kooczyn:',
        options: ['Przemywamy rane czysta woda np. mineralna, zakladamy opatrunek, przekazujemy poszkodowanego do lekarza','Usuwamy obce ciala z rany nastepnie przemywamy ja czysta woda np. mineralna, zakladamy opatrunek uciskowy, przekazujemy poszkodowanego do lekarza','Pozostawiamy rane otwarta i jak najszybciej przekazujemy poszkodowanego do lekarza'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Hipotermia jest to stan organizmu z obnizona temperatura wewnetrzna spowodowany czynnikami zewnetrznymi jak np. woda, wiatr itp. Jak postepowad z taka osoba? :',
        options: ['Zabezpieczyd przed dalsza utrata ciepla np. folia NRC, koc, spiwor. Poszkodowanemu mozna podad alkohol. Jak najszybciej zapewnid opieke lekarska','Zabezpieczyd przed dalsza utrata ciepla np. folia NRC, koc, spiwor. Poszkodowanemu podad cieple oslodzone plyny. Jak najszybciej zapewnid opieke lekarska','Zabezpieczyd przed dalsza utrata ciepla np. folia NRC, koc, spiwor. Nie podawad nic do picia. Jak najszybciej zapewnid opieke lekarska'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Gwaltowne uderzenie bardzo silnego wiatru zastalo jacht mieczowy w poblizu brzegu nawietrznego (wody srodladowe), zagle zrzucono w pore jacht sie nie przewrocil. Wiatr nadal bardzo silny. Brzeg bezpieczny. Jak postepowad dalej ? ',
        options: ['Podniesd miecz, zaloga na pokladzie w pasach/kamizelkach ratunkowych, sztrandowad z  wiatrem','Przygotowad kotwice, miecza nie podnosid aby wolniej dryfowad, blisko brzegu rzucid','Natychmiast rzucid kotwice, zaloga pozostaje pod pokladem.'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Na jachcie zeglujacym na Jeziorach Mazurskich zaslabl czlonek zalogi ( wiatr bardzo slaby, jacht bez silnika). Jak najlepiej i najszybciej wezwad pomoc?',
        options: ['Wezwad pomoc WOPR telefonicznie nr 601 100 100','Nadawad sygnal wezwania pomocy rekami ( podnoszenie i opuszczanie)','Zataczad kregi czerwona choragiewka'],
	answer: 0,
        topic: "ratow"
    }, 
    {
        q:'Na Zalewie Szczecioskim w dzieo na skutek pekniecia kadluba jacht nabiera wody (jacht wyposazony zgodnie z przepisami). Jak najlepiej i najskuteczniej wezwad pomocy?',
        options: ['Przy pomocy radiotelefonu UKF (procedura MAY DAY)','Przy pomocy rakiet czerwonych','Podnoszac pod salingiem sygnal: kula nad flaga '],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Na jeziorach Mazurskich w dzieo na jachcie zlamal sie maszt, jacht jest bez silnika, brak telefonu. Jak najlepiej wzywad pomocy?',
        options: ['Podnoszac i opuszczajac rece i/lub zataczajac kola dobrze widocznym przedmiotem','Krzyczac glosno ratunku - pomocy','Nadajac latarka sygnal SOS'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Czy na jachcie zeglujacym na Jeziorach Mazurskich kapitan ma prawo zarzadzid, aby zaloga zalozyla pasy/kamizelki ratunkowe??',
        options: ['Tak','Nie, to indywidualna decyzja czlonka zalogi','Przepisy tego nie okreslaja'],
	answer: 0,
        topic: "ratow"
    },    
    {
        q:'Czy na Zatoce Gdaoskiej i Zalewie Szczecioskim dziala sluzba ratownictwa morskiego SAR?',
        options: ['Tak, z centrum koordynacyjnym w Gdyni i Stacjami ratownictwa w portach','Nie, SAR dziala tylko na pelnym morzu','Nie, dziala tam tylko WOPR'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Prowadzacy jacht polecil zalodze zalozyd pasy /kamizelki ratunkowe. Jak powinna postepowac zaloga? ',
        options: ['Zalozyd pasy pod pokladem','Wyjsd z pasami na poklad i tam je zalozyd','Trzymad je przy sobie, a zakladad dopiero w wodzie'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Pierwszej pomocy przy oparzeniach udzielamy nastepujaco:',
        options: ['Szybkie ochlodzenie oparzonego miejsca przez polewanie zimna woda i nalozenie jalowego opatrunku','Nalozenie tlustego kremu lub oliwy i jalowego opatrunku','Przemycie alkoholem i nalozenie opatrunku'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Przed rozpoczeciem sztucznego oddychania u osoby nieprzytomnej nalezy:',
        options: ['Udroznid drogi oddechowe i prowadzid akcje sztucznego oddychania','Zabezpieczyd poszkodowana osobe przed utrata ciepla i prowadzid akcje','Polozyd osobe poszkodowana na miekkim podlozu i natychmiast rozpoczad akcje'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Z prawej burty jachtu zaobserwowano jednostke nadajaca sygnal jak na rysunku. Jak nalezy postapid?',
        options: [' Zmienid kurs i podejsd do tej jednostki, nawiazad z nia lacznosd','Nie zblizad sie, jednostka wykonuje prace podwodne','Zatrzymad sie i czekad na dalsze sygnaly tej jednostki'],
	answer: 0,
    img: 'img/94.png',
        topic: "ratow"
    },    
    {
        q:'Wybierz wlasciwy sposob postepowania osoby, ktora wypadla za burte:',
        options: ['Zachowad spokoj, wzywad pomocy, plynad do brzegu','Plynad za jachtem lub do brzegu mozliwie jak najszybciej','Zachowad spokoj, oszczedzad energie i sily, podplynad do rzuconego juz kola i spokojnie czekad.'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Prowadzac sztuczne oddychanie i posredni masaz serca wykonujemy:',
        options: ['15 ucisnied mostka i 2 wdmuchniecia powietrza','5 ucisnied mostka i 1 wdmuchniecie powietrza','30 ucisnied mostka i 2 wdmuchniecia powietrza'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Po calodziennej zegludze w lecie zaloganta boli glowa, ma zaburzenia swiadomosci, ciepla zaczerwieniona skore i nudnosci. Czego to moga byd objawy i jak postepowad ?',
        options: ['Wyziebienia ciala, podad cieply napoj','Porazenia slonecznego, zastosowad zimne oklady, podad wode mineralna, potrzebna pomoc lekarska','Zatrucia pokarmowego, potrzebna szybka pomoc lekarska'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Jacht na Zatoce Gdaoskiej dryfuje przy bardzo silnym wietrze do brzegu, nadano sygnaly wzywania pomocy. Na brzegu wystrzelono zielona rakiete, a stojacy na brzegu macha biala choragiewka. Co to oznacza i jak postepowad ?',
        options: ['Ostrzezenie o niebezpiecznym miejscu, starad sie sztrandowad w innym miejscu','Informacja o dobrym miejscu do sztrandowania, starad sie sztrandowad w tym miejscu','Informacja, ze wkrotce nadejdzie jednostka ratownicza'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Jakie sa PODSTAWOWE/NAJWAZNIEJSZE obowiazki prowadzacego jacht przed wyjsciem w rejs?',
        options: ['Zapoznanie zalogi ze sprzetem ratunkowym na jachcie, jego rozmieszczeniu i obsludze  (np.  pasy/ kamizelki ratunkowe i bezpieczeostwa, gasnice, itp.) i postepowaniem w niebezpieczeostwie','Zapoznanie zalogi z przepisami prawa drogi i oznakowaniem nawigacyjnym danego akwenu','Zapoznanie zalogi z zasadami etykiety jachtowej'],
	answer: 0,
        topic: "ratow"
    },    
    {
        q:'W celu ugaszenia gasnica pozaru w komorze silnika nalezy:',
        options: [' Lekko uchylid pokrywe komory i natychmiast uzyd gasnicy','Otworzyd szeroko pokrywe komory, sprawdzid co sie pali i dopiero uzyd gasnicy','Otworzyd szeroko pokrywe komory i gasid ogieo woda podawana z za burty'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Po podjeciu nieprzytomnego czlowieka z wody nalezy w PIERWSZEJ KOLEJNOSCI sprawdzid:',
        options: ['Oddech i tetno','Czy nie jest zraniony','Reakcje zrenic na swiatlo'],
	answer: 0,
        topic: "ratow"
    },
    {
        q:'Niezatapialny jacht w lecie przewrocil sie na duzym jeziorze w odleglosci ok. 1 km od zawietrznego brzegu. Wzywano pomoc ale na razie bez skutku. Jakie powinno byd dalsze postepowanie?',
        options: ['Zaloga w pasach/kamizelkach ratunkowych powinna w grupie plynad do ladu','Zaloga cieplo ubrana w pasach/kamizelkach ratunkowych powinna siedzied na jachcie mozliwie nie w wodzie. Nadal wzywad pomocy','Osoba najlepiej plywajaca powinna plynad do ladu po pomoc.'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Zaobserwowano, ze znajdujacy sie w poblizu jacht ma podniesiony sygnal jak na rysunku. Co nalezy zrobid ?',
        options: ['Taki sygnal nic nie oznacza, kontynuowad swoje plywanie','Jacht stoi na mieliznie, nie podchodzid w poblize','Jacht wzywa pomocy, podejsd i podjad odpowiednie dzialania'],
	answer: 2,
    img: 'img/95.png',
        topic: "ratow"
    },
    {
        q:'Jak zachowad sie przy wywracaniu sie jachtu (wywrotka juz nieunikniona)?',
        options: ['Dzialad tak aby nie wpasd pod zagiel','Wyskoczyd od strony burty zawietrznej jak najdalej od jachtu','Wyskoczyd za rufe'],
	answer: 0,
        topic: "ratow"
    },    
    {
        q:'Na jachcie czud zapach tlacej sie izolacji. Co zrobid w pierwszej kolejnosci?',
        options: [' Jak najszybciej zlokalizowad miejsce uszkodzenia','Przygotowad gasnice i czekad gdzie pojawi sie dym','Wylaczyd glowny wylacznik akumulatorow lub zdjad klemy z akumulatora'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Po wywrotce jachtu Omega wieczorem (jesieo - temp. wody ok. 100C, wiatr slabnacy, do brzegu zawietrznego odl. ok. 3 km, do nawietrznego ok. 300 m) sternik ocenil, ze nalezy plynad na prowizorycznej tratwie do brzegu nawietrznego. Czy decyzja byla sluszna?',
        options: ['Tak, bo do tego brzegu jest blizej, a istnieje niebezpieczeostwo wychlodzenia','Nie, nigdy nie powinno sie opuszczad jachtu','Tak, ale dopiero jezeli proby wzywania pomocy nie daly rezultatu (w rozsadnym czasie)'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Co moze byd pomocne przy probie postawienia niewielkiego jachtu mieczowego po wywrotce, jezeli dotychczasowe proby postawienia nie daly rezultatu?',
        options: ['Podniesienie miecza i steru','Zrzucenie zagli i polozenie masztu','Ustawienie jachtu rufa do wiatru'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Jaki jest numer ratunkowy telefonu WOPR (ratownictwo na jeziorach)',
        options: ['600 100 100','601 100 100','601 101 101'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Czlonek zalogi przewrocil sie na pokladzie, ma silny bol klatki piersiowej szczegolnie przy wdechu. Jak udzielid mu pierwszej pomocy?',
        options: [' Umiescid go w pozycji polsiedzacej w miejscu najmniej narazonym na kolysanie, zalozyd  okrezna opaske z szerokiego bandaza na klatke piersiowa, podad srodki przeciwbolowe','Ulozyd go w pozycji bezpiecznej, w miejscu dobrze wentylowanym','Podawad cieple plyny i srodki przeciwkaszlowe'],
	answer: 0,
        topic: "ratow"
    },    
    {
        q:'Przy pracach konserwacyjnych czlonek zalogi oparzyl sie kwasem z akumulatora. Jak udzielid pierwszej pomocy?',
        options: ['Nalozyd na miejsce oparzone sterylny opatrunek','Starannie i dlugo plukad miejsce oparzone woda, a nastepnie roztworem sody oczyszczonej lub mydla. Nalozyd sterylny opatrunek','Nalozyd na miejsce oparzone oklad alkaliczny np.z mydla'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Czlonek zalogi doznal urazu stawu skokowego ( bol i zasinienie) jak nalezy postepowad?',
        options: ['Nalozyd ciasny bandaz, trzymad noge w cieple','Unieruchomid cala kooczyne, wzywad natychmiast pomoc lekarska','Zastosowad zimne oklady przez 15 - 30 minut, unieruchomid staw, podad srodki przeciwbolowe, przekazad poszkodowanego pod opieke lekarska'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Na malym jachcie wywracalnym(np. OMEGA) jest 5 osob. Jedna wypadla za burte. Jak do niej podejsd i jak ja najbezpieczniej wyciagnad na jacht?',
        options: [' Podejsd bajdewindem burta nawietrzna, przeprowadzid osobe w wodzie na rufe tam ja wyciagnad na poklad','Podejsd bajdewindem burta nawietrzna, przeprowadzid osobe w wodzie na dziob i tam ja wyciagnad na poklad','Podejsd bajdewindem burta nawietrzna, dwie osoby balastuja, a dwie wyciagaja czlowieka na poklad na srodokreciu.'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Na jachcie jest silnik przyczepny na pantografie rufowym po stronie lewej burty. Wypadl czlowiek za burte, uruchomiono silnik. Jak podchodzid do czlowieka najszybciej i najbezpieczniej?',
        options: ['Na silniku w bajdewindzie lub pod wiatr lewa burta','Na silniku w bajdewindzie lub pod wiatr prawa burta','Najpierw zrzucid zagle i dopiero potem podchodzid w dowolny sposob'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Jacht zegluje bajdewindem lewego halsu, zauwazono, ze zerwala sie prawa topwanta (rozkrecil sie sciagacz) Co nalezy zrobid?',
        options: ['Zmienid kurs do linii wiatru, zrzucid zagle, uruchomid silnik, plynad do portu','Zluzowad nieco zagle nie zmieniajac kursu, polaczyd i skrecid sciagacz i zabezpieczyd go','Wykonad zwrot przez sztag, zrzucid zagle, jak najszybciej zalozyd awaryjna wante'],
	answer: 1,
        topic: "ratow"
    },    
    {
        q:'Na jeziorach Mazurskich na maszcie sygnalowym w poblizu wejscia do kanalu Talckiego zaobserwowano zolte swiatlo pulsujace ( blysk w przyblizeniu co 2 sekundy). Co to moze oznaczad?',
        options: ['Zakaz wejscia do kanalu','Oznaczenie wejscia do kanalu','Ostrzezenie o burzach i mozliwosci wystapienia bardzo silnego wiatru'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Na jeziorach Mazurskich na maszcie sygnalowym przy wejsciu do kanalu Jeglioskiego zaobserwowano zolte swiatlo pulsujace ( blysk czesciej niz co 1 sekunde). Co to moze oznaczad ?',
        options: ['Zakaz wejscia do kanalu','Oznaczenie wejscia do kanalu','Ostrzezenie bezposrednim niebezpieczeostwie wystapienia burz i bardzo silnego wiatru'],
	answer: 2,
        topic: "ratow"
    },
    {
        q:'Czy plywajac jachtem na jeziorach Mazurskich mozna korzystad z telefonicznych ostrzezeo meteorologicznych?',
        options: ['Tak, telefonujac na nr informacyjny Rejonu Drog Wodnych','Tak, zamawiajac usluge ostrzezeo w Mazurskim W. O.P.R wysylanych jako SMS','Nie, takich mozliwosci nie ma'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Zauwazylismy wywrocony jacht i zaloge tego jachtu w wodzie. Jak postepujemy?',
        options: ['Plyniemy jak najszybciej do najblizszej przystani celem wezwania pomocy','W bezpiecznej odleglosci od przewroconego jachtu zrzucamy zagle i z predkoscia minimalna podplywamy do przewroconego jachtu i ratujemy ludzi, a potem sprzet','W bezpiecznej odleglosci od przewroconego jachtu, slownie instruujemy jak maja postepowad'],
	answer: 1,
        topic: "ratow"
    },
    {
        q:'Gdy dwa jachty zegluja pod zaglami roznymi halsami i kursami przecinajacymi sie tak, ze powoduje to ryzyko zderzenia to prawo drogi posiada jacht?',
        options: ['Idacy lewym halsem','Idacy ostrzejszym kursem','Idacy prawym halsem'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Gdy dwa jachty zegluja pod zaglami jednakowymi halsami i kursami przecinajacymi sie tak, ze powoduje to ryzyko zderzenia to prawo drogi posiada?',
        options: ['Jacht zawietrzny','Jacht idacy pelniejszym kursem','Jacht idacy prawym halsem'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Gdy maly statek idacy pod zaglami prawym halsem idzie kursem przecinajacym sie z kursem malego statku idacego pod zaglami lewym halsem tak, ze istnieje ryzyko zderzenia to powinien:',
        options: ['Zachowac kurs i szybkosc','Ustapic z drogi','Zmniejszyc szybkosc'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Jacht zaglowy idzie do wejscia do kanalu odleglego ok. 300 m. Statek pasazerski wychodzacy z kanalu na wprost jachtu dal sygnal dzwiekowy dwa krotkie. Co powinien zrobic jacht?',
        options: ['Kontynuowac swoj kurs','Zmienic swoj kurs w prawo','Zatrzymac sie i rzucic kotwice'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Jacht zaglowy idacy pod zaglami i na silniku jest traktowany w mysl przepisow jako:',
        options: ['Jacht motorowy','Jacht zaglowy','Jacht zaglowo - motorowy'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Jacht pod zaglami na zatoce Gdanskiej plynie kursem przecinajacym sie z kursem niewielkiego statku o napedzie mechanicznym, tak, ze powoduje to ryzyko zderzenia. Statek ten niesie sygnal dwa czarne stozki wierzcholkami do siebie. Jakie dzialanie powinien podjac jacht?',
        options: ['Utrzymac kurs i szybkosc','Przejsc mu blisko za rufa','Ominac go z daleka'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Statek zaglowy o dlugosci 8 m, idacy pod zaglami na wodach srodladowych powinien  ustapic:',
        options: ['Statkowi pasazerskiemu o nap. mech','Motorowce o dlugosci ok. 10 m','Lodzi wioslowej w ruchu'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Jacht zaglowy o dlugosci mniejszej niz 7 m w mysl obowiazujacych przepisow jest uwazany za:',
        options: ['Statek zaglowy','Maly statek zaglowy','Statek bez napedu'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Statek pasazerski o dlugosci mniejszej niz 20 m z podniesionym znakiem jak na rysunku jest uwazany w mysl przepisow za:',
        options: ['Statek','Maly statek','Statek motorowy'],
	answer: 0,
    img: 'img/96.png',
        topic: "przepis"
    },
    {
        q:'Osoba prowadzaca jacht zaglowy o dlugosci 8 m po srodladowych drogach wodnych powinna posiadac:',
        options: ['Ksiazeczke zeglarska','Patent co najmniej zeglarza jachtowego','Zaswiadczenie o ukonczeniu kursu zeglarskiego'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Na wodach Zatoki Gdanskiej na kursie zaobserwowano statek ktory podniosl sygnal jak na rysunku. Co nalezy zrobic?',
        options: ['Nie zblizac sie blizej niz 2 Mm','Minac go daleko przed dziobem','Minac go z dowolnej strony w bezpiecznej odleglosci'],
	answer: 2,
    img: 'img/97.png',
        topic: "przepis"
    },    
    {
        q:'Ktore z odpadow sa najbardziej szkodliwe dla srodowiska?',
        options: ['Odpady organiczne (resztki zywnosci itp.)','Opakowania papierowe','Odpady (opakowania itp.) z tworzyw sztucznych'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Poza torem wodnym na otwartych wodach Zatoki Gdanskiej jacht pod zaglami idzie kursem przecinajacym sie z kursem malego statku pasazerskiego, tak, ze powoduje to ryzyko zderzenia. Jaki manewr powinien podjac ?',
        options: ['Przejsd mu za rufa','Zmniejszyc szybkosc i przepuscid go przed dziobem','Utrzymad kurs i predkosc'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Na podejsciu do portu Gdaosk jacht zaobserwowal statek, ktory podniosl sygnaly jak na rysunku. Jak go wyminac?',
        options: ['Z dowolnej strony','Od strony wystawionych kul','Od strony wystawionych rombow'],
	answer: 2,
    img: 'img/98.png',
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Statek pasazerski nadal serie podwojnych krotkich dzwiekow. Co to oznacza?',
        options: ['Nie moge manewrowad','Niebezpieczenstwo zderzenia','Czlowiek za burta'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Pietnastoletnia osoba posiadajaca stopieo zeglarza jachtowego jest uprawniona do  prowadzenia jachtow na wodach srodladowych o powierzchni ozaglowania:',
        options: ['Do 10 m2 zagla','Dowolnej','Do 20 m2 zagla, pod nadzorem'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Na wodach srodladowych jacht plynie pod zaglami kursem przecinajacym sie z kursem niewielkiego statku (dlugosd oceniana na 15 m) o napedzie mechanicznym tak, ze istnieje ryzyko zderzenia. Na tym statku podniesiony jest sygnal jak na rysunku. Jaki manewr nalezy podjac?',
        options: ['Zachowac swoj kurs i predkosc','Ustapic, najlepiej przejsc za rufa','Zatrzymac sie, nawiazac lacznosc i upewnic sie czy ten statek potrzebuje pomocy'],
	answer: 1,
    img: 'img/99.png',
        topic: "przepis"
    },
    {
        q:'Na wodach srodladowych przy spotkaniu statku pasazerskiego i jachtu plynacego pod zaglami na kursach kolizyjnych tak, ze istnieje ryzyko zderzenia:',
        options: ['Statek pasazerski ustepuje pierwszenstwa jachtowi','Jacht utrzymuje swoj kurs','Jacht zaglowy ustepuje z drogi statkowi.'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Jezeli istnieje ryzyko zderzenia to malemu statkowi plynacemu pod zaglami ustepuje:',
        options: ['Statek zaglowy nie bedacy malym statkiem','Statek pasazerski','Maly statek o napedzie mechanicznym.'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Maly statek plynacy pod zaglami powinien ustapic:',
        options: ['Statkowi pasazerskiemu o napedzie mechanicznym','Malemu statkowi o napedzie mechanicznym','Wodolotowi plynacemu z duza predkoscia.'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Jacht plynie na silniku, kursem przeciwnym na wprost zbliza sie jacht pod zaglami niosacy sygnal jak na rysunku. Jak nalezy postapid?',
        options: ['Utrzymac kurs','Zmienic kurs w prawo','Zmienic kurs w lewo'],
	answer: 1,
    img: 'img/100.png',
        topic: "przepis"
    },    
    {
        q:'Wody srodladowe. W czasie manewru wyprzedzania jachtu zaglowego, jacht ktory wyprzedza powinien z zasady wyprzedzac:',
        options: ['Jacht wyprzedzany po jego stronie zawietrznej w bezpiecznej odleglosci','W sposob uzgodniony z prowadzacym jacht wyprzedzany','Jacht wyprzedzany po jego stronie nawietrznej w bezpiecznej odleglosci'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Na burcie stojacego statku wywieszono sygnal jak na rysunku. Z ktorej strony nalezy minac ten statek?',
        options: ['Nie wolno mijac takiego statku','Mozna minac z obu stron, ostroznie, nie wytwarzajac fali','Tylko od strony flagi czerwono-bialej'],
	answer: 1,
    img: 'img/101.png',
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Na burcie stojacego statku wywieszono sygnaly jak na rysunku. Z ktorej strony nalezy minac ten statek?',
        options: ['Nie wolno mijac takiego statku','Od strony flagi czerwonej','Od strony flagi czerwono-bialej'],
	answer: 2,
    img: 'img/102.png',
        topic: "przepis"
    },
    {
        q:'Prowadzacy jacht w celu unikniecia bezposrednio grozacego niebezpieczeostwa zderzenia (szczegolnie kiedy niezbedna jest szybka reakcja):',
        options: ['Moze odstapic od przestrzegania przepisow po uzgodnieniu z druga jednostka','Nigdy nie moze naruszac przepisow','Moze odstapic od przestrzegania obowiazujacych przepisow zeglugowych.'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Jacht zaglowy wyprzedzajacy inny jacht zaglowy',
        options: ['Ma prawo drogi wzgledem jachtu, ktory wyprzedza','Moze go ominac tylko po uzyskaniu jego zgody','Ustepuje jachtowi wyprzedzanemu omijajac go w bezpiecznej odleglosci'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Statek zaglowy plynacy prawym halsem po otwartych wodach morskich ustepuje:',
        options: ['Statkowi handlowemu o napedzie mechanicznym','Statkowi rybackiemu zajetemu polowem','Statkowi zaglowemu plynacemu lewym halsem.'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Jacht plynacy pod zaglami po otwartych wodach morskich ustepuje:',
        options: [' jachtowi zaglowemu plynacemu na silniku','statkowi o ograniczonej zdolnosci manewrowej','statkowi o napedzie mechanicznym w drodze.'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Jacht plynacy pod zaglami po otwartych wodach morskich idzie kursem przecinajacym sie z kursem statku o napedzie mechanicznym tak, ze istnieje ryzyko zderzenia. Statek podniosl sygnal jak na rysunku. Jak nalezy postapic?',
        options: ['Utrzymac kurs i szybkosc','Ustapic temu statkowi mijajac go w bezpiecznej odleglosci','To statek lowiacy okreznica ominac go w znacznej odleglosci'],
	answer: 1,
    img: 'img/103.png',
        topic: "przepis"
    },    
    {
        q:'Jacht idzie kursem przecinajacym sie z kursem malej jednostki tak, ze istnieje ryzyko zderzenia (Jednostka niesie sygnal jak na rysunku). Jak nalezy postapic?',
        options: ['Utrzymac kurs i szybkosc','Przejsc mu blisko za rufa','Ominac go z daleka'],
	answer: 2,
    img: 'img/104.png',
        topic: "przepis"
    },    
    {
        q:'Na kursie jachtu jest jednostka, ktora podniosla sygnal jak na rysunku. Jak ja wyminac?',
        options: ['Nie zblizac sie blizej niz 2 Mm','Minac go daleko przed dziobem','Minac go z dowolnej strony w bezpiecznej odleglosci.'],
	answer: 2,
    img: 'img/105.png',
        topic: "przepis"
    },
    {
        q:'Zeglarz jachtowy uprawniony jest do:',
        options: ['Prowadzenia po wodach morskich jachtu o dlugosci do 12 m w odleglosci do 2 Mm od linii brzegowej w porze dziennej','Prowadzenia jachtow o dlugosci do 10 m w odleglosci do 10 Mm od linii brzegowej','Prowadzenia jachtow o dlugosci do 24 m po wodach morskich w porze dziennej.'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Jacht zaglowy plynacy na zaglach i na silniku w dzien powinien nosic:',
        options: ['Czarna kule','Czarny stozek skierowany wierzcholkiem w dol','Czerwona kule'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Dwa krotkie dzwieki nadane przez statek oznaczaja:',
        options: ['Zmieniam kurs w prawo','Zmieniam kurs w lewo','Uwaga.'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Jeden krotki dzwiek nadany przez statek o napedzie mechanicznym oznacza:',
        options: ['Zmieniam kurs w prawo','Zmieniam kurs w lewo','Uwaga.'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Trzy krotkie dzwieki przez statek oznaczaja:',
        options: ['Zmieniam moj kurs w prawo','Zmieniam moj kurs w lewo','Moje maszyny pracuja wstecz.'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Seria krotkich dzwiekow (wiecej niz cztery) nadana przez statek na drodze srodladowej oznacza:',
        options: ['Czlowiek za burta','Niebezpieczenstwo zderzenia','Zatrzymajcie natychmiast swoj statek.'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Statek ma wywieszony sygnal jak na rysunku. Co oznacza i jak postepowac?',
        options: ['Wzywam pomocy, podejsc i nawiazac lacznosc','Mam nurka pod woda, mijac ostroznie','Stoje na mieliznie, mijac daleko'],
	answer: 1,
    img: 'img/106.png',
        topic: "przepis"
    },
    {
        q:'Statek zblizajacy sie do jachtu nadal sygnal jeden krotki, jeden dlugi i dwa krotkie dzwieki oraz wywiesil sygnal jak na rysunku. Co to oznacza i jak postepowac?',
        options: ['Zatrzymajcie natychmiast swoj statek, zatrzymac sie','Mam zamiar wyprzedzic was po waszej lewej burcie, utrzymac kurs','Mam zamiar zawrocic w lewo, obserwowac ruchy statku'],
	answer: 0,
    img: 'img/107.png',
        topic: "przepis"
    },
    {
        q:'Jeden dlugi dzwiek nadany przez statek na drodze srodladowej oznacza:',
        options: ['Uwaga','Skrecam w prawo','Skrecam w lewo'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Sygnal swietlny lub dzwiekowy skladajacy sie z grupy trzech krotkich, trzech dlugich i trzech krotkich swiatel i/lub dzwiekow oznacza:',
        options: ['Jeden z sygnalow manewrowych','Sygnal na postoju we mgle','Jeden z sygnalow wzywania pomocy'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Ktory z ponizszych sygnalow NIE JEST sygnalem wzywania pomocy na wodach srodladowych:',
        options: ['Zataczanie kregow flaga lub innym podobnym przedmiotem','Zolty romb widoczny ze wszystkich stron','Flaga i umieszczona nad nia lub pod nia kula'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Na podejsciu do portu podczas ciszy nastapila awaria silnika. Jest dosd duzy ruch. Jaki sygnal powinien podniesc jacht.',
        options: ['Jedna czarna kule','Dwie czarne kule','Czarny stozek'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Jacht zaglowy A plynie lewym halsem na wiatr, drugi jacht zaglowy B idzie prawym halsem i na sztagu ma wywieszony czarny stozek. Kursy jachtow przecinaja sie tak, ze istnieje ryzyko zderzenia. Ustapic powinien:',
        options: ['Jacht A','Jacht B','Ten ktory ma drugi jacht po lewej rece.'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Na jachcie jednomasztowym z ozaglowaniem trojkatnym bandere nosimy:',
        options: ['Na topie masztu','Pod prawym salingiem','Na flagsztoku na rufie'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Na jachcie plynacym na silniku z opuszczonymi zaglami bandere nosimy:',
        options: ['Na topie tylnego masztu','Pod prawym salingiem','Na flagsztoku na rufie'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Gdzie nosi sie bandere na jachtach dwumasztowych o ozaglowaniu gaflowym?',
        options: ['Na topie tylnego masztu','Na flagsztoku na rufie','Pod pikiem gafla tylnego zagla.'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'O jakiej porze podnosi sie bandere na jachcie stojacym w porcie?',
        options: ['O wschodzie slonca','O godzinie 08:00','Jak kapitan wejdzie na poklad.'],
	answer: 1,
        topic: "przepis"
    },
    {
        q:'Co mowia zasady etykiety na temat trzymania rak i nog poza burta jachtu?',
        options: ['Nie okreslaja zadnych zasad','Zdecydowanie zabraniaja','Zezwalaja, ale tylko podczas zeglugi.'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Co mowi etykieta jachtowa o noszeniu odbijaczy poza burta podczas zeglugi?',
        options: ['Wyraznie neguje tego typu praktyke, odbijacze wyklada sie bezposrednio przed cumowaniem','Nie wspomina nic o tym','Jest to dopuszczalne na wodach srodladowych.'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Przed wejsciem na obcy jacht nalezy:',
        options: ['Zapytac o pozwolenie wejscia i nie przeszkadzac w czasie posilku','Zagwizdac trzy razy','Nic nie trzeba robic, mozna wejsc, bo stanowimy brac zeglarska.'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Dwa jachty zacumowane sa burta w burte. Schodzac z jachtu zewnetrznego nalezy:',
        options: ['Przechodzic cicho po jego czesci dziobowej','Przechodzic przez jego czesc rufowa','Nie ma to znaczenia, bo mamy zgode na takie cumowanie'],
	answer: 0,
        topic: "przepis"
    },    
    {
        q:'Czy wchodzac do portu panstwa innej bandery niz nasza nalezy?',
        options: ['Podniesc bandere tego panstwa na topie grotmasztu','Podniesc bandere tego panstwa pod prawym salingiem','Podniesc tylko bandere naszego panstwa dla identyfikacji'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Na jachcie w porcie podniesiona byla duza gala flagowa. Jak postepujemy po odejsciu i dalszej zegludze pod zaglami?',
        options: ['Pozostawiamy gale flagowa','Zamieniamy ja na mala gale flagowa','Zdejmujemy gale, pod zaglami nie nosi sie gali'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Jak wyglada duza gala flagowa?',
        options: ['To flagi kodu miedzynarodowego podniesione wzdluz want w dowolnej kolejnosci','To flagi kodu miedzynarodowego podniesione pod salingami masztow','To flagi kodu miedzynarodowego podniesione od dziobu przez topy masztow do rufy ( w Polsce przyjety uklad AB1 CD2 itd. )'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Jacht idzie pod zaglami, nadeszla mgla. Jaki sygnal nalezy nadawad?',
        options: ['Jeden dzwiek dlugi co 2 minuty','Dwa dzwieki dlugie co 2 minuty','Jeden dzwiek dlugi i dwa krotkie co 2 minuty'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Idac we mgle uslyszano na jachcie dwa dzwieki dlugie przed dziobem. Jak nalezy postapid?',
        options: ['Zmniejszyc szybkosc, zmienic kurs w prawo, byd w gotowosci do manewrow','Nie zmieniac kursu, nasluchiwac w ktora strone przemieszcza sie statek nadajacy sygnal','Najlepiej zatrzymac sie i poczekac, az statek nadajacy sygnal oddali sie'],
	answer: 0,
        topic: "przepis"
    },    
    {
        q:'Czy do wody na jeziorach i morskich wodach przybrzeznych mozna wyrzucac smiecie',
        options: ['Tak, z wyjatkiem odpadow z tworzyw sztucznych','Tak ale tylko daleko od brzegu','Nie wolno wyrzucac zadnych'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Na jachcie jest WC. Czy mozna go uzywac w portach i podczas zeglugi?',
        options: ['Tak, jezeli WC jachtu polaczony jest ze zbiornikiem lub WC ,,chemiczny" (zamkniety odplyw za burte)','Tak, ale tylko co najmniej 1000 m od brzegu','Tak, byle poza portami'],
	answer: 0,
        topic: "przepis"
    },
    {
        q:'Podczas zeglugi zobaczylismy na wodzie duza plame oleju. Co nalezy zrobic?',
        options: ['Szybko oddalic sie od tego miejsca','Probowac ja zlikwidowac uzywajac detergentow','Powiadomic wlasciwe sluzby (na srodladziu straz pozarna, na morzu sluzbe ruchu/kapitanat)'],
	answer: 2,
        topic: "przepis"
    },    
    {
        q:'Czy przy zmywaniu naczyn na jachcie wskazane jest uzycie detergentow?',
        options: ['Tak, jak najwiecej bo dobrze emulguja tluszcze','Jak najmniej, bo sa szkodliwe dla srodowiska','Nie ma to znaczenia, bo sa obojetne dla srodowiska'],
	answer: 1,
        topic: "przepis"
    },    
    {
        q:'Do jakiego znaku zeglugowego plywajacego lub brzegowego moze zacumowac statek zaglowy:',
        options: ['Znaku zezwolenia na postoj','Znaku zezwolenia na ruch statkow zaglowych','Zabrania sie cumowania do znakow zeglugowych.'],
	answer: 2,
        topic: "przepis"
    },
    {
        q:'Wody srodladowe. Swiatlo zielone nad bialym pokazane na statku oznacza:',
        options: ['Statek stojacy na kotwicy','Prom na uwiezi w ruchu','Statek, ktory utracil zdolnosc do manewrowania.'],
	answer: 1,
        topic: "przepis"
    },
]
