<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        return response()->json([
            'message'=>'success',
            'data'=>Transaction::where('user_id',$id)->get()
        ],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'user_id'=>'required|numeric',
            'product_name'=>'required|max:45',
            'product_price'=>'required|numeric',
            'product_amount'=>'required|numeric',
            'total'=>'required|numeric'
        ]);
        try {
            $transaction = Transaction::create([
                'user_id'=>$request->user_id,
                'product_name'=>$request->product_name,
                'product_price'=>$request->product_price,
                'product_amount'=>$request->product_amount,
                'total'=>$request->total
            ]);
            return response()->json([
                'message'=>'success',
                'data'=>$transaction
            ],201);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'message'=>'failed',
                'error'=>$th
            ],400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Transaction $transaction)
    {
        try {
            $transaction->update([
                'status'=>'process'
            ]);
            return response()->json([
                'message'=>'success',
                'data'=>Transaction::where('user_id',$request->user_id)->get()
            ],200);
        } catch (\Throwable $th) {
            //throw $th;
            return response()->json([
                'message'=>'failed',
                'error'=>$th
            ],400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Transaction  $transaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
