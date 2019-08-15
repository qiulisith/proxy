function FindProxyForURL(url,host){
    console.log(666,host)
    if (host == "http://118.89.19.48:8881") {
        return "PROXY http://192.168.1.176:808";
      }
      else {
        return "DIRECT";
      }
}
