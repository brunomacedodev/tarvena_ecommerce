{{-- @extends('layouts.app')
@section('pagina_titulo', 'Compras' )

@section('content')

<div class="container">
    <div class="row">
        <h3 class="col text-white">Minhas compras</h3>
        @if (Session::has('mensagem-sucesso'))
            <div class="card-panel green">{{ Session::get('mensagem-sucesso') }}</div>
        @endif
        @if (Session::has('mensagem-falha'))
            <div class="card-panel red">{{ Session::get('mensagem-falha') }}</div>
        @endif
        <div class="divider"></div>
        <div class="row col s12 m12 l12">
            <h4 class="text-white">Compras concluídas</h4>
            @forelse ($compras as $pedido)
                <h5 class="col l6 s12 m6"> Pedido: {{ $pedido->id }} </h5>
                <h5 class="col l6 s12 m6"> Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }} </h5>
                <form method="POST" action="{{ route('carrinho.cancelar') }}">
                    {{ csrf_field() }}
                    <input type="hidden" name="pedido_id" value="{{ $pedido->id }}">
                    <table>
                        <thead>
                            <tr>
                                <th colspan="2"></th>
                                <th>Produto</th>
                                <th>Valor</th>
                                <th>Desconto</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        @php
                            $total_pedido = 0;
                        @endphp
                        @foreach ($pedido->pedido_produtos_itens as $pedido_produto)
                            @php
                                $total_produto = $pedido_produto->valor - $pedido_produto->desconto;
                                $total_pedido += $total_produto;
                            @endphp
                            <tr>
                                <td class="center">
                                    @if($pedido_produto->status == 'PA')
                                        <p class="center">
                                            <input type="checkbox" id="item-{{ $pedido_produto->id }}" name="id[]" value="{{ $pedido_produto->id }}" />
                                            <label for="item-{{ $pedido_produto->id }}">Selecionar</label>
                                        </p>
                                    @else
                                        <strong class="red-text">CANCELADO</strong>
                                    @endif
                                </td>
                                <td>
                                    <img width="100" height="100" src="{{ $pedido_produto->produto->imagem }}">
                                </td>
                                <td>{{ $pedido_produto->produto->nome }}</td>
                                <td>R$ {{ number_format($pedido_produto->valor, 2, ',', '.') }}</td>
                                <td>R$ {{ number_format($pedido_produto->desconto, 2, ',', '.') }}</td>
                                <td>R$ {{ number_format($total_produto, 2, ',', '.') }}</td>
                            </tr>
                        @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td><strong>Total do pedido</strong></td>
                                <td>R$ {{ number_format($total_pedido, 2, ',', '.') }}</td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <button type="submit" class="btn-large red col l12 s12 m12 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Cancelar itens selecionados">
                                        Cancelar
                                    </button>   
                                </td>
                                <td colspan="3"></td>
                            </tr>
                        </tfoot>
                    </table>
                </form>
            @empty
                <h5 class="center text-white">
                    @if ($cancelados->count() > 0)
                        Neste momento não há nenhuma compra valida.
                    @else
                        Você ainda não fez nenhuma compra.
                    @endif
                </h5>
            @endforelse
        </div>
        <div class="row col s12 m12 l12">
            <div class="divider"></div>
            <h4 class="text-white">Compras canceladas</h4>
            @forelse ($cancelados as $pedido)
                <h5 class="col l2 s12 m2"> Pedido: {{ $pedido->id }} </h5>
                <h5 class="col l5 s12 m5"> Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }} </h5>
                <h5 class="col l5 s12 m5"> Cancelado em: {{ $pedido->updated_at->format('d/m/Y H:i') }} </h5>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Desconto</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $total_pedido = 0;
                        @endphp
                        @foreach ($pedido->pedido_produtos_itens as $pedido_produto)
                            @php
                                $total_produto = $pedido_produto->valor - $pedido_produto->desconto;
                                $total_pedido += $total_produto;
                            @endphp
                        <tr>
                            <td>
                                <img width="100" height="100" src="{{ $pedido_produto->produto->imagem }}">
                            </td>
                            <td>{{ $pedido_produto->produto->nome }}</td>
                            <td>R$ {{ number_format($pedido_produto->valor, 2, ',', '.') }}</td>
                            <td>R$ {{ number_format($pedido_produto->desconto, 2, ',', '.') }}</td>
                            
                            <td>R$ {{ number_format($total_produto, 2, ',', '.') }}</td>
                        </tr>
                        @endforeach
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3"></td>
                            <td><strong>Total do pedido</strong></td>
                            <td>R$ {{ number_format($total_pedido, 2, ',', '.') }}</td>
                        </tr>
                    </tfoot>
                </table>
            @empty
                <h5 class="center text-white">Nenhuma compra ainda foi cancelada.</h5>
            @endforelse
        </div>
    </div>

</div>

@endsection --}}

@extends('layouts.app')
@section('pagina_titulo', "Minhas compras")

@section('content')

<div class="container text-white">
    <div class="row">
        <h3>Minhas compras</h3>
    </div>
    
    @if (Session::has('mensagem-sucesso'))
    <div class="row justify-content-center">
        <div class="col-6 alert alert-success text-center">
            <h4>{{ Session::get('mensagem-sucesso') }}</h4>
        </div>
        @endif
        @if (Session::has('mensagem-falha'))
        <div class="col-3 alert alert-warning text-center">
            <h4>{{ Session::get('mensagem-falha') }}</h4>
        </div>
    </div>
    @endif
    <h4 class="mt-4">Compras concluídas</h4>
    @forelse ($compras as $pedido)
    <div class="row p-2 justify-content-end border-bottom">
        <div class="col-md-3">
            <h5>Pedido: {{ $pedido->id }}</h5>
        </div>
        <div class="col-md-3">
            <h5>Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }}</h5>
        </div>
    </div>
    <form method="POST" action="{{ route('carrinho.cancelar') }}">
        {{ csrf_field() }}
        <input type="hidden" name="pedido_id" value="{{ $pedido->id }}">
        <table class="table table-hover table-dark table-borderless mt-4">
            <thead class="text-center">
                <tr>
                    <th></th>
                    <th scope="col"></th>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Desconto</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $total_pedido = 0;
                @endphp
                
                @foreach ($pedido->pedido_produtos_itens as $pedido_produto)
                    @php
                        $total_produto = $pedido_produto->valor - $pedido_produto->desconto;
                        $total_pedido += $total_produto;
                    @endphp
                <tr class="text-center">
                    <td>
                        @if($pedido_produto->status == 'PA')
                            <p class="center">
                                <input type="checkbox" id="item-{{ $pedido_produto->id }}" name="id[]" value="{{ $pedido_produto->id }}" />
                                <label for="item-{{ $pedido_produto->id }}">Selecionar</label>
                            </p>
                        @else
                            <strong class="red-text">CANCELADO</strong>
                        @endif
                    </td>
                    <td>
                        <img width="100" height="100" src="{{ $pedido_produto->produto->imagem }}">
                    </td>
                    <td>{{ $pedido_produto->produto->nome }}</td>
                    <td>R$ {{ number_format($pedido_produto->valor, 2, ',', '.') }}</td>
                    <td>R$ {{ number_format($pedido_produto->desconto, 2, ',', '.') }}</td>
                    <td>R$ {{ number_format($total_produto, 2, ',', '.') }}</td>
                </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <strong>Total do pedido</strong>
                    </td>
                    <td>R$ {{ number_format($total_pedido, 2, ',', '.')}}</td>
                </tr>
                <tr class='text-center'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button type="submit" class="btn btnPadrao" title="Cancelar itens selecionados">Cancelar</button></td>
                </tr>
            </tfoot>
        </table>
    </form>
    @empty
    <div class="row text-center">
        <h5 class="center">
            @if ($cancelados->count() > 0)
                Neste momento não há nenhuma compra válida.
            @else
                Você ainda não fez nenhuma compra.
            @endif
        </h5>
    </div>
    @endforelse

    <h4 class="mt-5">Compras Canceladas</h4>
    @forelse ($cancelados as $pedido)
        <div class="col-md-3">
            <h5>Pedido: {{ $pedido->id }}</h5>
        </div>
        <div class="col-md-3">
            <h5>Criado em: {{ $pedido->created_at->format('d/m/Y H:i') }}</h5>
        </div>
        <div class="col-md-3">
            <h5>Cancelado em: {{ $pedido->updated_at->format('d/m/Y H:i') }}</h5>
        </div>
        <table class="table table-hover table-dark table-borderless mt-4">
            <thead class="text-center">
                <tr>
                    <th></th>
                    <th scope="col"></th>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Desconto</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $total_pedido = 0;
                @endphp
                
                @foreach ($pedido->pedido_produtos_itens as $pedido_produto)
                    @php
                        $total_produto = $pedido_produto->valor - $pedido_produto->desconto;
                        $total_pedido += $total_produto;
                    @endphp
                <tr class="text-center">
                    <td>
                        <img width="100" height="100" src="{{ $pedido_produto->produto->imagem }}">
                    </td>
                    <td>{{ $pedido_produto->produto->nome }}</td>
                    <td>R$ {{ number_format($pedido_produto->valor, 2, ',', '.') }}</td>
                    <td>R$ {{ number_format($pedido_produto->desconto, 2, ',', '.') }}</td>
                    <td>R$ {{ number_format($total_produto, 2, ',', '.') }}</td>
                </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <strong>Total do pedido</strong>
                    </td>
                    <td>R$ {{ number_format($total_pedido, 2, ',', '.')}}</td>
                </tr>
            </tfoot>
        </table>
        @empty
            <h5 class="center">Nenhuma compra ainda foi cancelada.</h5>
        @endforelse










        
</div>


@endsection