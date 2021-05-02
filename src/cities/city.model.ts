export class City {
    public id: string;
    public name: string;
    public rating: number;
    public comments: string[];
    public size: number;

    constructor(
        id: string,
        name: string,
        rating: number,
        comments: string[],
        size: number) {
            this.id = id;
            this.name = name;
            this.rating = rating;
            this.comments = comments;
             this.size = size;
        }
}