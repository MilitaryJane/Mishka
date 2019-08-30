(function () {


    if (document.querySelector(".contacts__map")) {
        var imageMap = document.querySelector(".contacts__map-image");

        function initMap() {
            var element = {
                lat: 59.938939,
                lng: 30.323186
            };
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 17,
                center: element
            });
            var marker = new google.maps.Marker({
                position: element,
                map: map,
                draggable: true,
                icon: {
                    url: './img/map-pin.svg',
                    scaledSize: new google.maps.Size(67, 100)
                }
            });
        }

        function hideImageMap() {
            imageMap.classList.add("visually-hidden");
        }

        window.onload = hideImageMap;
        window.addEventListener("load", initMap);
    }
})();