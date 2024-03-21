<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
	use HasFactory, SoftDeletes;
	public $timestamps    = false;
	protected $guarded    = [];

	public static function boot()
	{
		parent::boot();

		self::creating(function ($model) {
			$model->created_at = now();
			$model->created_by = auth()->id();
		});

		self::created(function ($model) {
			$model->created_at = now();
			$model->created_by = auth()->id();
		});

		self::updating(function ($model) {
			$model->updated_at = now();
			$model->updated_by = auth()->id();
		});

		self::updated(function ($model) {
			$model->updated_at = now();
			$model->updated_by = auth()->id();
		});
	}
}
