import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { DisciplinasComponent } from './paginas/disciplinas/disciplinas.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { EdicaoComponent } from './componentes/edicao/edicao.component';
import { ExclusaoComponent } from './componentes/exclusao/exclusao.component';
import { InclusaoComponent } from './componentes/inclusao/inclusao.component';
import { ListagemComponent } from './componentes/listagem/listagem.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { VisualizacaoComponent } from './componentes/visualizacao/visualizacao.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'disciplinas', component: DisciplinasComponent},
  {path: 'alunos', component: AlunosComponent},
  {path: 'alunos/editar/:id', component: EdicaoComponent},
  {path: 'alunos/excluir/:id', component: ExclusaoComponent},
  {path: 'alunos/incluir', component: InclusaoComponent},
  {path: 'alunos/listar', component: ListagemComponent},
  {path: 'alunos/visualizar/:id', component: VisualizacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
