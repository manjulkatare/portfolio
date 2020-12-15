
            $(document).ready(function() {
            
                // Script for Ajax form
                $("#contactform").validationEngine({
                   ajaxSubmit: true,
                       ajaxSubmitFile: "sendemail.php",
                       ajaxSubmitMessage: "Thank you for your message. I will get back to you at my earliest. Please be patient.",
                   //success :  false, scroll:false,
                   failure : function() {  }
                })
                
                
                // SCRIPT FOR FLAWPANES
                $("#flowpanes").scrollable({size: 1}).circular().navigator({           
                    navi: "#flowtabs", 
                    naviItem: 'a', 
                    activeClass: 'current' 
                });
            
                
                // let the fish swim in footer
                $('#fish').pan({fps: 6, speed: 6, dir: 'right'});
                
                
                // SCRIPT FOR NAVBAR-LINKS  
                $("#t1").hover(function(){
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                    $("#t1").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                });
                $("#t2").hover(function(){
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                    $("#t2").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                });
                $("#t3").hover(function(){
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                    $("#t3").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                });
                $("#t4").hover(function(){
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                    $("#t4").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                });
                $("#t5").hover(function(){
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                    $("#t5").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                });
                
                
                // SCRIPT FOR THUMBNAILS 
                $("a.#thumb1").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb1").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb2").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb2").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb3").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb3").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb4").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb4").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb5").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb5").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb6").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb6").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb7").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb7").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb8").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb8").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb9").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb9").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb10").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb10").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb11").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb11").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb12").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb12").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb13").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb13").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb14").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb14").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb15").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb15").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb16").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb16").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb17").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb17").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb18").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb18").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb19").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb19").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb20").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb20").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb21").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb21").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb22").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb22").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb23").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb23").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb24").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb24").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb25").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb25").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb26").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb26").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb27").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb27").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb28").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb28").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb29").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb29").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                     });
                $("a.#thumb30").hover(function(){ 
                    $(this).animate({"opacity": "0.25"}, "slow");
                    });
                $("a.#thumb30").mouseout(function(){
                    $(this).animate({"opacity": "1"}, "slow");
                    });
   
   
                // SCRIPT FOR SLIDING-BOX TOGGLEING
                $("#showextra").click(function(){ 
                    $("#footerblock").slideToggle("slow");
                    $(this).toggleClass("active"); return false;
                });
               
               
                // Close more-info and reset the label 
                $("#navbar").hover( function(){
                    $("#footerblock").hide("normal");
                    $("#showextra").removeClass("active");
                    return false; 
                });                	
                
            });     // All the document ready function ends here


            //SCRIPT FOR ACCORDIION 1, 2 & 3
            $(function() { 
                // action for main accordion
                $("#acc1").tabs("#acc1 div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
            });
            
            $(function() { 
                // action for experience blocks
                $("#acc2").tabs("#acc2 div.pane", {tabs: 'h2', effect: 'slide', initialIndex: null});
            });
            
            $(function() {
                // action for certifications in portfolio blocks
                $("#acc3").tabs("#acc3 div", { tabs: 'img', effect: 'horizontal' });
            });
             

            //SCRIPT FOR OVERLAY EXTERNAL PAGE
            $(function() {
            $("a[rel]").overlay({
                expose: '#333',
                //effect: 'apple',
                onBeforeLoad: function() { 
                    // grab wrapper element inside content
                    var wrap = this.getContent().find(".contentWrap");
                    // load the page specified in the trigger
                    wrap.load(this.getTrigger().attr("href"));
                    }
                });
            });
            
    