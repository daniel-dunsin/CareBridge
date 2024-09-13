import { PaginationQuery } from 'src/shared/interfaces/pagination.interface';
export declare class GetMedicineDto implements PaginationQuery {
    page: number;
    limit: number;
    search: string;
}
