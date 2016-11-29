function initMap() {
    
    var places = [];

        var pittsburgh = {pos:null, text:null};
        pittsburgh.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Pittsburgh</h1>'+
            '<div id="bodyContent">'+
            '<p><b>Pittsburgh</b> is my home town.'+
            '<p>(last visited January 5, 2016).</p>'+
            '</div>'+
            '</div>';
        pittsburgh.pos = {lat: 40.4397, lng: -79.9764};
        places[places.length]=pittsburgh;

    
        var tegucigalpa = {pos:null, text:null};
        tegucigalpa.pos = {lat: 14.1000, lng: -87.2167};
        tegucigalpa.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Tegucigalpa, Honduras</h1>'+
            '<div id="bodyContent">'+
            '<p>I spent a year here in 2001 with my family.'+
            '<p>(last visited February 2013).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=tegucigalpa;
    

        var costarica = {pos:null, text:null};
        costarica.pos= {lat: 9.9333, lng: -84.0833};
        costarica.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">San Jose, Costa Rica</h1>'+
            '<div id="bodyContent">'+
            '<p>Some of my best friends are from Costa Rica, and we visited in 2005. Ticos, Ticos!'+
            '<p>(last visited Summer 2005).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=costarica;
    
    
        var zamora = {pos:null, text:null};
        zamora.pos={lat: -4.0692, lng: -78.9567};
        zamora.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Guadalupe, Ecuador</h1>'+
            '<div id="bodyContent">'+
            '<p>Tranquilo! I spent 6 months in Ecuador with my family in 2006, both attending local school and home-schooling. That\'s where I really learned Spanish.'+
            '<p>(last visited July 2006).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=zamora;
    
        var bolivia = {pos:null, text:null};
        bolivia.pos={lat: -19.05, lng: -65.25};
        bolivia.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Sucre, Bolivia</h1>'+
            '<div id="bodyContent">'+
            '<p>Awesome trip to visit my sister, who was volunteering there for a year.'+
            '<p>(last visited February 2014).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=bolivia;
    
        var manaus = {pos:null, text:null};
        manaus.pos={lat: -3.1, lng: -60};
        manaus.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Manaus, Brazil</h1>'+
            '<div id="bodyContent">'+
            '<p>World Cup 2014!!!'+
            '<p>(last visited June 2014).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=manaus;
          
        var recife = {pos:null, text:null};
        recife.pos={lat: -8.05, lng: -34.9};
        recife.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Recife, Brazil</h1>'+
            '<div id="bodyContent">'+
            '<p>World Cup 2014!!!'+
            '<p>(last visited June 2014).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=recife;
    
       var sanse = {pos:null, text:null};
        sanse.pos={lat: 43.32, lng: -1.98};
        sanse.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">San Sebastian, Spain</h1>'+
            '<div id="bodyContent">'+
            '<p>Study Abroad Spring 2016: lots of travel, and engineering classes in Spanish!'+
            '<p>(current location).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=sanse;
    
        var hendaye = {pos:null, text:null};
        hendaye.pos={lat: 43.36, lng: -1.77};
        hendaye.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Hendaye, France</h1>'+
            '<div id="bodyContent">'+
            '<p>Went for a run from San Sebastian. Ended up in France...'+
            '<p>(last visited February 2016).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=hendaye;
    
        var cairo = {pos:null, text:null};
        cairo.pos={lat: 30.05, lng: 31.23};
        cairo.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Cairo, Egypt</h1>'+
            '<div id="bodyContent">'+
            '<p>Visited Aunt.'+
            '<p>(last visited 1999).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=cairo;
    
        var ramallah = {pos:null, text:null};
        ramallah.pos={lat: 31.9, lng: 35.2};
            ramallah.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Ramallah, West Bank, Palestine</h1>'+
            '<div id="bodyContent">'+
            '<p>Visited Aunt living there.'+
            '<p>(last visited Feburary 2009).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=ramallah;
    
        var istanbul = {pos:null, text:null};
        istanbul.pos={lat: 41.0136, lng: 28.955};
            istanbul.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Istanbul, Turkey</h1>'+
            '<div id="bodyContent">'+
            '<p>Family vacation'+
            '<p>(last visited Summer 2012).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=istanbul;
    
        var bangalore = {pos:null, text:null};
        bangalore.pos= {lat: 12.9667, lng: 77.57};
            bangalore.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Bangalore, India</h1>'+
            '<div id="bodyContent">'+
            '<p><a href="#Wipro">Internship with Wipro Technologies</a> for the Summer of 2014.'+
            '<p>(last visited July 2014).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=bangalore;
    
        var kashmir = {pos:null, text:null};
        kashmir.pos={lat: 33.45, lng: 76.24};
            kashmir.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Kashmir, India</h1>'+
            '<div id="bodyContent">'+
            '<p>Amazing 7-day backpacking trek in the mountains'+
            '<p>(last visited July 2014).</p>'+
            '</div>'+
            '</div>';
        places[places.length]=kashmir;
    
        var bangkok = {pos:null, text:null};
        bangkok.pos={lat: 13.7563, lng: 100.502};
            bangkok.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Bangkok, Thailand</h1>'+
            '</div>';
        places[places.length]=bangkok;
    
        var kohtao = {pos:null, text:null};
        kohtao.pos={lat: 10.1000, lng: 99.84};
            kohtao.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Koh Tao, Thailand</h1>'+
            '</div>';
        places[places.length]=kohtao;
    
        var singapore = {pos:null, text:null};
        singapore.pos={lat: 1.30, lng: 103.8};
            singapore.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Singapore, Singapore</h1>'+
            '</div>';
        places[places.length]=singapore;
    
        var kl = {pos:null, text:null};
        kl.pos={lat: 3.1333, lng: 101.7};
            kl.text = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Kuala Lumpur, Malaysia</h1>'+
            '</div>';
        places[places.length]=kl;
    
    
        
        var styles =[ {
            "stylers": [{ "color": "#019494" }]
            },
            {
            "featureType": "water",
            "stylers": [{ "lightness": -100 }]
            },
            {
            "elementType": "labels",
            "stylers": [{ "visibility": "off" }]
            }
        ];
        var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: {lat: 43.32, lng: -1.98},
          scrollwheel: false,
          mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
          } 
            
        });

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style'); 
    
    infowindow = new google.maps.InfoWindow();

    for (var i=0; i<places.length;i++){
        
       var marker = new google.maps.Marker({
            position: places[i].pos,
            map:map,
            title: 'Place'+i
        }); 
     
        marker.content = places[i].text;
    
        var infoWindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(this.content);
        infoWindow.open(this.getMap(), this);
        });

    }
        
}