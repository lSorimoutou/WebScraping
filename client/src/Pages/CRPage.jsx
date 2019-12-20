import React from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Grid from '@material-ui/core/Grid';

import Figure from "./img/Figure.PNG";
import Diag from './img/Activity diagram 1.png'

import { push as Menu } from 'react-burger-menu';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faChartBar,
  faCheckSquare,
  faCaretSquareUp,
  faBookmark,
  faWindowClose
} from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";

export default class CRPage extends React.Component {

    render(){
    const codeHTML = `<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
    </div>
</body>`

    return (
      <div>
        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"}>
          {[
            { title: "Introduction", icon: faFileAlt },
            {
              title: "I.Fonctionnement de l'application",
              icon: faChartBar
            },
            { title: "II.Choix mise en oeuvre ", icon: faCheckSquare },
            { title: "III.Les données récupérer ", icon: faCaretSquareUp },
            { title: "IV. Limites du projet", icon: faWindowClose },
            { title: "V.Sources", icon: faBookmark }
          ].map((obj, index) => (
            <Link
              to={`${index}`}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="sideBarLink"
              key={index}
            >
              {/* eslint-disable-next-line */}
              <a className="menu-item">
                <FontAwesomeIcon icon={obj.icon} />
                <span>{obj.title}</span>
              </a>
            </Link>
          ))}
        </Menu>
        <main id="page-wrap">
          <Container>
            <div className="header">
              <Container maxWidth="lg">
                <h2 className="title">Compte-Rendu</h2>
                <span className="subTitle">
                  Sorimoutou Lénaïck L3 Informatique
                </span>
              </Container>
            </div>
            <div className="body">
              <Container maxWidth="lg">
                <section id="0">
                  <hr data-content="Introduction" class="hr-text"></hr>
                  <p>
                    Le projet consistait à fabriquer{" "}
                    <strong>une application de Web scraping</strong> sur un site
                    de e-commerce afin de récupérer des informations sur des
                    produits de consommation courante. Dans le cadre de mon
                    projet, j’ai décidé de choisir le site marchand{" "}
                    <strong>monoprix</strong>.
                  </p>
                </section>
                <section id="1">
                  <hr
                    data-content="I. FONCTIONNEMENT DE L’APPLICATION"
                    class="hr-text"
                  ></hr>
                  <p>
                    La conception de l'application web a été réalisé avec divers
                    langages de programmation. L'affichage a été réalisé avec{" "}
                    <strong>HTML, SASS et JavaScript. </strong>
                    Le Web Scraping est réalisé avec <strong>Java</strong>. La
                    liaison entre les deux langages de programmation se fait via Tyrus,
                    une java API open source pour les WebSockets.
                  </p>
                  <p>
                    Pour débuter la recherche de produit, on utilise la barre de
                    recherche sur la page web. Après avoir validé la recherche,
                    le nom du produit entré sera envoyé à l'api Java.
                    {" "}<strong>Pour pouvoir accéder aux informations d'un produit </strong>vous devez cliquer sur la photo du produit.
                  </p>
                  <p>
                    Le web scraping se fait avec les bibliothèques{" "}
                    <strong>sélénium</strong> et <strong>Jsoup</strong>. Les
                    données extraites proviennent du site marchand monoprix.
                    Elles sont transmises aux clients en format JSON grâce à la
                    bibliothèque <strong>Gson</strong>, permettant de convertir
                    un objet java en string JSON. Le diagramme d'activité
                    suivant résume le fonctionnement de l'application web.
                  </p>
                  <span className="imgSubTitle">
                    Diagramme d'activité de l'application web
                  </span>
                  <img
                    src={Diag}
                    alt="Diagramme d'activité de l'application"
                    className="Diag"
                  />
                </section>
                <section id="2">
                  <hr
                    data-content="II. CHOIX MISE EN ŒUVRE "
                    class="hr-text"
                  ></hr>
                  <p>
                    Dans cette partie, nous allons détailler les choix mise en
                    œuvre pour la conception de l’application web. Pour ce
                    faire, la partie sera divisé en deux sous parties. La
                    première détaillera les choix fait dans la partie
                    Front-End(côté client avec Javascript) de l’application. La
                    seconde partie détaillera les choix de la partie
                    Back-End(côté serveur avec Java).
                  </p>
                  <h4>1. Front-End</h4>
                  <hr class="dashed"></hr>
                  <h5>A. React</h5>
                  <p>
                    La partie front-end est réalisé avec la bibliothèque
                    JavaScript React. Il s'agit d'une bibliothèque développée
                    par Facebook afin de faciliter la création d'application web
                    via la création de composant autonomes qui maintiennent leur
                    propre état. J'ai choisi d'utiliser cette bibliothèque afin
                    de facilité la conception de la partie front-end.
                  </p>
                  <h6>a) Fonctionnement de React dans le projet</h6>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <p>
                        C’est dans le fichier index.js que React injecte le HTML
                        (généré par React) dans le fichier index.html à
                        l’intérieur du div d’identifiant « root ».
                      </p>
                      <p>
                        <strong>react-dom</strong> : Module fournissant des
                        méthodes spécifiques au DOM. En important ce module, on
                        a accès à divers méthode comme render().
                        <br />
                        <br />
                        <strong>ReactDom.render() </strong> : Permet l’affichage
                        d’un élément React au sein du nœud DOM. Cette méthode
                        prend deux paramètres :
                      </p>
                      <ul>
                        <li>L’élément qui sera injecté</li>
                        <li>
                          Un second élément où l’on va injecter le première
                          élément
                        </li>
                      </ul>
                      <p>
                        Ici nous avons spécifié {"<App />"}, comme élément a
                        injecté et document.getElementById('root') comme second
                        élément. Si l’élément React était déjà affiché dans
                        container, cette méthode effectuera une mise à jour du
                        nœud.
                      </p>
                      <p>
                        Lors de la mise à jour, React DOM compare l’élément et
                        ses enfants avec la version précédente, et applique
                        uniquement les mises à jour DOM nécessaires.
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <SyntaxHighlighter
                        language="jsx"
                        style={tomorrow}
                        showLineNumbers
                      >
                        {`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';import App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\nserviceWorker.unregister();`}
                      </SyntaxHighlighter>
                      <SyntaxHighlighter
                        language="html"
                        style={tomorrow}
                        showLineNumbers
                      >
                        {codeHTML}
                      </SyntaxHighlighter>
                    </Grid>
                  </Grid>
                  <h6>b) Utilisation de JSX</h6>
                  <p>
                    Dans le projet, j’ai utilisé la syntaxe JSX afin de facilité
                    mon utilisation de React. JSX est une extension syntaxique
                    de JavaScript uniquement là pour faciliter l’expérience de
                    développement.
                  </p>
                  <h6>c) Hiérarchie des composants</h6>
                  <p>
                    Avec React, la page peut être subdivisé en plusieurs
                    composants. Voici une représentation de la hiérarchie
                    d’utilisation des composants de l'application :
                  </p>
                  <span className="imgSubTitle">
                    Hiérarchie d’utilisation des composants
                  </span>
                  <img
                    src={Figure}
                    className="figure"
                    alt="hiérarchie d’utilisation des composants"
                  />
                  <p>
                    <strong>App est la composante mère</strong>, c'est la
                    composante qui sera injectée au sein du nœud DOM. À
                    l'intérieur du composant, on retrouve HomePage, CRPage et
                    SearchAppBar. SearchAppBar est la{" "}
                    <strong>barre de l'application</strong> composée du nom de
                    l'application, une barre de recherche et des buttons
                    permettant la navigation entre les différentes pages.
                  </p>
                  <h5>B. MATERIAL UI</h5>
                  <p>
                    <strong>Material UI</strong> est un ensemble de composants
                    React permettant le développement web rapide et simple. Avec
                    Material UI, j'ai pu gérer la partie « design » de
                    l'application web. Les principaux composants de Material UI
                    utilisés dans le projet sont :
                  </p>
                  <ul>
                    <li>
                      Barre d'application avec champ de recherche principal
                    </li>
                    <li>
                      Barre de chargement circulaire (pour indiquer à
                      l'utilisateur que l'application traite sa demande)
                    </li>
                  </ul>
                  <h5>C. REACT BOOTSTRAP</h5>
                  <p>
                    <strong>Bootstrap</strong> est une collection d'outils
                    utiles à la création du design de site. Un peu comme
                    Material UI, React Boostrap est un ensemble de composants
                    React permettant le développement web. Les composants ont
                    étés créés à partir de la collection d'outils Bootstrap.
                  </p>
                  <h5>D. SASS</h5>
                  <p>
                    Les feuilles de style sont générées dynamiquement avec le
                    langage Sass. La syntaxe SCSS a été choisi, car elle est
                    assez similaire au Css. J'ai choisi de faire mes feuilles de
                    styles en Sass juste par pure curiosité pour ce langage qui
                    fait parler de lui.
                  </p>
                  <h4>2. Back-End</h4>
                  <hr class="dashed"></hr>
                  <h5>A. LE WEBSCRAPING DU MONOPRIX</h5>
                  <h6>a) Web scraping statique et dynamique</h6>
                  <p>
                    Une page web statique est une page dont le contenu ne varie
                    pas dynamiquement. À l'inverse, une page web dynamique, est
                    une page web dont le contenu est généré à la demande.
                    Souvent c'est l'exécution de script JavaScript qui
                    permettent l'aspect dynamique d'une page web. Dans notre
                    cas, le site de monoprix est une page web dynamique, il est
                    donc impossible d'utiliser des bibliothèques de webscraping
                    tel que Jsoup sur la page. Nous sommes dans l'obligation
                    d'utiliser des outils de web scraping dynamique tel que html
                    unit ou encore sélénium. Sélénium a été choisi au profit de
                    html unit qui ne fonctionne pas très bien avec le JavaScript
                    de la page web.
                  </p>
                  <h5>B. WEBSCRAPING AVEC SELENIUM</h5>
                  <p>
                    Le web Scraping est réalisé dans la partie Java par le biais
                    de la bibliothèque Selenium. 
                    Il s'agit d'un framework de test
                    informatique développée en Java pour le test automatisé
                    d'applications Web. Mais, nous pouvons aussi l'utiliser pour
                    faire du Web Scraping. Effectivement, il est possible de
                    rechercher assez facilement des éléments d'une page web avec
                    son <strong>xpath</strong> (langage de requête pour
                    localiser une portion d'un document XML) et il est aussi
                    capable <strong>d'extraire les données stockées</strong>{" "}
                    dans ces différents éléments.
                  </p>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <p>
                        Ici par exemple, on recherche un élément div possédant
                        la classe « catalog-page__statistic ». Ce div contient
                        le nombre de produit trouvé sur le site marchand. Si ce
                        nombre est égal à 0, pas besoin de faire de recherche,
                        on arrête le programme et on envoie un message au
                        JavaScrpit pour lui dire qu'on n'a rien trouvé.
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <SyntaxHighlighter
                        language="java"
                        style={tomorrow}
                        showLineNumbers
                      >
                        {`// search the number of goods\nString nbArt = driver.findElement(By.cssSelector("div.catalog-page__statistic")).getText();`}
                      </SyntaxHighlighter>
                    </Grid>
                  </Grid>
                  <p>
                    Dans notre projet, nous allons simplement utiliser
                    le framework pour exécuté les scripts JavaScript de la page
                    et ainsi chargé les données. 
                  </p>
                  <h6>a) Le problème du « lazy-loading »</h6>
                  <p>
                    Le « lazy-loading » (“chargement fainéant” en français)
                    consiste à spécifier quels composants d’un programme doivent
                    être chargés lors du démarrage de celui-ci. Par défaut,
                    quand on demande à un navigateur d'afficher une page web,
                    cette dernière charge toutes les ressources et donc toutes
                    les images. Ce n'est pas vraiment optimal, c'est pour cela
                    qu'a été inventé le « lazy-loading ». L'image est chargée
                    seulement quand elle est visible sur la page ou utiliser par
                    l'utilisateur.
                  </p>
                  <p>
                    Dans le cas du Web Scraping avec selenium, j'ai été
                    confronté à ce problème. Quand je recherchais le lien de
                    toutes les images de la page, je ne recevais que le lien des
                    images en haut page. Les autres images n'avaient pas encore
                    été chargé.
                  </p>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <p>
                        Pour régler ce problème, on réalise un scroll vers le
                        bas de page et on attend que les images soient chargées.
                      </p>
                    </Grid>
                    <Grid item xs={6}>
                      <SyntaxHighlighter
                        language="java"
                        style={tomorrow}
                        showLineNumbers
                      >
                        {`for(int i = 500; i < 2400 * ((nbProduct / 25) +1); i = i + 500) {\n  JavascriptExecutor jse = (JavascriptExecutor)driver;\n  jse.executeScript("window.scrollTo("+ (i - 500) + "," + i + " )");}`}
                      </SyntaxHighlighter>
                    </Grid>
                  </Grid>
                  <h6>b) Diminué le temps d'éxécution de selenium</h6>
                  <p>
                    Selenium est à l'origine une bibliothèque de teste. Elle
                    permet d'automatiser des tâches sur un browser. Elle possède
                    cependant des méthodes permettant l'extraction de donnée sur
                    certain site. À cause de certains problèmes comme le
                    "lazy-loading" et la gestion de code par JavaScript, je fus
                    obligé d'utiliser cette bibliothèque capable de gérer le
                    Javascript de la page (contrairement à Jsoup que nous
                    verrons plus tard).
                  </p>
                  <p>
                    Selenium est très lent, il faut attendre dans un premier
                    temps le chargement de la page à l'état "complete". Puis, il
                    faut scroller la page vers le bas (pour résoudre le problème
                    du "lazy-loading" des images et pour faire apparaitre tous
                    les produits liée à la recherche).
                  </p>
                  <p>
                    Afin de régler ce problème, nous allons tuer le processus de
                    sélénium dès que possible après avoir obtenu le code HTML
                    final( où toutes les données sont chargées) et ensuite nous
                    analyserons ce code html final avec Jsoup (qui est beaucoup
                    plus rapide et performant que selenium pour le web scraping)
                  </p>
                  <h5>C. UTILISATION DE JSOUP</h5>
                  <p>
                    Dans l'application, on utilise JSOUP afin d'aller chercher
                    les données. On parse le html obtenu en utilisant selenium
                    afin d'optimiser le web scraping.
                    <SyntaxHighlighter
                      language="java"
                      style={tomorrow}
                      showLineNumbers
                    >
                      {`// data mining
String htmlWithJs = driver.findElementByCssSelector("div.cards:nth-child(1)").getAttribute("innerHTML");
// close the selenium browser
driver.quit(); 
Document doc1 = Jsoup.parse(htmlWithJs);
java.util.List<Item> jsonInString = new ArrayList<>();
Elements produits = doc1.select("div.grocery-item");`}
                    </SyntaxHighlighter>
                  </p>
                  <h5>D. UTILISATION DE GSONBUILDER</h5>
                  <p>
                    Les données sont envoyées à JavaScript sous le format Json.
                    Pour convertir un objet java au format JSON, j'ai utilisé la
                    bibliothèque Gson. Gson est une bibliothèque open source
                    développée par Google pour convertir un objet Java dans sa
                    représentation JSON et vice versa.
                  </p>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <p>
                        Dans ce code, on vérifie dans un premier temps si le
                        champs « _jsonInString » est null. Si ce n’est pas le
                        cas, on peut convertir la liste d’objet à l’intérieur en
                        fichier json.
                      </p>
                      <ul>
                        <li>
                          <strong>
                            <a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/GsonBuilder.html#setPrettyPrinting--">
                              setPrettyPrinting()
                            </a>
                          </strong>{" "}
                          : Configure Gson pour sortir un fichier Json qui
                          s'adapte à une page pour une jolie impression.
                        </li>
                        <li>
                          <strong>
                            <a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/GsonBuilder.html#disableHtmlEscaping--">
                              disableHtmlEscaping()
                            </a>
                          </strong>{" "}
                          : Configure Gson pour sortir un fichier Json qui
                          s'adapte à une page pour une jolie impression.
                        </li>
                        <li>
                          <strong>
                            <a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/GsonBuilder.html#create--">
                              create(){" "}
                            </a>
                          </strong>{" "}
                          : Configure Gson pour sortir un fichier Json qui
                          s'adapte à une page pour une jolie impression.
                        </li>
                        <li>
                          <strong>
                            <a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/Gson.html#toJson-java.lang.Object-">
                              toJson(Object O)
                            </a>
                          </strong>{" "}
                          : Configure Gson pour sortir un fichier Json qui
                          s'adapte à une page pour une jolie impression.
                        </li>
                      </ul>
                    </Grid>
                    <Grid item xs={6}>
                      <SyntaxHighlighter
                        language="java"
                        style={tomorrow}
                        showLineNumbers
                      >
                        {`/**
* 
* @return a json file (String) or the string "Nothing"
*/
public String getString(){
    // Convert java Objets to Json 
    if(this._jsonInString != null){
        final GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        builder.disableHtmlEscaping();
        return builder.create().toJson(this._jsonInString);
    }
    else {
        return "Nothing";
    }
        
}`}
                      </SyntaxHighlighter>
                    </Grid>
                  </Grid>
                </section>
                <section id="3">
                  <hr
                    data-content="III. LES DONNÉES RÉCUPÉRER"
                    class="hr-text"
                  ></hr>

                  <p>
                    Pour un produit donnée, les données récupérer par web
                    scraping sont :
                  </p>
                  <ul>
                    <li>Le nom du produit</li>
                    <li>Le poids du produit</li>
                    <li>La photo du produit</li>
                    <li>La marque du produit </li>
                    <li>Les ingrédients </li>
                    <li>La description du produit </li>
                    <li>La valeur énergétique </li>
                    <li>Le prix du produit </li>
                    <li>Le prix unitaire </li>
                  </ul>

                  <p>
                    La gestion du code-barres se fait uniquement avec le
                    JavaScript. À l'aide d'une expression régulière, on vérifie
                    si la chaîne de caractère entrée dans l'input est un
                    code-barre. Si c'est le cas, on fait un fetch vers la page :
                    <br/>
                    "https://world.openfoodfacts.org/api/v0/product/" +
                    code-barre+ ".json".
                    <br />
                    Afin de récupérer les informations du produit au format json.
                  </p>
                </section>
                <section id="4">
                  <hr data-content="IV. LIMITES DU PROJET" class="hr-text"></hr>
                  <p>
                    Le nombre de produits envoyé par le serveur java est
                    limité à 72. En effet, à cause du problème d'efficacité
                    parler plus tôt, j'ai été obligé de limiter le nombre de
                    produits envoyé par le serveur. Ainsi, l'attente entre
                    chaque recherche de produit reste raisonnable.
                  </p>
                  <p>
                    Dans de rares cas, les images ne sont pas chargées par sélénium. Dans ce cas-là, 
                    une image par défaut apparaîtra pour informer l'utilisateur que l'image n'a pas été charger. 
                  </p>
                  <p>
                    Quelques fois l'api java ne trouve aucun produit, alors que la recherche sur le site trouve bien des produits. 
                    Dans ce cas de figure, il faut relancer la recherche ou recharger la page.
                  </p>
                </section>
                <section id="5">
                  <hr data-content="V. SOURCES" class="hr-text"></hr>
                  <p>
                    Les informations présentées peuvent être complétées par les
                    références des sites internet qui suivent
                  </p>
                  <h5>FONCTIONNEMENT DE L’APPLICATION</h5>
                  <hr class="dashed"></hr>
                  <ul>
                    <li>
                      Modelio : Docs de Modelio <br />{" "}
                      <a href="https://www.modelio.org/documentation-menu/tutorials.html">
                        https://www.modelio.org/documentation-menu/tutorials.html
                      </a>
                    </li>
                  </ul>
                  <h5>CHOIX MISE EN ŒUVRE</h5>
                  <hr class="dashed"></hr>
                  <ul>
                    <li>
                      React : Documentation de React <br />{" "}
                      <a href="https://fr.reactjs.org/docs/getting-started.html">
                        https://fr.reactjs.org/docs/getting-started.html
                      </a>
                    </li>
                    <li>
                      Material UI : Site officiel de Material UI <br />{" "}
                      <a href="https://material-ui.com/">
                        https://material-ui.com/
                      </a>
                    </li>
                    <li>
                      SASS: Documentation de SASS
                      <br />{" "}
                      <a href="https://sass-lang.com/guide">
                        https://sass-lang.com/guide
                      </a>
                    </li>
                    <li>
                      Wikipedia : Selenium
                      <br />{" "}
                      <a href="https://fr.wikipedia.org/wiki/Selenium_(informatique)">
                        https://fr.wikipedia.org/wiki/Selenium_(informatique)
                      </a>
                    </li>
                    <li>
                      BDM : Lazy-loading natif <br />{" "}
                      <a href="https://www.blogdumoderateur.com/lazy-loading-chrome-firefox-natif/">
                        https://www.blogdumoderateur.com/lazy-loading-chrome-firefox-natif/
                      </a>
                    </li>
                    <li>
                      1min30 : Lazy loading (informatique et web) <br />{" "}
                      <a href="https://www.1min30.com/dictionnaire-du-web/lazy-loading-informatique-et-web">
                        https://www.1min30.com/dictionnaire-du-web/lazy-loading-informatique-et-web/
                      </a>
                    </li>
                    <li>
                      GsonBuilder : java doc de GsonBuilder <br />{" "}
                      <a href="https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/GsonBuilder.html">
                        https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/GsonBuilder.html
                      </a>
                    </li>
                    <li>
                      Gson : java doc de Gson <br />{" "}
                      <a href="https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/Gson.html">
                        https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/Gson.html
                      </a>
                    </li>
                    <li>
                      Jsoup : java doc de Jsoup <br />{" "}
                      <a href="https://jsoup.org/apidocs/overview-summary.html">
                        https://jsoup.org/apidocs/overview-summary.html
                      </a>
                    </li>
                    <li>
                      React Bootstrap : Site officiel de React Boostrap <br />{" "}
                      <a href="https://react-bootstrap.github.io/">
                        https://react-bootstrap.github.io/
                      </a>
                    </li>
                    <li>
                      Project Tyrus : Java API for WebSocket <br />{" "}
                      <a href="https://tyrus-project.github.io/">
                        https://tyrus-project.github.io/
                      </a>
                    </li>
                    
                  </ul>
                </section>
              </Container>
            </div>
          </Container>
        </main>
      </div>
    );
    }
  }

