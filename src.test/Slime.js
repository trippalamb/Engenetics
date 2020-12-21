const traitList = {
    "str": {

    },
    "con": {

    }
}

class Traits {
    constructor(baseStrength, baseConstitution) {
        this.str = baseStrength;
        this.con = baseConstitution;
    }

    update(proteins) {
        for (const key in proteins) {
            for (const trait in traits) {
                this[proteins[key].traits[trait].name] += proteins[key].traits[trait].delta;
            }
        }
    }
}

class Properties {
    constructor(traits) {
        this.update(traits);
    }

    update(traits) {
        this.hp = traits.con * 10.0 + traits.str*2.0;
        this.atk = traits.str * 5.0;
    }
}

class Slime {
    constructor(genome) {
        this.dna = new DNA(genome);
        this.proteins = {};
        this.traits = new Traits(2, 5);
        this.baseProps = new Properties(this.traits);
        this.props = this.baseProps;
        this.condition = new Condition();
        this.age = 0;
    }

    timestep(targetAge, environment) {
        var ticks = targtAge - this.age;

        this.proteins.add(this.dna.produce(ticks, environment, this.condition))

        this.age += targetAge;
    }
}

const databank = new ProteinDataBank(3, traitList);
const slimeGenome = new Genome(databank, 2, 3);
var slime = new Slime(slimeGenome);
var time = 0;
const endTime = 10;

do while (time <= endTime) {
    slime.timestep(time);
    time += 1;
}