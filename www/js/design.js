var colorCode = "@COLOR_CODE@";
var audioValue = "@NO_AUDIO@";
var imageValue = "@NO_IMAGE@";
var supportName = "@SUPPORT_NAME@";
var feedbackScreenTitle = "@FEEDBACK_SCREEN_TITLE@";
var statusBarTitle = "@STATUS_BAR_TITLE@";

var design = {
    initialize: function() {
        $(".form").css({"background-color": colorCode});
        var temp = "@STATUS".concat("_BAR_TITLE@");
        if(statusBarTitle != temp) {
            $(".status-label-custom").text(statusBarTitle);
        } else {
            $(".status-label-custom").text("Konotor Sample App");
        }
        var name = window.localStorage.getItem("name");
        var setNameStatus = window.localStorage.getItem("nameStatus");
        if(setNameStatus == "1"){
            konotor.setUserName(name); //setting name value because its not getting set previously.
            window.localStorage.removeItem("nameStatus");//removing item from local storage
        }
    }
};
design.initialize();
