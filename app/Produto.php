<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $fillable = [
        'nome',
        'codigo',
        'fabricante',
        'categoria',
        'valor',
        'descricao',
        'detalhes',
        'imagem',
        'ativo'
    ];

    public function getAvatarImageAttribute($value) {
        return $this->imagem == null ? asset('img/null.jpg') : asset($this->img_path);
    }
}
