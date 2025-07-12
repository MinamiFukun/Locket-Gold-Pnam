// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  @Minami Fukun ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],
obj=JSON.parse($response.body);
obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";
var pnam={
  is_sandbox:!1,
  ownership_type:"PURCHASED",
  billing_issues_detected_at:null,
  period_type:"normal",
  expires_date:"2099-12-18T01:04:17Z",
  grace_period_expires_date:null,
  unsubscribe_detected_at:null,
  original_purchase_date:"2025-07-11T01:04:18Z",
  purchase_date:"2025-07-11T01:04:17Z",
  store:"app_store"
},
pnam2025={
  grace_period_expires_date:null,
  purchase_date:"2025-07-11T01:04:17Z",
  product_identifier:"com.pnam.premium.yearly",
  expires_date:"2099-12-18T01:04:17Z"};
const match=Object.keys(mapping).find(e=>ua.includes(e));
if(match){let[e,s]=mapping[match];
  s?(pnam2025.product_identifier=s,
    obj.subscriber.subscriptions[s]=pnam):obj.subscriber.subscriptions["com.pnam.premium.yearly"]=pnam,
    obj.subscriber.entitlements[e]=pnam2025
  }
else obj.subscriber.subscriptions["com.pnam.premium.yearly"]=pnam,obj.subscriber.entitlements.pro=pnam2025;
$done({body:JSON.stringify(obj)});