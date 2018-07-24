export class OrderDetails {
  id: number;
  trans_no: string;
  sales_order_id: number;
  item_qty: number;
  catalog_item_code: string;
  item_description: string;
  item_price: number;
  attributes: Attributes;
}

export class SelectedAttributes {
  catalog_item_id: number;
  catalog_attribute_code: string;
  catalog_attribute_value_code: string;
  remarks: string;
}

export class Attributes{
  catalog_attribute_id: string;
  catalog_attribute_code: string;
  catalog_attribute_setup_item_id: string;
  catalog_attribute_setup_item_code: string;
  catalog_attribute_setup_item_id2: string;
  catalog_attribute_setup_item_code2: string;
  selected_attributes: SelectedAttributes;
  selected_attribute_value_code: string;
  selected_attribute_remarks: string;
  attribute_values: AttributeValues;
}

export class AttributeValues{
  catalog_attribute_value_id: string;
  catalog_attribute_value_code: string;
  name: string;
  setup_item_code: string;
  setup_item_id: string;
  setup_item_code2: string;
  setup_item_id2: string;
}
