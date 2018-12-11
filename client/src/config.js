const server_constants = {
    mode: "DEBUG",
};
 
 class SharedConfig{
    constructor(){
       this.server_endpoint = "";
    }
 
    get FieldsEndpoint(){
       return this.server_endpoint + "/api/fields";
    }

    get EducationEndpoint(){
        return this.server_endpoint + "/api/education";
     }

     get WorkHistoryEndpoint(){
        return this.server_endpoint + "/api/work_history";
     }

     get PublicationsEndpoint(){
         return this.server_endpoint + "/api/publications";
     }

     get ProjectsEndpoint(){
         return this.server_endpoint + "/api/projects";
     }
 }
 
 class DebugConfig extends SharedConfig {
    constructor() {
       super();
       this.server_endpoint = "http://localhost:8080";
    }
 }
 
 class ReleaseConfig extends SharedConfig {
    constructor() {
       super();
       this.server_endpoint = "https://adamcarter.com"
    }
 }
 
 class ConfigManager {
 
    static getConfig() {
       if(server_constants.mode === "DEBUG"){
          return new DebugConfig();
       }
       else{
          return new ReleaseConfig();
       }
    }
 }
 
 export { ConfigManager };
 export default ConfigManager;