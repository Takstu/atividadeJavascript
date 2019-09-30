class CursoController{
    constructor()
    {
        this.cursos = [];
    }
    

    inserir(curso)
    {
        if(this.cursos.find(aux => aux.codigo == curso.codigo))
        {
            return false;
        }
        else
        {
            this.cursos.push(curso);
            return true;
        }
 
    }

    remover(codigo)
    {
        var indice = this.cursos.findIndex(aux => aux.codigo == codigo);
        for (const aux of this.cursos) {
            if(aux.codigo == codigo) {
                if(indice != -1 && aux.alunos==0)
                {
                    this.cursos.splice(indice, 1);
                    return true;
                }
            }
        }
        return false;
    }

    alterar(curso)
    {
        
    }
};
