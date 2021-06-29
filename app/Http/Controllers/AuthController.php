<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'string|max:255',
            'email' => 'required|string|email',
            'password' => 'required|string|confirmed'
        ]);

        $user = new User();
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        if($user->save()){
            return response()->json([
                'message' => 'User created successfully!',
                'status_code' => 201
            ], 201 );
        }else{
            return response()->json([
                'message' => 'Some error occurred, please try again!',
                'status_code' => 500
            ], 500 );
        }
    }

    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean'
        ]);

        if(!Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return response()->json([
                'message' => 'Invalid email/password',
                'status_code' => '401'
            ], 401);
        }

        $user = $request->user();

        if($user->role == 'admin'){
            $token = $user->createToken('Personal Access Tokens', ['admin'])->accessToken;
        }elseif($user->role == 'user'){
            $token = $user->createToken('Personal Access Tokens', ['user'])->accessToken;
        }elseif($user->role == 'driver'){
            $token = $user->createToken('Personal Access Tokens', ['driver'])->accessToken;
        }

        if($token){
            return response()->json([
                'user' => $user,
                'access_token' => $token,
                'token_type' => 'Bearer',
                'status_code' => 200
            ],200);
        }else{
            return response()->json([
                'message' => 'Some error occurred, Please try again',
                'status_code' => 500
            ],500);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => 'Logout successfully!',
            'status_code' => 200
        ],200);
    }

    public function profile(Request $request)
    {
        if($request->user()){
            return response()->json($request->user(), 200);
        }

        return response()->json([
            'message' => 'Not Loggedin',
            'status_code' => 500
        ], 500);
    }
}
