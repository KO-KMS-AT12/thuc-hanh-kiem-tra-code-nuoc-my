function isUsZipCode(str) {
    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if (regexp.test(str)) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

isUsZipCode('7892');
isUsZipCode('78921-1234');
isUsZipCode('024-124-141');
isUsZipCode('24-1?24|141');
isUsZipCode('03201-2150');
