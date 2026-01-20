<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\GoodsController;

Route::post('/login', [AuthController::class, 'login']);

// GOODS ROUTES
Route::post('/goods/store', [GoodsController::class, 'store']);
Route::post('/goods/list', [GoodsController::class, 'index']);
Route::post('/goods/view', [GoodsController::class, 'show']);
Route::post('/goods/update', [GoodsController::class, 'update']);
Route::post('/goods/delete', [GoodsController::class, 'destroy']);