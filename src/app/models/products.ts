export class Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    amount: string;

    constructor(id: number, name: string, price: number, url: string, description: string, amount: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.description = description;
        this.amount = amount;
    }
}
