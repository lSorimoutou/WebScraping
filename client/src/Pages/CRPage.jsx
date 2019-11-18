import React from 'react';

import Container from '@material-ui/core/Container';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Grid from '@material-ui/core/Grid';

import Figure from "./img/Figure.PNG";
import Diag from './img/Activity diagram 1.png'

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { Link } from "react-scroll";

const drawerWidth = 340;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
}));

export default function CRPage() {
    const classes = useStyles();
    const codeHTML = `<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
    </div>
</body>`

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.toolbar} />
                <List>
                    {['Introduction', 'I.FONCTIONNEMENT GLOBAL DE L’APPLICATION WEB', 'II.CHOIX MISE EN ŒUVRE ', 'III. LES DONNÉES RÉCUPÉRER ', 'IV. SOURCES'].map((text, index) => (
                        <Link 
                            to={`${index}`} 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="sideBarLink"
                        >
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className="header">
                    <Container maxWidth="lg">
                        <h2 className="title">Compte-Rendu</h2>
                        <span className="subTitle">Sorimoutou Lénaïck L3 Informatique</span>
                    </Container>
                </div>
                <div className="body">
                    <Container maxWidth="lg">
                        <section id="0">
                            <h3>Introduction</h3>
                            <p>
                                Le projet consistait à fabriquer <strong>une application de Web scraping</strong> sur
                                un site de e-commerce afin de récupérer des informations sur des produits
                                de consommation courante. Dans le cadre de mon projet,
                                j’ai décidé de choisir le site marchand <strong>monoprix</strong>.
                            </p>
                            <hr />
                        </section>
                        <section id="1">
                            <h3>I.	FONCTIONNEMENT GLOBAL DE L’APPLICATION WEB</h3>
                            <p>
                                La conception de l'application web a été réalisé avec deux langages de programmation.
                                L'affichage a été réalisé avec <strong>HTML, SASS et JavaScript.</strong>
                                Le Web Scraping est réalisé avec <strong>Java</strong>.
                                La liaison entre les deux langages de programmation se fait via un WebSocket.
                            </p>
                            <p>
                                Pour débuter la recherche de produit, on utilise la barre de recherche
                                sur la page web. Après avoir validé la recherche, le nom du produit entré 
                                sera envoyé à l'api Java.
                            </p>
                            <p>
                                Par le biais de la bibliothèque <strong>sélénium</strong>, on va extraire les données du site marchand
                                monoprix. Java va ensuite crée un objet avec toutes
                                les informations scraper, puis en utilisant la bibliothèque <strong>Gson</strong>, on convertit l'objet au
                                format json et on l'envoie au client (JavaScript).
                                Le diagramme d'activité suivant résume le fonctionnement de l'application web.
                            </p>
                            <span className="imgSubTitle">Diagramme d'activité de l'application web</span>
                            <img src={Diag} alt="Diagramme d'activité de l'application" className="Diag"/>
                            <hr />
                        </section>
                        <section id="2">
                            <h3>II.	CHOIX MISE EN ŒUVRE </h3>
                            <p>
                                Dans cette partie, nous allons détailler les choix mise en œuvre pour la conception de
                                l’application web. Pour ce faire, la partie sera divisé en deux sous parties. La première
                                détaillera les choix fait dans la partie Front-End(côté client avec Javascript) de l’application.
                                La seconde partie détaillera les choix de la partie Back-End(côté serveur avec Java).
                            </p>
                            <h4>1. Front-End</h4>
                            <h5>A. React</h5>
                            <p>
                                La partie front-end est réalisé avec la bibliothèque JavaScript React.
                                Il s'agit d'une bibliothèque développée par Facebook afin de faciliter la création d'application
                                web via la création de composant autonomes qui maintiennent leur propre état.
                                J'ai choisi d'utiliser cette bibliothèque afin de facilité la conception de la partie front-end.
                            </p>
                            <h6>a) Fonctionnement de React dans le projet</h6>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <p>
                                        C’est dans le fichier index.js que React injecte le HTML (généré par React)
                                        dans le fichier index.html à l’intérieur du div d’identifiant « root ».
                                    </p>
                                    <p>
                                        <strong>react-dom</strong> : Module fournissant des méthodes spécifiques au DOM. En important ce module, on a accès à divers méthode comme render().<br /><br />
                                        <strong>ReactDom.render() </strong> : Permet l’affichage d’un élément React au sein du nœud DOM. Cette méthode prend deux paramètres :
                                    </p>
                                    <ul>
                                        <li>L’élément qui sera injecté</li>
                                        <li>Un second élément où l’on va injecter le première élément</li>
                                    </ul>
                                    <p>
                                        Ici nous avons spécifié {'<App />'}, comme élément a injecté et document.getElementById('root') comme second élément.
                                        Si l’élément React était déjà affiché dans container, cette méthode effectuera une mise à jour du nœud.
                                    </p>
                                    <p>
                                        Lors de la mise à jour, React DOM compare l’élément et ses enfants avec la version précédente, et applique uniquement les mises à jour DOM nécessaires.
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
                                        {`import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';import App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(<App />, document.getElementById('root'));\nserviceWorker.unregister();`}
                                    </SyntaxHighlighter>
                                    <SyntaxHighlighter language="html" style={tomorrow} showLineNumbers>
                                        {codeHTML}
                                    </SyntaxHighlighter>
                                </Grid>
                            </Grid>
                            <h6>b)	Utilisation de JSX</h6>
                            <p>
                                Dans le projet, j’ai utilisé la syntaxe JSX
                                afin de facilité mon utilisation de React. JSX est une
                                extension syntaxique de JavaScript uniquement là pour
                                faciliter l’expérience de développement.
                            </p>
                            <h6>c)	Hiérarchie des composants</h6>
                            <p>
                                Avec React, la page peut être subdivisé en plusieurs composants. Voici une représentation de la hiérarchie d’utilisation des composants de l'application :
                            </p>
                            <span className="imgSubTitle">Hiérarchie d’utilisation des composants</span>
                            <img src={Figure} className="figure" alt="hiérarchie d’utilisation des composants" />
                            <p>
                                <strong>App est la composante mère</strong>, c'est la composante qui sera injectée au sein du nœud DOM.
                                À l'intérieur du composant, on retrouve HomePage, CRPage et SearchAppBar.
                                SearchAppBar est la <strong>barre de l'application</strong> composée du nom de l'application, une barre de recherche et des
                                buttons permettant la navigation entre les différentes pages.
                            </p>
                            <h5>B.	MATERIAL UI</h5>
                            <p>
                                <strong>Material UI</strong> est un ensemble de composants React permettant le développement web rapide et simple.
                                Avec Material UI, j'ai pu gérer la partie « design » de l'application web.
                                Les principaux composants de Material UI utilisés dans le projet sont :
                            </p>
                            <ul>
                                <li>Barre d'application avec champ de recherche principal</li>
                                <li>Cartes (pour l’affichage des produits)</li>
                                <li>Barre de chargement circulaire (pour indiquer à l'utilisateur que l'application traite sa demande)</li>
                            </ul>
                            <h5>C.	SASS</h5>
                            <p>
                                Les feuilles de style sont générées dynamiquement avec le langage Sass. La syntaxe SCSS a
                                été choisi, car elle est assez similaire au Css. J'ai choisi de faire mes feuilles de
                                styles en Sass juste par pure curiosité pour ce langage qui fait parler de lui.
                            </p>

                            <h4>2. Back-End</h4>
                            <h5>A.	WEBSCRAPING AVEC SELENIUM</h5>
                            <p>
                                Le web Scraping est réalisé dans la partie Java par le biais de la bibliothèque Selenium.
                                <strong>Selenium</strong> est un framework de test informatique développée
                                en Java pour le test automatisé d'applications Web.
                                Mais, nous pouvons aussi l'utiliser pour faire du Web Scraping.
                                Effectivement, il est possible de rechercher assez facilement des éléments
                                d'une page web avec son <strong>xpath</strong> (langage de requête pour localiser une portion d'un document XML)
                                et il est aussi capable <strong>d'extraire les données stockées</strong> dans ces différents éléments.
                            </p>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <p>
                                        Ici par exemple, on recherche un élément div possédant
                                        la classe « catalog-page__statistic ». Ce div contient le
                                        nombre de produit trouvé sur le site marchand.
                                        Si ce nombre est égal à 0, pas besoin de faire de recherche,
                                        on arrête le programme et on envoie un message au JavaScrpit
                                        pour lui dire qu'on n'a rien trouvé.
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers>
                                        {`// search the number of goods\nString nbArt = driver.findElement(By.cssSelector("div.catalog-page__statistic")).getText();`}
                                    </SyntaxHighlighter>
                                </Grid>
                            </Grid>
                            <h6>a)	Le problème du « lazy-loading »</h6>
                            <p>
                                Le « lazy-loading »(“chargement fainéant” en français) consiste à spécifier quels composants d’un programme 
                                doivent être chargés lors du démarrage de celui-ci. 
                                Par défaut, quand on demande à un navigateur d'afficher une page web,
                                cette dernière charge toutes les ressources et donc toutes les images.
                                Ce n'est pas vraiment optimal, c'est pour cela qu'a été inventé le « lazy-loading ».
                                L'image est chargée seulement quand elle est visible sur la page ou utiliser par l'utilisateur.
                            </p>
                            <p>
                                Dans le cas du Web Scraping avec selenium, j'ai été confronté à ce problème.
                                Quand je recherchais le lien de toutes les images de la page, je ne recevais
                                que le lien des images en haut page.
                                Les autres images n'avaient pas encore été chargé.
                            </p>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <p>
                                        Pour régler ce problème, on réalise un scroll vers le
                                        bas de page et on attend que les images soient chargées.
                                    </p>
                                </Grid>
                                <Grid item xs={6}>
                                    <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers>
                                        {`Thread.sleep(1000);\nfor (int i = 0; i < 3000; i = i + 500) {\n  JavascriptExecutor jse = (JavascriptExecutor)driver;\n  jse.executeScript("window.scrollTo(0," + i + " )");\n\n  Thread.sleep(1000);`}
                                    </SyntaxHighlighter>
                                </Grid>
                            </Grid>
                            <h6>b) Diminué le temps d'éxécution de selenium</h6>
                            <p>
                                Selenium est à l'origine une bibliothèque de teste. Elle permet d'automatiser des tâches sur un browser. Elle possède
                                cependant des méthodes permettant l'extraction de donnée sur certain site. À cause de certains problèmes
                                comme le "lazy-loading" et la gestion de code par JavaScript, je fus obligé d'utiliser cette bibliothèque capable
                                de gérer le Javascript de la page (contrairement à Jsoup que nous verrons plus tard).
                            </p>
                            <p>
                                Selenium est très lent, il faut attendre dans la premier temps le chargement de la page à l'état 
                                "complete". Puis, il faut scroller la page vers le bas (pour résoudre le problème du "lazy-loading" des images). 
                                Il était donc important de trouver un moyen d'optimiser l'application. Pour rendre selenium plus rapide, 
                                commencé par utiliser des selecteurs rapide. En effet, selenium donne la possibilité d'utiliser différent 
                                type de selecteurs (trier par leur vitesse) :
                                <ul>
                                    <li>
                                        <stong>ID selector</stong>
                                        <p>
                                            C'est le sélecteur le plus rapide de selenium, il utilise le 
                                             <SyntaxHighlighter language="js" style={tomorrow} showLineNumbers>
                                                {`document.getElementById() `}
                                            </SyntaxHighlighter>
                                            de JavaScript.
                                        </p>
                                    </li>
                                    <li>
                                        <stong>NAME selector</stong>
                                        <p>
                                           Il fonctionne si l'élément à un attribut NAME
                                        </p>
                                    </li>
                                    <li>
                                        <stong>Css selector</stong>
                                        <p>
                                            Selector le plus souvent utilisé dans l'application web. 
                                        </p>
                                    </li>
                                    <li>
                                        <stong>XPATH selector</stong>
                                        <p>
                                            Le selecteur XPAH est le selecteur le plus simple a utilisé, mais aussi le plus lent. 
                                        </p>
                                    </li>
                                </ul>
                            </p>
                            <h5>B.	UTILISATION DE JSOUP</h5>
                            <p>
                                Dans l'application, on utilise JSOUP afin d'aller chercher la description, les informations nutritionnels.
                                Pour chaque produit qu'on trouve (avec selenium), on se rend sur la page du produit avec JSOUP pour prendre
                                les informations dont nous avons besoin. 

                                On utilise plutôt JSOUP que selenium car sur cette page, on n'a pas besoin de JavaScript. 
                                <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers>
                                    {`connection = Jsoup.connect(item.findElement(By.cssSelector("a.grocery-item__product-img")).getAttribute("href"));

//set user agent 
connection.userAgent("Mozilla/5.0");

 // set timeout to 10 seconds
connection.timeout(10 * 1000);

// get the HTML document
doc = connection.get();

String desc = doc.selectFirst("div.product__description-details").text();
Element ingredientsEle = doc.selectFirst("div.product__ingredients-allergens-details");
                        Element infoNutriEle = doc.selectFirst(".Nutrition-tixjv9-0");

String ingredients = ingredientsEle == null ? "" : ingredientsEle.text();
String infoNutri = infoNutriEle == null ? "" : infoNutriEle.text();

Item itemObject = new Item(itemName, info, itemPrice, itemWeight, imageUrl, desc, ingredients, 
                                infoNutri);
jsonInString.add(itemObject);`}
                                </SyntaxHighlighter>
                            </p>
                            <h5>C.	UTILISATION DE GSONBUILDER</h5>
                            <p>
                                Les données sont envoyées à JavaScript sous le format Json.
                                Pour convertir un objet java au format JSON,
                                j'ai utilisé la bibliothèque Gson. Gson est une bibliothèque open source développée
                                par Google pour convertir un objet Java dans sa représentation JSON et vice versa.
                            </p>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <p>
                                        Dans ce code, on vérifie dans un premier temps si le champs « _jsonInString » est null.
                                        Si ce n’est pas le cas, on peut convertir la liste d’objet à l’intérieur en fichier json.
                                    </p>
                                    <ul>
                                        <li><strong><a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/GsonBuilder.html#setPrettyPrinting--">setPrettyPrinting()</a></strong> : Configure Gson pour sortir un fichier Json qui s'adapte à une page pour une jolie impression.</li>
                                        <li><strong><a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/GsonBuilder.html#disableHtmlEscaping--">disableHtmlEscaping()</a></strong> : Configure Gson pour sortir un fichier Json qui s'adapte à une page pour une jolie impression.</li>
                                        <li><strong><a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/GsonBuilder.html#create--">create() </a></strong>  : Configure Gson pour sortir un fichier Json qui s'adapte à une page pour une jolie impression.</li>
                                        <li><strong><a href="https://static.javadoc.io/com.google.code.gson/gson/2.7/com/google/gson/Gson.html#toJson-java.lang.Object-">toJson(Object O)</a></strong>  : Configure Gson pour sortir un fichier Json qui s'adapte à une page pour une jolie impression.</li>
                                    </ul>
                                </Grid>
                                <Grid item xs={6}>
                                    <SyntaxHighlighter language="java" style={tomorrow} showLineNumbers>
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
                            
                            <hr />
                        </section>
                        <section id="3">
                            <h3>III.	LES DONNÉES RÉCUPÉRER </h3>
                            <p>
                                Pour un produit donnée, les données récupérer par web scraping sont :
                            </p>
                            <ul>
                                <li>Le nom du produit</li>
                                <li>Le poids du produit</li>
                                <li>La photo du produit</li>
                                <li>La marque du produit </li>
                                <li>Les ingrédients </li>
                                <li>La valeur énergétique </li>
                            </ul>
                            <hr />
                        </section>
                        <section id="4">
                            <h3>IV.	SOURCES</h3>
                            <p>Les informations présentées peuvent être complétées par les références des sites internet qui suivent</p>
                            <h5>
                                FONCTIONNEMENT GLOBAL DE L’APPLICATION WEB
                            </h5>
                            <ul>
                                <li>Modelio : Docs de Modelio <br /> <a href="https://www.modelio.org/documentation-menu/tutorials.html">https://www.modelio.org/documentation-menu/tutorials.html</a></li>
                            </ul>
                            <h5>
                                CHOIX MISE EN ŒUVRE
                            </h5>
                            <ul>
                                <li>React : Documentation de React <br /> <a href="https://fr.reactjs.org/docs/getting-started.html">https://fr.reactjs.org/docs/getting-started.html</a></li>
                                <li>Material UI : Site officiel de Material UI <br /> <a href="https://material-ui.com/">https://material-ui.com/</a></li>
                                <li>SASS: Documentation de SASS<br /> <a href="https://sass-lang.com/guide">https://sass-lang.com/guide</a></li>
                                <li>Wikipedia : Selenium<br /> <a href="https://fr.wikipedia.org/wiki/Selenium_(informatique)">https://fr.wikipedia.org/wiki/Selenium_(informatique)</a></li>
                                <li>BDM : Lazy-loading natif <br /> <a href="https://www.blogdumoderateur.com/lazy-loading-chrome-firefox-natif/">https://www.blogdumoderateur.com/lazy-loading-chrome-firefox-natif/</a></li>
                                <li>1min30 : Lazy loading (informatique et web) <br /> <a href="https://www.1min30.com/dictionnaire-du-web/lazy-loading-informatique-et-web">https://www.1min30.com/dictionnaire-du-web/lazy-loading-informatique-et-web/</a></li>
                                <li>GsonBuilder : java doc de GsonBuilder <br /> <a href="https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/GsonBuilder.html">https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/GsonBuilder.html</a></li>
                                <li>Gson : java doc de Gson <br /> <a href="https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/Gson.html">https://static.javadoc.io/com.google.code.gson/gson/2.8.5/com/google/gson/Gson.html</a></li>
                                <li>Jsoup : java doc de Jsoup <br /> <a href="https://jsoup.org/apidocs/overview-summary.html">https://jsoup.org/apidocs/overview-summary.html</a></li>
                            </ul>
                            <hr />
                        </section>

                    </Container>
                </div>
            </main>
                
            </div>
    )
    
}
