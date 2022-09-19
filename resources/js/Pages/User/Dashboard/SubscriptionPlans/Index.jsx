import Authenticated from "@/Layouts/Authenticated/Index"
import SubscriptionCard from "@/Components/SubscriptionCard"
import { Inertia } from "@inertiajs/inertia"
import { Head } from "@inertiajs/inertia-react"

export default function SubscriptionPlan({ auth, subscriptionPlans, env }) {
    const selectSubscription = id => {
        Inertia.post(route("user.dashboard.subscriptionPlan.userSubscribe", { subscriptionPlan:id }), 
        {}, 
        {only:["userSubscription"], 
        onSuccess:({props})=>{
            onSnapMidtrans(props.userSubscription);
        }});
    };

    const onSnapMidtrans = userSubscription => {
        snap.pay(userSubscription.snap_token, {
            onSuccess: function(result){
                Inertia.visit(route("user.dashboard.index"))
              },
              // Optional
              onPending: function(result){
                console.log({result});
              },
              // Optional
              onError: function(result){
                console.log({result});
              }
        })
    }
    return (
        <Authenticated auth={auth}>
            <Head>
            <script src="https://app.sandbox.midtrans.com/snap/snap.js" data-client-key={env.MIDTRANS_CLIENTKEY}></script>
                <title>Payments</title>
            </Head>
            {/* <div className="ml-[300px] px-[50px]"> */}
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionPlans.map((subscriptionPlans) => (
                        <SubscriptionCard name={subscriptionPlans.name} price={subscriptionPlans.price} durationInMonth={subscriptionPlans.active_period_in_month} features={JSON.parse(subscriptionPlans.features)} isPremium={subscriptionPlans.name == 'Premium'} key={subscriptionPlans.id} onSelectSubscription={()=> selectSubscription(subscriptionPlans.id)} />
                    ))}
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
            {/* </div> */}
        </Authenticated>
    )
}