// On-Demand Module for BFlix®TV | M7 / Movian Media Center
// Version: 1.0
// Author: F0R3V3R50F7
var http = require('movian/http');
exports.ondemand = function (page) {
    function fetchTrending(type) {
        var apiUrl = "https://api.themoviedb.org/3/trending/" + type + "/week?api_key=a0d71cffe2d6693d462af9e4f336bc06";
        try {
            var response = showtime.httpGet(apiUrl).toString();
            console.log("[DEBUG]: Trending API URL: " + apiUrl);
            console.log("[DEBUG]: Trending API Response: " + response);
            return JSON.parse(response).results;
        } catch (error) {
            console.log("[DEBUG]: Error fetching trending " + type + ": " + error);
            return [];
        }
    }
    var trendingShows = fetchTrending('tv');
    if (service.selectRegion == "United States") {
    
        page.appendItem('m3u:https://raw.githubusercontent.com/BrianRVP/Ejemplo/main/ACCION:Redbox', 'video', { icon: 'https://raw.githubusercontent.com/BrianRVP/Png/main/Accion.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://raw.githubusercontent.com/BrianRVP/Ejemplo/main/Comedia:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/comedia.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://raw.githubusercontent.com/BrianRVP/Ejemplo/main/Infantiles:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/infantiles.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Drama:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/Drama.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://raw.githubusercontent.com/BrianRVP/Ejemplo/main/Romance:Redbox', 'video', { icon: 'https://raw.githubusercontent.com/BrianRVP/Png/main/romance.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Ciencia:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/ciencia%20ficcion%20.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Fantasia:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/fantasia.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Terror:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/terror.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Religion:Redbox', 'video', { icon: 'https://raw.githubusercontent.com/BrianRVP/Png/main/religi%C3%B3n.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Animac:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/animacion.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Marvel:Redbox', 'video', { icon: 'https://raw.githubusercontent.com/BrianRVP/Png/main/Marvel.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Dc:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/DC%20c%C3%B3mic.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/80:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/80y90.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Foun:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/fhound.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
        page.appendItem('m3u:https://github.com/BrianRVP/Ejemplo/raw/main/Hechos:Redbox', 'video', { icon: 'https://github.com/BrianRVP/Png/raw/main/hechos.png', });
        var pl = '';
        var specifiedGroup = '';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    }
    
    if (service.selectRegion == "United Kingdom") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:United Kingdom:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'United Kingdom';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Great Britain:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Great Britain';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fwww.apsattv.com%2Frakuten-uk.m3u:RakutenTV UK:Rakuten TV', 'video', { icon: 'https://cdn6.aptoide.com/imgs/4/0/e/40e4024425d9c9e0b311766303df3ef5_fgraphic.png', });
        var pl = 'https%3A%2F%2Fwww.apsattv.com%2Frakuten-uk.m3u';
        var specifiedGroup = 'RakutenTV UK';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_uk.m3u8:UK:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_uk.m3u8';
        var specifiedGroup = 'UK';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "France") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:France:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'France';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:France:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'France';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_france.m3u8:France:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_france.m3u8';
        var specifiedGroup = 'France';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Canada") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:Canada:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'Canada';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Canada:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Canada';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_canada.m3u8:Canada:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_canada.m3u8';
        var specifiedGroup = 'Canada';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Brazil") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Brazil:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Brazil';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_brazil.m3u8:Brazil:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_brazil.m3u8';
        var specifiedGroup = 'Brazil';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "South Korea") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:South Korea:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'South Korea';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_south korea.m3u8:South Korea:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_south_korea.m3u8';
        var specifiedGroup = 'South Korea';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Mexico") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Mexico:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Mexico';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_mexico.m3u8:Mexico:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_mexico.m3u8';
        var specifiedGroup = 'Mexico';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Chile") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Chile:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Chile';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_chile.m3u8:Chile:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_chile.m3u8';
        var specifiedGroup = 'Chile';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Germany") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Germany:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Germany';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_germany.m3u8:Germany:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_germany.m3u8';
        var specifiedGroup = 'Germany';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Switzerland") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:Switzerland:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'Switzerland';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_switzerland.m3u8:Switzerland:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_switzerland.m3u8';
        var specifiedGroup = 'Switzerland';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Denmark") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Denmark:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Denmark';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_denmark.m3u8:Denmark:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_denmark.m3u8';
        var specifiedGroup = 'Denmark';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Sweden") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Sweden:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Sweden';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_sweden.m3u8:Sweden:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_sweden.m3u8';
        var specifiedGroup = 'Sweden';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Spain") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:Spain:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'Spain';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Spain:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Spain';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_Spain.m3u8:Spain:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_spain.m3u8';
        var specifiedGroup = 'Spain';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Austria") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:Austria:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'Austria';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_austria.m3u8:Austria:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_austria.m3u8';
        var specifiedGroup = 'Austria';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Italy") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:Italy:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'Italy';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Italy:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Italy';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_Italy.m3u8:Italy:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_italy.m3u8';
        var specifiedGroup = 'Italy';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "India") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8:India:Samsung TV Plus', 'video', { icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoCZ8qaWdvSKWo5MoYQM10z02ta6IO_-U9_JT2cBVxBaIps5m', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FSamsungTVPlus%2Fall.m3u8';
        var specifiedGroup = 'India';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:India:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'India';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_India.m3u8:India:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_india.m3u8';
        var specifiedGroup = 'India';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
    
    if (service.selectRegion == "Norway") {
    
        page.appendItem('m3uGroup:https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8:Norway:Pluto TV', 'video', { icon: 'https://images.pluto.tv/channels/5e793a7cfbdf780007f7eb75/colorLogoPNG.png', });
        var pl = 'https%3A%2F%2Fi.mjh.nz%2FPlutoTV%2Fall.m3u8';
        var specifiedGroup = 'Norway';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
        page.appendItem('m3uGroup:https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_norway.m3u8:Norway:Over-The-Air', 'video', { icon: 'https://myriadrf.org/app/uploads/2017/04/ota-banner-central.jpg', });
        var pl = 'https%3A%2F%2Fraw.githubusercontent.com%2FFree-TV%2FIPTV%2Fmaster%2Fplaylists%2Fplaylist_norway.m3u8';
        var specifiedGroup = 'Norway';
        var limit = '4';
        var parsedData = iprotM3UParser(page, pl, specifiedGroup, limit);
        var items = parsedData.items;
        items.forEach(function(item) {
            addChannels(page, [item], specifiedGroup, limit); // Use addChannels to add each item
        });
    
    }
};