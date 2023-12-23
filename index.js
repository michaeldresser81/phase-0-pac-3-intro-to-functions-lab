function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    return
}
function logWhisper(string) {
    console.log(string.toLowerCase());
    return
}

function sayHiToHeadphonedRoommate(string) {
    switch(true) {

        case string.toLowerCase() === string:
            return "I can't hear you!";
        case string.toUpperCase() === string:
            return "YES INDEED!";
        case string === "Let's have dinner together!":
            return "I would love to!";
    }

}