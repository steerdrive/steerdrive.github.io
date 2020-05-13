<script>

    var form_id_js = "contactForm";

    var data_js = {
        "access_token": "x30jltu12txe7ol20xw2c16s"
    };

    var sendButton = document.getElementById("email_submit");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();

        var subject = document.querySelector("#" + form_id_js + " [name='email_subject']").value;
        var message = document.querySelector("#" + form_id_js + " [name='email_message']").value;
        var number = document.querySelector("#" + form_id_js + " [name='email_number']").value;
        var email_address = document.querySelector("#" + form_id_js + " [name='email_address']").value;
        var name = document.querySelector("#" + form_id_js + " [name='email_name']").value;
        data_js['subject'] = subject;
        data_js['text'] = "Sent by: " + name + ", Email: " + email_address + ", Number: " + number + "\n" + message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
</script>