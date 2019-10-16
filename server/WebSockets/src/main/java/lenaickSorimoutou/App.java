package lenaickSorimoutou;

// java librairy
import java.io.IOException;
import java.util.ArrayList;

// Selenium
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

//Gson
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.FileWriter;
 

/**
 * Hello world!
 *
 */
public class App {

    /**
     * Danger : il faut que le constructeur de 'My_ServerEndpoint' soit bien
     * accessible par le serveur WebSockets. Ne pas oublier 'static'!
     */
    @javax.websocket.server.ServerEndpoint(value = "/WebSockets_illustration")
    public static class My_ServerEndpoint {

        @javax.websocket.OnClose
        public void onClose(javax.websocket.Session session, javax.websocket.CloseReason close_reason) {
            System.out.println("onClose: " + close_reason.getReasonPhrase());
        }

        @javax.websocket.OnError
        public void onError(javax.websocket.Session session, Throwable throwable) {
            System.out.println("onError: " + throwable.getMessage());
        }

        @javax.websocket.OnMessage
        public void onMessage(javax.websocket.Session session, String message) {
            System.out.println("Message from JavaScript: " + message);
        }

        @javax.websocket.OnOpen
        public void onOpen(javax.websocket.Session session, javax.websocket.EndpointConfig ec)
                throws java.io.IOException {
            System.out.println("OnOpen... " + ec.getUserProperties().get("Author"));
            session.getBasicRemote().sendText("{Handshaking: \"Yes\"}");
        }
        
    }

    public static void main(String[] args) throws IOException {

        System.setProperty("webdriver.gecko.driver", "./geckodriver.exe");

        java.util.Map<String, Object> user_properties = new java.util.HashMap();
        user_properties.put("Author", "LenaickSorimoutou");

        org.glassfish.tyrus.server.Server server = new org.glassfish.tyrus.server.Server("localhost", 1963,
                "/LenaickSorimoutou", user_properties /* or 'null' */, My_ServerEndpoint.class);
        
        String searchQuery = "nutella";
        String searchUrl = "https://www.intermarche.com/rechercheproduits/11286/recherche/" + java.net.URLEncoder.encode(searchQuery, "UTF-8");
        
        FirefoxDriver driver = new FirefoxDriver();
        WebDriverWait wait = new WebDriverWait(driver, 30);

        driver.navigate().to(searchUrl);

        String itemXpath = "//div[@class='sc-dHmInP jHNcRo']";
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(itemXpath)));
        java.util.List<WebElement> items = driver.findElements(By.xpath(itemXpath));

        System.out.println(items);

        if (items.isEmpty()) {
            System.out.println("No items found !");
        } else {
            java.util.List<Item> jsonInString = new ArrayList<Item>();

            for (WebElement item : items) {
                WebElement spanName = null;
                WebElement divPrice = null;
                WebElement divWeight = null;
                WebElement imgImg = null;
                try{
                    // research the name
                    spanName = item.findElement(By.xpath(".//div[1]/div[2]/div[1]/span"));
                    // research the image 
                    imgImg = item.findElement(By.xpath(".//div[1]/div[1]/div[1]/img"));
                    // research the price 
                    divPrice = item.findElement(By.xpath(".//div[1]/div[3]/div[1]/div/div[1]"));
                    // research the weight 
                    divWeight = item.findElement(By.xpath(".//div[1]/div[1]/div[2]/div[2]/div/div"));
                } catch(Exception e) {
                    System.out.println(e);
                    System.out.println("Element not found !");
                }

                String itemName = spanName.getText();
                String imageUrl = imgImg.getAttribute("src");
                String itemPrice = divPrice == null ? "0.0" : divPrice.getText().split(" ")[0];
                String itemWeight = divWeight == null ? "0.0" : divWeight.getText();

                System.out.println(String.format("Name : %s Price : %s, Weight : %s, Image: %s", itemName, itemPrice, itemWeight, imageUrl));
                Item itemObject = new Item(itemName, itemPrice, itemWeight, imageUrl);
                jsonInString.add(itemObject);
                
            }

            // Java objects to File
            try (FileWriter writer = new FileWriter(
                    "Browser" + java.io.File.separatorChar + "DB" + java.io.File.separatorChar + "item.json")) {
                final GsonBuilder builder = new GsonBuilder();
                builder.setPrettyPrinting();
                builder.create().toJson(jsonInString, writer);
            } catch (IOException e) {
                e.printStackTrace();
            }
            
        }
        driver.close();

        try {
            server.start();
            // The Web page is launched from Java:         
            java.io.BufferedReader reader = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
            System.out.println("Please press a key to stop the server...");
            reader.readLine();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {

            server.stop();
        }
    }
}
