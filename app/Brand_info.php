<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand_info extends Model
{
  protected $table = 'brand_info';
	protected $fillable = [
		'brand_name', 
  ];
}
