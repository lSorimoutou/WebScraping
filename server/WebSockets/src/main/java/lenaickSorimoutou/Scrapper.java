package lenaickSorimoutou;

// java librairy
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.util.ArrayList;
import java.io.FileOutputStream;

//Gson
import com.google.gson.GsonBuilder;

// Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.firefox.FirefoxBinary;

// Jsoup
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.Connection;
import org.jsoup.nodes.Element;

/**
 * The Scrapper class scrape the webpage (monoprix)
 */
public class Scrapper {

    private java.util.List<Item> _jsonInString;

    /**
     * 
     * @param produit the name of the product
     * @throws InterruptedException
     */
    Scrapper(String produit) throws InterruptedException{

        final String searchQuery = produit;
        String searchUrl = "";

        try {
            searchUrl = "https://www.monoprix.fr/courses/search/"
                    + java.net.URLEncoder.encode(searchQuery, "UTF-8") + "/" + java.net.URLEncoder.encode(searchQuery, "UTF-8");

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            ;
        }

        FirefoxBinary firefoxBinary = new FirefoxBinary();
        firefoxBinary.addCommandLineOptions("--headless");
        System.setProperty("webdriver.gecko.driver", "./geckodriver.exe");
        FirefoxOptions firefoxOptions = new FirefoxOptions();
        firefoxOptions.setBinary(firefoxBinary);
        FirefoxDriver driver = new FirefoxDriver(firefoxOptions);

        driver.navigate().to(searchUrl);

        // search the number of goods
        String nbArt = driver.findElement(By.cssSelector("div.catalog-page__statistic")).getText();

        if(!nbArt.equals("0 Articles")){
            String itemXpath = "div.cards:nth-child(1)>*";
        
            // Scroll down to the bottom of the page (for lazzy loading of img)
            for (int i = 0; i < 3000; i = i + 500) {
                JavascriptExecutor jse = (JavascriptExecutor)driver;
                jse.executeScript("window.scrollTo(0," + i + " )");
                // Wait to load the scrolled page
            }
            
            java.util.List<WebElement> items = driver.findElements(By.cssSelector(itemXpath));

            if (items.isEmpty()) {
                System.out.println("No items found !");
            } else {
                // data mining
                java.util.List<Item> jsonInString = new ArrayList<Item>();

                for (WebElement item : items) {
                    
                    String infoArticle = item.getText();
                    String listInfo[] = infoArticle.split("\n");

                    String itemName = listInfo[1];
                    String info = listInfo[0];
                    String imageUrl = item.findElement(By.tagName("img")).getAttribute("src");
                    String itemPrice;
                    if(listInfo.length != 5){
                        itemPrice = listInfo[5].split(" ")[0];
                    }else{
                        itemPrice = listInfo[3].split(" ")[0];
                    }
                    String itemWeight = listInfo[2];

                    Connection connection;
                    Document doc;
                    try {
                        connection = Jsoup.connect(item.findElement(By.cssSelector("a.grocery-item__product-img")).getAttribute("href"));

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
                        jsonInString.add(itemObject);

                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                this._jsonInString = jsonInString;
            }
        }
        else{
            this._jsonInString = null;
        }
        // close the browser
        driver.close();
    }

    /**
     * 
     * @param path the path of the file
     */
    public void writeFile(String path){
        // Convert java objects to File
        try (Writer writer = new OutputStreamWriter(
                new FileOutputStream(path), "UTF-8")) {
            final GsonBuilder builder = new GsonBuilder();
            builder.setPrettyPrinting();
            builder.disableHtmlEscaping();
            builder.create().toJson(this._jsonInString, writer);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
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
        
    }
}