class AlunoController{
    constructor(alunos)
    {
        this.alunos = [];
    };

    inserir(aluno)
    {

        if(this.alunos.find(aux => aux.codigo == aluno.codigo) && aluno.curso.alunos<=50)
        {
            return false;
        }
        else
        {
            this.alunos.push(aluno);
            console.log(this.alunos);
            return true;
        }
    }

    remover(codigo)
    {
        var indice = this.alunos.findIndex(aux => aux.codigo == codigo);
        for (const aux of this.alunos) {
            if(aux.codigo == codigo) {
                if(indice != -1)
                {
                    this.alunos.splice(indice, 1);
                    console.log(this.alunos);
                    return true;
                }
            }
        }
        return false;
    }

    alterar(aluno)
    {
        if(this.alunos.find(aux => aux.codigo == aluno.codigo))
        {
            var faltas; 
            do{
                faltas = parseInt(prompt("Digite as faltas: "));
            }while(isNaN(faltas) && faltas<0 && faltas>100);
            var notas = [];
            var nota;
            for(var i = 1; i<5; i++)
            {
                do{
                    nota = parseInt(prompt("Digite a nota "+i+": "));
                }while(isNaN(nota) || nota<0 || nota>100);
                notas.push(nota);
            }
            aluno.notas = notas;
            aluno.falta = faltas;
            return true;
        }
        else
        {
            return false;
        }
    }

    estado(aluno)
    {
        if(this.alunos.find(aux => aux.codigo == aluno.codigo))
        {
            if(aluno.falta<20 && aluno.notas[0]>=aluno.curso.mediaAprovacao && aluno.notas[1]>=aluno.curso.mediaAprovacao && aluno.notas[2]>=aluno.curso.mediaAprovacao && aluno.notas[3]>=aluno.curso.mediaAprovacao)
            {
                return "aprovado";
            }
            else
            {
                if(aluno.falta == undefined)
                {
                    return "Sem dados para anlisar";
                }
                else
                {
                    return "reprovado";
                }
            }
        }
    }
};