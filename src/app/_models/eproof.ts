export class EProof {
  id: number;
  customer_code: string; //CustNo
  ext_ref_no: string; //CustPO
  trans_no: string; //OrderNo
  trans_date: string; //OrderDate
  net_amt: string; //NetAmt
  order_status: string; //OrderStatus
  artwork_status: string; //ArtStatus
  payment_status: string; //PayStatus
  shipping_status: string; //ShipStatus
  ship_amt: string; //ShipQty 
  ship_date: string; //ShipDate
  tracking_no: string; //Tracking
  workflow_location: string;
  trans_type: string;
  accounting_status: string;
  trans_type_desc: string;
  sub_ref_type: string;
  total_rs: number;
}