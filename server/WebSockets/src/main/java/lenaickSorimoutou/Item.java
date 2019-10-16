package lenaickSorimoutou;

public class Item {
    private String name;
    private String info;
    private String price;
    private String weight;
    private String url;

    Item(String name, String info, String price, String weight, String url){
        this.name = name;
        this.info = info;
        this.price = price; 
        this.url = url;
        this.weight = weight;
    }

    public String getName(){
        return this.name;
    }

    public String getInfo() {
        return this.info;
    }
    
    public String getPrice() {
        return this.price;
    }
    
    public String getWeight() {
        return this.weight;
    }
    
    public String getUrl() {
        return this.url;
    }
}