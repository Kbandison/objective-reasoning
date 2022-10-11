// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else{
        return false;
    }
}

function getEmail(user){
    let email = `${user.firstName}.${user.lastName}@codeimmersives.com`;
    return email.toLowerCase();
}

function getPlaylistLength(playlist) {
    return playlist.songs.length;
}

function getHardestHomework(homeworkArr){
    if(homeworkArr.length === 0){
        return '';
    }
    let lowestScore = homeworkArr[0];
    for(let i = 0; i < homeworkArr.length; i++){
        if (homeworkArr[i].averageScore < lowestScore.averageScore){
            lowestScore = homeworkArr[i];
        }
    }
    return lowestScore.name;
}

function createPhonebook(namesArr, numbersArr){
    let phonebook = {};
    for (let i = 0; i < namesArr.length; i++){
        phonebook[namesArr[i]] = numbersArr[i];
    }
    return phonebook;
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};