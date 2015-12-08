window.onload = function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
        var map = new YMaps.Map(document.getElementById("YMapsID"));
    
        // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
        map.setCenter(new YMaps.GeoPoint(52.96293975, 36.08510825), 10);
    };