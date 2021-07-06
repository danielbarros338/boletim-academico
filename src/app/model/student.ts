export class Student {
    private id: Number;
    private registration: Number;
    private numClass: Number;
    private name: string;
    private frequency: Number;
    private registrationArr: Array<any>;

    constructor(private json: any){
        this.id = json['id'];
        this.registration = json['matricula'];
        this.numClass = json['turma'];
        this.frequency = json['freq'];
        this.name = json['nome'];
        this.registrationArr = [
            {
                matter: json['glb'],
                rec: this._rec(json['glb'])
            },{
                matter: json['cie'],
                rec: this._rec(json['cie'])
            },{
                matter: json['ef'],
                rec: this._rec(json['ef'])
            },{
                matter: json['geo'],
                rec: this._rec(json['geo'])
            },{
                matter: json['his'],
                rec: this._rec(json['his'])
            },{
                matter: json['lp'],
                rec: this._rec(json['lp'])
            },{
                matter: json['mat'],
                rec: this._rec(json['mat'])
            },{
                matter: json['art'],
                rec: this._rec(json['art'])
            },{
                matter: json['ing'],
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
        return this.registration;
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
        return this.registrationArr[id].matter;
    }

    getRec(id: number): any{
        return this.registrationArr[id].rec;
    }
}
