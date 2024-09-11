import { BoneMetricsDocument } from './schemas/bone.schema';
import { ClientSession, Document, FilterQuery, Model, Query, QueryOptions, UpdateQuery } from 'mongoose';
import { BrainMetricsDocument } from './schemas/brain.schema';
import { EyesMetricsDocument } from './schemas/eyes.schema';
import { HeartMetricsDocument } from './schemas/heart.schema';
import { KidneyMetricsDocument } from './schemas/kidney.schema';
import { LiverMetricsDocument } from './schemas/liver.schema';
import { SkinMetricsDocument } from './schemas/skin.schema';
import { TeethMetricsDocument } from './schemas/teeth.schema';
import { Departments } from '../doctor/enums';
export declare class DiagnosisService {
    private readonly _boneMetricsModel;
    private readonly _brainMetricsModel;
    private readonly _eyesMetricsModel;
    private readonly _heartMetricsModel;
    private readonly _kidneyMetricsModel;
    private readonly _liverMetricsModel;
    private readonly _skinMetricsModel;
    private readonly _teethMetricsModel;
    constructor(_boneMetricsModel: Model<BoneMetricsDocument>, _brainMetricsModel: Model<BrainMetricsDocument>, _eyesMetricsModel: Model<EyesMetricsDocument>, _heartMetricsModel: Model<HeartMetricsDocument>, _kidneyMetricsModel: Model<KidneyMetricsDocument>, _liverMetricsModel: Model<LiverMetricsDocument>, _skinMetricsModel: Model<SkinMetricsDocument>, _teethMetricsModel: Model<TeethMetricsDocument>);
    mapDepartmentToModel(department: Departments): Promise<Model<any, {}, {}, {}, any, any>>;
    populate<T>(model: Query<any, T>): Promise<any>;
    createDiagnosis<T>(data: T, department: Departments, session?: ClientSession): Promise<Document>;
    getSingleDiagnosis<T extends Document>(filter: FilterQuery<T>, department: Departments): Promise<T>;
    getMultipleDiagnosis<T extends Document>(filter: FilterQuery<T>, department: Departments): Promise<T[]>;
    updateDiagnosis<T extends Document>(filter: FilterQuery<T>, update: UpdateQuery<T>, department: Departments, options?: QueryOptions): Promise<T>;
    deleteDiagnosis<T extends Document>(filter: FilterQuery<T>, department: Departments, options: QueryOptions): Promise<T>;
}
