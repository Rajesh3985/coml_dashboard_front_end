<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function login(Request $request)
{
    $user = DB::table('users')
        ->where('username', $request->username)
        ->where('password', $request->password)
        ->first();

    if (!$user) {
        return response()->json(['error' => 'Invalid Credentials'], 401);
    }

    return response()->json([
        'success' => true,
        'user' => $user
    ]);
}
}