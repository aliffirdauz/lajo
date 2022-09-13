<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 299000,
                'active_period_in_month' => 3,
                'features' => json_encode([
                    'feature1',
                    'feature2',
                    'feature3',
                ]),
            ],
            [
                'name' => 'Premium',
                'price' => 599000,
                'active_period_in_month' => 6,
                'features' => json_encode([
                    'feature1',
                    'feature2',
                    'feature3',
                ]),
            ],
            [
                'name' => 'Ultimate',
                'price' => 999000,
                'active_period_in_month' => 12,
                'features' => json_encode([
                    'feature1',
                    'feature2',
                    'feature3',
                ]),
            ],
            
        ];
        SubscriptionPlan::insert($subscriptionPlan);
    }
}
