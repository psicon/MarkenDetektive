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
			},
		 
			gallery : {
				lastSwipe : false,
				dragStarted : false,
				dragStartX : 0,
				bindEvents : function() {
					$(".ui-page").on("click",".nativeDroidGallery li:not('.active')",function() {

						lastSwipe = nativeDroid.plugins.gallery.lastSwipe;
						nativeDroid.plugins.gallery.dragStarted = false;

						orig = $(this);
						$(".overlay").show();
						
						if(!lastSwipe) {
							$(this).addClass("active");
						} else if(lastSwipe == "left") {
							$(this).addClass("active").addClass("noTransition").addClass("slideRight");
							setTimeout(function() {
								orig.removeClass("noTransition").removeClass("slideRight");
							},1);
						} else if(lastSwipe == "right") {
							$(this).addClass("active").addClass("noTransition").addClass("slideLeft");
							setTimeout(function() {
								orig.removeClass("noTransition").removeClass("slideLeft");
							},1);
						}

						$(this).css({
							"background-image" : "url('"+$(this).data("image-thumb")+"')"
						});
						
						$(this).css({
							"background-image" : "url('"+$(this).data("image-large")+"')"
						});

					}).on("mousedown touchstart",".nativeDroidGallery li.active .closeTrigger",function() {
						$(this).parent().removeClass("active");
						$(".overlay").hide();
					}).on("swipeleft",".nativeDroidGallery li.active:not('.zoom')",function(e) {
						e.preventDefault();
						var orig = $(this);
						orig.addClass("slideLeft");
						setTimeout(function() {
							orig.removeClass("active").css({"left":"auto"}).removeClass("slideLeft").removeClass("slideRight");
						},500);
						next = $(this).next("li");
						if(next.length == 1) {
							nativeDroid.plugins.gallery.lastSwipe = "left";
							next.trigger("click");
						} else {
							nativeDroid.plugins.gallery.lastSwipe = false;
							$(".overlay").hide();
						}

						// Re-Apply thumbnail

						thumb = orig.data("image-thumb");
						$(this).css({
							"background-image" : "url('"+thumb+"')"
						});

					}).on("swiperight",".nativeDroidGallery li.active:not('.zoom')",function(e) {
						e.preventDefault();

						var orig = $(this);

						orig.addClass("slideRight");
						setTimeout(function() {
							orig.removeClass("active").css({"left":"auto"}).removeClass("slideLeft").removeClass("slideRight");
						},500);
						prev = $(this).prev("li");
						if(prev.length == 1) {
							nativeDroid.plugins.gallery.lastSwipe = "right";
							prev.trigger("click");
						} else {
							nativeDroid.plugins.gallery.lastSwipe = false;
							$(".overlay").hide();
						}
						
						// Re-Apply thumbnail

						thumb = orig.data("image-thumb");
						$(this).css({
							"background-image" : "url('"+thumb+"')"
						});
						
					}).on("mousedown touchstart",".nativeDroidGallery li.active:not('.zoom')",function(e) {
						nativeDroid.plugins.gallery.dragStartX = (e.type == "touchstart") ? e.originalEvent.touches[0].screenX : e.screenX;
						nativeDroid.plugins.gallery.dragStarted = true;
						$(this).addClass("noTransition");
					}).on("mouseup touchend",".nativeDroidGallery li.active:not('.zoom')",function(e) {
						$(this).removeClass("noTransition").css({"left":"auto"});
						nativeDroid.plugins.gallery.dragStarted = false;
					}).on("mousemove touchmove",".nativeDroidGallery li.active:not('.zoom')",function(e) {
						e.preventDefault();
						mousedown = nativeDroid.plugins.gallery.dragStarted;
						if(mousedown) {
							distance = (e.type == "touchmove") ? parseInt(e.originalEvent.touches[0].screenX) - parseInt(nativeDroid.plugins.gallery.dragStartX) : e.screenX - nativeDroid.plugins.gallery.dragStartX;
							if(distance > 30 || distance < -30) {
								$(this).css("left",distance+"px");
							}
						}
					});
				},
				ini : function(obj) {
					obj.addClass("nativeDroidGallery");
					nativeDroid.plugins.gallery.bindEvents();					
				}
			},
			splashscreen : {
				container : false,
				background : false,
				time : 3,
				animation : false,
				bindEvents : function() {
					// No events yet
				},
				create : function() {
					var obj = nativeDroid.plugins.splashscreen.container;
					var bg = nativeDroid.plugins.splashscreen.background;
					var animation = nativeDroid.plugins.splashscreen.animation;
					if(bg) {
						obj.addClass("nativeDroidSplashscreen").css({
							"background-image" : "url('"+bg+"')"
						});
						delay = nativeDroid.plugins.splashscreen.time * 1000;
						setTimeout(function() {
							if(animation) {
								obj.addClass(animation);
							}
							setTimeout(function() {
								obj.remove();
							},500);
						},delay);
					}					
				},
				ini : function(obj) {
					nativeDroid.plugins.splashscreen.container = obj;
					nativeDroid.plugins.splashscreen.time = parseInt(obj.data("nativedroid-splashscreen-time"));
					nativeDroid.plugins.splashscreen.background = obj.data("nativedroid-background");
					nativeDroid.plugins.splashscreen.animation = obj.data("nativedroid-splashscreen-animation");
					nativeDroid.plugins.splashscreen.create();
				}
			},
			lockscreen : {
				container : false,
				background : false,
				delay : 25,
				display : false,
				lastactivity : initialTime,
				animation : "fadeOut",
				bindEvents : function() {
					$(".ui-page").on("click",".nativeDroidLockscreen .unlock",function() {
						nativeDroid.plugins.lockscreen.close();
					}).on("touchstart touchend touchmove mousemove click tap",function() {
						nativeDroid.plugins.lockscreen.lastactivity = new Date().getTime();
					});
					nativeDroid.plugins.lockscreen.startCheckInactivity();
				},
				startCheckInactivity : function() {
					delay = nativeDroid.plugins.lockscreen.delay * 1000;
					setTimeout(function() {
						setTimeout(function() {
							nativeDroid.plugins.lockscreen.checkInactivity();
						},delay);
					});
				},
				checkInactivity : function() {
					display = nativeDroid.plugins.lockscreen.display;
					activity = nativeDroid.plugins.lockscreen.lastactivity;
					delay = nativeDroid.plugins.lockscreen.delay * 1000;
					now = new Date().getTime();
					if(!display && (delay < (now - activity))) {
						nativeDroid.plugins.lockscreen.open();
					} else {
						// Calculate next check
						nextCheck = delay - (now - activity);
						setTimeout(function() {
							nativeDroid.plugins.lockscreen.checkInactivity();
						},nextCheck);
					}
				},
				open : function() {
					nativeDroid.plugins.lockscreen.container.fadeIn(500);
					nativeDroid.plugins.lockscreen.display = true;
				},
				close : function() {
					nativeDroid.plugins.lockscreen.container.fadeOut(500);
					nativeDroid.plugins.lockscreen.display = false;
					nativeDroid.plugins.lockscreen.startCheckInactivity();
				},
				create : function() {
					nativeDroid.plugins.lockscreen.bindEvents();
					var obj = nativeDroid.plugins.lockscreen.container;
					var bg = nativeDroid.plugins.lockscreen.background;
					var animation = nativeDroid.plugins.lockscreen.animation;
					if(bg) {
						obj.addClass("nativeDroidLockscreen").css({
							"background-image" : "url('"+bg+"')"
						});
					}
				},
				ini : function(obj) {
					nativeDroid.plugins.lockscreen.container = obj;
					nativeDroid.plugins.lockscreen.delay = parseInt(obj.data("nativedroid-lockscreen-delay"));
					nativeDroid.plugins.lockscreen.background = obj.data("nativedroid-background");
					nativeDroid.plugins.lockscreen.animation = obj.data("nativedroid-lockscreen-animation");
					nativeDroid.plugins.lockscreen.create();
				}
			},
			homescreen : {
				container : false,
				background : false,
				currentslide : 1,
				dragStartX : 0,
				dragStated : false,
				slides : false,
				bindEvents : function() {
					$(".ui-page").on("swipeleft swiperight","div[data-nativedroid-role='screenslide']",function(e) {
						direction = e.type;
						e.preventDefault();
						slides = nativeDroid.plugins.homescreen.slides;
						thisIdx = parseInt($(this).data("nativedroid-screenslide-idx"));
						nextIdx = thisIdx + 1;
						prevIdx = thisIdx - 1;
						nextIdx = (nextIdx > slides) ? 1 : nextIdx;
						prevIdx = (prevIdx < 1) ? slides : prevIdx;
						if(slides > 1) {
							if(direction == "swiperight") {
								nativeDroid.plugins.homescreen.slide(thisIdx,prevIdx,direction);
							} else {
								nativeDroid.plugins.homescreen.slide(thisIdx,nextIdx,direction);
							}											
						}
					}).on("mousedown touchstart",".nativeDroidHomescreen",function(e) {
						nativeDroid.plugins.homescreen.dragStartX = (e.type == "touchstart") ? e.originalEvent.touches[0].screenX : e.screenX;
						nativeDroid.plugins.homescreen.dragStarted = true;
						homeScreenSlideObj = $(".nativeDroidHomescreen div[data-nativedroid-screenslide-idx='"+nativeDroid.plugins.homescreen.currentslide+"']");
						homeScreenSlideObj.addClass("noTransition");
					}).on("mouseup touchend",".nativeDroidHomescreen",function(e) {
						homeScreenSlideObj = $(".nativeDroidHomescreen div[data-nativedroid-screenslide-idx='"+nativeDroid.plugins.homescreen.currentslide+"']");
						homeScreenSlideObj.removeAttr('style').removeClass("noTransition");
						nativeDroid.plugins.homescreen.dragStarted = false;
					}).on("mousemove touchmove",".nativeDroidHomescreen",function(e) {
						mousedown = nativeDroid.plugins.homescreen.dragStarted;
						e.preventDefault();
						if(mousedown) {
							distance = (e.type == "touchmove") ? parseInt(e.originalEvent.touches[0].screenX) - parseInt(nativeDroid.plugins.homescreen.dragStartX) : e.screenX - nativeDroid.plugins.homescreen.dragStartX;
							if(distance > 30 || distance < -30) {
								homeScreenSlideObj = $(".nativeDroidHomescreen div[data-nativedroid-screenslide-idx='"+nativeDroid.plugins.homescreen.currentslide+"']");
								homeScreenSlideObj.css("left",distance+"px");
							}
						}
					});
					$("body,.ui-page,.ui-body,.ui-content").css({
						"overflow" : "hidden"
					});
				},
				slide : function(from,to,direction) {
					newClassFrom = (direction == "swipeleft") ? "left" : "right";
					$(".nativeDroidHomescreen div[data-nativedroid-screenslide-idx='"+from+"']").removeClass("left").removeClass("right").addClass(newClassFrom);
					
					var tmpClassTo = (direction == "swipeleft") ? "rightNoTransition" : "leftNoTransition";
					var toObj = $(".nativeDroidHomescreen div[data-nativedroid-screenslide-idx='"+to+"']");
					toObj.addClass(tmpClassTo).removeClass("left").removeClass("right");
					setTimeout(function() {
						toObj.removeClass(tmpClassTo);
						nativeDroid.plugins.homescreen.currentslide = to;
						nativeDroid.plugins.homescreen.updateSlideIndicators();
					},50);
				},
				create : function() {
					obj = nativeDroid.plugins.homescreen.container;
					obj.addClass("nativeDroidHomescreen");
					bg = nativeDroid.plugins.homescreen.background;
					if(bg) {
						obj.css({
							"background-image" : "url('"+bg+"')"
						});
					}
					i = 1;
					obj.find("[data-nativedroid-role='screenslide']").each(function() {
						$(this).attr("data-nativedroid-screenslide-idx",i);
						if(i > 1) {
							$(this).addClass("right");/*.attr("draggable",true);*/
						}
						i++;						
					});
					nativeDroid.plugins.homescreen.slides = i - 1;
					nativeDroid.plugins.homescreen.createSlideIndicators();
					nativeDroid.plugins.homescreen.createWidgets();
					nativeDroid.plugins.homescreen.bindEvents();
				},
				createSlideIndicators : function() {
					total = nativeDroid.plugins.homescreen.slides;
					current = nativeDroid.plugins.homescreen.currentslide;
					if(total > 1) {
						html = "<div class='nativeDroidScreenSlideIndicators'>";
						for(i = 1; i <= total; i++) {
							currentClass = (i == current) ? " active" : "";
							html += "<div class='blobs"+currentClass+"' data-nativedroid-screenslide-indicator='"+i+"'></div>";
						}
						html += "</div>";
						nativeDroid.plugins.homescreen.container.append(html);
					}
				},
				updateSlideIndicators : function() {
					current = nativeDroid.plugins.homescreen.currentslide;
					$(".nativeDroidScreenSlideIndicators .blobs").removeClass("active");
					$(".nativeDroidScreenSlideIndicators .blobs[data-nativedroid-screenslide-indicator='"+current+"']").addClass("active")
				},
				createWidgets : function() {
					widgetsObj = nativeDroid.plugins.homescreen.container.find("[data-nativedroid-role='widget']");
					widgetsObj.addClass("nativeDroidHomescreenWidget");
					widgetsObj.each(function() {
						type = $(this).data("nativedroid-widget-type");
							if(type && nativeDroid.plugins.homescreen.widget[type]) {
								new nativeDroid.plugins.homescreen.widget[type].ini($(this));
							} else if(type) {
								console.log(type+" - is not a valid nativeDroid homescreen widget.")
							}
						});
				},
				widget : {
					clock : {
						container : false,
						currentMin : 0,
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
							cLang = nativeDroid.plugins.homescreen.widget.clock.language;
							type = cLang.type;
							lang = cLang.set;
							retStr = "--empty-string--";								
							if(type == "long") {
								dayStr = cLang[lang].dayLong[day];
								monthStr = cLang[lang].monthLong[month];								
							} else if(type == "short") {
								dayStr = cLang[lang].dayShort[day];
								monthStr = cLang[lang].monthShort[month];								
							}
							retStr = cLang[lang].order(day,dayStr,date,month,monthStr,year);
							return retStr;
						},
						getClockHTML : function() {
							html = "<div class='ClockTime'>";
								d = new Date();
								hours = (d.getHours() < 10) ? "0"+d.getHours() : d.getHours();
								min = (d.getMinutes() < 10) ? "0"+d.getMinutes() : d.getMinutes();
								time = hours+":"+min;						
								nativeDroid.plugins.homescreen.widget.clock.currentMin = d.getMinutes();
								html += "<div class='time'>"+time+"</div>";
								date = nativeDroid.plugins.homescreen.widget.clock.getTodayString(d.getDay(),d.getDate(),d.getMonth(),d.getFullYear());						
								html += "<div class='date'><i class='icon-calendar'></i> "+date+"</div>";
							html += "</div>";
							return html;
						},
						create : function() {
							cObj = nativeDroid.plugins.homescreen.widget.clock;
							cObj.container.addClass("nativeDroidWidgetClock");
							cObj.container.html(cObj.getClockHTML());
							cObj.run(); 
						},
						update : function() {
							nativeDroid.plugins.homescreen.widget.clock.container.html(nativeDroid.plugins.homescreen.widget.clock.getClockHTML());
						},
						run : function() {
							cMin = nativeDroid.plugins.homescreen.widget.clock.currentMin;
							now = new Date();
							if(cMin != now.getMinutes()) {
								nativeDroid.plugins.homescreen.widget.clock.update();
							}
							nextRun = (61 - now.getSeconds()) * 1000;
							setTimeout(function() {
								nativeDroid.plugins.homescreen.widget.clock.run();
							},nextRun);
						},
						ini : function(obj) {
							nativeDroid.plugins.homescreen.widget.clock.container = obj;
							if(obj.data("nativedroid-widget-clock-format")) {
								nativeDroid.plugins.homescreen.widget.clock.language.type = obj.data("nativedroid-widget-clock-format");
							}
							if(obj.data("nativedroid-widget-clock-lang")) {
								nativeDroid.plugins.homescreen.widget.clock.language.set = obj.data("nativedroid-widget-clock-lang");
							}
							nativeDroid.plugins.homescreen.widget.clock.create();
						}
					},
					reader : { },
					icon : {
						container : false,
						iconType : "text",
						iconClass : "icon-question-sign",
						iconTitle : "Your Icon",
						iconLink : "#",
						bindEvents : function() {
							$("div[data-nativedroid-role='widget']").on("click",".nativeDroidIconWidget",function() {
								window.location.href = $(this).attr('data-nativedroid-icon-href');
							});
						},
						create : function() {
							html = "";
							if(nativeDroid.plugins.homescreen.widget.icon.iconType == "text") {
								html = "<div class='nativeDroidIconWidget' data-nativedroid-icon-href='"+nativeDroid.plugins.homescreen.widget.icon.iconLink+"'><i class='"+nativeDroid.plugins.homescreen.widget.icon.iconClass+"'></i><span>"+nativeDroid.plugins.homescreen.widget.icon.iconTitle+"</span></div>";
							}
							if(html != "") {
								nativeDroid.plugins.homescreen.widget.icon.container.html(html);
							}
							nativeDroid.plugins.homescreen.widget.icon.bindEvents();
						},
						ini : function(obj) {

							nativeDroid.plugins.homescreen.widget.icon.container = obj;

							nativeDroid.plugins.homescreen.widget.icon.iconType = obj.data("nativedroid-widget-icon-type");
							nativeDroid.plugins.homescreen.widget.icon.iconClass = obj.data("nativedroid-widget-icon-class");
							nativeDroid.plugins.homescreen.widget.icon.iconTitle = obj.data("nativedroid-widget-icon-title");
							nativeDroid.plugins.homescreen.widget.icon.iconLink = obj.data("nativedroid-widget-icon-link");

							nativeDroid.plugins.homescreen.widget.icon.create();							

						}
					}
				},
				ini : function(obj) {
					nativeDroid.plugins.homescreen.container = obj;
					bg = obj.data("nativedroid-background");
					nativeDroid.plugins.homescreen.background = (bg) ? bg : false;
					nativeDroid.plugins.homescreen.create();
				}
			}
		},
		api : {
			get : function(datatype,query,queryData,returnFn) {
			
			    $.ajax({
			        dataType: datatype,
			        url: query,
			        data : (queryData !== false) ? queryData : "",
			        success: returnFn,
			        error : function(errorData) {
			        	console.log("There is an error while your ajaxRequest: ");
			        	console.log("Query: "+query);
			        	console.log(errorData.responseText);
			        }
			    });
			},
			helper : {
				googlemaps : { }
			}
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
	
	 
});