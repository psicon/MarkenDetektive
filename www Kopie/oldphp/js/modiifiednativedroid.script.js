$(document).on("pageinit",function() {
	
	function strip_tags(input, allowed) {
	 allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
	  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
	    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
	  return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
	    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
	  });
	}
	
	// Vars
	
	var initialTime = new Date().getTime();
	
	// Obj
	
	nativeDroid = {
		basic : {
			dateFormat : {
				language : {
					set : "en",
					type : "short",
					en : {
						dayShort : ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
						dayLong : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
						monthShort : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
						monthLong : ["January","February","March","April","May","June","July","August","September","October","November","December"],
						order : function(day,dayStr,date,month,monthStr,year) {
							return dayStr+", "+monthStr+" "+date;
						}
					},
					de : {
						dayShort : ["So","Mo","Di","Mi","Do","Fr","Sa"],
						dayLong : ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
						monthShort : ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],
						monthLong : ["Januar","Februar","M&auml;rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
						order : function(day,dayStr,date,month,monthStr,year) {
							return dayStr+", "+date+". "+monthStr+" "+year;
						}
					}
				},
				getTodayString : function(day,date,month,year) {
					dfLang = nativeDroid.basic.dateFormat.language;
					type = dfLang.type;
					lang = dfLang.set;
					retStr = "--empty-string--";								
					if(type == "long") {
						dayStr = dfLang[lang].dayLong[day];
						monthStr = dfLang[lang].monthLong[month];								
					} else if(type == "short") {
						dayStr = dfLang[lang].dayShort[day];
						monthStr = dfLang[lang].monthShort[month];								
					}
					retStr = dfLang[lang].order(day,dayStr,date,month,monthStr,year);
					return retStr;
				},
				format : function(dateStr) {
					d = new Date(dateStr);
					return nativeDroid.basic.dateFormat.getTodayString(d.getDay(),d.getDate(),d.getMonth(),d.getFullYear());						
				}
			},
			touchEvent : function() {
				return ('ontouchstart' in document.documentElement) ? "touchstart" : "click";
			},
			disableScrollTop : function() {
				$(window).scrollTop(1);
				$(window).on("scroll",function() {
					if($(window).scrollTop() <= 0) {
						$(window).scrollTop(1);
					}
				});
			}
		},
		design : {
			animation : {
				delayedFadeIn : function() {
					obj = $(".delayedFadeIn");
					if(obj) {
						if(obj.length > 0) {
							delay = 2850;
							setTimeout(function() {
								$(".delayedFadeIn:last").fadeIn(1000).removeClass('delayedFadeIn');
								nativeDroid.design.animation.delayedFadeIn();
							},delay);
						}
					}
				}
			},
			progress : {
				loaded : false,
				ini : function() {
					$("body").prepend("<progress id='nativeDroidProgress' data-animation-time='5' value='0' max='100' class='nativeDroidProgress'></progress>");
					$(".ui-header").addClass("noborder");
					$(".nativeDroidProgress").attr("data-animation-time",0).attr("value",0);
					setTimeout(function() {
						nativeDroid.design.progress.createCSS($("body").data("nativedroid-progress-animation"));
						$(".nativeDroidProgress").attr("data-animation-time",5).attr("value",100);
					},300);
				},
				update : function(time) {
					roundedTime = (time % 5) >= 2.5 ? parseInt(time / 5) * 5 + 5 : parseInt(time / 5) * 5;
					nativeDroid.design.progress.createCSS(0);
					$(".nativeDroidProgress").attr("data-animation-time",0).attr("value",0);
					setTimeout(function() {
						$(".nativeDroidProgress").attr("data-animation-time",roundedTime);
						nativeDroid.design.progress.createCSS($(".nativeDroidProgress").attr("data-animation-time"));
						$(".nativeDroidProgress").attr("value",100);
					},300);
				},
				blink : function() {
					$(".nativeDroidProgress").fadeTo(500,0.5,function() {
						$(".nativeDroidProgress").fadeTo(500,1);
					});
				},
				createCSS : function(time) {
				    s = '.nativeDroidProgress::-webkit-progress-value { -webkit-transition: all ' + time + 's !important; }';
				    s += '.nativeDroidProgress::-moz-progress-bar { -moz-transition: all ' + time + 's !important; }';
					$("#progressLoadeStyle").remove();
					$("<style type='text/css' id='progressLoaderStyle'> "+s+" </style>").appendTo("head");
				}
			}
		},
		plugins : {
			cards : {
				ini : function(obj) {
					obj.addClass("nativeDroidCards");
					obj.find(" > li").each(function() {
						type = $(this).attr('data-cards-type');
						nativeDroid.plugins.cards.create[type]($(this));
					});
				},
				create : {
					text : function(obj) {
						console.log("text");
					},
					traffic : function(obj) {
						route = obj.data("cards-traffic-route");
						obj.find(".map").html("Display a route-map here [from: "+route.from+", to: "+route.to+"]");
						route.container = obj.find(".map").get(0);
						nativeDroid.api.helper.googlemaps.directions.getRoute(route);
					},
					weather : function(obj) {
						console.log("weather");
					},
					publictransport : function(obj) {
						console.log("publictransport");
					},
					sports : function(obj) {
						console.log("sports");
					}		
				}
			} , 
			 
			 
		}
	}
	
	
	// Events

	$("[data-nativedroid-plugin]").each(function(){
		if(nativeDroid.plugins[$(this).attr('data-nativedroid-plugin')]) {
			new nativeDroid.plugins[$(this).attr('data-nativedroid-plugin')].ini($(this));
		} else {
			console.log($(this).attr('data-nativedroid-plugin')+" - is not a valid nativeDroid plugin.")
		}
	});
	
	// Disabling scrollTop
	
 
	
});