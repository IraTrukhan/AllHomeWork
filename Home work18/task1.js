class Song{
    _listeners = [];
    constructor (title, artist){
        this.title = title;
        this.artist = artist;
    }        

    // get title(){
    //     return this._title;
    // }

    // get artist(){
    //     return this._artist;
    // }

    // set title(newTitle){
    //     this.title = newTitle;
    // }

    // set artist(newArtist){
    //     this.artist = newArtist;
    // }

    howMany(...peoples){
        let newListeners = [];
        let peopleLower;
        for (let people of peoples) {
            peopleLower = people.toLowerCase();
            if (!this._listeners.includes(peopleLower)){
                newListeners.push(peopleLower);
                this._listeners.push(peopleLower);
            }
        }
        return newListeners.length;
    }
}

const mountMoose = new Song("mountMoose", "The Snazzy Moose");
console.log(mountMoose.howMany('JoHn', 'Fred', 'BoB', 'Marly', 'Tom'));
console.log(mountMoose._listeners);
console.log(mountMoose.howMany('John', 'Ann', 'Marly', 'Ted'));
console.log(mountMoose._listeners);
   