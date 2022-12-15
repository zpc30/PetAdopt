export class AdoptList {
    count: number;
    results: Adopt[]
    constructor(obj?: any) {
        this.count = obj && obj.count || null;
        this.results = obj && obj.results && obj.results.map((el:any)=> new Adopt(el)) || [];
    }
}

export class Adopt {
    petId: number;
    petName: string;
    _id: number;
    name: string;
    contact: string;
    constructor(obj?:any) {
        this.petId = obj && obj.petId || null;
        this.petName = obj && obj.petName || '';
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || '';
        this.contact = obj && obj.contact || '';
    }
}