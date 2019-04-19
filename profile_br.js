var profile_collection = document.getElementsByClassName('ProfileHeaderCard-bio u-dir');
var text = profile_collection[0].innerHTML;
profile_collection[0].innerHTML = text.replace(' ', '<br/>')
                                      .replace('/', '<br/>');
