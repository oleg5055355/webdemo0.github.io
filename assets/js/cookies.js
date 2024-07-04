document.getElementById('saveName').addEventListener('click', function() {
    const name = document.getElementById('userName').value;
    if (name) {
        setCookie('userName', name, 365);
        displayUserName();
    }
});

window.onload = function() {
    displayUserName();
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function displayUserName() {
    const name = getCookie('userName');
    if (name) {
        document.getElementById('displayName').textContent = name;
    } else {
        document.getElementById('displayName').textContent = 'Not set';
    }
}
