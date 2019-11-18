package lenaickSorimoutou;

import java.io.IOException;
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
        public void onMessage(javax.websocket.Session session, String message) 
            throws InterruptedException, IOException {
            System.out.println("Message from JavaScript: " + message);
            Scrapper s = new Scrapper(message);
            session.getBasicRemote().sendText(s.getString());
        }

        @javax.websocket.OnOpen
        public void onOpen(javax.websocket.Session session, javax.websocket.EndpointConfig ec)
                throws IOException {
            System.out.println("OnOpen... " + ec.getUserProperties().get("Author"));
        }
        
    }

    public static void main(String[] args) throws IOException {

        java.util.Map<String, Object> user_properties = new java.util.HashMap<String, Object>();
        user_properties.put("Author", "LenaickSorimoutou");

        org.glassfish.tyrus.server.Server server = new org.glassfish.tyrus.server.Server("localhost", 1963,
                "/LenaickSorimoutou", user_properties /* or 'null' */, My_ServerEndpoint.class);

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
