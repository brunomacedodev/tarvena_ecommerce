<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdutosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('produtos')->insert([
            'nome' => 'FIFA 20 - Xbox One',
            'codigo' => '8000',
            'fabricante' => 'Eletronics Arts (EA)',
            'categoria' => 'games',
            'valor' => '199',
            'descricao' => 'FIFA 20 inova no jogo inteiro.',
            'detalhes' => 'Dimensões do produto: 1,5 x 13,5 x 17 cm ; 4,54 g',
            'ativo' => 'S',
            'imagem' => 'img/seed_games.jpg'
        ]);
        DB::table('produtos')->insert([
            'nome' => 'Action Figure Dark Souls',
            'codigo' => '8010',
            'fabricante' => 'Bandai Banpresto',
            'categoria' => 'colecionaveis',
            'valor' => '258',
            'descricao' => 'Figura plástica.',
            'detalhes' => 'Material: pvc, tamanho: 20 cm',
            'ativo' => 'S',
            'imagem' => 'img/seed_colecionaveis.jpg'
        ]);
        DB::table('produtos')->insert([
            'nome' => 'HD SSD Kingston',
            'codigo' => '8020',
            'fabricante' => 'Kingston',
            'categoria' => 'informatica',
            'valor' => '305',
            'descricao' => 'Desempenho até 10x mais rápido que um HD convencional, uma vez que não possui disco',
            'detalhes' => 'Tamanho do HD: 480 GB',
            'ativo' => 'S',
            'imagem' => 'img/seed_informatica.jpg'
        ]);
        DB::table('produtos')->insert([
            'nome' => 'Construindo Aplicação Web',
            'codigo' => '8030',
            'fabricante' => 'William Alves',
            'categoria' => 'livros',
            'valor' => '90',
            'descricao' => 'Este livro de banco de dados MySQL e a linguagem PHP.',
            'detalhes' => 'Capa comum 520 páginas',
            'ativo' => 'S',
            'imagem' => 'img/seed_livro.jpg'
        ]);
        DB::table('produtos')->insert([
            'nome' => 'Moletom Criativa Urbana',
            'codigo' => '8040',
            'fabricante' => 'Nerd Geek',
            'categoria' => 'moda',
            'valor' => '97',
            'descricao' => 'Fabricado em material confortável ao vestir e macio ao toque.',
            'detalhes' => 'Moletom canguru quentinho, macio e confortável.',
            'ativo' => 'S',
            'imagem' => 'img/seed_moda.jpg'
        ]);
        DB::table('produtos')->insert([
            'nome' => 'Vitrola com USB e Bluetooth',
            'codigo' => '8050',
            'fabricante' => 'Raveo',
            'categoria' => 'musica',
            'valor' => '385',
            'descricao' => 'O toca-discos da vitrola.',
            'detalhes' => 'Vitrola Raveo Sonetto, Adaptador de Tensão 5 Volts.',
            'ativo' => 'S',
            'imagem' => 'img/seed_musica.jpg'
        ]);
    }
}

