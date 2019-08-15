function FindProxyForURL(url,host){
     if (isInNet(dnsResolve(host), "118.89.19.0", "255.255.255.0"){
         return "PROXY 192.168.1.176:808";
     }
     else{
         return 'DIRECT';
     }
     
}
