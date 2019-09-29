var alunoController = new AlunoController;
var cursoController = new CursoController;

function main(){
    menu();
}

function menu(){
    while(true)
    {
    var optionMenu = Number(prompt("Digite a opção desejada: \n 1 - Curso\n 2 - Aluno\n 3 - Lançar Nota\n 4 - Relatório de Notas\n 9 - Sair"));
    do{
        switch(optionMenu)
        {
            case 1:
                var optMenuCurso = Number(prompt("CURSO\n Digite a opção desejada: \n 1 - Cadastrar\n 2 - Excluir\n 3 - Listar\n 9 - Voltar"));                do{
                    switch(optMenuCurso)
                    {
                        case 1:
                            do
                            {
                                var codigo = parseInt(prompt("Digite o codigo do curso (apenas numeros): "));
                            }while(isNaN(codigo));
                            var nome = prompt("Digite o nome do curos: ");
                            do
                            {
                            var media = parseInt(prompt("Digite a media de aprovação do curso (apenas numeros): "));
                            }while(isNaN(media) || media<0 || media>100);
                            var curso = new Curso(codigo, nome, media);

                            if(cursoController.inserir(curso))
                            {
                                alert("Curso criado com sucesso!");
                            }
                            else
                            {
                                alert("curso já inserido");
                            }
                            optMenuCurso = 9;
                            break;
                        case 2:
                            do
                            {
                                var codigo = parseInt(prompt("Digite o codigo do curso (apenas numeros): "));
                            }while(isNaN(codigo));
                            if(cursoController.remover(codigo))
                            {
                                alert("Curso removido com sucesso!");
                            }
                            else
                            {
                                alert("ainda há alunos no sistema");
                            }
                            optMenuCurso = 9;                            
                            break;
                        case 3:
                            if(cursoController.cursos.length>0)
                            {
                                var lista = "Nome  - Código - Média de aprovação - Número de alunos\n"; 
                                for(var i = 0; i<cursoController.cursos.length; i++)
                                {
                                    lista += cursoController.cursos[i].nome + " - " + cursoController.cursos[i].codigo + " - " + cursoController.cursos[i].mediaAprovacao + " - " + cursoController.cursos[i].alunos;
                                }
                                alert(lista);
                            }
                            else
                            {
                                alert("Não há cursos cadastrados!");
                            }
                            optMenuCurso = 9;
                            break;
                        case 9:
                            optionMenu = 9;
                            break;
                        default:
                            alert("Selecione apenas opções válidas!");
                            optMenuCurso = 9;
                            break;
                    }
                } while(optMenuCurso!=9);
                break;
            case 2:
                var optMenuAluno = Number(prompt("ALUNO\n Digite a opção desejada: \n 1 - Cadastrar\n 2 - Excluir\n 3 - Listar\n 9 - Voltar"));
                do{
                    switch(optMenuAluno)
                    {
                        case 1:
                            do
                            {
                                var codigo = parseInt(prompt("Digite o codigo do aluno (apenas numeros): "));
                            }while(isNaN(codigo));
                            var nome = prompt("Digite o nome do aluno: ");
                            do
                            {
                            var curso = parseInt(prompt("Digite o codigo do curso (apenas numeros): "));
                            }while(isNaN(curso));
                            if(cursoController.cursos.length>0 && cursoController.cursos.find(aux => aux.codigo == curso))
                            {
                                for(var i = 0; i<cursoController.cursos.length; i++)
                                {
                                    if(cursoController.cursos[i].codigo == curso)
                                    {
                                        curso = cursoController.cursos[i];
                                        cursoController.cursos[i].alunos++;
                                    }
                                }
                            }
                            else
                            {
                                alert("o curso especificado não foi encontrado no sistema");
                                optMenuAluno = 9;
                                break;
                            }
                            var cidade = prompt("Digite a cidade: ");
                            var estado = prompt("Digite o estado: ");
                            var aluno = new Aluno(codigo, nome, curso, cidade, estado);
                            if(alunoController.inserir(aluno))
                            {
                                alert("aluno cadastrado com sucesso!");
                            }
                            else
                            {
                                alert("um aluno com esse código já foi cadastrado");
                            }
                            optMenuAluno = 9;
                            break;
                        case 2:
                            do
                            {
                                var codigo = parseInt(prompt("Digite o codigo do curso (apenas numeros): "));
                            }while(isNaN(codigo));
                            if(alunoController.remover(codigo))
                            {
                                alert("Aluno removido com sucesso");
                            }
                            else
                            {
                                alert("O aluno não consta no sistema!");
                            }
                            optMenuAluno = 9;                            
                            break;
                        case 3:
                            if(alunoController.alunos.length>0)
                            {
                                var lista = "Nome  - Código - Curso - Cidade - Estado - Faltas - Notas\n"; 
                                for(var i = 0; i<alunoController.alunos.length; i++)
                                {
                                    if(alunoController.alunos[i].falta == undefined)
                                    {
                                        var faltas = "não atribuidas";
                                        var notas = ["n/a", "n/a", "n/a", "n/a"];
                                    }
                                    else
                                    {
                                        var faltas = alunoController.alunos[i].falta;
                                        var notas = [alunoController.alunos[i].nota[0], alunoController.alunos[i].nota[1], alunoController.alunos[i].nota[2], alunoController.alunos[i].nota[3]];
                                    }
                                    lista += alunoController.alunos[i].nome + " - " + alunoController.alunos[i].codigo + " - " + alunoController.alunos[i].curso.nome + " - " + alunoController.alunos[i].cidade + " - " + alunoController.alunos[i].estado + " - " + faltas + " - " + notas[0] + " " + notas[1] + " " + notas[2] + " " + notas[3] + "\n";
                                }
                                alert(lista);
                            }
                            else
                            {
                                alert("Não há alunos cadastrados!");
                            }
                            optMenuAluno = 9;
                            break;
                        case 9:
                            optionMenu = 9;
                            break;
                        default:
                            alert("Selecione apenas opções válidas!");
                            optMenuAluno = 9;
                            break;
                    }
                } while(optMenuAluno!=9);
                break;
            case 3:
                do
                {
                    var codigo = parseInt(prompt("Digite o código do aluno (apenas numeros): "));
                }while(isNaN(codigo));
                console.log(alunoController.alunos.find(aux => aux.codigo == codigo));
                if(alunoController.alterar(alunoController.alunos.find(aux => aux.codigo == codigo)))
                {
                    alert("aluno alterado com sucesso!");
                }
                else
                {
                    alert("o código do aluno não consta no banco de dados");
                }
                optionMenu = 9;
                break;
            case 4:
                var relatNota = Number(prompt(""));
                break;
            case 9:
                break;
            default:
                alert("Selecione apenas opções válidas!");
                optionMenu = 9;
                break;
        }
    } while(optionMenu!=9);
    }
}

window.onload = main();