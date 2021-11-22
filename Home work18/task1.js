// create an instance method named howMany() in class Song
class Song{
    _listeners = [];
    constructor (title, artist){
        this.title = title;
        this.artist = artist;
    }       
    howMany(...peoples){
        let newListeners = [];
        let peopleLower;
        peoples.forEach((item) => {
            peopleLower = item.toLowerCase();
            if (!this._listeners.includes(peopleLower)){
                newListeners.push(peopleLower);
                this._listeners.push(peopleLower);
            }
        })
        return newListeners.length;
    }
}

const mountMoose = new Song("mountMoose", "The Snazzy Moose");
console.log(mountMoose.howMany('JoHn', 'Fred', 'BoB', 'Marly', 'Tom'));
console.log(mountMoose._listeners);
console.log(mountMoose.howMany('John', 'Ann', 'Marly', 'Ted'));
console.log(mountMoose._listeners);
   