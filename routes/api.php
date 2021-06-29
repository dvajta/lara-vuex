<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => 'auth'], function(){
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('logout', [AuthController::class, 'logout']);
        Route::get('profile', [AuthController::class, 'profile']);
    });
});

Route::group(['prefix' => 'user', 'middleware' => 'auth:api'], function(){

    Route::group(['middleware' => 'scope:user'], function(){
        Route::get('/user-scope', function(){
            return response()->json([
                'message' => 'User can access this',
                'status_code' => 200
            ], 200);
        });
        Route::post('store', [OrderController::class, 'store']);
        Route::post('load-orders', [OrderController::class, 'index']);
        Route::post('orders-more', [OrderController::class, 'index']);
        Route::put('update-order/{order}', [OrderController::class, 'update']);
        Route::delete('delete-order/{order}', [OrderController::class, 'destroy']);
    });

    Route::group(['middleware' => 'scope:driver'], function(){
        Route::get('/driver-scope', function(){
            return response()->json([
                'message' => 'Driver can access this',
                'status_code' => 200
            ], 200);
        });
        Route::get('driver-orders', [OrderController::class, 'all']);
        Route::get('driver-orders-more', [OrderController::class, 'all']);
        Route::post('update-status-order/{order}', [OrderController::class, 'updateStatus']);
    });

    Route::group(['middleware' => 'scope:admin'], function(){
        Route::get('/admin-scope', function(){
            return response()->json([
                'message' => 'Admin can access this',
                'status_code' => 200
            ], 200);
        });
    });


});

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::resource('categories', \App\Http\Controllers\CategoryController::class);
