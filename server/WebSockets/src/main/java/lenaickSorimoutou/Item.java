package lenaickSorimoutou;

public class Item {
    private String name;
    private String price;
    private String weight;
    private String url;

    Item(String name, String price, String weight, String url){
        this.name = name;
        this.price = price; 
        this.url = url;
        this.weight = weight;
    }

    public String getName(){
        return this.name;
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