class AppConfig {

    public newsIlUrl = "http://localhost:8001/news/";
    public weatherUrl = "http://localhost:8001/weather/";
    public newsBycategoryUrl = "http://localhost:8001/category/";
}

const appConfig = new AppConfig(); // Singleton

export default appConfig;
