class ServerConstants{
   constructor(){
      this.mode = "debug";
      this.data_dir = '../data/';
      this.projects_dir = '../data/projects/';
   }
}

exports.ServerConstants = function(){
   return new ServerConstants();
}