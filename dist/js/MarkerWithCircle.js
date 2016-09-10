function inherits(b,a){function c(){}c.prototype=a.prototype;b.superClass_=a.prototype;b.prototype=new c();b.prototype.constructor=b}function MarkerCircle_(a,b){this.marker_=a;this.circle_=b}inherits(MarkerCircle_,google.maps.OverlayView);MarkerCircle_.prototype.onAdd=function(){this.listeners_=[];this.circle_.setMap(this.marker_.getMap());if(!this.marker_.getDraggable()){return}var d=this;var b=false;var e=false;var a;var f=function(g){if(g.preventDefault){g.preventDefault()}g.cancelBubble=true;if(g.stopPropagation){g.stopPropagation()}};var c=function(){d.marker_.setAnimation(null)};this.listeners_=[google.maps.event.addListener(this.marker_,"dragstart",function(){console.debug("marker drag start!!!");if(!b){e=true;google.maps.event.trigger(d.circle_,"drag")}}),google.maps.event.addListener(this.marker_,"drag",function(){console.debug("dragging marker!!!");if(!b){d.setPosition()}}),google.maps.event.addListener(this.marker_,"dragend",function(){e=false;if(!b){d.setPosition()}}),google.maps.event.addListener(this.marker_,"position_changed",function(){d.setPosition()}),google.maps.event.addListener(this.marker_,"zindex_changed",function(){d.setZIndex()}),google.maps.event.addListener(this.marker_,"visible_changed",function(){d.setVisible()}),]};MarkerCircle_.prototype.onRemove=function(){var a;this.circle_.setMap(null);for(a=0;a<this.listeners_.length;a++){google.maps.event.removeListener(this.listeners_[a])}};MarkerCircle_.prototype.draw=function(){};MarkerCircle_.prototype.setPosition=function(){this.circle_.setCenter(this.marker_.getPosition());this.setZIndex()};MarkerCircle_.prototype.setZIndex=function(){};MarkerCircle_.prototype.setVisible=function(){this.circle_.setVisible(this.marker_.getVisible())};function MarkerWithCircle(a){a=a||{};a.radius=a.radius||0;a.fillColor=a.fillColor||"red";a.fillOpacity=a.fillOpacity||0.2;a.strokeColor=a.strokeColor||"red";a.strokeOpacity=a.strokeOpacity||0.4;a.center=a.position;if(typeof a.draggable==="undefined"){a.draggable=false}if(typeof a.clickable==="undefined"){a.clickable=true}a.crossImage=a.crossImage||"http"+(document.location.protocol==="https:"?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/drag_cross_67_16.png";a.handCursor=a.handCursor||"http"+(document.location.protocol==="https:"?"s":"")+"://maps.gstatic.com/intl/en_us/mapfiles/closedhand_8_8.cur";a.optimized=false;var b=new google.maps.Circle({clickable:false,draggable:a.draggable,editable:false,fillColor:a.fillColor,fillOpacity:a.fillOpacity,strokeColor:a.strokeColor,strokeOpacity:a.fillOpacity,radius:a.radius,map:a.map,center:a.center,visible:true});this.mycircle=new MarkerCircle_(this,b);google.maps.Marker.apply(this,arguments)}inherits(MarkerWithCircle,google.maps.Marker);MarkerWithCircle.prototype.setMap=function(a){google.maps.Marker.prototype.setMap.apply(this,arguments);this.mycircle.setMap(a)};