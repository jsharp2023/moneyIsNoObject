// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
//1.
 function isAdmin(user){
    return user.userRole === 'ADMIN'

}
//2.
const getEmail = function(user){
    let firstInitial = user.firstName.toLowerCase()[0]
    let lastNameLowerCase = user.lastName.toLowerCase()
    return firstInitial + lastNameLowerCase + '.prsvr@gmail.com'
}
//3.
const getPlaylistLength = function(playList){
    
    return playList.songs.length
  }
  //4.
  const getHardestHomework = function(arr){
    if(arr.length === 0){
        return ''
    }
    let hardestHomework = arr[0].name
    let lowestScore = arr[0].averageScore
    for(let i = 1; i < arr.length; i++){
        if(arr[i].averageScore < lowestScore){
            lowestScore = arr[i].averageScore
            hardestHomework = arr[i].name
        }
    }
    return hardestHomework

  }
  //5.
  const createPhonebook = function(names, numbers){
    let phonebook = {}
    for(let i = 0; i < names.length; i++){
        phonebook[names[i]] = numbers[i]
    }
    return phonebook

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