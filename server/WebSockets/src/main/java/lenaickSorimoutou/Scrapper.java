package lenaickSorimoutou;

import java.io.FileOutputStream;
// java librairy
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.util.ArrayList;

//Gson
import com.google.gson.GsonBuilder;

// Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Scrapper {

    private java.util.List<Item> _jsonInString;

    Scrapper(String prod) throws InterruptedException{

        String searchQuery = prod;
        String searchUrl = "";

        System.setProperty("webdriver.gecko.driver", "./geckodriver.exe");

        try {
            searchUrl = "https://www.monoprix.fr/courses/search/"
                    + java.net.URLEncoder.encode(searchQuery, "UTF-8") + "/" + java.net.URLEncoder.encode(searchQuery, "UTF-8");

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            ;
        }

        FirefoxDriver driver = new FirefoxDriver();
        WebDriverWait wait = new WebDriverWait(driver, 30);

        driver.navigate().to(searchUrl);

        String itemXpath = ".//div[@class='ui cards products']/div";
        
        // Scroll down to the bottom.

        Thread.sleep(1000);
        for (int i = 0; i < 3000; i = i + 500) {
            JavascriptExecutor jse = (JavascriptExecutor)driver;
            jse.executeScript("window.scrollTo(0," + i + " )");
            // Wait to load the scrolled page
            Thread.sleep(1000);
        }
        
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(itemXpath)));
        java.util.List<WebElement> items = driver.findElements(By.xpath(itemXpath));

        if (items.isEmpty()) {
            System.out.println("No items found !");
        } else {
            java.util.List<Item> jsonInString = new ArrayList<Item>();

            for (WebElement item : items) {
                WebElement spanName = null;
                WebElement spanInfo = null;
                WebElement divPrice = null;
                WebElement divWeight = null;
                WebElement imgImg = null;
                try {
                    // research the name 
                    spanName = item.findElement(By.xpath(".//div[@class='grocery-item-range']"));
                    // research the name2
                    spanInfo = item.findElement(By.xpath(".//div[@class='grocery-item-brand']/p"));
                    // research the image
                    imgImg = item.findElement(By.tagName("img"));
                    // research the price
                    divPrice = item.findElement(By.xpath(".//div[@class='grocery-item__normal-price']"));
                    // research the weight
                    divWeight = item.findElement(By.xpath(".//div[@class='conditioning-description']"));
                } catch (Exception e) {
                    System.out.println(e);
                    System.out.println("Element not found !");
                }

                String itemName = spanName.getText();
                String info = spanInfo.getText();
                String imageUrl = imgImg.getAttribute("src");
                String itemPrice = divPrice == null ? "0.0" : divPrice.getText().split(" ")[0];
                String itemWeight = divWeight == null ? "0.0" : divWeight.getText();

                Item itemObject = new Item(itemName, info, itemPrice, itemWeight, imageUrl);
                jsonInString.add(itemObject);

            }
            this._jsonInString = jsonInString;
        }
        driver.close();
    }

    public void writeFile(String path){
        // Java objects to File
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

    public String getString(){
        final GsonBuilder builder = new GsonBuilder();
        builder.setPrettyPrinting();
        builder.disableHtmlEscaping();
        return builder.create().toJson(this._jsonInString);
    }
}