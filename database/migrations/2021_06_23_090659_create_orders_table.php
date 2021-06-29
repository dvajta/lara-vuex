<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id', false, true);
            $table->integer('status_id', false, true);
            $table->string('start_address');
            $table->string('end_address');
            $table->integer('type_pack', false, true)->nullable();
            $table->integer('classification_id', false, true)->nullable();
            $table->text('note')->nullable();
            $table->timestamp('time_creation')->nullable();
            $table->timestamp('time_cancel')->nullable();
            $table->timestamp('time_accept')->nullable();
            $table->timestamp('time_delivery')->nullable();
            $table->string('end_user_phone');
            $table->string('end_user_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
