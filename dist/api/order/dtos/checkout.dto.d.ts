declare class CartDto {
    medicine: string;
    qty: number;
}
declare class AddressDto {
    state: string;
    city: string;
    country: string;
    streetAddress: string;
}
export declare class CheckoutDto {
    orderNotes: string;
    cart: CartDto[];
    address: AddressDto;
}
export {};
