import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
    import { ItemLista } from './item-lista';
    import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  standalone: true,
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  item: string = '';
  lista: ItemLista[] = [];

  adicionaritem(){
    let itemlista = new ItemLista();
    itemlista.nome = this.item;
    itemlista.id = this.lista.length + 1;
    this.lista.push(itemlista);
    this.item = '';
    

    
  }

  riscaItem(item: ItemLista){
    item.comprado = !item.comprado;
  }

  limparLista(){
    this.lista = [];
  }
}

