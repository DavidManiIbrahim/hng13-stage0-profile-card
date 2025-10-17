function follow() {
    alert("You are now following David Mani Ibrahim!");
}

function message() {
    alert("Message sent to David Mani Ibrahim!");
}

function updateTime() {
    const utcTimeElement = document.getElementById("utcTime")
    const now = new Date()
    utcTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`

}