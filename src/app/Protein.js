class Protein {
    constructor(name, max, sf, shift, primaryList) {
        this.name = name;
        this.affecting = Math.ceiling(Math.random() * max);
        this.sf = sf;

        let pl = Object.keys(primaryList);
        let ii = [...Array(pl.length).keys()];

        this.affected = [];
        for (let j = 0; j < this.affecting; j++) {
            let i = ii.splice(Math.floor(Math.random() * ii.length));
            this.affected.push({
                name: pl[i],
                change: (Math.random()+shift) * sf
            })
        }

    }

}

module.exports = Protein;