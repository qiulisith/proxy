function FindProxyForURL(url,host){
     if (shExpMatch(url,"*118.89.19.48*"){
         return 'DIRECT';
         
     }
     else{
         return "PROXY 192.168.1.176:808";
     }
     
}
