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

const drawerWidth = 240;

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
                    {['Introduction', 'I.', 'II.', 'III.'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
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
                        <section id="intro">
                            <h3>Introduction</h3>
                            <p>
                                Le projet consistait à fabriquer une application de Web scraping sur
                                un site de e-commerce afin de récupérer des informations sur des produits
                                de consommation courante. Dans le cadre de mon projet,
                                j’ai décidé de choisir le site marchand <strong>monoprix</strong>.
                            </p>
                            <hr />
                        </section>
                        <section id="first">
                            <h3>I.	FONCTIONNEMENT GLOBAL DE L’APPLICATION WEB</h3>
                            <p>
                                La conception de l'application web a été réalisé avec deux langages de programmation.
                                L'affichage a été réalisé avec HTML, SASS et JavaScript.
                                Le Web Scraping est réalisé avec Java.
                                La liaison entre les deux langages de programmation se fait via un WebSocket.
                            </p>
                            <p>
                                Pour débuter la recherche de produit, vous devez utiliser la barre de recherche
                                sur la page web. Après avoir validé votre recherche, le nom du produit que vous
                                avez entré sera envoyé à l'api Java.
                            </p>
                            <p>
                                Par le biais de la bibliothèque sélénium, on va extraire les données du site marchand
                                monoprix. Après avoir extraite les données du site marchand, java crée un objet avec toutes
                                les informations scraper, puis en utilisant la bibliothèque Gson, on convertit l'objet au
                                format json et on l'envoie au client (JavaScript).
                            </p>
                            <span className="imgSubTitle">Diagramme d'activité de l'application web</span>
                            <img src={Diag} alt="Diagramme d'activité de l'application" />
                            <hr />
                        </section>
                        <section id="second">
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
                                App est la composante mère, c'est la composante qui sera injectée au sein du nœud DOM.
                                À l'intérieur du composant, on retrouve HomePage, CRPage et SearchAppBar.
                                SearchAppBar est la barre de l'application composée du nom de l'application, une barre de recherche et des
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
                                Selenium est un framework de test informatique développée
                                en Java pour le test automatisé d'applications Web.
                                Mais, nous pouvons aussi l'utiliser pour faire du Web Scraping.
                                 Effectivement, il est possible de rechercher assez facilement des éléments
                                 d'une page web avec son xpath (langage de requête pour localiser une portion d'un document XML)
                                 et il est aussi capable d'extraire les données stockées dans ces différents éléments.
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
                                        {`// search the number of goods\nString nbArticleXpath = ".//div[@class='catalog-page__statistic']";\nString nbArt = driver.findElement(By.xpath(nbArticleXpath)).getText();`}
                                    </SyntaxHighlighter>
                                </Grid>
                            </Grid>
                            <h6>a)	Le problème du « lazy-loading »</h6>
                            <p>
                                Le « lazy-loading » est le chargement des images
                                seulement quand c'est nécessaire.
                                Par défaut, quand on demande à un navigateur d'afficher une page web,
                                cette dernière charge toutes les ressources et donc toutes les images.
                                Ce n'est pas vraiment optimal, c'est pour cela qu'a été inventé le « lazy-loading ».
                                L'image est chargée seulement quand elle est visible sur la page.
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
                            <h5>B.	UTILISATION DE GSONBUILDER</h5>
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
                                        {`public String getString(){
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
                        <section id="third">
                            <h3>III.	LES DONNÉES RÉCUPÉRER </h3>
                            <p>
                                Pour un produit donnée, les données récupérer par web scraping sont :
                            </p>
                            <ul>
                                <li>Le nom du produit</li>
                                <li>Le poids du produit</li>
                                <li>La photo du produit</li>
                                <li>La marque du produit </li>
                            </ul>
                            <hr />
                        </section>
                        <section id="fouth">
                            <h3>IV.	SOURCES</h3>
                            <hr />
                        </section>

                    </Container>
                </div>
            </main>
                
            </div>
    )
    
}
