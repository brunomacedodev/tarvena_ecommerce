@extends('layouts.app')
@section('pagina_produto', 'Carrinho')

@section('content')
<div class="container text-white">
    <div class="row">
        <h3>Produtos no carrinho</h3> 
    </div>

@if (Session::has('mensagem-sucesso'))
    <div class="row justify-content-center">
        <div class="col-3 alert alert-success text-center">
            <h4>{{ Session::get('mensagem-sucesso') }}</h4>
        </div>
@endif
@if (Session::has('mensagem-falha'))
<div class="col-3 alert alert-warning text-center">
    <h4>{{ Session::get('mensagem-falha') }}</h4>
</div>
</div>
@endif   
@forelse ($pedidos as $pedido)
    <div class="row p-2 justify-content-end border-bottom">
        <div class="col-md-3">
            <h5>Pedido: {{ $pedido->id }}</h5>
        </div>
        <div class="col-md-3">
            <h5>Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }}</h5>
        </div>
    </div>

    <table class="table table-hover table-dark mt-4">
        <thead class="text-center">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Qtd</th>
                <th scope="col">Produto</th>
                <th scope="col">Valor Unit.</th>
                <th scope="col">Desconto(s)</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
        @php
            $total_pedido = 0;
        @endphp`
        @foreach ($pedido->pedido_produtos as $pedido_produto)
            <tr class="text-center">
                <td>
                    <img width="100" height="100" src="{{ asset('img/img_marcacao.jpg') }}" alt="" class="rounded-circle">
                </td>
                <td>
                    <div >
                        <a href="#" onclick="carrinhoRemoverProduto({{ $pedido->id }}, {{ $pedido_produto->produto_id }}, 1 )"><i class="fas fa-minus-circle"></i></a>
                        <span>{{ $pedido_produto->qtd }}</span>
                        <a href="#" onclick="carrinhoAdicionarProduto({{ $pedido_produto->produto_id }})"><i class="fas fa-plus-circle"></i></a>
                        <a href="#" onclick="carrinhoRemoverProduto({{ $pedido->id }}, {{ $pedido_produto->produto_id }}, 0)" >Retirar produto</a>
                    </div>
                </td>
                <td>{{ $pedido_produto->produto->nome }}</td>
                <td>R$ {{ number_format($pedido_produto->produto->valor, 2, ',', '.') }}</td>
                <td>R$ {{ number_format($pedido_produto->descontos, 2, ',', '.') }}</td>
            @php
                $total_produto = $pedido_produto->valores - $pedido_produto->descontos;
                $total_pedido += $total_produto;
            @endphp
                <td>R$ {{ number_format($total_produto, 2, ',', '.') }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>
    <div class="row justify-content-md-end border-bottom">
        <strong class="mr-2">Total do pedido:</strong>
        <span class="">R$ {{ number_format($total_pedido, 2, ',', '.') }}</span>
    </div>
    <div class="row justify-content-md-end mt-2">
        <form method="POST" action="{{ route('carrinho.desconto') }}">
            {{ csrf_field() }}
            <input type="hidden" name="pedido_id" value="{{ $pedido->id }}">
            <strong class="mr-2">Cupom de desconto: </strong>
            <input class="mr-2" type="text" name="cupom">
            <button class="btn btnPadrao">Validar</button>
        </form>
    </div>
    <div class="row justify-content-md-end mt-2">
        <a class="btn btn-lg btnPadrao mr-3" href="{{ route('index') }}">Continuar comprando</a>
        <form method="POST" action="{{ route('carrinho.concluir') }}">
            {{ csrf_field() }}
            <input type="hidden" name="pedido_id" value="">
            <button type="submit" class="btn btn-lg btnPadrao">
                Concluir compra
            </button>   
        </form>
    </div>
    @empty
        <h5 class="text-white">Não há nenhum pedido no carrinho</h5>
    @endforelse
    <form id="form-remover-produto" method="POST" action="{{ route('carrinho.remover') }}">
        {{ csrf_field() }}
        {{ method_field('DELETE') }}
        <input type="hidden" name="pedido_id">
        <input type="hidden" name="produto_id">
        <input type="hidden" name="item">
    </form>
    <form id="form-adicionar-produto" method="POST" action="{{ route('carrinho.adicionar') }}">
        {{ csrf_field() }}
        <input type="hidden" name="id">
    </form>
</div>
@push('scripts')
    <script type="text/javascript" src="/js/carrinho.js"></script>
@endpush
@endsection