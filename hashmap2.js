class HashTable {
 constructor() {
   this.values = {}; //store key-value pairs in its index
   this.length = 0 // length of hash table
 }

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

const hash_table = new HashTable();
hash_table.put("EEE", "6")
