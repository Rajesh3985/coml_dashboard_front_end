<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('goods', function (Blueprint $table) {
            $table->id();
            $table->string('from_station');
            $table->string('to_station');
            $table->string('commodity');
            $table->integer('wagons');
            $table->string('wagon_type');
            $table->decimal('tonnage', 10, 2);
            $table->decimal('freight', 15, 2);
            $table->string('rr_number');
            $table->date('placement_date');
            $table->time('placement_time');
            $table->dateTime('free_time_from');
            $table->dateTime('free_time_to');
            $table->date('release_date');
            $table->time('release_time');
            $table->integer('kms');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('goods');
    }
};
