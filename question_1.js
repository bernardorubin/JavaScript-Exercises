// Javascript Exercises
//
// Question 1: Ruby Hashes
// Implement a Ruby like Hash in Javascript. You will be able to use Object as a base to get most of the behaviour.
//
// Name the class Hash.
// Its constructor will take an object as argument.
// It should add support for the following ruby Hash methods as prototype methods:
// .empty (name it .isEmpty in Javascript)
// .merge (merges both hashes into a new hash and returns it)
// .hasKey (checks if key is in hash)
// .invert (returns a new Hash with keys & their values and vice versa)
// .inspect(display the hash ruby style as a string)
// .keys (returns all hash keys in an array)
// .values (returns all hash values in an array)
// All methods that return a hash must return a new Hash object.
// Don't overthink this. Javascript Objects and Ruby Hashes are similar.
//
// Example usage:
//
// let emptyHash = new Hash({});
// let hash = new Hash({a: 1, b: 2, c: 3});
//
// hash.isEmpty() // returns false
// emptyHash.isEmpty() // returns true
//
// let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
// // returns Hash {a: 1, b: 2, c: 3, bob: 'yo', jane: 'ya'}
// // should not mutate original hash
//
// merged !== hash // should be true
//
// hash.hasKey('a') // returns true
// hash.hasKey('bob') // returns false
// merged.hasKey('bob') // returns true
//
// // Values will have to made into strings
// hash.invert() // returns Hash {'1':'a', '2':'b', '3':'c'}
//
// hash.inspect() // returns "{'a' => 1, 'b' => 2, 'c' => 3}"
//
// hash.keys() // returns ['a', 'b', 'c']
// hash.values() // returns [1, 2, 3]

class Hash {
  constructor (object) {
    this.object = object;
  }
  isEmpty () { return Object.keys(this.object).length === 0 ; }


//DOESNT RETURN NEW OBJECT!!!
  merge (object1) {
    this.newObject = object1
    // this.new_obj = new Hash(Object.assign(this.object,this.newObject.object));
    this.new_obj = Object.assign(this.object, this.newObject.object);
    console.log(this.new_obj);
    return this.new_obj;
    }

  hasKey (arg) {
    let keys = Object.keys(this.object);
    if ( keys.indexOf(arg) === -1) {return false;
    } else {return true;}}

    //My solution ->
    // this.arg = arg.toString()
    // for (let key in this.object) {
    //   if (key === this.arg) {
    //     return true;
    //   } else {return false;}}
    // }

  invert () {
              let keys = Object.keys(this.object);
              let values = Object.values(this.object);
              let thing = {};
              for (let key in keys) {
                for (let value in values){
                  thing[values[value]] = keys[value]
                }
              }
              // console.log(thing);
              return thing;

  }
  inspect () {
              let keys = Object.keys(this.object);
              let values = Object.values(this.object);
              let string = "{";
              for (let key in keys) {
                for (let value in values){
                  string += `'${keys[value]}' => ${values[value]},`
                }
              }
              string = string.slice(0, -1);
              string += "}";

              console.log(string);
              return string;
            }
  keys () { return Object.keys(this.object); }
  values () { return Object.values(this.object); }
}

// return new hash not a collector


let emptyHash = new Hash({});
let hash = new Hash({a: 1, b: 2, c: 3});

// hash.isEmpty() // returns false
// emptyHash.isEmpty() // returns true


let merged = hash.merge(new Hash({bob: 'yo', jane: 'ya'}));
hash.hasKey('d') // returns true

hash.invert() // returns Hash {'1':'a', '2':'b', '3':'c'}
hash.inspect()
hash.keys()
hash.values()
