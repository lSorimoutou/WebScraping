
const AppConfig = {
    PROTOCOL: "ws:",  
    HOST: "//localhost",
    PORT: ":1963",
    OTHER:"/LenaickSorimoutou/WebSockets_illustration"
}

const Singleton = (function () {
    let instance;

    function createInstance() {
        const socket = new WebSocket(AppConfig.PROTOCOL + AppConfig.HOST + AppConfig.PORT + AppConfig.OTHER);
        return socket;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
        endInstance : function(){
            if (instance){
                instance.close();
            }
        }
    };
})();

export default Singleton;