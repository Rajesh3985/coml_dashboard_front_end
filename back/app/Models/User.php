<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    // Table name
    protected $table = 'users';

    // Disable timestamps (if not using created_at, updated_at)
    public $timestamps = false;

    // Mass assignable fields
    protected $fillable = [
        'username',
        'password'
    ];
}