<?php

use App\Modules\Member\Controllers\MemberController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Member Web Routes
|--------------------------------------------------------------------------
|
*/

Route::prefix('{team}/')
	->middleware(['auth', 'verified', 'CheckTeamIsExisting', 'ShareFlashes'])
	->group(function () {
		Route::resource('member', MemberController::class);
	});
