// What is $(document).ready ? See: http://flowplayer.org/tools/documentation/basics.html#document_ready
//************** SLIDESHOW

//index slideshow
$(function() {
    $(".index-slidetabs").tabs(".index-images > div", {

            // enable "cross-fading" effect
            effect: 'fade',
            fadeOutSpeed: "slow",

            // start from the beginning after the last tab
            rotate: true

    // use the slideshow plugin. It accepts its own configuration
    }).slideshow({ 
        autoplay: true,
        interval: 4000,
        clickable: false
    });
});

//homepage slideshow
$(function() {
    $(".slidetabs").tabs(".images > div", {

            // enable "cross-fading" effect
            effect: 'fade',
            fadeOutSpeed: "slow",

            // start from the beginning after the last tab
            rotate: true

    // use the slideshow plugin. It accepts its own configuration
    }).slideshow({ 
        autoplay: true,
        interval: 10000,
        clickable: false
    });
});

$(function() {
    $(".event-slidetabs").tabs(".event-images > div", {

            // enable "cross-fading" effect
            effect: 'fade',
            fadeOutSpeed: "slow",

            // start from the beginning after the last tab
            rotate: true

    // use the slideshow plugin. It accepts its own configuration
    }).slideshow({
        autoplay: true,
        clickable: false
    });
});

$(function() {//When the Dom is ready
    $('.load_more').live("click",function() {//If user clicks on hyperlink with class name = load_more
        var last_msg_id = $(this).attr("id");
        //Get the id of this hyperlink 
        //this id indicate the row id in the database 
        if(last_msg_id!='end'){
        //if  the hyperlink id is not equal to "end"
    $.ajax({//Make the Ajax Request
        type: "POST",
        url: "results.php",
        data: "lastmsg="+ last_msg_id, 
        beforeSend:  function() {
    $('a.load_more').html('<img src="../images/loadingnow.gif" />');//Loading image during the Ajax Request

    },
    success: function(html){//html = the server response html code
        $("#more").remove();//Remove the div with id=more 
    $("div.su-contentbox").append(html);//Append the html returned by the server .

        }
        });
    }
    return false;
    });
});

$(document).ready(function(){

//************** Comment form
    // on 'comment' click
    $("a#write_comment").click(function() {
        $("div.comment_form").css("display","block");//Show
        $("div.comment_default").css("display","none");//Hide
        return false;
    });
    //On Focus Event: Comments section
    $("textarea.input-txtarea-sm").focusin(function() {
        $("div.comment_form").css("display","block");//Show
        $("div.comment_default").css("display","none");//Hide
        return false;
    });

//************** PROFILE PAGE
    // add as friend popup
    $("a#click").bind('click', function(){
        $("#addfriend_pu").bPopup({fadeSpeed:1, followSpeed:1, opacity:0.8, modalClose:true});
            return false
    });
    // send message popup
    $("a#click2").bind('click', function(){
        $("#sendmsg_pu").bPopup({fadeSpeed:1, followSpeed:1, opacity:0.8, modalClose:true});
            return false
    });
    // change mugshot popup
    $("a#click3").bind('click', function(){
        $("#mugshot_pu").bPopup({fadeSpeed:1, followSpeed:1, opacity:0.8, modalClose:true});
            return false
    });
    // switch profile popup
    $("a#click4").bind('click', function(){
        $("#switch_pu").bPopup({fadeSpeed:1, followSpeed:1, opacity:0.8, modalClose:true});
            return false
    });
    // delete photo popup
    $("a#click5").bind('click', function(){
        $("#xphoto_pu").bPopup({fadeSpeed:1, followSpeed:1, opacity:0.8, modalClose:true});
            return false
    });
    // delete album popup
    $("a#click6").bind('click', function(){
        $("#xalbum_pu").bPopup({fadeSpeed:1, followSpeed:1, opacity:0.8, modalClose:true});
            return false
    });

//************** INDEX PAGE LOGIN & SIGNUP
    // show login form
    $("#show-login-true").click(function() {
        $("#show-login").slideDown("slow");
        $("#show-signup").slideUp("slow");
        return false;
    });
    $("#show-signup-true").click(function() {
        $("#show-login").slideUp("slow");
        $("#show-signup").slideDown("slow");
        return false;
    });

    //signup page
    $("#fullname").click(function() {
        $("#su-tip1").fadeIn();
        $("#su-tip1").css("display","block");
        $("#su-tip1").css("padding-top","5px");
        $("#fullname").val('');
        $("#alterego").val('Alter Ego');
        $("#password").val('Password');
        $("#email").val('Email Address');
        $("#su-tip2").fadeOut();
        $("#su-tip3").fadeOut();
        $("#su-tip4").fadeOut();
    });
    $("#alterego").click(function() {
        $("#su-tip2").fadeIn();
        $("#su-tip2").css("display","block");
        $("#su-tip2").css("padding-top","5px");
        $("#fullname").val('Full Name');
        $("#alterego").val('');
        $("#password").val('Password');
        $("#email").val('Email Address');
        $("#su-tip1").fadeOut();
        $("#su-tip3").fadeOut();
        $("#su-tip4").fadeOut();
    });
    $("#password").click(function() {
        $("#su-tip3").fadeIn();
        $("#su-tip3").css("display","block");
        $("#su-tip3").css("padding-top","5px");
        $("#fullname").val('Full Name');
        $("#alterego").val('Alter Ego');
        $("#password").val('');
        $("#email").val('Email Address');
        $("#su-tip1").fadeOut();
        $("#su-tip2").fadeOut();
        $("#su-tip4").fadeOut();
    });
    $("#email").click(function() {
        $("#su-tip4").fadeIn();
        $("#su-tip4").css("display","block");
        $("#su-tip4").css("padding-top","5px");
        $("#fullname").val('Full Name');
        $("#alterego").val('Alter Ego');
        $("#password").val('Password');
        $("#email").val('');
        $("#su-tip1").fadeOut();
        $("#su-tip2").fadeOut();
        $("#su-tip3").fadeOut();
    });
    $(document).click(function(event) {
        if ( $(event.target).closest('#signup-tbl').get(0) == null ) {
            $("#fullname").val('Full Name');
            $("#alterego").val('Alter Ego');
            $("#password").val('Password');
            $("#email").val('Email Address');
            $("#su-tip1").fadeOut();
            $("#su-tip2").fadeOut();
            $("#su-tip3").fadeOut();
            $("#su-tip4").fadeOut();
        }
    });
//************** MAIN MENU DROPDOWN
    // messages menu dropdown
    $("li#messages").mouseover(function() {
        $("li#messages .sub").show();
    }).mouseout(function() {
        $("li#messages .sub").hide();
    });
    // events menu dropdown
    $("li#events").mouseover(function() {
        $("li#events .sub").show();
    }).mouseout(function() {
        $("li#events .sub").hide();
    });
    // entourage menu dropdown
    $("li#entourage").mouseover(function() {
        $("li#entourage .sub").show();
    }).mouseout(function() {
        $("li#entourage .sub").hide();
    });

    //************** PRIVACY SETTINGS
    $("li.postit-privacy").mouseover(function() {
        $(".privacy-sub").show();
    }).mouseout(function() {
        $(".privacy-sub").hide();
    });
    //if privacy button is clicked, show/hide privacy dropdown
    //$("img.privacy-btn").toggle(
    //  function () {
    //    $(".privacy-sub").show();
    //  },
    //  function () {
    //    $(".privacy-sub").hide();
    //  }
    //);
    $(".privacy-sub").click(function() {
        $(".privacy-sub").hide();
        return false;
    })
    //if click outside, hide privacy dropdown
    //$(document).click(function(event) {
    //    if ( $(event.target).closest('.privacy-sub').get(0) == null ) {
    //        $(".privacy-sub").hide(); }
    //});

    //************** CUSTOM SELECT
    $('#Items').selectbox();

    //************** REPLY TO COMMENT
    $(".reply-to").click(function() {
        $(".thisComment").show();
        $(".user-pic").hide();
        $(".reply-to-btn").hide();
        return false;
    })
    $(".sub-comment-txtarea").focus(function() {
        $(".user-pic").show();
        $(".reply-to-btn").show();
        return false;
    })
    //if click outside, hide
    $(document).click(function(event) {
        if ( $(event.target).closest('.thisComment').get(0) == null ) {
            $(".thisComment").hide();
        }
    });
    
    //************** ATTACHMENT TYPE
    $("#addFile").click(function(){
        $("#file").show();
        $("#link").hide();
        $("#addFile").addClass("active");
        $("#addLink").removeClass("active");
        $("#addPhoto").removeClass("active");
        return false;
    })
    $("#addPhoto").click(function(){
        $("#file").show();
        $("#link").hide();
        $("#addPhoto").addClass("active");
        $("#addLink").removeClass("active");
        $("#addFile").removeClass("active");
        return false;
    })
    $("#addLink").click(function(){
        $("#file").hide();
        $("#link").show();
        $("#addLink").addClass("active");
        $("#addPhoto").removeClass("active");
        $("#addFile").removeClass("active");
        return false;
    })
    //if click outside, hide privacy dropdown
    $(document).click(function(event) {
        if ( $(event.target).closest('#attachment').get(0) == null ) {
            $("#file").hide();
            $("#link").hide();
            $("#addLink").removeClass("active");
            $("#addPhoto").removeClass("active");
            $("#addFile").removeClass("active");
        }
    });
    
    //************** REPLY TO MESSAGE
    $(".isReply, .isReply-btn, .isForward").click(function() {
        $("#isReply-frm").show();
        return false;
    })
    //if click outside, hide
    $(document).click(function(event) {
        if ( $(event.target).closest('#isReply-frm').get(0) == null ) {
            $("#isReply-frm").hide();}
    });

    //************** Profile Questionaire Accordion
    //Set default open/close settings
    $('.acc_container').hide(); //Hide/close all containers
    $('.acc_trigger:first').addClass('active').next().hide(); //Add "active" class to first trigger, then show/open the immediate next container, default is show()

    //On Click
    $('.acc_trigger').click(function(){
            if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
                    $('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
                    $(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
            }
            return false; //Prevent the browser jump to the link anchor
    });

    //************** Photos Page
    //show-hide the remove image
    $('.event-photo-box').mouseover(function(){
        $(this).find('.photo-removeThis').show();
    });
    $('.event-photo-box').mouseout(function(){
        $(this).find('.photo-removeThis').hide();
    });

    //On Click
    $('.acc_trigger').click(function(){
            if( $(this).next().is(':hidden') ) { //If immediate next container is closed...
                    $('.acc_trigger').removeClass('active').next().slideUp(); //Remove all .acc_trigger classes and slide up the immediate next container
                    $(this).toggleClass('active').next().slideDown(); //Add .acc_trigger class to clicked trigger and slide down the immediate next container
            }
            return false; //Prevent the browser jump to the link anchor
    });    

});

Cufon.replace('.Myriad', { fontFamily:'Myriad Pro', hover:'true'});

