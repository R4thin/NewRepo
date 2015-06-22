var totalValue = 0;
var key = "";
var keyValue = "";
var konotorform = {
    metafields:function() {
        var div = document.getElementById('addmetadata');
        if(totalValue<4) {
            div.innerHTML += ("<input type='text' name='key' id='key"+totalValue+"' placeholder='Key' class='form-control'><input type='text' name='value' id='value"+totalValue+"' placeholder='Value' class='form-control'><br/>");
            totalValue = totalValue + 1;
        } else {
            alert("Maximum of three fields only allowed");
        }
    },
    submit:function() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var identifier = document.getElementById("identifier").value;
            identifierSet();
            emailSet();
            userName();
            function identifierSet() {
                konotor.setIdentifier(identifier);
            }
            function emailSet() {
                konotor.setUserEmail(email);
            }
            function userName() {
                konotor.setUserName(name);
            }
            for(var i = 0;i<totalValue;i++)
            {
                key = document.getElementById("key"+i).value;
                keyValue = document.getElementById("value"+i).value;
                konotor.setUserMeta(key,keyValue);
            }
            konotor.setNoAudioRecording(audioValue);
            konotor.setNoPictureMessaging(imageValue);
            if(supportName !="@SUPPORT_NAME@") {
                konotor.setSupportName(supportName);
            }
            if(feedbackScreenTitle != "@FEEDBACK_SCREEN_TITLE@") {
                konotor.setFeedbackScreenTitle(feedbackScreenTitle);
            }
            window.localStorage.setItem("status", "1");
            window.localStorage.setItem("name", name);
            window.localStorage.setItem("nameStatus", "1");
            window.open("addAnother.html");
    }
};
