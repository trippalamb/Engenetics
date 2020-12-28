class PrimaryStat {
    constructor(name) {
        this.name = name;
    }
}

const primaryList = {
    "str": new PrimaryStat("str"),
    "dex": new PrimaryStat("dex"),
    "con": new PrimaryStat("con"),
    "int": new PrimaryStat("int"),
    "wis": new PrimaryStat("wis"),
    "chr": new PrimaryStat("chr")
}

class PrimaryStatistics {
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

class DerivedStatisitcs {
    constructor(primary) {
        this.update(primary);
    }

    update(primary) {
        //this.hp = traits.con * 10.0 + traits.str*2.0;
        //this.atk = traits.str * 5.0;
    }
}

class Slime {
    constructor(genome) {
        this.dna = new DNA(genome);
        this.proteins = {};
        this.primary = new PrimaryStatistics(2, 5);
        this.baseDerived = new DerivedStatisitcs(this.traits);
        this.derived = this.baseDerived;
        this.condition = new Condition();
        this.age = 0;
    }

    timestep(targetAge, environment) {
        var ticks = targtAge - this.age;

        this.proteins.add(this.dna.produce(ticks, environment, this.condition))

        this.age += targetAge;
    }
}

const databank = new ProteinDataBank(3, primaryList);
const slimeGenome = new Genome(databank, 2, 3); //<-- this is next
var slime = new Slime(slimeGenome);
var time = 0;
const endTime = 10;

do while (time <= endTime) {
    slime.timestep(time);
    time += 1;
}