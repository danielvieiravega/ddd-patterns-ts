import Address from "./address";

export default class Customer {
    
    private _id: string;
    private _name: string;
    private _address!: Address;
    private _active: boolean = false;
    private _rewardPoints: number = 0;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;

        this.validate();
    }

    get name(): string {
        return this._name;
    }

    isActive(): boolean {
        return this._active;
    }

    validate() {
        if (this._id.length === 0) {
            throw new Error("Id is required");
        }
        if (this._name.length === 0) {
            throw new Error("Name is required");
        }
    }

    changeName(name: string) { 
        this._name = name;
    }
    
    activate() {    
        if (this._address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }   

    set Address(address: Address) {
        this._address = address;
    }

    get id(): string {
        return this._id;
    }

    get rewardPoints(): number {
        return this._rewardPoints;
    }

    addRewardsPoints(points: number) {
        if (points < 0) {
            throw new Error("Points must be greater than zero");
        }

        this._rewardPoints += points;
    }

}

let customer = new Customer("123", "John");