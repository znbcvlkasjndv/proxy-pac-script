function FindProxyForURL(url, host) {
    // Список доменов для проксирования, включая поддомены
    var proxyDomains = [
        "rutracker.org",
        "ntc.party",
        "lolz.guru",
        "zelenka.guru",
        "x.com",
        "twitter.com",
        "twimg.com",
        "t.co",
        "play.google.com",
        "news.google.com",
        "cloudflare-ech.com",
        "torproject.org",
        "soundcloud.com",
        "amnezia.org",
        "matrix-client.matrix.org",
        "discord.com",
        "discordapp.net",
        "discordapp.com",
        "discord.gg",
        "discord.app",
        "discord.media",
        "discordcdn.com",
        "discord.dev",
        "discord.new",
        "discord.gift",
        "discordstatus.com",
        "dis.gd",
        "discord.co",
        "discord-attachments-uploads-prd.storage.googleapis.com",
        "znanija.com",
        "instagram.com",
        "fbcdn.net",
        "facebook.com",
        "fbsbx.com",
        "cdninstagram.com",
        "roskomsvoboda.org",
        "medium.com",
        "viber.com",
        "signal.org",
        "jut.su",
        "linktr.ee",
        "musixmatch.com",
        "zendesk.com",
        "protonmail.com",
        "proton.me",
        "te-st.org",
        "censortracker.org",
        "chatgpt.com",
        "openai.com",
        "oaistatic.com",
        "oaiusercontent.com",
        "auth0.com",
        "spotify.com",
        "notion.so",
        "canva.com",
        "codeium.com",
        "tiktok.com",
        "googlevideo.com",
        "youtubei.googleapis.com",
        "ytimg.com",
        "yt3.ggpht.com",
        "yt4.ggpht.com",
        "youtube.com",
        "youtubeembeddedplayer.googleapis.com",
        "ytimg.l.google.com",
        "jnn-pa.googleapis.com",
        "youtube-nocookie.com",
        "youtube-ui.l.google.com",
        "yt-video-upload.l.google.com",
        "wide-youtube.l.google.com",
        "youtu.be",
        "yt.be",
        "ggpht.com"
    ];

    // Функция проверки принадлежности хоста к списку доменов и поддоменов
    function isInProxyList(host) {
        for (var i = 0; i < proxyDomains.length; i++) {
            if (dnsDomainIs(host, "." + proxyDomains[i]) || host === proxyDomains[i]) {
                return true;
            }
        }

        // Проверка поддоменов для ggpht.com и googlevideo.com
        if (shExpMatch(host, "*.ggpht.com") || shExpMatch(host, "*.googlevideo.com")) {
            return true;
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
