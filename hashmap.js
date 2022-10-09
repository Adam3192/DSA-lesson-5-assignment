const words = new Map()

const regex = /[! "#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

function compareStrings(stringA, stringB) {
  let word1 = stringA.replace(regex, '')
  let word2 = stringB.replace(regex, '')

  words.set('string1', word1)
  words.set('string2', word2)

  if (words.get('string1') == '') {
    console.log('No')
  } else if (words.get('string2').includes(words.get('string1'))) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

compareStrings('ello', 'hello, friend!')
compareStrings(', ', 'hello, friend!')
compareStrings('hello friend', 'hello, friend!')
compareStrings('lofri', 'hello, friend!')
compareStrings('hello, friend!', 'hello')
