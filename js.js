function goToHome() {
    document.getElementById("AlertPage").style.display = "none";
    document.getElementById("DataPage").style.display = "none";
    document.getElementById("AccountPage").style.display = "none"
    document.getElementById("SettingsPage").style.display = "none";
    document.getElementById("HomePage").style.display = "block";
}

function goToAlert() {
    document.getElementById("HomePage").style.display = "none";
    document.getElementById("AlertPage").style.display = "flex";
}

function goToData() {
    document.getElementById("HomePage").style.display = "none";
    document.getElementById("DataPage").style.display = "block";
}

function goToAccount() {
    document.getElementById("HomePage").style.display = "none";
    document.getElementById("AccountPage").style.display = "block";
}

function goToSettings() {
    document.getElementById("HomePage").style.display = "none";
    document.getElementById("SettingsPage").style.display = "block";
}
