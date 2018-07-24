export class PayBills {
  id: number;
  ref_trans_no: string; //
  ref_trans_date: Date; //
  customer_id: string; //
  customer_code: string; //
  trans_bk: string; //
  trans_no: string; //
  trans_date: Date; //
  item_qty: string; //
  net_amt: string; //
  term_code: string; 
  due_date: string; 
  ship_date: Date;
  shipping_code: string;
  account_period_code: string;
  ext_ref_no: string;
  ext_ref_date: Date;
  paid_amt: string;
  balance_amt: string;
  tracking_no: string;
  total_rs: number;
}