<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBannersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('banners', function (Blueprint $table) {
            $table->increments('id');   
            $table->string('name');   
            $table->string('parent_page')->nullable();   
            $table->longText('header_text')->nullable();   
            $table->longText('sub_text')->nullable();   
            $table->string('img')->nullable();   
            $table->string('visibility')->default('hidden');   
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
        Schema::dropIfExists('banners');
    }
}
