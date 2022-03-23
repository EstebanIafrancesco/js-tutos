let phrase = "How are you doing today my friend";
let phraseReversed = phrase.split(' ')
    .map(el => el.split(''))
    .map(el => el.reverse())
    .map(el => el.join(''))
    .reduce( (acc, ini) => {
        return acc + ' ' + ini;
    }, 'This phrase: ' + phrase + ', reversed looks like this: ' );
    // console.log(phrase);
    console.log(phraseReversed);