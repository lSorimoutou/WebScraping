package lenaickSorimoutou;

public class Item {
    private String name;
    private String info;
    private String price;
    private String weight;
    private String url;
    private String desc;
    private String ingredients;
    private String infoNutri;
    private String priceUnit;

    Item(String name, String info, String price, String weight, String url, String desc, String ingredients, String infoNutri, String priceUnit){
        this.name = name;
        this.info = info;
        this.price = price; 
        this.url = url;
        this.weight = weight;
        this.desc = desc;
        this.ingredients = ingredients;
        this.infoNutri = infoNutri;
        this.priceUnit = priceUnit;
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

    public String getDesc() {
        return this.desc;
    }

    public String getingredients() {
        return this.ingredients;
    }
    
    public String getinfoNutri() {
        return this.infoNutri;
    }
}