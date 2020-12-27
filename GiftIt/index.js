function setname(){
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const nameField = document.getElementById('name');
    nameField.innerHTML = name;
}

function createLink() {
    const nameField = document.getElementById('name-input');
    //const outputField = document.getElementById('shareLink');
    const whatsapp = document.getElementById('whatsapp');
    const messenger = document.getElementById('messenger')
    const mail = document.getElementById('mail')

    posturl = location.protocol + '//' + location.host + "/GiftIt/nl/christmas.html?name=" + nameField.value
    whatsapp.href = 'https://api.whatsapp.com/send?text=🎁There%20is%20a%20gift%20available%20for%20you🎁%0aCheck%20it%20out%20at:%20'+ posturl;

    mail.href = 'mailto: ?subject=🎁There%20is%20a%20gift%20available%20for%20you🎁&body=🎁There%20is%20a%20gift%20available%20for%20you🎁Check%20it%20out%20at:%20'+ posturl;

    messenger.href = 'fb-messenger://share?link='+ posturl;
    //outputField.innerHTML = location.protocol + '//' + location.host+'/GiftIt/nl/christmas.html?name=' + nameField.value
}

function copy() {
    const nameField = document.getElementById('name-input');
    const copyField = document.getElementById('copyField')
    copyField.type = 'visable'
    posturl = location.protocol + '//' + location.host + "/GiftIt/nl/christmas.html?name=" + nameField.value
    copyField.value = '🎁There is a gift available for you🎁Check it out at: ' + posturl;
    copyField.select();
    copyField.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyField.type = 'hidden'
}

function language_dutch() {
    const dutch = document.getElementById('language-dutch');
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    posturl = location.protocol + '//' + location.host + "/GiftIt/en/christmas.html?name="
    dutch.href = posturl + name;
} 

function language_english() {
    const english = document.getElementById('language-english');
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');

    posturl = location.protocol + '//' + location.host + "/GiftIt/nl/christmas.html?name="
    english.href = posturl + name;
} 

function setyear() {
    var d = new Date();
    var n = d.getFullYear();
    var y = n + 1;
    document.getElementById("currentyear").innerHTML = y;
}

function settitle(){
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    window.document.title = 'GiftIt | '+name
}

function onload(){
    setyear();
    setname();
    settitle();
}



//background audio
