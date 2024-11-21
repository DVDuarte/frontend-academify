import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { AlunosComponent } from './paginas/alunos/alunos.component';
import { DisciplinasComponent } from './paginas/disciplinas/disciplinas.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { TopoComponent } from './componentes/topo/topo.component';
import { ListagemComponent } from './componentes/listagem/listagem.component';
import { EdicaoComponent } from './componentes/edicao/edicao.component';
import { VisualizacaoComponent } from './componentes/visualizacao/visualizacao.component';
import { InclusaoComponent } from './componentes/inclusao/inclusao.component';
import { ExclusaoComponent } from './componentes/exclusao/exclusao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlunosComponent,
    DisciplinasComponent,
    RodapeComponent,
    TopoComponent,
    ListagemComponent,
    EdicaoComponent,
    VisualizacaoComponent,
    InclusaoComponent,
    ExclusaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
