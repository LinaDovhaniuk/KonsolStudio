const mails = document.getElementsByClassName('zA');
for( let mail in mails ){
    if( ( mail + 1 ) % 3 == 0 ) {
        mails[mail].style.display = "none";
    }
};