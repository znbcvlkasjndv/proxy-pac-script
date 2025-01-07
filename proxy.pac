function FindProxyForURL(url, host) {
    // Список доменов для проксирования
    var proxyDomains = {
        "rutracker.org": true,
        "ntc.party": true,
        "lolz.guru": true,
        "zelenka.guru": true,
        "x.com": true,
        "twitter.com": true,
        "twimg.com": true,
        "t.co": true,
        "play.google.com": true,
        "news.google.com": true,
        "cloudflare-ech.com": true,
        "torproject.org": true,
        "soundcloud.com": true,
        "amnezia.org": true,
        "matrix-client.matrix.org": true,
        "discord.com": true,
        "discordapp.net": true,
        "discordapp.com": true,
        "discord.gg": true,
        "discord.app": true,
        "discord.media": true,
        "discordcdn.com": true,
        "discord.dev": true,
        "discord.new": true,
        "discord.gift": true,
        "discordstatus.com": true,
        "dis.gd": true,
        "discord.co": true,
        "discord-attachments-uploads-prd.storage.googleapis.com": true,
        "znanija.com": true,
        "instagram.com": true,
        "fbcdn.net": true,
        "facebook.com": true,
        "fbsbx.com": true,
        "cdninstagram.com": true,
        "roskomsvoboda.org": true,
        "medium.com": true,
        "viber.com": true,
        "signal.org": true,
        "jut.su": true,
        "linktr.ee": true,
        "musixmatch.com": true,
        "zendesk.com": true,
        "protonmail.com": true,
        "proton.me": true,
        "te-st.org": true,
        "censortracker.org": true,
        "chatgpt.com": true,
        "openai.com": true,
        "oaistatic.com": true,
        "oaiusercontent.com": true,
        "auth0.com": true,
        "spotify.com": true,
        "notion.so": true,
        "canva.com": true,
        "codeium.com": true,
        "tiktok.com": true,
        "googlevideo.com": true,
        "youtube.com": true,
        "youtu.be": true,
        "ggpht.com": true
    };

    // Функция проверки принадлежности хоста к списку доменов и поддоменов
    function isInProxyList(host) {
        if (proxyDomains[host]) {
            return true;
        }
        for (var domain in proxyDomains) {
            if (dnsDomainIs(host, "." + domain)) {
                return true;
            }
        }
        return false;
    }

    // Если домен или поддомен есть в списке, используем SOCKS5-прокси
    if (isInProxyList(host)) {
        return "SOCKS5 45.95.233.23:2285";
    }

    // Для всех остальных доменов прямое соединение
    return "DIRECT";
}
