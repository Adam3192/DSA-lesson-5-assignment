// The time complexity for my function will be O(1) and the space complexity will be O(n).

// Using a hash map is more efficient than using an array because it has a much faster search ability 
// than an array, time complexity on lookup is constant O(1) , but the array would be slower with a 
// time complexity of O(n).

const words = new Map()

const regex = /[! "#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

function compareStrings(stringA, stringB) {
  let word1 = stringA.replace(regex, '')
  let word2 = stringB.replace(regex, '')

  words.set('string1', word1)
  words.set('string2', word2)

  if (words.get('string1') == '' && words.get('string2') !== '') {
    console.log('No')
  } else if (words.get('string2').includes(words.get('string1'))) {
    console.log('Yes')
  } else {
    console.log('No')
  }

  console.log(words.entries());
}

compareStrings('ello', 'hello, friend!')
compareStrings(', ', 'hello, friend!')
compareStrings('hello friend', 'hello, friend!')
compareStrings('lofri', 'hello, friend!')
compareStrings('hello, friend!', 'hello')
