// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘
//1.
const isAdmin = function(obj){
    return obj.userRole === 'ADMIN'

}
//2.
const getEmail = function(obj){
    let firstInitial = obj.firstName.toLowerCase()[0]
    let lastNameLowerCase = obj.lastName.toLowerCase()
    return firstInitial + lastNameLowerCase + '.prsvr@gmail.com'
}
//3.
const getPlaylistLength = function(playList){
    let length = 0;
    playList.forEach(function(song))
      length += song.songs.length;
    
    return length;
  }
  //4.
  const getHardestHomework = function(homework){
    let highest = 0;
    homework.forEach(function(assignment){
      if(assignment.difficulty > lowest){
        lowest = assignment.difficulty;
      }
    });
    return lowest;
  }
  //5.
  const createPhonebook = function(){
    
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