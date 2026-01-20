<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Goods extends Model
{
    protected $table = 'goods'; // 👈 actual table name

    protected $fillable = [
        'from_station',
        'to_station',
        'commodity',
        'wagons',
        'wagon_type',
        'tonnage',
        'freight',
        'rr_number',
        'placement_date',
        'placement_time',
        'free_time_from',
        'free_time_to',
        'release_date',
        'release_time',
        'kms'
    ];
}
