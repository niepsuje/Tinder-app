        Commit 1: 
        "1. Strting project. Pages and routing in React"



1.Twożę bazę MongoDB https://www.mongodb.com/atlas?utm_campaign=ania_kubow&utm_source=youtube&utm_medium=influencers&utm_term=atlas&utm_content=tinder_clone
- użytkownik i wiadomości 
    Chcemy wczytać te dane z naszej aplikacji

2.Usuwam niepotrzebne pliki logo, css i testowe

3.Ustawiam plik package.json na odpowiednią wersję Reacta

4.Tworzę podstrony: Home, Dashboard, Onboarding

5.npm i react-router-dom

6.Twożę end-pointy Home, Dashboard, OnBoarding

7.Rozwiązanie błędu -> Zmieniłem plik index.js żeby pasował do starszej wersji Reacta




        Commit 2:
        "Homepage UI"


1. css dla najwaniejszych UI

2. homepage

3. logo

4. nav bar + css





        Commit 3:
        "AuthModal UI"

1. Nowy plik w components - AuthModal.js

2. Będziemy mieć przycisk który otwiera AuthModal na podstawie warunków

3. w Homepage będziemy uzywać useState zeby ZAPISAĆ stan czy modal jest pokazywany, czy nie:
    -> definuje model
    -> ustawiam zmianę pokazywania modelu

4. Zmiana pokazywania modelu następuje po kliknięciu z przyciski

5. Muszę przesłać setShowModal do środka modalu
    Home.js        
            {showModal && (
                <AuthModal setShowModal={setShowModal}/>
            )}

    AuthModal.js
            const AuthModal = ({ setShowModal }) => {....}

    -> Jeśli showModal jest prawdą to pokaz  mi AuthModal
    -> setShowModal={setShowModal} 
        - pozwoli nam ustwaiać stan w innym komponencie czyli w AM
        - odbierzemy stan modalu w AM

6. css dla auth-modal





        Commit 4:
        "AuthModal UI (2)"

7. Przesyłamy równiez setShowModal do komponentu Nav
    Home.js
            <Nav minimal={false} authToken={authToken} setShowModal={setShowModal}/>
    Nav.js
            const Nav = ({ minimal, authToken, setShowModal}) => {...}
    
    -> dodaje w Nav.js onClick w przycisku "Log in" i ustawiam go na setShowModal(true)
    -> dzięki temu moge włączyć modal klikając "Log in" lub CREATE ACCOUNT
    -> a zamykam modal zawsze za pomocą "ⓧ"

8. Blokuję przycisk "Log in", żeby nie działał kiedy mam już modal i chcę wpisywać dane 

    -> do przycisku "Log in" dodaje disabled={showModal}
    -> żeby to zadziałało musze wysłać showModal z Home.js z <Nav>
    -> dodaje css .nav-button:disabled

9. Modal - Dam możliwość wpisania się osobą które do tej pory się nie wpisały, albo możliwość zalogowania się ponownie

    -> użytkownik będzie wierał czy jest nowym użytkownikiem czy tylko sie loguje 

10. handleSubmit zapobiega automatycznemu odświerzaniu, chemy pozostać na stronie

11. Dodaje <inputy> + przycisk + css

12. Wysyłam komunikat jeśli hasło nie jest takie samo - "zrób coś z tym!"

13. GET THE APP + css

14. try -> dodaje do handleSubmit
    -> "popraw hasło", lub
    -> robimy zaczątek do "logujesz się do bazy danych"
    -> to będzie zalżało od tego czy isSignUp = true/false

15 musimy wybrać czy się logujemy czy rejetrujemy bo AuthModal będzie wyglądał wtedy inaczej
    -> rejetracja = email + 2x password
    -> login in = email + 1x password
    -> użyjemy isSignUp przy inpucie potweirdzenia hasła







        Commit 5:
        "AuthModal UI (3)"

16. Kiedy nacisnę "CREATE ACCOUNT" chcę mieć inny AuthModal niż jak nacisnę "Log in"
    -> czyli kliknę na przycisk "Log in" ustawiam setIsSignUp=false, ponieważ się logujemy
    -> Ustawiam przesyłanie isSignUp do AuthModal.js i ustawiam isSignUp w Home.js bazowo na true

    -> dla przycisku "CREATE ACCOUNT" pod handleClick ustawiam setIsSignUp=true







        Commit 6:
        "AuthModal UI (4)"

17. Dodanie zdjęcia tła.
    -> w css używam adresu url

18. ustawiam czcionkę dla napisu "Swipe Right@" - .primary-title






        Commit 7:
        "OnBoarding (1)"

1. Tworzę szkielet sekcje formulaża dla wprowadzania danych użytkownika
    -> imię
    -> płeć
    -> pokaż płeć
    -> about mieć
    -> profil
    -> zdjęcia

2. przycisk "submit" - prześlij






        Commit 8:
        "OnBoarding (2)"

3. stylowanie w pliku css
    -> nowa sekcja
    -> chcę żeby sekcje "onboarding" pojawiały się obok siebie
    -> flex-direction: column - w każdej z tych sekcji
    -> odstępy





        Commit 9:
        "OnBoarding (3)"

4. przechowywanie danych - useState
    -> formData, setFormData 

5. Aby zapisać nową .valu i .name używam setFormData
    -> pobieram cały poprzedniStan
    -> teraz aktuaizuje jedną z informacji - [name] : value

6. Teraz mogę zminić wartości w formulażu 
    -> value={formData.first_name} itd.

7. console loguje formData żeby sprawdzić czy dane są zapisywane





        Commit 10:
        "OnBoarding (4)"

8. Przypisanie formData do inputów typu "radio"

9. Pod "Profile Profile" można wkleić link do zdjęci a i wyświetli się pod spodem






        Commit 11:
        "Dashboard UI"

1. Robię nową stronę Dashboard UI - przeciąganie osób w prawo/lewo

2. Instaluję gotowe rozwiązanie "card" z githuba
    -> https://github.com/3DJakob/react-tinder-card-demo/blob/master/src/App.css
    -> npm i react-tinder-card
    -> npm install --save @react-spring/web@9.5.5

3. kopiuję css dotyczące "card"






        Commit 12:
        "Dashboard UI (2)"

4. Dodanie informacji tekstowej w którą stronę zostało przesunięte zdjęcie






        Commit 13:
        "Dashboard UI (3)"

5. css

6. Nowy plik ChatCointainer.js 

7. css 
    -> .dashboard .swipe-container
    -> .dashboard .card-container
    -> .dashboard .swipe-info
    -> .card h3






        Commit 14:
        "ChatContainer UI (1)"

1. Nowe pliki komponentów dla ChatContainer.js
    -> ChatHeader.js
    -> MatchesDisplay.js
    -> ChatDisplay.js
![[Zrzut ekranu 2023-08-29 o 14.04.40.png]]


2. PRZENOSZĘ NOTAKI DO FOLDERU notatki-obsidian
    -> TINDER-app.md
    -> zmieniam formę prowadzenia notatek z .txt na .md
    -> można je będzie otworzyć w programie obsidian
    -> będę mógł swobodnie wrzucać screany z aktualnych postępów






        Commit 14:
        "ChatContainer UI (1)"

3. Uzupełniam komponenty: atrybuty, komponenty

4. Dodaje jeszcze dwa komponenty do komponentu ChatDisplay.js
	-> Chat.js   -  historia rozmowy
	-> ChatInput  -  pole wprowadzania treści
    -> ![[Zrzut ekranu 2023-08-29 o 16.05.26.png]]
	    -> oczywiście nie chcemy pokazywać tych komponentów w tym samym czasie


