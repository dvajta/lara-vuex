<?php

namespace App\Http\Controllers;


use App\Models\Category;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @param  \Illuminate\Http\Request  $request
     */
    public function index(Request $request)
    {
        $user_id = $request->get('user_id');
        $orders = Order::where('user_id', $user_id)->orderBy('id', 'desc')->paginate(2);
        return response()->json($orders, 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     * @param  \Illuminate\Http\Request  $request
     */
    public function all()
    {

        $orders = Order::orderBy('id', 'desc')->paginate(3);
        return response()->json($orders, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:13',
            'startAddress' => 'required|string',
            'endAddress' => 'required|string',
            'typePack' => 'required',
            'classification' => 'required',
            'note' => 'string'

        ]);

        $order = new Order();
        $order->end_user_name = $request->name;
        $order->end_user_phone = $request->phone;
        $order->start_address = $request->startAddress;
        $order->end_address = $request->endAddress;
        $order->type_pack = $request->typePack;
        $order->classification_id = $request->classification;
        $order->note = $request->note;
        $order->status_id = 1;
        $order->user_id = $request->user_id;
        $order->time_creation = date('Y-m-d H:i:s');

        if($order->save()){
            return response()->json($order, 200);

        }else{
            return response()->json([
                'message' => 'Ошибка при добавлении заказа!',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Order $order)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);
        $order->end_user_name = $request->name;
        $order->end_user_phone = $request->phone;
        $order->start_address = $request->startAddress;
        $order->end_address = $request->endAddress;
        $order->type_pack = $request->typePack;
        $order->classification_id = $request->classification;
        $order->note = $request->note;



        if($order->save()){
            return response()->json($order, 200);
        }else{
            return response()->json([
                'message' => 'Ошибка обновления категории',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Order $order)
    {
        if($order->delete()){
            return response()->json([
                'message' => 'Заказ успешно удалена!',
                'status_code' => 200
            ], 200);
        }else{
            return response()->json([
                'message' => 'Ошибка при удалении!',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateStatus(Request $request, Order $order)
    {

        $driver_id = $request->get('driver_id');
        $other_status = $request->get('other_status');

        if($other_status === 3){
            $order->status_id = 3;
            $order->driver_id = $driver_id;
            $order->time_delivery = date('Y-m-d H:i:s');
        }else{
            if($order->status_id === 1){
                $order->status_id = 2;
                $order->driver_id = $driver_id;
                $order->time_accept = date('Y-m-d H:i:s');
            }elseif($order->status_id === 2){
                $order->status_id = 4;
                $order->driver_id = $driver_id;
                $order->time_cancel = date('Y-m-d H:i:s');
            }elseif($order->status_id === 4){
                $order->status_id = 2;
                $order->driver_id = $driver_id;
                $order->time_accept = date('Y-m-d H:i:s');
            }
        }





        if($order->save()){
            return response()->json($order, 200);
        }else{
            return response()->json([
                'message' => 'Ошибка обновления статуса заказа',
                'status_code' => 500
            ], 500);
        }
    }
}
