function FindProxyForURL(url,host){
     if (isInNet(dnsResolve(host), "118.89.19.48", "255.255.255.255"){
         return "PROXY 192.168.1.176:808";
     }
     else{
         return 'DIRECT';
     }
     
}
