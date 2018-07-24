export class Order {
  id: number;
  type_code: string; //CustNo
  ext_ref_no: string; //CustPO
  trans_no: string; //OrderNo
  ext_ref_date: Date; //OrderDate
  net_amt: number; //NetAmt
  order_status: string; //OrderStatus
  artwork_status: string; //ArtStatus
  payment_status: string; //PayStatus
  shipping_status: string; //ShipStatus
  ship_qty: number; //ShipQty
  estimated_ship_date: string; //ShipDate
  tracking_no: string; //Tracking
  trans_date: Date;
  paper_proof_status: string;
  rushorder_flag: string;
  shipping_code: string;
  order_flagged: string;
  bill_name: string;
  bill_address1: string;
  bill_city: string;
  bill_state: string;
  bill_country: string;
  bill_zip: string;
  ship_name: string;
  ship_address1: string;
  ship_city: string;
  ship_state: string;
  ship_country: string;
  ship_zip: string;
  salesperson_code: string;
  term_code: string;
  acknowledgment_status: string;
  ship_amt: number;
  other_amt: number;
  total_rs: number;
}
