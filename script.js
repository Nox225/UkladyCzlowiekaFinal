const body = document.getElementById('body');
const list = document.querySelectorAll('.list');

const main = document.getElementById('main');

const closeDetails = document.getElementById("close-details");
const Details = document.getElementById("details");
const DetailsContainer = document.getElementById("details-container");

const male = document.getElementById('male');
const female = document.getElementById('female');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));  
    this.classList.add('active'); 
}

function stronaglowna(){
    main.innerHTML = ``;
    main.innerHTML = `
    <div class="glowna" id="glowna">
        <h2>Witaj na stronie internetowej poświęconej układami człowieka, wykonanej w celach edukacyjnych</h2>
        <p>W celu dowiedzenia się o interesującym Cię układzie, wybierz go z paska na górze, a następnie, klikając na wyróżnione części układu, znajdź więcej ciekawych informacji o danym zagadnieniu</p>
    </div>
    `;
    // body.appendChild(main);
}

stronaglowna();

//---------------------------Trawienny----------------------------
function trawienny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="trawienny" src="pictures/trawienny.png">
        <div class="jama-ustna" id="jama-ustna"></div>
        <div class="slinianki" id="slinianki"></div>
        <div class="watroba" id="watroba"></div>
        <div class="pecherzyk-zolciowy" id="pecherzyk-zolciowy"></div>
        <div class="dwunastnica" id="dwunastnica"></div>
        <div class="jelito-g" id="jelito-g"></div>
        <div class="gardlo1" id="gardlo1"></div>
        <div class="przelyk" id="przelyk"></div>
        <div class="zoladek" id="zoladek"></div>
        <div class="trzustka" id="trzustka"></div>
        <div class="jelito-c" id="jelito-c"></div>
        <div class="odbytnica" id="odbytnica"></div>
        <div class="otwor" id="otwor"></div>
    `;
    document.getElementById('jama-ustna').addEventListener('click', showDetailsJamaUstna);
    document.getElementById('slinianki').addEventListener('click', showDetailsSlinianki);
    document.getElementById('watroba').addEventListener('click', showDetailsWatroba);
    document.getElementById('pecherzyk-zolciowy').addEventListener('click', showDetailsPecherzykZolciowy);
    document.getElementById('dwunastnica').addEventListener('click', showDetailsDwunastnica);
    document.getElementById('jelito-g').addEventListener('click', showDetailsJelitoG);
    document.getElementById('gardlo1').addEventListener('click', showDetailsGardlo);
    document.getElementById('przelyk').addEventListener('click', showDetailsPrzelyk);
    document.getElementById('zoladek').addEventListener('click', showDetailsZoladek);
    document.getElementById('trzustka').addEventListener('click', showDetailsTrzustka);
    document.getElementById('jelito-c').addEventListener('click', showDetailsJelitoC);
    document.getElementById('odbytnica').addEventListener('click', showDetailsOdbytnica);
    document.getElementById('otwor').addEventListener('click', showDetailsOtwor);
}

function showDetailsJamaUstna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jama Ustna</h3>
            <p>Jama ustna (cavum oris) jest początkowym odcinkiem przewodu pokarmowego. Ograniczają ją: od góry - podniebienie, po bokach policzki, od dołu – dwa mieśnie żuchwowo-gnykowe, tworzące tzw. przeponę jamy ustnej; ścianę przednią jamy ustnej tworzą wargi, ograniczające szparę ustną; w tyle jama ustna łaczy się z gardłem otworem, zwanym cieśnią gardzieli.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsSlinianki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Ślinianki</h3>
            <p>Gruczoły ślinowe (ślinianki) to narządy wydzielania zewnętrznego. W ich skład wchodzą trzy pary dużych gruczołów i małe, licznie rozsiane w błonie śluzowej jamy ustnej i gardła. Gruczoły te odpowiadają za nieustanną produkcję śliny w organizmie. Ślinianka składa się miąższu ślinianki, gdzie komórki wydzielnicze produkują ślinę, oraz z przewodów wyprowadzających ślinę. Trzy główne, duże gruczoły ślinowe to:
            ślinianki przyuszne to największe gruczoły ślinowe o masie około 30-40 g. Położone są symetrycznie po obu stronach twarzy. Ślinianka produkuje głównie treść surowiczą. Ślina spływa ze ślinianki przyusznej do przedsionka jamy ustnej. Ślinianka ta produkuje około 25% śliny spoczynkowej i 70% śliny stymulowanej. Przez miąższ ślinianki przyusznej przebiegają: tętnica szyjna zewnętrzna, żyła za żuchwowa i nerw twarzowy. W śliniance umiejscowione się również węzły i naczynia chłonne.
            ślinianki podżuchwowe to dwa gruczoły, znajdujące się po obu stronach twarzy w tzw. trójkątach podżuchwowych (w dolnej części żuchwy). Ujście tej ślinianki znajduje się pod językiem. Ślinianka podżuchwowa produkuje około 70% śliny w stanie spoczynku i 25% śliny po pobudzeniu.
            ślinianki podjęzykowe  są najmniejsze spośród dużych gruczołów ślinowych. Usytuowane są w dnie jamy ustnej na mięśniu, tuż pod błoną śluzową. Odprowadza ślinę do dna jamy ustnej, podobnie jak ślinianki podżuchwowe.
            Najważniejszą rolą ślinianek jest wydzielanie śliny, która pełni wiele funkcji w jamie ustnej i jamie gardła. Ślina pełni wiele funkcji,  m.in: wytwarzanie enzymów trawiennych, które służą do wstępnego trawienia pokarmów, ślina nawilża kęsy pokarmowe i rozpuszcza, dzięki czemu łatwiej je połknąć, utrzymuje odpowiedni pH w jamie ustnej, działa bakteriobójczo, zapobiega próchnicy, nawilża wnętrze jamy ustnej i gardła.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsWatroba(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Wątroba</h3>
            <p>Wątroba (hepar) jest dużym narządem dodatkowym układu pokarmowego. Leży w nadbrzuszu, 
            w prawym podżebrzu oraz nadpępczu a także częściowo w lewym podżebrzu i pokryta jest otrzewną. Wątroba ma dwie powierzchnie: powierzchnię przeponową przylegającą do przepony oraz powierzchnię trzewną, przylegającą do narządów rozmieszczonych poniżej w jamie brzusznej. Wyróżnia się w niej cztery płaty anatomiczne: największy z płatów – płat prawy, płat lewy, płat czworoboczny i płat ogoniasty. Funkcjonalnie wątroba podzielona jest na części prawą i lewą. Wątrobę buduje duża liczba tzw. zrazików o kształcie wielokątów przylegających do siebie 
            i połączonych tkanką łączną, ich średnica wynosi od 1 do 2 mm. Każdy zrazik tworzą komórki wątrobowe – hepatocyty, przebiegające promieniście dokoła osi zrazika ułożone w beleczki. Hepatocyty zawierają barwniki żółciowe, glikogen oraz kropelki tłuszczu. Kanaliki żółciowe przechodzą pomiędzy beleczkami wątrobowymi i do nich zostaje wydzielona żółć z hepatocytów. Kanaliki żółciowe wpadają do przewodzików żółciowych międzyzrazikowych, a te ostatecznie łączą się w przewód wątrobowy prawy oraz lewy, wychodzące z odpowiednich płatów. Wątroba to ważny narząd, gdyż przez nią przepływa krew odprowadzana przez żyłę wrotną wątroby z cewy pokarmowej, gruczołów z nim związanych oraz śledziony. Funkcjonalnie z wątrobą powiązany jest pęcherzyk żółciowy. Ma kształt gruszkowaty i może zawierać do 50 ml żółci. Jest pokryty otrzewną od zewnątrz. Pełni on rolę magazynu żółci, która zostaje w nim zagęszczona poprzez wchłanianie wody. W czasie trawienia posiłków bogatych w tłuszcze, żółć jest uwalniana zarówno z wątroby jak 
            i z pęcherzyka żółciowego. Uwalnianie żółci odbywa się pod wpływem pobudzenia nerwów błędnych. Prowadzi to do obkurczenia pęcherzyka żółciowego i uwolnienia żółci do dwunastnicy. Wątroba bierze udział w trawieniu oraz wielu przemianach metabolicznych organizmu a główną jej funkcją jest odtruwanie organizmu. Wątroba wytwarza żółć, gromadzi substancje będące źródłem energii: glikogen, tłuszcze, białka oraz witaminy rozpuszczalne w tłuszczach, prowadzi procesy przemiany glukozy do glikogenu, reguluje gospodarkę żelaza i miedzi, jest miejscem niszczenia krwinek czerwonych, produkuje białka osocza oraz czynniki krzepnięcia krwi, oraz pochłania różne substancje wchłonięte z jelit, które przedostały się do układu żyły wrotnej.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPecherzykZolciowy(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pęcherzyk Żółciowy</h3>
            <p>Pęcherzyk żółciowy (vesica fellea) wraz z przewodem pęcherzykowym można rozpatrywać jako uchyłek przewodu wątrobowego, służący za zbiornik żółci, w którym ulega ona zagęszczeniu wskutek wchłaniania wody przez błonę śluzową. Pęcherzyk żółciowy ma kształt gruszkowatego worka długości 8-12 cm, szerokości 30-50 mm, pojemności 30-50 ml. Rozróżniamy w nim trzon (corpus vesicae felleae), dno (fundus) i szyjkę (collum). Trzon leży w dole pęcherzyka żółciowego. Dno pęcherzyka rzutuje na przednią ścianę jamy brzusznej w kącie pomiędzy brzegiem bocznym mięśnia prostego brzucha a łukiem żebrowym prawym. Dno wystaje nieco spod dolnego brzegu wątroby. Szyjka, skierowana ku wrotom wątroby, zwęża się stopniowo w kierunku przewodu wątrobowego wspólnego i ma dwa esowate wygięcia.  W skład ściany pęcherzyka żółciowego wchodzą: błona śluzowa i błona mięśniowa. Błona surowicza pokrywa tylko dolną jego powierzchnię. Powierzchnia błony śluzowej tworzy drobną sieć niewielkich fałdów. W obrębie przewodu pęcherzykowego fałdy układają się poprzecznie, tworząc tzw. fałd spiralny (plica spiralis). Błona mięśniowa jest słabo rozwinięta. Przewód pęcherzykowy (ductus cysticus) jest nieco dłuższy od przewodu wątrobowego wspólnego (30-35 mm), o mniejszej średnicy (3 mm) od przewodu wątrobowego. Przewód żółciowy wspólny (ductus choledochus), długości ok. 75 mm, średnicy zmiennej (ok. 8 mm), powstaje po połączeniu przewodu wątrobowego wspólnego z przewodem pęcherzykowym. Końcowy odcinek przewodu żółciowego wspólnego spotyka się z przewodem trzustkowym przed wejściem do ściany dwunastnicy, którą wspólnie przebijają ukośnie i otwierają się na brodawce większej dwunastnicy, w odległości 8,5-10 cm od odźwiernika. Przed ujściem oba przewody tworzą rozszerzenie, zwane bańką wątrobowo-trzustkową, leżącą w obrębie brodawki dwunastniczej. W ujściu prowadzącym z bańki do dwunastnicy znajduje się zwieracz, który reguluje przepływ wydzieliny do dwunastnicy. Nosi on nazwę zwieracza bańki wątrobowo-trzustkowej (sphincter ampullae hepatopancreaticae).</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsDwunastnica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Dwunastnica</h3>
            <p>Dwunastnica (duodenum) to początkowa, około 25 cm część jelita cienkiego. Ma kształt litery C i leży w bezpośrednim sąsiedztwie głowy trzustki. Jej położenie w większości jest pozaotrzewnowe z wyjątkiem niewielkiej części górnej – opuszki. Ścianę dwunastnicy pokrywają wysokie i gęsto ułożone fałdy okrężne. W dwunastnicy można wyróżnić 4 części: opuszka dwunastnicy jest poszerzonym fragmentem dwunastnicy położonym za odźwiernikiem, część zstępująca dwunastnicy, trafiają tu przez brodawkę dwunastniczą, po wymieszaniu we wspólnej strukturze, bańce wątrobowo-trzustkowej, wydzieliny z pęcherzyka żółciowego oraz enzymy trzustkowe, część pozioma dwunastnicy i część wstępująca dwunastnicy, łącząca dwunastnicę z jelitem czczym. W dwunastnicy kwaśną treść pokarmową zobojętnia sok jelitowy o pH około 8,0. Następnie, dzięki dostarczonym tu wraz z sokiem trzustkowym, enzymom oraz żółci wytwarzanej w wątrobie, kontynuowany jest proces trawienia a także proces wchłaniania żelaza.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJelitoG(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jelito Grube</h3>
            <p>Jelito grube (intestinum crassum) – jest ostatnim odcinkiem przewodu pokarmowego. Pełni w ciele człowieka szereg funkcji, które są bardzo istotne dla ogólnego zdrowia. Jego ułożenie i struktura nie jest tylko przyczyną prawidłowego działania układu pokarmowego. Jelito grube znacznie przyczynia się do postawy ciała, a jego dysfunkcje mogą powodować dolegliwości, których źródło nie zawsze jest kojarzone z nim. Od jelita cienkiego, jego grubszy kolega jest oddzielony zastawką krętniczo – kątniczą odpowiadającą za prawidłowe przesuwanie treści pokarmowej. Przechodząc następnie w kątnicę, w której znajduje się wyrostek robaczkowy i okrężnicę wstępującą podąża w górę jamy brzusznej. W okolicach wątroby zgięcie prawe okrężnicy rozpoczyna przebieg poprzecznej części jelita grubego, by następnie w okolicy śledziony przejść w okrężnicę zstępującą. Kończy się esicą i odbytnicą znajdującymi się odpowiednio w lewym dole biodrowym po przedniej stronie krzyża. Jelito grube jest jedną z ważniejszych części układu pokarmowego i każde zaburzenie jego funkcji – istotnie wpływa na sprawność całego ciała. Odpowiada przede wszystkim za: zagęszczanie niestrawionych, resztek pokarmowych, wchłanianie wody, elektrolitów i witamin, prawidłowy przebieg defekacji.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzelyk(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Przełyk</h3>
            <p>Przełyk (esophagus) jest najwęższą częścią przewodu pokarmowego. Ma on kształt długiego wąskiego cylindra, ciągnącego się od dolnej granicy gardła, tj. od poziomu VI kręgu szyjnego, aż do wpustu żołądka położonego na wysokości X-XI kręgu piersiowego. Długość przełyku wynosi 25-30 cm, Srednica przełyku pustego około 13 mm, w stanie rozciągnietym może osiągać ponad 25 mm. Odpowiednio do okolicy, w jakiej przebiega, rozróżniamy w przełyku: część szyjną, piersiową i brzuszną. Krótka część szyjna przełyku leży bezpośrednio za tchawicą, luźno łacząc się z jej ścianą tylną. Najdłuższa - część piersiowa, biegnie w śródpiersiu tylnym w kierunku ku dołowi. Najkrótsza - część brzuszna, długości 2-5 cm, rozpoczyna się po przejściu przez otwór przełykowy przepony i kończy się wpustem żołądka. Przełyk na swym przebiegu wykazuje trzy zwężenia: pierwsze znajduje się na granicy z gardłem, drugie - w miejscu skrzyżowania z lewym oskrzelem głównym, trzecie - w obrębie przepony. W zweżeniach tych mogą się zatrzymywać przełknięte ciała obce. Ściana przełyku składa się z trzech warstw: błony śluzowej, mięśniowej i zewnętrznej.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZoladek(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żołądek</h3>
            <p>Żołądek (ventriculus, gaster) to najbardziej rozszerzona część przewodu pokarmowego, mięśniowy worek o hakowatym kształcie. Jego ściany zbudowane są z kilku warstw tkanki mięśniowej gładkiej, przebiegającej w różnych kierunkach, tak by mógł brać on udział w rozdrabnianiu kęsów pokarmu, które trafiają z przełyku. Żołądek, stanowiący strukturę bardzo elastyczną, w trakcie trawienia może przybierać wiele różnych kształtów w zależności od tego, w których miejscach kurczą się ściany oraz jak wypełnione lub rozdęte jest jego wnętrze. Ma długość około 25-30 cm, szerokość około 12-14 cm, a pojemność 1000-3000 ml. Zajmuje przestrzeń w jamie brzusznej na wysokości jedenastego kręgu piersiowego do trzeciego bądź czwartego kręgu lędźwiowego. Z przełykiem łączy się przez wpust żołądka, który znajduje się na wysokości dziesiątego kręgu piersiowego, około 3 cm pod przeponą, nieco po lewej stronie kręgosłupa. Cała ta okolica nazywana jest częścią wpustową. Od wpustu ku dołowi biegnie krzywizna mała żołądka, natomiast druga krzywizna, większa, początkowo zdąża ku górze, a następnie opada, tworząc dno żołądka. Dno żołądka jest wysklepione ku górze i znajduje się nieco powyżej wpustu. Krzywizna większa schodzi w dół tworząc kolano żołądka, najniżej położoną część narządu. Dalej, od kolana żołądka, wznosi się aż do miejsca, w którym znajduje się drugi otwór, ujście odźwiernika. Odźwiernik jest położony na wysokości pierwszego kręgu lędźwiowego, nieco po prawej stronie kręgosłupa. Między krzywiznami małą i większą leży trzon żołądka, w którym wyróżniamy ścianę przednią i tylną. Pomimo swojej elastyczności żołądek jest przymocowany u góry do przełyku, a w swojej części końcowej, do części górnej dwunastnicy. Zarówno żołądek, jak i łącząca się z nim dwunastnica, zawieszone są na krezce (narządzie stabilizującym narządy wewnętrzne jamy brzusznej). Ściana żołądka, jak cały przewód pokarmowy, ma budowę warstwową. Wewnętrzną warstwę ściany żołądka stanowi błona śluzowa, którą budują 3 warstwy: samoodnawiająca się  nabłonkowa, blaszka mięśniowa, która wnika pomiędzy gruczoły żołądkowe oraz tkanka podśluzowa. Błona śluzowa żołądka wytwarza duże, podłużnie przebiegające fałdy, nazywane fałdami żołądkowymi, oraz tysiące mikroskopijnych fałdów kosmkowatych i dołeczków żołądkowych. Zlokalizowane są tam gruczoły właściwe żołądka. Kolejna warstwa ściany żołądka to błona mięśniowa, która również ma budowę warstwową. 
Funkcja żołądka sprowadza się do procesów fizjologicznych, zachodzących w środowisku soku żołądkowego: rozdrabnianie pokarmum, wyjaławianie pokarmu, trawienie białek i zapoczątkowywanie trawienia tłuszczów przez lipazę żołądkową, trawienie cukrów przez amylazę ślinową, które trwa do momentu dezaktywacji enzymu po obniżenia pH pokarmu.
Połknięte pożywienie gromadzi się w żołądku, układając się warstwami. Kolejno połykane porcje trafiają do środka żołądka, rozsuwając na zewnątrz pokarmy spożyte wcześniej, tak że te ostatnie nie tracą kontaktu z wydzieliną trawienną błony śluzowej. Żołądek można napełnić szybko, ale pokarm może przebywać tam kilka godzin. W tym czasie podlega obróbce mechanicznej i przemianom chemicznym, przy udziale soku żołądkowego. Płyny przesuwają się w kierunku odźwiernika i dalej do dwunastnicy szybciej niż pokarm stały. W miarę opróżniania żołądka stopniowo zmniejsza się wypełnienie części rezerwuarowej i jednocześnie pojawiają się w niej powolne skurcze żołądka 
i odźwiernika. Pod ich wpływem zawartość pokarmowa ulega rozdrobnieniu, zmieszaniu z sokiem żołądkowym i ostatecznie przesunięciu do dwunastnicy. Aktywność skurczowa żołądka rozpoczyna się już wkrótce po spożyciu pokarmu, początkowo są to skurcze słabe, a następnie stopniowo się nasilają. Każdy skurcz perystaltyczny przesuwa miazgę pokarmową w kierunku odźwiernika, wtłaczając jednorazowo niewielką jej porcję do dwunastnicy a reszta powraca do trzonu. Pokarm wielokrotnie przesuwany w żołądku w jedną i drugą stronę ulega dokładnemu rozdrobnieniu 
i wymieszaniu z sokiem żołądkowym. Opróżnianie żołądka jest wynikiem współdziałania żołądka, zwieracza odźwiernika i dwunastnicy i zależy od właściwości mechanicznych, chemicznych 
i fizycznych spożywanego pokarmu. Okres czasu w jakim spożyte pokarmy przebywają w żołądku jest zróżnicowany. Najkrócej przebywa w nim pokarm białkowy, dodatek tłuszczów i węglowodanów do pokarmu spowalnia proces opróżniania. Płyny opuszczają żołądek szybciej niż pokarmy stałe. Sok żołądkowy jest wydzieliną wytwarzaną w ilości około 2,5 litra na dobę, w komórkach śluzowych, komórkach głównych oraz komórkach okładzinowych. Wydzielanie soku żołądkowego następuje pod wpływem bodźców nerwowych i chemicznych.
</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsTrzustka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Trzustka</h3>
            <p>Trzustka (pancreas) jest długim i wąskim gruczołem o budowie zrazikowej, barwy szaroróżowej lub żółtoróżowej, konsystencji miękkiej, o masie ok. 70-90 g. Długość jej wynosi 15-20 cm, szerokość 2,5-5,5 cm, grubość 1,7-2 cm. Trzustka jest ułożona poprzecznie na tyInej ścianie jamy brzusznej za żołądkiem na poziomie l i II kręgu lędźwiowego. Rozróżniamy w niej: 1) głowę (caput pancreatis), położoną wewnątrz pętli dwunastniczej, 2) trzon (corpus pancreatis), ciągnący się poprzecznie ku stronie lewej i nieco ku górze, oraz 3) ogon (cauda pancreatis), sięgający do wnęki śledziony. Głowa trzustki, nieco spłaszczona, jest zrośnięta z częścią zstępującą dwunastnicy. Trzon i ogon na przekroju poprzecznym mają kształt trójkątny, w związku z czym odróżniamy tu trzy powierzchnie. Powierzchnia przednia, pokryta w całości otrzewną, zwrócona jest ku przodowi i ku górze, tworząc łoże dla żołądka. Powierzchnia dolna, skierowana ku przodowi i dołowi, również pokryta otrzewną, styka się z krezką okrężnicy poprzecznej. Ściana tylna, zwrócona ku tyłowi, związana jest tkanką łączną wiotką z narządami położonymi na tylnej ścianie jamy brzusznej Centralnie w osi gruczołu przebiega przewód trzustkowy (ductus pancreaticus), do którego dochodzą mniejsze przewody zrazikowe. Zarówno przewód główny, jak i przewody zrazikowe dają się łatwo rozpoznać, gdyż ściana ich ma barwę białawą, która odznacza się na tle ciemniejszego miąższu gruczołu. Przewód trzustkowy otwiera się do dwunastnicy razem z przewodem żółciowym wspólnym. Często istnieje jeszcze przewód dodatkowy, znacznie mniejszy i bardziej zmienny, który uchodzi około 2 cm powyżej ujścia przewodu głównego na brodawce dodatkowej.
            Trzustka ma budowę zrazikową. Liczne drobne rozgałęzienia przewodów zrazikowych w postaci długich, cienkich cewek łączą się z pęcherzykami gruczołowymi umieszczonymi w zrazikach. Pęcherzyki wydzielnicze są małe, kuliste, wysłane wysokimi walcowatymi lub stożkowatymi komórkami gruczołowymi, które ograniczają bardzo wąskie światło. Wewnętrzna część tych komórek, zwrócona ku światłu pęcherzyków, jest jaśniejsza i zawiera dużo ziarenek wydzieliny (zymogen) zanikających po wydostaniu się wydzieliny do światła pęcherzyka. Zewnętrzna część komórek jest ciemniejsza i składa się z jednorodnej protoplazmy. Wśród tkanki w każdym zraziku rozsiane są grupy odmiennych komórek, tworzące wyspy trzustki. Komórki te nie mają łączności z przewodami wyprowadzającymi, lecz są oplecione gęstą siecią naczyń krwionośnych włosowatych. Komórki beta wysp trzustki wytwarzają hormon insulinę, która jest bezpośrednio wydzielana do krwi. Wyspy trzustki tworzą tzw. aparat wysepkowy trzustki, który należy do gruczołów dokrewnych.
            Trzustka wytwarza dwa rodzaje wydzieliny: sok trzustkowy, wydzielany do dwunastnicy, który bierze znaczny udział w trawieniu pokarmów, oraz powstające w wyspach trzustki dwa hormony - insulinę, która jest hormonem regulującym przemianę węglowodanową, i glukagon (czynnik hiperglikemiczny), podnoszący stężenie glukozy we krwi przez rozpad glikogenu.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJelitoC(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jelito Cienkie</h3>
            <p>Jelito cienkie (intestinum tenue) leży w obrębie jamy brzusznej sięgając aż do jamy miednicy, otoczone przez różne odcinki jelita grubego. Stanowi najdłuższy odcinek przewodu pokarmowego. Jego długość całkowita zależy od indywidualnych genów, średnio wynosi około 6 m. Rozpoczyna się, położoną zewnątrzotrzewnowo dwunastnicą, która ma około 25 cm długości. Kolejna jego część to jelito czcze, mierzące 2,5 m długości. W tej części zachodzi przede wszystkim wchłanianie. Jelito kręte to końcowe 3,5 metra jelita cienkiego. Poszczególne części nie są wyraźnie od siebie odgraniczone i mają wiele cech wspólnych. Jelito cienkie jest oddzielone od żołądka przez zwieracz odźwiernika, a od jelita grubego przez zwieracz krętniczo-kątniczy. Pierwszy reguluje opróżnianie żołądka i zapobiega refluksowi treści żółciowotrzustkowej i dwunastniczej do żołądka. Drugi reguluje transport treści 
            z jelita cienkiego do grubego i zapobiega zarzucaniu do jelita krętego, zakażonej bakteriami gnilnymi, zawartości okrężnicy.
            Ściany jelita cienkiego buduje kilka warstw: błona surowicza – otrzewna, warstwa mięśniowa – warstwa zewnętrzna o podłużnym przebiegu włókien i warstwa wewnętrzna o okrężnym przebiegu włókien, błona podśluzowa, błona śluzowa tworzącą charakterystyczne fałdy okrężne, pokryte kosmkami jelitowymi oraz gruczołami dwunastniczymi.
            Do funkcji jelita należy wydzielanie soku jelitowego, przesuwanie treści pokarmowej w stronę odbytu za pomocą ruchów perystaltycznych i jednocześnie wchłanianie substancji odżywczych. Sok jelitowy składa się ze złuszczonych komórek nabłonka jelitowego oraz izotonicznego roztworu zawierającego liczne enzymy trawienne. Wydzielanie tego  soku stymulowane jest hormonalnie pod wpływem przesuwającej się miazgi pokarmowej. W jelicie jest kontynuowany proces trawienia składników odżywczych w oparciu o enzymy wydzielane do przewodu pokarmowego przez gruczoły dodatkowe, takie jak wątroba i trzustka. Ponadto w jelicie produkowane są hormony regulujące podstawowe czynności układu trawiennego. 
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOdbytnica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Odbytnica</h3>
            <p>Odbytnica (rectum) jest końcowym odcinkiem jelita grubego. Rozpoczyna się na wysokości III kręgu krzyżowego i kończy ok. 3,5 cm poniżej wierzchołka kości guzicznej. Długość jej wynosi 15-20 cm. Średnicę ma mniejszą niż okrężnica esowata. Jest ona najmniejsza przy połączeniu z okrężnicą, największa - w części niższej, gdzie występuje wyraźne rozszerzenie, zwane bańką odbytnicy. Średnica pustej odbytnicy wynosi 2,5 cm, wypełnionej - może dochodzić do 7,5 cm. Taśmy okrężnicy na odbytnicy łączą się ze sobą i tworzą jednolitą warstwę błony mięśniowej podłużnej. Odbytnica na swym przebiegu tworzy dwa zgięcia w płaszczyźnie strzałkowej i kilka zgięć w płaszczyźnie czołowej. Pierwsze zgięcie strzałkowe - zgięcie krzyżowe - odpowiada wygięciu kości krzyżowej, drugie zgięcie kroczowe, skierowane wypukłością ku przodowi, powstaje wskutek zagięcia się końcowego odcinka odbytnicy ku tyłowi w okolicy wierzchołka kości guzicznej. W płaszczyźnie czołowej występują najczęściej również dwa zgięcia, które zaznaczają się na zewnętrznej powierzchni wcięciami, tworzącymi po stronie wewnętrznej fałdy poprzeczne. Otrzewna pokrywa tylko niewielką cześć odbytnicy, mianowicie jej ściany boczne i przednią do połowy ich długości. Ściana tylna jest przymocowana za pomocą tkanki łącznej wiotkiej i tłuszczowej do ściany i narządów miednicy. Błona mięśniowa odbytnicy składa się z dwóch warstw: zewnętrznej - podłużnej, i wewnętrznej - okrężnej. Warstwa podłużna jest znacznie grubsza niż taśmy okrężnicy. Błona mięśniowa okrężna grubieje w kierunku ku dołowi, by u ujścia odbytnicy utworzyć gruby i wysoki (1-2 cm) pierścień - mięsień zwieracz wewnętrzny odbytu. Błona śluzowa odbytnicy nie tworzy regularnych fałdów okrężnych. Wyraźnie występują jedynie wspomniane wyżej fałdy poprzeczne, odpowiadające zgięciom odbytnicy. W końcowym odcinku odbytnicy, zwanym częścią kroczową, błona śluzowa tworzy 8-12 pionowych podłużnych słupów odbytniczych, pooddzielanych od siebie zatokami. W słupach tych znajdują się sploty żylne. Otwór końcowy przewodu pokarmowego nazywamy odbytem (anus).</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOtwor(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Otwór odbytowy</h3>
            <p>Odbyt (anus) jest ostatnią częścią przewodu pokarmowego i wychodzi bezpośrednio z odbytnicy. Odbyt przechodzi przez dno miednicy i jest otoczony mięśniami. Górna i dolna część odbytu są otoczone wewnętrznymi i zewnętrznymi zwieraczami odbytu, dwoma mięśniowymi pierścieniami, które kontrolują wypróżnianie. Odbyt otoczony jest na całej swojej długości fałdami zwanymi zastawkami odbytu, które zbiegają się w linii zwanej linią grzebieniastą. Stanowi to punkt przejścia między jelitem tylnym a ektodermą. Poniżej tego punktu błona śluzowa odbytu wewnętrznego staje się skórą. Linia grzebieniasta to także podział między odbytem wewnętrznym i zewnętrznym.
            Odbyt otrzymuje krew z dolnej tętnicy odbytniczej i unerwienie z dolnych nerwów odbytniczych, które rozgałęziają się od nerwu sromowego. Odbyt to końcowy odcinek przewodu pokarmowego człowieka. Dzięki swojej budowie umożliwia utrzymanie i oddawanie stolca w sytuacji zależnej od woli, a także zatrzymywanie oddawania gazów.
            Ciśnienie wewnątrzodbytnicze wzrasta, gdy odbytnica wypełnia się kałem, popychając kał do ścian kanału odbytu. Skurcze mięśni brzucha i dna miednicy mogą wytworzyć ciśnienie w jamie brzusznej, co dodatkowo zwiększa ciśnienie wewnątrzodbytnicze. Wewnętrzny zwieracz odbytu reaguje na ucisk rozluźniając się, umożliwiając w ten sposób wejście kału do kanału. Odbytnica skraca się, gdy kał jest wpychany do kanału odbytu, a fale perystaltyczne wypychają kał z odbytnicy. Rozluźnienie wewnętrznych i zewnętrznych zwieraczy odbytu umożliwia wyjście kału z odbytu, w końcu, gdy mięśnie dźwigacza odbytu wciągają odbyt w górę nad wychodzącym kałem.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// --------------------------Oddechowy----------------------------

function oddechowy(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="oddechowy" src="pictures/oddechowy.jpg">
        <div class="pluco" id="pluco"></div>
        <div class="jama" id="jama"></div>
        <div class="gardlo" id="gardlo"></div>
        <div class="krtan" id="krtan"></div>
        <div class="tchawica" id="tchawica"></div>
        <div class="oskrzela" id="oskrzela"></div>
        <div class="pecherzyki" id="pecherzyki"></div>
    `;
    // body.appendChild(main);
    document.getElementById('pluco').addEventListener('click', showDetailsPluco);
    document.getElementById('jama').addEventListener('click', showDetailsJama);
    document.getElementById('gardlo').addEventListener('click', showDetailsGardlo);
    document.getElementById('krtan').addEventListener('click', showDetailsKrtan);
    document.getElementById('tchawica').addEventListener('click', showDetailsTchawica);
    document.getElementById('oskrzela').addEventListener('click', showDetailsOskrzela);
    document.getElementById('pecherzyki').addEventListener('click', showDetailsPecherzyki);
}

function showDetailsPluco(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Płuca</h3>
            <p>Płuca (pulmones) jako parzysty narząd należący do układu oddechowego jest odpowiedzialny za jeden z ważniejszych procesów człowieka - oddychanie. Płuca stanowią swoisty filtr, który powstrzymuje przed wtargnięciem do naszego organizmu wszelkie zanieczyszczenia i inne niepożądane substancje. Zajmują większość część klatki piersiowej. Z zewnątrz otoczone są ścianą klatki piersiowej, tworzoną przez żebra i mięśnie międzyżebrowe. Płuca są oddzielone od siebie śródpiersiem, które zawiera serce i inne narządy. Poniżej płuc znajduje się przepona. Płuca zbudowane są z gąbczastej, elastycznej tkanki. Składają się z pęcherzyków wypełniających się powietrzem, dlatego podczas wdechu powiększają się a wraz z wydechem zmniejszają się. Na ich wielkość ma również wpływ płeć, budowa ciała czy wytrenowanie. Waga płuc to przeciętnie nieco ponad kilogram.
            W płucu można wyróżnić: 
            szczyt (apex pulmonis),  powierzchnię żebrową płuca (facies costalis), powierzchnię przyśrodkową, Śródpiersiową (facies medialis) wklęsłą podstawę, czyli powierzchnię przeponową (facies diaphragmatica – basis pulmonis).
            Na powierzchni przyśrodkowej do przodu od wnęki i więzadła płucnego znajduje się głęboka wklęsłość tzw. wycisk sercowy (impressio cardiaca). Leży w nim serce objęte osierdziem. Wycisk ten jest znacznie głębszy i większy na płucu lewym niż na prawym, ponieważ serce większą częścią leży po stronie lewej. Szczyt płuca jest zaokrąglony i wystaje nieco nad przednim brzegiem otworu górnego klatki piersiowej. Wypełnia tam, położony w dole nadobojczykowym większym u podstawy szyi, osklepek opłucnej (cupula pleurae). Na powierzchni śródpiersiowej leży wnęka płuca (hilum pulmonis), gdzie zlokalizowane są min. liczne węzły chłonne (nodi lymphatici), oskrzela (bronchus), naczynia krwionośne płucne i oskrzelowe(arteria pulmonalis, vena pulmonalis superior et vena pulmonalis inferior), które stanowią tak zwany korzeń płuca (radix pulmonis). Korzeń płuca jest od góry objęty opłucną, której przednia i tylna blaszka przedłużają się ku dołowi, tworząc więzadło płucne (ligamentum pulmonale).
            Oba płuca różnią się nieco od siebie. Płuco lewe (pulmo sinister) podzielone jest szczeliną skośną (fissura obliqua) na dwa płaty: górny i dolny (lobus superior et lobus inferior).
            Płuco prawe (pulmo dexter) jest nieco większe od lewego i ma dwie szczeliny: poziomą (fissura horizontalis) oraz skośną (fissura obliqua). Szczeliny te dzielą płuco na trzy płaty górny (lobus superior), środkowy (lobus medius) i dolny (lobus inferior). Płuca są oddzielone od ścian klatki piersiowej dwiema blaszkami opłucnej: opłucną ścienną i opłucną płucną, czyli trzewną. Między blaszkami opłucnej znajduje się włosowata szczelina - jama opłucnej.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJama(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jama nosowa</h3>
            <p>Jama nosowa (cavum nasi) dzieli się na trzy ważne obszary. W przedsionku nosa znajdują się grube włosy, których głównym zadaniem jest wyłapywanie zanieczyszczeń z wdychanego powietrza Następna w kolei część oddechowa oczyszcza, ogrzewa i nawilża wdychane powietrze. Położona wewnątrz część węchowa wysłana jest natomiast nabłonkiem węchowym, w którym znajdują się zakończenia nerwu węchowego (receptory węchowe). Choć nabłonek ten pozwala nam na rozróżnienie kilku tysięcy różnych zapachów. Informacje o nich przechodzą następnie do opuszki węchowej (tworu będącego przednią częścią węchomózgowia), która wstępnie rozpoznaje docierający do nas zapach, a później drogą węchową do kory węchomózgowia. Jamę nosową dzieli na dwie części przegroda nosowa, zbudowana z chrząstki i kości.</p>
    `;

    Details.appendChild(details);

    DetailsContainer.classList.remove('hidden');
}

function showDetailsGardlo(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Gardło</h3>
            <p>Gardło (pharynx) to występujący za jamą ustną i nosową odcinek przewodu pokarmowego, który ma kształt lejkowatej i spłaszczonej cewy. Ma długość od 12-14 cm i ciągnie się od podstawy czaszki do 6 kręgu szyjnego, gdzie przechodzi w przełyk.
            Wyściółkę gardła stanowi błona śluzowa pokryta nabłonkiem płaskim wielowarstwowym (w części ustnej i krtaniowej). Błonę mięśniową gardła tworzą mięśnie poprzecznie prążkowane, w których możemy wyróżnić warstwę okrężną i podłużną. Pierwszą stanowią zwieracze gardła (górny, środkowy i dolny), a drugą dźwigacze (mięsień rylcowo-gardłowy i mięsień trąbkowo-gardłowy). Od zewnątrz mięśnie gardła pokryte są mocną łącznotkankową blaszką – błoną włóknistą gardła, która przyczepiona jest do podstawy czaszki.
            W gardle wyróżnić możemy trzy części:
            1. Część nosową, czyli przestrzeń, która czynnościowo należy do układu oddechowego, a do jamy nosowej otwiera się nozdrzami tylnymi. Na ścianie bocznej tej części znajduje się migdałek gardłowy oraz ujście gardłowe trąbki słuchowej
            2. Część ustną, która jest wspólną częścią układu pokarmowego i oddechowego. Z jamą ustną ta część łączy się przez cieśń gardzieli.
            3. Część krtaniową należącą w przeważającej części do układu pokarmowego, w której znajduje się wejście do krtani.
            Ponieważ w przestrzeni gardłowej krzyżuje się droga oddechowa z drogą pokarmową,  ten wspólny dla dwóch układów przewód spełnia podwójną funkcję. Naprzemiennie transportuje pokarm (z jamy ustnej do przełyku) i powietrze (z jamy nosowej do krtani).
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKrtan(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Krtań</h3>
            <p>Gardło z tchawicą łączy krtań (larynx), która bywa czasem zaliczana do dolnych dróg oddechowych. Ma ok. 4-6 cm długości i zbudowana jest ze szkieletu chrzęstnego (na który składa się dziewięć chrząstek) oraz więzadeł i mięśni, które regulują jej położenie oraz uczestniczą w procesie tworzenia dźwięku. Jedna z budujących ją chrząstek - tzw. chrząstka tarczowata - uwydatnia się u mężczyzn w okresie dojrzewania, tworząc jabłko Adama. Inna z chrząstek - nagłośnia - zamyka wejście do krtani, np. podczas połykania pokarmu. Krtań jest również głównym narządem, służącym do wydawania dźwięków. W jej wnętrzu znajduje się przestrzeń zwaną głośnią, którą tworzą dwie fałdy głosowe (potocznie nazywane strunami głosowymi) oraz szczelina pomiędzy nimi, nazywaną szparą głośni.

            Fałdy głosowe zbudowane są z mięśni, więzadeł głosowych, tkanki łącznej, naczyń krwionośnych, nerwów i pokrywającej je błony śluzowej. Gdy milczymy, są rozsunięte na boki, umożliwiając swobodny przepływ powietrza. Gdy mówimy, na przemian bardzo szybko zwierają się i rozwierają, powodując drganie przechodzącego przez nie powietrza. W efekcie powstaje dźwięk, czyli nasz głos. 
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsTchawica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Tchawica</h3>
            <p>Przedłużeniem krtani jest tchawica (trachea), która ma kształt rury o długości ok. 12 cm. Wzmocniona jest 15-20 chrząstkami, o kształcie zbliżonym do podkowy (lub niepełnego pierścienia), dzięki którym się nie zapada. W tchawicy powietrze, które przechodzi do oskrzeli i płuc jest dodatkowo oczyszczane. Tak, jak w większej części układu oddechowego, tutaj również znajdują się liczne komórki kubkowe, które wydzielają śluz, wyłapujący zanieczyszczenia oraz komórki migawkowe, wyposażone w rzęski, które przesuwają śluz (wraz z zanieczyszczeniami) w stronę gardła, gdzie zostaje on odkrztuszony lub połknięty. W błonie śluzowej tchawicy mieszczą się również naczynia włosowate, ogrzewające wdychane powietrze oraz limfocyty i komórki plazmatyczne, produkujące immunoglobuliny IgA, które chronią nas przed infekcjami.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOskrzela(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Oskrzela</h3>
            <p>Tchawica rozdziela się na dwa oskrzela główne (bronchi principales), które rozgałęziają się, tworząc drzewo oskrzelowe, wchodzące częściowo w obręb płuc. Oskrzela zbudowane są podobnie do tchawicy, a więc z zewnątrz zabezpiecza je struktura zbudowana z tkanki chrzęstnej, wewnątrz zaś wyścieła nabłonek charakterystyczny dla dróg oddechowych, który pomaga usunąć ewentualne zanieczyszczenia, zanim dostaną się one do płuc. Otoczone są również warstwą mięśni gładkich, zwanych błoną Reisessena. Pod wpływem niektórych czynników (np. substancji drażniących) mięśnie te mogą kurczyć się, co jest jednym z czynników, prowadzących do astmy oskrzelowej.
            Po wejściu do płuc oskrzela główne rozgałęziają się na oskrzela płatowe. Oskrzele główne prawe dzieli się na trzy oskrzela płatowe, wchodzące do płuca prawego, natomiast oskrzele główne lewe na dwa oskrzela płatowe, wchodzące do płuca lewego. Każde z oskrzeli płatowych dzieli się następnie na oskrzela segmentowe i oskrzela międzypłacikowe, a dalej na oskrzeliki.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPecherzyki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pęcherzyki płucne</h3>
            <p>Pęcherzyki płucne (alveoli pulmonis)  to podstawowa jednostka, tworząca płuca. Szacuje się, że każdy człowiek ma ich około 300 milionów, a ich łączna powierzchnia może się równać powierzchni dużego mieszkania - ma około 90 m2. To one właśnie odpowiadają za wymianę tlenu i dwutlenku węgla pomiędzy powietrzem, a krwią. Mają kulisty kształt i oddzielone są od siebie przegrodami międzypęcherzykowymi, które stanowią jednocześnie ściany poszczególnych pęcherzyków. W ścianach tych występują przestrzenie - pory międzypęcherzykowe (tzw. pory Kohna), które łączą sąsiadujące ze sobą pęcherzyki.
            W środku każdego pęcherzyka znajduje się pusta przestrzeń, którą wyścieła cienki nabłonek, zbudowany z trzech rodzajów komórek. Pneumocyty typu I odpowiedzialne są za szybki transport gazów pomiędzy wnętrzem pęcherzyka a pokrywającymi go z zewnątrz naczyniami włosowatymi. Pneumocyty typu II wytwarzają tzw. surfaktant płucny, który stabilizuje strukturę pęcherzyków. W trakcie wydechu zabezpiecza je przed zapadaniem się, natomiast podczas wdechu umożliwia ich rozszerzanie. Najrzadziej występujące pneumocyty typu III pełnią zaś funkcję chemoreceptorów - czyli receptorów, rozróżniających substancje chemiczne, takie jak np. tlen. Zarówno na powierzchni nabłonka, jak i w przegrodach znajdują się również makrofagi płucne - „ochroniarze”, którzy zajmują się wyłapywaniem zanieczyszczeń i ich wyprowadzaniem z płuc, w górę układu oddechowego.
            Wymiana gazowa pomiędzy wnętrzem pęcherzyka a krwią zachodzi w miejscach, gdzie do ściany pęcherzyka ściśle przylega ściana naczynia włosowatego. Miejsca te noszą nazwę bariery krew-powietrze. Poprzez nią, z wnętrza pęcherzyków do naczyń włosowatych przedostaje się tlen, wiązany przez czerwony barwnik krwi - hemoglobinę (która następnie dostarcza go do każdej komórki ciała). Odwrotnie zaś przesyłany jest dwutlenek węgla. W rezultacie z płuc odpływa krew obfitująca w tlen i pozbawiona dwutlenku węgla, dopływa do nich natomiast krew uboga w tlen i przesycona dwutlenkiem węgla.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}
// -------------------------------Kostny----------------------------
function kostny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="kostny" src="pictures/kostny.png">
        <div class="mostek" id="mostek"></div>
        <div class="zebra" id="zebra"></div>
        <div class="ramienna" id="ramienna"></div>
        <div class="przedramienia" id="przedramienia"></div>
        <div class="reki" id="reki"></div>
        <div class="stopy" id="stopy"></div>
        <div class="czaszka" id="czaszka"></div>
        <div class="obojczyk" id="obojczyk"></div>
        <div class="lopatka" id="lopatka"></div>
        <div class="kregoslup" id="kregoslup"></div>
        <div class="miednicza" id="miednicza"></div>
        <div class="krzyzowa" id="krzyzowa"></div>
        <div class="udowa" id="udowa"></div>
        <div class="rzepka" id="rzepka"></div>
        <div class="podudzia" id="podudzia"></div>
    `;
    document.getElementById('mostek').addEventListener('click', showDetailsMostek);
    document.getElementById('zebra').addEventListener('click', showDetailsZebra);
    document.getElementById('ramienna').addEventListener('click', showDetailsRamienna);
    document.getElementById('przedramienia').addEventListener('click', showDetailsPrzedramienia);
    document.getElementById('reki').addEventListener('click', showDetailsReki);
    document.getElementById('stopy').addEventListener('click', showDetailsStopy);
    document.getElementById('czaszka').addEventListener('click', showDetailsCzaszka);
    document.getElementById('obojczyk').addEventListener('click', showDetailsObojczyk);
    document.getElementById('lopatka').addEventListener('click', showDetailsLopatka);
    document.getElementById('kregoslup').addEventListener('click', showDetailsKregoslup);
    document.getElementById('miednicza').addEventListener('click', showDetailsMiednicza);
    document.getElementById('krzyzowa').addEventListener('click', showDetailsKrzyzowa);
    document.getElementById('udowa').addEventListener('click', showDetailsUdowa);
    document.getElementById('rzepka').addEventListener('click', showDetailsRzepka);
    document.getElementById('podudzia').addEventListener('click', showDetailsPodudzia);
}

function showDetailsMostek(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Mostek</h3>
            <p>Mostek (sternum) należy do nieparzystych kości ustroju. Ma on kształt płaskiej kości ograniczającej od przodu klatkę piersiową. Rozróżniamy rozszerzoną część górną rękojesć mostka, wydłużoną część środkową - trzon mostka i małą zwężającą się część dolną, zwaną wyrostkiem mieczykowatym. Rękojesść łączy się z trzonem pod kątem rozwartym od tyłu, nazwanym kątem mostka. Na górnej krawędzi rękojeści znajduje się wcięcie szyjne. Po obu jego stronach leżą wcięcia obojczykowe łączące się z obojczykami. Na bocznych krawędziach rękojeści mostka leżą wcięcia żebrowe żeber I i II. Na krawędziach trzonu mostka znajdują się wcięcia dla żeber od IlI do VI. Wcięcie dla żebra VII znajduje się na granicy między trzonem a wyrostkiem mieczykowatym.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZebra(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żebra</h3>
            <p>Żebra (costae) mają postać wygiętych półksiężycowato blaszek kostnych. Każde z nich ma koniec przedni, czyli mostkowy, trzon i koniec tylny - kręgosłupowy. Koniec przedni kości żebrowej łączy się z chrzęstnym przedłużeniem żebra, zwanym chrząstką żebrową. Zgrubiały koniec tylny żebra nosi nazwę głowy żebra. Nieco bocznie od niej leży guzek żebra. Głowa żebra łączy się z dołkami żebrowymi leżącymi na krawędziach trzonów kregowych. Guzek żebra jest miejscem połączenia stawowego z dołkiem żebrowym wyrostka poprzecznego. Trzon żebra ma wypukłą powierzchnię zewnętrzną i wklęsłą wewnętrzną. Przy dolnym, ostrym brzegu żebra znajduje się płytka bruzda żebra, w której biegną naczynia i nerwy międzyżebrowe.
            W zależności od sposobu połączenia żeber z mostkiem dzielą się one na: 1) żebra prawdziwe (-VII), dochodzące bezpośrednio do mostka i łączące się z nim chrząstką żebrową; 2) żebra rzekome (VIII-X), łączące się z mostkiem pośrednio poprzez chrząstkę żebra położonego wyżej; 3) żebra wolne (XI i XII), nie mające połączenia z mostkiem, leżące swobodnie w ścianie brzucha.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsRamienna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Ramienna</h3>
            <p>Kość ramienna (humerus) należy do kości długich. Wyróżnia się w niej koniec górny, trzon i koniec dolny. Na końcu górnym znajduje się głowa kości ramiennej. Głowę ogranicza szyjka anatomiczna kości ramiennej. Bocznie od szyjki leżą dwa guzki oddzielone od siebie bruzdą międzyguzkową. Ku tyłowi od niej leży guzek większy, ku przodowi - guzek mniejszy. Od guzków w kierunku trzonu ciągną się grzebienie guzków większego i mniejszego. Nieco poniżej guzków znajduje się tzw. szyjka chirurgiczna kości ramiennej, nazwana tak, ponieważ jest to miejsce częstych złamań. Trzon kości ramiennej, o przekroju zbliżonym do kolistego, na tylnej powierzchni ma skośnie przebiegającą płytką bruzdę nerwu promieniowego. Nierówność na bocznej powierzchni trzonu jest miejscem przyczepu mięśnia naramiennego i nosi nazwę guzowatości naramiennej. Koniec dalszy kości ramiennej jest spłaszczony w płaszczyźnie czołowej i ma dość złożoną budowę. Po obu stronach końca znajdują się wyniosłości, zwane nadkłykciami, z których przyśrodkowy jest znacznie dłuższy od bocznego. Pod nadkłykciem leży bruzda nerwu łokciowego. Między nadkłykciami i nieco poniżej nich leży kłykieć kości ramiennej, na którym znajdują się powierzchnie stawowe dla połączenia z kośćmi przedramienia. Powierzchnia boczna służąca do połączenia się z kością promieniową leży na wyniostości zwanej główką kości ramiennej. Przyśrodkowo leży bloczek łączący się z kością łokciową. Powyżej bloczka na tylnej powierzchni kości ramiennej leży głęboki dół wyrostka łokciowego, w który wsuwa się wyrostek łokciowy kości łokciowej podczas prostowania przedramienia.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzedramienia(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kości Przedramienia</h3>
            <p>Kości przedramienia (ossa antebrachii) to dwie długie, smukłe kości położone prawie równolegle do siebie. Należą do grupy kości kończyny górnej. Kości przedramiania dzielą się na kość promieniową oraz kość łokciową. Kość promieniowa znajduje się po stronie kciuka, natomiast kość łokciowa po stronie małego palca. Są one połączone zarówno swymi końcami bliższymi jak i dalszymi w sposób zapewniający znaczną ruchomość dzięki czemu można z łatwością odwracać i nawracać rękę.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsReki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kości Ręki</h3>
            <p>Kości ręki (ossa manus) dzielą się na kości nadgarstka, śródręcza i kości palców. Osiem kości nadgarstka układa się w dwa szeregi: bliższy - sąsiadujący z kośćmi przedramienia, i dalszy - łączący się z kośćmi śródręcza.
            Z kością promieniową łączą się trzy pierwsze kości szeregu bliższego. Łącznie tworzą one jajowatego kształtu powierzchnię stawową wchodzącą w skład stawu promieniowo-nadgarstkowego. Dolne powierzchnie szeregu bliższego łączą się z kośćmi szeregu dalszego. Centralną kością nadgarstka jest kość główkowata. Dolne powierzchnie dalszego szeregu kości nadgarstka łączą się z podstawami kości śródręcza. Dłoniowa powierzchnia nadgarstka jako całość jest wklęsła i tworzy bruzdę nadgarstka, w której leżą ścięgna mięśni zginaczy palców ręki. Do kości śródręcza należy pięć kości długich, które oznacza się kolejno, poczynając od kciuka. Kość śródręcza składa się z trzonu i dwóch końców. Koniec bliższy utworzony jest przez podstawę. Podstawa łączy się z kośćmi nadgarstka.
            Na końcu dalszym znajduje się głowa kości śródręcza, która łączy się z podstawą bliższego paliczka odpowiedniego palca. Kości palców ręki tworzą paliczki (phalanges). Palec I - kciuk ,ma dwa paliczki, pozostałe palce mają ich po trzy. Paliczek sąsiadujący z kością śródręcza nazywa się bliższym, drugi -  środkowym, a trzeci - dalszym. Paliczki bliższe i środkowe mają podstawę, trzon i głowę. Paliczek dalszy jest spłaszczony i na jego końcu dalszym znajduje się półksiężycowatego kształtu guzowatość paliczka dalszego. Po stronie dłoniowej stawu śródręczno-paliczkowego I palca leżą dwie małe kosteczki, zwane trzeszczkami.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsStopy(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kości Stopy</h3>
            <p>Kości stopy (ossa pedis) dzielą się na: kości stępu, kości śródstopia i kości palców. Do kości stępu zalicza się kość skokową, kość piętową, kość łódkowatą, trzy kości klinowate i kość sześcienną. 
            Kość skokowa (talus) leży pomiędzy kośćmi goleni, kością piętową i kością łódkowatą. Najwyżej położoną częścią kości skokowej jest bloczek pokryty powierzchniami stawowymi: górną, kostkową - przyśrodkową i boczną. Służą one do połączenia z kośćmi goleni. Ku przodowii przyśrodkowo skierowana jest głowa kości skokowej, na której znajduje się powierzchnia stawowa, służąca do połączenia z kością łódkowatą. Na dolnej powierzchni kości skokowej znajdują się powierzchnie stawowe piętowe do połączenia z kością piętową.
            Kość piętowa (calcaneus) jest największą kością stępu. Leży ona pod kością skokową. Najsilniej rozwinięta, skierowana ku tyłowi, część kości piętowej nosi nazwę guza piętowego. Przednia część kości piętowej jest obniżona. Na jej górnej powierzchni leżą powierzchnie stawowe skokowe. Przedni, płasko ścięty, koniec kości piętowej pokrywa powierzchnia stawowa sześcienna, służąca do połączenia z kością o tej samej nazwie.
            Kość łódkowata (os naviculare) ma kształt miseczki. Jej wklęsła powierzchnia przylega do głowy kości skokowej. Na krawędzi przyśrodkowej kości łódkowatej znajduje się wyczuwalne przez skórę zgrubienie, zwane guzowatością kości łódkowatej. Na stronie wypukłej ,,miseczki" znajdują się powierzchnie stawowe, służące do połączenia z kośćmi klinowatymi.
            Kości klinowate (ossa cuneiformnia) leżą między kością łódkowatą, a kośćmi śródstopia. Mają one kształt klinów, ostrzami zwróconych w stronę podeszwową. Odróżnia się kość klinowatą przyśrodkową, pośrednią i boczną.
            Kość sześcienna (os cuboideum), większa od kości klinowatych, leży między kością piętową od tyłu, IV i V kością śródstopia od przodu a kością klinowatą boczną od strony przyśrodkowej.
            Kości śródstopia (ossa metatarsalia) w liczbie pięciu należą do kości długich. W każdej z nich wyróżnia się podstawę, trzon i glowę. Kość śródstopia I jest najgrubsza. Na podeszwowej stronie głowy leżą dwie małe oddzielne kostki, zwane trzeszczkami. Podstawa V kości śródstopia jest wydłużona w kierunku bocznym, tworząc guzowatość V kości śródstopia.
            Kości palców stopy (ossa digitorum pedis) składają się z paliczków. Paluch ma dwa paliczki, pozostałe palce składają się z trzech paliczków.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsCzaszka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Czaszka</h3>
            <p>Czaszka (cranium) tworzy kostną puszkę ochraniającą mózgowie, narząd wzroku i słuchu, a także tworząca przestrzenie dla początkowych odcinków oddechowego i pokarmowego.
            Czaszka zbudowana jest z kości połączonych ze sobą za pomocą połączeń ścisłych, głównie więzozrostów w postaci szwów oraz połączeń wolnych, czyli stawów, które łączą ruchomo czaszkę z żuchwą. W kościach czaszki znajdują się liczne otwory, przez które biegną naczynia i nerwy. Przez największy z nich, zwany otworem wielkim opuszcza czaszkę rdzeń kręgowy.
            W budowie czaszki człowieka wyróżnia się:
            Część mózgową (mózgoczaszka), którą tworzą: kość potyliczna, klinowa, czołowa, sitowa oraz kości ciemieniowe i skroniowe
            Część twarzową (twarzoczaszka) składającą się z kości nosowych, łzowych, małżowiny nosowej dolnej, lemiesza, szczęki i żuchwy, kości jarzmowych, podniebiennych, a także z kości gnykowej.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsObojczyk(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Obojczyk</h3>
            <p>Obojczyk (clavicula) stanowi jedyne bezpośrednie połączenie między końcem kończyny górnej a szkieletem klatki piersiowej. Obojczyk łączy wyrostek barkowy łopatki z wcięciem obojczykowym mostka. Ma on kształt wydłużonej litery S. Koniec barkowy obojczyka jest spłaszczony od góry ku dołowi, a koniec mostkowy zgrubiały. Górna i przednia powierzchnia obojczyka jest gładka. Na powierzchmi dolnej znajdują się nierówności, do których przymocowują się więzadia. Obojczyk jest dobrze widoczny i wyczuwalny przez skórę.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsLopatka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Łopatka</h3>
            <p>Łopatka (scapula) należy do kości płaskich. Ma ona kształt trójkąta. Dwa jego dłuższe boki tworzą zaokrąglony brzeg boczny i ostry brzeg przyśrodkowy. Na krótszym brzegu górnym znajduje się wcięcie łopatki. Bocznie od niego leży skierowany ku przodowi wyrostek kruczy. Brzegi łopatki, łącząc się ze sobą, tworzą kąty: dolny, górny i boczny. Kąt boczny jest zgrubiały. Na nim znajduje się nieco wklęsła powierzchnia dla stawu ramiennego, zwana wydrążeniem stawowym. Łopatka ma dwie powierzchnie: przednia powierzchnia żebrowa, wklęsła, zwrócona jest ku żebrom, powierzchnia grzbietowa łopatki przedzielona jest wystającym grzebieniem łopatki. Ponad nim leży dół nadgrzebieniowy, poniżej dół podgrzebieniowy. W przedłużeniu grzebienia łopatki znajduje się silnie rozwinięty wyrostek barkowy. Na wyrostku tym leży powierzchnia stawowa dla połączenia z barkowym końcem obojczyka.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKregoslup(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kręgosłup</h3>
            <p>Kręgosłup (columna vertebralis) składa się z kości, zwanych kręgami (vertebrae). Kręgi łącząc się ze sobą tworzą elastyczny słup będący osią tułowia. Górny koniec kregosłupa podpiera czaszkę, dolny łączy się z kośćmi miednicy. Wewnątrz kręgosłupa leży rdzeń kręgowy. Kręgosłup składa się z 33-34 kręgów i dzieli się na pięć odcinków. Typowy kręg składa się z trzonu, łuku oraz siedmiu wyrostków. Masywnie zbudowany trzon kręgu zwrócony jest ku przodowi. Do jego tylnej powierzchni przylega huk, który zamyka od tyłu otwór kręgowy, będący odcinkiem kanału kręgowego. Z łukiem łączą się dwie pary wyrostków stawowych służących do połączenia z sąsiednimi kręgami i stąd znajdują się na nich powierzchnie stawowe. Symetrycznie położone wyrostki poprzeczne służą między innymi jako miejsce przyczepu mięśni. Wyrostek kolczysty przymocowuje się na tylnej części łuku i tworzy mocną dźwignię dla mięśni. Kształt kręgów zmienia się w zależności od odcinka kręgosłupa, z którego pochodzą. Kręgi szyjne mają mały i spłaszczony w kierunku strzałkowym trzon. Wyrostki stawowe są niskie, ich powierzchnie stawowe ustawione skośnie w stosunku do płaszczyzny poziomej. Wyrostki poprzeczne, rozdwojone na końcach, przebite są pionowo otworem wyrostka poprzecznego, przez który przechodzi tętnica kręgowa. Otwór kręgowy ma kształt trójkątny.
            Pierwszy kręg szyjny nosi nazwę kręgu szczytowego (atlas). Nie ma on trzonu, lecz składa się z dwóch łuków: przedniego i tylnego. Miejsca ich połączenia są zgrubiałe i noszą nazwę części bocznych. Na tylnej powierzchni łuku przedniego leży dołek zębowy służący do połączenia z zębem kręgu obrotowego. Na częściach bocznych leżą dołki stawowe górne do połączenia z kłykciami kości potylicznej i dolne, przylegające do odpowiednich powierzchni stawowych kręgu obrotowego.
            Kręg obrotowy (axis) jest drugim kręgiem szyjnym. Wydłużony ku górze trzon tworzy ząb kręgu obrotowego. Przednia powierzchnia stawowa zęba przylega do doika zębowego kręgu szczytowego, powierzchnia tylna - do więzadła poprzecznego.
            Ostatni siódmy kręg szyjny ma długi wyrostek kolczysty i stąd został nazwany kręgiem wystającym (vertebra prominens).
            Kręgi piersiowe są większe od kręgów szyjnych. Trzony kręgowe są płaskie, ich wymiar strzałkowy jest większy od poprzecznego. Wyrostki stawowe są długie, ich powierzchnie stawowe ustawione w płaszczyźnie zbliżonej do czołowej. Długie i pochylone ku dołowi wyrostki kolczyste zachodzą na siebie dachówkowato.
            Kręgi lędźwiowe, największe, mają trzony nerkowatego kształtu. Ich wymiar poprzeczny jest większy od strzałkowego. Duże wyrostki stawowe ustawione są strzałkowo. Wyrostki poprzeczne cienkie i długie są właściwie szczątkowymi żebrami, stąd też noszą one nazwę wyrostków żebrowych. Wyrostki kolczyste kręgów lędźwiowych są wysokie, silnie rozwinięte i ustawione poziomo w płaszczyźnie strzałkowej.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMiednicza(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Miednicza</h3>
            <p>Kość miedniczna (os coxae) rozwija się z trzech oddzielnych kości, które w wieku dziecięcym oddziela warstwa chrząstki. Największa z nich, skierowana ku górze i ku bokowi, nazywa się kością biodrową (os ilium). Od strony dolnej i tylnej leży kość kulszowa (os ischii), od przodu i dołu- kość łonowa (os pubis). Wymienione kości łączą się w obrębie dużej i głębokiej panewki stawu biodrowego, służącej do połaczenia z głową kości udowej. W dolnej części brzegu panewki widnieje wcięcie panewki. Poniżej panewki leży otwór zasłoniony. Jego nazwa pochodzi od błony zasłonowej przymocowującej się do krawędzi otworu. Od tyłu i dołu otwór zasłoniony ograniczają trzon i gałąź kości kulszowej. W miejscu ich połączenia znajduje się guz kulszowy, a nieco powyżej niego kolec kulszowy. Kolec kulszowy oddziela wcięcie kulszowe mniejsze od leżącego powyżej głebokiego wcięcia kulszowego większego. Od przodu i dołu otwór zasłoniony ograniczają gałęzie kości łonowej górna i dolna. W miejscu połączenia obu gałęzi kości łonowej znajduje się powierzchnia spojenia służąca do połączenia się z taką samą powierzchnią drugiej kości miednicznej.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKrzyzowa(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Krzyżowa</h3>
            <p>Kość krzyżowa (os sacrum) powstała ze zrośnięcia się ze sobą pięciu kręgów krzyżowych. Ma kształt zwężającego się ku dołowi graniastosłupa. Wyróżniamy w niej podstawę zwróconą ku górze oraz wierzchołek, zwrócony ku dołowi. Od przodu znajduje się gładka powierzchnia miedniczna. Grzbietowa powietrznia kości krzyżowej jest nierówna. Na powierzchni miednicznej widoczne są cztery pary otworów krzyżowych miednicznych, które łaczą się z kanałem krzyżowym. Na nierównej powierzchni grzbietowej znajdują się grzebienie, powstające ze zrośnięcia się odpowiednich wyrostków kręgowych. Grzebień pośrodkowy powstał ze zrośniętych wyrostków kolczystych, Wyrostki stawowe utworzyły grzebienie krzyżowe pośrednie, a wyrostki poprzeczne -grzebienie boczne. Między grzebieniami pośrednimi bocznym leżą otwory krzyżowe grzbietowe. Wzdłuż kości krzyżowej biegnie kanał krzyżowy - przedłużenie kanału kręgowego. Kanał kończy się rozworem krzyżowym. Na masywnie zbudowanych częściach bocznych kości krzyżowej leżą powierzchnie uchowate, łączące się z podobnymi powierzchniami kości miednicznej.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsUdowa(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Udowa</h3>
            <p>Kość udowa (femu) jest największą kością ustroju. Składa się z końca bliższego, trzonu i końca dalszego. Na końcu bliższym znajduje się głowa kości udowej (caput femoris), o kształcie zbliżonym do kuli. Na jej szczycie leży dołek głowy kości udowej. Głowa łączy się z szyjką kości udowej. Na granicy szyjki i trzonu kości udowej od przodu leży kresa międzykrętarzowa, od tylu granicę tę stanowi grzebień międzykrętarzowy. Linia i grzebień łączą ze sobą dwie duże wyniosłości, zwane krętarzami. Krętarz większy leży w przedłużeniu trzonu, a jego szczyt znajduje się na wysokości środka głowy kości udowej. Krętarz mniejszy leży poniżej i nieco ku tyłowi od dolnej powierzchni szyjki kości udowej. Rurowaty trzon kości udowej jest nieco wygięty ku przodowi. Na jego tylnej powierzchni znajduje się kresa chropawa, będąca miejscem przyczepu mięśni. Koniec dalszy kości udowej ma dwa kłykcie służące do połączenia z kością piszczelową. Kłykieć przyśrodkowy jest większy. Kłykcie oddziela głęboki dół międzykłykciowy. Powierzchnie stawowe pokrywające kłykcie łączą się ze sobą od przodu tworząc powierzchnię rzepkową. Na powierzchni zewnętrznej każdego  kłykcia znajdują się wyniosłości, zwane odpowiednio nadkłykciami przyśrodkowym i bocznym. Kształt kości udowej zmienia się wraz ze wzrostem dziecka. Podstawowym zmianom ulegają k8at szyjkowo-trzonowy i kąt przodoskręcenia szyjki. Kąt szyjkowo-trzonowy zawarty jest pomiędzy osią szyjki kości udowej a osią trzonu. U niemowlęcia przekracza on zwykle 135°, u człowieka dorosłego wynosi 115-120°. Kąt przodoskręcenia szyjki powstaje w wyniku skrzyżowania sie nałożonych na siebie osi szyjki kości udowej i osi poprzecznej ciała leżącego w płaszczyźnie kłykci. Kąt przodoskręcenia szyjki u niemowląt przekracza zwykle 30°, u osób dorosłych wynosi ok. 12°. Prawidłowe wartości kątów mają bardzo ważne znaczenie w budowie i czynności stawu biodrowego.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsRzepka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Rzepka</h3>
            <p>Kość udowa (femu) jest największą kością ustroju. Składa się z końca bliższego, trzonu i końca dalszego. Na końcu bliższym znajduje się głowa kości udowej (caput femoris), o kształcie zbliżonym do kuli. Na jej szczycie leży dołek głowy kości udowej. Głowa łączy się z szyjką kości udowej. Na granicy szyjki i trzonu kości udowej od przodu leży kresa międzykrętarzowa, od tylu granicę tę stanowi grzebień międzykrętarzowy. Linia i grzebień łączą ze sobą dwie duże wyniosłości, zwane krętarzami. Krętarz większy leży w przedłużeniu trzonu, a jego szczyt znajduje się na wysokości środka głowy kości udowej. Krętarz mniejszy leży poniżej i nieco ku tyłowi od dolnej powierzchni szyjki kości udowej. Rurowaty trzon kości udowej jest nieco wygięty ku przodowi. Na jego tylnej powierzchni znajduje się kresa chropawa, będąca miejscem przyczepu mięśni. Koniec dalszy kości udowej ma dwa kłykcie służące do połączenia z kością piszczelową. Kłykieć przyśrodkowy jest większy. Kłykcie oddziela głęboki dół międzykłykciowy. Powierzchnie stawowe pokrywające kłykcie łączą się ze sobą od przodu tworząc powierzchnię rzepkową. Na powierzchni zewnętrznej każdego  kłykcia znajdują się wyniosłości, zwane odpowiednio nadkłykciami przyśrodkowym i bocznym. Kształt kości udowej zmienia się wraz ze wzrostem dziecka. Podstawowym zmianom ulegają k8at szyjkowo-trzonowy i kąt przodoskręcenia szyjki. Kąt szyjkowo-trzonowy zawarty jest pomiędzy osią szyjki kości udowej a osią trzonu. U niemowlęcia przekracza on zwykle 135°, u człowieka dorosłego wynosi 115-120°. Kąt przodoskręcenia szyjki powstaje w wyniku skrzyżowania sie nałożonych na siebie osi szyjki kości udowej i osi poprzecznej ciała leżącego w płaszczyźnie kłykci. Kąt przodoskręcenia szyjki u niemowląt przekracza zwykle 30°, u osób dorosłych wynosi ok. 12°. Prawidłowe wartości kątów mają bardzo ważne znaczenie w budowie i czynności stawu biodrowego.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPodudzia(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Kość Podudzia</h3>
            <p>Kości goleni, zwanej też podudziem (crus) to kości kończyny dolnej. Są zbudowane są z dwóch kości długich: piszczelowej, strzałkowej - połączonych między sobą bliższymi i dalszymi końcami. Budową przypominają one kości przedramienia, gdzie kość piszczelowa odpowiada kości promieniowej natomiast kość strzałkowa – kości łokciowej.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

//------------------------------Miesniowy----------------------------
function miesniowy(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="miesniowy" src="pictures/miesniowy_front.png">
        <div class="zwacz" id="zwacz"></div>
        <div class="ramie2" id="ramie2"></div>
        <div class="oko" id="oko"></div>
        <div class="usta" id="usta"></div>
        <div class="brzuch-skos" id="brzuch-skos"></div>
        <div class="brzuch-prosty" id="brzuch-prosty"></div>
        <div class="udo4" id="udo4"></div>

        <i class="fas fa-angle-right" id="right-arrow"></i>
    `;
    document.getElementById('zwacz').addEventListener('click', showDetailsZwacz);
    document.getElementById('ramie2').addEventListener('click', showDetailsRamie);
    document.getElementById('oko').addEventListener('click', showDetailsOko);
    document.getElementById('usta').addEventListener('click', showDetailsUsta);
    document.getElementById('brzuch-skos').addEventListener('click', showDetailsBrzuchSkos);
    document.getElementById('brzuch-prosty').addEventListener('click', showDetailsBrzuchProsty);
    document.getElementById('udo4').addEventListener('click', showDetailsUdo4);

    document.getElementById('right-arrow').addEventListener('click', back);
}

function back(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="miesniowy" src="pictures/miesniowy_back.png">
        <div class="kaptur" id="kaptur"></div>
        <div class="ramie3" id="ramie3"></div>
        <div class="zebro" id="zebro"></div>
        <div class="lydka" id="lydka"></div>
        <div class="naramie" id="naramie"></div>
        <div class="grzbiet" id="grzbiet"></div>
        <div class="poslad" id="poslad"></div>
        <div class="udo2" id="udo2"></div>

        <i class="fas fa-angle-left" id="left-arrow"></i>
    `;

    document.getElementById('kaptur').addEventListener('click', showDetailsKaptur);
    document.getElementById('ramie3').addEventListener('click', showDetailsRamie3);
    document.getElementById('zebro').addEventListener('click', showDetailsZebro);
    document.getElementById('lydka').addEventListener('click', showDetailsLydka);
    document.getElementById('naramie').addEventListener('click', showDetailsNaramie);
    document.getElementById('grzbiet').addEventListener('click', showDetailsGrzbiet);
    document.getElementById('poslad').addEventListener('click', showDetailsPoslad);
    document.getElementById('udo2').addEventListener('click', showDetailsUdo2);
    document.getElementById('left-arrow').addEventListener('click', miesniowy);
}

function showDetailsZwacz(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień żwacz</h3>
            <p>Mięsień żwacz (musculus masseter) – parzysty mięsień żucia, znajdujący się po obu stronach głowy. Mięsień można z łatwością wyczuć na sobie, układając palce na kątach żuchwy, a następnie zaciskając zęby.
            Anatomia - Posiada dwie warstwy – powierzchowną (z włóknami biegnącymi ukośnie) i głęboką (z włóknami biegnącymi pionowo). Przyczep początkowy warstwy powierzchownej to dolny brzeg kości jarzmowej, zaś warstwy głębokiej to głównie łuk jarzmowy, jednak część włókien przechodzi pod łukiem do dołu skroniowego oraz torebki stawowej i krążka stawowego SSŻ. Przyczep końcowy obu warstw to powierzchnia zewnętrzna kąta żuchwy, tzw. guzowatość żwaczowa; niektóre włókna biegną dookoła kąta żuchwy i łączą się z włóknami mięśnia skrzydłowego przyśrodkowego.
            Czynność - Skurcze żwacza unoszą żuchwę (przy otwartych ustach) i przyciskają do siebie zęby szczęki i żuchwy, umożliwiając tym samym gryzienie i przeżuwanie pokarmu. Część włókien współdziała ponadto przy wysuwaniu żuchwy (warstwa powierzchowna – włókna biegnące skośnie).
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsRamie(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień dwugłowy ramienia</h3>
            <p>Mięsień dwugłowy ramienia (łac. musculus biceps brachii) – podłużny, wrzecionowaty mięsień rozpięty między łopatką a kością promieniową, należący do grupy mięśni przednich ramienia.
            Budowa
            Zazwyczaj składa się z dwóch głów – głowy długiej (łac. caput longum) oraz głowy krótkiej (łac. caput breve). Głowy często są jednak "zduplikowane" i powszechne są przypadki osób z czterema, bądź nawet sześcioma głowami bicepsa (osoba z większą liczbą głów wolniej się męczy, lecz liczba ta nie wpływa na siłę mięśnia). Przyczep ścięgnisty głowy długiej znajduje się na obrąbku stawowym i guzku nadpanewkowym łopatki. Głowa krótka rozpoczyna się przyczepem ścięgnistym położonym na wyrostku kruczym łopatki. Ku dołowi obie głowy mięśnia dwugłowego ramienia łączą się we wspólny brzusiec. W części dystalnej, powyżej stawu łokciowego mięsień wytwarza dwa łącznotkankowe ścięgna: powierzchowne, płaskie – rozcięgno mięśnia dwugłowego ramienia (łac. aponeurosis musculi bicipitis brachii) przechodzące w powięź przedramienia oraz właściwe ścięgno (łac. tendo musculi bicipitis brachii) przyczepione do guzowatości kości promieniowej.
            Funkcja: Mięsień dwugłowy ramienia działa na dwa stawy: staw ramienny i staw łokciowy. W stawie ramiennym mięsień zgina ramię. Głowa długa odwodzi ramię i obraca do wewnątrz, a głowa krótka przywodzi ramię. W stawie łokciowym mięsień dwugłowy ramienia najsilniej zgina i odwraca przedramię.
            W pozycji supinacji widoczne są najlepiej wyniosłości kuliste przedniej części mięśni, zwane potocznie bicepsami. Podczas skurczu rozcięgno mięśnia dwugłowego napina powięź przedramienia, co zwiększa siłę skurczu mięśnia
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOko(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień okrężny oka</h3>
            <p>Mięsień okrężny oka (łac. musculus orbicularis oculi) – parzysty mięsień wyrazowy głowy człowieka, należący do grupy mięśni otoczenia szpary powiek, najsilniej rozwinięty mięsień z tej grupy. Składa się z trzech części: oczodołowej (łac. pars orbitalis), powiekowej (łac. pars palpebralis) i łzowej (łac. pars lacrimalis).
            Część powiekowa, otaczając wejście do oczodołu, zaczyna się i kończy na przyśrodkowej ścianie oczodołu. Od tej części odchodzą dwie cienkie warstwy włókien mięśni, które przebiegają łukowato w powiece górnej i dolnej, pokrywając od przodu tarczki powiekowe – jest to część powiekowa mięśnia. Poza woreczkiem łzowym jest pasmo włókien tzw. część łzowa, która ma wpływ na mechanizm odpływu łez. Skurcz części oczodołowej mięśnia okrężnego powoduje zaciskanie powiek, natomiast skurcz części powiekowej powoduje spokojne zamykanie powiek. Mięsień okrężny oka może łączyć się z mięśniem marszczącym brwi. Unerwiony jest przez gałązki skroniowe i jarzmowe nerwu twarzowego, a unaczyniony przez gałązki tętnicy twarzowej, tętnicy nadoczodołowej i tętnicy skroniowej powierzchownej.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsUsta(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień okrężny ust</h3>
            <p>Mięsień okrężny ust (łac. musculus orbicularis oris) – mięsień wyrazowy głowy człowieka, należący do grupy mięśni otoczenia szpary ust, tworzący podłoże warg, biegnący dookoła szpary ustnej. Jest to mięsień okrężny, jedyny zwieracz szpary ust i jednocześnie antagonista wszystkich pozostałych mięśni szpary ustnej. Obok każdego kąta ust jest węzeł mięśniowy kąta ust, od którego biegną łukowato włókna mięśni w obu wargach przeplatając się w linii środkowej z mięśniem strony przeciwnej. Do węzła mięśniowego kąta ust dochodzą często włókna innych mięśni szpary ustnej, przebiegając przeważnie promienisto. Mięsień okrężny ust unerwiony jest przez gałązki policzkowe nerwu twarzowego, a unaczyniony przez tętnicę wargową dolną i tętnicę wargową górną.</p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsBrzuchSkos(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięśnie skośne brzucha</h3>
            <p>Mięśnie skośne brzucha (mięsień skośny zewnętrzny i mięsień skośny wewnętrzny) są parzystymi strukturami znajdującymi się w przednio-bocznej części ściany brzucha. Położone są po obu stronach przednio-bocznej części ściany brzucha. W ciele człowieka wyróżniamy dwa parzyste mięśnie skośne brzucha: zewnętrzny i wewnętrzny. Nazwy dają nam informację o ich położeniu i kształcie. Włókna mięśniowe omawianych struktur biegną na skos; mięsień skośny zewnętrzny przykrywa mięsień skośny wewnętrzny.
            Mięsień skośny zewnętrzny brzucha
            Mięsień skośny zewnętrzny brzucha posiada początkowe przyczepy na powierzchni zewnętrznej żeber od V do XII (zarówno po stronie lewej, jak i prawej). Włókna mięśniowe biegną dalej w kierunku linii pośrodkowej oraz ku dołowi. Przyłączają się do kresy białej, więzadła pachwinowego oraz grzebienia biodrowego.
            Mięsień skośny wewnętrzny brzucha
            Mięsień skośny wewnętrzny brzucha znajduje się bezpośrednio pod mięśniem skośnym zewnętrznym.  
            -Włókna przednie wychodzą z bocznych 2/3 górnej powierzchni więzadła pachwinowego, przechodzą w dół i w kierunku linii pośrodkowej, a następnie łączą się z włóknami mięśnia poprzecznego brzucha (tworzą razem z nim wspólne ścięgno, które przyłącza się do powrózka nasiennego u mężczyzn i więzadła obłego macicy u kobiet),
            -włókna boczne rozpoczynają się w przedniej części grzebienia biodrowego, a następnie biegną ku górze i w kierunku linii pośrodkowej; budują rozcięgno, które współtworzy pochewkę mięśnia prostego i przyłącza się do kresy białej,
            -włókna tylne rozpoczynają swój bieg w tylnej części grzebienia biodrowego i powięzi piersiowo-lędźwiowej, a następnie biegną w górę i do boku; przyłączają się do brzegów dolnych żeber od XII do X lub IX.
            Funkcje mięśni skośnych brzucha
            Rola mięśnia skośnego zewnętrznego przy aktywacji jednostronnej polega przede wszystkim na rotacji tułowia do przeciwnej strony. Ponadto bierze on udział w zgięciu bocznym do tej samej strony. Jednoczesny skurcz mięśnia skośnego zewnętrznego po prawej i lewej stronie zachodzi w czasie zgięcia tułowia do przodu. Aktywacja dwustronna mięśni ma duże znaczenie w kontekście zwiększania napięcia ściany jamy brzusznej oraz ciśnienia w jamie brzusznej. Jest to potrzebne przy czynnościach życiowych, takich jak oddawanie moczu, defekacja czy aktywny wydech. Mięśnie aktywowane są także podczas porodu.
            Mięsień skośny wewnętrzny współpracuje z mięśniem skośnym zewnętrznym leżącym po przeciwnej stronie przy zgięciu bocznym. Ich wspólna praca pozwala m.in. na skręcenie prawego ramienia do lewego biodra (i odwrotnie). Obustronny skurcz mięśnia skośnego wewnętrznego, podobnie jak zewnętrznego, ma znaczenie przy zgięciu tułowia do przodu, a także przyczynia się do zwiększania napięcia ściany jamy brzusznej oraz ciśnienia w jamie brzusznej.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsBrzuchProsty(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięśnie proste brzucha</h3>
            <p>Mięsień prosty brzucha (łac. musculus rectus abdominis, tzw. sześciopak) – mięsień współdziałający 
            z mięśniami płaskimi brzucha, przeponą i mięśniami krocza w wytwarzaniu tłoczni brzusznej (prelum abdominale). Jego przyczepami początkowymi są chrząstki żeber V-VII, wyrostek mieczykowaty mostka oraz więzadło żebrowo-mieczykowe, zaś końcowymi – spojenie łonowe i grzebień łonowy kości miednicznej. Przedłuża się u mężczyzn w więzadło wieszadłowe prącia (ligamentum suspensorium penis) i w więzadło wieszadłowe łechtaczki (ligamentum suspensorium clitoridis)
             u kobiet. Objęty jest pochewką mięśnia prostego brzucha (vagina musculi recti abdominis). Posiada tzw. smugi ścięgniste (intersectiones tendineae). Unerwiony jest przez nerwy międzyżebrowe 
            (Th6-Th12) oraz często przez pierwszy nerw lędźwiowy (L1). Za unaczynienie odpowiadają tętnice nabrzuszne: dolna i górna.
            Funkcje mięśnia prostego: zgina tułów, obniża klatkę piersiową do miednicy (mięsień wydechowy),
            wzmacnia tłocznię brzuszną, obniża żebra, unosi miednicę.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsUdo4(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień czworogłowy uda</h3>
            <p>Mięsień czworogłowy uda jest obszerną strukturą położoną w przedniej części uda. Stanowi jeden z najsilniejszych mięśni całego organizmu człowieka. Jak wskazuje nazwa mięśnia, składa się on z czterech osobnych części (głów).
            Budowa mięśnia czworogłowego uda
            Odrębne mięśnie, które razem tworzą mięsień czworogłowy uda to: mięsień prosty uda, mięsień obszerny pośredni, mięsień obszerny przyśrodkowy, mięsień obszerny boczny.
            Każda z głów mięśnia czworogłowego uda rozpoczyna swój przebieg w innym miejscu, ale wszystkie zakończone są wspólnym ścięgnem – więzadłem rzepki.
            
            Do przyczepów mięśnia czworogłowego uda należą: kolec biodrowy przedni dolny, górna powierzchnia panewki miednicznej (mięsień prosty uda), powierzchnia przednia i boczna trzonu kości udowej (mięsień obszerny pośredni), warga przyśrodkowa kresy chropawej, ścięgna końcowe mięśnia przywodziciela długiego i wielkiego (mięsień obszerny przyśrodkowy), powierzchnia boczna krętarza większego, kresa międzykrętarzowa, warga boczna kresy chropawej kości udowej, przegroda międzymięśniowa boczna uda (mięsień obszerny boczny).
            Mięsień czworogłowy uda unaczyniony jest przez tętnicę udową i jej odgałęzienia. Unerwienie struktury pochodzi od nerwu udowego.
            Funkcje mięśnia czworogłowego uda: Mięsień czworogłowy uda pełni funkcję prostownika stawu kolanowego oraz pomaga w zgięciu biodra. Bierze również udział w stabilizowaniu rzepki oraz odpowiada za ochronę wielu struktur kończyny dolnej. Mięsień czworogłowy uda, ze względu na swoje położenie i rozmiar, pełni niebagatelną rolę w poruszaniu się. Problemy z tą strukturą w wielu przypadkach znacząco utrudniają codziennie funkcjonowanie, ponieważ mogą zaburzać ruchy związane ze zginaniem nogi w kolanie, w tym chodzenie (szczególnie po schodach), siadanie i wstawanie, skakanie, bieganie.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKaptur(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień kapturowy</h3>
            <p>Mięsień kapturowy (musculus trapezius) grzbietu to powierzchowny mięsień grzbietu, o płaskim, szerokim i trójkątnym kształcie. Zbudowany jest z dwóch części – lewej i prawej, z których każda ma trójkątny kształt. Leżąc razem obok siebie, mięśnie te mają kształt rombu i przypominają nieco mnisi kaptur – stąd określenie „kapturowy”. Mięśnie kapturowe rozciągają się od zewnętrznej wypukłości kości potylicznej aż do dolnych kręgów piersiowych; z kolei po bokach mięśnie te sięgają do łopatek.
            Przyczepy tego mięśnia obejmują wyrostki kolczyste C7 – T12 kręgosłupa, a także więzadła karku, obojczyków, łopatek oraz żeber. Mięsień czworoboczny pleców dzieli się na trzy części: część górną obejmującą kark, część środkową, zlokalizowaną w obrębie górnej części ramion i pleców, część dolną, która znajduje się w centralnej części pleców.
           Mięsień kapturowy pełni przede wszystkim funkcje posturalne, ułatwiając utrzymanie prawidłowej masy ciała. Podtrzymuje kręgosłup, gdy przyjmujemy pozycję stojącą. Ponadto mięsień czworogłowy grzbietu pozwala na wykonywanie wielu ruchów górnej partii ciała: zginania bocznego i tylnego głowy, obracania głowy, podnoszenia i obniżania barków, zbliżania łopatek do kręgosłupa, wewnętrznego obracania ramienia.
           </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsRamie3(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień trójgłowy ramienia</h3>
            <p>Mięsień trójgłowy ramienia (musculus triceps brachii) należy do grupy tylnej mięśni ramienia, ponieważ w dużej mierze tworzy tylną powierzchnię ramienia. Razem z mięśniem dwugłowym ramienia oraz mięśniem naramiennym współtworzy też charakterystyczny obrys ludzkiego ramienia.
            Mięsień trójgłowy ramienia rozpoczyna się dystalnie od trzech różnych przyczepów, by zakończyć się jednym przyczepem końcowym wspólnego ścięgna trzech wszystkich trzech głów, które przyczepia się na powierzchni tylnej wyrostka łokciowego kości łokciowej. Przyczepy początkowe znajdują się w następujących miejscach: głowa długa rozpoczyna się na guzku podpanewkowym łopatkim, głowa boczna rozpoczyna się na powierzchni tylnej kości ramiennej powyżej bruzdy n. promieniowego, a także na przegrodzie międzymięśniowej bocznej, głowa przyśrodkowa rozpoczyna się na powierzchni tylnej kości ramiennej od bruzdy n. promieniowego w dół aż do torebki stawu łokciowego, głowa długa przebiega częściowo pod mięśniem naramiennym. Głowa przyśrodkowa tworzy warstwę głęboką powierzchni tylnej ramienia i leży bezpośrednio na kości ramiennej. Dwie pozostałe głowy (boczna i długa) leżą powierzchownie – na głowie głębokiej.
            Podstawowa funkcja mięśnia trójgłowego ramienia to prostowanie stawu łokciowego. Razem z mięśniem łokciowym jest to główny i prawie wyłączny prostownik tego stawu.
            Wszystkie trzy głowy mogą pracować wspólnie, ale głowa długa może też kurczyć się oddzielnie. Obie krótkie głowy są bowiem jednostawowe, natomiast głowa długa przebiega nad dwoma stawami. W związku z tym jej działanie na staw ramienny może być nawet dwa razy silniejsze niż działanie na staw łokciowy.
            Głowa długa to najsilniejszy prostownik ramienia w stawie ramiennym i bardzo silny przywodziciel. Pod tym względem silniejszy od mięśnia obłego większego, a ustępuje tylko mięśniowi piersiowemu większemu.
            W stawie łokciowym dwie trzecie pracy prostowania wykonują głowy krótkie. Razem ze zginaczami mięsień trójgłowy ramienia silnie ustala staw łokciowy.
            W sytuacji, kiedy ramię jest opuszczone, pracę mięśnia zastępuje siła ciężkości. W związku z tym siła częściej działających przeciwko grawitacji zginaczy jest o ponad jedną trzecią większa niż siła mięśnia trójgłowego ramienia. To dlatego staw łokciowy w stanie spoczynku jest lekko ugięty.
            Mięsień trójgłowy ramienia działa na staw łokciowy wyłącznie jako prostownik i nie ma funkcji pobocznej, w przeciwieństwie do mięśnia dwugłowego ramienia, który oprócz zginania wykonuje także ruch odwracania. Dzięki temu, że przyczepia się do torebki stawowej stawu łokciowego, triceps spełnia także ważną funkcję w mechanice stawu. Pociąga bowiem tę torebkę i wygładza jej fałdy, który mogłyby się wpuklać w obręb stawu, gdyby była rozluźniona.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZebro(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięśnie międzyżebrowe</h3>
            <p>Mięśnie międzyżebrowe (łac. musculi intercostales) są płaskie, krótkie i cienkie. Leżą w przestrzeniach międzyżebrowych łącząc sąsiednie żebra.
            Mięśnie międzyżebrowe zewnętrzne pokryte są mięśniami przyczepiającymi się do żeber, czyli mięśniami: dźwigaczami żeber – od tyłu, piersiowymi – od boku i od przodu, zębatymi, najszerszym grzbietu, skośnym zewnętrznym brzucha, krzyżowo-grzbietowym.
            Do wewnątrz przestrzenie międzyżebrowe kierują się do opłucnej, od której są oddzielone powięzią wewnątrzpiersiową.
            Dodatkowo, zawartość przestrzeni międzyżebrowych prócz wyżej wymienionych mięśni stanowią naczynia i nerwy międzyżebrowe.
            Mięśnie międzyżebrowe – budowa: Zawierają sporo włókien ścięgnistych. Występują w dwóch zasadniczych warstwach, w związku z czym wyróżniamy mięśnie międzyżebrowe: zewnętrzne (łac. musculi intercostales externi), wewnętrzne (łac. musculi intercostales interni).
            Mięśnie międzyżebrowe zewnętrzne: Leżą w przestrzeniach międzyżebrowych począwszy od guzków żeber, aż do bocznych końców chrząstek żebrowych. Z tyłu łączą się z mięśniami dźwigaczami żeber. Natomiast z przodu, w przedłużeniu ich przednich końców, zamiast mięśni przebiegają ścięgniste i lśniące pasma łącznotkankowe – błony międzyżebrowe zewnętrzne. Zachowują one ten sam kierunek, co włókna mięśniowe.
            pp: mięśnie międzyżebrowe zewnętrzne rozpoczynają się na dolnym brzegu wyżej leżącego żebra, na zewnątrz od bruzdy żebra. Dalej włókna biegną równolegle ku dołowi oraz domostkowo.
            pk: przyczep końcowy mięśni znajduje się na brzegu górnym niżej leżącego żebra.
            Mięśnie międzyżebrowe wewnętrzne: Umiejscowione są w przestrzeniach międzyżebrowych począwszy od okolicy kątów żeber, do mostka, przy czym leżą one do wewnątrz od mięśni międzyżebrowych zewnętrznych. Są przez nie pokryte aż do bocznych końców chrząstek żebrowych, następnie zaś pokrywają je błony międzyżebrowe zewnętrzne, przez które nieco przeświecają.
            pp: rozpoczynają się na brzegu dolnym wyżej leżącego żebra do wewnątrz od bruzdy żebra. Następnie włókna biegną równolegle ku dołowi i w stronę kręgosłupa, a więc w kierunku przeciwnym niż mięśnie międzyżebrowy zewnętrzne.
            pk: dalej, włókna kończą się na brzegu górnym niżej leżącego żebra.
            Prawie na całej swojej długości mięśnie międzyżebrowe wewnętrzne składają się z 2 warstw: zewnętrznej – tzw. mięśnie międzyżebrowe pośrednie. Przylegają ściśle do mięśni międzyżebrowych zewnętrznych i tak jak one rozpoczynają się na zewnątrz od bruzdy żebra. Różnią się od nich jedynie kierunkiem włókien, sięgają przyśrodkowo, aż do mostka, wewnętrznej – tzw. mięśnie międzyżebrowe najgłębsze. Kończą się na granicy chrzęstno-kostnej żebra.
            Z obu tych warstw przypuszczalnie tylko zewnętrzna stanowi odpowiednik mięśnia skośnego wewnętrznego brzucha.
            Czynność mięśni: Mięśnie te posiadają duży przekrój fizjologiczny, a co się z tym wiąże dużą siłę.
            Mięśnie międzyżebrowe zewnętrzne są mięśniami wdechowymi, ponieważ unoszą żebra podczas nabierania powietrza. W efekcie wspomagają czynność przepony.
            Z kolei kwestią sporną jest, czy mięśnie międzyżebrowe wewnętrzne opuszczają żebra przy wydechu, wiele źródeł jednak wskazuje na ich pomocnicze działanie wydechowe.
            Podczas oddychania ciśnienie w klatce piersiowej podlega ciągłym zmianom, stając się raz większe, 
            a innym razem mniejsze od ciśnienia zewnętrznego. Z tego powodu przestrzenie międzyżebrowe dążą do uwypuklenia się lub wpuklenia w stosunku do powierzchni żeber. Mięśnie międzyżebrowe przeciwwstawiają się tym zmianom. W ten sposób, w każdej fazie oddechu ściana klatki piersiowej pozostaje mniej więcej równa, dzięki czemu ruchy oddychania nie tracą na swojej sile czy wydajności.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsLydka(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień trójgłowy łydki</h3>
            <p>Mięsień trójgłowy łydki (łac. triceps surae) składa się z mięśnia brzuchatego łydki i mięśnia płaszczkowatego. Ich brzuśce tworzą uwypuklenie łydki.
            Mięsień brzuchaty łydki (łac. musculus gastrocnemius) to mięsień dwugłowy, który rozpoczyna się:
            -głową boczną-powyżej kłykcia bocznego kości udowej
            -głową przyśrodkową-powyżej kłykcia przyśrodkowego kości udowej
            Obie głowy kierują się zbieżnie ku dołowi i w połowie podudzia przechodzą we wspólne ścięgno końcowe. Mięsień kończy się na guzie piętowym przechodząc w ścięgno Achillesa.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsNaramie(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień naramienny</h3>
            <p>Mięsień naramienny (łac. deltoideus) to największy mięsień okolicy barku. Leży powierzchownie i jest widoczny przez skórę. Ma kształt trójkąta skierowanego wierzchołkiem ku dołowi. Przypomina odwróconą grecką literę delta, od której wzięła się jego łacińska nazwa. Mięsień naramienny jest płaski i stosunkowo gruby (do 2 cm). Okala staw ramienny i jako jedyny mięsień okolicy barku rozpoczyna się na obu kościach obręczy kończyny górnej (obojczyk i łopatka). Pozostałe mięśnie z tego obszaru (mm. nadgrzebieniowy, podgrzebieniowy, obły mniejszy, obły większy i podłopatkowy), które również łączą obręcz z kością ramienną, zaczynają się na łopatce.
            Mięsień naramienny ma trzy przyczepy początkowe, w związku z czym dzieli się na trzy części: część przednia (obojczykowa) rozpoczyna się na końcu barkowym obojczyka, część środkowa (barkowa) zaczyna się na wyrostku barkowym łopatki, część tylna (grzebieniowa) ma przyczep początkowy na dolnym brzegu grzebienia łopatki, gdzie łączy się również z powięzią pokrywającą m. podgrzebieniowy.
            Włóka mięśniowe części przedniej i tylnej biegną równolegle do dołu i do boku, natomiast włókna części środkowej kierują się bocznie, by utworzyć łuk nad guzkiem większym kości ramiennej i dopiero za nim skierować się w dół. Wszystkie trzy części kończą się silnym ścięgnem na guzowatości naramiennej kości ramiennej (łac. Tuberositas deltoidea), obok i nieco poniżej m. piersiowego większego (łac. pectoralis major). Ścięgno końcowe wcina się klinem w obręb przyczepu początkowego mięśnia ramiennego (łac. brachialis).
            Część barkowa m. naramiennego jest pierzasta, co oznacza, że ma dużą liczbę włókien mięśniowych i duży przekrój fizjologiczny. Dzięki temu tworzy w okolicy barku charakterystyczną, wydatną wypukłość, przykrywając koniec bliższy kości ramiennej, a zwłaszcza jej guzek większy. M. naramienny leży powierzchownie, co oznacza, że przykrywa nie tylko staw ramienny, lecz także mięśnie rozpoczynające się w jego otoczeniu oraz okoliczne części kostne.
            Między m. naramiennym a guzkiem większym kości ramiennej znajduje się duża kaletka maziowa (łac. bursa subdeltoidea). Czasem łączy się ona z kaletką położoną wyżej, pod wyrostkiem barkowym (łac. bursa subacromialis). Czasami na wyrostku barkowym występuje też kaletka maziowa podskórna.
            Między przyczepem początkowym m. naramiennego a przyczepem końcowym m. czworobocznego (łac. trapezius) występuje rozdzielająca je smuga kostna, którą tworzą obojczyk, wyrostek barkowy i grzebień łopatki. Brzeg tylny m. naramiennego krzyżuje się w swoim przebiegu z mm. podgrzebieniowym, obłym mniejszym, obłym większym i trójgłowym ramienia (łac. triceps brachii). Brzeg przedni graniczy z m. piersiowym większym (łac. pectoralis major), od którego zwykle oddziela go bruzda naramienno-piersiowa, ale zdarza się, że te mięśnie są ze sobą częściowo zrośnięte.
            W krew zaopatrują m. naramienny odchodzące od tętnicy pachowej tętnica tylna okalająca ramię oraz gałąź naramienna tętnicy piersiowo-barkowej. Za unerwienie m. naramiennego odpowiada nerw pachowy (C5-C6).
            Poszczególne części m. naramiennego pełnią różne funkcje: część środkowa (barkowa) odwodzi ramię w stawie ramiennym do 90 stopni w stosunku do tułowia. W tej pozycji kość ramienna styka się z wyrostkiem barkowym i ruch w stawie w tym kierunku zostaje zablokowany. Unoszenie ramienia powyżej tego poziomu odbywa się w stawach obojczykowych, część przednia (obojczykowa) obraca ramię do wewnątrz i przywodzi do przodu, część tylna (grzebieniowa) obraca ramię na zewnątrz i przywodzi do tyłu.
            
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsGrzbiet(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień najszerszy grzbietu</h3>
            <p>Mięsień najszerszy grzbietu (łac. musculus latissimus dorsi) jest cienkim, szerokim i płaskim mięśniem. Pokrywa dolną okolicę grzbietu, a także częściowo boczną część klatki piersiowej. Należy do mięśni powierzchownych grzbietu.
            Mięsień najszerszy grzbietu leży pod skórą i dlatego można go z łatwością wyczuć na osobie żywej. Tylko górna jego część przykryta jest dolnym odcinkiem mięśnia czworobocznego.
            W swoim długim przebiegu mięsień najszerszy grzbietu znajduje się aż w trzech okolicach: lędźwiowej, piersiowej bocznej, pachowej.
            Przykrywa tym samym mięsień zębaty tylny dolny, żebra oraz mięśnie międzyżebrowe. Poza tym zachodzi zazwyczaj na dolny kąt łopatki, dzięki czemu przytwierdza ją do klatki piersiowej. Tylną stronę ścięgna przyczepu końcowego krzyżuje głowa długa mięśnia trójgłowego ramienia. Łączy się ona z nim silnym pasmem włóknistym.
            Mięsień najszerszy grzbietu wraz z mięśniem obłym większym ogranicza jamę pachową od tyłu i wytwarza fałd pachowy tylny.
            Mięsień najszerszy grzbietu – budowa: Omawiany mięsień posiada największą powierzchnię ze wszystkich mięśni. Rozpoczyna się na: wyrostkach kolczystych sześciu dolnych kręgów piersiowych, pięciu kręgach lędźwiowych, grzebieniu krzyżowym pośrodkowym – przyczepia się do tych struktur płaskim i szerokim ścięgnem, stanowiąc blaszkę tylną albo powierzchowną powięzi piersiowo-lędźwiowej; tylnej trzeciej części wargi zewnętrznej grzebienia biodrowego; dolnym kącie łopatki przy przyczepie mięśnia obłego większego; powierzchni zewnętrznej dziewiątego lub dziesiątego, jedenastego i dwunastego żebra.
            Przyczep początkowy (pp) mięśnia najszerszego grzbietu dzieli się zatem na 4 części: kręgową, biodrową, łopatkową, żebrową.
            Od tej długiej linii przyczepu początkowego poszczególne pęczki włókien mięśnia biegną silnie zbieżnie w kierunku dołu pachowego. Pęczki górne bardziej poprzecznie, zaś dolne stromo ku górze. Następnie dochodzą one do mięśnia obłego większego i owijają się dookoła niego przechodząc w czworokątne ścięgno. Przyczep końcowy (pk) znajduje się na grzebieniu guzka mniejszego kości ramiennej od strony przedniej i przyśrodkowej.
            Czynność: Mięsień najszerszy grzbietu przy ustalonym kręgosłupie opuszcza podniesione ramię, przywodzi je do tyłu i obraca do wewnątrz. W efekcie, podczas tego ruchu ręka zbliża się do pośladków. Ponadto, współpracując z mięśniem piersiowym większym, opuszcza wysoko podniesione ramię lub umożliwia wykonanie podciągania się na drążku.
            Przy ustalonych ramionach mięśnie obu stron działają jako dźwigacze dolnych żeber, a więc są pomocniczymi mięśniami wdechowymi. W przeciwieństwie do tego brzeg boczny mięśnia najszerszego staje się twardy podczas kaszlu, a więc podczas wydechu, naciskając bocznie na żebra przy ustalonym stawie ramienny.
            Ciekawostką jest, że klinicyści nazywają go mięśniem kaszlu.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPoslad(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień pośladkowy</h3>
            <p>Mięsień pośladkowy wielki (łac. musculus gluteus maximus; gloutos – pośladek) – duży, mający 3–4 cm grubości mięsień, z długą, wachlarzowatą linią przyczepu. Zbudowany jest z silnych pasm mięśniowych, zaznaczających się wyraźnie szczególnie na powierzchni zewnętrznej. Powierzchnia zewnętrzna m. gluteus maximus jest podłożem dla skóry, do której przylega poprzez powięź, oraz grubej warstwy podściółki tłuszczowej pośladków. Jeden z trzech mięśni pośladkowych.
            Jest najsilniejszym prostownikiem stawu biodrowego, oprócz tego rotuje (skręca) udo na zewnątrz. Przez swój przyczep udowy przywodzi udo, a dzięki przyczepowi powięziowemu odwodzi je. Działając na powięź szeroką uda prostuje kolano. Najważniejszą funkcją m. pośladkowego wielkiego jest utrzymywanie pionowej postawy ciała przy współpracy z mięśniami grupy przedniej. Działając obustronnie kontroluje statykę górnej części ciała, chroni tułów przed upadkiem do przodu oraz przesuwa miednicę do przodu (np. podczas wiosłowania). Mięsień ten jest najczęstszym miejscem wykonywania zastrzyków domięśniowych.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsUdo2(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mięsień dwugłowy uda</h3>
            <p>Mięsień dwugłowy uda (łac. musculus biceps femoris) to mięsień zlokalizowany w tylnej części uda. Zbudowany jest z dwóch części. Jest to mięsień postawny, co oznacza, że wpływa na utrzymanie prawidłowej postawy ciała. Naderwanie mięśnia dwugłowego uda skutkuje pojawieniem się bólu i ograniczenia zakresu ruchu stawu. Aby uniknąć kontuzji i osłabienia mięśnia, warto regularnie wykonywać ćwiczenia na dwugłowe uda. Poza mięśniem dwugłowym ud, w ciele człowieka występuje także mięsień dwugłowy ramienia.
            Mięsień dwugłowy to jeden z największych mięśni kończyny dolnej, który zlokalizowany jest w tylnej części uda. Wraz z mięśniem półbłoniastym oraz mięśniem półścięgnistym, mięsień dwugłowy uda tworzy tylną część uda i mięśnie te określane są mianem grupy kulszowo – goleniowej. Mięsień dwugłowy – jak wskazuje jego nazwa – zbudowany jest z dwóch głów, czyli dwóch części. Głowa długa przebiega nad stawem biodrowym i kolanowym, a głowa krótka przebiega tylko nad stawem kolanowym. Dokładny przebieg głowy długiej i krótkiej mięśnia dwugłowego uda jest następujący:
            -głowa długa mięśnia dwugłowego ma przyczep na tylnej powierzchni guza kulszowego miednicy oraz przebiega nad stawami biodrowymi kolanowym, docierając do głowy krótkiej mięśnia
            -głowa krótka mięśnia dwugłowego rozpoczyna swój przebieg od wargi bocznej kresy chropowatej, zlokalizowanej na tylnej powierzchni trzonu kości udowej i na przegrodzie międzymięśniowej bocznej uda; następnie przebiega nad stawem kolanowym.
            Obydwie głowy mięśnia dwugłowego przyczepione są do bocznej powierzchni głowy kości strzałkowej. W skład mięśnia dwugłowego wchodzą także trzy kaletki maziowe. Kaletka górna położona jest między ścięgnami początkowymi mięśni grupy tylnej uda. Kaletka druga nie występuje u każdej osoby i zlokalizowana jest między ścięgnem mięśnia dwugłowego a głową boczną mięśnia brzuchatego łydki i mięśniem podeszwowym. Z kolei kaletka trzecia, zwana kaletką podścięgnową dolną występuje między ścięgnem mięśnia dwugłowego uda a więzadłem pobocznym strzałkowym. Mięsień dwugłowy uda unerwiony jest przez nerw kulszowy. Przednia część nerwu kulszowego, czyli nerw piszczelowy odpowiada za unerwienie głowy długiej mięśnia, natomiast nerw strzałkowy (tylna część nerwu kulszowego) unerwia krótką głowę mięśnia dwugłowego. Za ukrwienie mięśnia odpowiada tętnica podkolanowa, tętnice przeszywające oraz tętnica okalająca udo przyśrodkowa.
            Funkcje mięśnia dwugłowego uda
            Podstawową funkcją mięśnia dwugłowego uda jest utrzymanie równowagi ciała oraz umożliwienie wykonania wielu ruchów kończyny dolnej. Mięsień ten uczestniczy w następujących ruchach: zginanie stawu kolanowego, zginanie stawu biodrowego, rotowanie kolana na zewnątrz, rotowanie i przywodzenie uda, obniżanie i unoszenie miednicy.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// -----------------------------Nerwowy-----------------------------
function nerwowy(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="nerwowy" src="pictures/nerwowy.png">
        <div class="mozgowie" id="mozgowie"></div>
        <div class="szyjny" id="szyjny"></div>
        <div class="kregowy" id="kregowy"></div>
        <div class="miedzyzebrowy" id="miedzyzebrowy"></div>
        <div class="zwoje" id="zwoje"></div>
        <div class="lokciowy" id="lokciowy"></div>
        <div class="kulszowy" id="kulszowy"></div>
        <div class="piszczel" id="piszczel"></div>
        <div class="osrodkowy" id="osrodkowy"></div>
        <div class="obwodowy" id="obwodowy"></div>
    `;
    document.getElementById('mozgowie').addEventListener('click', showDetailsMozgowie);
    document.getElementById('szyjny').addEventListener('click', showDetailsSzyjny);
    document.getElementById('kregowy').addEventListener('click', showDetailsKregowy);
    document.getElementById('miedzyzebrowy').addEventListener('click', showDetailsMiedzyzebrowy);
    document.getElementById('zwoje').addEventListener('click', showDetailsZwoje);
    document.getElementById('lokciowy').addEventListener('click', showDetailsLokciowy);
    document.getElementById('kulszowy').addEventListener('click', showDetailsKulszowy);
    document.getElementById('piszczel').addEventListener('click', showDetailsPiszczel);
    document.getElementById('osrodkowy').addEventListener('click', showDetailsOsrodkowy);
    document.getElementById('obwodowy').addEventListener('click', showDetailsObwodowy);
}

function showDetailsMozgowie(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Mózgowie</h3>
            <p>Mózgowie (encephalon) uznawane jest za najbardziej skomplikowany narząd w ludzkim ciele. Stanowi ono najważniejszą część układu nerwowego i pełni funkcję nadrzędną wobec innych jego struktur. Zlokalizowane w czaszce mózgowie bywa różnie dzielone – podstawowymi podziałami są podział anatomiczny oraz kliniczny. Według podziału anatomicznego do struktur mózgowia zaliczane są kresomózgowie, międzymózgowie, śródmózgowie oraz móżdżek i rdzeń przedłużony. Podział kliniczny jako części mózgowia uznaje z kolei półkule mózgu, móżdżek oraz pień mózgu.

            Masa mózgowia może być różna, szacunkowo sięga ona jednak około 1,2 do 1,4 kilograma. Podobnie jest z objętością mózgowia, która także bywa zróżnicowana, przeciętnie jednak u mężczyzn wynosi ona około 1250, a u kobiet około 1100 centymetrów sześciennych. Warto tutaj od razu dodać, że – wbrew pozorom – inteligencja nie jest najprawdopodobniej zależna od wielkości mózgowia czy od jego objętości.
            Półkule mózgu wyróżnia się dwie – prawą i lewą – i należą one do kresomózgowia. Oddzielone są one od siebie poprzez szczelinę mózgu, łączy je z kolei ciało modzelowate. Półkule mózgu z zewnątrz pokryte są korą mózgu, która tworzona jest przez istotę szarą (ciała komórek nerwowych), w ich wnętrzu zlokalizowana jest z kolei istota biała (zbudowana z włókien komórek nerwowych). Charakterystyczne dla półkul mózgu jest silne pofałdowanie ich powierzchni zewnętrznej.
            Każda z półkul mózgu podzielona jest na pięć płatów – są nimi: płat czołowy, płat skroniowy, płat ciemieniowy, płat potyliczny, płat brzeżny.
            Pierwsze cztery z wymienionych płatów zlokalizowane są na powierzchni zewnętrznej mózgowia, płat brzeżny mieści się natomiast na powierzchni przyśrodkowej półkul mózgu. W każdej półkuli mózgu znajduje się część układu komorowego, którym jest komora boczna. Zarówno w prawej, jak i w lewej komorze bocznej obecne są specyficzne otwory, przez które łączą się one ze znajdującą się w strukturach międzymózgowia komorą boczną.
            Budowa móżdżku w pewnym stopniu jest analogiczna do budowy półkul mózgu – narząd ten również posiada bowiem dwie półkule. Odróżnia go jednak mniejsza liczba płatów, ponieważ w obrębie móżdżku wyróżnia się je trzy i są nimi: płat kłaczkowo-grudkowy, płat przedni i płat tylny.
            Do pnia mózgu najczęściej zaliczane są trzy elementy, czyli rdzeń przedłużony, śródmózgowie i most. W literaturze natknąć się można na inne jeszcze opisy elementów pnia mózgu – niektórzy autorzy zaliczają do niego chociażby również i międzymózgowie.
            Mózgowie odpowiedzialne jest w zasadzie za funkcjonowanie całego ludzkiego organizmu. Jest ono miejscem, w którym zlokalizowane są ośrodki odpowiedzialne za wykonywane przez ludzi czynności ruchowe, ale i ośrodki mowy czy ośrodki zajmujące się analizą docierających do organizmu bodźców czuciowych. Specyficzne dla siebie funkcje mają nawet poszczególne płaty półkul mózgu:
            płat czołowy to ośrodek związany z czynnościami ruchowymi, ale i miejsce, gdzie obecne są struktury odpowiedzialne za odczuwanie emocji,
            płat ciemieniowy jest ośrodkiem odpowiedzialnym za analizę doznań czuciowych,
            płat skroniowy zajmuje się analizą bodźców słuchowych i węchowych,
            płat potyliczny odpowiedzialny jest za analizę bodźców odbieranych przez narząd wzroku.
            Móżdżek powiązany jest przede wszystkim z mięśniami. To w nim znajdują się ośrodki zajmujące się kontrolowaniem różnych ruchów, ale i specyficzne struktury zapewniające im płynność oraz precyzję. Móżdżek odpowiedzialny jest również za utrzymanie równowagi oraz prawidłowego napięcia różnych mięśni.
            Pień mózgu to niezwykle istotna dla funkcjonowania organizmu człowieka struktura – znajdują się w nim ośrodki kontrolujące podstawowe czynności życiowe, m.in. ośrodek regulujący czynność serca czy ośrodek kontrolujący ciśnienie tętnicze. Pień mózgu, a dokładniej należący do niego twór siatkowaty, odpowiada natomiast za utrzymywanie stanu świadomości.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsSzyjny(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Nerw szyjny</h3>
            <p>Splot szyjny (plexus cervicalis) powstaje z zespolenia gałęzi brzusznych czterech pierwszych nerwów szyjnych (C1-C4) i leży na wysokości czterech pierwszych kręgów szyjnych.
            Od splotu szyjnego odchodzą: krótkie gałęzie mięśniowe biegnące do mięśni szyi, nerw przeponowy (n. phrenicus) unerwia najważniejszy mięsień wdechowy- przeponę. Nerw przeponowy powstaje z włókien pochodzących z czwartego i trzeciego szyjnego segmentu rdzeniowego. Po wyjściu ze splotu nerw przeponowy biegnie po przedniej powierzchni mięśnia pochyłego przedniego pionowo w dół. W klatce piersiowej schodzi ku przeponie, biegnąc pomiędzy blaszką ścienną osierdzia a blaszką ścienną opłucnej. Nerw przeponowy oprócz włókien ruchowych zawiera także włókna czuciowe, którymi zaopatruje osierdzie oraz opłucną śródpiersiową i przeponową w najbliższym sąsiedztwie. Jednostronne porażenie nerwu przeponowego daje niewielkie objawy. Porażenie obustronne powoduje duszność wskutek ucisku przepony na płuca i wyłączenia jej udziału w oddychaniu.
            3. Nerwy skórne, które unerwiają czuciowo skórę szyi i górne okolice klatki piersiowej, odchodzą od splotu szyjnego i ukazują się spod tylnej krawędzi mięśnia mostkowo-obojczykowo-sutkowego. Są to
            nerw potyliczny mniejszy (n. occipitalis minor), nerw uszny wielki (n. auricularis magnus), nerw poprzeczny Szyi (n. transversus colli), nerwy nadobojczykowe (nn. supraclaviculares).
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKregowy(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Rdzeń kręgowy</h3>
            <p>Rdzeń kręgowy usytuowany jest w kanale kręgowym kręgosłupa pomiędzy otworem potylicznym a pierwszym otworem lędźwiowym. Biegnie niemal przez cały kanał kręgowy w środku kręgosłupa. Jego średnica waha się w graniach 8-14 mm, zaś długość wynosi 40-45 cm. Zbudowany jest z dwóch substancji: białej oraz szarej, która znajduje się wewnątrz i jest ułożona w charakterystycznym kształcie litery „H”. Można go sobie wyobrazić jako biały sznur biegnący wewnątrz kręgów kręgosłupa. Szczególną rolę w budowie rdzenia pełni istota szara, składająca się z neuronów, i istoty białej, która jest ułożona w drogi nerwowe: przednie, boczne i tylne.
            Dolna część rdzenia kręgowego zakończona jest charakterystycznym stożkiem (znajdującym się na wysokości 1-2 kręgu lędźwiowego), który przechodzi w tzw. nić końcową (będącą ostatnią częścią rdzenia kręgowego). Górna część zakończona jest tzw. rdzeniem przedłużonym, który stanowi dolną część mózgowia.
            Od rdzenia kręgowego odchodzi 31 par nerwów rdzeniowych (8 szyjnych, 12 piersiowych, 5 lędźwiowych, 5 krzyżowych i 1 guziczny). Każda grupa unerwia inne partie ciała, na przykład nerwy wychodzące z odcinka piersiowego unerwiają tułów. W odcinku lędźwiowym jest 5 nerwów rdzeniowych, których gałęzie przednie tworzą splot lędźwiowy, od którego odchodzą nerwy zaopatrujące dolną część ściany brzucha i częściowo kończynę dolną. Najgrubszy nerw w organizmie ludzkim stanowi nerw kulszowy, znajdujący się w obrębie dołu podkolanowego. Nerw kulszowy jest nerwem mieszanym. Dzieli się go na nerw piszczelowy oraz nerw strzałkowy wspólny.
            Do rdzenia kręgowego wchodzą korzonki tylne (czuciowe), a wychodzą korzonki przednie (ruchowe). Korzonki tylne przewodzą impulsy z receptorów, m.in. bólowych, do ośrodków czuciowych mózgu, natomiast korzonki przednie działają w przeciwnym kierunku: przewodzą impulsy z mózgu na obwód. Gdy te dwie grupy korzonków łączą się, tworzą obwodowy układ nerwowy.
            Podobnie jak mózg, rdzeń kręgowy jest otoczony trzema oponami: twardą, pajęczówką i miękką. 
            W celach ochronnych rdzeń otaczają opony mózgowo-rdzeniowe, między nimi zaś znajduje się płyn mózgowo-rdzeniowy. Parzyste nerwy rdzeniowe w kanale kręgowym tworzą strukturę nazywaną ogonem końskim.
            Zasadnicza funkcja rdzenia kręgowego to koordynacja funkcji ruchowych i czuciowych organizmu. To on zajmuje się regulowaniem wszystkich ruchów naszych mięśni. Dzięki rdzeniowi kręgowemu impulsy są przerodzone z mózgu i do mózgu. Dzięki niemu możemy czuć dotknięcie czyjejś ręki, zawdzięczamy mu możliwość oddychania, jedzenia. W rdzeniu kręgowym biegną drogi czucia głębokiego, temperatury. Ważna funkcja rdzenia powoduje, że powinien on być przedmiotem naszej troski.
            Rdzeń kręgowy jako część ośrodkowego układu nerwowego przewodzi impulsy nerwowe z mózgu do ciała i w przeciwnym kierunku. Bez niego nie bylibyśmy w stanie pobierać tlenu z otoczenia, spożywać pokarmów, odbierać przyjemnych i negatywnych wrażeń z otoczenia. Ta część umożliwia nam prawidłowe funkcjonowanie.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMiedzyzebrowy(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Nerw międzyżebrowy</h3>
            <p>Gałęzie brzuszne nerwów piersiowych w liczbie 12 par noszą nazwę nerwów międzyżebrowych (nn. intercostales). Nerwy te nie tworzą splotów, lecz są ułożone odcinkowo. Jedynie pierwszy i ostatni nerw międzyżebrowy nawiązują łączność z sąsiednimi splotami. Nerwy międzyżebrowe unerwiają mięśnie ściany klatki piersiowej i jamy brzusznej, blaszkę ścienną opłucnej żebrowej i otrzewnej oraz skórę bocznej i przedniej powierzchni tułowia. Każdy z nerwów międzyżebrowych biegnie razem z tętnicą i żyłą międzyżebrową w odpowiedniej przestrzeni międzyżebrowej, wzdłuż dolnej krawędzi żebra. Dolne nerwy międzyżebrowe wychodzą spod luku żebrowego i dążą do mięśni brzucha. Nerwy międzyżebrowe oddają gałęzie mięśniowe, gałęzie skórne, gałęzie czuciowe głębokie do opłucnej i otrzewnej oraz gałęzie łączące z układem współczulnym. Najgrubsze są gałęzie skórne. Od pnia n. międzyżebrowego odchodzą dwie gałęzie skórne: gałąź skórna boczna (r. cutaneus lateralis), wychodząca do skóry pomiędzy linią pachową a sutkową, oraz gałąź skórna przednia (r. cutaneus anterior), która wychodzi do skóry w pobliżu linii przymostkowej. Stanowią one niejako zakończenie nerwów międzyżebrowych. Od gałęzi skórnych II, III i IV nerwów międzyżebrowych odchodzą gałęzie do gruczołów sutkowych. Również od nerwów II i III odchodzą gałęzie skórne do kończyny górnej, noszące nazwę nerwów międzyżebrowo-ramiennych (nn. intercostobrachiales).</p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZwoje(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Zwoje nerwowe</h3>
            <p>Zwoje nerwowe to grupy komórek nerwowych. Znajdują się przede wszystkim przy korzeniach tylnych nerwów rdzeniowych i docelowych narządach. Są zbudowane z komórek zwojowych, komórek satelitarnych, pęczków włókien nerwowych, naczyń włosowatych i tkanki łącznej.</p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsLokciowy(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Nerw łokciowy</h3>
            <p>Nerw łokciowy (n. ulnaris) jest nerwem mieszanym; odchodzi od pęczka przyśrodkowego splotu ramiennego i biegnie po przyśrodkowej stronie tętnicy ramiennej. W okolicy łokcia odłącza się od tętnicy i okrąża od tyłu kłykieć przyśrodkowy kości ramiennej, biegnąc w rowku nerwu łokciowego, gdzie jest pokryty tylko powięzią i skórą okolicy łokciowej i daje się łatwo wymacać; stąd nerw łokciowy przechodzi na przednią powierzchnię przedramienia, gdzie biegnie w towarzystwie tętnicy łokciowej pomiędzy mięśniem zginaczem palców głębokim a mięśniem zginaczem łokciowym nadgarstka. W obrębie ramienia nerw łokciowy gałęzi nie oddaje. Na przedramieniu unerwia te mięśnie zginacze, które nie zostały unerwione przez nerw pośrodkowy, a więc zginacz łokciowy nadgarstka i połowę zginacza głębokiego palców.</p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKulszowy(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Nerw kulszowy</h3>
            <p>Nerw kulszowy (nervus ischiadicus) jest wyjątkowym nerwem przede wszystkim ze względu na swoją długość – biegnie on, wraz ze swymi gałęziami, przez całą długość kończyny dolnej i jest on najdłuższym nerwem w ciele człowieka. Dość duże są również jego wymiary: nerw kulszowy ma 0,5 cm grubości i 1,5 cm szerokości. Nerw wywodzi się ze splotu krzyżowego. Powstaje on dzięki połączeniu pięciu korzeni nerwowych: L4, L5, S1 oraz S2 i S3. Miejscem, w którym wymienione korzenie nerwowe ulegają połączeniu, tworząc nerw kulszowy, jest miednica mniejsza – nerw powstaje między dolnym brzegiem mięśnia gruszkowatego a tylnym brzegiem mięśnia zasłaniacza wewnętrznego, więzadłem krzyżowo-kolcowym i kolcem kulszowym.
            Nerw kulszowy opuszcza miednicę poprzez otwór podgruszkowy, później przebiega on na mięśniach brzusznych obręczy biodrowej. W tym odcinku przykryty jest on przez mięsień pośladkowy wielki. Następnie – w górnej części uda – nerw kulszowy przebiega między grupą tylnych mięśni uda 
            a mięśniem przywodzicielem wielkim. Później nerw kieruje się ku dołowi podkolanowemu, w którym to miejscu nerw kulszowy oddaje swoje dwie gałęzie.
            Nerw kulszowy ma dwie gałęzie – są nimi nerw piszczelowy oraz nerw strzałkowy. Obie z nich oddają kolejne gałęzie, którymi są gałęzie do stawu kolanowego. Nerw piszczelowy unerwia mięśnie grupy tylnej uda, podudzia, a także mięśnie podeszwy stopy.
            Nerw strzałkowy wspólny odpowiada z kolei za unerwienie głowy krótkiej mięśnia dwugłowego uda. Oprócz tego nerw ten – a dokładniej mówiąc jego gałęzie - odpowiada za unerwienie mięśni 
            z przedniej i bocznej części podudzia.
            Nerw kulszowy jest nerwem mieszanym – posiada on bowiem włókna zarówno czuciowe, jak 
            i ruchowe. Odpowiada on za odbieranie bodźców czuciowych ze stopy, jak i z podudzi (z wyłączeniem ich wewnętrznej części).
            Doznania czuciowe z obrębu podeszwy stopy odbierane są dzięki nerwowi piszczelowemu, za odbiór bodźców tego rodzaju z górnej części stopy oraz ze wspomnianej części podudzia odpowiada zaś druga gałąź nerwu kulszowego, czyli nerw strzałkowy wspólny. Dodatkowo, jak już zaznaczono wcześniej, nerw kulszowy prowadzi włókna ruchowe zaopatrujące różne mięśnie kończyny dolnej.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPiszczel(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Nerw piszczelowy</h3>
            <p>Nerw piszczelowy (nervus tibialis) stanowi grubszą gałąź końców nerwu kulszowego. Biegnie w jego przedłużeniu przez środek dołu podkolanowego, po grzbietowej powierzchni mięśnia podkolanowego, bocznie od naczyń żylnych oraz przyśrodkowo od tętnicy podkolanowej. Jest tu otoczony dużą ilością tkanki tłuszczowej i przebiega powierzchownie, przykryty jedynie powięzią podkolanową. W dolnej części dołu podkolanowego wchodzi pod łączące się brzegi obydwu głów mięśnia brzuchatego łydki, następnie pod charakterystyczny łuk mięśnia płaszczkowatego i dalej przebiega w warstwie pomiędzy nim a brzuścami zginacza długiego palców, palucha i mięśnia piszczelowego tylnego. Towarzyszą mu tętnica i żyła piszczelowe tylne, początkowo do przodu, a później od strony przyśrodkowej. Na dalszym przebiegu nerw kieruje się w stronę kanału kostki przyśrodkowej, utworzonego przez kostkę przyśrodkową, przyśrodkową powierzchnię bloczka kości skokowej oraz piętowej i przez troczek zginaczy. Przechodzi przez kanał wraz ze ścięgnami wyżej wymienionych mięśni oraz tętnicą i żyłami piszczelowymi tylnymi. Pod troczkiem nerw ulega podziałowi na gałęzie końcowe: nerw podeszwowy przyśrodkowy i boczny. </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsOsrodkowy(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Ośrodkowy układ nerwowy</h3>
            <p></p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsObwodowy(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Obwodowy układ nerwowy</h3>
            <p></p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// -----------------------------Krwionosny--------------------------
function krwionosny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="krwionosny" src="pictures/krwionosny.png">
        <div class="zylaglowna" id="zylaglowna"></div>
        <div class="tetnica" id="tetnica"></div>
        <div class="przedsionek-p" id="przedsionek-p"></div>
        <div class="komora-p"  id="komora-p"></div>
        <div class="aorta" id="aorta"></div>
        <div class="zylaplucna" id="zylaplucna"></div>
        <div class="przedsionek-l" id="przedsionek-l"></div>
        <div class="komora-l" id="komora-l"></div>
        <div class="serce" id="serce"></div>
    `;

    document.getElementById('zylaglowna').addEventListener('click', showDetailsZylaGlowna);
    document.getElementById('tetnica').addEventListener('click', showDetailsTetnica);
    document.getElementById('przedsionek-p').addEventListener('click', showDetailsPrzedsionki);
    document.getElementById('komora-p').addEventListener('click', showDetailsKomory);
    document.getElementById('aorta').addEventListener('click', showDetailsAorta);
    document.getElementById('zylaplucna').addEventListener('click', showDetailsZylaPlucna);
    document.getElementById('przedsionek-l').addEventListener('click', showDetailsPrzedsionki);
    document.getElementById('komora-l').addEventListener('click', showDetailsKomory);
    document.getElementById('serce').addEventListener('click', showDetailsSerce);
}

function showDetailsZylaGlowna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żyła Główna</h3>
            <p>Żyła główna górna (v. cava superior) powstaje na wysokości chrząstki I prawego żebra z połączenia żył ramienno-głowowych prawej i lewej. Po około 6-centymetrowym przebiegu uchodzi ona do przedsionka prawego serca. Żyła główna górna sąsiaduje od przodu z grasicą, od strony prawej -z opłucną śródpiersiową. Wpadają do niej żyły śródpiersiowe przednie, żyły osierdziowe oraz dość gruby pień żyły nieparzystej. Żyła główna górna nie ma zastawek. Zbiera ona krew ze ścian klatki piersiowej, głowy i szyi oraz z kończyn górnych.
            Żyła główna dolna (v cava inferior) jest najgrubszym naczyniem organizmu ludzkiego. Powstaje ona z dwóch żył biodrowych wspólnych, łaczących się na wysokości chrząstki między IV a V kręgiem lędźwiowym, nieco poniżej i na prawo od miejsca podziału aorty brzusznej. Żyła główna leży poza otrzewną po prawej stronie tętnicy głównej, przechodzi przez miąższ wątroby w bruździe żyły głównej. Przez otwór w środku ścięgnistym przepony dostaje się do śródpiersia, po czym uchodzi do prawego przedsionka serca. Ku przodowi od żyły głównej dolnej leży końcowy odcinek dwunastnicy i głowa trzustki. Dopływy żyły głównej dolnej dzielimy na ścienne i trzewne.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsTetnica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Tętnica</h3>
            <p>Tętnice płucne (łac. arteriae pulmonales) – naczynia krwionośne o charakterze tętnic doprowadzające krew z serca do płuc. U kręgowców o wykształconych dwóch krwiobiegach wchodzą one w skład obiegu płucnego.

            Ewolucyjnie jak i w embriogenezie tętnice płucne powstają z naczyń szóstego łuku skrzelowego</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzedsionki(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Przedsionek</h3>
            <p>Przez ścianę tylną przedsionka prawego (atrium dextrum) uchodzą do niego żyły główne - górna i dolna. W sąsiedztwie ujścia żyły głównej dolnej widzimy ujście zatoki wieńcowej serca (sinus coronarius cordis), zamykane półksiężycowate go kształtu zastawką zatoki wieńcowej (valvula sinus coronarii). Na przedniej ścianie przedsionka leży wejście do uszka prawego. Na powierzchni wewnętrznej uszka widzimy przebiegające zazwyczaj równolegle mięśnie grzebieniaste (musculi pectinati). Na przegrodzie międzyprzedsionkowej znajduje się zagłębienie, zwane dołem owalnym (fossa ovalis). W życiu płodowym istnieje w tym miejscu otwór owalny (foramen ovale), łączący oba przedsionki. Przez otwory tylnej ściany przedsionka lewego (atrium sinistrum) uchodzą do niego cztery, rzadziej trzy żyły płucne. Uszko lewe jest mniejsze od prawego i, podobnie jak prawe, ma na powierzchni wewnętrznej mięśnie grzebieniaste. W ścianie dolnej przedsionka widzimy ujście przedsionkowo-komorowe lewe.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsKomory(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Komora</h3>
            <p>Komora prawa (ventriculus aexter) na przekroju poprzecznym ma kształt półksiężyca. Światło komory zwęża się stopniowo w kierunku koniuszka serca. Ku przodowi od ujścia przedsionkowo-komorowego prawego widzimy początek pnia płucnego. W ujściu pnia płucnego widoczna jest zastawka tego pnia, złożona z trzech płatków półksiężycowatych. Każdy z płatków jedną swoją krawędzią przymocowuje się do ściany tętnicy, a brzegiem wolnym styka się z płatkami sąsiednimi, zamykając w ten sposob światło tetnicy. Zastawka pnia płucnego (valva trunci pulmonalis) pozwala na swobodne przejście krwi do tętnicy podczas skurczu komory, zamyka natomiast powrót do komory w czasie jej rozkurczu. W ujściu przedsionkowo-komorowym prawym znajduje się zastawka przedsionkowo-komorowa prawa albo trójdzielna (valva tricuspidalis). Każdy z jej płatków ma kształt zbliżony do trójkąta. Jeden bok płatka jest przytwierdzony do pierścienia włóknistego, otaczającego ujście, dwa pozostałe są wolne. Do wolnych brzegów i dolnej powierzchni każdego płata przymocowane są struny ścięgniste, które drugim końcem łączą się z wierzchołkami mięśni brodawkowatych. Czynność strun ścięgnistych i mięśni brodawkowatych polega na tym, że nie pozwalają one na wywinięcie się zastawek w kierunku przedsionków podczas skurczu komór. Na ścianie wewnętrznej komory widzimy przebiegające w rozmaitych kierunkach beleczki mięśniowe, z których wychodzą wspomniane wyżej mięśnie brodawkowate. Ich liczba przeważnie odpowiada liczbie płatków zastawek. Komora lewa (ventriculus sinister) jest dłuższa od prawej. Na przekroju poprzecznym ma ona kształt koła. Między przegrodą międzykomorową a ujściem przedsionkowo-komorowym lewym bierze początek tętnica główna. W ujściu aorty znajduje się zastawka aorty, zbudowana z trzech półksiężycowatych płatków. Ujście przedsionkowo-komorowe lewe zamyka zastawka dwudzielna (vahva mitralis). Jej struny ścięgniste przymocowane są do dwóch silnie rozwiniętych mięśni brodawkowatych. Na powierzchni wewnętrznej komory lewej znajdują się beleczki mięśniowe.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsAorta(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Aorta</h3>
            <p>Aorta (tętnica główna)  jest największą tętnicą człowieka. Dzięki niej krew jest doprowadzana do wszystkich tkanek naszego ciała. Aortę dzielimy na aortę piersiową oraz brzuszną. Jej praca nie polega jedynie na rozdzielaniu krwi na inne duże naczynia, ale też dzięki budowie swoich ścian reguluje ciśnienie tętnicze krwi. Punktem wyjścia aorty jest lewa komora serca, gdzie na granicy jest zastawka półksiężycowata. Aorta następnie lokuje się na górze śródpiersia oraz podąża nieco w prawo na wysokości 5-7 cm. Następnie wędruje nad korzeniem płuca lewego, łukiem cofa się w lewo i przez śródpiersie tylne wchodzi do lewej strony kręgosłupa.
            Aorta jako największa tętnica w ciele człowieka jest podzielona na określone odcinki: Część wstępująca aorty - na jej początku jest opuszka aorty, tworzona z trzech zatok, które znajdziemy ponad płatkami zastawki aorty. To tutaj jest odejście tętnic wieńcowych. Wstępujący odcinek aorty przebiega przez worek osierdziowy i kończy się w miejscu przyczepu osierdzia, po czym zaczyna się kolejny odcinek aorty, czyli łuk aorty - ten odcinek aorty wędruje ku tyłowi od drugiego lewego stawu żebrowo-mostkowego. Jej koniec natomiast znajdziemy na wysokości lewej powierzchni trzonu kręgu Th3 lub Th4. Tam zaczyna się kolejny odcinek aorty, czyli aorta zstępująca, część zstępująca aorty jest podzielona na: część piersiową aorty - choć wędruje w śródpiersiu tylnym, to z wiekiem przesuwa się w lewą stronę. Jej początek to poziom kręgu Th3 lub Th4, a koniec Th12, część brzuszną aorty - jej początek znajdziemy na poziomie kręgu Th12, w rozworze aortowym w przeponie. Następnie przechodzi do przedniej powierzchni kręgów lędźwiowych. Jej zakończenie znajdziemy w okolicy dolnej części trzonu kręgu L4, część piersiową aorty - choć wędruje w śródpiersiu tylnym, to z wiekiem przesuwa się w lewą stronę. Jej początek to poziom kręgu Th3 lub Th4, a koniec Th12, część brzuszną aorty - jej początek znajdziemy na poziomie kręgu Th12, w rozworze aortowym w przeponie. Następnie przechodzi do przedniej powierzchni kręgów lędźwiowych. Jej zakończenie znajdziemy w okolicy dolnej części trzonu kręgu L4.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsZylaPlucna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Żyła Płucna</h3>
            <p>Żyły płucne (łac. venae pulmonales) – krótkie, silne cztery (u człowieka) naczynia żylne prowadzące krew utlenowaną z płuc do lewego przedsionka serca. Żyły płucne prowadzą krew utlenowaną, a nie jak większość żył - krew nieutlenowaną.
            Z każdego płuca wychodzą dwie żyły płucne: górna (łac. venae pulmonales superior), która prowadzi krew z górnego i środkowego płata płuca po stronie prawej oraz z górnego płata po stronie lewej, oraz dolna (łac. venae pulmonales inferior), która prowadzi krew obustronnie z dolnego płata płuca. Obie żyły biegną niemal poziomo w kierunku serca, przebijają worek osierdziowy i uchodzą do lewego przedsionka serca przez jego tylną ścianę. Żyły płucne prawe są nieco dłuższe od lewych, lewa żyła krzyżuje aortę piersiową.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsSerce(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Serce</h3>
            <p>Serce (cor) jest narządem zbudowanym ze swoistego mięśnia poprzecznie prążkowanego. Ma ono kształt spłaszczonego stożka, podstawą zwróconego ku górze. Wielkość serca równa się w przybliżeniu wielkości pięści osobnika. Dziecko w wieku 2-4 lat ma stosunkowo duże serce i wykazuje dużą ruchliwość bez zmęczenia. W okresie pokwitania (14-16 lat) serce jest zbyt małe w stosunku do całego organizmu i przez to słabe; dopiero w  18-20 lat osiąga normę. Serce mężczyzny waży ok. 300 g, kobiety - ok. 270 g. W sercu wyróżniamy: podstawę zwróconą ku górze, ku tyłowi i ku stronie prawej oraz koniuszek skierowany ku dołowi, przodowi i ku stronie lewej. Na przeponie spoczywa powierzchnia przeponowa serca. Wypukła powierzchnia mostkowo-żebrowa zwrócona jest ku przodowi. Obydwie powierzchnie oddzielone są od siebie brzegiem prawym i leżącą po stronie lewej powierzchnią płucną serca. Na zewnętrznej powierzchni serca znajduje się wiele bruzd, w których leżą naczynia wieńcowe i ich gałęzie, odżywiające mięsień sercowy. Bruzda wieńcowa oddziela przedsionki od komór. Nie ma jej w miejscu odejścia pnia tętnicy płucnej i tętnicy głównej. Bruzdy międzykomorowe, przednia i tylna, leżą na granicy między prawą a lewą komorą. Łączą się one na prawo od koniuszka, przez co sam koniuszek należy do komory lewej. Powyżej bruzdy wieńcowej znajdują się przedsionki serca. Od każdego z nich odchodzi po stronie bocznej uchyłek o kształcie bardzo spłaszczonego stożka, zwany uszkiem przedsionka. Wewnątrz uszka znajduje się jama komunikująca się z jamą przedsionka. W górnej części przedniej powierzchni serca widzimy główne pnie tętnicze. Skośnie od strony prawej ku lewej i ku górze przebiega pień płucny. Od strony lewej przylega do niego uszko przedsionka lewe, od tyłu graniczy on z aortą. Początkowy odcinek aorty krzyżuje się z pniem płucnym, biegnąc skośnie od strony lewej i dołu ku stronie prawej i ku górze. Nieco od tyłu, góry i strony prawej widoczna jest Wpadająca do przedsionka prawego żyła główna górna. Żyła główna dolna wpada do przedsionka prawego bezpośrednio po przejściu przez przeponę. Od tyłu do przedsionka lewego uchodzą trzy lub częściej cztery żyły płucne. Przedsionek prawy od lewego oddziela przegroda międzyprzedsionkowa, komory zaś przegroda międzykomorowa. Przedsionek prawy łączy się z komorą prawą ujściem przedsionkowo-komorowym prawym, przedsionek lewy z komorą lewą- ujściem przedsionkowo-komorowym lewym. Ujścia są otoczone zbudowanymi z tkanki łącznej pierścieniami włóknistymi, do których przymocowują się zastawki. W ujściu przedsionkowo-komorowym prawym znajduje się zastawka przedsionkowo-komorowa prawa albo trójdzielna, złożona z trzech płatków; w ujściu przedsionkowo-komorowym lewym - zastawka przedsionkowo-komorowa lewa albo dwudzielna, zbudowana z dwóch płatków. Zastawki nie pozwalają na cofanie się krwi do przedsionków w czasie skurczu komór.
Budowa serca
Ściana serca składa się z trzech warstw. Są to: 1) nasierdzie (epicardium), 2) mięsień sercowy (myocardium), 3) wsierdzie (endocardium). Nasierdzie jest cienką błoną surowiczą pokrywąjącą zewnętrzną powierzchnię mięśnia sercowego wraz z leżącymi na jego powierzchni naczyniami wieńcowymi. Na początkowych odcinkach wielkich naczyń nasierdzie przechodzi w zewnętrzną blaszkę osierdzia (p. Worek osierdziowy). Mięsień sercowy zbudowany jest z tkanki mięśniowej poprzecznie prążkowanej. Różni się swą budową od mięśni szkieletowych tym, że poszczególne komórki łączą się odgałęzieniami z komórkami leżącymi w sąsiedztwie, tworząc w ten sposób swoistą sieć mięśniową. Włókienka kurczliwe przechodzą przez odgałęzienia do komórek sąsiednich. Wnętrze komórki zajęte jest przez sarkoplazmę z leżącymi w niej jądrami. Na przebiegu włókien mięśniowych widoczne są cienkie, poprzecznie przebiegające, twory, zwane wstawkami. Warstwa mięśnia sercowego jest najgrubsza w obrębie komory lewej, cieńsza w ścianie komory prawej, najcieńsza w przedsionkach. Błona mięśniowa komór, z wyjątkiem tzw. pęczka przedsionkowo-komorowego nie łączy się bezpośrednio z błoną mięśniową przedsionków. Na granicy między przedsionkami i komorami znajdują się pierścienie włókniste. Dwa z nich otaczają ujścia przedsionkowo-komorowe, dwa inne - ujście aorty i pnia płucnego. Błona mięśniowa przedsionków składa się z dwóch warstw. Warstwa powierzchowna przebiega mniej więcej równolegle do bruzdy wieńcowej serca. Warstwa głęboka jest oddzielna dla każdego przedsionka. Jedne z włókien tej warstwy zaczynają się i kończą na pierścieniach włóknistych, tworząc pętlę, inne gromadzą się okrężnie wokół ujść żył do przedsionków. Błona mięśniowa komór składa się z trzech warstw. Włókna mięśniowe warstwy powierzchownej zbiegają od pierścieni włóknistych skośnie ku dołowi. Na koniuszku włókna zawijają się ósemkowato. W tym miejscu powstaje ich charakterystyczny układ, zwany wirem serca. Włókna biegną w dalszym ciągu w kierunku odwrotnym, wchodząc w skład warstwy wewnętrznej ściany komory. Warstwa środkowa jest najgrubsza w komorze lewej. Jej włókna rozpoczynają się i kończą na pierścieniach włóknistych, mając przebieg w kształcie nie zamkniętego koła. W okolicy ujścia żyły głównej do przedsionka prawego, na granicy między przedsionkiem a komora prawą, oraz w przegrodzie międzykomorowej spotykamy skupienia komórek ubogich w miofibryle, przypominające włókna mięśniowe gładkie. Są to komórki mięśniowe przewodzące serca (tzw. włókna Purkinjego). Pierwsze skupienie włókien tworzy węzeł zatokowo-przedsionkowy, drugie - to węzeł przedsionkowo-komorowy. W przegrodzie międzykomorowej przebiega pęczek przedsionkowo-komorowy. Komórki mięśniowe przewodzące serca tworzą tzw. autonomiczny serca, w którym powstają bodźce do jego skurczów. Wsierdzie jest cienką, przezroczystą błoną. Składa się ono z cienkiej warstwy tkanki łącznej, pokrytej warstwą płaskich komórek. Wsierdzie pokrywa ściany przedsionków i komór, przechodząc bezpośrednio w błonę wyściełającą wnętrze naczyń. Zastawki zbudowane są z tkanki łącznej włóknistej, pokrytej po obu stronach przez wsierdzie.
</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

// -------------------------------Rozrodczy--------------------------------
function rozrodczySex(){
    main.innerHTML = ``;
    main.innerHTML = `
        <div class="sex-container">
            <div>
                <div class="male" id="male"><i class="fas fa-mars"></i></div>
                <h3 class="male-text">Mężczyzna</h3>
            </div>
            <div>
                <div class="female" id="female"><i class="fas fa-venus"></i></div>
                <h3 class="female-text">Kobieta</h3>
            </div>
        </div>
    `;
    // body.appendChild(main);
    document.getElementById('male').addEventListener('click', Male);
    document.getElementById('female').addEventListener('click', Female);
}

function Male(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="rozrodczyM" src="pictures/rozrodczyM.png">
        <div class="pecherzyk" id="pecherzyk"></div>
        <div class="penis"  id="penis"></div>
        <div class="cewka" id="cewka"></div>
        <div class="prostata" id="prostata"></div>
        <div class="nasieniowod" id="nasieniowod"></div>
        <div class="jadro" id="jadro"></div>
        <div class="moszna" id="moszna"></div>
    `;
    document.getElementById('pecherzyk').addEventListener('click', showDetailsPecherzyk);
    document.getElementById('penis').addEventListener('click', showDetailsPenis);
    document.getElementById('cewka').addEventListener('click', showDetailsCewka);
    document.getElementById('prostata').addEventListener('click', showDetailsProstata);
    document.getElementById('nasieniowod').addEventListener('click', showDetailsNasieniowod);
    document.getElementById('jadro').addEventListener('click', showDetailsJadro);
    document.getElementById('moszna').addEventListener('click', showDetailsMoszna);
}

function showDetailsPecherzyk(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pęcherzyk nasienny</h3>
            <p>Pęcherzyki nasienne (vesiculae seminales) - prawy i lewy - stanowią wypuklenie nasieniowodu w kształcie gruszkiwatego płaskiego tworu długości ok. 4 cm. Są to gruczoły pomocnicze, wytwarzające zasadową wydzielinę, która zawiera białko zasadowe (protaminy), wielocukry oraz fruktozę (ok. 300 mg%). Ta stanowi materiał odżywczy i źródło energii dla plemników. Wydzielina pęcherzyków nasiennych jest żółtawym gęstym płynem o odczynie zasadowym, który pobudza plemniki do ruchu. Usunięcie pęcherzyków nasiennych przeważnie pociąga za sobą niepłodność.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPenis(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Penis</h3>
            <p>Prącie, członek męski (penis, membrum virile) jest narządem o podwójnym zadaniu - służy do wprowadzenia nasienia do dróg rodnych kobiety w trakcie aktu płciowego oraz do wyprowadzania moczu z pęcherza na zewnątrz. Czynnościom tym odpowiada jego budowa. Prącie ma kształt podłużnego stożkowato zakończonego walca. Część tylna prącia (pars fixa) ukryta pod skórą moszny i krocza jest nieruchomo przytwierdzona do kości łonowych i spojenia łonowego. Trzon prącia (corpus penis) wraz z żołedzią (glans penis) w stanie spoczynku zwisa nad workiem mosznowym jako tzw. część wisząca (pars pendula penis). Podczas wzwodu prącie usztywnia się i powiększa bardzo znacznie swe wymiary. Prącie w stanie wzwodu, czyli phallus, przybiera kierunek zwrócony ku górze i ku przodowi. W stanie zwiotczałym długość części ruchomej prącia wynosi 8,5-10,5 cm, przeciętnie -9,5 cm. W stanie wzwodu trzon prącia wydłuża się do ok. 15-17 cm, a obwód - do ok. 12 cm. Trzon prącia zakończony jest stożkowatym zgrubieniem zwanym żołędzią glans penis). Na wierzchołku żołędzi znajduje się szczelinowate ujście zewnętrzne cewki moczowej. Na granicy trzonu z żołędzią widnieje wyraźne rynienkowate zwężenie - szyjka żołędzi (collum glandis). Zgrubiały brzeg podstawy żołędzi tworzy wypukły pierścień zwany koroną żołędzi (corona glandis). Skóra pokrywająca trzon prącia jest bardzo cienka, łatwo przesuwalna; z podłożem łączy się ścisle wzdłuż korony żołędzi. Na granicy z żołędzią w stanie zwiotczałym skóra tworzy głęboki fałd pokrywający żołądź, zwany napletkiem (praeputium). Napletek stanowi zapasowy materiał skórny, który przy powiększeniu się prącia podczas wzwodu cofa się ku tyłowi obnażając całkowicie żołądź. Niekiedy ujście napletka bywa tak wąskie, iż nie może się cofnąć do tyłu po wzwodzie, tworząc tzw, stulejkę (phimosis). W kieszonce napletka gromadzi się mazista treść -mastka (smegma praeputii). Stulejka sprzyja gromadzeniu się mastki i zanieczyszczeń stwarzając warunki sprzyjające stanom zapalnym. Szczególnie duże ilości mastki gromadzą się w kieszonce napletka u mężczyzn nie przestrzegających higieny osobistej. Jeśli się jej nie usuwa regularnie, powstają kwasy tłuszczowe wydzielające woń zjełczałego tłuszczu. Napletek nie tworzy pełnej kieszonki na całym obwodzie żołędzi. Od dołu od blaszki wewnętrznej fałdu skórnego odchodzi tzw. wędzidełko napletka uniemożliwiające nadmierne jego cofanie się. Trzon prącia jest utworzony z trzech cylindrycznych tworów, zwanych ciałami jamistymi. Dwa ciała jamiste prącia (corpora cavernosa penis) leżą po stronie grzbietowej (górnej) prącia, nieparzyste zaś - ciało gąbczaste prącia (corpus spongiosum penis) przylega do nich od dołu leżąc w płytkim rowku. Każde z ciał jamistych prącia ma kształt walca o zaostrzonym końcu. Końce tylne, zwane odnogami prącia (crura penis), rozchodząc się do tyłu i od dolnego punktu spojenia łonowego, ku tyłowi, dołowi i bocznie przytwierdzają się do kości kulszowej i łonowej w ten sposób, że ich łącznotkankowa pokrywa zrasta się z okostną. Ciała jamiste prącia są zrośnięte ze sobą w linii środkowej, tworząc przegrodę prącia (septum penis). Przegroda ta nie jest szczelna, lecz posiada liczne otwory łączące ze sobą komory obu ciał jamistych. Na przedni koniec zrośniętych ciał jamistych nasadzona jest na kształt czepka lub naparstka żołądź. Podczas wzwodu prącia ciało gąbczaste prącia (corpus spongiosum penis) obejmuje cewkę moczową. Jest ono dłuższe i cieńsze niż ciała jamiste prącia. Na obu swych końcach rozszerza się tworząc z przodu wspomniane już zgrubienie w kształcie kołpaczka nasadzonego na koniec przedni ciał jamistych prącia zwane żołędzią, w końcu tylnym zaś - zgrubienie zwane opuszką prącia (bulbus penis). Opuszka wielkości orzecha laskowego leży w okolicy krocza na przeponie moczowo-płciowej pokryta mięśniem opuszkowo-gąbczastym. Skurcz tego mięśnia powoduje wyrzucenie nasienia podczas wytrysku z cewki moczowej. Cewka moczowa wchodzi do ciała gąbczastego mniej więcej w odległości 1 cm ku przodowi od tylnego końca opuszki. Każde z ciał jamistych zbudowane jest z bardzo mocnej osłonki łącznotkankowej z tkanki łącznej zbitej, grubości ok. I mm, zwanej błoną białawą (tunica albuginea). Tkanka jamista stanowi układ nieregularnych przestrzeni naczyniowych -jamek, pomiędzy licznymi beleczkami odchodzącymi do wewnętrznej powierzchni błony białawej. Układ przestrzeni naczyniowych otrzymuje krew z końcowych odgałęzień odchodzących od tętnicy głębokiej prącia i w mniejszym stopniu z tętnicy grzbietowej prącia. Ciało gąbczaste prącia jest zbudowane podobnie jak ciała jamiste.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsCewka(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Cewka Moczowa</h3>
            <p>Cewka moczowa męska (urethra masculina) rozpoczyna się w ujściu pęcherza moczowego i kończy ujściem zewnętrznym na żołędzi prącia. Długość jej wynosi 17,5-20 cm, jest ona zatem znacznie dłuższa niż cewka moczowa żeńska, Przy wzwodzie prącia cewka się odpowiednio wydłuża. W cewce moczowej odróżniamy trzy części: 1) część sterczową - długości ok. 3 cm, przebijającą gruczoł krokowy, 2) część błoniastą, długości ok. 2 cm, przechodzącą przez przeponę moczowo-płciową, oraz 3) część gąbczastą, długości 10-15 cm, przebiegającą w ciele gąbczastym prącia. Średnica cewki moczowej męskiej nie jest jednakowa na całym jej przebiegu - najszersza jest część sterczowa, najwęższa - część błoniasta. W części błoniastej włókna mięśniowe przechodzące z przepony moczowo-płciowej na cewkę moczową tworzą w jej ścianie mięsień zwieracz cewki (m. sphincter urethrae). Część gąbczasta cewki tworzy w części końcowej rozszerzenie zwane dołem łódkowatym (fossa navicularis urethrae). Najwęższą część cewki stanowi jej ujście zewnętrzne. Ma ona kształt pionowej szpary. Cewkę moczową wyścieła błona śluzowa pokryta nabłonkiem wielowarstwowym walcowatym.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsProstata(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Prostata</h3>
            <p>Gruczoł krokowy, stercz (prostata), jest nieparzystym narządem wielkości kasztana, położonym w jamie miednicy mniejszej, pod pęcherzem moczowym, za spojeniem łonowym. Ma on kształt spłaszczonego kasztana, podstawą zwróconego ku górze. Przeciętne rozmiary gruczołu krokowego wynoszą: w wymiarze strzałkowym 2 cm, wysokość ok. 3 cm, szerokość - ok. 4 cm. Przednią część gruczołu krokowego przebija cewka moczowa; przez cześć tylną biegną skośnie ku dołowi i przodowi przewody wytryskowe. Gruczoł ten w wieku starszym ulega często powiększeniu i uciskając cewkę moczową stwarza przeszkodę w oddawaniu moczu. Od zewnątrz gruczoł krokowy otacza torebka łącznotkankowa zawierająca także włókna mięśniowe. Wydzielina gruczołu krokowego stanowi około 20% płynnej części nasienia. Zawiera ona m.in. kwas cytrynowy, substancje białkowe oraz wiele enzymów, jak fosfataza kwaśna, beta-glukuronidaza i fibrynolizyna. Nasienie, które bardzo szybko po wytrysku krzepnie, pozostawione w temperaturze ok. 37°C ulega pod wpływem fibrynolizyny upłynnieniu. Gruczoł krokowy wydziela także substancje o właściwościach hormonalnych, tzw. prostaglandyny, które po dostaniu się do pochwy powodują zwolnienie skurczów macicy i rozluźnienie końca brzusznego jajowodu.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsNasieniowod(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Nasieniowod</h3>
            <p>Nasieniowód (ductus deferens) stanowi bezpośrednie przedłużenie przewodu najądrza. Jest to przewód długości 50-60 cm służący do szybkiego przeprowadzania nasienia do cewki moczowej. Biegnie on początkowo po przyśrodkowej stronie jądra, kierując się ku kanałowi pachwinowemu, przez który wchodzi do wnętrza miednicy mniejszej w powrózku nasiennym. W miednicy mniejszej nasieniowód zdąża ku tylnej ścianie pecherza moczowego. Po skrzyżowaniu się z moczowodem zbliża się do nasieniowodu strony przeciwnej, przylegając do dna pęcherza. Ściana nasieniowodu jest gruba i składa się z trzech błon: zewnętrznej - zbudowanej z tkanki łącznej włóknistej, zawierającej liczne włókna sprężyste, środkowej- błony mięśniowej, oraz wewnętrznej - błony śluzowej. Najgrubsza (ok. 1 mm) jest warstwa mięśniowa; dzięki niej nasieniowód daje się wyraźnie wyczuć w miejscu, gdzie leży powierzchownie pod skórą, tj. przed wejściem do kanału pachwinowego. Średnica nasieniowodu wynosi ok. 3 mm, światło - 0,5 mm. W końcowej części nasieniowód tworzy wrzecionowate rozszerzenie, zwane bańką nasieniowodu (ampulla ductus deferentis). Wydzielina bańki nasieniowodu pobudza plemniki do ruchu. Następnym odcinkiem dróg wyprowadzających nasienie jest krótki, 20-milimetrowy, przewód wytryskowy (ductus eiaculatorius), który przebija gruczoł krokowy i otwiera się małym ujściem do części sterczowej cewki moczowej. Ujścia przewodów wytryskowych znajdują się po obu stronach łagiewki sterczowej.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJadro(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jądro</h3>
            <p>Jądro (testis, testimonium virile, orchis) jest parzystym złożonym gruczołem cewkowym, w którym wytwarzane są gamety męskie -plemniki. Poza wytwarzaniem plemników jądro pełni rolę gruczołu dokrewnego, którego hormony regulują czynność pozostałych narządów płciowych oraz są odpowiedzialne za rozwój i utrzymanie wielu wtórnych cech płciowych męskich. Jądro ma wielkość i kształt nieco spłaszczonego orzecha włoskiego, zawieszonego luźno w worku mosznowym na powrózku nasiennym, dzięki czemu łatwo się przesuwa we wszystkich kierunkach. Od tyłu do jądra przylega najądrze oraz wchodzą do niego naczynia i nerwy, a wychodzą przewodziki odprowadzające jądra. Jądro lewe często bywa większe niż prawe i jest zawieszone niżej. Zewnętrzną warstwę jądra tworzy gruba torebka włóknista zbudowana z tkanki łącznej zbitej, zwanej błoną białawą, obejmująca miąższ jądra. Zgrubienie błony białawej wpuklające się do wnętrza jądra od tyłu zwane jest śródjądrzem. Odchodzą od niego promienisto cienkie blaszkowate przegródki jądra (septula testis), dzielące całe jądro na około 200 stożkowatych płacików (lobuli testis), Płaciki te są wypełnione przez cewki nasienne kręte (tubuli seminiferi contorti). Na każdy płacik przypada od jednej do czterech cewek. Długość takiej cewki wynosi ok. 30-80 cm, grubość 0,1-0,3 mm. Ogólną długość cewek krętych w jądrze oblicza się na ok. 150-300 m. Z każdego płacika wychodzi jedna cewka nasienna prosta (tubulus seminiferus rectus). Cewki proste zdążają do śródjądrza, gdzie łączą się ze sobą, tworząc rodzaj sieci, zwanej siecią jądra. Cewki proste są bardzo krótkie (0,2-0,4 mm) i nieco szersze od cewek krętych. Cewki nasienne kręte są miejscem wytwarzania plemników, natomiast cewki proste stanowią pierwszy odcinek dróg odprowadzających nasienie.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMoszna(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Moszna</h3>
            <p>Jądra leżą w oddzielnym worku - mosznie (scrotum), utworzonym przez wypuklenie przedniej ściany jamy brzusznej. W okresie płodowym zawiązki gruczołów płciowych powstają na tylnej ścianie jamy brzusznej na wysokości dolnych kręgów lędźwiowych. W trakcie rozwoju płodowego jądra odbywają wędrówkę, zwaną - zstępowaniem jąder (descensus testiculorun), z jamy brzusznej przez kanał pachwinowy do moszny. W procesie tym uczestniczy także przednia ściana jamy brzusznej, tworząc jak gdyby kieszonkę ze wszystkich swoich warstw z otrzewną włącznie, wędrującą przed jądrem do worka mosznowego. Jądro ma zatem zawczasu przygotowaną drogę i nie powoduje wypuklenia ściany brzusznej, lecz rzeczywiście zstępuje do gotowego worka mosznowego. Proces zstępowania jąder zostaje zakończony przed urodzeniem i jama surowicza moszny traci połączenie z jamą otrzewnej. Jeżeli połączenie takie zachowa się, wówczas powstaje wrodzona przepuklina pachwinowa, przez którą mogą wchodzić do moszny pętle jelitowe. Zatrzymanie się jądra w trakcie zstępowania w jamie brzusznej lub w kanale pachwinowym jest określone jako wnętrostwo (cryptorchismus). W środku worek mosznowy jest przedzielony przegrodą (septum scroti) na dwie jamy. Skóra moszny odznacza się silniejszą pigmentacją, małą zawartością tkanki tłuszczowej oraz obecnością szczególnej warstwy mieśni gładkich, tworzących tzw. błonę kurczliwą (tunica dartos). Dzięki owej błonie skóra moszny może się silnie rozciągać dostarczając części pokrywy dla prącia przy jego wzwodzie. Brak podściółki tłuszczowej ułatwia wymianę ciepła i temperatura w worku mosznowym jest o 2,5-4°C niższa niż w jamie brzusznej.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function Female(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="rozrodczyK" src="pictures/rozrodczyK.png">
        <div class="jajowod" id="jajowod"></div>
        <div class="jajnik" id="jajnik"></div>
        <div class="pochwa" id="pochwa"></div>
        <div class="macica" id="macica"></div>
    `;
    document.getElementById('jajowod').addEventListener('click', showDetailsJajowod);
    document.getElementById('jajnik').addEventListener('click', showDetailsJajnik);
    document.getElementById('pochwa').addEventListener('click', showDetailsPochwa);
    document.getElementById('macica').addEventListener('click', showDetailsMacica);
}

function showDetailsJajowod(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jajowod</h3>
            <p>Jajowody (tuba uterina, salpinx) są to dwa (prawy i lewy) cewkowate przewody długości 14-20 cm służące do przyjęcia i przeprowadzenia komórki jajowej z jajnika do jamy macicy. Każdy jajowód ciągnie się od końca jajowodowego jajnika do górnego kąta macicy, biegnąc w górnym brzegu więzadła szerokiego macicy pod otrzewną. Koniec jajowodu otwierający się do jamy otrzewnej w sąsiedztwie jajnika jest rozszerzony w kształcie trąbki - zwanej lejkiem jajowodu; z brzegu lejka zwisają na kształt frędzli wypustki zwane strzępkami jajowodu (fimbriae tubae). Powierzchnię wewnętrzną strzępków pokrywa błona śluzowa, tworząca na większych strzępkach podłużne fałdy, będące przedłużeniem fałdów błony śluzowej lejka. Jeden ze strzępków, zwany strzępkiem jajnikowym, wyróżnia się tym, że jest dłuższy, głębiej wyżłobiony i przylega do bieguna górnego jajnika. Lejek jest najbardziej ruchomą częścią jajowodu, zazwyczaj skierowaną ku dołowi. Strzępki prawdopodobnie ułatwiają wprowadzenie komórki jajowej z pękniętego pęcherzyka do ujścia brzusznego jajowodu, którego średnica jest tak mała, że przepuszcza tyliko grubszą szczecinkę. Lejek przechodzi w bańkę (ampulla), która stanowi ponad połowę całej długości jajowodu. Bańka ma przebieg kręty. Średnica jej wynosi 8-9 mm. Ściany są cienkie. Za bańką jajowód zwęża się tworząc cieśn (isthmus tubae) długości 3-6 cm, średnicy 2-3 mm, o przebiegu prostolinijnym i grubych ścianach, dzięki czemu ma on konsystencję twardego powrózka. Ostatni odcinek jajowodu przebijający ścianę macicy (część maciczna - pars uterina), długości ok. 1,5 cm, jest najwęższy (Średnica wynosi 0,5-1 mm). Ten kończy się ujściem macicznym (ostium uterinum). Ściana jajowodu składa się z trzech warstw: błony surowiczej, błony mięśniowej oraz błony śluzowej. Komórka jajowa po wydostaniu się z pękniętego pęcherzyka na powierzchnię jajnika zostaje przeprowadzona, prawdopodobnie przy udziale strzępków, głównie strzępka jajnikowego, do jajowodu. Dzięki luźnemu zawieszeniu jajnika, pozwalającemu na zmiany jego położenia w szerokim zakresie oraz ruchliwości końca jajnikowego jajowodu strzępki jajowodu mogą się znaleźć nawet przy jajniku strony przeciwnej, co niejednokrotnie udało się zaobserwować podczas operacji. Możliwe jest zatem przeniesienie komórki jajowej np. z jajnika lewego do jajowodu po stronie prawej. Przesuwanie się jaja w jajowodzie odbywa się pod wpływem rytmicznych skurczów jego błony mięśniowej. Zapłodnienie komórki jajowej następuje najprawdopodobniej podczas jej wędrówki w bańce jajowodu.</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsJajnik(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Jajnik</h3>
            <p>Jajniki (łac. ovarium) są zaliczane do narządów parzystych. Znajdują się po obu stronach miednicy w tzw. dołkach jajnikowych wewnątrz jamy otrzewnowej. Jajniki są narządem rozrodczym i odpowiednikiem męskich jąder. Produkują hormony i komórki jajowe. Jajniki kształtem przypominają nieco migdał. U dorosłej, zdrowej kobiety maja ok. 2-4 cm długości, ok. 1 cm grubości i ok. 2-3 cm szerokości. Jeden jajnik waży ok. 6-8 g.
            Jajnik jest umocowany w miednicy przy pomocy dwóch więzadeł - więzadła właściwego jajnika, które łączy jego dolny brzeg z trzonem macicy oraz więzadła wieszadłowego jajnika łączącego górny brzeg z otrzewną. W tym drugim przebiegają również naczynia i nerwy zaopatrujące jajnik.
            Krew tętnicza do jajników dopływa przez tętnice jajnikowe, które odchodzą od aorty brzusznej. Po zaopatrzeniu jajowodów tętnice jajnikowe zazębiają się z tętnicami macicznymi.
            Krew z jajników spływa do sieci drobnych naczyń splotu wiciowatego znajdującego się w więzadle szerokim macicy i dalej do prawej i lewej żyły jajnikowej. Żyła jajnikowa prawa uchodzi do żyły głównej dolnej, a żyła jajnikowa lewa do żyły nerkowej. Wraz z dorastaniem i dojrzewaniem kobiety jajniki zmieniają się. W okresie dojrzewania jajniki są mniejsze niż wcześniej podano, a ich powierzchnia jest gładka. U kobiety starszej stają się bardziej pofałdowane, mają nieregularną powierzchnię. Gdy nadejdzie okres menopauzy funkcje jajników powoli wygasają, a ich wymiary się zmniejszają. Jajniki zmieniają się także w różnych etapach cyklu owulacyjnego. Podobnie jest z ich aktywnością. Są najbardziej aktywne podczas owulacji. Wtedy też znacznie się powiększają. Powiększają się również w pierwszym trymestrze ciąży, aby mogły sprostać znacznie zwiększonemu zapotrzebowaniu na hormony.
            Jajniki pełnią w organizmie kobiety podwójną rolę - wydzielają potrzebne hormony oraz wytwarzają komórki jajowe. W okresie pokwitania, które ma miejsce u dziewczynek w wieku 11-13 lat, pojawia się regulowany przez hormony przysadki mózgowej cykl miesiączkowy. Okres trwa ok. 28 dni i powtarza się co miesiąc przez 35-40 lat, czyli do okresu menopauzy. Pod wpływem hormonów przysadki co miesiąc jeden pęcherzyk Graafa dojrzewa do postaci komórki jajowej. Jajniki produkują hormony - estrogeny, progesteron, relaksynę oraz androgeny, czyli hormony o budowie sterydowej. U kobiet są nimi androstendion i dihydrotestosteron. Hormony, które są wydzielane przez jajniki to: estrogeny - to hormon steroidowy, który w organizmie kobiety wpływa na rozwój i ukształtowanie drugo- i trzeciorzędowych cech płciowych, czyli płci somatycznej, hormonalnej i metabolicznej. Drugorzędowe cechy płciowe stanowią zespół różnic somatycznych, które różnią kobietę i mężczyznę. Dotyczą one różnic w proporcjach budowy ciała, rozwoju mięśni, grubości i ulokowania tkanki tłuszczowej, budowie szkieletu, barwie głosu czy sposobie owłosienia. Trzeciorzędowe cechy płciowe natomiast kształtują się w okresie dojrzewania. Dzięki estrogenom kobietom rosną piersi, a biodra się zaokrąglają. Dodatkowo przygotowują one błonę śluzową macicy do przyjęcia zapłodnionego jajeczka. Estrogeny znane są także ze swojego wpływu na dobre samopoczucie i urodę kobiet. Ich działanie sprawia, że skóra jest gładka, a włosy lśniące; progesteron - to podobnie jak estrogen hormon sterydowy. Jest on odpowiedzialny za zagnieżdżenie się zarodka w macicy oraz za prawidłowy rozwój ciąży. W czasie drugiej fazy cyklu miesiączkowego wzrasta jego poziom, co wskazuje na owulację. Właściwy poziom progesteronu jest szczególnie ważny dla kobiet, które planują zajść w ciążę; androgeny - to hormony, które są wytwarzane przez jajniki i korę nadnerczy. Androgeny są uznawane za hormony typowo męskie, ponieważ odpowiadają przede wszystkim za kształtowanie męskich narządów płciowych, męską muskulaturę, owłosienie czy niski głos. Biorą one także udział w spermatogenezie, czyli produkcji plemników. Androgeny występują w organizmie kobiety, ale ich stężenie nie powinno być zbyt wysokie. Jeśli poziom androgenów u kobiety jest za wysoki, to zazwyczaj towarzyszą temu zaburzenia, takie jak nadmierne owłosienie, trądzik czy nieregularne miesiączki; relaksyna - to hormon, który jest niezwykle ważny w czasie ciąży. Odpowiada on za podtrzymywanie funkcji ciałka żółtego, które z kolei wpływa na produkcję progesteronu. Relaksyna jest ważna także po porodzie, ponieważ jest ona odpowiedzialna za laktację.  
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPochwa(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Pochwa</h3>
            <p>Pochwa (vagina, colpos) jest przewodem mięśniowo-błoniastym, który łączy przedsionek pochwy z macicą. Głównym zadaniem pochwy jako narządu płciowego jest przyjęcie nasienia wprowadzonego do niej podczas stosunku płciowego przez członek męski. W czasie porodu pochwa służy jako kanał wyprowadzający dla płodu, poza tym stanowi drogę odpływu krwi menstruacyjnej i innych produktów wydzielania macicy. Pochwa prawie w całości leży w miednicy mniejszej pomiędzy pęcherzem i cewką moczową od przodu a odbytnicą od tyłu. Krótki odcinek końcowy przebija przeponę moczowo-płciową. Oś pochwy ma kierunek prawie prostolinijny i w pozycji pionowej skierowana jest ku górze i ku tyłowi, tworząc z płaszczyzną poziomą kąt 50-70°. W pozycji leżącej na grzbiecie pochwa ma kierunek zbliżony do poziomego. Z osią macicy pochwa tworzy kąt nieco większy od prostego rozwarty przodowi. Ściany pochwy przylegają do siebie i na przekroju poprzecznym pochwa w górnym odcinku ma kształt poprzecznej szczeliny, w dolnym - kształt litery H. Tylko górny koniec pochwy obejmujący szyjkę macicy ma przekrój cylindryczny. Długość pochwy bywa zmienna i może się wahać między skrajnymi wartościami od 5 do 14 cm. Przeciętnie długość pochwy mierzona wzdłuż ściany przedniej wynosi ok. 7,5 cm, wzdłuż ściany tylnej - 9 cm, a to wskutek tego, iż ściana tylna przyczepia się nieco wyżej do szyjki macicy niż ściana przednia. Dzięki takiemu umocowaniu górna część pochwy tworzy zachyłki, zwane sklepieniami pochwy: najgłębsze - sklepienie tylne (fornix vaginae posterior), następnie dwa sklepienia boczne i sklepienie przednie. Średnica pochwy nie jest jednakowa na całej dugości. W części środkowej wynosi ona przeciętnie 2-3 cm. Najwęższa jest pochwa w części przeponowej, najszersza w części obejmującej szyjkę macicy. Przednia ściana pochwy jest zrośnięta ściśle z podstawą pęcherza i cewką moczową. Przemieszczenie jednego narządu pociąga za sobą przesunięcie drugiego, np. obniżenie przedniej ściany pochwy, pociągając dno pęcherza, może spowodować powstanie torbieli pęcherza i przetokę. Ściana tylna pochwy jest związana z odbytnicą znacznie luźniej. Przestrzeń pomiędzy pochwą a odbytnicą wypełnia masa tkanki mięśnioweji włóknistej krocza. Po bokach pochwy znajdują się mm. dźwigacze odbytu i mm. przepony miednicy.
Ściana pochwy, grubości ok. 3 mm, składa się z trzech warstw: błony zewnętrznej, błony mięśniowej, błony śluzowej
</p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsMacica(){
    const details = document.createElement('div');

    details.innerHTML = `
            <h3>Macica</h3>
            <p>Macica (uterus) jest to narząd żeńskiego układu rozrodczego. Jest on nieparzysty, kształtem przypominający gruszkę. Rozmiary macicy różnią się w zależności od tego czy kobieta rodziła przykładowo optymalne wymiary macicy u kobiety, która jeszcze nie rodziła to długość 7 cm, największa szerokość to 4 cm, grubość tego narządu jest również zależna od wagi kobiety. Prawidłowo ułożona macica jest położona pośrodku mniejszej miednicy pomiędzy pęcherzem moczowym, a odbytnicą. Składa się z dwóch głównych powierzchni i dwóch brzegów. Pierwsza powierzchnia macicy to powierzchnia przednia, a druga to powierzchnia jelitowa. Obie spotykają się w brzegu lewym i prawym.
            W podziale anatomicznym należy wymienić trzon macicy, następnie cieśń i szyjkę macicy. Pisząc o budowie anatomicznej macicy, nie wolno zapominać o błonach śluzowych, które stanowią ściany tego narządu i będą to: błona surowicza, która osłania narząd od zewnątrz błona mięśniowa – najgrubsza część, która jest zbudowana z mięśni gładkich i błona śluzowa składająca się z powierzchniowej warstwy czynnościowej i położonej głębiej warstwy podstawnej.
            Przez macicę powinny przepływać plemniki, które mają za zadanie dotrzeć do komórki jajowej i ją zapłodnić. Jeśli dojdzie do zapłodnienia to przy prawidłowej ciąży przez następne 9 miesięcy w jamie macicy będzie rozwijał się zarodek.
            Macica posiada grube ściany, które są zbudowane z tkanki mięśniowej, co jest gwarancją nie tylko prawidłowego rozwoju płodu, ale również jego bezpieczeństwa. W trakcie ostatniej fazy porodu dochodzi do skurczy ścian macicy, dzięki którym możliwy jest poród naturalny.
            </p>
    `;

    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

//------------------------------Hormonalny----------------------------
function hormonalny(){
    main.innerHTML = ``;
    main.innerHTML = `
        <img class="hormonalny" src="pictures/hormonalny.jpg">
        <div class="szyszynka" id="szyszynka"></div>
        <div class="grasica"  id="grasica"></div>
        <div class="nerka" id="nerka"></div>
        <div class="trzustka" id="trzustka"></div>
        <div class="jajnik1" id="jajnik1"></div>
        <div class="przysadka" id="przysadka"></div>
        <div class="grasica1" id="grasica1"></div>
        <div class="nerka1" id="nerka1"></div>
        <div class="trzustka1" id="trzustka1"></div>
        <div class="jadro1" id="jadro1"></div>
    `;
    document.getElementById('szyszynka').addEventListener('click', showDetailsSzyszynka);
    document.getElementById('grasica').addEventListener('click', showDetailsGrasica);
    document.getElementById('nerka').addEventListener('click', showDetailsNerka);
    document.getElementById('trzustka').addEventListener('click', showDetailsTrzustka);
    document.getElementById('jajnik1').addEventListener('click', showDetailsJajnik);
    document.getElementById('przysadka').addEventListener('click', showDetailsPrzysadka);
    document.getElementById('grasica1').addEventListener('click', showDetailsGrasica);
    document.getElementById('nerka1').addEventListener('click', showDetailsNerka);
    document.getElementById('trzustka1').addEventListener('click', showDetailsTrzustka);
    document.getElementById('jadro1').addEventListener('click', showDetailsJadro);
}

function showDetailsSzyszynka(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Szyszynka</h3>
            <p>Szyszynka, inaczej ciało szyszynkowe lub nasadka mózgowa (łac. corpus pineale), to niewielki narząd o wadze ok. 120 g, który znajduje się w III komorze mózgu, w tylnej części stropu międzymózgowia. Szyszynka jest gruczołem dokrewnym, co oznacza, że reguluje i koordynuje czynności określonych narządów i tkanek, wytwarzając do krwi hormony, które oddziałują na określone narządy i tkanki.
            W ciągu dnia szyszynka wydziela serotoninę - hormon biorący udział w regulacji ciśnienia krwi i czynnościach ośrodkowego układu nerwowego (odpowiedni poziom serotoniny uspokaja, natomiast jej niedobór może powodować nerwowość, a nawet agresję). Z kolei gdy robi się ciemno, w szyszynce zachodzi synteza serotoniny w inny hormon – melatoninę. Wówczas robimy się senni. W ten sposób melatonina "informuje" nas, że idzie noc i należy położyć się do łóżka. Natomiast światło, za pośrednictwem impulsów nerwowych wędrujących z oka do mózgu, zmniejsza jej wydzielanie. Dlatego osoby, które zarywają noce, siedzą do późna przed komputerem, mogą cierpieć na niedobór melatoniny. Wówczas zwiększa się ryzyko wystąpienia cukrzycy typu 2, nowotworu prostaty i piersi. Permanentne zmęczenie pogarsza komfort życia.
            Poza tym melatonina jest nazywana "wskazówką" zegara biologicznego. Uważa się bowiem, że melatonina działa jako endogenny synchronizator zdolny do stabilizowania i/lub wzmacniania wielu rytmów biologicznych (np. temperatury ciała, rytmu sen-czuwanie).
            Szyszynka oraz jej hormon - melatonina - biorą udział w regpacji syntezy i uwalniania wybranych hormonów części gruczołowej przysadki, a zwłaszcza: hormonu wzrostu (somatotropiny– GH), hormonu tyreotropowgo (tyreotropiny – TSH), hormonu adrenokortykotropowego (kortykotropiny – ACTH). Jednak uważa się, że jej rola w tych procesach jest drugorzędna.
            Hormon szyszynki zmienia także istotnie proces uwalniania hormonów części nerwowej przysadki, tj. wazopresyny i oksytocyny. Szyszynka ma także wpływ na funkcję układu rozrodczego, gdyż wydziela hormony hamujące wydzielanie gonadotropin odpowiedzialnych za dojrzewanie płciowe.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsGrasica(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Grasica</h3>
            <p>Grasica (glandula thymus) to gruczoł i narząd układu limfatycznego,  który jest częścią układu odpornościowego organizmu. Znajduje się on za mostkiem, w śródpiersiu, a zbudowany jest z kory, podzielonej na zraziki i rdzenia. Grasica rozwija się już w życiu płodowym. Po około 2 latach wzrostu osiąga swój największy rozmiar (waży około 15 gramów). Po tym okresie, głównie za sprawą hormonów płciowych, stopniowo ulega zanikowi i jest zastępowana przez tkankę tłuszczową. U osoby starszej grasica waży około 5 gramów.
            Grasica odpowiada za prawidłowe kształtowanie się układu odpornościowego poprzez kontrolę rozwoju obwodowych tkanek limfatycznych (węzły chłonne, śledziona).
            Grasica zapobiega rozwojowi alergii, wpływa na zdolności rozrodcze, wzrost oraz metabolizm.
            Ponadto w grasicy dojrzewają limfocyty T. Gruczoł odpowiada za eliminację autoreaktywnych limfocytów, czyli tych, które mogłyby zaatakować komórki i tkanki organizmu, i pozostawienie tych, które potrafią prawidłowo rozpoznać obce tkanki (zjawisko tzw. tolerancji centralnej). Te ostatnie, już dojrzałe, wysyłane są do obwodowych tkanek limfatycznych i zasiedlają je.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsNerka(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Nerka</h3>
            <p>Nerka (ren) - narząd układu moczowo-płciowego pełniący rolę wydalniczą (produkcja moczu), regulacyjną (utrzymanie homeostazy) i endokrynną (produkcja i degradacja hormonów). Nerki są narządem parzystym, którego kształt przypomina zwykle ziarno fasoli, są koloru czerwonobrązowego (wskutek dużej zawartości krwi). Nerki zlokalizowane są we wnętrzu jamy brzusznej w tzw. przestrzeni zaotrzewnowej. Przeciętna masa nerki u człowieka wynosi około 150 g, długość tego narządu to około 10-12 cm, szerokość to 5-6 cm, a grubość 2-3 cm.
            Lewa nerka u ludzi rozciąga się zwykle od 11. kręgu piersiowego do drugiego kręgu lędźwiowego.
            Prawa nerka (ze względu na sąsiedztwo wątroby) typowo zlokalizowana jest nieco niżej, mianowicie położona jest ona zwykle pomiędzy 12. kręgiem piersiowym a krążkiem międzykręgowym drugiego i trzeciego kręgu lędźwiowego.
            Nerki spełniają w organizmie człowieka wiele funkcji, do których można zaliczyć: wydalanie z organizmu wraz z moczem szkodliwych produktów przemiany materii, dbanie o prawidłowy stan płynów ustrojowych, filtrowanie i zatrzymywanie składników przydatnych do codziennego funkcjonowania organizmowi.
            Nerki mają bardzo duże znaczenia dla układu kostnego oraz prawidłowej równowagi kwasowo-zasadowej krwi. Nerki mają także duży wpływ na prawidłowe ciśnienie tętnicze krwi. Jeśli więc struktura nerek zostanie uszkodzona, a organy nie będą filtrowały prawidłowo krwi, w organizmie zaczną zbierać się substancje szkodliwe. Tym samym organizm narażony jest na powstawanie uciążliwych i bolesnych chorób. Szybko można stwierdzić, że działanie nerek jest kluczowe w prawidłowym funkcjonowaniu organizmu człowieka.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}

function showDetailsPrzysadka(){
    const details = document.createElement('div');
    details.innerHTML = `
            <h3>Przysadka</h3>
            <p>Przysadka mózgowa (łac. hypophysis, ang. pituitary gland) jest jednym z najważniejszych gruczołów układu hormonalnego. Narząd ten zwykle nie osiąga nawet masy przekraczającej jeden gram, a jednocześnie kontroluje on czynność tak ważnych dla życia organów, jak np. tarczyca czy nadnercza. Właściwa funkcja przysadki jest niezbędna dla prawidłowego funkcjonowania organizmu – do chorób doprowadzać może zarówno niedoczynność przysadki, jak i stany, w których dochodzi do wzmożonego uwalniania hormonów przysadkowych - nadczynność przysadki mózgowej. Układ hormonalny to tak naprawdę bardzo złożony system, w którym istnieje wiele zależności pomiędzy narządami wchodzącymi w jego skład. Na wydzielanie różnych substancji wpływ mają rozmaite zjawiska, jednak nadrzędnymi ośrodkami kontrolującymi uwalnianie różnych hormonów są podwzgórze oraz przysadka.
            Ludzka przysadka wielkością przypomina ziarno grochu lub wiśnię, zwykle masa tego gruczołu wynosi około 0,5 grama. Narząd znajduje się w środkowym dole czaszki, traktowany on jest jako część międzymózgowia i umiejscowiony on jest w zagłębieniu kości klinowych, które określane jest mianem siodła tureckiego. Struktury kostne otaczają przysadkę ze wszystkich stron poza górną – od góry gruczoł osłania wypustka opony twardej, nazywana przeponą siodła tureckiego. Przysadkę dzieli się ogólnie na trzy płaty: przedni, pośredni oraz tylny. Niektórzy autorzy analizujący budowę przysadki pomijają istnienie płata środkowego z tego względu, że u ludzi jest on tak naprawdę szczątkowy. Płat przedni od tylnego odróżniają nie tylko wydzielane przez nie hormony, ale i pochodzenie tych części gruczołu przysadkowego. Przedni płat przysadki rozwija się z nabłonka podniebienia wtórnego i stanowi on około 80% masy całego narządu. Tylny płat gruczołu rozwija się z kolei ze struktur podwzgórza i tak naprawdę należy on do tego właśnie narządu – tylny płat przysadki posiada zresztą bezpośrednie połączenie z podwzgórzem, oba gruczoły dokrewne są ze sobą połączone za pośrednictwem tzw. lejka.
            Przedni płat przysadki określany bywa również jako przysadka gruczołowa. Ta część przysadki pełni niezwykle ważną funkcję, wydziela ona bowiem tzw. hormony tropowe, które kontrolują czynność innych gruczołów endokrynnych: tarczycy, nadnerczy czy też (odpowiednio dla danej płci) jajników i jąder.
            </p>
    `;
    Details.appendChild(details);
    DetailsContainer.classList.remove('hidden');
}



closeDetails.addEventListener('click', () => {
    DetailsContainer.classList.add("hidden");
    // console.log("click");
    Details.innerHTML = '';
});

list.forEach((item) =>
item.addEventListener('click', activeLink));

list[0].addEventListener('click', stronaglowna);
list[1].addEventListener('click', trawienny);
list[2].addEventListener('click', oddechowy);
list[3].addEventListener('click', kostny);
list[4].addEventListener('click', miesniowy);
list[5].addEventListener('click', nerwowy);
list[6].addEventListener('click', krwionosny);
list[7].addEventListener('click', rozrodczySex);
list[8].addEventListener('click', hormonalny);