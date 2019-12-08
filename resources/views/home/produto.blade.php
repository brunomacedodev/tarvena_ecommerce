@extends('layouts.app')
@section('pagina_titulo', $produto->nome)

@section('content')

<div class="container">
        <div class="card mb-3 bg-dark text-white">
            <div class="row no-gutters">
                <div class="col-md-6">
                <img src="{{ asset($produto->imagem) }}"  class="card-img" alt="...">
                </div>
                <div class="col-md-6">
                <div class="card-body text-md-right text-center">
                    <h2 class="card-title mb-md-5">{{ $produto->nome }}</h2>
                <ul class="list-intline" title="Avaliação de {{ $produto->nome }}">
                    <li class="list-inline-item"><i class="fas fa-star"></i></li>
                    <li class="list-inline-item"><i class="fas fa-star"></i></li>
                    <li class="list-inline-item"><i class="fas fa-star"></i></li>
                    <li class="list-inline-item"><i class="fas fa-star-half-alt"></i></li>
                    <li class="list-inline-item"><i class="far fa-star"></i></li>
                </ul>
                <p class="card-text small mb-md-5">{{ $produto->codigo }}</p>
                <p class="card-text small">{{ $produto->categoria }}</p>
                <p class="card-text"><strong>{{ $produto->fabricante }}</strong></p>
                <p class="card-text lead">{{ $produto->descricao }}</p>
                <p class="card-text">{{ $produto->detalhes}}</p>
                <p class="card-text"> <h2>{{ $produto->valor }}</h2></p>

                    <button class="btn btnPadrao btn-lg mb-0">COMPRAR <i class="fas fa-shopping-cart"></i></button>
                    
                </div>
                </div>
            </div>
        </div>
</div>

@endsection