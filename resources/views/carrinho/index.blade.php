@extends('layouts.app')
@section('pagina_titulo', 'Carrinho')

@section('content')

{{-- <div class="container">
    <div class="row">

        <h3 class="text-white col-12">Produtos no Carrinho</h3>
        @if (Session::has('mensagem-sucesso'))
        <div class="card text-white bg-success mb-3">
            <strong>{{ Session::get('mensagem-sucesso') }}</strong>
        </div>
    @endif
    @if (Session::has('mensagem-falha'))
        <div class="card text-white bg-danger mb-3">
            <strong>{{ Session::get('mensagem-falha') }}</strong>
        </div>
    @endif
    @forelse($pedidos as $pedido)
        <h5 class="col-lg-6 col-sm-2 col-md-6 text-white">Pedido: {{ $pedido->id }}</h5>
        <h5 class="col-lg-6 col-sm-2 col-md-6 text-white">Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }} </h5>
        
        <table class='table table-dark col-12'>
            <thead>
                <tr>
                    <th scope="col"><i class="fas fa-shopping-cart"></i></th>
                    <th scope="col">Qtd</th>
                    <th scope="col">Produtos</th>
                    <th scope="col">Valor Unit.</th>
                    <th scope="col">Desconto(s)</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                    @php
                        $total_pedido = 0;
                    @endphp
            @foreach($pedido->pedido_produtos as $pedido_produto)
                <tr>
                    <td>
                        <img width="100" height="100" src="{{ $pedido_produto->produto->imagem }}">
                    </td>
                    <td>
                        <div>
                            <a href="#" onclick="carrinhoRemoverProduto({{ $pedido->id }}, {{ $pedido_produto->produto_id }}, 1 )"><i class="fas fa-minus-circle"></i></a>
                            <span>{{ $pedido_produto->qtd }}</span>
                            <a href="#" onclick="carrinhoAdicionarProduto({{ $pedido_produto->produto_id }})"><i class="fas fa-plus-circle"></i></a>
                        </div>
                        <a href="" onclick="carrinhoRemoverProduto({{ $pedido->id }}, {{ $pedido_produto->produto_id }}, 0)" class="efeitoLink" data-toggle="tooltip" data-placement="right" title="Retirar produto do carrinho?">Retirar produto</a>
                    </td>
                    <td> {{ $pedido_produto->produto->nome }}</td>
                    <td>R$ {{ number_format($pedido_produto->produto->valor, 2, ',', '.') }}</td>
                    <td>R$ {{ number_format($pedido_produto->descontos, 2, ',', '.') }}</td>
                    @php
                        $total_produto = $pedido_produto->valores - $pedido_produto->descontos;
                        $total_pedido += $total_produto;
                    @endphp
                    <td>R$ {{ number_format($total_produto, 2, ',', '.') }}</td>
                    @endforeach
                </tr>
            </tbody>
        </table>
        <div class="row">
            <div class="col">
                <strong class="btn-lg text-white ">Total do pedido:</strong>
                <span class="text-white btn-lg ">R$ {{ number_format($total_pedido, 2, ',', '.') }}</span>

            </div>
        </div>
       
    <a class="btn btnPadrao" id="cadastrar" href="{{ route('index') }}" title="Voltar para a página inicial">Continuar Comprando</a>
    <form method="POST" action="{{ route('carrinho.concluir') }}">
        {{ csrf_field() }}
        <input type="hidden" name="pedido_id" value="{{ $pedido->id }}">
        <button type="submit" class="btn btnPadrao"> Finalizar compra </button>   
    </form>

    
    @empty
        <h5 class="text-white efeitoLink">O carrinho está vázio!</h5>
    @endforelse

    
    </div>
</div>
@push('scripts')
    <script type="text/javascript" src="/js/carrinho.js"></script>
@endpush --}}

<div class="container">
        <div class="row">
            <h3>Produtos no carrinho</h3>
            <hr/>
            @if (Session::has('mensagem-sucesso'))
                <div class="card text-white bg-success mb-3">
                    <strong>{{ Session::get('mensagem-sucesso') }}</strong>
                </div>
            @endif
            @if (Session::has('mensagem-falha'))
                <div class="card text-white bg-danger mb-3">
                    <strong>{{ Session::get('mensagem-falha') }}</strong>
                </div>
            @endif
            @forelse ($pedidos as $pedido)
                <h5 class="col-lg-6 col-sm-2 col-md-6 text-white"> Pedido: {{ $pedido->id }} </h5>
                <h5 class="col-lg-6 col-sm-2 col-md-6 text-white"> Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }} </h5>
                <table>
                    <thead class='table table-dark col-12 '>
                        <tr>
                            <th></th>
                            <th>Qtd</th>
                            <th>Produto</th>
                            <th>Valor Unit.</th>
                            <th>Desconto(s)</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $total_pedido = 0;
                        @endphp
                        @foreach ($pedido->pedido_produtos as $pedido_produto)
    
                        <tr class="text-white">
                            <td>
                                <img width="100" height="100" src="{{ $pedido_produto->produto->imagem }}">
                            </td>
                            <td class="">
                                <div class="">
                                    <a class="" href="#" onclick="carrinhoRemoverProduto({{ $pedido->id }}, {{ $pedido_produto->produto_id }}, 1 )">
                                            <i class="fas fa-minus-circle"></i>
                                    </a>
                                    <span class=""> {{ $pedido_produto->qtd }} </span>
                                    <a class="" href="#" onclick="carrinhoAdicionarProduto({{ $pedido_produto->produto_id }})">
                                            <i class="fas fa-plus-circle"></i>
                                    </a>
                                </div>
                                <a href="#" onclick="carrinhoRemoverProduto({{ $pedido->id }}, {{ $pedido_produto->produto_id }}, 0)" class="tooltipped" data-position="right" data-delay="50" data-tooltip="Retirar produto do carrinho?">Retirar produto</a>
                            </td>
                            <td> {{ $pedido_produto->produto->nome }} </td>
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
                <div class="row">
                    <strong class="col offset-l6 offset-m6 offset-s6 l4 m4 s4 right-align">Total do pedido: </strong>
                    <span class="col l2 m2 s2">R$ {{ number_format($total_pedido, 2, ',', '.') }}</span>
                </div>
                <div class="row">
                    <form method="POST" action="{{ route('carrinho.desconto') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="pedido_id" value="{{ $pedido->id }}">
                        <strong class="col s4 m4 l3 offset-l4 right-align">Cupom de desconto: </strong>
                        <input class="col s6 m6 l3" type="text" name="cupom">
                        <button class="btn-flat btn-large col s2 m2 l2">Validar</button>
                    </form>
                </div>
                <div class="row">
                    <a class="btn-large tooltipped col l4 s4 m4 offset-l2 offset-s2 offset-m2" data-position="top" data-delay="50" data-tooltip="Voltar a página inicial para continuar comprando?" href="{{ route('index') }}">Continuar comprando</a>
                    <form method="POST" action="{{ route('carrinho.concluir') }}">
                        {{ csrf_field() }}
                        <input type="hidden" name="pedido_id" value="{{ $pedido->id }}">
                        <button type="submit" class="btn-large blue col offset-l1 offset-s1 offset-m1 l5 s5 m5 tooltipped" data-position="top" data-delay="50" data-tooltip="Adquirir os produtos concluindo a compra?">
                            Concluir compra
                        </button>   
                    </form>
                </div>
            @empty
                <h5>Não há nenhum pedido no carrinho</h5>
            @endforelse
        </div>
    </div>
    
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
    
    @push('scripts')
        <script type="text/javascript" src="/js/carrinho.js"></script>
    @endpush
@endsection