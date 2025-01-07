function FindProxyForURL(url, host) {
    // Список доменов YouTube для проксирования
    var youtubeDomains = [
        "youtube.com",
        "m.youtube.com",
        "youtu.be",
        "googlevideo.com",
        "ytimg.com",
        "l.google.com"
    ];

    // Функция проверки принадлежности хоста к списку доменов YouTube
    function isInYoutubeList(host) {
        for (var i = 0; i < youtubeDomains.length; i++) {
            if (dnsDomainIs(host, youtubeDomains[i]) || dnsDomainIs(host, "." + youtubeDomains[i])) {
                return true;
            }
        }
        return false;
    }

    // Если домен или поддомен есть в списке, используем SOCKS5-прокси
    if (isInYoutubeList(host)) {
        return "SOCKS5 45.95.233.23:2285";
    }

    // Для всех остальных доменов прямое соединение
    return "DIRECT";
}
