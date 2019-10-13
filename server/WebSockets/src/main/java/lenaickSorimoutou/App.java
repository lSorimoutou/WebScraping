package lenaickSorimoutou;


import java.io.IOException;


import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


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

        String itemXpath = "//div[@class='sc-iNhVCk bAFUMR']";
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(itemXpath)));
        java.util.List<WebElement> items = driver.findElements(By.xpath(itemXpath));

        System.out.println(items);

        if (items.isEmpty()) {
            System.out.println("No items found !");
        } else {
            for (WebElement item : items) {
                WebElement spanName = null;
                WebElement divPrice = null;
                WebElement divWeight = null;
                try{
                    // research the name
                    spanName = item.findElement(By.xpath(".//div[@class='sc-iBEsjs hmdggO']/span"));
                    // research the price
                    divPrice = item.findElement(By.xpath(".//div[@class='sc-gqPbQI DDdlc']"));
                    // research the weight
                    divWeight = item.findElement(By.xpath(".//div[@class='sc-eLExRp jIjhCm']"));
                } catch(Exception e) {
                    System.out.println(e);
                    System.out.println("Element not found !");
                }

                String itemName = spanName.getText();
                // It is possible that an item doesn't have any price
                String itemPrice = divPrice == null ? "0.0" : divPrice.getText();
                String itemWeight = divWeight == null ? "0.0" : divWeight.getText();

                System.out.println(String.format("Name : %s Price : %s, Weight : %s", itemName, itemPrice, itemWeight));
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
