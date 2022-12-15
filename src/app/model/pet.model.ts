export class PetList {
    count: number;
    results: Pet[];
    constructor(obj?:any) {
        this.count = obj && obj.count || null;
        this.results = obj && obj.results && obj.results.map((el:any)=> new Pet(el))
    }
}

export class Pet {
    _id: number;
    name: string;
    category: string;
    sex: string;
    size_kg: number;
    story: string;
    image: string;
    constructor(obj?:any) {
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.category = obj && obj.category || '';
        this.sex = obj && obj.sex || '';
        this.size_kg = obj && obj.size_kg || null;
        this.story = obj && obj.story || '';
        this.image = obj && obj.image || '';
    }
}