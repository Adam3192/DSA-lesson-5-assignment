// Create a basic Hash table
class HashTable {
 constructor() {
   this.values = {}; //store key-value pairs in its index
   this.length = 0 // length of hash table
 }

  // Let's create a simple hash function that determines the key based on a characteristic of the string, such as the length. 
  
  // Simple CalculateHash function that determines the key based on length of string
 calculateHash(key){
    return key.toString().length;
  }
  
put(key, value) {
    const hash = this.calculateHash(key);
  // Checks if hash value exists or not:
    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
  // Add the hash element
    this.values[hash][key] = value;
  }

  get(key) {
     const hash = this.calculateHash(key);
     if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
     } else {
       return null;
     }
  }
}

//create object of type hash table
const hash_table = new HashTable();
//add data to the hash table
hash_table.put("EEE", "6")
hash_table.put("FFF", "9")
hash_table.put("A", "2")
hash_table.put("C", "4")
hash_table.put("BB", "1")
hash_table.put("DD", "6")

console.log(hash_table)
// Let's try searching for a string in the hash table
console.log("Search for the string A:")
console.log(hash_table.get("A"))

/* The output:
HashTable {
  values: {
    '1': { A: '2', C: '4' },
    '2': { BB: '1', DD: '6' },
    '3': { EEE: '6', FFF: '9' }
  },
  length: 6
}
Search for the string A:
2
*/
