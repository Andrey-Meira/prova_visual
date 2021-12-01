import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { FormasPagamento } from 'src/app/models/formasPagamento';
import { ItemVenda } from 'src/app/models/item-venda';
import { Venda } from 'src/app/models/venda';
import { FormasPagamentoService } from 'src/app/services/FormasPagamento.service';
import { ItemService } from 'src/app/services/item.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-finalizacao',
  templateUrl: './finalizacao.component.html',
  styleUrls: ['./finalizacao.component.css']
})
export class FinalizacaoComponent implements OnInit {

  itens: ItemVenda[] = [];
  nome!: string;
  formasPagamento!: FormasPagamento[];
  formaPagamentoId!: number;

  constructor(
    private router: Router,
    private itemService: ItemService,
    private FormasPagamentoService: FormasPagamentoService,
    private vendaService: VendaService,
  ) { }

  ngOnInit(): void {

    let carrinhoId = localStorage.getItem("carrinhoId")! || "";
    this.itemService.getByCartId(carrinhoId).subscribe((itens) => {
      this.itens = itens;

      console.log(this.itens);

    });

    this.FormasPagamentoService.list().subscribe((formasPagamento) => {
      this.formasPagamento = formasPagamento;

      console.log(this.formasPagamento);

    });
  }

  comprar(): void {

    let venda: Venda = {
      cliente: this.nome,
      formaPagamentoId: this.formaPagamentoId,
      itensVenda: this.itens,
    };

    this.vendaService.create(venda).subscribe((venda) => {
      this.router.navigate(["produto/listar"]);
    });
  }

}
