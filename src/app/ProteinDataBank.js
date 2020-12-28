class ProteinDataBank {
    constructor(n, primaryList) {

        this.n = n;
        this.proteins = {};

        for (let i = 0; i < n; i++) {
            let name = "";
            do { name = nameGenerator(); } while (typeof (this.proteins[name]) !== "undefined") // create a unique name
            this.proteins[name] = new Protein(name, 3, 1.0, -0.2, primaryList);
        }

    }
}

function nameGenerator() {

    let name = "";
    let c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let cl = c.length;

    for (let i = 0; i < 4; i++) {
        name += c.charAt(Math.floor(Math.random() * cl));
    }

    return name;
}

module.exports = ProteinDataBank;