function FindProxyForURL(url,host){
     console.log(777,host)
     if (isResolvable(host)){
         return 'DIRECT';
     }
     else{
         return "PROXY 192.168.1.176:808";
     }
     
}
