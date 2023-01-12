class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for ( let i = 0; i < key.length; i++ ) {
            hash = ( hash + key.charCodeAt(i) * i ) % this.data.length;
        }
        return hash;
    }

    get(key) {
        const hash = this._hash(key);
        if ( !this.data[hash] ) return undefined;
        for ( const element of this.data[hash] ) {
            if ( key === element[0] ) return element[1];
        }
        return undefined;
    }

    set(key, value) {
        const hash = this._hash(key);
        if ( !this.data[hash] ) {
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);
    }

    keys() {
        let keySet = [];
        this.data.forEach(element => {
            if ( element.length > 0 ) {
                element.forEach(kvPair =>  keySet.push(kvPair[0]));
            }
        });
        return keySet;
    }
}

const ht = new HashTable(50);
ht.set('a', 100);
ht.set('b', 50);
ht.set('james', 20);
ht.set('timothy', 70);
ht.set('mountain', 80056);

console.log(ht.get('mountain'));
console.log(JSON.stringify(ht.keys()));