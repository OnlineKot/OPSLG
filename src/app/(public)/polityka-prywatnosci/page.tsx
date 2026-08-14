import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka Prywatności i Cookies",
  description:
    "Polityka prywatności Polskiego Towarzystwa Lekarzy Genetyków Klinicznych — zasady przetwarzania danych osobowych zgodnie z RODO, w tym informacje o plikach cookies i prawach osób, których dane dotyczą.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <section className="policy">
      <div className="container">

        <p className="breadcrumb"><a href="/">Strona główna</a> / Polityka prywatności</p>

        <div className="section-header" style={{ marginBottom: 32, textAlign: 'left', maxWidth: 'none' }}>
          <span className="eyebrow">Ochrona danych osobowych</span>
          <h1>Polityka Prywatności i Plików Cookies</h1>
          <p className="lede">
            Niniejszy dokument określa zasady przetwarzania i ochrony danych osobowych osób
            korzystających z serwisu internetowego oraz osób, których dane przetwarzane są
            w związku z działalnością statutową Polskiego Towarzystwa Lekarzy Genetyków Klinicznych, zgodnie
            z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
            2016 r. (RODO) oraz ustawą z dnia 10 maja 2018 r. o ochronie danych osobowych.
          </p>
          <p className="small">Wersja: 1.0 · Data ostatniej aktualizacji: 6 sierpnia 2026 r.</p>
        </div>

        <div className="policy__layout">
          <aside className="policy__toc" aria-label="Spis treści">
            <h4>Spis treści</h4>
            <ol>
              <li><a href="#administrator">Administrator danych</a></li>
              <li><a href="#iod">Inspektor Ochrony Danych</a></li>
              <li><a href="#zasady">Zasady przetwarzania danych</a></li>
              <li><a href="#cele">Cele, podstawy prawne i okres przechowywania</a></li>
              <li><a href="#odbiorcy">Odbiorcy danych</a></li>
              <li><a href="#przekazywanie">Przekazywanie danych poza EOG</a></li>
              <li><a href="#prawa">Prawa osób, których dane dotyczą</a></li>
              <li><a href="#dobrowolnosc">Dobrowolność podania danych</a></li>
              <li><a href="#zautomatyzowane">Zautomatyzowane podejmowanie decyzji</a></li>
              <li><a href="#pliki-cookies">Pliki cookies</a></li>
              <li><a href="#bezpieczenstwo">Bezpieczeństwo danych</a></li>
              <li><a href="#privacy-by-design">Prywatność w fazie projektowania</a></li>
              <li><a href="#rejestr">Rejestr czynności przetwarzania</a></li>
              <li><a href="#zmiany">Zmiany Polityki Prywatności</a></li>
              <li><a href="#kontakt-rodo">Kontakt w sprawach ochrony danych</a></li>
            </ol>
          </aside>

          <article className="policy__content">

            <h2 id="administrator">1. Administrator danych osobowych</h2>
            <p>
              Administratorem danych osobowych jest <strong>Polskie Towarzystwo Lekarzy Genetyków Klinicznych</strong>
              z siedzibą w Warszawie (00-001), ul. Przykładowa 12, wpisane do rejestru stowarzyszeń
              Krajowego Rejestru Sądowego pod numerem KRS 0000000000, NIP 000-00-00-000,
              REGON 000000000 (dalej: „Administrator” lub „Towarzystwo”).
            </p>
            <p>Kontakt z Administratorem możliwy jest:</p>
            <ul>
              <li>listownie na adres siedziby wskazany powyżej,</li>
              <li>e-mailowo na adres: <a href="mailto:kontakt@ptlgk-przyklad.pl">kontakt@ptlgk-przyklad.pl</a>,</li>
              <li>telefonicznie pod numerem: +48 22 000 00 00.</li>
            </ul>

            <h2 id="iod">2. Inspektor Ochrony Danych</h2>
            <p>
              Administrator wyznaczył Inspektora Ochrony Danych (IOD), z którym można się
              skontaktować we wszystkich sprawach dotyczących przetwarzania danych osobowych
              oraz korzystania z praw związanych z ich przetwarzaniem:
            </p>
            <ul>
              <li>e-mail: <a href="mailto:iod@ptlgk-przyklad.pl">iod@ptlgk-przyklad.pl</a></li>
              <li>adres korespondencyjny: Inspektor Ochrony Danych, ul. Przykładowa 12, 00-001 Warszawa (z dopiskiem „IOD”)</li>
            </ul>

            <h2 id="zasady">3. Zasady przetwarzania danych</h2>
            <p>Przetwarzając dane osobowe, Administrator kieruje się zasadami wynikającymi z art. 5 RODO:</p>
            <ul>
              <li><strong>zgodności z prawem, rzetelności i przejrzystości</strong> — dane przetwarzane są w sposób zgodny z prawem, uczciwy i przejrzysty dla osoby, której dane dotyczą,</li>
              <li><strong>ograniczenia celu</strong> — dane zbierane są w konkretnych, wyraźnych i prawnie uzasadnionych celach,</li>
              <li><strong>minimalizacji danych</strong> — zakres zbieranych danych jest adekwatny do celu ich przetwarzania,</li>
              <li><strong>prawidłowości</strong> — dane są aktualizowane, a nieprawidłowe dane niezwłocznie korygowane,</li>
              <li><strong>ograniczenia przechowywania</strong> — dane przechowywane są nie dłużej, niż jest to niezbędne,</li>
              <li><strong>integralności i poufności</strong> — dane są odpowiednio zabezpieczone technicznie i organizacyjnie,</li>
              <li><strong>rozliczalności</strong> — Administrator jest w stanie wykazać zgodność przetwarzania z RODO.</li>
            </ul>

            <h2 id="cele">4. Cele, podstawy prawne i okres przechowywania danych</h2>
            <p>Dane osobowe przetwarzane są w następujących celach:</p>

            <div className="table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Cel przetwarzania</th>
                  <th>Podstawa prawna</th>
                  <th>Okres przechowywania</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rozpatrzenie wniosku o członkostwo i prowadzenie ewidencji członków Towarzystwa</td>
                  <td>Art. 6 ust. 1 lit. b i c RODO — działania przed zawarciem oraz wykonanie stosunku członkostwa, obowiązki wynikające z ustawy Prawo o stowarzyszeniach</td>
                  <td>Przez okres członkostwa oraz 5 lat po jego ustaniu (cele archiwalne i rozliczeniowe)</td>
                </tr>
                <tr>
                  <td>Obsługa zapytań kierowanych drogą mailową</td>
                  <td>Art. 6 ust. 1 lit. a i f RODO — zgoda oraz prawnie uzasadniony interes Administratora (udzielenie odpowiedzi)</td>
                  <td>Do 12 miesięcy od zakończenia korespondencji</td>
                </tr>
                <tr>
                  <td>Wysyłka newslettera i informacji o wydarzeniach Towarzystwa</td>
                  <td>Art. 6 ust. 1 lit. a RODO — zgoda osoby, której dane dotyczą</td>
                  <td>Do czasu wycofania zgody</td>
                </tr>
                <tr>
                  <td>Organizacja szkoleń, konferencji i wydarzeń branżowych</td>
                  <td>Art. 6 ust. 1 lit. b i f RODO — wykonanie umowy uczestnictwa, prawnie uzasadniony interes Administratora</td>
                  <td>Do 3 lat od zakończenia wydarzenia</td>
                </tr>
                <tr>
                  <td>Prowadzenie ksiąg rachunkowych i rozliczanie składek członkowskich</td>
                  <td>Art. 6 ust. 1 lit. c RODO — obowiązek prawny wynikający z przepisów o rachunkowości i prawa podatkowego</td>
                  <td>5 lat licząc od końca roku podatkowego, którego dane dotyczą</td>
                </tr>
                <tr>
                  <td>Dochodzenie i obrona przed roszczeniami</td>
                  <td>Art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes Administratora</td>
                  <td>Do przedawnienia ewentualnych roszczeń</td>
                </tr>
                <tr>
                  <td>Analiza ruchu na stronie internetowej (statystyki, cookies analityczne)</td>
                  <td>Art. 6 ust. 1 lit. a RODO — zgoda wyrażona za pośrednictwem bannera cookies</td>
                  <td>Do 24 miesięcy lub do wycofania zgody</td>
                </tr>
              </tbody>
            </table>
            </div>

            <div className="callout">
              Dane osobowe dotyczące zdrowia, jeśli są przekazywane Administratorowi przez
              członków w związku z działalnością statutową (np. korespondencja dotycząca
              spraw zawodowych), traktowane są jako szczególna kategoria danych w rozumieniu
              art. 9 RODO i przetwarzane wyłącznie w zakresie i celu, w jakim zostały
              dobrowolnie ujawnione, z zachowaniem podwyższonych standardów bezpieczeństwa.
            </div>

            <h2 id="odbiorcy">5. Odbiorcy danych osobowych</h2>
            <p>Dane osobowe mogą być udostępniane następującym kategoriom odbiorców, wyłącznie w zakresie niezbędnym do realizacji wskazanych celów:</p>
            <ul>
              <li>podmioty świadczące usługi IT, hostingowe i utrzymania systemów informatycznych Administratora,</li>
              <li>podmioty świadczące usługi księgowe, prawne i doradcze na rzecz Towarzystwa,</li>
              <li>operatorzy płatności obsługujący składki członkowskie i opłaty za wydarzenia,</li>
              <li>dostawcy usług mailingowych realizujący wysyłkę newslettera (na podstawie zgody),</li>
              <li>organy publiczne uprawnione do otrzymania danych na podstawie obowiązujących przepisów prawa.</li>
            </ul>
            <p>
              Wszystkie podmioty przetwarzające dane w imieniu Administratora działają na podstawie
              zawartych umów powierzenia przetwarzania danych osobowych i są zobowiązane do
              zapewnienia odpowiedniego poziomu bezpieczeństwa danych.
            </p>

            <h2 id="przekazywanie">6. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
            <p>
              Co do zasady dane osobowe nie są przekazywane poza Europejski Obszar Gospodarczy (EOG).
              Jeżeli w związku z korzystaniem z wybranych narzędzi (np. usług dostawców poczty
              elektronicznej lub platform szkoleniowych) dojdzie do takiego przekazania, odbywać
              się to będzie wyłącznie do podmiotów zapewniających odpowiedni stopień ochrony danych,
              w oparciu o decyzję Komisji Europejskiej stwierdzającą odpowiedni poziom ochrony lub
              standardowe klauzule umowne zatwierdzone przez Komisję Europejską.
            </p>

            <h2 id="prawa">7. Prawa osób, których dane dotyczą</h2>
            <p>Każdej osobie, której dane są przetwarzane przez Administratora, przysługuje prawo do:</p>
            <ul>
              <li><strong>dostępu do danych</strong> (art. 15 RODO) — uzyskania informacji o przetwarzanych danych i ich kopii,</li>
              <li><strong>sprostowania danych</strong> (art. 16 RODO) — poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych,</li>
              <li><strong>usunięcia danych</strong> (art. 17 RODO) — tzw. „prawo do bycia zapomnianym”, w przypadkach przewidzianych prawem,</li>
              <li><strong>ograniczenia przetwarzania</strong> (art. 18 RODO),</li>
              <li><strong>przenoszenia danych</strong> (art. 20 RODO) — otrzymania danych w ustrukturyzowanym formacie i przekazania ich innemu administratorowi,</li>
              <li><strong>wniesienia sprzeciwu</strong> (art. 21 RODO) wobec przetwarzania opartego na prawnie uzasadnionym interesie Administratora,</li>
              <li><strong>cofnięcia zgody</strong> w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem,</li>
              <li><strong>wniesienia skargi</strong> do organu nadzorczego — Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa), jeżeli osoba uzna, że przetwarzanie jej danych narusza przepisy RODO.</li>
            </ul>
            <p>
              W celu skorzystania z powyższych praw należy skontaktować się z Administratorem
              lub Inspektorem Ochrony Danych, korzystając z danych kontaktowych wskazanych
              w punktach 1 i 2 niniejszej Polityki.
            </p>

            <h2 id="dobrowolnosc">8. Dobrowolność podania danych</h2>
            <p>
              Podanie danych osobowych jest zawsze dobrowolne, jednak w niektórych przypadkach
              niezbędne do realizacji określonego celu — np. rozpatrzenia wniosku o członkostwo,
              udzielenia odpowiedzi na zapytanie lub rejestracji na wydarzenie. Odmowa podania
              danych może uniemożliwić realizację danej usługi.
            </p>

            <h2 id="zautomatyzowane">9. Zautomatyzowane podejmowanie decyzji i profilowanie</h2>
            <p>
              Administrator nie podejmuje wobec osób, których dane dotyczą, decyzji opierających
              się wyłącznie na zautomatyzowanym przetwarzaniu, w tym profilowaniu, wywołujących
              skutki prawne lub w podobny sposób istotnie na nie wpływających.
            </p>

            <h2 id="pliki-cookies">10. Pliki cookies</h2>
            <p>
              Serwis internetowy Towarzystwa wykorzystuje pliki cookies (tzw. „ciasteczka”),
              czyli niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika.
            </p>
            <div className="table-scroll">
            <table>
              <thead>
                <tr><th>Rodzaj cookies</th><th>Cel</th><th>Podstawa</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>Niezbędne (funkcjonalne)</td>
                  <td>Zapewnienie prawidłowego działania serwisu, w tym zapamiętanie decyzji dotyczącej zgody na cookies</td>
                  <td>Niezbędne do świadczenia usługi — nie wymagają zgody (art. 173 ust. 3 Prawa telekomunikacyjnego)</td>
                </tr>
                <tr>
                  <td>Analityczne</td>
                  <td>Zbieranie zagregowanych statystyk odwiedzin w celu poprawy jakości serwisu</td>
                  <td>Zgoda użytkownika wyrażona poprzez banner cookies</td>
                </tr>
                <tr>
                  <td>Marketingowe</td>
                  <td>Dostosowanie treści i komunikacji do zainteresowań użytkownika (jeśli stosowane)</td>
                  <td>Zgoda użytkownika wyrażona poprzez banner cookies</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p>
              Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies za
              pomocą ustawień swojej przeglądarki internetowej, w tym usunąć zapisane pliki
              cookies oraz zablokować ich zapisywanie w przyszłości. Ograniczenie stosowania
              plików cookies może wpłynąć na niektóre funkcjonalności dostępne w serwisie.
            </p>

            <h2 id="bezpieczenstwo">11. Bezpieczeństwo danych</h2>
            <p>
              Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające
              bezpieczeństwo przetwarzanych danych osobowych, w tym ochronę przed niedozwolonym
              lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą, zniszczeniem lub
              uszkodzeniem, w szczególności poprzez: szyfrowanie transmisji danych (protokół HTTPS),
              kontrolę dostępu do systemów informatycznych, regularne aktualizacje zabezpieczeń
              oraz szkolenia personelu z zakresu ochrony danych osobowych.
            </p>

            <h2 id="privacy-by-design">12. Prywatność w fazie projektowania (privacy by design)</h2>
            <p>
              Zgodnie z art. 25 RODO, projektując i rozwijając serwis internetowy oraz wewnętrzne
              narzędzia komunikacji, Administrator uwzględnia ochronę danych osobowych już na etapie
              planowania, a domyślne ustawienia serwisu (np. bannera cookies) są ustawione w sposób
              najmniej ingerujący w prywatność użytkownika.
            </p>
            <p>
              Narzędzia wykorzystywane wewnętrznie przez pracowników Biura Zarządu Głównego do
              bieżącej komunikacji (np. komunikator zespołowy) podlegają odrębnej ocenie zgodności
              z RODO przed wdrożeniem produkcyjnym, obejmującej w szczególności miejsce przechowywania
              danych (docelowo serwery w Europejskim Obszarze Gospodarczym), zawarcie umowy
              powierzenia przetwarzania danych z dostawcą usługi oraz ograniczenie dostępu wyłącznie
              do upoważnionych pracowników. Widoczny w serwisie przycisk czatu pracowniczego jest
              obecnie wersją demonstracyjną szablonu strony i nie przetwarza żadnych rzeczywistych
              danych osobowych — wpisywane w nim wiadomości pozostają lokalnie w przeglądarce
              użytkownika i nie są nigdzie przesyłane.
            </p>

            <h2 id="rejestr">13. Rejestr czynności przetwarzania</h2>
            <p>
              Administrator prowadzi rejestr czynności przetwarzania danych osobowych zgodnie
              z art. 30 RODO, obejmujący m.in. cele przetwarzania, kategorie osób i danych,
              kategorie odbiorców oraz planowane terminy usunięcia poszczególnych kategorii danych.
              Rejestr jest dokumentem wewnętrznym i udostępniany jest na żądanie organu nadzorczego.
            </p>

            <h2 id="zmiany">14. Zmiany Polityki Prywatności</h2>
            <p>
              Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce
              Prywatności, w szczególności w związku ze zmianami przepisów prawa lub rozwojem
              funkcjonalności serwisu. Aktualna wersja Polityki jest zawsze dostępna na niniejszej
              stronie wraz z datą jej ostatniej aktualizacji.
            </p>

            <h2 id="kontakt-rodo">15. Kontakt w sprawach ochrony danych</h2>
            <p>
              Wszelkie pytania, wnioski oraz zgłoszenia dotyczące przetwarzania danych osobowych
              prosimy kierować do Inspektora Ochrony Danych na adres
              <a href="mailto:iod@ptlgk-przyklad.pl">iod@ptlgk-przyklad.pl</a> lub listownie na adres
              siedziby Administratora z dopiskiem „Ochrona danych osobowych”.
            </p>

          </article>
        </div>
      </div>
    </section>
  );
}
