function FindProxyForURL(url,host){
     if (isResolvable(host)){
         return 'DIRECT';
     }
     else{
         return "PROXY 192.168.1.176:808";
     }
     
}
