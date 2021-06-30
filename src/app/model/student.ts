export class Student {
    private id: Number;
    private mat: Number;
    private numClass: Number;
    private name: string;
    private frequency: Number;
    private matObj: Array<any>;

    constructor(private json: any){
        this.id = json['id'];
        this.mat = json['matricula'];
        this.numClass = json['turma'];
        this.frequency = json['freq'];
        this.name = json['nome'];
        this.matObj = [
            {
                mat: json['glb'],
                rec: this._rec(json['glb'])
            },{
                mat: json['cie'],
                rec: this._rec(json['cie'])
            },{
                mat: json['ef'],
                rec: this._rec(json['ef'])
            },{
                mat: json['geo'],
                rec: this._rec(json['geo'])
            },{
                mat: json['his'],
                rec: this._rec(json['his'])
            },{
                mat: json['lp'],
                rec: this._rec(json['lp'])
            },{
                mat: json['mat'],
                rec: this._rec(json['mat'])
            },{
                mat: json['art'],
                rec: this._rec(json['art'])
            },{
                mat: json['ing'],
                rec: this._rec(json['ing'])
            }
        ]
    }

    _rec(gradePoint: string): string{
       if(gradePoint === "RI") return "SIM";
       return "--";
    }

    getId(): Number{
        return this.id;
    }

    getMat(): Number{
        return this.mat;
    }

    getNumClass(): Number{
        return this.numClass;
    }

    getName(): string{
        return this.name;
    }

    getFrequency(): Number{
        return this.frequency;
    }

    getGrade(id: number): any{
        return this.matObj[id].mat;
    }

    getRec(id: number): any{
        return this.matObj[id].rec;
    }
}
