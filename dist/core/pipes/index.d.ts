import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class MongoIdPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
export declare class Base64Pipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
