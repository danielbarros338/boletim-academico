export class Student {
    public id: Number;
    public mat: Number;
    public numClass: Number;
    public name: string;
    public frequency: Number;
    public matObj: Object;

    constructor(private json: any){
        this.id = json['id'];
        this.mat = json['matricula'];
        this.numClass = json['turma'];
        this.frequency = json['freq'];
        this.name = json['nome'];
        this.matObj = [
            {
                global: json['glb'],
                rec: this._rec(json['glb'])
            },{
                ciencias: json['cie'],
                rec: this._rec(json['cie'])
            },{
                edfisica: json['ef'],
                rec: this._rec(json['ef'])
            },{
                geografia: json['geo'],
                rec: this._rec(json['geo'])
            },{
                historia: json['his'],
                rec: this._rec(json['his'])
            },{
                portugues: json['lp'],
                rec: this._rec(json['lp'])
            },{
                matematica: json['mat'],
                rec: this._rec(json['mat'])
            },{
                artes: json['art'],
                rec: this._rec(json['art'])
            },{
                ingles: json['ing'],
                rec: this._rec(json['ing'])
            }
        ]
    }

    _rec(gradePoint: string): string{
       if(gradePoint === "RI") return "SIM";
       return "--";
    }
}
